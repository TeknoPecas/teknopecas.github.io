document.addEventListener('DOMContentLoaded', function () {
    const produtos = [
        {
            id: 'TP100206',
            nome: 'A/C Compressor 12V Chevrolet GM Blazer, S10 2000 - 2012 (OEM)',
            categorias: ['Ac Compressores', 'Chevrolet'],
            imagem: 'compressor-de-ac-chevrolet-gm-blazer-s10-2000-a-2012-oem16207641744.webp'
        },

        {
            id: 'TP100207',
            nome: 'A/C Compressor 12V Chevrolet GM Celta, Classic, Prisma...(OEM)',
            categorias: ['Ac Compressores', 'Chevrolet'],
            imagem: 'compressor-de-ac-chevrolet-gm-celta-classic-prismaoem16137370191.webp'
        },

        {
            id: 'TP100223',
            nome: 'A/C Compressor 12V Fiat Argo, Cronos, Mobi, Uno...(OEM)',
            categorias: ['Ac Compressores', 'Fiat'],
            imagem: 'compressor-de-ac-fiat-argo-cronos-mobi-unooem_1_1620150875.webp'
        },

        {
            id: 'TP100007',
            nome: 'A/C Compressor 12V Ford Ecosport, Fiesta (GREEN)',
            categorias: ['Ac Compressores', 'Ford'],
            imagem: 'a-c-compressor-ford-ecosport-fiesta-hl-hs15_1_1597943997.webp'
        },

        {
            id: 'TP100258',
            nome: 'A/C Compressor 12V Kia Sorento, Sportage...2017(GREEN)',
            categorias: ['Ac Compressores', 'Kia'],
            imagem: 'compressor-de-ac-kia-sorento-sportage2017green_1_1626203261.webp'
        },

        {
            id: 'TP100282',
            nome: 'A/C Compressor 12V Renault Logan, Sandero 1.0 2017-2020 (GREEN)',
            categorias: ['Ac Compressores', 'Renault'],
            imagem: 'br-compressor-de-ac-p-logan-sandero-10-2017-a-2021-greenbr-1673525292.webp'
        },

        {
            id: 'TP100220',
            nome: 'A/C Compressor 12V Volkswagen CrossUP, Fox, UP (OEM) - Motor 1.0',
            categorias: ['Ac Compressores', 'Volkswagen'],
            imagem: 'compressor-de-ac-volkswagen-cross-up-up-oem-motor-10_1_1621884446.webp'
        },

        {
            id: 'TP100216',
            nome: 'A/C Compressor 12V Volkswagen Fox, Gol G5/G6...- Motor 1.6 (OEM)',
            categorias: ['Ac Compressores', 'Volkswagen'],
            imagem: 'compressor-de-ac-volkswagen-fox-gol-g5g6oem-motor-16_2_1621972743.webp'
        },

        {
            id: 'TP100215',
            nome: 'A/C Compressor 12V Volkswagen Fox, Polo, SpaceFox...(OEM)',
            categorias: ['Ac Compressores', 'Volkswagen'],
            imagem: '1_cm-mahle-vw-fox-crossfox-10-16-03a07-acp213-484a7715ed2df31536062910373e0225.webp'
        },

        {
            id: 'TP100219',
            nome: 'A/C Compressor 12V Volkswagen Gol, Fox, Voyage(OEM) - Motor 1.0',
            categorias: ['Ac Compressores', 'Volkswagen'],
            imagem: '1_cm-mahle-fox-14a-gol-14a15-voyage-12a15motor-10acp215-8c217f6b7510ab004a8c636ce8d93a0c.webp'
        },

        {
            id: 'TP101014',
            nome: 'A/C Compressor Audi A3; Volkswagen Bora, Golf...(OEM)',
            categorias: ['Ac Compressores', 'Volkswagen', 'Audi'],
            imagem: '1_cm-cvc-vw-golf-audi-a3-16-07adenso-eb168d4c1eb50c8d730975b0d97bbe28.webp'
        },


        {
            id: 'TP105008',
            nome: 'A/C Compressor Audi; Seat; Volkswagen...(GREEN)',
            categorias: ['Ac Compressores', 'Volkswagen', 'Audi'],
            imagem: 'compressor-de-ar-a3-s3-tt-cordoba-ibiza-bora-green_1_1631899286.webp'
        },


        {
            id: 'TP105070',
            nome: 'A/C Compressor BMW E46 318i, 320i, 316i, 318i 1998 - 2005',
            categorias: ['Ac Compressores', 'BMW'],
            imagem: 'compressor-de-ac-bmw-e46-318i-320i-316i-318i-1998-a-2005_1_1623959440.WEBP'
        },


        {
            id: 'TP104031',
            nome: 'A/C Compressor BMW E90, 116i, 120i, 316i, 320i, X1...(GREEN)',
            categorias: ['Ac Compressores', 'BMW'],
            imagem: 'compressor-de-ac-bmw-e90-120i-316i-320i-x1green16137370331.WEBP'
        },


        {
            id: 'TP103012',
            nome: 'A/C Compressor BMW X5 2000 - 2004...(GREEN)',
            categorias: ['Ac Compressores', 'BMW'],
            imagem: 'compressor-de-ac-bmw-land-rover-mercedes-benzgreen_1_1615317860.webp'
        },


        {
            id: 'TP103082',
            nome: 'A/C Compressor C3, C4; Peugeot 208, 308...2013 - 2020(GREEN)',
            categorias: ['Ac Compressores', 'Peugeot'],
            imagem: 'compressor-de-ac-c3-c4-peugeot-208-3082013a2020green-1646944450.webp'
        },


        {
            id: 'TP103025',
            nome: 'A/C Compressor C3, C4; Peugeot 208, 308...2013 - 2020(OEM)',
            categorias: ['Ac Compressores', 'Peugeot'],
            imagem: 'compressor-de-ac-c3-c4-peugeot-208-3082013-a-2020oem_1_1616698848.webp'
        },


        {
            id: 'DS155021',
            nome: 'A/C Compressor Caterpillar 332C, 325C, 511... (GREEN FORCE)',
            categorias: ['Ac Compressores', 'Caterpillar'],
            imagem: 'br-br-compressor-de-ar-332c-325c-511-c18-385c-330c-green-linha-premiumbr-1661283457.webp'
        },


        {
            id: 'TP100208',
            nome: 'A/C Compressor Chevrolet GM Classic, Prisma...(OEM) 12V',
            categorias: ['Ac Compressores', 'Chevrolet'],
            imagem: 'compressor-de-ar-condicionado-gm-classic-original16207642834.webp'
        },


        {
            id: 'TP101171',
            nome: 'A/C Compressor Chevrolet GM Cruze LTZ 1.4 Turbo 17 - 20(OEM)',
            categorias: ['Ac Compressores', 'Chevrolet'],
            imagem: 'compressor-ac-chevrolet-gm-cruze-ltz-14-turbo-17a20oem_1_1617824191.webp'
        },


        {
            id: 'TP101034',
            nome: 'A/C Compressor Chevrolet GM Prisma, Spin, Onix..(OEM) 2013 - 2024',
            categorias: ['Ac Compressores', 'Chevrolet'],
            imagem: '1_cm-gm-spin-onix-10-8v-2018a-nv-prisma-original-01b55bbdfea05938be9d0543e4e8dc3d.WEBP'
        },


        {
            id: 'TP105019',
            nome: 'A/C Compressor Citroen Berlingo, C3; Peugeot 206, 307...',
            categorias: ['Ac Compressores', 'Peugeot '],
            imagem: 'br-compressor-de-ac-citroen-berlingo-c3-peugeot-206-307br-1666979267.webp'
        },


        {
            id: 'TP108091',
            nome: 'A/C Compressor Citroen C-Crosser; Mitsubishi Outlander...',
            categorias: ['Ac Compressores', 'Mitsubishi', 'Citroen'],
            imagem: 'compressor-de-ac-citroen-c-crosser-mitsubishi-outlander_1_1616778781.webp'
        },


        {
            id: 'TP103031',
            nome: 'A/C Compressor Citroen C3, C5; Peugeot 206,208...Sensor(OEM)',
            categorias: ['Ac Compressores', 'Citroen', 'Peugeot'],
            imagem: '1_cm-sd6c12-206-208-16-307-16-citroen-c3-c4-ds3-16-c-sensor-7184160ff928dd12ec217122bb1dbddd.webp'
        },


        {
            id: 'TP104060',
            nome: 'A/C Compressor Citroen Jumper, Relay; Fiat Ducato (GREEN)',
            categorias: ['Ac Compressores', 'Fiat', 'Citroen', 'Peugeot'],
            imagem: 'compressor-de-ac-citroen-jumper-relay-fiat-ducato-green16137370371.webp'
        },


        {
            id: 'TP104040',
            nome: 'A/C Compressor Fiat 500, Idea, Palio, Punto, Uno...',
            categorias: ['Ac Compressores', 'Fiat'],
            imagem: '1_cm-denso-scroll-menor-palio-idea-punto-uno-8ab9d86c533d381505ce80d491903320.webp'
        },


        {
            id: 'TP104043',
            nome: 'A/C Compressor Fiat 500, Idea, Palio, Punto, Uno...(OEM)',
            categorias: ['Ac Compressores', 'Fiat'],
            imagem: '1_cm-denso-scroll-menor-palio-idea-punto-uno-original-c0cf9fd3064e27574c92d658c7c9ec2a.webp'
        },


        {
            id: 'TP100274',
            nome: 'A/C Compressor Fiat Bravo, Doblo, Idea, Siena,Punto...(OEM) 12V',
            categorias: ['Ac Compressores', 'Fiat'],
            imagem: 'compressor-de-ac-fiat-bravo-doblo-puntomotor-e-torqoem_1_1618430069.webp'
        },


        {
            id: 'TP101153',
            nome: 'A/C Compressor Fiat Ducato; Citroen Jumper; Iveco...(OEM)',
            categorias: ['Ac Compressores', 'Fiat', 'Citroen'],
            imagem: 'compressor-de-ac-fiat-ducato-citroen-iveco-pegeoutoem_1_1616697491.webp'
        },


        {
            id: 'TP100269',
            nome: 'A/C Compressor Fiat Gran Siena, Palio, Strada...(OEM) 12V',
            categorias: ['Ac Compressores', 'Fiat'],
            imagem: '3309095061_1SZ.webp'
        },


        {
            id: 'TP104076',
            nome: 'A/C Compressor Fiat Palio, Strada, Siena... 2004 - 13 (OEM)',
            categorias: ['Ac Compressores', 'Fiat'],
            imagem: 'compressor-de-ac-fiat-palio-strada-2004-a-2013-oem_1_1621884648.webp'
        },


        {
            id: 'TP104025',
            nome: 'A/C Compressor Fiat Palio, Strada, Siena...2004 - 20 (GREEN)',
            categorias: ['Ac Compressores', 'Fiat'],
            imagem: 'compressor-de-ar-condicionado-fiat-siena-10-2004-a-201616207641865.webp'
        },


        {
            id: 'TP100217',
            nome: 'A/C Compressor Fiat Uno, Mobi, Palio - Motor 1.0, 1.4.. 12V (OEM)',
            categorias: ['Ac Compressores', 'Fiat'],
            imagem: 'compressor-de-ac-p-fiat-uno-mobioem-motor-10-14_1_1620149802.webp'
        },


        {
            id: 'TP108118',
            nome: 'A/C Compressor Ford Fiesta, Ecosport 1.5, 1.6 (GREEN)',
            categorias: ['Ac Compressores', 'Ford'],
            imagem: 'compressor-de-ac-ford-fiesta-ecosport-15-16-green_2_1620158106.webp'
        },


        {
            id: 'TP105002',
            nome: 'A/C Compressor Ford Focus G2 Motor Duratec 2008>2013 SD TRS90 Polia 6PK',
            categorias: ['Ac Compressores', 'Ford'],
            imagem: '2_cm-trs90-6pk-focus-geracao-ii-motor-duratec-08-13-a42fa7c45d6048fe7380a3a5bfea5cc8.webp'
        },


        {
            id: 'TP108104',
            nome: 'A/C Compressor Ford Fusion 2.0/2.5 2013-18, Edge 2.0 2016-18',
            categorias: ['Ac Compressores', 'Ford'],
            imagem: 'compressor-de-ac-ford-fusion-titanium-2014-polia-4pk_1_1618257476.webp'
        },


        {
            id: 'TP108036',
            nome: 'A/C Compressor Ford Ka 1.0 2014 - 2020 (GREEN)',
            categorias: ['Ac Compressores', 'Ford'],
            imagem: '1_cm-mod-10sre13c-3fix-ford-nv-ka-10-14ae3b119d629ba-b0b72355e02d23a307a9fc2c539dae5e.webp'
        },


        {
            id: 'TP101176',
            nome: 'A/C Compressor Ford Ka, Ka Sedan 1.5 12v Aut 2019 - 2021',
            categorias: ['Ac Compressores', 'Ford'],
            imagem: 'compressor-de-ac-ford-ka-ka-sedan-15-12v-aut-2019-a-2021-1644263077.webp'
        },


        {
            id: 'TP101113',
            nome: 'A/C Compressor Ford Ka, New Fiesta 16V 2015 - 2018 (OEM)',
            categorias: ['Ac Compressores', 'Ford'],
            imagem: 'compressor-de-ac-ford-ka-new-fiesta-16v-2015-a-2018-oem_1_1620152485.webp'
        },


        {
            id: 'TP102191',
            nome: 'A/C Compressor GM Tracker 2002 - 2009 DN 10S20',
            categorias: ['Ac Compressores', 'Chevrolet'],
            imagem: 'compressor-de-ac-gm-tracker-10s20_3_1621541142.webp'
        },


        {
            id: 'TP102021',
            nome: 'A/C Compressor Gol G3 1.8 2001-03 / BMW Série E 1995-00',
            categorias: ['Ac Compressores', 'VolksWagen', 'BMW'],
            imagem: 'compressor-de-ac-gol-g3-18-2001-a-03-7sb16c-green_1_1620157558.webp'
        },


        {
            id: 'TP102206',
            nome: 'A/C Compressor Honda Accord 2.4L 2008>2012 DN 10SR154C',
            categorias: ['Ac Compressores', 'Honda'],
            imagem: '1_cm-mod-denso-10sr154c-honda-accord-24l-08a12-green-7a6b541d74bdae5663a48ed8ddde2c93.webp'
        },


        {
            id: 'TP105087',
            nome: 'A/C Compressor Honda Accord 2005 - 2012 (GREEN)',
            categorias: ['Ac Compressores', 'Honda'],
            imagem: 'compressor-de-ac-honda-accord-2005-10s17-polia-7pk_1_1622059695.webp'
        },


        {
            id: 'TP101127',
            nome: 'A/C Compressor Honda City, Fit 2014 - 2019 (OEM)',
            categorias: ['Ac Compressores', 'Honda'],
            imagem: '1_cm-denso-10sre11c-honda-city-fit-14aoriginal-086d088459655538ae0ba858e4cd3ab9.webp'
        },


        {
            id: 'TP105081',
            nome: 'A/C Compressor Honda Civic 1.7, 2.0 2001 - 2006',
            categorias: ['Ac Compressores', 'Honda'],
            imagem: 'compressor-de-ac-honda-civic-17-20-2001-a-2006-1656096990.webp'
        },


        {
            id: 'TP105082',
            nome: 'A/C Compressor Honda Civic 1994 - 2000 (Anti Horário)',
            categorias: ['Ac Compressores', 'Honda'],
            imagem: 'compressor-de-ac-honda-civic-1994-a-2000-anti-horario_1_1617892727.webp'
        },


        {
            id: 'TP101070',
            nome: 'A/C Compressor Honda Civic 2007 - 2012 (GREEN)',
            categorias: ['Ac Compressores', 'Honda'],
            imagem: 'compressor-de-ar-condicionado-honda-civic-07-a-12-green_2_1626188868.webp'
        },


        {
            id: 'TP102030',
            nome: 'A/C Compressor Honda Civic EX, LX 1.8 2009 - 2014 (OEM)',
            categorias: ['Ac Compressores', 'Honda'],
            imagem: 'compressor-de-ac-honda-civic-ex-lx-18-2007-a-2012-oem_1_1617201453.webp'
        },


        {
            id: 'TP101028',
            nome: 'A/C Compressor Honda Civic SI 2.0 2007 - 2011 SD TRSE07',
            categorias: ['Ac Compressores', 'Honda'],
            imagem: 'ac-compressor-honda-civic-si-20-20062011-sd-trse07_1_1617827721.webp'
        },


        {
            id: 'TP102158',
            nome: 'A/C Compressor Honda CRV 2.0 2002 - 2006 SD TRSE07',
            categorias: ['Ac Compressores', 'Honda'],
            imagem: 'compressor-de-ac-honda-crv-20-2002-a-2006-trse07-green_1_1620937014.webp'
        },


        {
            id: 'TP102190',
            nome: 'A/C Compressor Honda CRV Motor 2.0, Civic 1.8 2006 a 2011',
            categorias: ['Ac Compressores', 'Honda'],
            imagem: 'br-compressor-de-ac-p-honda-crv-2004-a-07-civic-18-2005-a-09br-1688038484.webp'
        },


        {
            id: 'TP102185',
            nome: 'A/C Compressor Honda Fit 1.4, 1.5 2004 - 2007',
            categorias: ['Ac Compressores', 'Honda'],
            imagem: 'br-br-compressor-de-ac-p-honda-fit-04-a-07-greenbr-1693828123.webp'
        },


        {
            id: 'TP105083',
            nome: 'A/C Compressor Honda Fit 2003 - 2008',
            categorias: ['Ac Compressores', 'Honda'],
            imagem: 'br-compressor-de-ar-condicionado-p-honda-fit-2003-a-2008br-1688039013.webp'
        },


        {
            id: 'TP101139',
            nome: 'A/C Compressor Honda HR-V 2015 - 2020 (OEM)',
            categorias: ['Ac Compressores', 'Honda'],
            imagem: '1_cm-denso-10sre11c-honda-hrv-15a-original-76174763e25c17f2067ad94adcaeb62b.webp'
        },


        {
            id: 'TP108027',
            nome: 'A/C Compressor Hyundai Azera; Kia Cadenza, Optima...(GREEN)',
            categorias: ['Ac Compressores', 'Kia Motors', 'Hyundai'],
            imagem: 'br-compressor-de-ar-condicionado-azera-cadenza-optima-grnbr-1666979711.webp'
        },


        {
            id: 'TP102041',
            nome: 'A/C Compressor Hyundai HB20 1.6 2012 - 2019 (GREEN)',
            categorias: ['Ac Compressores', 'Hyundai'],
            imagem: 'a-c-compressor-hyundai-hb20-16-2013-mod-doowon-df13-polia-6pk_1_1597944044.webp'
        },


        {
            id: 'TP108079',
            nome: 'A/C Compressor Hyundai HB20, HB20S 1.0 2012 - 2020 (GREEN)',
            categorias: ['Ac Compressores', 'Hyundai'],
            imagem: 'compressor-de-ac-hyundai-hb20-hb20s-10-2012-a-2020-green_1_1626203533.webp'
        },


        {
            id: 'TP108026',
            nome: 'A/C Compressor Hyundai IX35, Sonata; Kia Sorento...(GREEN)',
            categorias: ['Ac Compressores', 'Kia Motors', 'Hyundai'],
            imagem: 'compressor-de-ar-ix35-sonata-sorento-green_1_1631899378.webp'
        },


        {
            id: 'TP104033',
            nome: 'A/C Compressor Hyundai IX35; Kia Sportage 2.0 (OEM)',
            categorias: ['Ac Compressores', 'Kia Motors', 'Hyundai'],
            imagem: '1_cm-dve16-3fix-ix-35-2010-kia-sportage-2013aoriginal-151cc5363d0a8b5b20829c636a6559e9.webp'
        },


        {
            id: 'TP102160',
            nome: 'A/C Compressor Hyundai Santa Fé; Kia Sorento...(GREEN)',
            categorias: ['Ac Compressores', 'Hyundai'],
            imagem: '1_cm-hcc-hyundai-santa-fe-27-07a10-azera-sorento-vera-cruz-43c2d9f6c826ff1e24d5ea282683344d.webp'
        },


        {
            id: 'TP102161',
            nome: 'A/C Compressor Hyundai Tucson 4cc 2007 - 2011 (GREEN)',
            categorias: ['Ac Compressores', 'Hyundai'],
            imagem: '1_cm-mod-halla-hcc-hyundai-tucson-4cc-07a11-green-30f323ce3e5ec3e5c7f09f45d50ae7e0.webp'
        },


        {
            id: 'TP102043',
            nome: 'A/C Compressor Hyundai Tucson; Kia Sportage 2.0 (GREEN)',
            categorias: ['Ac Compressores', 'Kia Motors', 'Hyundai'],
            imagem: 'compressor-de-ac-hyundai-tucson-kia-sportage-20-green_1_1617796363.webp'
        },


        {
            id: 'TP102106',
            nome: 'A/C Compressor Hyundai Veloster; Kia Cerato...(GREEN)',
            categorias: ['Ac Compressores', 'Kia Motors', 'Hyundai'],
            imagem: 'br-compressor-de-ar-condicionado-veloster-cerato-greenbr-1666896989.webp'
        },


        {
            id: 'TP108083',
            nome: 'A/C Compressor Kia Picanto 1.0 3cc 97701-xxxx',
            categorias: ['Ac Compressores', 'Kia Motors'],
            imagem: 'br-compressor-de-ar-condicionado-p-picanto-2011-a-2018-greenbr-1692980367.webp'
        },


        {
            id: 'TP103010',
            nome: 'A/C Compressor Kia Sorento 3.5 V6 Mod. HCC Polia 4PK',
            categorias: ['Ac Compressores', 'Kia Motors'],
            imagem: '1_cm-hcc-4pk-kia-sorento-35-v6-jdxaa-03-977013e200-adph100-0e13de596bd4ffb741d2d2e06637a4ea.webp'
        },


        {
            id: 'TP102210',
            nome: 'A/C Compressor Land Rover Discovery 3 DN 7SEU17',
            categorias: ['Ac Compressores', 'Land Rover'],
            imagem: 'compressor-de-ac-land-rover-discovery-3-7seu17_1_1617043311.webp'
        },


        {
            id: 'TP100204',
            nome: 'A/C Compressor Mahle 12V Chevrolet GM Astra, Vectra (OEM)',
            categorias: ['Ac Compressores', 'Chevrolet'],
            imagem: 'compressor-de-ac-mahle-chevrolet-gm-astra-vectra-oem-1649858059.webp'
        },


        {
            id: 'TP100205',
            nome: 'A/C Compressor Mahle 12V Chevrolet GM Vectra 1996 - 2005 (OEM)',
            categorias: ['Ac Compressores', 'Chevrolet'],
            imagem: 'compressor-de-ac-mahle-chevrolet-gm-vectra-1996-a-2005-oem16207641654.webp'
        },


        {
            id: 'TP100212',
            nome: 'A/C Compressor Mahle 12V Chevrolet GM Zafira 2.0 2001 - 12 (OEM)',
            categorias: ['Ac Compressores', 'Chevrolet'],
            imagem: 'compressor-de-ac-mahle-chevrolet-gm-zafira-20-01-a-12-oem16207647574.webp'
        },


        {
            id: 'TP100224',
            nome: 'A/C Compressor Mahle Peugeot 208 1.2 2017 - 2020 (OEM) 12V',
            categorias: ['Ac Compressores', 'Peugeot'],
            imagem: 'compressor-de-ac-mahle-peugeot-208-12-2017-2020-oem_1_1620151080.webp'
        },


        {
            id: 'TP104015',
            nome: 'A/C Compressor Mercedes-Benz C280, C320 2001 - 05 (GREEN)',
            categorias: ['Ac Compressores', 'Mercedes-Benz'],
            imagem: 'compressor-de-ac-mercedes-benz-c280-c320-2001-a-05-green_1_1620819202.webp'
        },


        {
            id: 'TP102007',
            nome: 'A/C Compressor Mercedes-Benz Classe A DN 6SEU Polia 5PK',
            categorias: ['Ac Compressores', 'Mercedes-Benz'],
            imagem: 'compressor-de-ac-mercedes-benz-classe-a-6seu-polia-5pk_1_1617910576.webp'
        },


        {
            id: 'TP103043',
            nome: 'A/C Compressor Mitsubishi L200 Sport, Savana, HPE 2001 - 2012',
            categorias: ['Ac Compressores', 'Mitsubishi'],
            imagem: 'compressor-de-ac-mitsubishi-l200-2001-a-2012-zx-dks-green_1_1620157738.webp'
        },


        {
            id: 'TP108057',
            nome: 'A/C Compressor Nissan March, Versa 1.6 2012 - 2019',
            categorias: ['Ac Compressores', 'Nissan'],
            imagem: 'br-compressor-de-ac-nissan-march-versa-16-2012-a-2015br-1668689145.webp'
        },


        {
            id: 'TP108071',
            nome: 'A/C Compressor Nissan March, Versa 2015 - 2022 (OEM)',
            categorias: ['Ac Compressores', 'Nissan'],
            imagem: 'ac-compressor-nissan-tiida-livina-20152016-original-calsonic_1_1614878160.webp'
        },


        {
            id: 'TP104090',
            nome: 'A/C Compressor Nissan March; Renault Clio, Sandero...(GREEN)',
            categorias: ['Ac Compressores', 'Renault'],
            imagem: 'br-compressor-de-ar-condicionado-march-clio-greenbr-1666978590.webp'
        },


        {
            id: 'TP102186',
            nome: 'A/C Compressor Nissan Sentra 2.0 2007 - 2013 (GREEN)',
            categorias: ['Ac Compressores', 'Nissan'],
            imagem: 'compressor-de-ac-nissan-sentra-20-2007-2013-green_1_1620937048.webp'
        },


        {
            id: 'TP105059',
            nome: 'A/C Compressor Nissan Sentra 2.0 2015>... AC Digital SD PXC14 (Original Sanden)',
            categorias: ['Ac Compressores', 'Nissan'],
            imagem: '1_cm-sanden-pxc14-nissan-sentra-20l-2015adigital-original-3c0585ed5b90d6f5c1485f1ff198efb5.webp'
        },


        {
            id: 'TP102069',
            nome: 'A/C Compressor Nissan Tiida; Renault Fluence...',
            categorias: ['Ac Compressores', 'Renault'],
            imagem: 'br-compressor-de-ac-p-nissan-tiida-renault-fluencebr-1693827751.webp'
        },


        {
            id: 'TP101166',
            nome: 'A/C Compressor Renault Duster, Oroch 2.0 2016>2018 Mod. Calsonic Polia 7PK',
            categorias: ['Ac Compressores', 'Renault'],
            imagem: 'compressor-de-ac-renault-duster-2016-a-18-mod-calsonic-7pk_1_1621884490.webp'
        },


        {
            id: 'TP100272',
            nome: 'A/C Compressor Renault Duster, Sandero, Logan... (GREEN) 12V',
            categorias: ['Ac Compressores', 'Renault'],
            imagem: 'compressor-de-ac-nissan-kicks-renault-logan-green-1641574656.webp'
        },


        {
            id: 'TP100289',
            nome: 'A/C Compressor Renault Kwid 2017 - 2024',
            categorias: ['Ac Compressores', 'Renault'],
            imagem: 'br-compressor-de-ac-p-renault-kwid-2017-2021-oembr-1675769732.webp'
        },


        {
            id: 'TP101037',
            nome: 'A/C Compressor Renault Megane 1.6 2001>2006, Scenic 1.6 2001>2012 DP V5',
            categorias: ['Ac Compressores', 'Renault'],
            imagem: 'cs20239_101213_1_615121e1b463559c9bd2c204f36bf982.webp'
        },


        {
            id: 'TP101089',
            nome: 'A/C Compressor ST TM13 Polia 8PK Saída Horizontal 8/10 12V',
            categorias: ['Ac Compressores'],
            imagem: '1_cm-seltec-tm13-8pk-8fix-12v-hrz-8-10-3c48f50014ba83f8d06e47d600dfae2d.webp'
        },


        {
            id: 'TP103032',
            nome: 'A/C Compressor Toyota Corolla 2.0 2008 - 2012 (GREEN)',
            categorias: ['Ac Compressores', 'Toyota'],
            imagem: '1_cm-moddenso-6seu14c-corolla-20-ate-2012-c-1-sensor-green-8010ab643d67ad1077f5ff35eb6e8763.webp'
        },


        {
            id: 'TP102040',
            nome: 'A/C Compressor Toyota Corolla 2003>08 10P15 6PK 3FIX (DENSO)',
            categorias: ['Ac Compressores', 'Toyota'],
            imagem: 'compressor-de-ac-p-toyota-corolla-2003-a-2008-10pa15-6pk-1701459084.webp'
        },


        {
            id: 'TP102101',
            nome: 'A/C Compressor Toyota Corolla 2008 - 2011',
            categorias: ['Ac Compressores', 'Toyota'],
            imagem: 'br-compressor-ar-condicionado-10s15-toyota-corolla-2008-a-2011br-1666980039.webp'
        },


        {
            id: 'TP102077',
            nome: 'A/C Compressor Toyota Corolla 2011-14 - 2 Sensor (GREEN)',
            categorias: ['Ac Compressores', 'Toyota'],
            imagem: '1_cm-mod-denso-tse14c-corolla-18-c-2-sensor-green-55798a8ffaddf99dacd7d04bc25b9262.webp'
        },


        {
            id: 'TP105049',
            nome: 'A/C Compressor Toyota Corolla, RAV 4... 1 Sensor (GREEN)',
            categorias: ['Ac Compressores', 'Toyota'],
            imagem: 'br-compressor-de-ar-condicionado-corolla-rav-41-sensor-grnbr-1666978934.webp'
        },


        {
            id: 'TP101138',
            nome: 'A/C Compressor Toyota Etios 1.3, 1.5 2012 - 2017 (OEM)',
            categorias: ['Ac Compressores', 'Toyota'],
            imagem: '1_cm-denso-10se13c-toyota-etios-12a17-original-3e30f64cd982e47ce6f492fe2b9ec2ed.webp'
        },


        {
            id: 'TP101101',
            nome: 'A/C Compressor Toyota Etios 1.3, 1.5 2012 - 2020 (GREEN)',
            categorias: ['Ac Compressores', 'Toyota'],
            imagem: 'compressor-de-ac-toyota-etios-13-15-2012-a-2020-green16137370231.webp'
        },


        {
            id: 'TP102092',
            nome: 'A/C Compressor Toyota Hilux, SW4...(GREEN)',
            categorias: ['Ac Compressores', 'Toyota'],
            imagem: 'compressor-de-ar-condicionado-hilux-sw4-green-1642417368.webp'
        },


        {
            id: 'TP102013',
            nome: 'A/C Compressor Universal 10P08 1V 12V 3 Fixações (GREEN)',
            categorias: ['Ac Compressores', 'Fiat', 'VolksWagen'],
            imagem: 'compressor-de-ac-universal-10p08-1v-12v-3-fixacoes-green_1_1617910615.webp'
        },


        {
            id: 'TP102113',
            nome: 'A/C Compressor Universal 10P08 6PK 12V 3 Fixações (GREEN)',
            categorias: ['Ac Compressores', 'VolksWagen', 'Fiat'],
            imagem: 'compressor-de-ar-universal-10p08-6pk-12v-3-fixacoes-green_1_1629112942.webp'
        },


        {
            id: 'TP101160',
            nome: 'A/C Compressor Universal 5H14 8PK 24V 8 Fixações (OEM)',
            categorias: ['Ac Compressores'],
            imagem: '1_cm-sanden-5h14-8pk-24v-8fix-saida-vert-8-10-original-74489bb3f3bdae4037321d269a00197f.webp'
        },


        {
            id: 'TP101104',
            nome: 'A/C Compressor Universal TM08 8PK 24V 3 Fixações',
            categorias: ['Ac Compressores'],
            imagem: 'compressor-de-ac-universal-tm08-8pk-24v-3-fixacoes_1_1632252801.webp'
        },


        {
            id: 'TP101095',
            nome: 'A/C Compressor Universal TM16 8PK 12V 8 Fixações (GREEN)',
            categorias: ['Ac Compressores'],
            imagem: 'br-compressor-de-ac-universal-tm16-8pk-12v-8-fixacoes-greenbr-1676573773.webp'
        },


        {
            id: 'TP104088',
            nome: 'A/C Compressor Volkswagen Crossfox, Fox... - Motor Msi',
            categorias: ['Ac Compressores', 'VolksWagen'],
            imagem: 'compressor-de-ac-volkswagen-crossfox-fox-motor-msi_1_1615567434.webp'
        },


        {
            id: 'TP101183',
            nome: 'A/C Compressor Volkswagen Jetta 2.5 SD PXE16 1621 Polia Dupla (Original Sanden)',
            categorias: ['Ac Compressores', 'VolksWagen'],
            imagem: 'compressor-de-ac-volks-jetta-25-sd-pxe16-polia-dupla-oem_1_1617889558.webp'
        },


        {
            id: 'TP104099',
            nome: 'A/C Compressor Volkswagen Jetta, Beetle, Novo Fusca (GREEN) - TP104099',
            categorias: ['Ac Compressores', 'VolksWagen'],
            imagem: '2_cm-mod-pxe16-1621-vw-jetta-25-polia-dupla-320f0339bc572399c6b38515a8f83701.webp'
        },


        {
            id: 'TP108089',
            nome: 'A/C Compressor Volvo XC60 2.0, X90 / Land Rover Freelander 2',
            categorias: ['Ac Compressores', 'Volvo', 'Land Rover'],
            imagem: 'compressor-de-ac-volvo-xc60-20-land-rover-freelander-2_1_1618257430.webp'
        },


        {
            id: 'TP102214',
            nome: 'A/C Compressor VS16 4pk Hyundai I30 / Elantra 2.0l 2007>2012 (Green)',
            categorias: ['Ac Compressores', 'VolksWagen', 'Hyundai'],
            imagem: 'compressor-de-ac-hyundai-i30-hl-vs16-polia-4pk-green_1_1617133475.webp'
        },


        {
            id: 'TP131049',
            nome: 'A/C Compressor VW Golf, Passat, Polo / Audi A3 ? 12V (GREEN)',
            categorias: ['Ac Compressores', 'Audi', 'VolksWagen'],
            imagem: 'br-compressor-ac-p-audi-a3-1997-a-96-golf-1999-a-14-passatbr-1692387100.webp'
        },


        {
            id: 'TP100280',
            nome: 'CM 10SRE13C 12V 3FIX FORD NV KA 1.0 14A..(E3B119D629BA) (MI)',
            categorias: ['Ac Compressores', 'Ford'],
            imagem: 'compressor-de-ac-ford-novo-ka-10-14-a-10sre13c-3fix-1641574769.webp'
        },


        {
            id: 'TP345014',
            nome: 'Adaptador p/ Compressor cvc Delphi GM Astra 1999>2001',
            categorias: ['Adaptadores', 'Chevrolet'],
            imagem: '1_adaptador-p-cm-cvc-delphi-gm-astra-99-01-437ade6a45ad16355c1bd5ca488f61c8.webp'
        },


        {
            id: 'TP345023',
            nome: 'Adaptador p/ Compressor Delphi Cobalt 1.4',
            categorias: ['Adaptadores', 'Chevrolet'],
            imagem: '1_adaptador-p-cm-delphi-cobalt-14-usar-ds101003-637fb6ef20c2514a0f5c3c8801d953a1.webp'
        },


        {
            id: 'TP120015',
            nome: 'Bobina p/ Compressor Calsonic Fiat Palio Fire, Uno Fire',
            categorias: ['Bobinas', 'Fiat '],
            imagem: 'bobina-para-compressor-calsonic-fiat-palio-fire-uno-fire-1638186952.webp'
        },


        {
            id: 'TP120048',
            nome: 'Bobina p/ Compressor CVC GM Astra, Celta, Corsa, Meriva',
            categorias: ['Bobinas', 'Chevrolet'],
            imagem: 'br-bobina-para-compressor-cvc-gm-astra-celta-corsa-merivabr-1685444830.webp'
        },


        {
            id: 'TP120079',
            nome: 'Bobina p/ Compressor Delphi CVC Peugeot 206 / Volkswagen Gol G5, Fox 12V',
            categorias: ['Bobinas', 'VolksWagen'],
            imagem: 'br-bobina-para-compressor-delphi-cvc-peugeot-206-volkswagen-gol-g5-fox-12vbr-1696357336.webp'
        },


        {
            id: 'TP120057',
            nome: 'Bobina p/ Compressor DN 10SRE11C Honda Civic, Fit, City 2014',
            categorias: ['Bobinas ', 'Honda'],
            imagem: 'bobina-para-compressor-dn-10sre11c-honda-civic-fit-city-2014-1656099270.webp'
        },


        {
            id: 'TP120074',
            nome: 'Bobina p/ Compressor DN 10SRE11C Toyota Etios, Hilux 2017 a 2023',
            categorias: ['Bobinas', 'Toyota'],
            imagem: 'br-br-bobina-para-compressor-dn-10sre11c-toyota-etios-hilux-2017-a-2023br-1696357255.webp'
        },


        {
            id: 'TP120102',
            nome: 'Bobina p/ Compressor DN 6P, 10PA15, 10PA17, 10S17, 7SB16 12V (Alta)',
            categorias: ['Bobinas', 'Hyundai'],
            imagem: 'bobina-para-compressor-6p-10pa15-10pa17-10s17-12v-alta-1638468071.webp'
        },


        {
            id: 'TP120009',
            nome: 'Bobina p/ Compressor DN 7SB16C BMW / Mercedes-Benz C280 / Volkswagen Gol',
            categorias: ['Bobinas', 'Mercedes-Benz'],
            imagem: 'bobina-p-compressor-dn-7sb16c-bmw-mercedes-benz-c280-volkswagen-gol16137370611.webp'
        },


        {
            id: 'TP120011',
            nome: 'Bobina p/ Compressor DN SC08C, SCROLL (Grande) Fiat Palio Fire 12V',
            categorias: ['Bobinas', 'Fiat'],
            imagem: '1_bobina-p-cm-denso-scroll-fiat-palio-grande-8bebe8742819a5a5e4a45c2378e0b0db.webp'
        },


        {
            id: 'TP120058',
            nome: 'Bobina p/ Compressor DN SCS06 DN SCROLL (Pequeno) Fiat Palio Fire, Punto 1.4, Punto 1.8, Strada 12V',
            categorias: ['Bobinas', 'Fiat'],
            imagem: '1_bobina-p-cm-denso-scroll-fiat-palio-fire-pequena-8f919ffabd4dca077eab9bc3a656218b.webp'
        },


        {
            id: 'DS120120',
            nome: 'Bobina p/ Compressor Doowon V09 Volkswagen Up Eixo c/ Rosca',
            categorias: ['Bobinas',],
            imagem: 'bobina-para-compressor-doowon-v09-volkswagen-up-eixo-c-rosca-1656099334.webp'
        },


        {
            id: 'TP120103',
            nome: 'Bobina p/ Compressor DP CVC Fiat Palio, Mobi, Uno 2014 a 2024 / Volkswagen UP',
            categorias: ['Bobinas', 'Fiat'],
            imagem: 'bobina-para-compressor-cvc-palio-mobi-uno-2014-vw-up-1638468147.webp'
        },


        {
            id: 'TP120059',
            nome: 'Bobina p/ Compressor DP CVC GM Cruze 1.8 16V, Cobalt 2012>2016 / Fiat Linea 1.9 2009>2010',
            categorias: ['Bobinas', 'Chevrolet'],
            imagem: 'bobina-para-compressor-cvc-cruze-18-cobalt-linea-1916137370701.webp'
        },


        {
            id: 'TP120066',
            nome: 'Bobina p/ Compressor DP CVC Renault Megane 2006>2012',
            categorias: ['Bobinas', 'Renault'],
            imagem: '1_bobina-p-cm-delphi-cvc-megane-06-12-mi-3817545d407fc050b30113f507d20256.webp'
        },


        {
            id: 'TP120088',
            nome: 'Bobina p/ Compressor DP CVC Volkswagen Fox, Cross UP, Golf 2007 a 2023 12V',
            categorias: ['Bobinas', 'VolksWagen'],
            imagem: 'br-bobina-para-compressor-cvc-golf-07-cross-up-fox-6pk-todosbr-1696357606.webp'
        },


        {
            id: 'TP120085',
            nome: 'Bobina p/ Compressor DP CVC Volkswagen Gol G3, G4',
            categorias: ['Bobinas', 'VolksWagen'],
            imagem: '1_bobina-p-cm-delphi-cvc-vw-gol-g3-g4-99d8a64c2554765104d87c05f43f392d.webp'
        },


        {
            id: 'TP120109',
            nome: 'Bobina p/ Compressor DP GM Spin, Onix, Prisma (Pequena)',
            categorias: ['Bobinas', 'Chevrolet'],
            imagem: 'br-bobina-p-compressor-spin-onix-prisma-trackerpequenabr-1696358142.webp'
        },


        {
            id: 'TP120038',
            nome: 'Bobina p/ Compressor DP V5 GM Vectra 1996>2002, Corsa 1994>1999',
            categorias: ['Bobinas', 'Chevrolet'],
            imagem: 'bobina-para-compressor-v5-vectra-96-a-02-corsa-94-a-99-1656099173.webp'
        },


        {
            id: 'TP120031',
            nome: 'Bobina p/ Compressor FD FX15, FS10 Ford Fiesta, Ka (Pequena)',
            categorias: ['Bobinas', 'Ford'],
            imagem: '1_bobina-p-cm-fs10-fx15-ford-ka-fiesta-pequena-9a7c130c62aaa5213f1ae537784a4b39.webp'
        },


        {
            id: 'TP120067',
            nome: 'Bobina p/ Compressor HL Ford (Média)',
            categorias: ['Bobinas'],
            imagem: 'bobina-p-compressor-hl-ford-media16137370711.webp'
        },


        {
            id: 'TP120112',
            nome: 'Bobina p/ Compressor HL VS16, VS11 Ford Focus Sigma, Transit',
            categorias: ['Bobinas', 'Ford'],
            imagem: 'bobina-p-compressor-hl-vs16-vs11-ford-focus-sigma-transit16137376881.webp'
        },


        {
            id: 'TP120113',
            nome: 'Bobina p/ Compressor Nissan Sentra Zexel DCS171C 2007 / Transit 2009>...',
            categorias: ['Bobinas', 'Nissan'],
            imagem: '1_bobina-p-cm-nissan-sentra-zexel-dcs171c-2007-transit-09a-2585c8e940e9af15af35f58d582467d7.webp'
        },


        {
            id: 'TP120070',
            nome: 'Bobina p/ Compressor Sanden TRS90 Ford Focus / Fiesta',
            categorias: ['Bobinas', 'Ford'],
            imagem: '1_bobina-p-cm-sanden-trs90-ford-focus-fiesta-3545c580fc7a6f570df6e7a2203feba1.webp'
        },


        {
            id: 'TP120026',
            nome: 'Bobina p/ Compressor SD SD7V16 Renault Clio, Sandero / Peugeot 307 / Citroen C4',
            categorias: ['Bobinas', 'Renault'],
            imagem: 'bobina-para-compressor-sd7v16-clio-sandero-307-c4_1_1607439120.webp'
        },


        {
            id: 'TP120028',
            nome: 'Bobina p/ Compressor SD SD7V16 Volkswagen Golf / Audi 1995>1999 12V',
            categorias: ['Bobinas', 'VolksWagen'],
            imagem: 'bobina-para-compressor-sd7v16-golf-audi-1995-1999-12v16137370641.webp'
        },


        {
            id: 'TP120052',
            nome: 'Bobina p/ Compressor SD SD7V16 Volkswagen Golf / Audi 2000>2007',
            categorias: ['Bobinas', 'VolksWagen', 'Audi'],
            imagem: '1_bobina-p-cm-sanden-sd7v16-vw-golf-audi-00-07-94a57144270e8562879f0497c82f0091.webp'
        },


        {
            id: 'TP120086',
            nome: 'Bobina p/ Compressor SD TRS90 Honda Civic, Fit',
            categorias: ['Bobinas', 'Honda'],
            imagem: 'br-bobina-para-compressor-sanden-trs90-honda-civic-fitbr-1696357450.webp'
        },


        {
            id: 'TP120025',
            nome: 'Bobina p/ Compressor ST TM21 12V',
            categorias: ['Bobinas'],
            imagem: 'bobina-para-compressor-seltec-tm21-12v16137370631.webp'
        },


        {
            id: 'TP120047',
            nome: 'Bobina p/ Compressor Zexel GM Corsa 1994>1999 12V (Grande)',
            categorias: ['Bobinas', 'Chevrolet'],
            imagem: 'bobina-para-compressor-zexel-gm-corsa-1994-1999-12v-gde_1_1599141647.webp'
        },


        {
            id: 'TP135113',
            nome: 'Conjunto Embreagem p/ Compressor Audi A6/Lamborghini Gallardo 2004-08',
            categorias: ['Conjuntos Embreagem', 'Audi', 'LAMBORGHINI', 'VolksWagen'],
            imagem: '1_cj-embreagem-audi-a6-lamborghini-gallardo-2004-08-1f808284690866a10f31993ae744cf36.webp'
        },


        {
            id: 'TP135135',
            nome: 'Conjunto Embreagem p/ Compressor DN 10S17 BMW X5 3.0L, M54 / Mercedes-Benz Sprinter 5PK 12V',
            categorias: ['Conjuntos Embreagem', 'BMW'],
            imagem: '3_cj-embreagem-p-cm-10s17-5pk-bmw-x5-30l-m54-sprinter-b61904be660a184c3da1a7188caa3083.webp'
        },


        {
            id: 'TP135071',
            nome: 'Conjunto Embreagem p/ Compressor DN 7SB16C BMW 325I, 328I 5PK 110mm 12V',
            categorias: ['Conjuntos Embreagem', 'BMW'],
            imagem: '1_cj-embreagem-p-cm-bmw-7sb16c-325i328i-polia-110mm-5pk-08cbf27eb55b6d1693d245da1aeca5f5.webp'
        },


        {
            id: 'TP134016',
            nome: 'Conjunto Embreagem p/ Compressor DN 7SEU16 Mercedes-Benz Classe A 6PK',
            categorias: ['Conjuntos Embreagem', 'Land Rover', 'BMW', 'Mercedes-Benz'],
            imagem: '6_cj-embreagem-p-cm-denso-7seu16-6pk-mb-classe-a-d8e83c92d2dc5e3594c782fafe39a6f9.webp'
        },


        {
            id: 'TP135064',
            nome: 'Conjunto Embreagem p/ Compressor DN 7SEU17C Mercedes-Benz C240, CLK320, C320 2001>2009 7PK',
            categorias: ['Conjuntos Embreagem', 'Mercedes-Benz', 'Land Rover'],
            imagem: '1_cj-embreagem-cm-denso-7seu17c-7pk-c240-01a09-26l-d72e42b2f7b5df700b843222776f3ffa.webp'
        },


        {
            id: 'TP135052',
            nome: 'Conjunto Embreagem p/ Compressor SD 7H15 2A 12V',
            categorias: ['Conjuntos Embreagem'],
            imagem: '1_cj-embreagem-p-cm-7h15-2a-12v-78830cb926b3b7360f894aefb188230c.webp'
        },


        {
            id: 'TP135050',
            nome: 'Conjunto Embreagem p/ Compressor SD 7H15 8PK 12V',
            categorias: ['Conjuntos Embreagem', 'Land Rover'],
            imagem: '1_cj-embreagem-p-cm-7h15-8pk-12v-dc5ef9b03bae67f8eaf52ff249a6bfba.webp'
        },


        {
            id: 'TP125059',
            nome: 'Cubo p/ Compressor Calsonic Fiat Palio, Uno 2004>...',
            categorias: ['Cubos', 'Fiat'],
            imagem: 'cubo-para-compressor-calsonic-fiat-palio-uno-2004-em-diante-1651249780.webp'
        },


        {
            id: 'TP125012',
            nome: 'Cubo p/ Compressor DN 10P08',
            categorias: ['Cubos', 'VolksWagen', 'Fiat'],
            imagem: 'br-cubo-para-compressor-denso-10p08br-1696358418.webp'
        },


        {
            id: 'TP125057',
            nome: 'Cubo p/ Compressor DN 10PA15, 10PA17, 10S15, 7SB16C (Baixo)',
            categorias: ['Cubos', 'Kia Motors', 'Hyundai', 'Toyota', 'MERCEDES-BENZ', 'IVECO', 'VolksWagen'],
            imagem: 'cubo-p-compressor-10pa15-10pa17-10s15-7sb16c-baixo_1_1615567501.webp'
        },


        {
            id: 'TP125039',
            nome: 'Cubo p/ Compressor DN 10SE13C, 10SRE11C Toyota Etios / Honda Civic 1.8, 2.0 2014>... / Ford Ka Novo',
            categorias: ['Cubos', 'Honda', 'Toyota', 'Ford'],
            imagem: '1_cubo-p-cm-10sre11c-civic-14-etios-10se13c-nv-ka-recon-cb5b4b4bb4db4101e20f10270c8408b2.webp'
        },


        {
            id: 'TP125001',
            nome: 'Cubo p/ Compressor DN 6P, 10P15 (Borracha)',
            categorias: ['Cubos', 'Mitsubishi', 'VOLKSWAGEN', 'MERCEDES-BENZ', 'Ford'],
            imagem: 'cubo-para-compressor-denso-6p-10p15-borracha-16137370941.webp'
        },


        {
            id: 'TP125006',
            nome: 'Cubo p/ Compressor DN 6P, 10P15 (Palheta)',
            categorias: ['Cubos', 'Ford', 'Mitsubishi'],
            imagem: '1_cubo-palheta-p-cm-6p148-10p15-7313be4736576c362b260acb378ae674.webp'
        },


        {
            id: 'TP125016',
            nome: 'Cubo p/ Compressor DN 6SEU Volkswagen Polo 2002>2008',
            categorias: ['Cubos', 'VolksWagen'],
            imagem: 'cubo-p-compressor-dn-6seu-volkswagen-polo-2002200816137371081.webp'
        },


        {
            id: 'TP125029',
            nome: 'Cubo p/ Compressor DN SCROLL (Pequeno) Fiat Palio Fire',
            categorias: ['Cubos', 'Fiat', 'Toyota', 'Ford'],
            imagem: '1_cubo-p-cm-scroll-menor-fiat-palio-fire-63c212e271de02ee766cdf0210019d9f.webp'
        },


        {
            id: 'TP125055',
            nome: 'Cubo p/ Compressor DP CVC Fiat Mobi',
            categorias: ['Cubos', 'Fiat', 'VolksWagen', 'Jeep'],
            imagem: 'cubo-para-compressor-cvc-fiat-mobi-1656099503.webp'
        },


        {
            id: 'TP125071',
            nome: 'Cubo p/ Compressor DP CVC Fiat Uno, Palio / Volkswagen UP',
            categorias: ['Cubos', 'VolksWagen', 'Fiat', 'Jeep'],
            imagem: 'cubo-para-compressor-dp-cvc-fiat-uno-palio-volkswagen-up-1651249952.webp'
        },


        {
            id: 'TP125022',
            nome: 'Cubo p/ Compressor DP V5 GM Corsa 1994>2001 (Chaveta)',
            categorias: ['Cubos', 'Chevrolet'],
            imagem: 'cubo-p-compressor-dp-v5-gm-corsa-19942001-chaveta16137371091.webp'
        },


        {
            id: 'TP125027',
            nome: 'Cubo p/ Compressor DP V5 GM Vectra 1996>2002',
            categorias: ['Cubos', 'Renault'],
            imagem: 'cubo-p-compressor-dp-v5-gm-vectra-1996200216137371111.webp'
        },


        {
            id: 'TP125011',
            nome: 'Cubo p/ Compressor FD FX15, FS10 Estriado (Alto)',
            categorias: ['Cubos', 'Ford'],
            imagem: 'cubo-p-compressor-fd-fx15-fs10-estriado-alto16137371001.webp'
        },


        {
            id: 'TP125013',
            nome: 'Cubo p/ Compressor FD FX15, FS10 Estriado (Baixo)',
            categorias: ['Cubos', 'Ford'],
            imagem: 'br-cubo-para-compressor-ford-fx15-fs10-estriado-baixo-br-1696358567.webp'
        },


        {
            id: 'TP125054',
            nome: 'Cubo p/ Compressor Ford Focus Fastback SE 2017',
            categorias: ['Cubos', 'Ford'],
            imagem: 'cubo-para-compressor-ford-focus-fastback-se-2017_1_1610113072.webp'
        },


        {
            id: 'TP125073',
            nome: 'Cubo p/ Compressor GM Spin, Onix, Prisma',
            categorias: ['Cubos', 'Chevrolet'],
            imagem: 'cubo-para-compressor-gm-spin-onix-prisma16137371311.webp'
        },


        {
            id: 'TP125007',
            nome: 'Cubo p/ Compressor SD SD7V16 Volkswagen Golf 1995>1999 (Chaveta)',
            categorias: ['Cubos', 'Volkswagen', 'Fiat'],
            imagem: 'cubo-p-compressor-sd-sd7v16-volkswagen-golf-19951999-chaveta16137370992.webp'
        },


        {
            id: 'TP125053',
            nome: 'Cubo p/ Compressor SD TRS90 Honda Civic 1993>1997',
            categorias: ['Cubos', 'Honda', 'Ford'],
            imagem: 'cubo-para-compressor-sd-trs90-honda-civic-19931997-1651249657.webp'
        },


        {
            id: 'TP125019',
            nome: 'Cubo p/ Compressor ST TM13, TM15, TM16 (Estriado)',
            categorias: ['Cubos'],
            imagem: 'cubo-para-compressor-sseltec-tm13-tm15-tm16-estriado-_1_1611255677.webp'
        },


        {
            id: 'TP125070',
            nome: 'CUBO P/CM HB20 1.0',
            categorias: ['Cubos', 'Hyundai'],
            imagem: 'br-cubo-compressor-de-ac-df11-p-hb20-hb20s-10-2013-em-diantebr-1692980493.webp'
        },


        {
            id: 'TP150017',
            nome: 'Tampa Frontal p/ CM CVC Denso / Delphi GM Corsa / Volks G5',
            categorias: ['Outros Componentes', 'Tampas compressores'],
            imagem: 'br-tampa-frontal-para-compressor-cvc-corsag5-densodelphi-chinesbr-1668689592.webp'
        },


        {
            id: 'TP130142',
            nome: 'Polia 6pk p/ Compressor Sanden SD7V16 Renault Scenic/ Picasso',
            categorias: ['Polias'],
            imagem: '1_polia-6pk-p-cm-sanden-sd7v16-renault-scenic-picasso-ccfd21134d38f0e34257ea416a84d43c.webp'
        },


        {
            id: 'TP130016',
            nome: 'Polia 6PK para Compressor Denso 7SB16C Volks Gol, Parati',
            categorias: ['Polias', 'VolksWagen'],
            imagem: 'polia-6pk-pcm-denso-7sb16c-vw-golparati_1_1625505474.webp'
        },


        {
            id: 'TP709012',
            nome: 'Polia Motriz',
            categorias: ['Polias'],
            imagem: '1_polia-motriz-diversos--3fb0d73512563f90f0c4cb7ea6622395.webp'
        },


        {
            id: 'TP130032',
            nome: 'Polia p/ Compressor 6pk 10SRE11C Toyota Etios (Denso)',
            categorias: ['Polias', 'Toyota'],
            imagem: '1_polia-6pk-p-cm-denso-10sre11c-toyota-etios-ac1006cfb4c87c71f1117ccde1746c02.webp'
        },


        {
            id: 'TP131053',
            nome: 'Polia p/ Compressor Denso 10P08 Canal 1V',
            categorias: ['Polias', 'VolksWagen', 'Fiat'],
            imagem: '1_polia-canal-1v-p-cm-denso-10p08-ad2a2c57a0e1c00ee022ac342b2180a3.webp'
        },


        {
            id: 'TP131033',
            nome: 'Polia p/ Compressor DN 10P08 6PK',
            categorias: ['Polias', 'VolksWagen', 'Fiat'],
            imagem: '1_polia-6pk-p-cm-denso-10p08-3d9b630d8d2cf77f269a377abc0ded1f.webp'
        },


        {
            id: 'TP131077',
            nome: 'Polia p/ Compressor DN 10P15 Mitsubishi L200 1992>2006 1V (Avancada)',
            categorias: ['Polias', 'Mitsubishi'],
            imagem: 'br-polia-1v-p-compressor-10p15-l200-1992-a-2006-avancadabr-1696359031.webp'
        },


        {
            id: 'TP130018',
            nome: 'Polia p/ Compressor DN 10P15 Toyota Corolla 2003>2008 6PK',
            categorias: ['Polias', 'Toyota'],
            imagem: '1_polia-6pk-p-cm-denso-10p15-toyota-corolla-03-08-3fb717e5495b1792b63ccf1bb0dfd650.webp'
        },


        {
            id: 'TP130060',
            nome: 'Polia p/ Compressor DN 10SRE13C Ford Ecosport 1.5 2018>... 6PK',
            categorias: ['Polias', 'Ford'],
            imagem: '1_polia-6pk-p-cm-10sre13c-ecosport-15-2018-89438bb727d1455b6ae78f30f214a9a4.webp'
        },


        {
            id: 'TP131037',
            nome: 'Polia p/ Compressor DN 6P, 10PA15, 10PA17 1V',
            categorias: ['Polias', 'Toyota'],
            imagem: 'polia-p-compressor-dn-6p-10pa15-10pa17-1v16137371811.webp'
        },


        {
            id: 'TP131097',
            nome: 'Polia p/ Compressor DN 6P, 10PA15, 10PA17 6PK',
            categorias: ['Polias'],
            imagem: 'polia-p-compressor-dn-6p-10pa15-10pa17-6pk_1_1613043926.webp'
        },


        {
            id: 'TP131057',
            nome: 'Polia p/ Compressor DN 6P, 10PA15, 10PA17 8PK',
            categorias: ['Polias'],
            imagem: 'polia-para-compressor-dn-6p-10pa15-10pa17-8pk-1651250045.webp'
        },


        {
            id: 'TP130059',
            nome: 'Polia p/ Compressor DN 7SB16C BMW 5PK',
            categorias: ['Polias', 'BMW'],
            imagem: 'polia-p-compressor-dn-7sb16c-bmw-5pk16137371531.webp'
        },


        {
            id: 'TP131021',
            nome: 'Polia p/ Compressor DN 7SB16C Mercedes-Benz C280 6PK',
            categorias: ['Polias', 'MERCEDES-BENZ'],
            imagem: 'polia-para-compressor-dn-7sb16c-mercedes-benz-c280-6pk16137371721.webp'
        },


        {
            id: 'TP134025',
            nome: 'Polia p/ Compressor DP CVC Fiat, Uno, Palio, Up, Mobi 2014 a 2024 5PK',
            categorias: ['Polias', 'Fiat'],
            imagem: 'br-polia-5pk-para-compressor-cvc-fiat-uno-palio-up-mobibr-1696359701.webp'
        },


        {
            id: 'TP130144',
            nome: 'Polia p/ Compressor DP CVC Volkswagen Gol G5, Fox 2008>... 3PK',
            categorias: ['Polias', 'VolksWagen'],
            imagem: 'br-polia-3pk-para-compressor-delphi-cvc-gol-g5fox-2008-a-br-1696358712.webp'
        },


        {
            id: 'TP130022',
            nome: 'Polia p/ Compressor DP V5 GM Omega, S10 2.0, 2.2 1V',
            categorias: ['Polias', 'Chevrolet'],
            imagem: 'polia-p-compressor-dp-v5-gm-omega-s10-20-22-1v16137371431.webp'
        },


        {
            id: 'TP132005',
            nome: 'Polia p/ Compressor FD FX15, FS10 Ford Fiesta, Ka 2001>... 6PK',
            categorias: ['Polias', 'Ford'],
            imagem: '1_polia-6pk-p-cm-fs10-fx15-ford-fiesta-ka-120c78d3bf68339ed1a218e15874c6bf.webp'
        },


        {
            id: 'TP134026',
            nome: 'Polia p/ Compressor GM Spin, Onix, Prisma 5PK',
            categorias: ['Polias', 'Chevrolet'],
            imagem: 'polia-para-compressor-gm-spin-onix-prisma-5pk-1651250788.webp'
        },


        {
            id: 'TP134007',
            nome: 'Polia p/ Compressor Mod. EV61 Ford Focus Fastback SE 2017 4PK',
            categorias: ['Polias', 'Ford'],
            imagem: 'polia-p-compressor-mod-ev61-ford-focus-fastback-se-2017-4pk_1_1613044148.webp'
        },


        {
            id: 'TP133021',
            nome: 'Polia p/ Compressor SD SD7B10 6PK',
            categorias: ['Polias'],
            imagem: 'polia-para-compressor-sanden-sd7b10-6pk16137372071.webp'
        },


        {
            id: 'TP133004',
            nome: 'Polia p/ Compressor SD SD7V16 Renault Logan, Sandero 6PK',
            categorias: ['Polias', 'Hyundai', 'Kia Motors', 'Renault'],
            imagem: 'polia-p-compressor-sd-sd7v16-renault-logan-sandero-6pk16137371981.webp'
        },


        {
            id: 'TP131024',
            nome: 'Polia p/ Compressor SD SD7V16 Volkswagen Golf 1995>1999 6PK',
            categorias: ['Polias', 'VolksWagen', 'Audi'],
            imagem: 'polia-para-compressor-sanden-sd7v16-vw-golf-1995-1999-6pk16137371751.webp'
        },


        {
            id: 'TP131025',
            nome: 'Polia p/ Compressor SD SD7V16 Volkswagen Golf 2000>2007 7PK',
            categorias: ['Polias', 'VolksWagen', 'Audi'],
            imagem: '1_polia-7pk-p-cm-sanden-sd7v16-golf-00-07-b8eccb03d7061e9c6ee7f88bfb01605b.webp'
        },


        {
            id: 'TP130012',
            nome: 'Polia p/ Compressor SD TRS90 Ford Focus G2 2008>2013 Motor Sigma 5PK',
            categorias: ['Polias', 'Ford'],
            imagem: 'polia-p-compressor-sd-trs90-ford-focus-g2-20082013-motor-sigma-5pk16137371381.webp'
        },


        {
            id: 'TP130019',
            nome: 'Polia p/ Compressor ZX DCS171C Renault Master 2014>... 7PK',
            categorias: ['Polias', 'Renault'],
            imagem: 'polia-p-compressor-zx-dcs171c-renault-master-2014-7pk16137371391.webp'
        },


        {
            id: 'TP140003',
            nome: 'ROL P/CM DELPHI/DENSO/MAHLE CVC 35X50X20 (M.I)',
            categorias: ['Rolamentos', 'Honda', 'VolksWagen', 'Chevrolet', 'Fiat', 'Audi'],
            imagem: 'rol-pcm-delphidensomahle-cvc-35x50x20-mi_1_1625839609.webp'
        },


        {
            id: 'TP140011',
            nome: 'Rolamento p/ Compressor 30x47x22',
            categorias: ['Rolamentos'],
            imagem: '1_rol-30x47x22-b7e83e83b4bbfa189beea056c5b95acd.webp'
        },


        {
            id: 'TP140049',
            nome: 'Rolamento p/ Compressor Calsonic Nissan March, Versa - Renault Duster, Sandero, Logan 30x47x18',
            categorias: ['Rolamentos', 'Renault', 'Nissan', 'Chevrolet'],
            imagem: '2_rol-p-cm-calsonic-nissan-march-versa-30x47x18-0a88730c60677b07177032578f60974d.webp'
        },


        {
            id: 'TP140006',
            nome: 'Rolamento p/ Compressor Delphi / Denso / Mahle CVC JAC 3 - 35x50x20 (Original NSK)',
            categorias: ['Rolamentos', 'Fiat', 'Chevrolet', 'VolksWagen'],
            imagem: 'rolamento-p-compressor-delphi-denso-mahle-cvc-jac-3-35x50x20-original-nsk16137372402.webp'
        },


        {
            id: 'TP140020',
            nome: 'Rolamento p/ Compressor Delphi Agulha',
            categorias: ['Rolamentos'],
            imagem: '2_rol-agulha-delphi-8096ac28f08831ab1ec57fd28586a83d.webp'
        },


        {
            id: 'TP140028',
            nome: 'Rolamento p/ Compressor DN 10P08 - 38x54x17 (Original NSK)',
            categorias: ['Rolamentos', 'VolksWagen', 'Fiat'],
            imagem: 'rolamento-p-compressor-dn-10p08-38x54x17-original-nsk16137372442.webp'
        },


        {
            id: 'TP140039',
            nome: 'Rolamento p/ Compressor DN 10S15, 10S17, 10PA15, 10PA17 - 30x52x22 (Original NSK)',
            categorias: ['Rolamentos'],
            imagem: '2_rol-p-cm-10s15-10s17-10pa17-10pa15-30x52x22-original-nsk-03f0a00303312f5ae9089a34ea0d1af3.webp'
        },


        {
            id: 'TP140008',
            nome: 'Rolamento p/ Compressor DN 10SRE11C Honda Civic Novo / Toyota Etios - 52x30x20',
            categorias: ['Rolamentos', 'Honda', 'Toyota'],
            imagem: '2_rol-p-cm-denso-10sre11c-nv-civic-toyota-etios-52x30x20-8271ee33c41fa371d2dfa3d3d96df7cf.webp'
        },


        {
            id: 'TP140027',
            nome: 'Rolamento p/ Compressor DN 6P, 10P15 / SD 5H14 - 40x62x24 (Original NSK)',
            categorias: ['Rolamentos', 'Mitsubishi', 'MERCEDES-BENZ', 'Ford', 'VOLKSWAGEN', 'Toyota'],
            imagem: 'rolamento-p-compressor-dn-6p-10p15-sd5h14-40x62x24-nsk_1_1627470663.webp'
        },


        {
            id: 'TP140010',
            nome: 'Rolamento p/ Compressor DN 7SB16C - 35x52x22 / Hyundai HB20 / Doosan DF11',
            categorias: ['Rolamentos', 'MERCEDES-BENZ', 'Chevrolet',],
            imagem: '2_rol-p-cm-denso-7sb16c-hb20-35x52x22-5fdb17aefeb0b06e51fb7dccbe9275ed.webp'
        },


        {
            id: 'TP140009',
            nome: 'Rolamento p/ Compressor DN SCROLL (Grande) Fiat Palio Fire - 35x52x20',
            categorias: ['Rolamentos', 'Fiat'],
            imagem: 'rolamento-p-compressor-dn-scroll-grande-fiat-palio-fire-35x52x20_1_1635790740.webp'
        },


        {
            id: 'TP140013',
            nome: 'Rolamento p/ Compressor DN SCROLL (Pequeno) Fiat Palio - 30x47x20',
            categorias: ['Rolamentos', 'Renault', 'Fiat', 'Ford'],
            imagem: 'rolamento-p-compressor-dn-scroll-pequeno-fiat-palio-30x47x20_1_1627470624.webp'
        },


        {
            id: 'TP100108',
            nome: 'Rolamento p/ Compressor DN SCROLL Fiat Uno, Palio Fire 2004>... - 35x52x12',
            categorias: ['Rolamentos', 'Land Rover', 'Hyundai', 'BMW', 'Ford', 'MERCEDES-BENZ'],
            imagem: '1_rol-p-cm-scroll-fiat-palio-uno-fire-35x52x12-8d77cb052c61c40620a8837937a2bc59.webp'
        },


        {
            id: 'TP140001',
            nome: 'Rolamento p/ Compressor DP V5 - 62x40x20,6',
            categorias: ['Rolamentos'],
            imagem: 'rolamento-p-compressor-dp-v5-62x40x206_1_1627470590.webp'
        },


        {
            id: 'TP140026',
            nome: 'Rolamento p/ Compressor FD FX15, FS10 - 30x55x23',
            categorias: ['Rolamentos', 'Ford'],
            imagem: 'rolamento-p-compressor-fd-fx15-fs10-30x55x23_1_1635790799.webp'
        },


        {
            id: 'TP140040',
            nome: 'Rolamento p/ Compressor FD FX15, FS10 - 30x55x23 (Original NSK)',
            categorias: ['Rolamentos'],
            imagem: 'rolamento-p-compressor-fd-fx15-fs10-30x55x23-original-nsk16137372462.webp'
        },


        {
            id: 'TP140016',
            nome: 'Rolamento p/ Compressor SD 7H15, SD7V16 / ST TM15 / Calsonic GM S10, Cobalt 1.4 - 35x55x20 (Original NSK)',
            categorias: ['Rolamentos'],
            imagem: '1_rol-p-cm-sanden-7h15-7v16-tm15-35x55x20-original-nsk-9759ba09bdc1ec260ed8ca478ece47b2.webp'
        },


        {
            id: 'TP140015',
            nome: 'Rolamento p/ Compressor Seiko / Calsonic Suzuki / Fiat Palio / GM Spin / Renault Kwid - 32x47x18',
            categorias: ['Rolamentos'],
            imagem: '2_rol-p-cm-seiko-suzuki-palio-calsonic-gm-spin-kwid-32x47x18-6f3069718e04fde8fdd86f733aa30a6e.webp'
        },


        {
            id: 'TP140052',
            nome: 'Rolamento p/ Compressor ST TM31 40x68x30 (Original NSK)',
            categorias: ['Rolamentos'],
            imagem: '2_rol-p-cm-tm31-40x68x30-original-nsk-6e3b0260afed39e1cfe865d437a90a42.webp'
        },


        {
            id: 'TP145014',
            nome: 'Selo p/ Compressor Cvc Astra / Corsa / Tm16 / Tm21 Scroll Peg / Orig (Acpx9)',
            categorias: ['Selos', 'Chevrolet', 'VolksWagen', 'Fiat', 'Jeep'],
            imagem: '1_selo-p-cm-cvc-astra-corsa-tm16-tm21-scroll-peg-orig-acpx9-76a798933ce2ebcc121caa56c310b765.webp'
        },


        {
            id: 'TP100026',
            nome: 'Selo p/ Compressor DN 7SB16C Audi / BMW / Mercedes-Benz Actros, Axor / Volkswagen Gol G3',
            categorias: ['Selos', 'Mercedes-Benz', 'VolksWagen'],
            imagem: 'selo-p-compressor-dn-7sb16c-audi-bmw-mercedes-benz-actros-axor-volkswagen-gol-g316137376842.webp'
        },


        {
            id: 'TP100021',
            nome: 'Selo p/ Compressor DN TV12, TV14 Fiat Marea, Brava',
            categorias: ['Selos', 'Fiat'],
            imagem: 'selo-p-compressor-dn-tv12-tv14-fiat-marea-brava16137376822.webp'
        },


        {
            id: 'TP145001',
            nome: 'Selo p/ Compressor DP V5 GM Blazer (Vedação Dupla)',
            categorias: ['Selos', 'Chevrolet'],
            imagem: '1_selo-p-cm-delphi-v5-3f9272401acc60ddcb03cec8007e0b7a.webp'
        },


        {
            id: 'TP145010',
            nome: 'Selo p/ Compressor FD FX15 Ford Ranger, Fiesta, Ka, F250',
            categorias: ['Selos', 'Ford'],
            imagem: 'selo-p-compressor-fd-fx15-ford-ranger-fiesta-ka-f25016137372502.webp'
        },


        {
            id: 'TP145020',
            nome: 'Selo p/ Compressor SD SD7B10, TRS90 Honda Civic (Mini Sanden)',
            categorias: ['Selos', 'Honda'],
            imagem: '1_selo-p-cm-mod-sanden-sd7b10-civic-trs90-mini-sanden-09ad0252b1e76d382ec37dee658bff4f.webp'
        },


        {
            id: 'TP145016',
            nome: 'Selo p/ Compressor York 210',
            categorias: ['Selos'],
            imagem: '1_selo-p-cm-york-210-21850e43e4f479751f19e6f173b73c31.webp'
        },


        {
            id: 'TP100023',
            nome: 'Selo p/ Compressor ZX GM Celta, Corsa (Argentino)',
            categorias: ['Selos'],
            imagem: '1_selo-p-cm-zexel-gm-corsa-celta-argentino-d61909b9becc5d79ac2f353d89b5508a.webp'
        },


        {
            id: 'TP403013',
            nome: 'Válvula Torre Elétrica p/ Compressor Volkswagen / Peugeot / Fiat / Citroen / Sentra',
            categorias: ['Válvulas Torre', 'Nissan', 'Vokswagen', 'Peugeot', 'Fiat', 'Citroen', 'Sentra'],
            imagem: '1_valvula-torre-eletrica-vw-peugeot-fiat-citroen-tsecv46o-e487b7c748b0879c759ae7b5915fb37f.webp'
        },


        {
            id: 'TP403055',
            nome: 'Válvula Torre p/ Compressor Calsonic CSE613 BMW Elétrica',
            categorias: ['Válvulas Torre', 'BMW'],
            imagem: 'br-valvula-torre-para-compressor-calsonic-cse613-bmw-eletricabr-1692981057.webp'
        },


        {
            id: 'TP403073',
            nome: 'Válvula Torre p/ Compressor DN 5SE09C, 5SE12C, 6SEU16, 7SEU17C BMW / Mercedes-Benz 95mm Elétrica',
            categorias: ['Válvulas Torre', 'BMW', 'Mercedes-Benz'],
            imagem: '2_valvula-torre-eletr-5se09c-5se12c-6seu16-7seu17c-bmw-mb-95mm-eab1ad52074dda496a2185ca47c4791c.webp'
        },


        {
            id: 'TP403074',
            nome: 'Válvula Torre p/ Compressor DN 5SE09C, 5SEU12C, 6SEU16C Toyota 93mm Elétrica',
            categorias: ['Válvulas Torre', 'Fiat'],
            imagem: '1_valvula-torre-eletr-denso-toyota-5se09c-5seu12c-6seu16c-93mm-d9ccdf887fe6773c1cad2e98e68c2967.webp'
        },


        {
            id: 'TP403043',
            nome: 'Válvula Torre p/ Compressor DN 6SEU Mercedes-Benz Classe A Elétrica',
            categorias: ['Válvulas Torre', 'Mercedes-Benz'],
            imagem: '1_valvula-torre-eletrica-denso-6seu-mb-classe-a-3228ae88289b880d9891e4fd725ab87c.webp'
        },


        {
            id: 'TP403070',
            nome: 'Válvula Torre p/ Compressor DN 6SEU Toyota Corolla 2015 Elétrica',
            categorias: ['Válvulas Torre', 'Toyota'],
            imagem: '2_valvula-eletrica-denso-6seu-toyota-corolla-2015-2545f7bdd6474f6fa5753d96f69494e1.webp'
        },


        {
            id: 'TP403005',
            nome: 'Válvula Torre p/ Compressor DN 6SEU Volkswagen Polo / Ford Focus Fastback SE 2017>... Elétrica',
            categorias: ['Válvulas Torre', 'Ford'],
            imagem: '2_valvula-torre-eletr-6seu-vw-polo-ford-focus-fastback-se-17-d2b266702f49dd90cc88b67a060bcc1e.webp'
        },


        {
            id: 'TP403014',
            nome: 'Válvula Torre p/ Compressor DN 6SEU14 Toyota Camry, Corolla 2.0 Elétrica',
            categorias: ['Válvulas Torre', 'Toyota'],
            imagem: '2_valvula-eletrica-denso-6seu14-toyota-nv-corolla-20-201f1fa876bb79407617c10a4091fae0webp'
        },


        {
            id: 'TP404137',
            nome: 'Válvula Torre p/ Compressor DN 6SEU14C Toyota Corolla 2 0 2009>2018 Elétrica',
            categorias: ['Válvulas Torre', 'Toyota'],
            imagem: '2_valvula-eletrica-denso-6seu14c-toyota-corolla-20-2009-18-3d03da5b38c0a65908d3fe8e465f02f1.webp'
        },


        {
            id: 'TP404040',
            nome: 'Válvula Torre p/ Compressor DN Mercedes-Benz C200 Elétrica',
            categorias: ['Válvulas Torre', 'Mercedes-Benz'],
            imagem: 'br-valvula-torre-eletrica-p-compressor-denso-mb-c200-tsecv39cbr-1692981823.webp'
        },


        {
            id: 'TP403007',
            nome: 'Válvula Torre p/ Compressor DP CVC, V5 (Grande 67mm) (Original Mahle)',
            categorias: ['Válvulas Torre'],
            imagem: '1_valvula-torre-delphi-mahle-maior-67mm-original-acpx7-5a46489ad52e6871c295f67e77beff30.webp'
        },


        {
            id: 'TP403045',
            nome: 'Válvula Torre p/ Compressor DP CVC, V5 (Pequena 50,6mm) (Original Mahle)',
            categorias: ['Válvulas Torre'],
            imagem: 'valvula-torre-p-compressor-dp-cvc-v5-pequena-506mm-original-mahle_2_1604920320.webp'
        },


        {
            id: 'TP403064',
            nome: 'Válvula Torre p/ Compressor Ford Focus / Hyundai',
            categorias: ['Válvulas Torre', 'Hyundai', 'Ford'],
            imagem: '2_valvula-torre-p-cm-focus-ds105085-hyundai-ds102160-47ff8b4fff21e8796fa235daeece6a97.webp'
        },


        {
            id: 'TP404038',
            nome: 'Válvula Torre p/ Compressor SD Audi A3 / Volkswagen Golf Novo',
            categorias: ['Válvulas Torre', 'VolksWagen'],
            imagem: '3_valvula-torre-sanden-audi-a3-nv-golf-tsecv48o-c39974bc0e04fb7e889a6b8cd3194e23.webp'
        },


        {
            id: 'TP403021',
            nome: 'Válvula Torre p/ Compressor SD PX16 Volkswagen Jetta / Audi Elétrica',
            categorias: ['Válvulas Torre', 'VolksWagen', 'Audi'],
            imagem: '1_valvula-torre-sanden-px16-vw-jetta-audi-644b2ae6a9c05760c3dd4a1aad78844c.webp'
        },


        {
            id: 'TP403067',
            nome: 'Válvula Torre p/ Compressor SD PXE13, PXE16 Audi Elétrica',
            categorias: ['Válvulas Torre'],
            imagem: '2_valvula-torre-eletrica-sanden-pxe13-pxe16-audi-de9aedaa4187c3b823dca02065c50476.webp'
        },


        {
            id: 'TP403051',
            nome: 'Válvula Torre p/ Compressor SD PXE16, PXE13 Volkswagen Polo / Audi Elétrica',
            categorias: ['Válvulas Torre'],
            imagem: '1_valvula-torre-eletrica-sanden-pxe16-pxe13-audi-polo-020214ebf2cd0c0eb394ae9eba47e6dc.webp'
        },


        {
            id: 'TP403058',
            nome: 'Válvula Torre p/ Compressor SD PXE16, PXE14 Fiat / Peugeot / Hyundai IX35 Elétrica',
            categorias: ['Válvulas Torre', 'Hyundai', 'Kia Motors'],
            imagem: 'br-valvula-torre-de-ac-p-compressor-dve16-vs16-sportage-ix35br-1692981319.webp'
        },


        {
            id: 'TP403022',
            nome: 'Válvula Torre p/ Compressor SD TRS90 Ford Fiesta, Focus G1 2000>2008',
            categorias: ['Válvulas Torre', 'Honda', 'Ford'],
            imagem: 'valvula-torre-p-compressor-sd-trs90-ford-fiesta-focus-g1-2000200816137373932.webp'
        },


        {
            id: 'TP404043',
            nome: 'Válvula Torre p/ Compressor Toyota Elétrica',
            categorias: ['Válvulas Torre', 'Toyota'],
            imagem: '2_valvula-torre-eletrica-p-cm-toyota-tsecv17c-29ca5ffd440b453e7c8372b835c13cc3.webp'
        },


        {
            id: 'TP404035',
            nome: 'Válvula Torre p/ Compressor Toyota Elétrica',
            categorias: ['Válvulas Torre'],
            imagem: '1_valvula-torre-eletrica-p-cm-toyota-tsecv410-66889c04c0b7fa6b91e87f6a7adaf1ae.webp'
        },


        {
            id: 'TP403027',
            nome: 'Válvula Torre p/ Compressor Volkswagen / Peugeot Elétrica',
            categorias: ['Válvulas Torre', 'VolksWagen', 'Citroën', 'Peugeot', 'Audi'],
            imagem: '2_valvula-torre-eletrica-vw-peugeot-c896b459ab6c9fcdb01de4170ef3fb2a.webp'
        },


        {
            id: 'TP403008',
            nome: 'Válvula Torre p/ Compressor Volkswagen Polo Elétrica (Grande)',
            categorias: ['Válvulas Torre', 'VolksWagen'],
            imagem: '1_valvula-torre-eletrica-p-cm-vw-polo-gde-5a46489ad52e6871c295f67e77beff30.webp'
        },


        {
            id: 'TP403015',
            nome: 'Válvula Torre p/ Compressor ZX DCS16E Elétrica Volkswagen / Audi',
            categorias: ['Válvulas Torre', 'Ford', 'Renault', 'Mitsubishi', 'Nissan'],
            imagem: '1_valvula-torre-eletrica-p-cm-zexel-dcs16e-vw-audi-6568efedb62620eab8d72a929718540f.webp'
        },



        {
            id: 'TP360024',
            nome: 'Chapa Fixação Válvula Block 2 Furos',
            categorias: ['Conexões Y/T'],
            imagem: '1_chapa-fixacao-valvula-block-2-furos-26a7f71695ae3503b75f284ef9e13690.webp'
        },



        {
            id: 'TP360026',
            nome: 'Chapa Fixação Válvula Block 3 Furos',
            categorias: ['Conexões Y/T'],
            imagem: 'br-chapa-p-fixacao-valvula-block-3-furos-de-ac-acobr-1677152497.webp'
        },


        {
            id: 'TP704005',
            nome: 'Tubo Saída Evaporador Fiat Palio Fire 2001>... (Sucção)',
            categorias: ['Tubos Evaporadores'],
            imagem: '1_tubo-saida-evaporador-fiat-palio-fire-01asuccao-74960d5b9f29f8a378f8882fe4c02196.webp'
        },


        {
            id: 'TP403018',
            nome: 'Núcleo de Válvula Ford Mondeo, Ranger, Fiesta M10',
            categorias: ['Núcleos de Válvula'],
            imagem: '1_nucleo-de-valvula-ford-mondeo-ranger-fiesta-m10-0feb390b44cdce795c78b6eff0ebcc22.webp'
        },


        {
            id: 'TP403041',
            nome: 'Núcleo de Válvula VENTIL PALIO FIRE/UNO FIRE/MOD. GRANDE',
            categorias: ['Núcleos de Válvula', 'Fiat'],
            imagem: 'nucleo-de-valvula-ventil-palio-fireuno-firemod-grande16137373951.webp'
        },


        {
            id: 'TP100055',
            nome: 'Tubo Expansor 1 Oring (Canetinha Branca)',
            categorias: ['Tubos Expansores'],
            imagem: 'br-tubo-expansor-1-oring-p-ac-universal-canetinha-brancabr-1696363366.webp'
        },


        {
            id: 'TP402005',
            nome: 'Tubo Expansor 2 Oring (Canetinha Azul Claro)',
            categorias: ['Tubos Expansores'],
            imagem: 'tubo-expansor-2-oring-canetinha-azul-claro16137373901.webp'
        },


        {
            id: 'TP402008',
            nome: 'Tubo Expansor 2 Oring (Canetinha Laranja)',
            categorias: ['Tubos Evaporadores'],
            imagem: 'br-tubo-expansor-de-ac-universal-2-oring-canetinha-laranjabr-1696360085.webp'
        },


        {
            id: 'TP404002',
            nome: 'Válvula Ar Quente Fiat Palio - 1996>2001',
            categorias: ['Valvulas Ar Quente'],
            imagem: '1_valvula-p-aquecedor-fiat-palio-96-01-0feb390b44cdce795c78b6eff0ebcc22.webp'
        },


        {
            id: 'TP404029',
            nome: 'Válvula Ar Quente Gm Astra 1999-01 (Original)',
            categorias: ['Valvulas Ar Quente', 'Chevrolet'],
            imagem: '1_valvula-p-aquecedor-gm-astra-1999-01-original-b6c0fe48819826bc5e66818aad62a495.webp'
        },


        {
            id: 'TP404022',
            nome: 'Válvula Ar Quente GM Celta',
            categorias: ['Valvulas Ar Quente', 'Chevrolet'],
            imagem: 'valvula-ar-quente-gm-celta_1_1625687422.webp'
        },


        {
            id: 'TP404025',
            nome: 'Válvula Ar Quente GM Corsa 2001>2007',
            categorias: ['Valvulas Ar Quente', 'Chevrolet'],
            imagem: '1_valvula-p-aquecedor-gm-corsa-01-07-87117-bebf4717690721933314d76d4c63dab7.webp'
        },


        {
            id: 'TP404013',
            nome: 'Válvula Ar Quente GM Corsa, Vectra 2 Vias',
            categorias: ['Valvulas Ar Quente', 'Chevrolet'],
            imagem: 'valvula-ar-quente-gm-corsa-vectra-2-vias_1_1625687371.webp'
        },


        {
            id: 'TP100051',
            nome: 'Válvula Enchimento Alta Linha GM M12x1,5',
            categorias: ['Válvulas Enchimento'],
            imagem: 'br-valvula-enchimento-alta-de-ac-p-linha-gm-m12x15com-tampabr-1692966849.webp'
        },


        {
            id: 'TP100052',
            nome: 'Válvula Enchimento Baixa Linha GM M10x1,25',
            categorias: ['Válvulas Enchimento'],
            imagem: 'br-valvula-enchimento-baixa-ac-p-linha-gm-m10x125-c-tampabr-1696363130.webp'
        },


        {
            id: 'TP404049',
            nome: 'Válvula Block BMW X1, 116, 118, 120, 130, 316, 320, 325, 328 2009>...',
            categorias: ['Válvulas Expansão Block', 'BMW'],
            imagem: 'br-valvula-block-p-bmw-x1-116-118-120-1303162009-a-2020br-1692982141.webp'
        },


        {
            id: 'TP400020',
            nome: 'Válvula Block Citroen 208, 308, C4 2013>...',
            categorias: ['Válvulas Expansão Block', 'Citroën', 'Peugeot'],
            imagem: 'br-valvula-block-p-peugeot-208-2013-a-21-308-c4-2013-a-14br-1673967359.webp'
        },


        {
            id: 'TP404153',
            nome: 'Válvula Block Ford Ecosport 2017>2018',
            categorias: ['Válvulas Expansão Block', 'Ford'],
            imagem: '1_valvula-block-ecosport-17a18-gn1119849ba-983dd6d9378d1a921e68843f0a52e566.webp'
        },


        {
            id: 'TP404045',
            nome: 'Válvula Block Ford Focus 2013>...',
            categorias: ['Válvulas Expansão Block', 'Ford'],
            imagem: 'valvula-block-ford-focus-2013_1_1634933275.webp'
        },


        {
            id: 'TP400003',
            nome: 'Válvula Block GM Astra / Volkswagen Constellation / Mercedes-Benz Axor / John Deere / Scania (Original)',
            categorias: ['Válvulas Expansão Block', 'Chevrolet', 'MERCEDES-BENZ', 'SCANIA', 'VOLKSWAGEN'],
            imagem: '1_valvula-astra-constellation-axor-john-d-scania-original-dc280da9fa0d67d6a694aad208b9f438.webp'
        },


        {
            id: 'TP400050',
            nome: 'Válvula Block GM Astra, Vectra, Corsa / Renault Scenic / Peugeot 206 / Volkswagen Constellation, Axor / John Deere / Scania 2008 / Iveco Stralis',
            categorias: ['Válvulas Expansão Block', 'Chevrolet', 'VOLKSWAGEN', 'SCANIA', 'MERCEDES-BENZ'],
            imagem: 'br-valvula-block-p-astra-axor-constellation-celta-corsabr-1688041130.webp'
        },


        {
            id: 'TP400043',
            nome: 'Válvula Block GM Corsa Zexel',
            categorias: ['Válvulas Expansão Block', 'Chevrolet'],
            imagem: 'valvula-block-gm-corsa-zexel_1_1632424961.webp'
        },


        {
            id: 'TP401006',
            nome: 'Válvula Block Honda Fit 2009>..., City / Toyota Corolla 2003>2008 / Fiat Ducato / Iveco Daily 2006>...',
            categorias: ['Válvulas Expansão Block', 'Toyota', 'Honda'],
            imagem: 'valvula-block-honda-fit-2009-city-toyota-corolla-20032008-fiat-ducato-iveco-daily-200616137373841.webp'
        },


        {
            id: 'TP400015',
            nome: 'Válvula Block Nissan Sentra, March, Livina, Tiida, Versa',
            categorias: ['Válvulas Expansão Block', 'Nissan', ''],
            imagem: 'vlvula-block-nissan-sentra-march-livina-tiida-versa_3_1607439165.webp'
        },


        {
            id: 'TP404057',
            nome: 'Válvula Block Renault Kwid 2017 a 2024',
            categorias: ['Válvulas Expansão Block', 'Renault'],
            imagem: '1_valvula-block-renault-kwid-2017-c346d5a8484f605a435ae8fce8b7609b.webp'
        },


        {
            id: 'TP401013',
            nome: 'Válvula Block Toyota Corolla 1996>2003',
            categorias: ['Válvulas Expansão Block', 'Honda', 'Toyota'],
            imagem: '1_valvula-block-toyota-corolla-96-03-cd3cd993c1dfef098d7b720d29762463.webp'
        },


        {
            id: 'TP400045',
            nome: 'Válvula Block Toyota Etios',
            categorias: ['Válvulas Expansão Block', 'Toyota'],
            imagem: 'valvula-block-toyota-etios-1654022425.webp'
        },


        {
            id: 'TP401016',
            nome: 'Válvula Block Valtra BH / Volare / Volkswagen Santana 2TN 5/8x3/8 1/2x1/2',
            categorias: ['Válvulas Expansão Block', 'VolksWagen'],
            imagem: '1_valvula-20t-valtra-bh-volare-santana-5-8x3-8-1-2x1-2-mi-3be01f1508d14d89fa9388c2ef58ca78.webp'
        },


        {
            id: 'TP400008',
            nome: 'Válvula Block Volkswagen Golf / Audi ...>2002',
            categorias: ['Válvulas Expansão Block', 'Audi', 'VolksWagen', 'Renault'],
            imagem: 'br-valvula-block-p-golf-99-a-14-bora-polo-passat-a3-ttbr-1688040212.webp'
        },


        {
            id: 'TP400032',
            nome: 'Válvula Block Volkswagen Golf Variant 2015 (Caixa Valeo)',
            categorias: ['Válvulas Expansão Block', 'VolksWagen'],
            imagem: '1_valvula-block-vw-golf-variant-2015-cx-valeo-5a032755d6dc202a3e1bd6912941f699.webp'
        },


        {
            id: 'TP400018',
            nome: 'Válvula Block Volkswagen Jetta (Green)',
            categorias: ['Válvulas Expansão Block', 'VolksWagen'],
            imagem: 'valvula-block-volkswagen-jetta-audi-a3-sportback-2007_1_1627471121.webp'
        },


        {
            id: 'TP401046',
            nome: 'Válvula Block Volkswagen UP',
            categorias: ['Válvulas Expansão Block', 'VolksWagen'],
            imagem: 'valvula-block-volkswagen-up16137373881.webp'
        },


        {
            id: 'TP400011',
            nome: 'Válvula Block VW Fox, Polo, Gol G5, G6 (Green)',
            categorias: ['Válvulas Expansão Block', 'VolksWagen'],
            imagem: 'valvula-block-volkswagen-fox-polo-gol-g5-g6_1_1627471084.webp'
        },


        {
            id: 'TP404162',
            nome: 'Válvula de Expansão Block VW Delivery / Man TGX',
            categorias: ['Válvulas Expansão Block', 'MAN', 'MARCOPOLO', 'VOLKSWAGEN', 'VOLVO', 'Citroën'],
            imagem: 'expansion-valve-audi-q7porsche-cayennevw-touareg-1692387390.webp'
        },


        {
            id: 'TP400023',
            nome: 'Válvula de Expansão Block VW Polo, Fox, Gol G5 e G6 (OEM)',
            categorias: ['Válvulas Expansão Block', 'VolksWagen'],
            imagem: 'br-valvula-block-vw-polofoxgol-g5g6-oembr-1663341513.webp'
        },


        {
            id: 'TP100048',
            nome: 'Válvula Capilar Fiat Uno R12 c/ Rosca 05mm',
            categorias: ['Válvulas Expansão Capilar', 'Fiat'],
            imagem: '1_valvula-capilar-fiat-uno-r12-c-rosca-5mm-e25378c491378941d11cd741dd4df13b.webp'
        },


        {
            id: 'TP100054',
            nome: 'Válvula Capilar Universal 2 Bulbos colheitadeira New Holland TC55/57/59 (GREEN)',
            categorias: ['Válvulas Expansão Capilar'],
            imagem: '1_valvula-capilar-universal-2-bulbo-new-holland-linha-tc-7866b12ca010332d17bfcc8fc658254e.webp'
        },


        {
            id: 'TP100053',
            nome: 'Válvula Capilar Universal Oring',
            categorias: ['Válvulas Expansão Capilar', 'Renault'],
            imagem: 'br-valvula-capilar-universal-oring-34-58br-1692966954.webp'
        },




    ];

    const container = document.getElementById('product-container');
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const basePath = './assets\\';


    function showFilteredProducts() {
        const selectedCategories = Array.from(filterCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.getAttribute('data-filter'));

        const filteredProducts = produtos.filter(product =>
            selectedCategories.every(category => product.categorias.includes(category))
        );

        displayProducts(filteredProducts);
    }

    function displayProducts(products) {
        container.innerHTML = '';

        products.forEach(product => {
            const divProduto = document.createElement('div');
            divProduto.classList.add('product');


            const infoProduto = document.createElement('div');
            infoProduto.classList.add('product-info');


            const imagem = document.createElement('img');
            imagem.src = basePath + product.imagem;
            imagem.alt = product.nome;
            divProduto.appendChild(imagem);

            const nomeProduto = document.createElement('p');
            nomeProduto.textContent = product.nome;
            divProduto.appendChild(nomeProduto);


            const idElement = document.createElement('p');
            idElement.classList.add('product-id');
            idElement.textContent = product.id;
            divProduto.appendChild(idElement);


            const legenda = document.createElement

            container.appendChild(divProduto);
        });
    }

    container.addEventListener('click', function(event) {
        const productId = event.target.closest('.product').querySelector('.product-id').textContent;
        if (productId) {
            window.location.href = `sobre.html?id=${productId}`;    

        }



    });

    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', showFilteredProducts);
    });

    displayProducts(produtos);
});

