/* ══════════════════════════════════════════════════════════
   DECAURA  –  main.js
   ══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ──────────────────────────────────────────────────────
       1.  HERO VIDEO PERSISTENT CACHE & CYCLING ENGINE
           Uses browser Cache Storage API to store video blobs on user device.
           - On return visits: 0ms load, plays instantly from local device storage without reloading.
           - Inactive videos paused to free GPU decoding memory and eliminate lag.
           - Preloads next video ahead of crossfade transition.
           - Pauses on tab switch to preserve memory and battery.
    ──────────────────────────────────────────────────────── */
    const videos     = Array.from(document.querySelectorAll('.hero-video'));
    const indicators = Array.from(document.querySelectorAll('.indicator'));
    let   currentVid = 0;
    let   cycleTimer = null;
    let   preloadTimer = null;

    const CACHE_NAME = 'decaura-hero-videos-v1';
    const originalVideoUrls = videos.map(v => {
        const s = v.querySelector('source');
        return s ? s.src : v.src;
    });

    async function initHeroVideoCache() {
        if (!('caches' in window)) return;

        try {
            const cache = await caches.open(CACHE_NAME);

            // Step 1: Immediately attach cached blobs if already stored
            for (let i = 0; i < videos.length; i++) {
                const url = originalVideoUrls[i];
                if (!url) continue;

                const cached = await cache.match(url);
                if (cached) {
                    const blob = await cached.blob();
                    const blobUrl = URL.createObjectURL(blob);
                    const vid = videos[i];
                    const source = vid.querySelector('source');

                    const curTime = vid.currentTime;

                    if (source) source.src = blobUrl;
                    vid.src = blobUrl;

                    if (i === currentVid) {
                        vid.currentTime = curTime;
                        vid.play().catch(() => {});
                    }
                }
            }

            // Step 2: Sequentially pre-cache any video not yet in local storage
            preCacheVideos(cache);
        } catch (e) {
            // Fallback gracefully to direct streaming
        }
    }

    async function preCacheVideos(cache) {
        for (let i = 0; i < originalVideoUrls.length; i++) {
            const url = originalVideoUrls[i];
            if (!url) continue;

            try {
                const match = await cache.match(url);
                if (!match) {
                    const res = await fetch(url);
                    if (res.ok) {
                        await cache.put(url, res.clone());
                        const blob = await res.blob();
                        const blobUrl = URL.createObjectURL(blob);

                        const vid = videos[i];
                        if (vid && vid.paused && i !== currentVid) {
                            const source = vid.querySelector('source');
                            if (source) source.src = blobUrl;
                            vid.src = blobUrl;
                        }
                    }
                }
            } catch (err) {
                // Ignore network interruption, fallback handles it
            }
        }
    }

    function setVideo(index) {
        clearTimeout(cycleTimer);
        clearTimeout(preloadTimer);

        // Fade out current video and pause it after fade completes (1.3s) to save GPU/memory
        const prevVid = videos[currentVid];
        if (prevVid && prevVid !== videos[index]) {
            prevVid.classList.remove('active');
            setTimeout(() => {
                if (!prevVid.classList.contains('active')) {
                    prevVid.pause();
                }
            }, 1300);
        }

        // Reset ALL indicator fills (force reflow to restart CSS animation)
        indicators.forEach(ind => {
            ind.classList.remove('active');
            const fill = ind.querySelector('.indicator-fill');
            if (fill) {
                fill.style.animation = 'none';
                void fill.offsetHeight; // trigger reflow
                fill.style.animation   = '';
            }
        });

        currentVid = index;

        // Activate and play new video
        const v = videos[currentVid];
        if (v) {
            v.classList.add('active');
            const playPromise = v.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => { /* autoplay blocked – fallback gradient stays */ });
            }
        }

        // Activate matching indicator (starts the CSS fill animation)
        if (indicators[currentVid]) {
            indicators[currentVid].classList.add('active');
        }

        // Preload next video 4s before it switches so frames are already buffered
        const nextIndex = (currentVid + 1) % videos.length;
        preloadTimer = setTimeout(() => {
            const nextVid = videos[nextIndex];
            if (nextVid && nextVid.preload !== 'auto') {
                nextVid.preload = 'auto';
                nextVid.load();
            }
        }, 3500);

        // Schedule next video transition
        cycleTimer = setTimeout(() => setVideo(nextIndex), 8000);
    }

    if (videos.length) {
        // Start first video immediately
        videos[0].play().catch(() => {});
        if (indicators[0]) indicators[0].classList.add('active');

        // Initialize persistent device cache
        initHeroVideoCache();

        // Preload video 2 after 3.5s
        if (videos.length > 1) {
            preloadTimer = setTimeout(() => {
                if (videos[1]) {
                    videos[1].preload = 'auto';
                    videos[1].load();
                }
            }, 3500);
            cycleTimer = setTimeout(() => setVideo(1), 8000);
        }

        indicators.forEach((ind, i) => ind.addEventListener('click', () => {
            if (videos[i]) {
                videos[i].preload = 'auto';
            }
            setVideo(i);
        }));

        // Pause when tab is hidden to eliminate background battery/GPU usage
        document.addEventListener('visibilitychange', () => {
            const activeVid = videos[currentVid];
            if (!activeVid) return;
            if (document.hidden) {
                clearTimeout(cycleTimer);
                clearTimeout(preloadTimer);
                activeVid.pause();
            } else {
                activeVid.play().catch(() => {});
                cycleTimer = setTimeout(() => setVideo((currentVid + 1) % videos.length), 8000);
            }
        });
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
       5.  NAVBAR  –  sticky clone, no position switching
    ──────────────────────────────────────────────────────── */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        // Create a permanently fixed sticky clone — position never changes,
        // only transform + opacity animate (GPU-accelerated, no reflow on mobile)
        const sticky = navbar.cloneNode(true);
        sticky.classList.add('navbar--sticky');
        document.body.appendChild(sticky);

        // Wire the sticky hamburger to its own cloned nav-links panel
        const navOverlayEl   = document.querySelector('.nav-overlay');
        const stickyToggle   = sticky.querySelector('.nav-toggle');
        const stickyLinks    = sticky.querySelector('.nav-links');

        if (stickyToggle && stickyLinks && navOverlayEl) {
            stickyToggle.addEventListener('click', () => {
                stickyToggle.classList.toggle('active');
                stickyLinks.classList.toggle('active');
                navOverlayEl.classList.toggle('active');
                document.body.style.overflow = stickyLinks.classList.contains('active') ? 'hidden' : '';
            });
            [navOverlayEl, ...stickyLinks.querySelectorAll('a')].forEach(el => {
                el.addEventListener('click', () => {
                    stickyToggle.classList.remove('active');
                    stickyLinks.classList.remove('active');
                    navOverlayEl.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }

        // Threshold: 35% of viewport height (~300px on desktop), recalculates on resize
        let isVisible = false;
        let threshold = Math.round(window.innerHeight * 0.35);
        window.addEventListener('resize', () => {
            threshold = Math.round(window.innerHeight * 0.35);
        }, { passive: true });

        const onScroll = () => {
            const past  = window.scrollY > threshold;
            const atTop = window.scrollY < 50;

            if (past && !isVisible) {
                sticky.classList.add('visible');
                isVisible = true;
            } else if (atTop && isVisible) {
                sticky.classList.remove('visible');
                isVisible = false;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
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
