/* ══════════════════════════════════════════════════════════
   DECAURA  –  project-detail.js
   Reads ?id= from the URL and populates the page dynamically.
   ══════════════════════════════════════════════════════════ */

const PROJECTS = {

    'alchemy-banana-island': {
        title:        'Alchemy Home Design',
        category:     'RESIDENTIAL',
        location:     'Banana Island, Lagos',
        locationYear: 'BANANA ISLAND, LAGOS — 2023',
        size:         '520 SQM',
        completion:   '15 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_SECTIONAL_01_kfoqk2.webp',
        brief: {
            quote:  '"We wanted a living environment that felt curated yet livable — where every piece tells a story of artisan excellence and considered restraint."',
            client: 'Private Client, Banana Island'
        },
        solution: [
            'The Alchemy Home project on Banana Island was conceived as an exercise in bespoke Italian craftsmanship applied to a Lagos residence. The client sought a home that balanced bold sculptural forms with an understated warmth that only hand-selected materials can deliver.',
            'Decaura curated a complete furniture programme centred on the Alchemy collection — pairing statement sectional sofas and lounge seating with precision-crafted occasional pieces. Each element was selected for its ability to anchor space without overwhelming it.',
            'The result is a home where materiality speaks quietly but with absolute conviction — a space that rewards the observer who takes the time to truly inhabit it.'
        ],
        fullImage:    './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_FIXED_SOFA_01_xkid8q.webp',
        sliderImages: [
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_SECTIONAL_01_kfoqk2.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_SECTIONAL_j26npy.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_FIXED_SOFA_01_xkid8q.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_FIXED_SOFA_ozxswr.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_MASAMI_CHAISE_LONGUE_vb1nrc.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_ARM_CHAIR_rd6k8o.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_OSAKA_CHAIR_01_qecpza.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_OSAKA_CHAIR_ttwxdk.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_SIDE_CHAIR_caciml.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_BUFFET_kjoi3j.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_CONSOLE_ekbyod.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_BAR_UNIT_avrvyc.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_BASE_ONLY_FOR_PLASMA_TV_o5e5a1.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_OVAL_COCKTAIL_TABLE_01_crap2e.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_OVAL_COCKTAIL_TABLE_jhuuuz.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_SQUARE_COCKTAIL_TABLE_01_vyhvrn.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_SQUARE_COCKTAIL_TABLE_fny0p8.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_RECTANGULAR_COCKTAIL_TABLE_vyddj2.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_BOAT_SHAPE_OVAL_TABLE_tfeoyg.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_ROUND_TABLE_01_slyeoc.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_ROUND_TABLE_z8iyjb.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_SQUARE_END_TABLE_x2x1b9.webp',
            './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_TABLE_nt8q8o.webp'
        ],
        craftHeading: 'Alchemy in every form.',
        craftBody:    'The Alchemy collection embodies the principle that furniture is architecture at a human scale. Each piece is resolved from within — the joins, the proportions, the weight — creating objects that inhabit space with quiet authority and lasting presence.',
        craftImage:   './images/Portfolio Images/Alchemy Home Design Banana Island/ALCHEMY_CONSOLE_ekbyod.webp',
        materials: [
            { label: 'Upholstery', value: 'Premium Italian Leather' },
            { label: 'Frame',      value: 'Lacquered Solid Oak' },
            { label: 'Accents',    value: 'Hand-Brushed Bronze' }
        ],
        nextProject: 'contemporary-ibeju-lekki',
        nextTitle:   'Contemporary Home, Ibeju Lekki'
    },

    'contemporary-ibeju-lekki': {
        title:        'Contemporary Home, Ibeju Lekki',
        category:     'RESIDENTIAL',
        location:     'Ibeju Lekki, Lagos',
        locationYear: 'IBEJU LEKKI, LAGOS — 2024',
        size:         '480 SQM',
        completion:   '14 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/Contemporary Home Ibeju Lekki/living_amenajare1_e8aobg.webp',
        brief: {
            quote:  '"A home that is warm, light-filled, and effortlessly contemporary — one that grows with the family and improves with time."',
            client: 'Private Client, Ibeju Lekki'
        },
        solution: [
            'The brief for this Ibeju Lekki residence was rooted in family living: spaces that are generous without feeling oversized, refined without being precious. Decaura approached the project through a lens of considered domesticity.',
            'The living areas were designed around a neutral material palette — limewash walls, warm timber joinery, and natural stone flooring — allowing the furniture and textiles to provide warmth and personality without visual noise.',
            'Bedrooms were conceived as restful retreats: soft materiality, layered lighting, and bespoke storage solutions that disappear into the architecture. Every space feels complete and resolved.'
        ],
        fullImage:    './images/Portfolio Images/Contemporary Home Ibeju Lekki/design_interior_casa_moderna1_q4xmj3.webp',
        sliderImages: [
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/living_amenajare1_e8aobg.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/living_amenajare2_xgqwu8.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/living_design1_vywym1.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/design_interior_casa_moderna1_q4xmj3.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/design_interior_casa_moderna2_m8bjbl.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/dormitor_amenajare1_ukypl9.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/dormitor_amenajare2_a3q8rg.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/dormitor_design1_qvosou.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/dormitor_design3_kw7yyc.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/dressing_amenajare2_y22fw5.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/baie_amenajare2_emxt5m.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/baie_design2_wowkg7.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/baie_design4_hp6wfw.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/baie_design5_xxh8ek.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/bucatarie_amenajare_mdrtnm.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/bucatarie_design_x7jkpu.webp',
            './images/Portfolio Images/Contemporary Home Ibeju Lekki/hol_design_expbso.webp'
        ],
        craftHeading: 'A home resolved in every room.',
        craftBody:    'From the master bedroom\'s hand-finished joinery to the kitchen\'s integrated material palette, the Ibeju Lekki home demonstrates that rigour at the detail level is what separates well-designed spaces from truly considered ones.',
        craftImage:   './images/Portfolio Images/Contemporary Home Ibeju Lekki/dormitor_amenajare2_a3q8rg.webp',
        materials: [
            { label: 'Walls',    value: 'Limewash Plaster Finish' },
            { label: 'Flooring', value: 'Natural Stone & Warm Oak' },
            { label: 'Joinery',  value: 'Custom Lacquered Timber' }
        ],
        nextProject: 'contemporary-ikorodu',
        nextTitle:   'Contemporary Style Living, Ikorodu'
    },

    'contemporary-ikorodu': {
        title:        'Contemporary Style Living, Ikorodu',
        category:     'RESIDENTIAL',
        location:     'Ikorodu, Lagos',
        locationYear: 'IKORODU, LAGOS — 2024',
        size:         '360 SQM',
        completion:   '11 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/Contemporary Style Living Ikorodu/living-modern-colectia-Icon-Francesco_knpw32.webp',
        brief: {
            quote:  '"We wanted a home that felt elevated but approachable — sophisticated in its simplicity, welcoming in its atmosphere."',
            client: 'Private Client, Ikorodu'
        },
        solution: [
            'The Ikorodu brief presented a clear design mandate: bring contemporary European living sensibility to a mid-scale family home in Lagos. Decaura drew on the Francesco Icon Collection to anchor the main living spaces with a cohesive material story.',
            'The open-plan living, dining, and bar areas were conceived as a continuous flow of space — each zone defined by a shift in material or lighting register rather than physical partition. The result is a home that feels expansive despite its measured footprint.',
            'Furniture and display pieces were curated to serve the architecture: each item positioned to define space, frame a view, or invite conversation. Nothing here is incidental.'
        ],
        fullImage:    './images/Portfolio Images/Contemporary Style Living Ikorodu/colectia-Icon-living-contemporan-Francesco_xotqhy.webp',
        sliderImages: [
            './images/Portfolio Images/Contemporary Style Living Ikorodu/living-modern-colectia-Icon-Francesco_knpw32.webp',
            './images/Portfolio Images/Contemporary Style Living Ikorodu/colectia-Icon-living-contemporan-Francesco_xotqhy.webp',
            './images/Portfolio Images/Contemporary Style Living Ikorodu/living-bar-colectia-Icon-Francesco_oe3ohi.webp',
            './images/Portfolio Images/Contemporary Style Living Ikorodu/masa-dining-colectia-Icon-Francesco_uq332b.webp',
            './images/Portfolio Images/Contemporary Style Living Ikorodu/mobilier-contemporan-colectia-Icon-Francesco_lzzdzw.webp',
            './images/Portfolio Images/Contemporary Style Living Ikorodu/vitrina-living-colectia-Icon-Francesco_xdg2hh.webp'
        ],
        craftHeading: 'Contemporary living, precisely curated.',
        craftBody:    'The Francesco Icon Collection was selected for its ability to anchor a room without dominating it. Each piece holds its own weight architecturally, while the ensemble reads as a single considered statement of how contemporary Lagos lives.',
        craftImage:   './images/Portfolio Images/Contemporary Style Living Ikorodu/masa-dining-colectia-Icon-Francesco_uq332b.webp',
        materials: [
            { label: 'Upholstery', value: 'Premium Fabric & Leather' },
            { label: 'Structure',  value: 'Lacquered & Brushed Steel' },
            { label: 'Surfaces',   value: 'Marble & Solid Timber Tops' }
        ],
        nextProject: 'italian-victoria-island',
        nextTitle:   'Italian Home Design, Victoria Island'
    },

    'italian-victoria-island': {
        title:        'Italian Home Design, Victoria Island',
        category:     'RESIDENTIAL',
        location:     'Victoria Island, Lagos',
        locationYear: 'VICTORIA ISLAND, LAGOS — 2023',
        size:         '610 SQM',
        completion:   '18 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_LIVING_ROOM_BAR_1_tj0o4e.webp',
        brief: {
            quote:  '"We wanted an interior that reflected our appreciation of Italian design culture — not as imitation, but as a deeply felt philosophy of living well."',
            client: 'Private Client, Victoria Island'
        },
        solution: [
            'The Victoria Island brief was unambiguous in its ambition: a home informed by the finest traditions of Italian interior design, executed with material precision and curatorial restraint. Decaura partnered with a select portfolio of Italian makers to realise this vision.',
            'The Charisma collection anchors the primary living spaces — its refined proportions and rich upholstery choices lending warmth to the generous volumes of the main reception rooms. Custom joinery and display units were designed to complement rather than compete.',
            'The bar and entertaining areas were treated as destinations within the home — spaces designed to impress through intimacy rather than scale, where every surface invites touch and every light source flatters the occupant.'
        ],
        fullImage:    './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_FIXED_SOFA_01_1_bprxdo.webp',
        sliderImages: [
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_LIVING_ROOM_BAR_1_tj0o4e.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_SECTIONAL_01_ksuqee.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_FIXED_SOFA_01_1_bprxdo.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_FIXED_SOFA_01_iflwcz.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_FIXED_SOFA_02_ihpdku.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_FIXED_SOFA_j1aspg.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_ARMCHAIR_x6xhsu.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_ARM_CHAIR_ldev4j.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_OCCASIONAL_SWIVEL_CHAIR_odt5pv.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_OTTOMAN_FOR_OCCASIONAL_CHAIR_kb0gsg.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_OTTOMAN_ofmqvz.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_SIDE_CHAIR_v7goss.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_BAR_STOOL_bncyrg.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_BAR_CABINET_ye0fpc.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_BUFFET__01_sjpgt2.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_BUFFET_kj7ggy.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_BIFACIAL_SHOWCASE_d6jcgk.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_VETRINE_yfgwjk.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_CONSOLE_jvzzcx.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_COCKTAIL_TABLE_01_d3wqqh.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_COCKTAIL_TABLE_nrcb91.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_SQUARE_COCKTAIL_TABLE_m2dvvn.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_SQUARE_END_TABLE_bjupyb.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_ROUND_END_TABLE_nfj9w5.webp',
            './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_ROUND_TABLE_gkmi1d.webp'
        ],
        craftHeading: 'Italian precision. Lagos refinement.',
        craftBody:    'The Charisma collection embodies over a century of Italian furniture-making knowledge — deep-buttoned upholstery, hand-gilded frames, and precision-mitered cabinetry. Decaura brought this level of craft to Victoria Island, ensuring every piece was installed exactly as the makers intended.',
        craftImage:   './images/Portfolio Images/Italian Home Design Victoria Island/CHARISMA_ARMCHAIR_x6xhsu.webp',
        materials: [
            { label: 'Upholstery', value: 'Hand-Tufted Italian Fabric' },
            { label: 'Frames',     value: 'Lacquered & Gold-Leaf Finish' },
            { label: 'Surfaces',   value: 'Polished Marble & Brass' }
        ],
        nextProject: 'modern-mirage-ota',
        nextTitle:   'Modern Mirage, Ota'
    },

    'modern-mirage-ota': {
        title:        'Modern Mirage, Ota',
        category:     'RESIDENTIAL',
        location:     'Ota, Ogun State',
        locationYear: 'OTA, OGUN STATE — 2024',
        size:         '390 SQM',
        completion:   '12 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/Modern Mirage Ota Ogun State/living-bar-colectia-Icon-Francesco_jfj82l.webp',
        brief: {
            quote:  '"A contemporary family home that feels both aspirational and deeply livable — where architecture and interior design work as one."',
            client: 'Private Client, Ogun State'
        },
        solution: [
            'The Ota residence presented a unique design opportunity: a generous family home on the outskirts of Lagos, where design expectations were high but the brief called for a different register than the city\'s more formal residences.',
            'Decaura selected the Mirage collection as the primary furniture programme — its fluid forms and premium materials creating a sophisticated yet relaxed interior atmosphere. Sectional seating anchors the living room, while precision display and storage units give structure to the main walls.',
            'Throughout, the design prioritises comfort without compromising on craft — a home where children play and guests linger, but where the quality of the environment is always apparent to those who know where to look.'
        ],
        fullImage:    './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_SECTIONAL_01_dl5q5t.webp',
        sliderImages: [
            './images/Portfolio Images/Modern Mirage Ota Ogun State/living-bar-colectia-Icon-Francesco_jfj82l.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_SECTIONAL_01_dl5q5t.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_SECTIONAL_kow69f.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_FIXED_SOFA_01_eyjbtu.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_FIXED_SOFA_02_fnfxjd.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_FIXED_SOFA_wf7wgf.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_ARMCHAIR_01_g7mwbn.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_ARMCHAIR_e9hmrq.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_ARM_CHAIR_olomcp.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_CHAIR_pxx1as.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_OTTOMAN_CHAIR_dhva9k.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_ROUND_OTTOMAN_x7bbcu.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_BUFFET_01_di2mcy.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_BUFFET_tsiq0u.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_TV_UNIT_df85ey.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_VETRINE_lzrahv.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_CONSOLE_or0hbu.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_COCKTAIL_SOFA_TABLE_fqcqne.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_CURVED_SOFA_TABLE_u4prfr.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_END_SOFA_TABLE_atbw6x.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_RECTANGULAR_TABLE_01_wlzxsh.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_RECTANGULAR_TABLE_02_pijgyp.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_RECTANGULAR_TABLE_snsex7.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_ROUNBG_TABLE_MARBLE_TOP_ovmqrc.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_ROUND_TABLE_r9y6dl.webp',
            './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_SIDE_TABLE_zcu6ds.webp'
        ],
        craftHeading: 'Fluid form. Lasting presence.',
        craftBody:    'The Mirage collection is defined by its fluid silhouettes and the tension between soft upholstery and precision-cut hard materials. Marble-topped tables, curved sofas, and architectural display units combine to create a home that feels designed — but never over-designed.',
        craftImage:   './images/Portfolio Images/Modern Mirage Ota Ogun State/MIRAGE_ARMCHAIR_e9hmrq.webp',
        materials: [
            { label: 'Upholstery', value: 'Premium Woven Fabric' },
            { label: 'Tables',     value: 'Marble & Lacquered Timber' },
            { label: 'Storage',    value: 'High-Gloss Lacquer Finish' }
        ],
        nextProject: 'reflex-angelo-ikoyi',
        nextTitle:   'Reflex Angelo, Ikoyi'
    },

    'reflex-angelo-ikoyi': {
        title:        'Reflex Angelo, Ikoyi',
        category:     'RESIDENTIAL',
        location:     'Ikoyi, Lagos',
        locationYear: 'IKOYI, LAGOS — 2023',
        size:         '680 SQM',
        completion:   '22 Months',
        status:       'Completed',
        heroImage:    './images/Portfolio Images/Reflex Angelo Ikoyi/Luxury_High_End_TV_Furniture_-_Collier_jmf3x7.webp',
        brief: {
            quote:  '"We wanted every room to feel like a moment — individual, considered, and deeply distinguished from the ordinary."',
            client: 'Private Client, Ikoyi'
        },
        solution: [
            'The Reflex Angelo Ikoyi project represents Decaura\'s most discerning residential commission to date — a home where the client\'s brief called explicitly for pieces that are collectible in their own right, not simply functional.',
            'Working with the Reflex Angelo catalogue, Decaura curated a selection of signature pieces: the Collier high-end entertainment system, bespoke glass display cabinets, and a series of luxury occasional pieces including the Lotus bench and console collection. Each item was selected for its singular identity.',
            'The approach to each room was one of gallery thinking applied to domestic space — generous, luminous volumes punctuated by objects of extraordinary quality, where the negative space is as considered as the pieces themselves.'
        ],
        fullImage:    './images/Portfolio Images/Reflex Angelo Ikoyi/Luxury_Glass_Display_Cabinet_-_Lotu_nchi7f.webp',
        sliderImages: [
            './images/Portfolio Images/Reflex Angelo Ikoyi/Luxury_High_End_TV_Furniture_-_Collier_jmf3x7.webp',
            './images/Portfolio Images/Reflex Angelo Ikoyi/Exclusive_Crystal_Top_Luxury_Soft_Velvet_Buffet_-_Signature_gtxx6f.webp',
            './images/Portfolio Images/Reflex Angelo Ikoyi/Luxury_Glass_Display_Cabinet_-_Lotu_nchi7f.webp',
            './images/Portfolio Images/Reflex Angelo Ikoyi/Luxury_Glossy_Gold_Console_Table_-_Lotus_g2ejnw.webp',
            './images/Portfolio Images/Reflex Angelo Ikoyi/Contemporary_Marble_Console_-_Con-Soul_b3rm1t.webp',
            './images/Portfolio Images/Reflex Angelo Ikoyi/High_End_Contemporary_Italian_Designer_Quilted_Suede_Fabric_Armchair_Collier_1_hwnfqo.webp',
            './images/Portfolio Images/Reflex Angelo Ikoyi/Exclusive_Modern_Velvet_Leopard_Chair_-_Gattopardo_ct2wsh.webp',
            './images/Portfolio Images/Reflex Angelo Ikoyi/Exclusive_Spider_Pedestal_Marble_Coffee_Table_-_Gattopardo_toeou3.webp',
            './images/Portfolio Images/Reflex Angelo Ikoyi/Exclusive_Modern_Precious_Stone_Coffee_Tables_Set_-_Albina_achrcy.webp',
            './images/Portfolio Images/Reflex Angelo Ikoyi/Designer_Velvet_Flower_High_Bench_-_Lotus_juw0vz.webp',
            './images/Portfolio Images/Reflex Angelo Ikoyi/Bench_-_tuscany_zcvwoj.webp',
            './images/Portfolio Images/Reflex Angelo Ikoyi/Luxury_Gold_Footed_Tray_-_Sahara_zanfxj.webp'
        ],
        craftHeading: 'Collectible design. Lived in daily.',
        craftBody:    'Reflex Angelo\'s philosophy aligns precisely with Decaura\'s own: that the finest furniture is designed to be extraordinary in isolation, but transcends itself entirely when placed in a considered interior context. The Ikoyi project is that philosophy at full expression.',
        craftImage:   './images/Portfolio Images/Reflex Angelo Ikoyi/High_End_Contemporary_Italian_Designer_Quilted_Suede_Fabric_Armchair_Collier_1_hwnfqo.webp',
        materials: [
            { label: 'Upholstery', value: 'Quilted Suede & Velvet' },
            { label: 'Surfaces',   value: 'Crystal, Marble & Gold Leaf' },
            { label: 'Structure',  value: 'Precision Steel & Solid Timber' }
        ],
        nextProject: 'alchemy-banana-island',
        nextTitle:   'Alchemy Home Design, Banana Island'
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
