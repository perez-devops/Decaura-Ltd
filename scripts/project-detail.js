/* ══════════════════════════════════════════════════════════
   DECAURA  –  project-detail.js
   Reads ?id= from the URL and populates the page dynamically.
   ══════════════════════════════════════════════════════════ */

const PROJECTS = {

    'warm-memories-interior': {
        title:        'Warm Memories Interior',
        category:     'RESIDENTIAL',
        location:     'Lagos',
        locationYear: 'LAGOS — 2025',
        size:         '260 SQM',
        completion:   '8 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/Warm Memories Interior/warm-memories_1_L.webp',
        brief: {
            quote:  '"A home layered with memory and material — warm, tactile and intimately tailored for family life."',
            client: 'Private Client'
        },
        solution: [
            'Warm palettes and tactile textiles form the backbone of this residential brief — designed to feel familiar and enduring.',
            'Spatial planning prioritised family circulation with quietly elegant storage solutions and soft transitions between public and private rooms.',
            'The interiors were completed with custom joinery and layered lighting to encourage relaxed evenings and everyday comfort.'
        ],
        fullImage:    './images/Portfolio Images/Warm Memories Interior/warm-memories_9_L.webp',
        sliderImages: [
            './images/Portfolio Images/Warm Memories Interior/warm-memories_10_L.webp',
            './images/Portfolio Images/Warm Memories Interior/warm-memories_11_L.webp',
            './images/Portfolio Images/Warm Memories Interior/warm-memories_12_L.webp',
            './images/Portfolio Images/Warm Memories Interior/warm-memories_13_L.webp',
            './images/Portfolio Images/Warm Memories Interior/warm-memories_1_L.webp',
            './images/Portfolio Images/Warm Memories Interior/warm-memories_2_L.webp',
            './images/Portfolio Images/Warm Memories Interior/warm-memories_3_L.webp',
            './images/Portfolio Images/Warm Memories Interior/warm-memories_4_L.webp',
            './images/Portfolio Images/Warm Memories Interior/warm-memories_5_L.webp',
            './images/Portfolio Images/Warm Memories Interior/warm-memories_6_L.webp',
            './images/Portfolio Images/Warm Memories Interior/warm-memories_8_L.webp',
            './images/Portfolio Images/Warm Memories Interior/warm-memories_9_L.webp'
        ],
        craftHeading: 'A home shaped by tactility.',
        craftBody:    'Materials were chosen for their ability to age gracefully — plaster, soft linens and warm timber combine to form an interior that welcomes and endures.',
        craftImage:   './images/Portfolio Images/Warm Memories Interior/warm-memories_3_L.webp',
        materials: [
            { label: 'Walls',    value: 'Limewash & Hand-Finished Plaster' },
            { label: 'Upholstery', value: 'Natural Linen & Velvet' },
            { label: 'Joinery',  value: 'Custom Warm Oak' }
        ],
        nextProject: 'tuscan-luxe-lekki-phase-1',
        nextTitle:   'Tuscan Luxe, Lekki'
    },

    'tuscan-luxe-lekki-phase-1': {
        title:        'Tuscan Luxe — Lekki Phase 1',
        category:     'RESIDENTIAL',
        location:     'Lekki, Lagos',
        locationYear: 'LEKKI — 2026',
        size:         '340 SQM',
        completion:   '10 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 11, 2026, 03_26_49 PM.png',
        brief: {
            quote:  '"A warm, textured interior that borrows from Tuscan tradition while responding to Lagos climate and life."',
            client: 'Private Client'
        },
        solution: [
            'The concept reinterprets Tuscan materials — terracotta, rough-hewn timber and soft plaster — into a modern domestic language.',
            'Spaces were oriented to catch prevailing breezes and sheltered outdoor rooms were integrated as living extensions.',
            'Custom timberwork and carefully selected artisan details were used throughout to give each room a unique character.'
        ],
        fullImage:    './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 12, 2026, 11_24_51 AM.png',
        sliderImages: [
            './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 11, 2026, 03_17_00 PM.png',
            './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 11, 2026, 03_17_21 PM.png',
            './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 11, 2026, 03_22_26 PM.png',
            './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 11, 2026, 03_26_49 PM.png',
            './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 12, 2026, 10_20_48 AM.png',
            './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 12, 2026, 10_28_59 AM.png',
            './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 12, 2026, 10_29_05 AM.png',
            './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 12, 2026, 10_39_53 AM.png',
            './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 12, 2026, 10_40_00 AM.png',
            './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 12, 2026, 11_24_37 AM.png',
            './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 12, 2026, 11_24_42 AM.png',
            './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 12, 2026, 11_24_46 AM.png',
            './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 12, 2026, 11_24_51 AM.png'
        ],
        craftHeading: 'Rustic refinement.',
        craftBody:    'A restrained material palette and artisan finishes create depth and warmth while keeping the architecture visually light.',
        craftImage:   './images/Portfolio Images/Tuscan Luxe - Lekki Phase 1/ChatGPT Image Jul 12, 2026, 10_40_00 AM.png',
        materials: [
            { label: 'Surfaces', value: 'Tumbled Stone & Burnt Terracotta' },
            { label: 'Joinery',  value: 'Aged Oak & Hand-Finished Timber' },
            { label: 'Accents',  value: 'Antique Brass' }
        ],
        nextProject: 'emirati-luxury-ajah-lagos',
        nextTitle:   'Emirati Luxury, Ajah'
    },

    'emirati-luxury-ajah-lagos': {
        title:        'Emirati Luxury — Ajah, Lagos',
        category:     'RESIDENTIAL',
        location:     'Ajah, Lagos',
        locationYear: 'AJAH — 2026',
        size:         '720 SQM',
        completion:   '20 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 1.png',
        brief: {
            quote:  '"An interior language of generous scale, rich materials and a calm, jewel-like colour story."',
            client: 'Private Client'
        },
        solution: [
            'The project draws on Gulf-inspired forms and materials while being carefully adapted to local context and climate.',
            'Large reception spaces are balanced with intimate seating arrangements and high-quality bespoke joinery.',
            'Lighting and landscape were designed in parallel to ensure a cohesive transition between indoor and outdoor life.'
        ],
        fullImage:    './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 9.png',
        sliderImages: [
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 1.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 10.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 11.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 12.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 13.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 14.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 15.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 16.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 17.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 18.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 19.jpg',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 2.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 20.jpg',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 3.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 4.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 5.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 6.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 7.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 8.png',
            './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 9.png'
        ],
        craftHeading: 'Grand gestures, considered details.',
        craftBody:    'An emphasis on proportion, luxurious textiles and refined detailing ensures the home reads as both modern and timeless.',
        craftImage:   './images/Portfolio Images/Emirati Luxury - Ajah Lagos/dubai_villa 6.png',
        materials: [
            { label: 'Surfaces', value: 'Polished Stone & Gilded Accents' },
            { label: 'Upholstery', value: 'Silk & Velvet' },
            { label: 'Structure', value: 'High-Grade Timber & Steel' }
        ],
        nextProject: 'citizen-of-the-world-design',
        nextTitle:   'Citizen of the World Design'
    },

    'citizen-of-the-world-design': {
        title:        'Citizen of the World',
        category:     'RESIDENTIAL',
        location:     'Lagos',
        locationYear: 'LAGOS — 2025',
        size:         '300 SQM',
        completion:   '9 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/Citizen of the World Design/Citizen-of-the-world-1.webp',
        brief: {
            quote:  '"A layered interior language that borrows freely from global references while remaining local in its materiality."',
            client: 'Private Client'
        },
        solution: [
            'We curated a collection of pieces and materials from multiple influences and arranged them to feel cohesive and contemporary.',
            'Neutral backgrounds allow a set of carefully chosen objects and artworks to provide colour and pattern.',
            'The result is a home that feels travelled but grounded — familiar and curated in equal measure.'
        ],
        fullImage:    './images/Portfolio Images/Citizen of the World Design/Citizen-of-the-world-9.webp',
        sliderImages: [
            './images/Portfolio Images/Citizen of the World Design/Citizen-of-the-world-1.webp',
            './images/Portfolio Images/Citizen of the World Design/Citizen-of-the-world-10.webp',
            './images/Portfolio Images/Citizen of the World Design/Citizen-of-the-world-2.webp',
            './images/Portfolio Images/Citizen of the World Design/Citizen-of-the-world-3.webp',
            './images/Portfolio Images/Citizen of the World Design/Citizen-of-the-world-5.webp',
            './images/Portfolio Images/Citizen of the World Design/Citizen-of-the-world-6.webp',
            './images/Portfolio Images/Citizen of the World Design/Citizen-of-the-world-7.webp',
            './images/Portfolio Images/Citizen of the World Design/Citizen-of-the-world-8.webp',
            './images/Portfolio Images/Citizen of the World Design/Citizen-of-the-world-9.webp'
        ],
        craftHeading: 'A global domesticity.',
        craftBody:    'We aimed for interiors that feel collected rather than curated — a backdrop that lets objects and experiences take center stage.',
        craftImage:   './images/Portfolio Images/Citizen of the World Design/Citizen-of-the-world-6.webp',
        materials: [
            { label: 'Upholstery', value: 'Mixed Natural Textiles' },
            { label: 'Surfaces',   value: 'Stone & Oak' },
            { label: 'Accents',    value: 'Hand-Finished Metalwork' }
        ],
        nextProject: 'lake-side-view-design',
        nextTitle:   'Lake Side View Design'
    },

    'lake-side-view-design': {
        title:        'Lake Side View',
        category:     'RESIDENTIAL',
        location:     'Lagos',
        locationYear: 'LAGOS — 2025',
        size:         '420 SQM',
        completion:   '12 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/Lake Side View Design/close-to-the-lake_14-L.webp',
        brief: {
            quote:  '"Design that frames the view and lets the landscape become part of the interior."',
            client: 'Private Client'
        },
        solution: [
            'Large openings and careful material transitions create a seamless relationship between indoors and out.',
            'Durable finishes were selected to withstand lakeside conditions while maintaining a refined finish.',
            'The palette is restrained so that the ever-changing external view remains the hero.'
        ],
        fullImage:    './images/Portfolio Images/Lake Side View Design/close-to-the-lake_27-L.webp',
        sliderImages: [
            './images/Portfolio Images/Lake Side View Design/close-to-the-lake-1-L.webp',
            './images/Portfolio Images/Lake Side View Design/close-to-the-lake-2-L.webp',
            './images/Portfolio Images/Lake Side View Design/close-to-the-lake_14-L.webp',
            './images/Portfolio Images/Lake Side View Design/close-to-the-lake_16-L.webp',
            './images/Portfolio Images/Lake Side View Design/close-to-the-lake_17-L.webp',
            './images/Portfolio Images/Lake Side View Design/close-to-the-lake_19-L.webp',
            './images/Portfolio Images/Lake Side View Design/close-to-the-lake_20-L.webp',
            './images/Portfolio Images/Lake Side View Design/close-to-the-lake_22-L.webp',
            './images/Portfolio Images/Lake Side View Design/close-to-the-lake_23-L.webp',
            './images/Portfolio Images/Lake Side View Design/close-to-the-lake_26.webp',
            './images/Portfolio Images/Lake Side View Design/close-to-the-lake_27-L.webp'
        ],
        craftHeading: 'Framing nature.',
        craftBody:    'Design choices were informed by the surrounding landscape — minimal detailing and a neutral palette let the view remain central.',
        craftImage:   './images/Portfolio Images/Lake Side View Design/close-to-the-lake_27-L.webp',
        materials: [
            { label: 'Exterior', value: 'Engineered Timber & Stone' },
            { label: 'Interior', value: 'Limestone & Oak' },
            { label: 'Finishes', value: 'Weather-Resistant Coatings' }
        ],
        nextProject: 'regency-living-ota-ogun-state',
        nextTitle:   'Regency Living, Ota'
    },

    'regency-living-ota-ogun-state': {
        title:        'Regency Living — Ota',
        category:     'RESIDENTIAL',
        location:     'Ota, Ogun State',
        locationYear: 'OTA — 2025',
        size:         '380 SQM',
        completion:   '11 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 05_19_17 PM.png',
        brief: {
            quote:  '"A measured approach to classic domestic form — layered with contemporary finishes and careful proportion."',
            client: 'Private Client'
        },
        solution: [
            'The design blends classical proportion with contemporary detailing to produce a home that feels both familiar and modern.',
            'Custom joinery and integrated storage were designed to maximise usability while preserving the architecture.',
            'Attention to scale in the primary reception spaces ensures comfortable entertaining and everyday family life.'
        ],
        fullImage:    './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 05_29_54 PM.png',
        sliderImages: [
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 02_59_52 PM.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 03_03_58 PM.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 03_06_03 PM.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 03_09_42 PM.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 03_12_28 PM.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 04_47_52 PM.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 04_47_58 PM.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 04_48_03 PM.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 04_50_13 PM.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 04_53_28 PM.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 05_11_31 PM.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 05_19_17 PM.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 05_29_54 PM 2.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 05_29_54 PM 3.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 05_29_54 PM 4.png',
            './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 05_29_54 PM.png'
        ],
        craftHeading: 'Measured, refined.',
        craftBody:    'Refined proportions and considered detailing underpin a home designed to be both presentable and perfectly liveable.',
        craftImage:   './images/Portfolio Images/Regency Living - Ota Ogun State/ChatGPT Image Jul 11, 2026, 05_19_17 PM.png',
        materials: [
            { label: 'Joinery', value: 'Painted & Stained Timber' },
            { label: 'Flooring', value: 'Polished Stone & Oak' },
            { label: 'Accents', value: 'Brass & Bronze' }
        ],
        nextProject: 'french-elegance-victoria-island',
        nextTitle:   'French Elegance, V.I.'
    },

    'french-elegance-victoria-island': {
        title:        'French Elegance — Victoria Island',
        category:     'RESIDENTIAL',
        location:     'Victoria Island, Lagos',
        locationYear: 'VICTORIA ISLAND — 2024',
        size:         '280 SQM',
        completion:   '9 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/French Elegance - Victoria Island LAgos/ChatGPT Image Jul 11, 2026, 02_54_03 PM.png',
        brief: {
            quote:  '"Delicate ornament and refined proportion — a quietly luxurious domestic interior."',
            client: 'Private Client'
        },
        solution: [
            'A light, neutral base supports classical references — subtle mouldings, refined upholstery and a delicate palette.',
            'Furniture selection focused on scale and comfort, with an attention to tactile materials and artisanal details.',
            'The overall effect is formal without being fussy — elegant, calm and enduring.'
        ],
        fullImage:    './images/Portfolio Images/French Elegance - Victoria Island LAgos/ChatGPT Image Jul 11, 2026, 02_54_03 PM.png',
        sliderImages: [
            './images/Portfolio Images/French Elegance - Victoria Island LAgos/ChatGPT Image Jul 11, 2026, 02_45_19 PM.png',
            './images/Portfolio Images/French Elegance - Victoria Island LAgos/ChatGPT Image Jul 11, 2026, 02_48_41 PM.png',
            './images/Portfolio Images/French Elegance - Victoria Island LAgos/ChatGPT Image Jul 11, 2026, 02_54_03 PM.png',
            './images/Portfolio Images/French Elegance - Victoria Island LAgos/ChatGPT Image Jul 11, 2026, 03_01_56 PM.png',
            './images/Portfolio Images/French Elegance - Victoria Island LAgos/ChatGPT Image Jul 11, 2026, 03_11_05 PM.png'
        ],
        craftHeading: 'Fine proportion, soft detail.',
        craftBody:    'The interiors are resolved through careful attention to proportion and the restrained use of ornament — an understated approach to luxury.',
        craftImage:   './images/Portfolio Images/French Elegance - Victoria Island LAgos/ChatGPT Image Jul 11, 2026, 02_48_41 PM.png',
        materials: [
            { label: 'Upholstery', value: 'Hand-Tied Fabrics' },
            { label: 'Surfaces', value: 'Polished Marble & Soft Timber' },
            { label: 'Accents', value: 'Antique-Finish Metalwork' }
        ],
        nextProject: 'modern-classic-design',
        nextTitle:   'Modern Classic Design'
    },

    'modern-classic-design': {
        title:        'Modern Classic Design',
        category:     'RESIDENTIAL',
        location:     'Lagos',
        locationYear: 'LAGOS — 2025',
        size:         '540 SQM',
        completion:   '15 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-44lw.jpg',
        brief: {
            quote:  '"A modern translation of classical proportion — familiar forms made new through material and detail."',
            client: 'Private Client'
        },
        solution: [
            'The design reinterprets classical motifs with contemporary materials and clean execution.',
            'High-quality joinery and carefully chosen furniture pieces create a layered, luxurious domestic atmosphere.',
            'Balance and rhythm were central to the composition — each room designed to feel both comfortable and dignified.'
        ],
        fullImage:    './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-44lw.jpg',
        sliderImages: [
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-08lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-09lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-12lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-13lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-14lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-15lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-16lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-17lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-18lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-19lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-20lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-21lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-22lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-23lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-24lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-25lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-26lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-27lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-30lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-31lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-32lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-34lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-35lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-37lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-38lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-40lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-41lw.jpg',
            './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-44lw.jpg'
        ],
        craftHeading: 'Classic reference, modern execution.',
        craftBody:    'A commitment to fine proportion and detailing results in interiors that feel composed and complete — modern but with a clear lineage.',
        craftImage:   './images/Portfolio Images/Modern Classic Design/Noble_JR-Landed-House-40lw.jpg',
        materials: [
            { label: 'Frames', value: 'Solid Timber & Engineered Cores' },
            { label: 'Surfaces', value: 'Marble & Polished Timber' },
            { label: 'Accents', value: 'Brass & Hand-Finished Iron' }
        ]
    }

};

/* ── DOM helper ── */
function qs(id) { return document.getElementById(id); }

function buildSliderTrack(images, reversed) {
    const set = reversed ? [...images].reverse() : images;
    /* Duplicate for seamless infinite loop */
    return set.concat(set)
        .map(src => `<div class="work-slide"><img src="${src}" alt="" loading="lazy" decoding="async"></div>`)
        .join('');
}

function populatePage(project) {
    document.title = `${project.title} – Decaura`;

    /* Hero */
    const heroImg = qs('pd-hero-img');
    heroImg.src = project.heroImage;
    heroImg.alt = project.title;
    qs('pd-category').textContent      = project.category;
    qs('pd-title').textContent         = project.title;
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

    /* Gallery slider */
    const trackRight = qs('pd-track-right');
    const trackLeft  = qs('pd-track-left');
    if (trackRight && trackLeft && project.sliderImages.length) {
        trackRight.innerHTML = buildSliderTrack(project.sliderImages, false);
        trackLeft.innerHTML  = buildSliderTrack(project.sliderImages, true);
    }

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

    /* ── Navbar – sticky clone (GPU-only, no reflow) ── */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const sticky = navbar.cloneNode(true);
        sticky.classList.add('navbar--sticky');
        document.body.appendChild(sticky);

        const navOverlayEl = document.querySelector('.nav-overlay');
        const stickyToggle = sticky.querySelector('.nav-toggle');
        const stickyLinks  = sticky.querySelector('.nav-links');

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

    /* ── Mobile nav toggle (original navbar) ── */
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
        [navOverlay, ...navLinks.querySelectorAll('a')].forEach(el => {
            el.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
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
