/* ══════════════════════════════════════════════════════════
   DECAURA  –  about.js
   ══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── Navbar: transparent → solid white on scroll ── */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // correct state immediately on page load
    }

    /* ── Scroll reveal ── */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.07 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

});
