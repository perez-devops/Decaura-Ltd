/* ══════════════════════════════════════════════════════════
   DECAURA  –  project-detail.js
   Reads ?id= from the URL and populates the page dynamically.
   ══════════════════════════════════════════════════════════ */

const PROJECTS = {

    'ikoyi-residence': {
        title:        'Ikoyi Residence',
        location:     'Ikoyi, Lagos',
        locationYear: 'IKOYI, LAGOS — 2023',
        size:         '620 SQM',
        completion:   '18 Months',
        status:       'Completed',
        heroImage:    './images/Featured works/Featured Image 1.webp',
        brief: {
            quote:  '"We wanted a space that felt like a sanctuary — calm, unhurried, and deeply personal. A home that truly holds you."',
            client: 'Private Client, Lagos'
        },
        solution: [
            'Decaura’s approach for the Ikoyi Residence was guided by a single principle: restraint as luxury. We stripped away ornamental excess and let the quality of materials and precision of detailing speak for itself.',
            'The living spaces are anchored by hand-finished lime wash walls and custom-veined Italian marble, while subtle warm lighting creates an atmosphere of quiet opulence. Every surface was considered; every joint resolved with intention.',
            'Bespoke furniture pieces were commissioned from local artisans, blending international silhouettes with indigenous mahogany and bronze accents — reflecting Decaura’s philosophy of global sensibility, local craft.'
        ],
        fullImage:    './images/Featured works/Featured Image 2.webp',
        beforeImages: [
            './images/Featured works/Featured Image 5.webp',
            './images/Featured works/Featured Image 6.webp',
            './images/Featured works/Featured Image 7.webp'
        ],
        afterImages: [
            './images/Featured works/Featured Image 8.webp',
            './images/Featured works/Featured Image 9.webp',
            './images/Featured works/Featured Image 10.webp'
        ],
        craftHeading: 'Craftsmanship in every detail.',
        craftBody:    'Every joint, every seam, and every shadow gap was meticulously planned. We believe that true luxury is found in the things you don’t notice at first glance, but feel in the harmony of the whole.',
        craftImage:   './images/Featured works/Featured Image 3.webp',
        materials: [
            { label: 'Flooring',   value: 'Honed Travertine' },
            { label: 'Cabinetry',  value: 'Smoked Oak Veneer' },
            { label: 'Lighting',   value: 'Custom Brass Fixtures' }
        ],
        nextProject: 'banana-island-home',
        nextTitle:   'Banana Island Home'
    },

    'banana-island-home': {
        title:        'Banana Island Home',
        location:     'Banana Island, Lagos',
        locationYear: 'BANANA ISLAND, LAGOS — 2023',
        size:         '850 SQM',
        completion:   '24 Months',
        status:       'Completed',
        heroImage:    './images/Featured works/Featured Image 2.webp',
        brief: {
            quote:  '"We envisioned a home of quiet grandeur — one that impresses through understatement and endures through quality."',
            client: 'Private Client, Lagos'
        },
        solution: [
            'The Banana Island Home is Decaura’s most ambitious residential project to date — a six-bedroom estate designed from the ground up with an unwavering commitment to luxury and livability.',
            'Drawing inspiration from contemporary African architecture and refined European interiors, the design integrates sweeping volumes with intimate spaces, creating a home that feels both grand and deeply personal.',
            'Each room was conceived as a chapter in a larger narrative — connected by material continuity and a shared sense of calm that defines the Decaura signature.'
        ],
        fullImage:    './images/Featured works/Featured Image 11.webp',
        beforeImages: [
            './images/Featured works/Featured Image 6.webp',
            './images/Featured works/Featured Image 7.webp',
            './images/Featured works/Featured Image 8.webp'
        ],
        afterImages: [
            './images/Featured works/Featured Image 3.webp',
            './images/Featured works/Featured Image 4.webp',
            './images/Featured works/Featured Image 5.webp'
        ],
        craftHeading: 'Material precision at every scale.',
        craftBody:    'From the macro — sweeping ceiling heights and full-height glazing — to the micro — hand-stitched upholstery and bespoke ironmongery — every decision reflects the same level of care and considered intent.',
        craftImage:   './images/Featured works/Featured Image 12.webp',
        materials: [
            { label: 'Flooring',   value: 'Chevron White Oak' },
            { label: 'Cabinetry',  value: 'Custom Walnut Veneer' },
            { label: 'Lighting',   value: 'Lutron Integrated System' }
        ],
        nextProject: 'lagos-workspace',
        nextTitle:   'Lagos Workspace'
    },

    'lagos-workspace': {
        title:        'Lagos Workspace',
        location:     'Victoria Island – Lagos',
        locationYear: 'VICTORIA ISLAND, LAGOS — 2024',
        size:         '450 SQM',
        completion:   '14 Months',
        status:       'Completed',
        heroImage:    './images/Featured works/Featured Image 4.webp',
        brief: {
            quote:  '"We wanted a sanctuary that felt detached from the city’s chaos while embracing its horizon. A space where silence is visual and every material tells a story of craftsmanship."',
            client: 'Private Client, HNI'
        },
        solution: [
            'Decaura’s approach for the Lagos workspace centred on the concept of “Invisible Luxury.” We stripped away the ornamental excesses often found in high-end Nigerian developments, focusing instead on the purity of form and the tactile quality of raw materials.',
            'The heart of the workspace is an expansive open-plan area defined by a custom-veined Italian marble reception island and hand-finished lime wash walls. By integrating smart technology discreetly within the architectural fabric, we ensured it serves without disrupting visual serenity.',
            'Custom furniture pieces were commissioned from local artisans in Lagos, blending international minimalist silhouettes with indigenous mahogany and bronze accents — a true reflection of Decaura’s “Global Sensibility, Local Expertise” philosophy.'
        ],
        fullImage:    './images/Featured works/Featured Image 9.webp',
        beforeImages: [
            './images/Featured works/Featured Image 6.webp',
            './images/Featured works/Featured Image 7.webp',
            './images/Featured works/Featured Image 8.webp'
        ],
        afterImages: [
            './images/Featured works/Featured Image 10.webp',
            './images/Featured works/Featured Image 11.webp',
            './images/Featured works/Featured Image 12.webp'
        ],
        craftHeading: 'Craftsmanship in every detail.',
        craftBody:    'Every joint, every seam, and every shadow gap was meticulously planned. We believe that true luxury is found in the things you don’t notice at first glance, but feel in the harmony of the whole.',
        craftImage:   './images/Featured works/Featured Image 13.webp',
        materials: [
            { label: 'Cabinetry',  value: 'Custom Walnut Veneer' },
            { label: 'Flooring',   value: 'Continuous Terrazzo' },
            { label: 'Lighting',   value: 'Lutron Integrated System' }
        ],
        nextProject: 'boutique-hotel',
        nextTitle:   'Boutique Hotel'
    },

    'boutique-hotel': {
        title:        'Boutique Hotel',
        location:     'Lekki, Lagos',
        locationYear: 'LEKKI, LAGOS — 2024',
        size:         '1,200 SQM',
        completion:   '30 Months',
        status:       'Completed',
        heroImage:    './images/Featured works/Featured Image 3.webp',
        brief: {
            quote:  '"A boutique property that should feel like a private home — curated, intimate and unmistakably distinctive."',
            client: 'Hospitality Client, Lagos'
        },
        solution: [
            'The brief for this boutique hotel project was clear: create a property that transcends the conventional hotel experience and delivers something closer to a private residence for each guest.',
            'Decaura designed across all touchpoints — lobby, suites, dining areas and outdoor terraces — ensuring a cohesive narrative runs through every space. Rich textiles, artisan ceramics and warm lighting create an atmosphere of considered luxury.',
            'The project required meticulous project management alongside design leadership, coordinating over 40 specialist suppliers across Nigeria, Italy and the UAE — all delivered within timeline and budget.'
        ],
        fullImage:    './images/Featured works/Featured Image 5.webp',
        beforeImages: [
            './images/Featured works/Featured Image 6.webp',
            './images/Featured works/Featured Image 7.webp',
            './images/Featured works/Featured Image 8.webp'
        ],
        afterImages: [
            './images/Featured works/Featured Image 1.webp',
            './images/Featured works/Featured Image 2.webp',
            './images/Featured works/Featured Image 4.webp'
        ],
        craftHeading: 'Every suite, a considered space.',
        craftBody:    'Each of the 24 suites was individually designed with varying colour palettes, textiles and furniture arrangements — unified by a shared material language and a commitment to exceptional craft throughout.',
        craftImage:   './images/Featured works/Featured Image 4.webp',
        materials: [
            { label: 'Flooring',   value: 'Aged Herringbone Oak' },
            { label: 'Textiles',   value: 'Bespoke Hand-woven Fabric' },
            { label: 'Lighting',   value: 'Articulated Brass Sconces' }
        ],
        nextProject: 'ikoyi-residence',
        nextTitle:   'Ikoyi Residence'
    }

};

/* ── DOM helper ── */
function qs(id) { return document.getElementById(id); }

function populatePage(project) {
    document.title = `${project.title} – Decaura`;

    /* Hero */
    const heroImg = qs('pd-hero-img');
    heroImg.src = project.heroImage;
    heroImg.alt = project.title;
    qs('pd-category').textContent    = project.category;
    qs('pd-title').textContent       = project.title;
    qs('pd-location-year').textContent = project.locationYear;

    /* Meta bar */
    qs('pd-location').textContent   = project.location;
    qs('pd-size').textContent       = project.size;
    qs('pd-completion').textContent = project.completion;
    qs('pd-status').textContent     = project.status;

    /* Brief */
    qs('pd-brief-quote').textContent  = project.brief.quote;
    qs('pd-brief-client').textContent = project.brief.client;

    /* Solution paragraphs */
    qs('pd-solution-body').innerHTML = project.solution
        .map(p => `<p>${p}</p>`)
        .join('');

    /* Full-width image */
    const galleryImg = qs('pd-gallery-img');
    galleryImg.src = project.fullImage;
    galleryImg.alt = project.title;

    /* Before / After grids */
    qs('pd-before-grid').innerHTML = project.beforeImages
        .map(src => `<img src="${src}" alt="Before" loading="lazy" decoding="async">`)
        .join('');
    qs('pd-after-grid').innerHTML = project.afterImages
        .map(src => `<img src="${src}" alt="After" loading="lazy" decoding="async">`)
        .join('');

    /* Craftsmanship */
    const craftImg = qs('pd-craft-img');
    craftImg.src = project.craftImage;
    craftImg.alt = project.craftHeading;
    qs('pd-craft-heading').textContent = project.craftHeading;
    qs('pd-craft-body').textContent    = project.craftBody;
    qs('pd-materials').innerHTML = project.materials
        .map(m => `<span class="pd-material-label">${m.label}</span><span class="pd-material-value">${m.value}</span>`)
        .join('');

    /* Next project */
    const nextLink = qs('pd-next-link');
    nextLink.href = `./project-detail.html?id=${project.nextProject}`;
    qs('pd-next-title').textContent = project.nextTitle;
}

document.addEventListener('DOMContentLoaded', () => {

    /* ── Load project from URL ── */
    const id      = new URLSearchParams(window.location.search).get('id');
    const project = PROJECTS[id];
    if (!project) { window.location.href = './portfolio.html'; return; }
    populatePage(project);

    /* ── Navbar: transparent → solid white on scroll ── */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ── Mobile nav toggle ── */
    const navToggle  = document.querySelector('.nav-toggle');
    const navLinks   = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            navOverlay.classList.toggle('active');
        });
        navOverlay.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
        });
    }

    /* ── Scroll reveal ── */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.07 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});
