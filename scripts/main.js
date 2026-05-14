/* ══════════════════════════════════════════════════════════
   DECAURA  –  main.js
   ══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ──────────────────────────────────────────────────────
       1.  HERO VIDEO CYCLING
           Each video plays for 7 s then crossfades to the next.
           Right-side progress indicators fill over 7 s.
    ──────────────────────────────────────────────────────── */
    const videos     = Array.from(document.querySelectorAll('.hero-video'));
    const indicators = Array.from(document.querySelectorAll('.indicator'));
    let   currentVid = 0;
    let   cycleTimer = null;

    function setVideo(index) {
        // Fade out current
        videos[currentVid].classList.remove('active');

        // Reset ALL indicator fills (force reflow to restart CSS animation)
        indicators.forEach(ind => {
            ind.classList.remove('active');
            const fill = ind.querySelector('.indicator-fill');
            fill.style.animation = 'none';
            void fill.offsetHeight; // trigger reflow
            fill.style.animation   = '';
        });

        currentVid = index;

        // Activate new video
        const v = videos[currentVid];
        v.currentTime = 0;
        v.play().catch(() => { /* autoplay blocked – fallback gradient stays */ });
        v.classList.add('active');

        // Activate matching indicator (starts the CSS fill animation)
        indicators[currentVid].classList.add('active');

        // Schedule next
        clearTimeout(cycleTimer);
        const nextIndex = (currentVid + 1) % videos.length;
        
        // Preload next video 3s before it switches
        setTimeout(() => {
            videos[nextIndex].preload = 'auto';
        }, 4000);

        cycleTimer = setTimeout(() => setVideo(nextIndex), 7000);
    }

    if (videos.length) {
        videos[0].play().catch(() => {});
        indicators[0].classList.add('active');
        cycleTimer = setTimeout(() => setVideo(1), 7000);
        indicators.forEach((ind, i) => ind.addEventListener('click', () => setVideo(i)));
    }


    /* ──────────────────────────────────────────────────────
       2.  QUOTE  –  scroll-driven right-to-left char reveal
           Each character of the blockquote starts at near-invisible
           and colours in as the user scrolls, from right to left.
    ──────────────────────────────────────────────────────── */
    const revealQuotes = document.querySelectorAll('blockquote');

    revealQuotes.forEach(blockquote => {
        const section = blockquote.closest('section');
        if (!section) return;

        // Ensure we only wrap once
        if (blockquote.dataset.wrapped) return;
        blockquote.dataset.wrapped = "true";

        // Wrap characters
        (function wrapChars(el) {
            const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
            const textNodes = [];
            let node;
            while ((node = walker.nextNode())) textNodes.push(node);

            textNodes.forEach(textNode => {
                const frag = document.createDocumentFragment();
                const content = textNode.textContent;
                for (let i = 0; i < content.length; i++) {
                    const span = document.createElement('span');
                    span.className = 'char';
                    span.textContent = content[i];
                    frag.appendChild(span);
                }
                textNode.parentNode.replaceChild(frag, textNode);
            });
        })(blockquote);

        const chars = Array.from(blockquote.querySelectorAll('.char'));
        const total = chars.length;

        function updateQuote() {
            const rect = section.getBoundingClientRect();
            const vh = window.innerHeight;
            
            // Section visibility progress
            // Start revealing as section enters viewport, finish when centered
            const start = vh;
            const end = vh * 0.3;
            const progress = (start - rect.top) / (start - end);
            const p = Math.max(0, Math.min(1, progress));

            const toReveal = Math.floor(p * total);

            chars.forEach((char, i) => {
                if (i < toReveal) {
                    char.style.color = 'var(--ink-black)';
                    char.style.opacity = '1';
                } else {
                    char.style.color = 'rgba(31, 31, 31, 0.1)';
                }
            });
        }

        window.addEventListener('scroll', updateQuote, { passive: true });
        updateQuote(); // Initial check
    });


    /* ──────────────────────────────────────────────────────
       3.  STAT DRUMS  –  slot-machine scroll-up animation
           Numbers count up by scrolling a column of values
           upward, decelerating as they reach the target.
    ──────────────────────────────────────────────────────── */
    const drums = document.querySelectorAll('.stat-drum');

    drums.forEach(drum => {
        const target = parseInt(drum.dataset.target, 10);
        const inner  = drum.querySelector('.stat-drum-inner');

        // Build the number column (0 → target in steps)
        // Use ≤ 12 steps so the drum isn't too tall to animate smoothly
        const maxSteps = Math.min(target, 12);
        const steps    = [];
        for (let i = 0; i <= maxSteps; i++) {
            steps.push(Math.round((i / maxSteps) * target));
        }
        // Ensure the exact target is always the last item
        if (steps[steps.length - 1] !== target) steps[steps.length - 1] = target;

        steps.forEach(n => {
            const span = document.createElement('span');
            span.textContent = n;
            inner.appendChild(span);
        });

        // Show the first number (0) before animation
        inner.style.transform = 'translateY(0)';
    });

    // Observe stats section; trigger all drums when in view
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.querySelectorAll('.stat-drum').forEach(drum => {
                const inner    = drum.querySelector('.stat-drum-inner');
                const spans    = inner.querySelectorAll('span');
                const count    = spans.length;     // number of rows in the drum
                const drumH    = drum.offsetHeight; // height of the visible window (= 1 number)

                // Reset to top
                inner.style.transition = 'none';
                inner.style.transform  = 'translateY(0)';

                // Double-rAF ensures the browser applies the reset before the transition
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        inner.style.transition = 'transform 2s cubic-bezier(0.10, 0.80, 0.30, 1)';
                        inner.style.transform  = `translateY(-${(count - 1) * drumH}px)`;
                    });
                });
            });

            statObserver.unobserve(entry.target);
        });
    }, { threshold: 0.4 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) statObserver.observe(statsSection);


    /* ──────────────────────────────────────────────────────
       4.  SERVICES TAB SWITCHER & AUTO-CYCLE
           Services rotate every 7 seconds. Clicking a tab
           switches immediately and resets the cycle.
    ──────────────────────────────────────────────────────── */
    const serviceTabs    = Array.from(document.querySelectorAll('.service-tab'));
    const serviceImg     = document.getElementById('service-img');
    const serviceDesc    = document.getElementById('service-desc');
    const serviceHeading = document.getElementById('service-heading');
    let   currentService = 0;
    let   serviceTimer   = null;

    function fadeSwap(el, value, type) {
        if (!el) return;
        el.style.opacity = '0';
        setTimeout(() => {
            if (type === 'src')  el.src       = value;
            else                 el.innerHTML  = value;
            el.style.opacity = '1';
        }, 300);
    }

    function setService(index) {
        if (!serviceTabs.length) return;
        
        serviceTabs.forEach(t => t.classList.remove('active'));
        currentService = index;
        const activeTab = serviceTabs[currentService];
        activeTab.classList.add('active');

        // Extract data
        const h = activeTab.dataset.heading;
        const i = activeTab.dataset.img;
        const d = activeTab.dataset.desc;

        // Swap content
        fadeSwap(serviceHeading, h, 'html');
        fadeSwap(serviceImg, i, 'src');
        fadeSwap(serviceDesc, d, 'html');

        // Restart timer
        clearTimeout(serviceTimer);
        serviceTimer = setTimeout(() => setService((currentService + 1) % serviceTabs.length), 5000);
    }

    if (serviceImg)     serviceImg.style.transition     = 'opacity 0.3s ease';
    if (serviceDesc)    serviceDesc.style.transition    = 'opacity 0.3s ease';
    if (serviceHeading) serviceHeading.style.transition = 'opacity 0.3s ease';

    if (serviceTabs.length) {
        // Start the cycle
        serviceTimer = setTimeout(() => setService(1), 7000);

        serviceTabs.forEach((tab, i) => {
            tab.addEventListener('click', () => setService(i));
        });
    }



    /* ──────────────────────────────────────────────────────
       5.  NAVBAR  –  transparent → solid white on scroll
    ──────────────────────────────────────────────────────── */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // correct state immediately on page load
    }


    /* ──────────────────────────────────────────────────────
       6.  SCROLL REVEAL  –  clean, no classList API hacks
    ──────────────────────────────────────────────────────── */
    const revealStyle = document.createElement('style');
    revealStyle.textContent = `
        .reveal          { opacity:0; transform:translateY(30px); transition:opacity .75s ease,transform .75s ease; }
        .reveal.revealed { opacity:1; transform:translateY(0); }
    `;
    document.head.appendChild(revealStyle);

    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.06 });

    revealEls.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    /* ──────────────────────────────────────────────────────
       7.  TESTIMONIAL SLIDER
    ──────────────────────────────────────────────────────── */
    const tDataEl = document.getElementById('testimonial-data');
    const testimonials = tDataEl ? JSON.parse(tDataEl.textContent) : [];
    
    const tQuote   = document.getElementById('t-quote');
    const tName    = document.getElementById('t-name');
    const tTitle   = document.getElementById('t-title');
    const tAvatar  = document.getElementById('t-avatar');
    const tDisplay = document.getElementById('testimonial-display');
    const tDots    = document.getElementById('t-dots');
    const btnPrev  = document.getElementById('t-prev');
    const btnNext  = document.getElementById('t-next');

    let currentT = 0;

    function initTestimonials() {
        if (!testimonials.length || !tDots) return;
        
        // Create dots
        testimonials.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = `t-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => setTestimonial(i));
            tDots.appendChild(dot);
        });

        if (btnPrev) btnPrev.addEventListener('click', () => setTestimonial((currentT - 1 + testimonials.length) % testimonials.length));
        if (btnNext) btnNext.addEventListener('click', () => setTestimonial((currentT + 1) % testimonials.length));
    }

    function setTestimonial(index) {
        if (index === currentT) return;
        
        // Fade out
        tDisplay.style.opacity = '0';
        tDisplay.style.transform = 'translateY(10px)';

        setTimeout(() => {
            currentT = index;
            const data = testimonials[currentT];

            // Update content
            if (tQuote)  tQuote.textContent  = data.quote;
            if (tName)   tName.textContent   = data.name;
            if (tTitle)  tTitle.textContent  = data.title;
            if (tAvatar) tAvatar.src        = data.avatar;

            // Update dots
            const dots = tDots.querySelectorAll('.t-dot');
            dots.forEach((dot, i) => dot.classList.toggle('active', i === currentT));

            // Fade in
            tDisplay.style.opacity = '1';
            tDisplay.style.transform = 'translateY(0)';
        }, 400);
    }

    initTestimonials();
    
    /* ──────────────────────────────────────────────────────
       8.  MOBILE NAVIGATION TOGGLE
    ──────────────────────────────────────────────────────── */
    const navToggle  = document.querySelector('.nav-toggle');
    const navLinks   = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');
    
    if (navToggle && navLinks && navOverlay) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking links or overlay
        [navOverlay, ...navLinks.querySelectorAll('a')].forEach(el => {
            el.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

});
