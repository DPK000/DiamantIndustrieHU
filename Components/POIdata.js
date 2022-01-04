export const locations =
    [{
        markerID: 0,
        title: 'Centraal station',
        adres: 'Stationsplein 10, 1211 EX Hilversum',
        description: 'Hallo, mijn naam is Hendrikus Keune. In het begin van de vorige eeuw ben ik samen met veel anderen vanuit Amsterdam naar Hilversum verhuisd, omdat de woonomstandigheden hier beter zijn en ik hier meer kon verdienen. Tegenwoordig verhuizen ook veel mensen naar Hilversum, omdat ze Amsterdam te druk vinden. In 1880 had Hilversum 9615 inwoners. Hoeveel mensen denken jullie dat er tussen 1880 en 1910 naar Hilversum zijn verhuisd?',
        latitude: 52.226632,
        longitude: 5.180905,
        image: require("../assets/station.jpg"),
        question: 'Hoeveel mensen denken jullie dat er tussen 1880 en 1910 naar Hilversum zijn verhuisd?',
        correctA: 'Helaas niet het juiste antwoord!',
        correctB: 'Helaas niet het juiste antwoord!',
        correctC: 'Dit is het juiste antwoord!',
        choice:
        {
            A: '1673',
            B: '7229',
            C: '21844',
        },
    },
        {
            markerID: 1,
            title: 'Wijk ‘over het spoor’',
            adres: 'Noorderweg 12',
            description: 'Op deze locatie, langs het spoor, werd in 1887 de eerste slijperij van Hilversum geopend, genaamd “Over Het Spoor”. Deze naam is ontstaan door het hoge tempo waarop Hilversum toen industrialiseerde. Ontdek op deze locatie hoeveel diamantslijperijen Hilversum op het hoogtepunt in 1912 telde en hoeveel slijpmolens in totaal werden gebruikt. Dit doe je door de muurtekening hier in de buurt te vinden en deze diagram met behulp van je telefoon compleet te maken. ',
            latitude: 52.227759522909714,
            longitude: 5.181212663953345,
            image: require("../assets/noorderweg.jpg"),
            gameType: 'wallGraph',
            question: 'Wat zijn de juiste aantallen van Slijperijen en Slijpmolens?',
            correctA: 'Helaas niet het juiste antwoord!',
            correctB: 'Helaas niet het juiste antwoord!',
            correctC: 'Dit is het juiste antwoord!',
            choice:
                {
                    A: '10 slijperijen en 250 Slijpmolens',
                    B: '17 slijperijen en 475 Slijpmolens',
                    C: '13 slijperijen en 300 Slijpmolens',
                },
        },
        {
            markerID: 2,
            title: 'De Volharding',
            adres: 'Liebergerweg 3',
            description: 'Slijperij “De Volharding” werd in 1906 opgericht (door F.F. Kramer) en is een van de laatste diamantslijperijen die nog in takt is gebleven. Neem een kijkje in deze slijperij. Doe dit door je telefoon voor het gebouw langs te bewegen. In dit gebouw zijn een aantal diamanten verstopt. Hoeveel zijn dit er volgens jou?',
            latitude: 52.22270338140939,
            longitude: 5.1866281197827915,
            image: require("../assets/volharding.png"),
            question: 'Wanneer is de slijperij opgericht',
            correctA: 'Helaas niet het juiste antwoord!',
            correctB: 'Dit is het juiste antwoord!',
            correctC: 'Helaas niet het juiste antwoord!',
            choice:
                {
                    A: '19e eeuw',
                    B: '20e eeuw',
                    C: '21e eeuw',
                },
        },
        {
            markerID: 3,
            title: 'Slijperij de Bloem',
            adres: 'Diamantstraat 48',
            description: 'Op 30 juli 1897 werd de slijperij de Bloem opgericht door diamantbewerker Jacob Rijnhard Boonacker. Deze slijperij werd vernoemd naar ‘de Bloem’, aangezien de eerste slijperij van Jacob een mislukking was geworden wegens te weinig animo onder diamantbewerkers. Later werd de slijperij overgenomen door de Joodse Meijer Salomons. Neem het op deze locatie tegen elkaar op en ontdek wie het snelste een diamant kan slijpen! Dit doe je door in de volgende minigame zo snel mogelijk over het scherm van je telefoon te vegen.',
            latitude: 52.22007344329583,
            longitude: 5.184664305790834,
            image: require("../assets/debloem.jpg"),
            question: 'Slijp zo snel mogelijk de diamand!',
            imageQuestion: require("../assets/diamond.png"),
            gameType: 'diamondClicker',

        },
        {
            markerID: 4,
            title: 'Slijperij Flora',
            adres: 'Floralaan 2',
            description: 'Slijperij Flora, opgericht in 1906, is een van de twee slijperijen in Hilversum die na de kolenbezuinigingen in 1916 nog is blijven bestaan. Het pand van deze slijperij is door de jaren heen redelijk intact gebleven. Toch zijn er dingen veranderd. Vul in deze activiteit de oude foto aan door zelf de hedendaagse helft te fotograferen.',
            latitude: 52.221589566799224,
            longitude: 5.165100647702832,
            image: require("../assets/flora.jpg"),
            imageQuestion: require("../assets/slijperijflora.jpg"),
            gameType: 'imageCompare'


        },
        {
            markerID: 5,
            title: 'Ons Gebouw',
            adres: 'Havenstraat 139',
            description: '',
            latitude: 52.219291291419694,
            longitude: 5.16769920644054,
            image: require("../assets/gebouw.jpg"),
            question: 'Zoek de verschillen!',
            correctA: 'Helaas niet het juiste antwoord!',
            correctB: 'Dit is het juiste antwoord!',
            correctC: 'Helaas niet het juiste antwoord',
            choice:
                {
                    A: 'Diamantslijperij voor de socialistische partij',
                    B: 'Hoofdkantoor van de socialistische partij (SDAP)',
                    C: 'Ontmoetingsplaats voor de diamantbewerkers',
                },
            afterAnswer: 'De Socialistische Democratische Arbeiders Partij (SDAP) zette zich in voor de rechten van de arbeiders van de diamantindustrie. ' +
                'Het pand “Ons Gebouw” is gefinancierd door vrijwillige donaties van leden. '
        },
        {
            markerID: 6,
            title: 'Woningbouwcomplex Verschuyl',
            adres: 'Ericastraat 51',
            description: 'In deze straat woonde veel diamantbewerkers, waaronder ik. Met mijn gezin woonde ik in dit kleine huisje. Het was wel een beetje krap. ',
            latitude: 52.214314593777594,
            longitude:  5.170058600181996,
            image: require("../assets/verschuyl.jpg"),
            question: 'Met hoeveel woonden zij hier?',
            correctA: 'Helaas niet het juiste antwoord!',
            correctB: 'Helaas niet het juiste antwoord!',
            correctC: 'Dit is het juiste antwoord!',
            choice:
                {
                    A: '3',
                    B: '6',
                    C: '9',
                },
            afterAnswer: 'Samen met mijn vrouw en 7 kinderen woonde ik hier. Met elkaar deelden we 2 slaapkamers.'
        },
        {
            markerID: 7,
            title: 'Zonnestraal',
            adres: 'Loosdrechtse Bos 19, 1213 RH Hilversum',
            description: 'Veel van de Hilversumse diamantbewerkers kregen last van tuberculose, door de slechte hygiëne en het gebrek aan zonlicht en frisse lucht tijdens hun werkzaamheden. Deze locatie, de Zonnestraal, is in 1928 geopend om zorg te kunnen verlenen aan deze arbeiders. Geniet na jullie boswandeling op deze locatie van een welverdiend kopje koffie of glaasje fris en neem een kijkje in dit indrukwekkende pand. Op deze locatie eindigt de Hilversum History Hunt. Na voltooiing van alle opdrachten ontvang je hier jouw goodiebag. ',
            latitude: 52.20072574646049,
            longitude: 5.15397627626054,
            image: require("../assets/zonnestraal.jpg")
        },
    ]
