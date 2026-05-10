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
        cycleTimer = setTimeout(() => setVideo((currentVid + 1) % videos.length), 7000);
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
    const quoteSection = document.querySelector('.quote-section');
    const blockquote   = quoteSection && quoteSection.querySelector('blockquote');

    if (blockquote) {
        // Wrap every character in a <span class="char"> using TreeWalker
        // so HTML entities and <br> tags are preserved perfectly.
        (function wrapChars(el) {
            const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
            const textNodes = [];
            let node;
            while ((node = walker.nextNode())) textNodes.push(node);

            textNodes.forEach(textNode => {
                const frag = document.createDocumentFragment();
                for (const ch of textNode.textContent) {
                    const span = document.createElement('span');
                    span.className = 'char';
                    span.textContent = ch;
                    frag.appendChild(span);
                }
                textNode.parentNode.replaceChild(frag, textNode);
            });
        })(blockquote);

        const chars = Array.from(blockquote.querySelectorAll('.char'));
        const total = chars.length;

        function updateQuote() {
            if (!total) return;
            const rect = quoteSection.getBoundingClientRect();
            const vh   = window.innerHeight;

            // Progress 0 → section just entering from bottom
            // Progress 1 → section is centred in the viewport
            const p = Math.max(0, Math.min(1,
                (vh - rect.top) / (vh + rect.height * 0.4)
            ));

            const toReveal = Math.round(p * total);

            // Left to right, top to bottom — characters colour in reading order
            chars.forEach((ch, i) => {
                ch.style.color = i < toReveal
                    ? '#1F1F1F'
                    : 'rgba(31,31,31,0.1)';
            });
        }

        // Run once on load (in case section is already in view)
        updateQuote();
        window.addEventListener('scroll', updateQuote, { passive: true });
    }


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
       4.  SERVICES TAB SWITCHER
    ──────────────────────────────────────────────────────── */
    const serviceTabs    = document.querySelectorAll('.service-tab');
    const serviceImg     = document.getElementById('service-img');
    const serviceDesc    = document.getElementById('service-desc');
    const serviceHeading = document.getElementById('service-heading');

    function fadeSwap(el, value, type) {
        el.style.opacity = '0';
        setTimeout(() => {
            if (type === 'src')  el.src       = value;
            else                 el.innerHTML  = value;
            el.style.opacity = '1';
        }, 250);
    }

    if (serviceImg)     serviceImg.style.transition     = 'opacity 0.25s ease';
    if (serviceDesc)    serviceDesc.style.transition    = 'opacity 0.25s ease';
    if (serviceHeading) serviceHeading.style.transition = 'opacity 0.25s ease';

    serviceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            serviceTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            if (serviceImg)     fadeSwap(serviceImg,     tab.dataset.img,     'src');
            if (serviceDesc)    fadeSwap(serviceDesc,    tab.dataset.desc,    'html');
            if (serviceHeading) fadeSwap(serviceHeading, tab.dataset.heading, 'html');
        });
    });


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

    const revealEls = document.querySelectorAll([
        '.quote-section',
        '.featured-work',
        '.stats-section',
        '.featured-in',
        '.services-section',
        '.why-section',
        '.cta-section',
        '.footer',
    ].join(', '));

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

});
