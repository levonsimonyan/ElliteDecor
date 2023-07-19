var currentLang = 'en';


function translatePage(lang) {
    var langElements = {
        en: {
            'en-btn' : 'English',
            'hay-btn' : 'Armenian',
            'lenguge': 'Language ▼',
            'welcome-text': 'Welcome to Ellite Decor',
            'home': 'Home',
            'about': 'About',
            'services': 'Project',
            'gt' : 'Get Started',
            'lm' : 'Learn More',
            'powerd' : 'The Power Of Design To Create A Better World',
            'bigtext' : 'Craft design with the mind of delivering clean water and energy. Building iconic skyscrapers. Planning new cities. Restoring damaged environments. Connecting people and economies with roads, bridges, tunnels and transit systems. Designing parks where children play. Helping governments maintain stability and security.',
            'forfulw' : 'Read More',
            'interiordesign': 'Interior Design',
            'furnitures': 'Furnitures',
            'lighting' : 'Lighting',
            'flooring' : 'Flooring & Tilings',
            'decoration' : 'Decoration',
            'choosecolor' : 'Choose your color',
            'findDreamf' : 'Find Your <br/> Dream Furniture',
            'bedroom' : 'Bedroom',
            'living-room' : 'Living Room',
            'dining-room' : 'Dining Room',
            'read-room' : 'Reading Room',
            'kitchen' : 'Kitchen',
            'viewproj1' : 'View project',
            'viewproj2' : 'View project',
            'viewproj3' : 'View project',
            'viewproj4' : 'View project',
            'viewproj5' : 'View project',
            'viewproj6' : 'View project',
    

            //about us page

            '_big-about': 'About us',
            '_long-text-a' : 'For over 25 years, Ellite Decor has been a trusted name in the world of home interior design and decoration. With our passion for transforming living spaces into personalized havens, we have established ourselves as industry leaders in providing exceptional design solutions. At Ellite Decor, we understand that your home is a reflection of your unique style and personality. Our team of skilled artisans, designers, and decorators work closely with you to create inspiring interiors that elevate your living experience. We blend artistic vision with practical functionality to bring your dream spaces to life. Thank you for considering Ellite Decor for your home interior needs. We look forward to the opportunity to transform your living space into a masterpiece of elegance and comfort.',
            '_about': 'About us',
            '_service': 'Services',
            '_contact': 'Contact',
            '_numproject': 'Number of Projects',
            '_yearex' : 'Year of Experience',
            '_numclit' : 'Number of Clients',
            '_our-team' : 'Our Team',
            '_ing-arch' : 'Engineer & Architect',
            '_st-eng' : 'Structural Engineer',
            '_land-arch' : 'Landscape Architect',
            '_help' : 'What can we help you with?',
            '_sd': 'Styling & Decor',
            '_rr' : 'Residential Remodeling',
            '_cd' : 'Commercial Design',
            '_cont-us' : 'Contact Us',
            '_send-m' : 'SEND MESSAGE',
            'styandDecor' : 'Styling and decor play a vital role in transforming a house into a home, an office into a creative space, or an event venue into a captivating setting. Whether you are looking to refresh your living space or planning a special occasion, the right styling and decor choices can make all the difference. When it comes to styling, the first step is to define the overall aesthetic you want to achieve. Do you prefer a contemporary and minimalist look, or are you drawn to a more traditional and ornate style? Understanding your preferences will help you establish a cohesive design direction.',
            'resAndRem' : 'When it comes to transforming your apartment into a beautiful and functional space, Ellite Decor is the company you can trust. With our expertise in apartment repair and renovation, we are dedicated to providing top-notch services that exceed your expectations. From minor repairs to complete overhauls, we have the skills and experience to handle projects of any size. Our team of highly skilled professionals at Ellite Decor understands that your apartment is more than just a living space; it is a reflection of your personality and style. That is why we work closely with you to understand your vision and bring it to life. Whether you desire a contemporary, minimalist design or a cozy, traditional ambiance, we have the knowledge and resources to make it happen.',
            'commerDesign': 'At Ellite Decor, we believe that exceptional design has the power to elevate any commercial space, making it truly remarkable and inspiring. With our unwavering commitment to creativity and quality craftsmanship, we have established ourselves as a leading name in the world of commercial design. Whether you are looking to revamp your office, retail store, or hospitality establishment, our team of skilled designers and architects are here to turn your vision into reality. From concept development to project implementation, we handle every aspect of the design process with meticulous attention to detail.',




            //projectt page 

            'projectTextGlx': 'PROJECTS',
            'add_1' : 'Add to card',
            'add_2' : 'Add to card',
            'openPopup' : 'Add to card',
            'add_4' : 'Add to card',
            'add_5' : 'Add to card',
            'add_6' : 'Add to card',
            'add_7' : 'Add to card',
            'add_8' : 'Add to card',
            'dsoulut1' : 'Personalized design solution',
            'dsoulut2' : 'Personalized design solution',
            'dsoulut3' : 'Personalized design solution',
            'dsoulut4' : 'Personalized design solution',
            'dsoulut5' : 'Personalized design solution',
            'dsoulut6' : 'Personalized design solution',
            'dsoulut7' : 'Personalized design solution',
            'dsoulut8' : 'Personalized design solution',
            'desBuy1' : 'Designed by David',
            'desBuy2' : 'Designed by Nick',
            'desBuy3' : 'Designed by Eric',
            'desBuy4' : 'Designed by Scott',
            'desBuy5' : 'Designed by Jack',
            'desBuy6' : 'Designed by Sofia',
            'desBuy7' : 'Designed by Mike',
            'desBuy8' : 'Designed by Emma',
    




            ///////buyyyyyyyy

            'thissofa' : 'Code: wayfair',
            'thisbardz' : 'Code: cb2',
            'thisvaraguyr' : 'Code: wv7',
            'designeNick' : 'Designed by Nick Rogers <br/> Modern, Bohemian, Coastal, Global',
            'color_': 'Color: <span>Brown</span>',
            'material_': 'Material: <span>Wood</span>',
            'size_' : 'Size: <span>59.84" x 16.14" x 17.72"</span>',
            'assembly_' : 'Assembly Required: <span>No</span>',
            'abTable_' : 'Finely Crafted Bench This wooden masterpiece is meticulously carved from natural wood and embodies both elegance and breathtaking beauty.',
            'buyyProj__' : 'Buy',

            'luys' : 'Lucherne polished brass wall light',
            'nstaran' : 'Park Upholstered Storage Bench',
            'nst_two' : 'Georgia Laney Bench, Natural Elm',
            'paharan' : 'Rope made of oak wood',
            'sexani_lamp' : 'Cove Goods Lotan Table Lamp',
            'bazmoc' : 'Park Upholstered Storage Bench',
            'bardz' : 'Haldin Liv Pillow Cover, 22" x 22"',
            'kochx' : 'Natural Tree-Stump Side Table',


            ////// finish buyy page

            'totalPrice' : 'Total price $1,399.00',
            'project-glx' : 'Make new purchases while <br/> building a beautiful lifestyle',

    
    
            //footer translate
    
            'fooCompony' : 'Company',
            'fooServices' : 'Services',
            'fooAboutUs' : 'About us',
            'fooServiz' : 'Services',
            'fooProjects' : 'Projects',
            'fooInterior' : 'Interior design',
            'fooArchitec' : 'Architecture',
            'fooPlaning' : 'Planning',
        },








        hay: {
            'en-btn' : 'Անգլերեն',
            'hay-btn' : 'Հայերեն',
            'lenguge': 'Լեզու ▼',
            'welcome-text': 'Բարի գալուստ Էլիտ Դեկոր',
            'home': 'Գլխավոր',
            'about': 'Մեր մասին',
            'services': 'Պրոյեկտներ',
            'gt' : 'Սկսել',
            'lm' : 'Իմացեք ավելին',
            'powerd': 'Դիզայնի ուժը Ստեղծել ավելի լավ աշխարհ',
            'bigtext': 'Արհեստի դիզայն՝ մաքուր ջուր և էներգիա մատակարարելու մտքով: Շինություն: խորհրդանշական երկնաքերեր. Նոր քաղաքների պլանավորում. Վնասված միջավայրերի վերականգնում. Մարդկանց և տնտեսությունների կապը ճանապարհների, կամուրջների, թունելների և տարանցման հետհամակարգեր։ Զբոսայգիների նախագծում, որտեղ երեխաները խաղում են: Օգնում է կառավարություններին. պահպանել կայունությունն ու անվտանգությունը.',
            'forfulw' : 'Կարդալ ավելին',
            'interiordesign': 'Ինտերիերի դիզայն',
            'furnitures': 'Կահույք',
            'lighting' : 'Լուսավորություն',
            'flooring' : 'Հատակներ',
            'decoration' : 'Զարդարանք',
            'choosecolor' : 'Ընտրիր քո գույնը',
            'findDreamf' : 'Գտեք ձեր <br/> Երազանքի կահույքը',
            'bedroom' : 'Ննջասենյակ',
            'living-room' : 'Հյուրասենյակ',
            'dining-room' : 'Ճաշասենյակ',
            'read-room' : 'Ընթերցասրահ',
            'kitchen' : 'Խոհանոց',
            'viewproj1' : 'Դիտել նախագիծը',
            'viewproj2' : 'Դիտել նախագիծը',
            'viewproj3' : 'Դիտել նախագիծը',
            'viewproj4' : 'Դիտել նախագիծը',
            'viewproj5' : 'Դիտել նախագիծը',
            'viewproj6' : 'Դիտել նախագիծը',



            
            //about us page

            '_big-about' : 'Մեր մասին',
            '_long-text-a': 'Ավելի քան 25 տարի Ellite Decor-ը վստահելի ընկերություն է տան ինտերիերի դիզայնի և ձևավորման աշխարհում: Բնակելի տարածքները անհատականացված ապաստարանների վերածելու մեր սիրով՝ մենք հաստատվել ենք որպես ոլորտի առաջատարներ՝ բացառիկ դիզայներական լուծումներ տրամադրելու հարցում: Ellite Decor-ում մենք հասկանում ենք, որ ձեր տունը ձեր յուրահատուկ ոճի և անհատականության արտացոլումն է: Մեր հմուտ արհեստավորների, դիզայներների և դեկորատորների թիմը սերտորեն համագործակցում է ձեզ հետ՝ ստեղծելու ոգեշնչող ինտերիեր, որոնք կբարձրացնեն ձեր կենսափորձը: Մենք համատեղում ենք գեղարվեստական ​​տեսլականը գործնական ֆունկցիոնալության հետ՝ ձեր երազանքների տարածքները կյանքի կոչելու համար: Շնորհակալություն ձեր տան վերանորոգումը մեզ վստահելու համար: Մենք անհամբեր սպասում ենք ձեր բնակելի տարածքը շքեղության և հարմարավետության գլուխգործոցի վերածելու հնարավորությանը:',
            '_about': 'Մեր մասին',
            '_service': 'Ծառայություններ',
            '_contact': 'Կապ',
            '_numproject': 'Նախագծերի քանակը',
            '_yearex' : 'Շուկայական փորձ',
            '_numclit' : 'Հաճախորդների թիվը',
            '_our-team' : 'Մեր թիմը',
            '_ing-arch' : 'Ինժեներ և Ճարտարապետ',
            '_st-eng' : 'Կառուցվածքային Ինժեներ',
            '_land-arch' : 'Լանդշաֆտի Ճարտարապետ',
            '_help' : 'Ինչով կարող ենք օգնել ձեզ?',
            '_sd': 'Ոճավորում և Դեկորացիա',
            '_rr' : 'Բնակարանի վերանորոգում',
            '_cd' : 'Կոմերցիոն դիզայն',
            '_cont-us' : 'Կապ մեզ հետ',
            '_send-m' : 'ՈՒՂԱՐԿԵԼ',
            'styandDecor' : 'Ոճն ու դեկորը կենսական դեր են խաղում տան համար, գրասենյակը ստեղծագործական տարածքի կամ միջոցառման վայրը գրավիչ միջավայրի վերածելու գործում: Անկախ նրանից, թե դուք ցանկանում եք թարմացնել ձեր բնակելի տարածքը, թե հատուկ առիթ եք նախատեսում, ճիշտ ոճային և դեկորային ընտրությունը կարող է փոխել բոլորը: Երբ խոսքը վերաբերում է ոճավորմանը, առաջին քայլը պետք է սահմանել ընդհանուր գեղագիտությանը, որին ցանկանում եք հասնել: Դուք նախընտրում եք ժամանակակից և մինիմալիստական ​​տեսք, թե՞ ձեզ ձգում է ավելի ավանդական և զարդարուն ոճը: Հասկանալով ձեր նախասիրությունները մենք ձեզ կօգնենք ստեղծել համահունչ դիզայնի ուղղություն:',
            'resAndRem' : 'Երբ խոսքը վերաբերում է ձեր բնակարանը գեղեցիկ և ֆունկցիոնալ տարածքի վերածելուն, Ellite Decor-ն այն ընկերությունն է, որին կարող եք վստահել: Բնակարանների վերանորոգման և վերանորոգման մեր փորձառությամբ մենք նվիրված ենք ձեր սպասելիքները գերազանցող բարձրակարգ ծառայություններ մատուցելուն: Փոքր վերանորոգումից մինչև ամբողջական վերանորոգում, մենք ունենք հմտություններ և փորձ՝ ցանկացած չափի նախագծեր իրականացնելու համար: Ellite Decor-ի բարձր որակավորում ունեցող մասնագետների մեր թիմը հասկանում է, որ ձեր բնակարանն ավելին է, քան պարզապես բնակելի տարածք. դա ձեր անհատականության և ոճի արտացոլումն է: Այդ իսկ պատճառով մենք սերտորեն համագործակցում ենք ձեզ հետ՝ հասկանալու ձեր տեսլականը և այն կյանքի կոչելու համար: Անկախ նրանից, թե դուք ցանկանում եք ունենալ ժամանակակից, մինիմալիստական ​​դիզայն, թե հարմարավետ, ավանդական միջավայր, մենք ունենք գիտելիքներ և ռեսուրսներ այն իրականացնելու համար:',
            'commerDesign' : 'Ellite Decor-ում մենք հավատում ենք, որ բացառիկ դիզայնը կարող է բարձրացնել ցանկացած կոմերցիոն տարածք՝ դարձնելով այն իսկապես ուշագրավ և ոգեշնչող: Ստեղծագործության և որակյալ արհեստագործության հանդեպ մեր անսասան հավատարմությամբ մենք հաստատվել ենք որպես առաջատար ընկերություն առևտրային դիզայնի աշխարհում: Անկախ նրանից, թե դուք ցանկանում եք վերանորոգել ձեր գրասենյակը, մանրածախ խանութը կամ հյուրընկալության հաստատությունը, մեր հմուտ դիզայներների և ճարտարապետների թիմն այստեղ է, որպեսզի ձեր տեսլականն իրականություն դարձնի: Հայեցակարգի մշակումից մինչև նախագծի իրականացում, մենք մշակում ենք նախագծման գործընթացի բոլոր ասպեկտները մանրուքների նկատմամբ մանրակրկիտ ուշադրություն դարձնելով:',

            //projectt page

            'projectTextGlx' :  'Պրոյեկտներ',
            'add_1' : 'Ավելացնել քարտում',
            'add_2' : 'Ավելացնել քարտում',
            'openPopup' : 'Ավելացնել քարտում',
            'add_4' : 'Ավելացնել քարտում',
            'add_5' : 'Ավելացնել քարտում',
            'add_6' : 'Ավելացնել քարտում',
            'add_7' : 'Ավելացնել քարտում',
            'add_8' : 'Ավելացնել քարտում',
            'dsoulut1' : 'Անհատականացված դիզայնի լուծում',
            'dsoulut2' : 'Անհատականացված դիզայնի լուծում',
            'dsoulut3' : 'Անհատականացված դիզայնի լուծում',
            'dsoulut4' : 'Անհատականացված դիզայնի լուծում',
            'dsoulut5' : 'Անհատականացված դիզայնի լուծում',
            'dsoulut6' : 'Անհատականացված դիզայնի լուծում',
            'dsoulut7' : 'Անհատականացված դիզայնի լուծում',
            'dsoulut8' : 'Անհատականացված դիզայնի լուծում',
            'desBuy1' : 'Մշակել է Դավիթը',
            'desBuy2' : 'Մշակել է Նիքը',
            'desBuy3' : 'Մշակել է Էրիկը',
            'desBuy4' : 'Մշակել է Սքոթը',
            'desBuy5' : 'Մշակել է Ջեկը',
            'desBuy6' : 'Մշակել է Սոֆիան',
            'desBuy7' : 'Մշակել է Մայքը',
            'desBuy8' : 'Մշակել է Էմման',





            ///////buyyyyyyyy

            'thissofa' : 'Կոդ: wayfair',
            'thisbardz' : 'Կոդ: cb2',
            'thisvaraguyr' : 'Կոդ: wv7',
            'designeNick' : 'Նախագծված է Նիք Ռոջերսի կողմից <br/> Ժամանակակից և նորաոճ լուծումներով',
            'color_': 'Գույնը: <span>Շագանակագույն</span>',
            'material_': 'Նյութը: <span>Փայտ</span>',
            'size_' : 'Չափը : <span>59.84" x 16.14" x 17.72"</span>',
            'assembly_' : 'Պահանջվում է հավաքում: <span>Ոչ</span>',
            'abTable_' : 'Նրբորեն պատրաստված նստարան՝ Այս փայտե գլուխգործոցը մանրակրկիտ քանդակված է բնական փայտից, իր մեջ մարմնավորում է և նրբագեղությունը, և շունչ հաղորդող գեղեցկությունը:',
            'buyyProj__' : 'Գնել',

            'luys' : 'Lucherne փայլեցված փողային պատի լույս',
            'nstaran' : 'Park փափուկ պահեստային նստարան',
            'nst_two' : 'Georgia Laney նստարան, բնական փայտից',
            'paharan' : 'Պահարան կաղնու փայտից պատրաստված',
            'sexani_lamp' : 'Cove Goods Lotan Սեղանի լամպ',
            'bazmoc' : 'Park փափուկ բազմոց պատրաստծ մաքուր կտորից',
            'bardz' : 'Haldin Liv բարձի ծածկոց, 22" x 22"',
            'kochx' : 'Բնական ծառի կոճղից պատրաստված սեղան',


            ////// finish buyy page

            'totalPrice' : 'Ընդհանուր գինը $1,399.00',
            'project-glx' : 'Կատարիր նոր գնումներ <br/> կառուցելով գեղեցիկ կենցաղ',



            //footer translate

            'fooCompony' : 'Ընկերություն',
            'fooServices' : 'Ծառայություններ',
            'fooAboutUs' : 'Մեր մասին',
            'fooServiz' : 'Ծառայություններ',
            'fooProjects' : 'Նախագծեր',
            'fooInterior' : 'Ինտերիերի դիզայն',
            'fooArchitec' : 'Ճարտարապետություն',
            'fooPlaning' : 'Պլանավորում',
        }
    };

    var keys = Object.keys(langElements[lang]);

    for (var i = 0; i < keys.length; i++) {
        var element = document.getElementById(keys[i]);
        if (element) {
            element.innerHTML = langElements[lang][keys[i]].replace(/<br>/g, "<br/>");
        }
    }

    currentLang = lang;
}

document.getElementById('en-btn').addEventListener('click', function() {
    if (currentLang !== 'en') {
        translatePage('en');
    }
});

document.getElementById('hay-btn').addEventListener('click', function() {
    if (currentLang !== 'hay') {
        translatePage('hay');
    }
});




