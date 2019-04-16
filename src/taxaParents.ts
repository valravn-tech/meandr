import { TaxonCode } from './alltaxa'
// Rule-based parents
/////////////////////

export const taxaParents = new Map<TaxonCode, TaxonCode | undefined>([
    ['01000000', undefined], // Protozoa
    ['01100000', '01000000'], // Protozoa Mastigophora
    ['01200000', '01000000'], // Protozoa Opalinata
    ['01300000', '01000000'], // Protozoa Sarcodina
    ['01400000', '01000000'], // Protozoa Sporozoa
    ['01500000', '01000000'], // Protozoa Ciliata
    ['02000000', undefined], // Porifera
    ['02100000', '02000000'], // Porifera Demospongea
    ['02110000', '02000000'], // Porifera Spongillidae
    ['02110100', '02110000'], // Porifera Spongillidae Spongilla
    ['02110101', '02110100'], // Porifera Spongillidae Spongilla lacustris
    ['02110200', '02110000'], // Porifera Spongillidae Eunapius
    ['02110201', '02110200'], // Porifera Spongillidae Eunapius fragilis
    ['02110300', '02110000'], // Porifera Spongillidae Ephydatia
    ['02110301', '02110300'], // Porifera Spongillidae Ephydatia fluviatilis
    ['02110302', '02110300'], // Porifera Spongillidae Ephydatia mulleri
    ['02110400', '02110000'], // Porifera Spongillidae Racekiela
    ['02110401', '02110400'], // Porifera Spongillidae Racekiela ryderi
    ['03000000', undefined], // Coelenterata
    ['03100000', '03000000'], // Coelenterata Hydroida
    ['03110000', '03000000'], // Coelenterata Hydridae
    ['03110100', '03110000'], // Coelenterata Hydridae Hydra
    ['03110102', '03110100'], // Coelenterata Hydridae Hydra circumcincta
    ['03110103', '03110100'], // Coelenterata Hydridae Hydra graysoni
    ['03110104', '03110100'], // Coelenterata Hydridae Hydra oligactis
    ['03110105', '03110100'], // Coelenterata Hydridae Hydra viridissima
    ['03120000', '03000000'], // Coelenterata Protohydridae
    ['03120100', '03120000'], // Coelenterata Protohydridae Protohydra
    ['03120101', '03120100'], // Coelenterata Protohydridae Protohydra leuckarti
    ['03130000', '03000000'], // Coelenterata Clavidae
    ['03130100', '03130000'], // Coelenterata Clavidae Cordylophora
    ['03130101', '03130100'], // Coelenterata Clavidae Cordylophora caspia
    ['03200000', '03000000'], // Coelenterata Trachylina
    ['03210000', '03000000'], // Coelenterata Olindiidae
    ['03210100', '03210000'], // Coelenterata Olindiidae Craspedacusta
    ['03210101', '03210100'], // Coelenterata Olindiidae Craspedacusta sowerbii
    ['04000000', undefined], // Microturbellaria
    ['04100000', '04000000'], // Microturbellaria Catenulida
    ['04110000', '04000000'], // Microturbellaria Catenulidae
    ['04110100', '04110000'], // Microturbellaria Catenulidae Catenula
    ['04110101', '04110100'], // Microturbellaria Catenulidae Catenula lemnae
    ['04120000', '04000000'], // Microturbellaria Stenostomidae
    ['04120100', '04120000'], // Microturbellaria Stenostomidae Rhynchoscolex
    ['04120101', '04120100'], // Microturbellaria Stenostomidae Rhynchoscolex simplex
    ['04120200', '04120000'], // Microturbellaria Stenostomidae Stenostomum
    ['04120201', '04120200'], // Microturbellaria Stenostomidae Stenostomum anatirostrum
    ['04120202', '04120200'], // Microturbellaria Stenostomidae Stenostomum grabbskogense
    ['04120203', '04120200'], // Microturbellaria Stenostomidae Stenostomum leucops
    ['04120204', '04120200'], // Microturbellaria Stenostomidae Stenostomum unicolor
    ['04200000', '04000000'], // Microturbellaria Macrostomida
    ['04210000', '04000000'], // Microturbellaria Microstomidae
    ['04210100', '04210000'], // Microturbellaria Microstomidae Microstomum
    ['04210101', '04210100'], // Microturbellaria Microstomidae Microstomum lineare
    ['04220000', '04000000'], // Microturbellaria Macrostomidae
    ['04220100', '04220000'], // Microturbellaria Macrostomidae Macrostomum
    ['04220101', '04220100'], // Microturbellaria Macrostomidae Macrostomum distinguendum
    ['04220102', '04220100'], // Microturbellaria Macrostomidae Macrostomum johni
    ['04220103', '04220100'], // Microturbellaria Macrostomidae Macrostomum rostratum
    ['04300000', '04000000'], // Microturbellaria Neorhabdocoela
    ['04310000', '04000000'], // Microturbellaria Dalyelliidae
    ['04310100', '04310000'], // Microturbellaria Dalyelliidae Microdalyellia
    ['04310101', '04310100'], // Microturbellaria Dalyelliidae Microdalyellia armigera
    ['04310102', '04310100'], // Microturbellaria Dalyelliidae Microdalyellia brevimana
    ['04310103', '04310100'], // Microturbellaria Dalyelliidae Microdalyellia fairchildi
    ['04310104', '04310100'], // Microturbellaria Dalyelliidae Microdalyellia kupelwieseri
    ['04310105', '04310100'], // Microturbellaria Dalyelliidae Microdalyellia schmidti
    ['04310200', '04310000'], // Microturbellaria Dalyelliidae Gieysztoria
    ['04310201', '04310200'], // Microturbellaria Dalyelliidae Gieysztoria diadema
    ['04310202', '04310200'], // Microturbellaria Dalyelliidae Gieysztoria infundibuliformis
    ['04310203', '04310200'], // Microturbellaria Dalyelliidae Gieysztoria rubra
    ['04310300', '04310000'], // Microturbellaria Dalyelliidae Castrella
    ['04310301', '04310300'], // Microturbellaria Dalyelliidae Castrella truncata
    ['04310400', '04310000'], // Microturbellaria Dalyelliidae Dalyellia
    ['04310401', '04310400'], // Microturbellaria Dalyelliidae Dalyellia viridis
    ['04320000', '04000000'], // Microturbellaria Typhloplanidae
    ['04320100', '04320000'], // Microturbellaria Typhloplanidae Typhloplana
    ['04320101', '04320100'], // Microturbellaria Typhloplanidae Typhloplana viridata
    ['04320200', '04320000'], // Microturbellaria Typhloplanidae Castrada
    ['04320201', '04320200'], // Microturbellaria Typhloplanidae Castrada armata
    ['04320202', '04320200'], // Microturbellaria Typhloplanidae Castrada lanceola
    ['04320203', '04320200'], // Microturbellaria Typhloplanidae Castrada luteola
    ['04320204', '04320200'], // Microturbellaria Typhloplanidae Castrada neocomensis
    ['04320205', '04320200'], // Microturbellaria Typhloplanidae Castrada viridis
    ['04320300', '04320000'], // Microturbellaria Typhloplanidae Tetracelis
    ['04320301', '04320300'], // Microturbellaria Typhloplanidae Tetracelis marmorosa
    ['04320400', '04320000'], // Microturbellaria Typhloplanidae Strongylostoma
    ['04320401', '04320400'], // Microturbellaria Typhloplanidae Strongylostoma elongatum
    ['04320402', '04320400'], // Microturbellaria Typhloplanidae Strongylostoma radiatum
    ['04320500', '04320000'], // Microturbellaria Typhloplanidae Olisthanella
    ['04320501', '04320500'], // Microturbellaria Typhloplanidae Olisthanella obtusa
    ['04320600', '04320000'], // Microturbellaria Typhloplanidae Rhynchomesostoma
    ['04320601', '04320600'], // Microturbellaria Typhloplanidae Rhynchomesostoma rostratum
    ['04320700', '04320000'], // Microturbellaria Typhloplanidae Mesostoma
    ['04320701', '04320700'], // Microturbellaria Typhloplanidae Mesostoma ehrenbergii
    ['04320702', '04320700'], // Microturbellaria Typhloplanidae Mesostoma lingua
    ['04320703', '04320700'], // Microturbellaria Typhloplanidae Mesostoma productum
    ['04320704', '04320700'], // Microturbellaria Typhloplanidae Mesostoma tetragonum
    ['04320800', '04320000'], // Microturbellaria Typhloplanidae Bothromesostoma
    ['04320801', '04320800'], // Microturbellaria Typhloplanidae Bothromesostoma personatum
    ['04320900', '04320000'], // Microturbellaria Typhloplanidae Phaenocora
    ['04320901', '04320900'], // Microturbellaria Typhloplanidae Phaenocora typhlops
    ['04320902', '04320900'], // Microturbellaria Typhloplanidae Phaenocora unipunctata
    ['04321000', '04320000'], // Microturbellaria Typhloplanidae Opistomum
    ['04321001', '04321000'], // Microturbellaria Typhloplanidae Opistomum pallidum
    ['04330000', '04000000'], // Microturbellaria Polycystididae
    ['04330100', '04330000'], // Microturbellaria Polycystididae Gyratrix
    ['04330101', '04330100'], // Microturbellaria Polycystididae Gyratrix hermaphroditus
    ['04330200', '04330000'], // Microturbellaria Polycystididae Opisthocystis
    ['04330201', '04330200'], // Microturbellaria Polycystididae Opisthocystis goettei
    ['04400000', '04000000'], // Microturbellaria Lecithoepitheliata
    ['04410000', '04000000'], // Microturbellaria Prorhynchidae
    ['04410100', '04410000'], // Microturbellaria Prorhynchidae Prorhynchus
    ['04410101', '04410100'], // Microturbellaria Prorhynchidae Prorhynchus stagnalis
    ['04410200', '04410000'], // Microturbellaria Prorhynchidae Geocentrophora
    ['04410201', '04410200'], // Microturbellaria Prorhynchidae Geocentrophora baltica
    ['04410202', '04410200'], // Microturbellaria Prorhynchidae Geocentrophora sphyrocephala
    ['04500000', '04000000'], // Microturbellaria Prolecithophora
    ['04510000', '04000000'], // Microturbellaria Plagiostomidae
    ['04510100', '04510000'], // Microturbellaria Plagiostomidae Plagiostomum
    ['04510101', '04510100'], // Microturbellaria Plagiostomidae Plagiostomum lemani
    ['04600000', '04000000'], // Microturbellaria Seriata
    ['04610000', '04000000'], // Microturbellaria Bothrioplanidae
    ['04610100', '04610000'], // Microturbellaria Bothrioplanidae Bothrioplana
    ['04610101', '04610100'], // Microturbellaria Bothrioplanidae Bothrioplana semperi
    ['04620000', '04000000'], // Microturbellaria Otomesostomidae
    ['04620100', '04620000'], // Microturbellaria Otomesostomidae Otomesostoma
    ['04620101', '04620100'], // Microturbellaria Otomesostomidae Otomesostoma auditivum
    ['05000000', undefined], // Tricladida
    ['05100000', '05000000'], // Tricladida Paludicola
    ['05110000', '05000000'], // Tricladida Planariidae
    ['05110100', '05110000'], // Tricladida Planariidae Planaria
    ['05110101', '05110100'], // Tricladida Planariidae Planaria torva
    ['05110200', '05110000'], // Tricladida Planariidae Polycelis
    ['05110201', '05110200'], // Tricladida Planariidae Polycelis felina
    ['05110202', '05110200'], // Tricladida Planariidae Polycelis nigra
    ['05110203', '05110200'], // Tricladida Planariidae Polycelis tenuis
    ['0511020Z', '05110200'], // Tricladida Planariidae Polycelis nigra group
    ['05110300', '05110000'], // Tricladida Planariidae Phagocata
    ['05110301', '05110300'], // Tricladida Planariidae Phagocata vitta
    ['05110302', '05110300'], // Tricladida Planariidae Phagocata woodworthi
    ['05110400', '05110000'], // Tricladida Planariidae Crenobia
    ['05110401', '05110400'], // Tricladida Planariidae Crenobia alpina
    ['05120000', '05000000'], // Tricladida Dugesiidae
    ['05120100', '05120000'], // Tricladida Dugesiidae Dugesia
    ['05120101', '05120100'], // Tricladida Dugesiidae Dugesia lugubris
    ['05120102', '05120100'], // Tricladida Dugesiidae Dugesia polychroa
    ['05120103', '05120100'], // Tricladida Dugesiidae Dugesia tigrina
    ['05120104', '05120100'], // Tricladida Dugesiidae Dugesia gonocephala
    ['0512010Y', '05120100'], // Tricladida Dugesiidae Dugesia gonocephala group
    ['0512010Z', '05120100'], // Tricladida Dugesiidae Dugesia polychroa group
    ['05130000', '05000000'], // Tricladida Dendrocoelidae
    ['05130100', '05130000'], // Tricladida Dendrocoelidae Bdellocephala
    ['05130101', '05130100'], // Tricladida Dendrocoelidae Bdellocephala punctata
    ['05130200', '05130000'], // Tricladida Dendrocoelidae Dendrocoelum
    ['05130201', '05130200'], // Tricladida Dendrocoelidae Dendrocoelum lacteum
    ['051Z0000', '05000000'], // Tricladida Planariidae (including Dugesiidae)
    ['06000000', undefined], // Trematoda
    ['07000000', undefined], // Cestoidea
    ['08000000', undefined], // Nemertea
    ['08100000', '08000000'], // Nemertea Hoplonemertea
    ['08110000', '08000000'], // Nemertea Tetrastemmatidae
    ['08110100', '08110000'], // Nemertea Tetrastemmatidae Prostoma
    ['08110101', '08110100'], // Nemertea Tetrastemmatidae Prostoma graecense
    ['08110102', '08110100'], // Nemertea Tetrastemmatidae Prostoma jenningsi
    ['09000000', undefined], // Nematomorpha
    ['09100000', '09000000'], // Nematomorpha Gordioidea
    ['09110000', '09000000'], // Nematomorpha Gordiidae
    ['09110100', '09110000'], // Nematomorpha Gordiidae Gordius
    ['09110101', '09110100'], // Nematomorpha Gordiidae Gordius villoti
    ['09120000', '09000000'], // Nematomorpha Chordodidae
    ['09120100', '09120000'], // Nematomorpha Chordodidae Parachordodes
    ['09120101', '09120100'], // Nematomorpha Chordodidae Parachordodes pustulosus
    ['09120200', '09120000'], // Nematomorpha Chordodidae Gordionus
    ['09120201', '09120200'], // Nematomorpha Chordodidae Gordionus violaceus
    ['09120202', '09120200'], // Nematomorpha Chordodidae Gordionus wolterstorffi
    ['10000000', undefined], // Nematoda
    ['10100000', '10000000'], // Nematoda Tylenchida
    ['10110000', '10000000'], // Nematoda Tylenchidae
    ['10110100', '10110000'], // Nematoda Tylenchidae Tylenchus
    ['10110101', '10110100'], // Nematoda Tylenchidae Tylenchus agricola
    ['10110102', '10110100'], // Nematoda Tylenchidae Tylenchus bryophilus
    ['10110103', '10110100'], // Nematoda Tylenchidae Tylenchus davainei
    ['10110104', '10110100'], // Nematoda Tylenchidae Tylenchus filiformis
    ['10120000', '10000000'], // Nematoda Aphelenchoididae
    ['10120100', '10120000'], // Nematoda Aphelenchoididae Aphelenchoides
    ['10120101', '10120100'], // Nematoda Aphelenchoididae Aphelenchoides parietinus
    ['10120102', '10120100'], // Nematoda Aphelenchoididae Aphelenchoides saprophilus
    ['10200000', '10000000'], // Nematoda Rhabditida
    ['10210000', '10000000'], // Nematoda Diplogasteridae
    ['10210100', '10210000'], // Nematoda Diplogasteridae Diplogaster
    ['10210101', '10210100'], // Nematoda Diplogasteridae Diplogaster rivalis
    ['10210200', '10210000'], // Nematoda Diplogasteridae Monochoides
    ['10210201', '10210200'], // Nematoda Diplogasteridae Monochoides fictor
    ['10220000', '10000000'], // Nematoda Panagrolaimidae
    ['10220100', '10220000'], // Nematoda Panagrolaimidae Panagrolaimus
    ['10220101', '10220100'], // Nematoda Panagrolaimidae Panagrolaimus rigidus
    ['10220102', '10220100'], // Nematoda Panagrolaimidae Panagrolaimus salinus
    ['10230000', '10000000'], // Nematoda Cephalobidae
    ['10230100', '10230000'], // Nematoda Cephalobidae Cephalobus
    ['10230101', '10230100'], // Nematoda Cephalobidae Cephalobus persegnis
    ['10230200', '10230000'], // Nematoda Cephalobidae Eucephalobus
    ['10230201', '10230200'], // Nematoda Cephalobidae Eucephalobus elongatus
    ['10300000', '10000000'], // Nematoda Teratocephalida
    ['10310000', '10000000'], // Nematoda Teratocephalidae
    ['10310100', '10310000'], // Nematoda Teratocephalidae Teratocephalus
    ['10310101', '10310100'], // Nematoda Teratocephalidae Teratocephalus terrestris
    ['10310200', '10310000'], // Nematoda Teratocephalidae Euteratocephalus
    ['10310201', '10310200'], // Nematoda Teratocephalidae Euteratocephalus crassidens
    ['10310202', '10310200'], // Nematoda Teratocephalidae Euteratocephalus palustris
    ['10400000', '10000000'], // Nematoda Araeolaimida
    ['10410000', '10000000'], // Nematoda Plectidae
    ['10410100', '10410000'], // Nematoda Plectidae Plectus
    ['10410101', '10410100'], // Nematoda Plectidae Plectus cirratus
    ['10410102', '10410100'], // Nematoda Plectidae Plectus granulosus
    ['10410103', '10410100'], // Nematoda Plectidae Plectus longicaudatus
    ['10410104', '10410100'], // Nematoda Plectidae Plectus parietinus
    ['10410105', '10410100'], // Nematoda Plectidae Plectus parvus
    ['10410106', '10410100'], // Nematoda Plectidae Plectus rhizophilus
    ['10410107', '10410100'], // Nematoda Plectidae Plectus tenuis
    ['10420000', '10000000'], // Nematoda Camacolaimidae
    ['10420100', '10420000'], // Nematoda Camacolaimidae Aphanolaimus
    ['10420101', '10420100'], // Nematoda Camacolaimidae Aphanolaimus aquaticus
    ['10420102', '10420100'], // Nematoda Camacolaimidae Aphanolaimus attentus
    ['10500000', '10000000'], // Nematoda Monhysterida
    ['10510000', '10000000'], // Nematoda Monhysteridae
    ['10510100', '10510000'], // Nematoda Monhysteridae Monhystera
    ['10510101', '10510100'], // Nematoda Monhysteridae Monhystera dispar
    ['10510102', '10510100'], // Nematoda Monhysteridae Monhystera dubius
    ['10510103', '10510100'], // Nematoda Monhysteridae Monhystera filiformis
    ['10510104', '10510100'], // Nematoda Monhysteridae Monhystera longicaudata
    ['10510105', '10510100'], // Nematoda Monhysteridae Monhystera paludicola
    ['10510106', '10510100'], // Nematoda Monhysteridae Monhystera similis
    ['10510107', '10510100'], // Nematoda Monhysteridae Monhystera simplex
    ['10510108', '10510100'], // Nematoda Monhysteridae Monhystera stagnalis
    ['10510109', '10510100'], // Nematoda Monhysteridae Monhystera villosa
    ['10510111', '10510100'], // Nematoda Monhysteridae Monhystera vulgaris
    ['10510200', '10510000'], // Nematoda Monhysteridae Prismatolaimus
    ['10510201', '10510200'], // Nematoda Monhysteridae Prismatolaimus dolichurus
    ['10510202', '10510200'], // Nematoda Monhysteridae Prismatolaimus intermedius
    ['10600000', '10000000'], // Nematoda Chromadorida
    ['10610000', '10000000'], // Nematoda Chromadoridae
    ['10610100', '10610000'], // Nematoda Chromadoridae Chromadorita
    ['10610101', '10610100'], // Nematoda Chromadoridae Chromadorita bioculata
    ['10610102', '10610100'], // Nematoda Chromadoridae Chromadorita leuckarti
    ['10620000', '10000000'], // Nematoda Cyatholaimidae
    ['10620100', '10620000'], // Nematoda Cyatholaimidae Achromadora
    ['10620101', '10620100'], // Nematoda Cyatholaimidae Achromadora ruricola
    ['10620102', '10620100'], // Nematoda Cyatholaimidae Achromadora terricola
    ['10620200', '10620000'], // Nematoda Cyatholaimidae Ethmolaimus
    ['10620201', '10620200'], // Nematoda Cyatholaimidae Ethmolaimus pratensis
    ['10700000', '10000000'], // Nematoda Enoplida
    ['10710000', '10000000'], // Nematoda Tripylidae
    ['10710100', '10710000'], // Nematoda Tripylidae Tripyla
    ['10710101', '10710100'], // Nematoda Tripylidae Tripyla affinis
    ['10710102', '10710100'], // Nematoda Tripylidae Tripyla filicaudata
    ['10710103', '10710100'], // Nematoda Tripylidae Tripyla glomerans
    ['10710104', '10710100'], // Nematoda Tripylidae Tripyla setifera
    ['10710200', '10710000'], // Nematoda Tripylidae Tobrilus
    ['10710201', '10710200'], // Nematoda Tripylidae Tobrilus gracilis
    ['10710202', '10710200'], // Nematoda Tripylidae Tobrilus pellucidus
    ['10720000', '10000000'], // Nematoda Ironidae
    ['10720100', '10720000'], // Nematoda Ironidae Ironus
    ['10720101', '10720100'], // Nematoda Ironidae Ironus ignavus
    ['10720102', '10720100'], // Nematoda Ironidae Ironus tenuicaudatus
    ['10730000', '10000000'], // Nematoda Alaimidae
    ['10730100', '10730000'], // Nematoda Alaimidae Alaimus
    ['10730101', '10730100'], // Nematoda Alaimidae Alaimus primitivus
    ['10800000', '10000000'], // Nematoda Dorylaimida
    ['10810000', '10000000'], // Nematoda Dorylaimidae
    ['10810100', '10810000'], // Nematoda Dorylaimidae Dorylaimus
    ['10810101', '10810100'], // Nematoda Dorylaimidae Dorylaimus stagnalis
    ['10810200', '10810000'], // Nematoda Dorylaimidae Mesodorylaimus
    ['10810201', '10810200'], // Nematoda Dorylaimidae Mesodorylaimus bastiani
    ['10810202', '10810200'], // Nematoda Dorylaimidae Mesodorylaimus filiformis
    ['10810203', '10810200'], // Nematoda Dorylaimidae Mesodorylaimus tenuicaudatus
    ['10810300', '10810000'], // Nematoda Dorylaimidae Eudorylaimus
    ['10810301', '10810300'], // Nematoda Dorylaimidae Eudorylaimus acuticauda
    ['10810302', '10810300'], // Nematoda Dorylaimidae Eudorylaimus carteri
    ['10810303', '10810300'], // Nematoda Dorylaimidae Eudorylaimus iners
    ['10810304', '10810300'], // Nematoda Dorylaimidae Eudorylaimus intermedius
    ['10810305', '10810300'], // Nematoda Dorylaimidae Eudorylaimus rhopalocercus
    ['10810400', '10810000'], // Nematoda Dorylaimidae Aporcelaimus
    ['10810401', '10810400'], // Nematoda Dorylaimidae Aporcelaimus obscurus
    ['10810500', '10810000'], // Nematoda Dorylaimidae Prodorylaimus
    ['10810501', '10810500'], // Nematoda Dorylaimidae Prodorylaimus longicaudatus
    ['10810600', '10810000'], // Nematoda Dorylaimidae Thornenema
    ['10810601', '10810600'], // Nematoda Dorylaimidae Thornenema wickeni
    ['10810700', '10810000'], // Nematoda Dorylaimidae Actinolaimus
    ['10810701', '10810700'], // Nematoda Dorylaimidae Actinolaimus macrolaimus
    ['10820000', '10000000'], // Nematoda Belondiridae
    ['10820100', '10820000'], // Nematoda Belondiridae Dorylaimellus
    ['10820101', '10820100'], // Nematoda Belondiridae Dorylaimellus globatus
    ['10830000', '10000000'], // Nematoda Leptonchidae
    ['10830100', '10830000'], // Nematoda Leptonchidae Tylencholaimellus
    ['10830101', '10830100'], // Nematoda Leptonchidae Tylencholaimellus fenensis
    ['10840000', '10000000'], // Nematoda Mononchidae
    ['10840100', '10840000'], // Nematoda Mononchidae Mononchus
    ['10840101', '10840100'], // Nematoda Mononchidae Mononchus papillatus
    ['10840102', '10840100'], // Nematoda Mononchidae Mononchus truncatus
    ['10840103', '10840100'], // Nematoda Mononchidae Mononchus tunbridgensis
    ['10840200', '10840000'], // Nematoda Mononchidae Prionchulus
    ['10840201', '10840200'], // Nematoda Mononchidae Prionchulus muscorum
    ['11000000', undefined], // Gastrotricha
    ['11100000', '11000000'], // Gastrotricha Chaetonotoidea
    ['11110000', '11000000'], // Gastrotricha Chaetonotidae
    ['11110100', '11110000'], // Gastrotricha Chaetonotidae Chaetonotus
    ['11110101', '11110100'], // Gastrotricha Chaetonotidae Chaetonotus maximus
    ['11110102', '11110100'], // Gastrotricha Chaetonotidae Chaetonotus schultzei
    ['11110103', '11110100'], // Gastrotricha Chaetonotidae Chaetonotus simrothi
    ['11110104', '11110100'], // Gastrotricha Chaetonotidae Chaetonotus slackiae
    ['11110105', '11110100'], // Gastrotricha Chaetonotidae Chaetonotus zelinkai
    ['11110200', '11110000'], // Gastrotricha Chaetonotidae Heterolepidoderma
    ['11110201', '11110200'], // Gastrotricha Chaetonotidae Heterolepidoderma marinum
    ['11110300', '11110000'], // Gastrotricha Chaetonotidae Polymerurus
    ['11110301', '11110300'], // Gastrotricha Chaetonotidae Polymerurus longicaudatus
    ['11120000', '11000000'], // Gastrotricha Dichaeturidae
    ['11120100', '11120000'], // Gastrotricha Dichaeturidae Dichaetura
    ['11120101', '11120100'], // Gastrotricha Dichaeturidae Dichaetura piscator
    ['11130000', '11000000'], // Gastrotricha Neogosseidae
    ['11130100', '11130000'], // Gastrotricha Neogosseidae Neogossea
    ['11130101', '11130100'], // Gastrotricha Neogosseidae Neogossea antennigera
    ['11140000', '11000000'], // Gastrotricha Dasyditidae
    ['11140100', '11140000'], // Gastrotricha Dasyditidae Dasydites
    ['11140101', '11140100'], // Gastrotricha Dasyditidae Dasydites goniathrix
    ['11140200', '11140000'], // Gastrotricha Dasyditidae Setopus
    ['11140201', '11140200'], // Gastrotricha Dasyditidae Setopus bisetosus
    ['11140300', '11140000'], // Gastrotricha Dasyditidae Stylochaeta
    ['11140301', '11140300'], // Gastrotricha Dasyditidae Stylochaeta fusiformis
    ['12000000', undefined], // Rotifera
    ['12100000', '12000000'], // Rotifera Bdelloidea
    ['12110000', '12000000'], // Rotifera Habrotrochidae
    ['12110100', '12110000'], // Rotifera Habrotrochidae Otostephanus
    ['12110101', '12110100'], // Rotifera Habrotrochidae Otostephanus torquatus
    ['12110200', '12110000'], // Rotifera Habrotrochidae Scepanotrocha
    ['12110201', '12110200'], // Rotifera Habrotrochidae Scepanotrocha corniculata
    ['12110202', '12110200'], // Rotifera Habrotrochidae Scepanotrocha rubra
    ['12110300', '12110000'], // Rotifera Habrotrochidae Habrotrocha
    ['12110301', '12110300'], // Rotifera Habrotrochidae Habrotrocha angusticollis
    ['12110302', '12110300'], // Rotifera Habrotrochidae Habrotrocha annulata
    ['12110303', '12110300'], // Rotifera Habrotrochidae Habrotrocha appendiculata
    ['12110304', '12110300'], // Rotifera Habrotrochidae Habrotrocha aspera
    ['12110305', '12110300'], // Rotifera Habrotrochidae Habrotrocha bidens
    ['12110306', '12110300'], // Rotifera Habrotrochidae Habrotrocha collaris
    ['12110307', '12110300'], // Rotifera Habrotrochidae Habrotrocha constricta
    ['12110308', '12110300'], // Rotifera Habrotrochidae Habrotrocha crenata
    ['12110309', '12110300'], // Rotifera Habrotrochidae Habrotrocha elegans
    ['12110311', '12110300'], // Rotifera Habrotrochidae Habrotrocha eremita
    ['12110312', '12110300'], // Rotifera Habrotrochidae Habrotrocha flava
    ['12110313', '12110300'], // Rotifera Habrotrochidae Habrotrocha flaviformis
    ['12110314', '12110300'], // Rotifera Habrotrochidae Habrotrocha fusca
    ['12110315', '12110300'], // Rotifera Habrotrochidae Habrotrocha insignis
    ['12110316', '12110300'], // Rotifera Habrotrochidae Habrotrocha lata
    ['12110317', '12110300'], // Rotifera Habrotrochidae Habrotrocha leitgebi
    ['12110318', '12110300'], // Rotifera Habrotrochidae Habrotrocha ligula
    ['12110319', '12110300'], // Rotifera Habrotrochidae Habrotrocha longiceps
    ['12110321', '12110300'], // Rotifera Habrotrochidae Habrotrocha longula
    ['12110322', '12110300'], // Rotifera Habrotrochidae Habrotrocha microcephala
    ['12110323', '12110300'], // Rotifera Habrotrochidae Habrotrocha minuta
    ['12110324', '12110300'], // Rotifera Habrotrochidae Habrotrocha munda
    ['12110325', '12110300'], // Rotifera Habrotrochidae Habrotrocha pavida
    ['12110326', '12110300'], // Rotifera Habrotrochidae Habrotrocha pulchra
    ['12110327', '12110300'], // Rotifera Habrotrochidae Habrotrocha pusilla
    ['12110328', '12110300'], // Rotifera Habrotrochidae Habrotrocha reclusa
    ['12110329', '12110300'], // Rotifera Habrotrochidae Habrotrocha roeperi
    ['12110331', '12110300'], // Rotifera Habrotrochidae Habrotrocha spicula
    ['12110332', '12110300'], // Rotifera Habrotrochidae Habrotrocha sylvestris
    ['12110333', '12110300'], // Rotifera Habrotrochidae Habrotrocha thermalis
    ['12110334', '12110300'], // Rotifera Habrotrochidae Habrotrocha tridens
    ['12110335', '12110300'], // Rotifera Habrotrochidae Habrotrocha tripus
    ['12110336', '12110300'], // Rotifera Habrotrochidae Habrotrocha visa
    ['12120000', '12000000'], // Rotifera Adinetidae
    ['12120100', '12120000'], // Rotifera Adinetidae Adineta
    ['12120101', '12120100'], // Rotifera Adinetidae Adineta barbata
    ['12120102', '12120100'], // Rotifera Adinetidae Adineta gracilis
    ['12120103', '12120100'], // Rotifera Adinetidae Adineta oculata
    ['12120104', '12120100'], // Rotifera Adinetidae Adineta tuberculosa
    ['12120105', '12120100'], // Rotifera Adinetidae Adineta vaga
    ['12120200', '12120000'], // Rotifera Adinetidae Bradyscela
    ['12120201', '12120200'], // Rotifera Adinetidae Bradyscela clauda
    ['12130000', '12000000'], // Rotifera Philodinidae
    ['12130100', '12130000'], // Rotifera Philodinidae Mniobia
    ['12130101', '12130100'], // Rotifera Philodinidae Mniobia armata
    ['12130102', '12130100'], // Rotifera Philodinidae Mniobia circinata
    ['12130103', '12130100'], // Rotifera Philodinidae Mniobia incrassata
    ['12130104', '12130100'], // Rotifera Philodinidae Mniobia magna
    ['12130105', '12130100'], // Rotifera Philodinidae Mniobia russeola
    ['12130106', '12130100'], // Rotifera Philodinidae Mniobia scarlatina
    ['12130107', '12130100'], // Rotifera Philodinidae Mniobia symbiotica
    ['12130108', '12130100'], // Rotifera Philodinidae Mniobia tetraodon
    ['12130200', '12130000'], // Rotifera Philodinidae Ceratotrocha
    ['12130201', '12130200'], // Rotifera Philodinidae Ceratotrocha cornigera
    ['12130300', '12130000'], // Rotifera Philodinidae Rotaria
    ['12130301', '12130300'], // Rotifera Philodinidae Rotaria citrina
    ['12130302', '12130300'], // Rotifera Philodinidae Rotaria curtipes
    ['12130303', '12130300'], // Rotifera Philodinidae Rotaria elongata
    ['12130304', '12130300'], // Rotifera Philodinidae Rotaria haptica
    ['12130305', '12130300'], // Rotifera Philodinidae Rotaria macroceros
    ['12130306', '12130300'], // Rotifera Philodinidae Rotaria macrura
    ['12130307', '12130300'], // Rotifera Philodinidae Rotaria magna-calcarata
    ['12130308', '12130300'], // Rotifera Philodinidae Rotaria mento
    ['12130309', '12130300'], // Rotifera Philodinidae Rotaria murrayi
    ['12130311', '12130300'], // Rotifera Philodinidae Rotaria neptunia
    ['12130312', '12130300'], // Rotifera Philodinidae Rotaria neptunoida
    ['12130313', '12130300'], // Rotifera Philodinidae Rotaria quadrioculata
    ['12130314', '12130300'], // Rotifera Philodinidae Rotaria rotatoria
    ['12130315', '12130300'], // Rotifera Philodinidae Rotaria socialis
    ['12130316', '12130300'], // Rotifera Philodinidae Rotaria sordida
    ['12130317', '12130300'], // Rotifera Philodinidae Rotaria spicata
    ['12130318', '12130300'], // Rotifera Philodinidae Rotaria tardigrada
    ['12130319', '12130300'], // Rotifera Philodinidae Rotaria trisecata
    ['12130400', '12130000'], // Rotifera Philodinidae Macrotrachela
    ['12130401', '12130400'], // Rotifera Philodinidae Macrotrachela aculeata
    ['12130402', '12130400'], // Rotifera Philodinidae Macrotrachela angusta
    ['12130403', '12130400'], // Rotifera Philodinidae Macrotrachela asperula
    ['12130404', '12130400'], // Rotifera Philodinidae Macrotrachela bilfingeri
    ['12130405', '12130400'], // Rotifera Philodinidae Macrotrachela bullata
    ['12130406', '12130400'], // Rotifera Philodinidae Macrotrachela concinna
    ['12130407', '12130400'], // Rotifera Philodinidae Macrotrachela crucicornis
    ['12130408', '12130400'], // Rotifera Philodinidae Macrotrachela decora
    ['12130409', '12130400'], // Rotifera Philodinidae Macrotrachela ehrenbergi
    ['12130411', '12130400'], // Rotifera Philodinidae Macrotrachela fungicola
    ['12130412', '12130400'], // Rotifera Philodinidae Macrotrachela habita
    ['12130413', '12130400'], // Rotifera Philodinidae Macrotrachela multispinosa
    ['12130414', '12130400'], // Rotifera Philodinidae Macrotrachela muricata
    ['12130415', '12130400'], // Rotifera Philodinidae Macrotrachela musculosa
    ['12130416', '12130400'], // Rotifera Philodinidae Macrotrachela nana
    ['12130417', '12130400'], // Rotifera Philodinidae Macrotrachela natans
    ['12130418', '12130400'], // Rotifera Philodinidae Macrotrachela ornata
    ['12130419', '12130400'], // Rotifera Philodinidae Macrotrachela papillosa
    ['12130421', '12130400'], // Rotifera Philodinidae Macrotrachela plicata
    ['12130422', '12130400'], // Rotifera Philodinidae Macrotrachela quadricornifera
    ['12130423', '12130400'], // Rotifera Philodinidae Macrotrachela vesicularis
    ['12130500', '12130000'], // Rotifera Philodinidae Embata
    ['12130501', '12130500'], // Rotifera Philodinidae Embata commensalis
    ['12130502', '12130500'], // Rotifera Philodinidae Embata hamata
    ['12130503', '12130500'], // Rotifera Philodinidae Embata laticeps
    ['12130504', '12130500'], // Rotifera Philodinidae Embata laticornis
    ['12130505', '12130500'], // Rotifera Philodinidae Embata parasitica
    ['12130600', '12130000'], // Rotifera Philodinidae Philodina
    ['12130601', '12130600'], // Rotifera Philodinidae Philodina acuticornis
    ['12130602', '12130600'], // Rotifera Philodinidae Philodina brevipes
    ['12130603', '12130600'], // Rotifera Philodinidae Philodina citrina
    ['12130604', '12130600'], // Rotifera Philodinidae Philodina convergens
    ['12130605', '12130600'], // Rotifera Philodinidae Philodina erythrophthalma
    ['12130606', '12130600'], // Rotifera Philodinidae Philodina flaviceps
    ['12130607', '12130600'], // Rotifera Philodinidae Philodina megalotrocha
    ['12130608', '12130600'], // Rotifera Philodinidae Philodina nemoralis
    ['12130609', '12130600'], // Rotifera Philodinidae Philodina plena
    ['12130611', '12130600'], // Rotifera Philodinidae Philodina roseola
    ['12130612', '12130600'], // Rotifera Philodinidae Philodina rugosa
    ['12130613', '12130600'], // Rotifera Philodinidae Philodina vorax
    ['12130700', '12130000'], // Rotifera Philodinidae Dissotrocha
    ['12130701', '12130700'], // Rotifera Philodinidae Dissotrocha aculeata
    ['12130702', '12130700'], // Rotifera Philodinidae Dissotrocha macrostyla
    ['12130703', '12130700'], // Rotifera Philodinidae Dissotrocha spinosa
    ['12130800', '12130000'], // Rotifera Philodinidae Pleuretra
    ['12130801', '12130800'], // Rotifera Philodinidae Pleuretra alpium
    ['12130802', '12130800'], // Rotifera Philodinidae Pleuretra brycei
    ['12130803', '12130800'], // Rotifera Philodinidae Pleuretra humerosa
    ['12140000', '12000000'], // Rotifera Philodinavidae
    ['12140100', '12140000'], // Rotifera Philodinavidae Philodinavus
    ['12140101', '12140100'], // Rotifera Philodinavidae Philodinavus paradoxus
    ['12140200', '12140000'], // Rotifera Philodinavidae Henoceros
    ['12140201', '12140200'], // Rotifera Philodinavidae Henoceros falcatus
    ['12200000', '12000000'], // Rotifera Flosculariacea
    ['12210000', '12000000'], // Rotifera Testudinellidae
    ['12210100', '12210000'], // Rotifera Testudinellidae Testudinella
    ['12210101', '12210100'], // Rotifera Testudinellidae Testudinella caeca
    ['12210102', '12210100'], // Rotifera Testudinellidae Testudinella clypeata
    ['12210103', '12210100'], // Rotifera Testudinellidae Testudinella elliptica
    ['12210104', '12210100'], // Rotifera Testudinellidae Testudinella incisa
    ['12210105', '12210100'], // Rotifera Testudinellidae Testudinella mucronata
    ['12210106', '12210100'], // Rotifera Testudinellidae Testudinella parva
    ['12210107', '12210100'], // Rotifera Testudinellidae Testudinella patina
    ['12210108', '12210100'], // Rotifera Testudinellidae Testudinella reflexa
    ['12210109', '12210100'], // Rotifera Testudinellidae Testudinella truncata
    ['12210200', '12210000'], // Rotifera Testudinellidae Pompholyx
    ['12210201', '12210200'], // Rotifera Testudinellidae Pompholyx complanata
    ['12210202', '12210200'], // Rotifera Testudinellidae Pompholyx sulcata
    ['12220000', '12000000'], // Rotifera Flosculariidae
    ['12220100', '12220000'], // Rotifera Flosculariidae Beauchampia
    ['12220101', '12220100'], // Rotifera Flosculariidae Beauchampia crucigera
    ['12220200', '12220000'], // Rotifera Flosculariidae Limnias
    ['12220201', '12220200'], // Rotifera Flosculariidae Limnias ceratophylli
    ['12220202', '12220200'], // Rotifera Flosculariidae Limnias cornuella
    ['12220203', '12220200'], // Rotifera Flosculariidae Limnias melicerta
    ['12220204', '12220200'], // Rotifera Flosculariidae Limnias myriophylli
    ['12220300', '12220000'], // Rotifera Flosculariidae Floscularia
    ['12220301', '12220300'], // Rotifera Flosculariidae Floscularia janus
    ['12220302', '12220300'], // Rotifera Flosculariidae Floscularia melicerta
    ['12220303', '12220300'], // Rotifera Flosculariidae Floscularia ringens
    ['12220400', '12220000'], // Rotifera Flosculariidae Ptygura
    ['12220401', '12220400'], // Rotifera Flosculariidae Ptygura beauchampi
    ['12220402', '12220400'], // Rotifera Flosculariidae Ptygura brachiata
    ['12220403', '12220400'], // Rotifera Flosculariidae Ptygura brevis
    ['12220404', '12220400'], // Rotifera Flosculariidae Ptygura cephaloceras
    ['12220405', '12220400'], // Rotifera Flosculariidae Ptygura crystallina
    ['12220406', '12220400'], // Rotifera Flosculariidae Ptygura furcillata
    ['12220407', '12220400'], // Rotifera Flosculariidae Ptygura intermedia
    ['12220408', '12220400'], // Rotifera Flosculariidae Ptygura longicornis
    ['12220409', '12220400'], // Rotifera Flosculariidae Ptygura melicerta
    ['12220411', '12220400'], // Rotifera Flosculariidae Ptygura pilula
    ['12220412', '12220400'], // Rotifera Flosculariidae Ptygura rotifer
    ['12220413', '12220400'], // Rotifera Flosculariidae Ptygura tridorsicornis
    ['12220414', '12220400'], // Rotifera Flosculariidae Ptygura velata
    ['12220500', '12220000'], // Rotifera Flosculariidae Sinantherina
    ['12220501', '12220500'], // Rotifera Flosculariidae Sinantherina socialis
    ['12220600', '12220000'], // Rotifera Flosculariidae Lacinularia
    ['12220601', '12220600'], // Rotifera Flosculariidae Lacinularia flosculosa
    ['12230000', '12000000'], // Rotifera Conochilidae
    ['12230100', '12230000'], // Rotifera Conochilidae Conochilus
    ['12230101', '12230100'], // Rotifera Conochilidae Conochilus hippocrepis
    ['12230102', '12230100'], // Rotifera Conochilidae Conochilus unicornis
    ['12230200', '12230000'], // Rotifera Conochilidae Conochiloides
    ['12230201', '12230200'], // Rotifera Conochilidae Conochiloides dossuarius
    ['12230202', '12230200'], // Rotifera Conochilidae Conochiloides natans
    ['12240000', '12000000'], // Rotifera Hexarthridae
    ['12240100', '12240000'], // Rotifera Hexarthridae Hexarthra
    ['12240101', '12240100'], // Rotifera Hexarthridae Hexarthra mira
    ['12250000', '12000000'], // Rotifera Filiniidae
    ['12250100', '12250000'], // Rotifera Filiniidae Filinia
    ['12250101', '12250100'], // Rotifera Filiniidae Filinia cornuta
    ['12250102', '12250100'], // Rotifera Filiniidae Filinia longiseta
    ['12250103', '12250100'], // Rotifera Filiniidae Filinia terminalis
    ['12300000', '12000000'], // Rotifera Collothecacea
    ['12310000', '12000000'], // Rotifera Collothecidae
    ['12310100', '12310000'], // Rotifera Collothecidae Collotheca
    ['12310101', '12310100'], // Rotifera Collothecidae Collotheca ambigua
    ['12310102', '12310100'], // Rotifera Collothecidae Collotheca annulata
    ['12310103', '12310100'], // Rotifera Collothecidae Collotheca calva
    ['12310104', '12310100'], // Rotifera Collothecidae Collotheca campanulata
    ['12310105', '12310100'], // Rotifera Collothecidae Collotheca coronetta
    ['12310106', '12310100'], // Rotifera Collothecidae Collotheca crateriformis
    ['12310107', '12310100'], // Rotifera Collothecidae Collotheca cucullata
    ['12310108', '12310100'], // Rotifera Collothecidae Collotheca edentata
    ['12310109', '12310100'], // Rotifera Collothecidae Collotheca gossei
    ['12310111', '12310100'], // Rotifera Collothecidae Collotheca heptabrachiata
    ['12310112', '12310100'], // Rotifera Collothecidae Collotheca hoodi
    ['12310113', '12310100'], // Rotifera Collothecidae Collotheca libera
    ['12310114', '12310100'], // Rotifera Collothecidae Collotheca minuta
    ['12310115', '12310100'], // Rotifera Collothecidae Collotheca mira
    ['12310116', '12310100'], // Rotifera Collothecidae Collotheca moseli
    ['12310117', '12310100'], // Rotifera Collothecidae Collotheca mutabilis
    ['12310118', '12310100'], // Rotifera Collothecidae Collotheca ornata
    ['12310119', '12310100'], // Rotifera Collothecidae Collotheca pelagica
    ['12310121', '12310100'], // Rotifera Collothecidae Collotheca quadrilobata
    ['12310122', '12310100'], // Rotifera Collothecidae Collotheca quadrinodosa
    ['12310123', '12310100'], // Rotifera Collothecidae Collotheca sessilis
    ['12310124', '12310100'], // Rotifera Collothecidae Collotheca spinata
    ['12310125', '12310100'], // Rotifera Collothecidae Collotheca stephanochaeta
    ['12310126', '12310100'], // Rotifera Collothecidae Collotheca tenuilobata
    ['12310127', '12310100'], // Rotifera Collothecidae Collotheca torquilobata
    ['12310128', '12310100'], // Rotifera Collothecidae Collotheca trifidlobata
    ['12310129', '12310100'], // Rotifera Collothecidae Collotheca trilobata
    ['12310200', '12310000'], // Rotifera Collothecidae Stephanoceros
    ['12310201', '12310200'], // Rotifera Collothecidae Stephanoceros fimbriatus
    ['12320000', '12000000'], // Rotifera Atrochidae
    ['12320100', '12320000'], // Rotifera Atrochidae Cupelopagis
    ['12320101', '12320100'], // Rotifera Atrochidae Cupelopagis vorax
    ['12320200', '12320000'], // Rotifera Atrochidae Atrochus
    ['12320201', '12320200'], // Rotifera Atrochidae Atrochus tentaculatus
    ['12400000', '12000000'], // Rotifera Ploimida
    ['12410000', '12000000'], // Rotifera Epiphanidae
    ['12410100', '12410000'], // Rotifera Epiphanidae Proalides
    ['12410101', '12410100'], // Rotifera Epiphanidae Proalides tentaculatus
    ['12410200', '12410000'], // Rotifera Epiphanidae Epiphanes
    ['12410201', '12410200'], // Rotifera Epiphanidae Epiphanes brachionus
    ['12410202', '12410200'], // Rotifera Epiphanidae Epiphanes clavatula
    ['12410203', '12410200'], // Rotifera Epiphanidae Epiphanes senta
    ['12410300', '12410000'], // Rotifera Epiphanidae Cyrtonia
    ['12410301', '12410300'], // Rotifera Epiphanidae Cyrtonia tuba
    ['12410400', '12410000'], // Rotifera Epiphanidae Rhinoglena
    ['12410401', '12410400'], // Rotifera Epiphanidae Rhinoglena frontalis
    ['12410500', '12410000'], // Rotifera Epiphanidae Micrococides
    ['12410501', '12410500'], // Rotifera Epiphanidae Micrococides chlaena
    ['12410502', '12410500'], // Rotifera Epiphanidae Micrococides robustus
    ['12420000', '12000000'], // Rotifera Brachionidae
    ['12420100', '12420000'], // Rotifera Brachionidae Platyias
    ['12420101', '12420100'], // Rotifera Brachionidae Platyias quadricornis
    ['12420200', '12420000'], // Rotifera Brachionidae Brachionus
    ['12420201', '12420200'], // Rotifera Brachionidae Brachionus angularis
    ['12420202', '12420200'], // Rotifera Brachionidae Brachionus calyciflorus
    ['12420203', '12420200'], // Rotifera Brachionidae Brachionus leydigi
    ['12420204', '12420200'], // Rotifera Brachionidae Brachionus patulus
    ['12420205', '12420200'], // Rotifera Brachionidae Brachionus plicatilis
    ['12420206', '12420200'], // Rotifera Brachionidae Brachionus quadridentatus
    ['12420207', '12420200'], // Rotifera Brachionidae Brachionus urceolaris
    ['12420300', '12420000'], // Rotifera Brachionidae Keratella
    ['12420301', '12420300'], // Rotifera Brachionidae Keratella cochlearis
    ['12420302', '12420300'], // Rotifera Brachionidae Keratella cruciformis
    ['12420303', '12420300'], // Rotifera Brachionidae Keratella irregularis
    ['12420304', '12420300'], // Rotifera Brachionidae Keratella quadrata
    ['12420305', '12420300'], // Rotifera Brachionidae Keratella serrulata
    ['12420306', '12420300'], // Rotifera Brachionidae Keratella testudo
    ['12420307', '12420300'], // Rotifera Brachionidae Keratella ticinensis
    ['12420308', '12420300'], // Rotifera Brachionidae Keratella valga
    ['12420400', '12420000'], // Rotifera Brachionidae Notholca
    ['12420401', '12420400'], // Rotifera Brachionidae Notholca acuminata
    ['12420402', '12420400'], // Rotifera Brachionidae Notholca bipalium
    ['12420403', '12420400'], // Rotifera Brachionidae Notholca cinetura
    ['12420404', '12420400'], // Rotifera Brachionidae Notholca foliacea
    ['12420405', '12420400'], // Rotifera Brachionidae Notholca labis
    ['12420406', '12420400'], // Rotifera Brachionidae Notholca squamula
    ['12420407', '12420400'], // Rotifera Brachionidae Notholca striata
    ['12420600', '12420000'], // Rotifera Brachionidae Kellicottia
    ['12420601', '12420600'], // Rotifera Brachionidae Kellicottia longispina
    ['12420700', '12420000'], // Rotifera Brachionidae Anuraeopsis
    ['12420701', '12420700'], // Rotifera Brachionidae Anuraeopsis fissa
    ['12430000', '12000000'], // Rotifera Euchlanidae
    ['12430100', '12430000'], // Rotifera Euchlanidae Beauchampiella
    ['12430101', '12430100'], // Rotifera Euchlanidae Beauchampiella eudactylota
    ['12430200', '12430000'], // Rotifera Euchlanidae Euchlanis
    ['12430201', '12430200'], // Rotifera Euchlanidae Euchlanis deflexa
    ['12430202', '12430200'], // Rotifera Euchlanidae Euchlanis dilatata
    ['12430203', '12430200'], // Rotifera Euchlanidae Euchlanis incisa
    ['12430204', '12430200'], // Rotifera Euchlanidae Euchlanis lyra
    ['12430205', '12430200'], // Rotifera Euchlanidae Euchlanis meneta
    ['12430206', '12430200'], // Rotifera Euchlanidae Euchlanis oropha
    ['12430207', '12430200'], // Rotifera Euchlanidae Euchlanis parva
    ['12430208', '12430200'], // Rotifera Euchlanidae Euchlanis pyriformis
    ['12430209', '12430200'], // Rotifera Euchlanidae Euchlanis triquetra
    ['12430300', '12430000'], // Rotifera Euchlanidae Diplois
    ['12430301', '12430300'], // Rotifera Euchlanidae Diplois daviesiae
    ['12430400', '12430000'], // Rotifera Euchlanidae Tripleuchlanis
    ['12430401', '12430400'], // Rotifera Euchlanidae Tripleuchlanis plicata
    ['12430500', '12430000'], // Rotifera Euchlanidae Dipleuchlanis
    ['12430501', '12430500'], // Rotifera Euchlanidae Dipleuchlanis propatula
    ['12440000', '12000000'], // Rotifera Mytilinidae
    ['12440100', '12440000'], // Rotifera Mytilinidae Mytilina
    ['12440101', '12440100'], // Rotifera Mytilinidae Mytilina compressa
    ['12440102', '12440100'], // Rotifera Mytilinidae Mytilina crassipes
    ['12440103', '12440100'], // Rotifera Mytilinidae Mytilina mucronata
    ['12440104', '12440100'], // Rotifera Mytilinidae Mytilina mutica
    ['12440105', '12440100'], // Rotifera Mytilinidae Mytilina trigona
    ['12440106', '12440100'], // Rotifera Mytilinidae Mytilina unguipes
    ['12440107', '12440100'], // Rotifera Mytilinidae Mytilina ventralis
    ['12440200', '12440000'], // Rotifera Mytilinidae Lophocharis
    ['12440201', '12440200'], // Rotifera Mytilinidae Lophocharis oxysternon
    ['12440202', '12440200'], // Rotifera Mytilinidae Lophocharis salpina
    ['12450000', '12000000'], // Rotifera Trichotridae
    ['12450100', '12450000'], // Rotifera Trichotridae Wolga
    ['12450101', '12450100'], // Rotifera Trichotridae Wolga spinifera
    ['12450200', '12450000'], // Rotifera Trichotridae Trichotria
    ['12450201', '12450200'], // Rotifera Trichotridae Trichotria pocillum
    ['12450202', '12450200'], // Rotifera Trichotridae Trichotria tetractis
    ['12450203', '12450200'], // Rotifera Trichotridae Trichotria truncata
    ['12450300', '12450000'], // Rotifera Trichotridae Macrochaetus
    ['12450301', '12450300'], // Rotifera Trichotridae Macrochaetus collinsi
    ['12450302', '12450300'], // Rotifera Trichotridae Macrochaetus subquadratus
    ['12460000', '12000000'], // Rotifera Colurellidae
    ['12460100', '12460000'], // Rotifera Colurellidae Colurella
    ['12460101', '12460100'], // Rotifera Colurellidae Colurella adriatica
    ['12460102', '12460100'], // Rotifera Colurellidae Colurella colurus
    ['12460103', '12460100'], // Rotifera Colurellidae Colurella dicentra
    ['12460104', '12460100'], // Rotifera Colurellidae Colurella hindenburgi
    ['12460105', '12460100'], // Rotifera Colurellidae Colurella obtusa
    ['12460106', '12460100'], // Rotifera Colurellidae Colurella sinistra
    ['12460107', '12460100'], // Rotifera Colurellidae Colurella tessellata
    ['12460108', '12460100'], // Rotifera Colurellidae Colurella uncinata
    ['12460200', '12460000'], // Rotifera Colurellidae Paracolurella
    ['12460201', '12460200'], // Rotifera Colurellidae Paracolurella pertyi
    ['12460300', '12460000'], // Rotifera Colurellidae Squatinella
    ['12460301', '12460300'], // Rotifera Colurellidae Squatinella bifurca
    ['12460302', '12460300'], // Rotifera Colurellidae Squatinella leydigi
    ['12460303', '12460300'], // Rotifera Colurellidae Squatinella longispinata
    ['12460304', '12460300'], // Rotifera Colurellidae Squatinella microdactyla
    ['12460305', '12460300'], // Rotifera Colurellidae Squatinella mutica
    ['12460306', '12460300'], // Rotifera Colurellidae Squatinella rostrum
    ['12460400', '12460000'], // Rotifera Colurellidae Lepadella
    ['12460410', '12460400'], // Rotifera Colurellidae Lepadella (Lepadella)
    ['12460411', '12460400'], // Rotifera Colurellidae Lepadella (Lepadella) acuminata
    ['12460412', '12460400'], // Rotifera Colurellidae Lepadella (Lepadella) cristata
    ['12460413', '12460400'], // Rotifera Colurellidae Lepadella (Lepadella) minuta
    ['12460414', '12460400'], // Rotifera Colurellidae Lepadella (Lepadella) ovalis
    ['12460415', '12460400'], // Rotifera Colurellidae Lepadella (Lepadella) patella
    ['12460416', '12460400'], // Rotifera Colurellidae Lepadella (Lepadella) pterygoides
    ['12460417', '12460400'], // Rotifera Colurellidae Lepadella (Lepadella) rhomboides
    ['12460418', '12460400'], // Rotifera Colurellidae Lepadella (Lepadella) triptera
    ['12460430', '12460400'], // Rotifera Colurellidae Lepadella (Heterolepadella)
    ['12460431', '12460400'], // Rotifera Colurellidae Lepadella (Heterolepadella) ehrenbergi
    ['12470000', '12000000'], // Rotifera Lecanidae
    ['12470100', '12470000'], // Rotifera Lecanidae Lecane
    ['12470110', '12470100'], // Rotifera Lecanidae Lecane (Lecane)
    ['12470111', '12470100'], // Rotifera Lecanidae Lecane (Lecane) aquila
    ['12470112', '12470100'], // Rotifera Lecanidae Lecane (Lecane) brachydactyla
    ['12470113', '12470100'], // Rotifera Lecanidae Lecane (Lecane) clara
    ['12470114', '12470100'], // Rotifera Lecanidae Lecane (Lecane) flexilis
    ['12470115', '12470100'], // Rotifera Lecanidae Lecane (Lecane) hornemanni
    ['12470116', '12470100'], // Rotifera Lecanidae Lecane (Lecane) inermis
    ['12470117', '12470100'], // Rotifera Lecanidae Lecane (Lecane) levistyla
    ['12470118', '12470100'], // Rotifera Lecanidae Lecane (Lecane) ligona
    ['12470119', '12470100'], // Rotifera Lecanidae Lecane (Lecane) ludwigi
    ['1247011A', '12470100'], // Rotifera Lecanidae Lecane (Lecane) luna
    ['1247011B', '12470100'], // Rotifera Lecanidae Lecane (Lecane) pumila
    ['1247011C', '12470100'], // Rotifera Lecanidae Lecane (Lecane) signifera
    ['1247011D', '12470100'], // Rotifera Lecanidae Lecane (Lecane) stichaea
    ['1247011E', '12470100'], // Rotifera Lecanidae Lecane (Lecane) stokesi
    ['1247011F', '12470100'], // Rotifera Lecanidae Lecane (Lecane) sulcata
    ['1247011G', '12470100'], // Rotifera Lecanidae Lecane (Lecane) ungulata
    ['12470140', '12470100'], // Rotifera Lecanidae Lecane (Hemimonostyla)
    ['12470141', '12470100'], // Rotifera Lecanidae Lecane (Hemimonostyla) agilis
    ['12470150', '12470100'], // Rotifera Lecanidae Lecane (Monostyla)
    ['12470151', '12470100'], // Rotifera Lecanidae Lecane (Monostyla) acus
    ['12470152', '12470100'], // Rotifera Lecanidae Lecane (Monostyla) arcuata
    ['12470153', '12470100'], // Rotifera Lecanidae Lecane (Monostyla) bifurca
    ['12470154', '12470100'], // Rotifera Lecanidae Lecane (Monostyla) bulla
    ['12470155', '12470100'], // Rotifera Lecanidae Lecane (Monostyla) closterocerca
    ['12470156', '12470100'], // Rotifera Lecanidae Lecane (Monostyla) cornuta
    ['12470157', '12470100'], // Rotifera Lecanidae Lecane (Monostyla) furcata
    ['12470158', '12470100'], // Rotifera Lecanidae Lecane (Monostyla) galeata
    ['12470159', '12470100'], // Rotifera Lecanidae Lecane (Monostyla) hamata
    ['1247015A', '12470100'], // Rotifera Lecanidae Lecane (Monostyla) lunaris
    ['1247015B', '12470100'], // Rotifera Lecanidae Lecane (Monostyla) quadridentata
    ['1247015C', '12470100'], // Rotifera Lecanidae Lecane (Monostyla) stenroosi
    ['1247015D', '12470100'], // Rotifera Lecanidae Lecane (Monostyla) subulata
    ['12480000', '12000000'], // Rotifera Proalidae
    ['12480100', '12480000'], // Rotifera Proalidae Bryceella
    ['12480101', '12480100'], // Rotifera Proalidae Bryceella stylata
    ['12480102', '12480100'], // Rotifera Proalidae Bryceella tenella
    ['12480200', '12480000'], // Rotifera Proalidae Proalinopsis
    ['12480201', '12480200'], // Rotifera Proalidae Proalinopsis caudatus
    ['12480202', '12480200'], // Rotifera Proalidae Proalinopsis squamipes
    ['12480203', '12480200'], // Rotifera Proalidae Proalinopsis staurus
    ['12480300', '12480000'], // Rotifera Proalidae Proales
    ['12480301', '12480300'], // Rotifera Proalidae Proales daphnicola
    ['12480302', '12480300'], // Rotifera Proalidae Proales decipiens
    ['12480303', '12480300'], // Rotifera Proalidae Proales doliaris
    ['12480304', '12480300'], // Rotifera Proalidae Proales fallaciosa
    ['12480305', '12480300'], // Rotifera Proalidae Proales giganthea
    ['12480306', '12480300'], // Rotifera Proalidae Proales globulifera
    ['12480307', '12480300'], // Rotifera Proalidae Proales micropus
    ['12480308', '12480300'], // Rotifera Proalidae Proales minima
    ['12480309', '12480300'], // Rotifera Proalidae Proales parasita
    ['12480311', '12480300'], // Rotifera Proalidae Proales reinhardti
    ['12480312', '12480300'], // Rotifera Proalidae Proales similis
    ['12480313', '12480300'], // Rotifera Proalidae Proales sordida
    ['12480314', '12480300'], // Rotifera Proalidae Proales theodora
    ['12480315', '12480300'], // Rotifera Proalidae Proales wernecki
    ['124A0000', '12000000'], // Rotifera Lindiidae
    ['124A0100', '124A0000'], // Rotifera Lindiidae Lindia
    ['124A0101', '124A0100'], // Rotifera Lindiidae Lindia janickii
    ['124A0102', '124A0100'], // Rotifera Lindiidae Lindia torulosa
    ['124B0000', '12000000'], // Rotifera Notommatidae
    ['124B0100', '124B0000'], // Rotifera Notommatidae Tetrasiphon
    ['124B0101', '124B0100'], // Rotifera Notommatidae Tetrasiphon hydrocora
    ['124B0200', '124B0000'], // Rotifera Notommatidae Enteroplea
    ['124B0201', '124B0200'], // Rotifera Notommatidae Enteroplea lacustris
    ['124B0300', '124B0000'], // Rotifera Notommatidae Scaridium
    ['124B0301', '124B0300'], // Rotifera Notommatidae Scaridium longicaudum
    ['124B0400', '124B0000'], // Rotifera Notommatidae Monommata
    ['124B0401', '124B0400'], // Rotifera Notommatidae Monommata actices
    ['124B0402', '124B0400'], // Rotifera Notommatidae Monommata aequalis
    ['124B0403', '124B0400'], // Rotifera Notommatidae Monommata astia
    ['124B0404', '124B0400'], // Rotifera Notommatidae Monommata grandis
    ['124B0405', '124B0400'], // Rotifera Notommatidae Monommata longiseta
    ['124B0500', '124B0000'], // Rotifera Notommatidae Dorystoma
    ['124B0501', '124B0500'], // Rotifera Notommatidae Dorystoma caudata
    ['124B0600', '124B0000'], // Rotifera Notommatidae Itura
    ['124B0601', '124B0600'], // Rotifera Notommatidae Itura aurita
    ['124B0602', '124B0600'], // Rotifera Notommatidae Itura viridis
    ['124B0700', '124B0000'], // Rotifera Notommatidae Taphrocampa
    ['124B0701', '124B0700'], // Rotifera Notommatidae Taphrocampa annulosa
    ['124B0702', '124B0700'], // Rotifera Notommatidae Taphrocampa clavigera
    ['124B0703', '124B0700'], // Rotifera Notommatidae Taphrocampa selenura
    ['124B0800', '124B0000'], // Rotifera Notommatidae Eothinia
    ['124B0801', '124B0800'], // Rotifera Notommatidae Eothinia elongata
    ['124B0900', '124B0000'], // Rotifera Notommatidae Eosphora
    ['124B0901', '124B0900'], // Rotifera Notommatidae Eosphora ehrenbergi
    ['124B0902', '124B0900'], // Rotifera Notommatidae Eosphora najas
    ['124B1000', '124B0000'], // Rotifera Notommatidae Resticula
    ['124B1001', '124B1000'], // Rotifera Notommatidae Resticula melandocus
    ['124B1100', '124B0000'], // Rotifera Notommatidae Notommata
    ['124B1101', '124B1100'], // Rotifera Notommatidae Notommata allantois
    ['124B1102', '124B1100'], // Rotifera Notommatidae Notommata aurita
    ['124B1103', '124B1100'], // Rotifera Notommatidae Notommata brachyota
    ['124B1104', '124B1100'], // Rotifera Notommatidae Notommata cerberus
    ['124B1105', '124B1100'], // Rotifera Notommatidae Notommata collaris
    ['124B1106', '124B1100'], // Rotifera Notommatidae Notommata contorta
    ['124B1107', '124B1100'], // Rotifera Notommatidae Notommata copeus
    ['124B1108', '124B1100'], // Rotifera Notommatidae Notommata cyrtopus
    ['124B1109', '124B1100'], // Rotifera Notommatidae Notommata groenlandica
    ['124B1111', '124B1100'], // Rotifera Notommatidae Notommata pachyura
    ['124B1112', '124B1100'], // Rotifera Notommatidae Notommata pseudocerberus
    ['124B1113', '124B1100'], // Rotifera Notommatidae Notommata saccigera
    ['124B1114', '124B1100'], // Rotifera Notommatidae Notommata silpha
    ['124B1115', '124B1100'], // Rotifera Notommatidae Notommata tripus
    ['124B1200', '124B0000'], // Rotifera Notommatidae Pleurotrocha
    ['124B1201', '124B1200'], // Rotifera Notommatidae Pleurotrocha constricta
    ['124B1202', '124B1200'], // Rotifera Notommatidae Pleurotrocha petromycon
    ['124B1300', '124B0000'], // Rotifera Notommatidae Metadiaschiza
    ['124B1301', '124B1300'], // Rotifera Notommatidae Metadiaschiza trigona
    ['124B1400', '124B0000'], // Rotifera Notommatidae Cephalodella
    ['124B1401', '124B1400'], // Rotifera Notommatidae Cephalodella auriculata
    ['124B1402', '124B1400'], // Rotifera Notommatidae Cephalodella biungulata
    ['124B1403', '124B1400'], // Rotifera Notommatidae Cephalodella catellina
    ['124B1404', '124B1400'], // Rotifera Notommatidae Cephalodella crassipes
    ['124B1405', '124B1400'], // Rotifera Notommatidae Cephalodella derbyi
    ['124B1406', '124B1400'], // Rotifera Notommatidae Cephalodella eva
    ['124B1407', '124B1400'], // Rotifera Notommatidae Cephalodella exigua
    ['124B1408', '124B1400'], // Rotifera Notommatidae Cephalodella forficata
    ['124B1409', '124B1400'], // Rotifera Notommatidae Cephalodella forficula
    ['124B1411', '124B1400'], // Rotifera Notommatidae Cephalodella gibba
    ['124B1412', '124B1400'], // Rotifera Notommatidae Cephalodella globata
    ['124B1413', '124B1400'], // Rotifera Notommatidae Cephalodella gracilis
    ['124B1414', '124B1400'], // Rotifera Notommatidae Cephalodella hoodi
    ['124B1415', '124B1400'], // Rotifera Notommatidae Cephalodella megalocephala
    ['124B1416', '124B1400'], // Rotifera Notommatidae Cephalodella obvia
    ['124B1417', '124B1400'], // Rotifera Notommatidae Cephalodella sterea
    ['124B1418', '124B1400'], // Rotifera Notommatidae Cephalodella strigosa
    ['124B1419', '124B1400'], // Rotifera Notommatidae Cephalodella tenuior
    ['124B1421', '124B1400'], // Rotifera Notommatidae Cephalodella tenuiseta
    ['124B1422', '124B1400'], // Rotifera Notommatidae Cephalodella ventripes
    ['124C0000', '12000000'], // Rotifera Trichocercidae
    ['124C0100', '124C0000'], // Rotifera Trichocercidae Trichocerca
    ['124C0110', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella)
    ['124C0111', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) bidens
    ['124C0112', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) birostris
    ['124C0113', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) brachyura
    ['124C0114', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) cavia
    ['124C0115', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) collaris
    ['124C0116', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) dixon-nuttalli
    ['124C0117', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) inermis
    ['124C0118', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) intermedia
    ['124C011A', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) porcellus
    ['124C011B', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) rousseleti
    ['124C011C', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) similis
    ['124C011D', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) sulcata
    ['124C011E', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) tenuior
    ['124C011F', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) tigris
    ['124C011G', '124C0100'], // Rotifera Trichocercidae Trichocerca (Diurella) weberi
    ['124C0140', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca)
    ['124C0141', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca) bicristata
    ['124C0142', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca) capucina
    ['124C0143', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca) cylindrica
    ['124C0144', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca) elongata
    ['124C0145', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca) iernis
    ['124C0146', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca) jenningsi
    ['124C0147', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca) longiseta
    ['124C0148', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca) lophoessa
    ['124C0149', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca) macera
    ['124C014A', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca) marina
    ['124C014B', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca) pusilla
    ['124C014C', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca) rattus
    ['124C014D', '124C0100'], // Rotifera Trichocercidae Trichocerca (Trichocerca) stylata
    ['124C0400', '124C0000'], // Rotifera Trichocercidae Ascomorphella
    ['124C0401', '124C0400'], // Rotifera Trichocercidae Ascomorphella volvocicola
    ['124C0500', '124C0000'], // Rotifera Trichocercidae Elosa
    ['124C0501', '124C0500'], // Rotifera Trichocercidae Elosa woralli
    ['124D0000', '12000000'], // Rotifera Gastropodidae
    ['124D0100', '124D0000'], // Rotifera Gastropodidae Gastropus
    ['124D0101', '124D0100'], // Rotifera Gastropodidae Gastropus hyptopus
    ['124D0102', '124D0100'], // Rotifera Gastropodidae Gastropus minor
    ['124D0103', '124D0100'], // Rotifera Gastropodidae Gastropus stylifer
    ['124D0300', '124D0000'], // Rotifera Gastropodidae Ascomorpha
    ['124D0301', '124D0300'], // Rotifera Gastropodidae Ascomorpha ecaudis
    ['124D0302', '124D0300'], // Rotifera Gastropodidae Ascomorpha ovalis
    ['124D0303', '124D0300'], // Rotifera Gastropodidae Ascomorpha saltans
    ['124F0000', '12000000'], // Rotifera Synchaetidae
    ['124F0100', '124F0000'], // Rotifera Synchaetidae Synchaeta
    ['124F0101', '124F0100'], // Rotifera Synchaetidae Synchaeta baltica
    ['124F0102', '124F0100'], // Rotifera Synchaetidae Synchaeta bicornis
    ['124F0103', '124F0100'], // Rotifera Synchaetidae Synchaeta calva
    ['124F0104', '124F0100'], // Rotifera Synchaetidae Synchaeta cecilia
    ['124F0105', '124F0100'], // Rotifera Synchaetidae Synchaeta grandis
    ['124F0106', '124F0100'], // Rotifera Synchaetidae Synchaeta grimpei
    ['124F0107', '124F0100'], // Rotifera Synchaetidae Synchaeta gyrina
    ['124F0108', '124F0100'], // Rotifera Synchaetidae Synchaeta litoralis
    ['124F0109', '124F0100'], // Rotifera Synchaetidae Synchaeta longipes
    ['124F0111', '124F0100'], // Rotifera Synchaetidae Synchaeta oblonga
    ['124F0112', '124F0100'], // Rotifera Synchaetidae Synchaeta pectinata
    ['124F0113', '124F0100'], // Rotifera Synchaetidae Synchaeta stylata
    ['124F0114', '124F0100'], // Rotifera Synchaetidae Synchaeta tavina
    ['124F0115', '124F0100'], // Rotifera Synchaetidae Synchaeta tremula
    ['124F0116', '124F0100'], // Rotifera Synchaetidae Synchaeta triophthalma
    ['124F0117', '124F0100'], // Rotifera Synchaetidae Synchaeta vorax
    ['124F0200', '124F0000'], // Rotifera Synchaetidae Polyarthra
    ['124F0201', '124F0200'], // Rotifera Synchaetidae Polyarthra dolichoptera
    ['124F0202', '124F0200'], // Rotifera Synchaetidae Polyarthra euryptera
    ['124F0203', '124F0200'], // Rotifera Synchaetidae Polyarthra major
    ['124F0204', '124F0200'], // Rotifera Synchaetidae Polyarthra minor
    ['124F0205', '124F0200'], // Rotifera Synchaetidae Polyarthra remata
    ['124F0206', '124F0200'], // Rotifera Synchaetidae Polyarthra vulgaris
    ['124F0300', '124F0000'], // Rotifera Synchaetidae Ploesoma
    ['124F0310', '124F0300'], // Rotifera Synchaetidae Ploesoma (Bipalpus)
    ['124F0311', '124F0300'], // Rotifera Synchaetidae Ploesoma (Bipalpus) hudsoni
    ['124F0320', '124F0300'], // Rotifera Synchaetidae Ploesoma (Ploesoma)
    ['124F0321', '124F0300'], // Rotifera Synchaetidae Ploesoma (Ploesoma) lenticulare
    ['124F0322', '124F0300'], // Rotifera Synchaetidae Ploesoma (Ploesoma) triacanthum
    ['124F0323', '124F0300'], // Rotifera Synchaetidae Ploesoma (Ploesoma) truncatum
    ['124G0000', '12000000'], // Rotifera Asplanchnidae
    ['124G0100', '124G0000'], // Rotifera Asplanchnidae Harringia
    ['124G0101', '124G0100'], // Rotifera Asplanchnidae Harringia eupoda
    ['124G0200', '124G0000'], // Rotifera Asplanchnidae Asplanchnopus
    ['124G0201', '124G0200'], // Rotifera Asplanchnidae Asplanchnopus multiceps
    ['124G0300', '124G0000'], // Rotifera Asplanchnidae Asplanchna
    ['124G0310', '124G0300'], // Rotifera Asplanchnidae Asplanchna (Asplanchna)
    ['124G0311', '124G0300'], // Rotifera Asplanchnidae Asplanchna (Asplanchna) herricki
    ['124G0312', '124G0300'], // Rotifera Asplanchnidae Asplanchna (Asplanchna) priodonta
    ['124G0320', '124G0300'], // Rotifera Asplanchnidae Asplanchna (Asplanchnella)
    ['124G0321', '124G0300'], // Rotifera Asplanchnidae Asplanchna (Asplanchnella) brightwelli
    ['124G0322', '124G0300'], // Rotifera Asplanchnidae Asplanchna (Asplanchnella) girodi
    ['124G0323', '124G0300'], // Rotifera Asplanchnidae Asplanchna (Asplanchnella) intermedia
    ['124G0324', '124G0300'], // Rotifera Asplanchnidae Asplanchna (Asplanchnella) sieboldi
    ['124H0000', '12000000'], // Rotifera Dicranophoridae
    ['124H0100', '124H0000'], // Rotifera Dicranophoridae Dicranophorus
    ['124H0101', '124H0100'], // Rotifera Dicranophoridae Dicranophorus aquilus
    ['124H0102', '124H0100'], // Rotifera Dicranophoridae Dicranophorus aspondus
    ['124H0103', '124H0100'], // Rotifera Dicranophoridae Dicranophorus caudatus
    ['124H0104', '124H0100'], // Rotifera Dicranophoridae Dicranophorus forcipatus
    ['124H0105', '124H0100'], // Rotifera Dicranophoridae Dicranophorus grandis
    ['124H0106', '124H0100'], // Rotifera Dicranophoridae Dicranophorus hercules
    ['124H0107', '124H0100'], // Rotifera Dicranophoridae Dicranophorus lutkeni
    ['124H0108', '124H0100'], // Rotifera Dicranophoridae Dicranophorus permollis
    ['124H0109', '124H0100'], // Rotifera Dicranophoridae Dicranophorus rosa
    ['124H0111', '124H0100'], // Rotifera Dicranophoridae Dicranophorus rostratus
    ['124H0112', '124H0100'], // Rotifera Dicranophoridae Dicranophorus uncinatus
    ['124H0200', '124H0000'], // Rotifera Dicranophoridae Aspelta
    ['124H0201', '124H0200'], // Rotifera Dicranophoridae Aspelta circinator
    ['124H0202', '124H0200'], // Rotifera Dicranophoridae Aspelta clydona
    ['124H0300', '124H0000'], // Rotifera Dicranophoridae Paradicranophorus
    ['124H0301', '124H0300'], // Rotifera Dicranophoridae Paradicranophorus hudsoni
    ['124H0400', '124H0000'], // Rotifera Dicranophoridae Wierzejskiella
    ['124H0401', '124H0400'], // Rotifera Dicranophoridae Wierzejskiella elongata
    ['124H0402', '124H0400'], // Rotifera Dicranophoridae Wierzejskiella ricciae
    ['124H0500', '124H0000'], // Rotifera Dicranophoridae Encentrum
    ['124H0510', '124H0500'], // Rotifera Dicranophoridae Encentrum (Encentrum)
    ['124H0511', '124H0500'], // Rotifera Dicranophoridae Encentrum (Encentrum) felis
    ['124H0512', '124H0500'], // Rotifera Dicranophoridae Encentrum (Encentrum) grande
    ['124H0513', '124H0500'], // Rotifera Dicranophoridae Encentrum (Encentrum) marinum
    ['124H0514', '124H0500'], // Rotifera Dicranophoridae Encentrum (Encentrum) mustela
    ['124H0515', '124H0500'], // Rotifera Dicranophoridae Encentrum (Encentrum) rousseleti
    ['124H0516', '124H0500'], // Rotifera Dicranophoridae Encentrum (Encentrum) voigti
    ['124H0520', '124H0500'], // Rotifera Dicranophoridae Encentrum (Parencentrum)
    ['124H0521', '124H0500'], // Rotifera Dicranophoridae Encentrum (Parencentrum) plicatum
    ['124H0522', '124H0500'], // Rotifera Dicranophoridae Encentrum (Parencentrum) saundersiae
    ['124H0700', '124H0000'], // Rotifera Dicranophoridae Erignatha
    ['124H0701', '124H0700'], // Rotifera Dicranophoridae Erignatha clastopis
    ['124H0800', '124H0000'], // Rotifera Dicranophoridae Albertia
    ['124H0801', '124H0800'], // Rotifera Dicranophoridae Albertia naidis
    ['124J0000', '12000000'], // Rotifera Microcodinidae
    ['124J0100', '124J0000'], // Rotifera Microcodinidae Microcodon
    ['124J0101', '124J0100'], // Rotifera Microcodinidae Microcodon clavus
    ['13000000', undefined], // Acanthocephala
    ['14000000', undefined], // Ectoprocta
    ['14100000', '14000000'], // Ectoprocta Phylactolaemata
    ['14110000', '14000000'], // Ectoprocta Fredericellidae
    ['14110100', '14110000'], // Ectoprocta Fredericellidae Fredericella
    ['14110101', '14110100'], // Ectoprocta Fredericellidae Fredericella sultana
    ['14120000', '14000000'], // Ectoprocta Plumatellidae
    ['14120100', '14120000'], // Ectoprocta Plumatellidae Hyalinella
    ['14120101', '14120100'], // Ectoprocta Plumatellidae Hyalinella punctata
    ['14120200', '14120000'], // Ectoprocta Plumatellidae Plumatella
    ['14120201', '14120200'], // Ectoprocta Plumatellidae Plumatella coralloides
    ['14120202', '14120200'], // Ectoprocta Plumatellidae Plumatella emarginata
    ['14120203', '14120200'], // Ectoprocta Plumatellidae Plumatella fruticosa
    ['14120204', '14120200'], // Ectoprocta Plumatellidae Plumatella fungosa
    ['14120205', '14120200'], // Ectoprocta Plumatellidae Plumatella repens
    ['14130000', '14000000'], // Ectoprocta Lophopodidae
    ['14130100', '14130000'], // Ectoprocta Lophopodidae Lophopus
    ['14130101', '14130100'], // Ectoprocta Lophopodidae Lophopus crystallinus
    ['14140000', '14000000'], // Ectoprocta Cristatellidae
    ['14140100', '14140000'], // Ectoprocta Cristatellidae Cristatella
    ['14140101', '14140100'], // Ectoprocta Cristatellidae Cristatella mucedo
    ['14200000', '14000000'], // Ectoprocta Gymnolaemata
    ['14210000', '14000000'], // Ectoprocta Paludicellidae
    ['14210100', '14210000'], // Ectoprocta Paludicellidae Paludicella
    ['14210101', '14210100'], // Ectoprocta Paludicellidae Paludicella articulata
    ['14220000', '14000000'], // Ectoprocta Noellidae
    ['14220100', '14220000'], // Ectoprocta Noellidae Victorella
    ['14220101', '14220100'], // Ectoprocta Noellidae Victorella pavida
    ['15000000', undefined], // Endoprocta
    ['16000000', undefined], // Gastropoda
    ['16100000', '16000000'], // Gastropoda Prosobranchia
    ['16110000', '16000000'], // Gastropoda Neritidae
    ['16110100', '16110000'], // Gastropoda Neritidae Theodoxus
    ['16110101', '16110100'], // Gastropoda Neritidae Theodoxus fluviatilis
    ['16120000', '16000000'], // Gastropoda Viviparidae
    ['16120100', '16120000'], // Gastropoda Viviparidae Viviparus
    ['16120101', '16120100'], // Gastropoda Viviparidae Viviparus contectus
    ['16120102', '16120100'], // Gastropoda Viviparidae Viviparus viviparus
    ['16130000', '16000000'], // Gastropoda Valvatidae
    ['16130100', '16130000'], // Gastropoda Valvatidae Valvata
    ['16130110', '16130100'], // Gastropoda Valvatidae Valvata (Valvata)
    ['16130111', '16130100'], // Gastropoda Valvatidae Valvata (Valvata) cristata
    ['16130120', '16130100'], // Gastropoda Valvatidae Valvata (Tropidina)
    ['16130121', '16130100'], // Gastropoda Valvatidae Valvata (Tropidina) macrostoma
    ['16130130', '16130100'], // Gastropoda Valvatidae Valvata (Cincinna)
    ['16130131', '16130100'], // Gastropoda Valvatidae Valvata (Cincinna) piscinalis
    ['16140000', '16000000'], // Gastropoda Hydrobiidae
    ['16140100', '16140000'], // Gastropoda Hydrobiidae Hydrobia
    ['16140110', '16140100'], // Gastropoda Hydrobiidae Hydrobia (Hydrobia)
    ['16140111', '16140100'], // Gastropoda Hydrobiidae Hydrobia (Hydrobia) acuta
    ['16140300', '16140000'], // Gastropoda Hydrobiidae Potamopyrgus
    ['16140301', '16140300'], // Gastropoda Hydrobiidae Potamopyrgus antipodarum
    ['16140400', '16140000'], // Gastropoda Hydrobiidae Marstoniopsis
    ['16140401', '16140400'], // Gastropoda Hydrobiidae Marstoniopsis insubrica
    ['16140500', '16140000'], // Gastropoda Hydrobiidae Mercuria
    ['16140501', '16140500'], // Gastropoda Hydrobiidae Mercuria anatina
    ['16140600', '16140000'], // Gastropoda Hydrobiidae Heleobia
    ['16140601', '16140600'], // Gastropoda Hydrobiidae Heleobia stagnorum
    ['16140700', '16140000'], // Gastropoda Hydrobiidae Peringia
    ['16140701', '16140700'], // Gastropoda Hydrobiidae Peringia ulvae
    ['16140800', '16140000'], // Gastropoda Hydrobiidae Ventrosia
    ['16140801', '16140800'], // Gastropoda Hydrobiidae Ventrosia ventrosa
    ['16140Z00', '16140000'], // Gastropoda Hydrobiidae Hydrobia
    ['16160000', '16000000'], // Gastropoda Bithyniidae
    ['16160100', '16160000'], // Gastropoda Bithyniidae Bithynia
    ['16160110', '16160100'], // Gastropoda Bithyniidae Bithynia (Bithynia)
    ['16160111', '16160100'], // Gastropoda Bithyniidae Bithynia (Bithynia) tentaculata
    ['16160120', '16160100'], // Gastropoda Bithyniidae Bithynia (Codiella)
    ['16160121', '16160100'], // Gastropoda Bithyniidae Bithynia (Codiella) leachii
    ['16170000', '16000000'], // Gastropoda Assimineidae
    ['16170100', '16170000'], // Gastropoda Assimineidae Assiminea
    ['16170101', '16170100'], // Gastropoda Assimineidae Assiminea grayana
    ['161Z0000', '16000000'], // Gastropoda Hydrobiidae (including Bithyniidae)
    ['16200000', '16000000'], // Gastropoda Aquatic pulmonata
    ['16210000', '16000000'], // Gastropoda Physidae
    ['16210100', '16210000'], // Gastropoda Physidae Aplexa
    ['16210101', '16210100'], // Gastropoda Physidae Aplexa hypnorum
    ['16210200', '16210000'], // Gastropoda Physidae Physa
    ['16210202', '16210200'], // Gastropoda Physidae Physa fontinalis
    ['16210300', '16210000'], // Gastropoda Physidae Physella
    ['16210310', '16210300'], // Gastropoda Physidae Physella (Physella)
    ['16210311', '16210300'], // Gastropoda Physidae Physella (Physella) gyrina
    ['16210320', '16210300'], // Gastropoda Physidae Physella (Costatella)
    ['16210321', '16210300'], // Gastropoda Physidae Physella (Costatella) acuta
    ['16210Z00', '16210000'], // Gastropoda Physidae Physa
    ['16220000', '16000000'], // Gastropoda Lymnaeidae
    ['16220100', '16220000'], // Gastropoda Lymnaeidae Lymnaea
    ['16220105', '16220100'], // Gastropoda Lymnaeidae Lymnaea stagnalis
    ['16220200', '16220000'], // Gastropoda Lymnaeidae Myxas
    ['16220201', '16220200'], // Gastropoda Lymnaeidae Myxas glutinosa
    ['16220300', '16220000'], // Gastropoda Lymnaeidae Galba
    ['16220301', '16220300'], // Gastropoda Lymnaeidae Galba truncatula
    ['16220400', '16220000'], // Gastropoda Lymnaeidae Stagnicola
    ['16220401', '16220400'], // Gastropoda Lymnaeidae Stagnicola palustris
    ['16220402', '16220400'], // Gastropoda Lymnaeidae Stagnicola fuscus
    ['16220403', '16220400'], // Gastropoda Lymnaeidae Stagnicola catascopium
    ['16220500', '16220000'], // Gastropoda Lymnaeidae Omphiscola
    ['16220501', '16220500'], // Gastropoda Lymnaeidae Omphiscola glabra
    ['16220600', '16220000'], // Gastropoda Lymnaeidae Radix
    ['16220601', '16220600'], // Gastropoda Lymnaeidae Radix auricularia
    ['16220602', '16220600'], // Gastropoda Lymnaeidae Radix balthica
    ['16220Z00', '16220000'], // Gastropoda Lymnaeidae Lymnaea
    ['16230000', '16000000'], // Gastropoda Planorbidae
    ['16230100', '16230000'], // Gastropoda Planorbidae Planorbis
    ['16230110', '16230100'], // Gastropoda Planorbidae Planorbis (Planorbis)
    ['16230111', '16230100'], // Gastropoda Planorbidae Planorbis (Planorbis) carinatus
    ['16230112', '16230100'], // Gastropoda Planorbidae Planorbis (Planorbis) planorbis
    ['16230200', '16230000'], // Gastropoda Planorbidae Anisus
    ['16230210', '16230200'], // Gastropoda Planorbidae Anisus (Anisus)
    ['16230211', '16230200'], // Gastropoda Planorbidae Anisus (Anisus) leucostoma
    ['16230212', '16230200'], // Gastropoda Planorbidae Anisus (Anisus) spirorbis
    ['16230220', '16230200'], // Gastropoda Planorbidae Anisus (Disculifer)
    ['16230221', '16230200'], // Gastropoda Planorbidae Anisus (Disculifer) vortex
    ['16230222', '16230200'], // Gastropoda Planorbidae Anisus (Disculifer) vorticulus
    ['16230300', '16230000'], // Gastropoda Planorbidae Bathyomphalus
    ['16230301', '16230300'], // Gastropoda Planorbidae Bathyomphalus contortus
    ['16230400', '16230000'], // Gastropoda Planorbidae Gyraulus
    ['16230410', '16230400'], // Gastropoda Planorbidae Gyraulus (Gyraulus)
    ['16230411', '16230400'], // Gastropoda Planorbidae Gyraulus (Gyraulus) acronicus
    ['16230412', '16230400'], // Gastropoda Planorbidae Gyraulus (Gyraulus) albus
    ['16230420', '16230400'], // Gastropoda Planorbidae Gyraulus (Torquis)
    ['16230421', '16230400'], // Gastropoda Planorbidae Gyraulus (Torquis) laevis
    ['16230430', '16230400'], // Gastropoda Planorbidae Gyraulus (Armiger)
    ['16230431', '16230400'], // Gastropoda Planorbidae Gyraulus (Armiger) crista
    ['16230600', '16230000'], // Gastropoda Planorbidae Hippeutis
    ['16230601', '16230600'], // Gastropoda Planorbidae Hippeutis complanatus
    ['16230700', '16230000'], // Gastropoda Planorbidae Segmentina
    ['16230701', '16230700'], // Gastropoda Planorbidae Segmentina nitida
    ['16230800', '16230000'], // Gastropoda Planorbidae Planorbarius
    ['16230801', '16230800'], // Gastropoda Planorbidae Planorbarius corneus
    ['16230900', '16230000'], // Gastropoda Planorbidae Menetus
    ['16230910', '16230900'], // Gastropoda Planorbidae Menetus (Dilatata)
    ['16230911', '16230900'], // Gastropoda Planorbidae Menetus (Dilatata) dilatatus
    ['16230Z00', '16230000'], // Gastropoda Planorbidae Planorbis
    ['16231100', '16230000'], // Gastropoda Planorbidae Ancylus
    ['16231101', '16231100'], // Gastropoda Planorbidae Ancylus fluviatilis
    ['16231200', '16230000'], // Gastropoda Planorbidae Ferrissia
    ['16231210', '16231200'], // Gastropoda Planorbidae Ferrissia (Pettancylus)
    ['16231211', '16231200'], // Gastropoda Planorbidae Ferrissia (Pettancylus) clessiniana
    ['16250000', '16000000'], // Gastropoda Acroloxidae
    ['16250100', '16250000'], // Gastropoda Acroloxidae Acroloxus
    ['16250101', '16250100'], // Gastropoda Acroloxidae Acroloxus lacustris
    ['162X0000', '16000000'], // Gastropoda Planorbidae (excluding Ancylus group)
    ['162Y0000', '16000000'], // Gastropoda Ancylus group
    ['162Z0000', '16000000'], // Gastropoda Ancylus group (including Acroloxidae)
    ['16300000', '16000000'], // Gastropoda Semi-aquatic pulmonata
    ['16310000', '16000000'], // Gastropoda Ellobiidae
    ['16310200', '16310000'], // Gastropoda Ellobiidae Ovatella
    ['16310201', '16310200'], // Gastropoda Ellobiidae Ovatella myosotis
    ['16310300', '16310000'], // Gastropoda Ellobiidae Leucophytia
    ['16310301', '16310300'], // Gastropoda Ellobiidae Leucophytia bidentata
    ['16320000', '16000000'], // Gastropoda Succineidae
    ['16320200', '16320000'], // Gastropoda Succineidae Succinea
    ['16320201', '16320200'], // Gastropoda Succineidae Succinea putris
    ['16320300', '16320000'], // Gastropoda Succineidae Oxyloma
    ['16320310', '16320300'], // Gastropoda Succineidae Oxyloma (Oxyloma)
    ['16320311', '16320300'], // Gastropoda Succineidae Oxyloma (Oxyloma) pfeifferi
    ['16320312', '16320300'], // Gastropoda Succineidae Oxyloma (Oxyloma) sarsii
    ['16320400', '16320000'], // Gastropoda Succineidae Quickella
    ['16320401', '16320400'], // Gastropoda Succineidae Quickella arenaria
    ['16320500', '16320000'], // Gastropoda Succineidae Succinella
    ['16320501', '16320500'], // Gastropoda Succineidae Succinella oblonga
    ['16330000', '16000000'], // Gastropoda Vertiginidae
    ['16330100', '16330000'], // Gastropoda Vertiginidae Columella
    ['16330101', '16330100'], // Gastropoda Vertiginidae Columella edentula
    ['16330200', '16330000'], // Gastropoda Vertiginidae Vertigo
    ['16330210', '16330200'], // Gastropoda Vertiginidae Vertigo (Vertilla)
    ['16330211', '16330200'], // Gastropoda Vertiginidae Vertigo (Vertilla) angustior
    ['16330220', '16330200'], // Gastropoda Vertiginidae Vertigo (Vertigo)
    ['16330221', '16330200'], // Gastropoda Vertiginidae Vertigo (Vertigo) antivertigo
    ['16330222', '16330200'], // Gastropoda Vertiginidae Vertigo (Vertigo) geyeri
    ['16330223', '16330200'], // Gastropoda Vertiginidae Vertigo (Vertigo) lilljeborgi
    ['16330224', '16330200'], // Gastropoda Vertiginidae Vertigo (Vertigo) moulinsiana
    ['16330225', '16330200'], // Gastropoda Vertiginidae Vertigo (Vertigo) pygmaea
    ['16330226', '16330200'], // Gastropoda Vertiginidae Vertigo (Vertigo) substriata
    ['16330227', '16330200'], // Gastropoda Vertiginidae Vertigo (Vertigo) genesii
    ['16340000', '16000000'], // Gastropoda Pupillidae
    ['16340100', '16340000'], // Gastropoda Pupillidae Leiostyla
    ['16340101', '16340100'], // Gastropoda Pupillidae Leiostyla anglica
    ['16350000', '16000000'], // Gastropoda Zonitidae
    ['16350100', '16350000'], // Gastropoda Zonitidae Zonitoides
    ['16350110', '16350100'], // Gastropoda Zonitidae Zonitoides (Zonitoides)
    ['16350111', '16350100'], // Gastropoda Zonitidae Zonitoides (Zonitoides) nitidus
    ['16360000', '16000000'], // Gastropoda Euconulidae
    ['16360100', '16360000'], // Gastropoda Euconulidae Euconulus
    ['16360101', '16360100'], // Gastropoda Euconulidae Euconulus fulvus
    ['16370000', '16000000'], // Gastropoda Clausiliidae
    ['16370100', '16370000'], // Gastropoda Clausiliidae Balea
    ['16370110', '16370100'], // Gastropoda Clausiliidae Balea (Alinda)
    ['16370111', '16370100'], // Gastropoda Clausiliidae Balea (Alinda) biplicata
    ['16380000', '16000000'], // Gastropoda Helicidae
    ['16380100', '16380000'], // Gastropoda Helicidae Trichia
    ['16380101', '16380100'], // Gastropoda Helicidae Trichia hispida
    ['16390000', '16000000'], // Gastropoda Carychiidae
    ['16390100', '16390000'], // Gastropoda Carychiidae Carychium
    ['16390101', '16390100'], // Gastropoda Carychiidae Carychium minimum
    ['17000000', undefined], // Bivalvia
    ['17100000', '17000000'], // Bivalvia Heterodonta
    ['17110000', '17000000'], // Bivalvia Margaritiferidae
    ['17110100', '17110000'], // Bivalvia Margaritiferidae Margaritifera
    ['17110101', '17110100'], // Bivalvia Margaritiferidae Margaritifera margaritifera
    ['17120000', '17000000'], // Bivalvia Unionidae
    ['17120100', '17120000'], // Bivalvia Unionidae Unio
    ['17120101', '17120100'], // Bivalvia Unionidae Unio pictorum
    ['17120102', '17120100'], // Bivalvia Unionidae Unio tumidus
    ['17120200', '17120000'], // Bivalvia Unionidae Anodonta
    ['17120201', '17120200'], // Bivalvia Unionidae Anodonta anatina
    ['17120202', '17120200'], // Bivalvia Unionidae Anodonta cygnea
    ['17120203', '17120200'], // Bivalvia Unionidae Anodonta woodiana
    ['17120300', '17120000'], // Bivalvia Unionidae Pseudanodonta
    ['17120301', '17120300'], // Bivalvia Unionidae Pseudanodonta complanata
    ['17120Z00', '17120000'], // Bivalvia Anodontinae
    ['17130000', '17000000'], // Bivalvia Sphaeriidae
    ['17130100', '17130000'], // Bivalvia Sphaeriidae Sphaerium
    ['17130101', '17130100'], // Bivalvia Sphaeriidae Sphaerium corneum
    ['17130103', '17130100'], // Bivalvia Sphaeriidae Sphaerium rivicola
    ['17130104', '17130100'], // Bivalvia Sphaeriidae Sphaerium solidum
    ['17130106', '17130100'], // Bivalvia Sphaeriidae Sphaerium nucleus
    ['17130200', '17130000'], // Bivalvia Sphaeriidae Pisidium
    ['17130201', '17130200'], // Bivalvia Sphaeriidae Pisidium amnicum
    ['17130202', '17130200'], // Bivalvia Sphaeriidae Pisidium casertanum
    ['17130203', '17130200'], // Bivalvia Sphaeriidae Pisidium conventus
    ['17130204', '17130200'], // Bivalvia Sphaeriidae Pisidium henslowanum
    ['17130205', '17130200'], // Bivalvia Sphaeriidae Pisidium hibernicum
    ['17130206', '17130200'], // Bivalvia Sphaeriidae Pisidium lilljeborgii
    ['17130207', '17130200'], // Bivalvia Sphaeriidae Pisidium milium
    ['17130208', '17130200'], // Bivalvia Sphaeriidae Pisidium moitessierianum
    ['17130209', '17130200'], // Bivalvia Sphaeriidae Pisidium nitidum
    ['17130211', '17130200'], // Bivalvia Sphaeriidae Pisidium obtusale
    ['17130212', '17130200'], // Bivalvia Sphaeriidae Pisidium personatum
    ['17130213', '17130200'], // Bivalvia Sphaeriidae Pisidium pseudosphaerium
    ['17130214', '17130200'], // Bivalvia Sphaeriidae Pisidium pulchellum
    ['17130215', '17130200'], // Bivalvia Sphaeriidae Pisidium subtruncatum
    ['17130216', '17130200'], // Bivalvia Sphaeriidae Pisidium supinum
    ['17130217', '17130200'], // Bivalvia Sphaeriidae Pisidium tenuilineatum
    ['17130300', '17130000'], // Bivalvia Sphaeriidae Musculium
    ['17130301', '17130300'], // Bivalvia Sphaeriidae Musculium lacustre
    ['17130302', '17130300'], // Bivalvia Sphaeriidae Musculium transversum
    ['17130Z00', '17130000'], // Bivalvia Sphaeriidae Sphaerium
    ['17140000', '17000000'], // Bivalvia Dreissenidae
    ['17140100', '17140000'], // Bivalvia Dreissenidae Dreissena
    ['17140101', '17140100'], // Bivalvia Dreissenidae Dreissena polymorpha
    ['17140200', '17140000'], // Bivalvia Dreissenidae Mytilopsis
    ['17140201', '17140200'], // Bivalvia Dreissenidae Mytilopsis leucophaeata
    ['17200000', '17000000'], // Bivalvia Pelecypodia
    ['17210000', '17000000'], // Bivalvia Corbiculidae
    ['17210100', '17210000'], // Bivalvia Corbiculidae Corbicula
    ['17210102', '17210100'], // Bivalvia Corbiculidae Corbicula fluminea
    ['18000000', undefined], // Polychaeta
    ['18010000', '18000000'], // Polychaeta
    ['18010100', '18010000'], // Polychaeta Nereis
    ['18010101', '18010100'], // Polychaeta Nereis diversicolor
    ['18020000', '18000000'], // Polychaeta
    ['18020100', '18020000'], // Polychaeta Pygospio
    ['18020101', '18020100'], // Polychaeta Pygospio elegans
    ['18030000', '18000000'], // Polychaeta
    ['18030100', '18030000'], // Polychaeta Heteromastus
    ['18030101', '18030100'], // Polychaeta Heteromastus filiformis
    ['18040000', '18000000'], // Polychaeta
    ['18040100', '18040000'], // Polychaeta Manayunkia
    ['18040101', '18040100'], // Polychaeta Manayunkia aestuarina
    ['19000000', undefined], // Aphanoneura
    ['19100000', '19000000'], // Aphanoneura Aeolosomatida
    ['19110000', '19000000'], // Aphanoneura Aeolosomatidae
    ['19110100', '19110000'], // Aphanoneura Aeolosomatidae Aeolosoma
    ['19110101', '19110100'], // Aphanoneura Aeolosomatidae Aeolosoma beddardi
    ['19110102', '19110100'], // Aphanoneura Aeolosomatidae Aeolosoma headleyi
    ['19110103', '19110100'], // Aphanoneura Aeolosomatidae Aeolosoma hemprichi
    ['19110104', '19110100'], // Aphanoneura Aeolosomatidae Aeolosoma quaternarium
    ['19110105', '19110100'], // Aphanoneura Aeolosomatidae Aeolosoma tenebrarum
    ['19110106', '19110100'], // Aphanoneura Aeolosomatidae Aeolosoma variegatum
    ['20000000', undefined], // Oligochaeta
    ['20100000', '20000000'], // Oligochaeta Lumbriculida
    ['20110000', '20000000'], // Oligochaeta Lumbriculidae
    ['20110100', '20110000'], // Oligochaeta Lumbriculidae Lumbriculus
    ['20110101', '20110100'], // Oligochaeta Lumbriculidae Lumbriculus variegatus
    ['20110200', '20110000'], // Oligochaeta Lumbriculidae Trichodrilus
    ['20110201', '20110200'], // Oligochaeta Lumbriculidae Trichodrilus cantabrigiensis
    ['20110202', '20110200'], // Oligochaeta Lumbriculidae Trichodrilus hrabei
    ['20110203', '20110200'], // Oligochaeta Lumbriculidae Trichodrilus allobrogum
    ['20110300', '20110000'], // Oligochaeta Lumbriculidae Stylodrilus
    ['20110301', '20110300'], // Oligochaeta Lumbriculidae Stylodrilus brachystylus
    ['20110302', '20110300'], // Oligochaeta Lumbriculidae Stylodrilus heringianus
    ['20110304', '20110300'], // Oligochaeta Lumbriculidae Stylodrilus parvus
    ['20110400', '20110000'], // Oligochaeta Lumbriculidae Eclipidrilus
    ['20110401', '20110400'], // Oligochaeta Lumbriculidae Eclipidrilus lacustris
    ['20110500', '20110000'], // Oligochaeta Lumbriculidae Rhynchelmis
    ['20110501', '20110500'], // Oligochaeta Lumbriculidae Rhynchelmis limosella
    ['20110600', '20110000'], // Oligochaeta Lumbriculidae Bythonomus
    ['20110601', '20110600'], // Oligochaeta Lumbriculidae Bythonomus lemani
    ['20110X00', '20110000'], // Oligochaeta Lumbriculidae Bythonomus
    ['20110Z00', '20110000'], // Oligochaeta Lumbriculidae Lumbriculus
    ['20200000', '20000000'], // Oligochaeta Haplotaxina
    ['20210000', '20000000'], // Oligochaeta Haplotaxidae
    ['20210100', '20210000'], // Oligochaeta Haplotaxidae Haplotaxis
    ['20210101', '20210100'], // Oligochaeta Haplotaxidae Haplotaxis gordioides
    ['20300000', '20000000'], // Oligochaeta Tubificina
    ['20310000', '20000000'], // Oligochaeta Enchytraeidae
    ['20310200', '20310000'], // Oligochaeta Enchytraeidae Cernosvitoviella
    ['20310201', '20310200'], // Oligochaeta Enchytraeidae Cernosvitoviella atrata
    ['20310202', '20310200'], // Oligochaeta Enchytraeidae Cernosvitoviella immota
    ['20310400', '20310000'], // Oligochaeta Enchytraeidae Cognettia
    ['20310401', '20310400'], // Oligochaeta Enchytraeidae Cognettia cognetti
    ['20310402', '20310400'], // Oligochaeta Enchytraeidae Cognettia glandulosa
    ['20310403', '20310400'], // Oligochaeta Enchytraeidae Cognettia sphagnetorum
    ['20310500', '20310000'], // Oligochaeta Enchytraeidae Henlea
    ['20310501', '20310500'], // Oligochaeta Enchytraeidae Henlea perpusilla
    ['20310502', '20310500'], // Oligochaeta Enchytraeidae Henlea ventriculosa
    ['20310600', '20310000'], // Oligochaeta Enchytraeidae Buchholzia
    ['20310601', '20310600'], // Oligochaeta Enchytraeidae Buchholzia fallax
    ['20310700', '20310000'], // Oligochaeta Enchytraeidae Enchytraeus
    ['20310701', '20310700'], // Oligochaeta Enchytraeidae Enchytraeus albidus
    ['20310702', '20310700'], // Oligochaeta Enchytraeidae Enchytraeus buchholzi
    ['20310703', '20310700'], // Oligochaeta Enchytraeidae Enchytraeus minutus
    ['20310800', '20310000'], // Oligochaeta Enchytraeidae Lumbricillus
    ['20310801', '20310800'], // Oligochaeta Enchytraeidae Lumbricillus arenarius
    ['20310802', '20310800'], // Oligochaeta Enchytraeidae Lumbricillus lineatus
    ['20310803', '20310800'], // Oligochaeta Enchytraeidae Lumbricillus pagenstecheri
    ['20310804', '20310800'], // Oligochaeta Enchytraeidae Lumbricillus rivalis
    ['20311000', '20310000'], // Oligochaeta Enchytraeidae Marionina
    ['20311001', '20311000'], // Oligochaeta Enchytraeidae Marionina appendiculata
    ['20311002', '20311000'], // Oligochaeta Enchytraeidae Marionina spicula
    ['20311200', '20310000'], // Oligochaeta Enchytraeidae Fridericia
    ['20311201', '20311200'], // Oligochaeta Enchytraeidae Fridericia aurita
    ['20311202', '20311200'], // Oligochaeta Enchytraeidae Fridericia bisetosa
    ['20311203', '20311200'], // Oligochaeta Enchytraeidae Fridericia galba
    ['20311204', '20311200'], // Oligochaeta Enchytraeidae Fridericia hegemon
    ['20311205', '20311200'], // Oligochaeta Enchytraeidae Fridericia leydigi
    ['20311206', '20311200'], // Oligochaeta Enchytraeidae Fridericia perrieri
    ['20311300', '20310000'], // Oligochaeta Enchytraeidae Mesenchytraeus
    ['20311301', '20311300'], // Oligochaeta Enchytraeidae Mesenchytraeus armatus
    ['20311302', '20311300'], // Oligochaeta Enchytraeidae Mesenchytraeus sanguineus
    ['20320000', '20000000'], // Oligochaeta Dorydrilidae
    ['20320100', '20320000'], // Oligochaeta Dorydrilidae Dorydrilus
    ['20320101', '20320100'], // Oligochaeta Dorydrilidae Dorydrilus michaelseni
    ['20330000', '20000000'], // Oligochaeta Naididae
    ['20330100', '20330000'], // Oligochaeta Naididae Chaetogaster
    ['20330101', '20330100'], // Oligochaeta Naididae Chaetogaster cristallinus
    ['20330102', '20330100'], // Oligochaeta Naididae Chaetogaster diaphanus
    ['20330103', '20330100'], // Oligochaeta Naididae Chaetogaster diastrophus
    ['20330104', '20330100'], // Oligochaeta Naididae Chaetogaster langi
    ['20330105', '20330100'], // Oligochaeta Naididae Chaetogaster limnaei
    ['20330200', '20330000'], // Oligochaeta Naididae Paranais
    ['20330201', '20330200'], // Oligochaeta Naididae Paranais frici
    ['20330202', '20330200'], // Oligochaeta Naididae Paranais litoralis
    ['20330203', '20330200'], // Oligochaeta Naididae Paranais simplex
    ['20330300', '20330000'], // Oligochaeta Naididae Homochaeta
    ['20330301', '20330300'], // Oligochaeta Naididae Homochaeta naidina
    ['20330302', '20330300'], // Oligochaeta Naididae Homochaeta setosa
    ['20330400', '20330000'], // Oligochaeta Naididae Specaria
    ['20330401', '20330400'], // Oligochaeta Naididae Specaria josinae
    ['20330500', '20330000'], // Oligochaeta Naididae Uncinais
    ['20330501', '20330500'], // Oligochaeta Naididae Uncinais uncinata
    ['20330600', '20330000'], // Oligochaeta Naididae Ophidonais
    ['20330601', '20330600'], // Oligochaeta Naididae Ophidonais serpentina
    ['20330700', '20330000'], // Oligochaeta Naididae Nais
    ['20330701', '20330700'], // Oligochaeta Naididae Nais alpina
    ['20330702', '20330700'], // Oligochaeta Naididae Nais barbata
    ['20330703', '20330700'], // Oligochaeta Naididae Nais bretscheri
    ['20330704', '20330700'], // Oligochaeta Naididae Nais communis
    ['20330705', '20330700'], // Oligochaeta Naididae Nais elinguis
    ['20330706', '20330700'], // Oligochaeta Naididae Nais pardalis
    ['20330707', '20330700'], // Oligochaeta Naididae Nais pseudobtusa
    ['20330708', '20330700'], // Oligochaeta Naididae Nais simplex
    ['20330709', '20330700'], // Oligochaeta Naididae Nais variabilis
    ['2033070Y', '20330700'], // Oligochaeta Naididae Nais communis group
    ['2033070Z', '20330700'], // Oligochaeta Naididae Nais simplex group
    ['20330711', '20330700'], // Oligochaeta Naididae Nais christinae
    ['20330800', '20330000'], // Oligochaeta Naididae Slavina
    ['20330801', '20330800'], // Oligochaeta Naididae Slavina appendiculata
    ['20330900', '20330000'], // Oligochaeta Naididae Vejdovskyella
    ['20330901', '20330900'], // Oligochaeta Naididae Vejdovskyella comata
    ['20330902', '20330900'], // Oligochaeta Naididae Vejdovskyella intermedia
    ['20331000', '20330000'], // Oligochaeta Naididae Arcteonais
    ['20331001', '20331000'], // Oligochaeta Naididae Arcteonais lomondi
    ['20331100', '20330000'], // Oligochaeta Naididae Ripistes
    ['20331101', '20331100'], // Oligochaeta Naididae Ripistes parasita
    ['20331200', '20330000'], // Oligochaeta Naididae Stylaria
    ['20331201', '20331200'], // Oligochaeta Naididae Stylaria lacustris
    ['20331300', '20330000'], // Oligochaeta Naididae Piguetiella
    ['20331301', '20331300'], // Oligochaeta Naididae Piguetiella blanci
    ['20331400', '20330000'], // Oligochaeta Naididae Dero
    ['20331410', '20331400'], // Oligochaeta Naididae Dero (Dero)
    ['20331411', '20331400'], // Oligochaeta Naididae Dero (Dero) digitata
    ['20331412', '20331400'], // Oligochaeta Naididae Dero (Dero) obtusa
    ['20331420', '20331400'], // Oligochaeta Naididae Dero (Aulophorus)
    ['20331421', '20331400'], // Oligochaeta Naididae Dero (Aulophorus) furcatus
    ['20331500', '20330000'], // Oligochaeta Naididae Pristina
    ['20331510', '20331500'], // Oligochaeta Naididae Pristina (Pristina)
    ['20331511', '20331500'], // Oligochaeta Naididae Pristina (Pristina) aequiseta
    ['20331512', '20331500'], // Oligochaeta Naididae Pristina (Pristina) longiseta
    ['20331520', '20331500'], // Oligochaeta Naididae Pristina (Pristinella)
    ['20331521', '20331500'], // Oligochaeta Naididae Pristina (Pristinella) amphibiotica
    ['20331522', '20331500'], // Oligochaeta Naididae Pristina (Pristinella) jenkinae
    ['20331523', '20331500'], // Oligochaeta Naididae Pristina (Pristinella) menoni
    ['20340000', '20000000'], // Oligochaeta Tubificidae
    ['20340100', '20340000'], // Oligochaeta Tubificidae Tubifex
    ['20340101', '20340100'], // Oligochaeta Tubificidae Tubifex costatus
    ['20340102', '20340100'], // Oligochaeta Tubificidae Tubifex ignotus
    ['20340103', '20340100'], // Oligochaeta Tubificidae Tubifex nerthus
    ['20340104', '20340100'], // Oligochaeta Tubificidae Tubifex newaensis
    ['20340106', '20340100'], // Oligochaeta Tubificidae Tubifex tubifex
    ['20340200', '20340000'], // Oligochaeta Tubificidae Limnodrilus
    ['20340201', '20340200'], // Oligochaeta Tubificidae Limnodrilus cervix
    ['20340202', '20340200'], // Oligochaeta Tubificidae Limnodrilus claparedianus
    ['20340203', '20340200'], // Oligochaeta Tubificidae Limnodrilus hoffmeisteri
    ['20340204', '20340200'], // Oligochaeta Tubificidae Limnodrilus profundicola
    ['20340205', '20340200'], // Oligochaeta Tubificidae Limnodrilus udekemianus
    ['20340300', '20340000'], // Oligochaeta Tubificidae Psammoryctides
    ['20340301', '20340300'], // Oligochaeta Tubificidae Psammoryctides albicola
    ['20340302', '20340300'], // Oligochaeta Tubificidae Psammoryctides barbatus
    ['20340400', '20340000'], // Oligochaeta Tubificidae Potamothrix
    ['20340401', '20340400'], // Oligochaeta Tubificidae Potamothrix bavaricus
    ['20340402', '20340400'], // Oligochaeta Tubificidae Potamothrix hammoniensis
    ['20340403', '20340400'], // Oligochaeta Tubificidae Potamothrix heuscheri
    ['20340404', '20340400'], // Oligochaeta Tubificidae Potamothrix moldaviensis
    ['20340405', '20340400'], // Oligochaeta Tubificidae Potamothrix vejdovskyi
    ['20340500', '20340000'], // Oligochaeta Tubificidae Ilyodrilus
    ['20340501', '20340500'], // Oligochaeta Tubificidae Ilyodrilus templetoni
    ['20340600', '20340000'], // Oligochaeta Tubificidae Spirosperma
    ['20340601', '20340600'], // Oligochaeta Tubificidae Spirosperma ferox
    ['20340700', '20340000'], // Oligochaeta Tubificidae Tubificoides
    ['20340701', '20340700'], // Oligochaeta Tubificidae Tubificoides benedii
    ['20340702', '20340700'], // Oligochaeta Tubificidae Tubificoides pseudogaster
    ['20340800', '20340000'], // Oligochaeta Tubificidae Haber
    ['20340801', '20340800'], // Oligochaeta Tubificidae Haber speciosus
    ['20340900', '20340000'], // Oligochaeta Tubificidae Aulodrilus
    ['20340901', '20340900'], // Oligochaeta Tubificidae Aulodrilus limnobius
    ['20340902', '20340900'], // Oligochaeta Tubificidae Aulodrilus pigueti
    ['20340903', '20340900'], // Oligochaeta Tubificidae Aulodrilus pluriseta
    ['20341000', '20340000'], // Oligochaeta Tubificidae Bothrioneurum
    ['20341001', '20341000'], // Oligochaeta Tubificidae Bothrioneurum vejdovskyanum
    ['20341100', '20340000'], // Oligochaeta Tubificidae Rhyacodrilus
    ['20341101', '20341100'], // Oligochaeta Tubificidae Rhyacodrilus coccineus
    ['20341102', '20341100'], // Oligochaeta Tubificidae Rhyacodrilus falciformis
    ['20341103', '20341100'], // Oligochaeta Tubificidae Rhyacodrilus subterraneus
    ['20341200', '20340000'], // Oligochaeta Tubificidae Monopylephorus
    ['20341201', '20341200'], // Oligochaeta Tubificidae Monopylephorus irroratus
    ['20341202', '20341200'], // Oligochaeta Tubificidae Monopylephorus rubroniveus
    ['20341300', '20340000'], // Oligochaeta Tubificidae Branchiura
    ['20341301', '20341300'], // Oligochaeta Tubificidae Branchiura sowerbyi
    ['20341400', '20340000'], // Oligochaeta Tubificidae Phallodrilus
    ['20341401', '20341400'], // Oligochaeta Tubificidae Phallodrilus monospermathecus
    ['20341500', '20340000'], // Oligochaeta Tubificidae Clitellio
    ['20341501', '20341500'], // Oligochaeta Tubificidae Clitellio arenarius
    ['20341600', '20340000'], // Oligochaeta Tubificidae Thalassodrilus
    ['20341601', '20341600'], // Oligochaeta Tubificidae Thalassodrilus prostatus
    ['20341700', '20340000'], // Oligochaeta Tubificidae Embolocephalus
    ['20341701', '20341700'], // Oligochaeta Tubificidae Embolocephalus velutinus
    ['20350000', '20000000'], // Oligochaeta Phreodrilidae
    ['20360000', '20000000'], // Oligochaeta Propappidae
    ['20360100', '20360000'], // Oligochaeta Propappidae Propappus
    ['20360101', '20360100'], // Oligochaeta Propappidae Propappus volki
    ['203Z0000', '20000000'], // Oligochaeta Enchytraeidae (including Propappidae)
    ['20400000', '20000000'], // Oligochaeta Lumbricina
    ['20410000', '20000000'], // Oligochaeta Glossoscolecidae
    ['20410100', '20410000'], // Oligochaeta Glossoscolecidae Sparganophilus
    ['20410101', '20410100'], // Oligochaeta Glossoscolecidae Sparganophilus tamesis
    ['20420000', '20000000'], // Oligochaeta Lumbricidae
    ['20420100', '20420000'], // Oligochaeta Lumbricidae Allolobophora
    ['20420101', '20420100'], // Oligochaeta Lumbricidae Allolobophora chlorotica
    ['20420102', '20420100'], // Oligochaeta Lumbricidae Allolobophora rosea
    ['20420200', '20420000'], // Oligochaeta Lumbricidae Aporrectodea
    ['20420201', '20420200'], // Oligochaeta Lumbricidae Aporrectodea caliginosa
    ['20420400', '20420000'], // Oligochaeta Lumbricidae Eiseniella
    ['20420401', '20420400'], // Oligochaeta Lumbricidae Eiseniella tetraedra
    ['20420500', '20420000'], // Oligochaeta Lumbricidae Helodrilus
    ['20420501', '20420500'], // Oligochaeta Lumbricidae Helodrilus oculatus
    ['20420600', '20420000'], // Oligochaeta Lumbricidae Lumbricus
    ['20420601', '20420600'], // Oligochaeta Lumbricidae Lumbricus rubellus
    ['20420700', '20420000'], // Oligochaeta Lumbricidae Octolasion
    ['20420701', '20420700'], // Oligochaeta Lumbricidae Octolasion cyaneum
    ['20420702', '20420700'], // Oligochaeta Lumbricidae Octolasion lacteum
    ['20420800', '20420000'], // Oligochaeta Lumbricidae Dendrodrilus
    ['20420801', '20420800'], // Oligochaeta Lumbricidae Dendrodrilus rubidus
    ['21000000', undefined], // Branchiobdellida
    ['21010000', '21000000'], // Branchiobdellida
    ['21010100', '21010000'], // Branchiobdellida Branchiobdella
    ['21010101', '21010100'], // Branchiobdellida Branchiobdella astaci
    ['22000000', undefined], // Hirudinea
    ['22100000', '22000000'], // Hirudinea Rhynchobdellida
    ['22110000', '22000000'], // Hirudinea Piscicolidae
    ['22110100', '22110000'], // Hirudinea Piscicolidae Piscicola
    ['22110101', '22110100'], // Hirudinea Piscicolidae Piscicola geometra
    ['22120000', '22000000'], // Hirudinea Glossiphoniidae
    ['22120200', '22120000'], // Hirudinea Glossiphoniidae Theromyzon
    ['22120201', '22120200'], // Hirudinea Glossiphoniidae Theromyzon tessulatum
    ['22120300', '22120000'], // Hirudinea Glossiphoniidae Hemiclepsis
    ['22120301', '22120300'], // Hirudinea Glossiphoniidae Hemiclepsis marginata
    ['22120400', '22120000'], // Hirudinea Glossiphoniidae Glossiphonia
    ['22120401', '22120400'], // Hirudinea Glossiphoniidae Glossiphonia complanata
    ['22120403', '22120400'], // Hirudinea Glossiphoniidae Glossiphonia verrucata
    ['22120404', '22120400'], // Hirudinea Glossiphoniidae Glossiphonia paludosa
    ['22120700', '22120000'], // Hirudinea Glossiphoniidae Helobdella
    ['22120701', '22120700'], // Hirudinea Glossiphoniidae Helobdella stagnalis
    ['22120800', '22120000'], // Hirudinea Glossiphoniidae Alboglossiphonia
    ['22120801', '22120800'], // Hirudinea Glossiphoniidae Alboglossiphonia heteroclita
    ['22120900', '22120000'], // Hirudinea Glossiphoniidae Placobdella
    ['22120901', '22120900'], // Hirudinea Glossiphoniidae Placobdella costata
    ['22120Z00', '22120000'], // Hirudinea Glossiphoniidae Glossiphonia
    ['22200000', '22000000'], // Hirudinea Arhynchobdellida
    ['22210000', '22000000'], // Hirudinea Hirudinidae
    ['22210200', '22210000'], // Hirudinea Hirudinidae Hirudo
    ['22210201', '22210200'], // Hirudinea Hirudinidae Hirudo medicinalis
    ['22220000', '22000000'], // Hirudinea Haemopidae
    ['22220100', '22220000'], // Hirudinea Haemopidae Haemopis
    ['22220101', '22220100'], // Hirudinea Haemopidae Haemopis sanguisuga
    ['22230000', '22000000'], // Hirudinea Erpobdellidae
    ['22230100', '22230000'], // Hirudinea Erpobdellidae Erpobdella
    ['22230101', '22230100'], // Hirudinea Erpobdellidae Erpobdella octoculata
    ['22230102', '22230100'], // Hirudinea Erpobdellidae Erpobdella testacea
    ['22230200', '22230000'], // Hirudinea Erpobdellidae Dina
    ['22230201', '22230200'], // Hirudinea Erpobdellidae Dina lineata
    ['22230300', '22230000'], // Hirudinea Erpobdellidae Trocheta
    ['22230301', '22230300'], // Hirudinea Erpobdellidae Trocheta bykowskii
    ['22230302', '22230300'], // Hirudinea Erpobdellidae Trocheta subviridis
    ['222X0000', '22000000'], // Hirudinea Hirudinidae (including Haemopidae)
    ['23000000', undefined], // Tardigrada
    ['23100000', '23000000'], // Tardigrada Heterotardigrada
    ['23110000', '23000000'], // Tardigrada Echiniscidae
    ['23110100', '23110000'], // Tardigrada Echiniscidae Echiniscus
    ['23110110', '23110100'], // Tardigrada Echiniscidae Echiniscus (Echiniscus)
    ['23110111', '23110100'], // Tardigrada Echiniscidae Echiniscus (Echiniscus) granulatus
    ['23110112', '23110100'], // Tardigrada Echiniscidae Echiniscus (Echiniscus) mediantus
    ['23110113', '23110100'], // Tardigrada Echiniscidae Echiniscus (Echiniscus) oihonnae
    ['23110114', '23110100'], // Tardigrada Echiniscidae Echiniscus (Echiniscus) quadrispinosus
    ['23110115', '23110100'], // Tardigrada Echiniscidae Echiniscus (Echiniscus) reticulatus
    ['23110116', '23110100'], // Tardigrada Echiniscidae Echiniscus (Echiniscus) spitsbergensis
    ['23110117', '23110100'], // Tardigrada Echiniscidae Echiniscus (Echiniscus) testudo
    ['23110118', '23110100'], // Tardigrada Echiniscidae Echiniscus (Echiniscus) tympanista
    ['23110119', '23110100'], // Tardigrada Echiniscidae Echiniscus (Echiniscus) viridis
    ['2311011A', '23110100'], // Tardigrada Echiniscidae Echiniscus (Echiniscus) wendti
    ['23110130', '23110100'], // Tardigrada Echiniscidae Echiniscus (Hypechiniscus)
    ['23110131', '23110100'], // Tardigrada Echiniscidae Echiniscus (Hypechiniscus) gladiator
    ['23110140', '23110100'], // Tardigrada Echiniscidae Echiniscus (Bryodelphax)
    ['23110141', '23110100'], // Tardigrada Echiniscidae Echiniscus (Bryodelphax) parvulus
    ['23200000', '23000000'], // Tardigrada Eutardigrada
    ['23210000', '23000000'], // Tardigrada Macrobiotidae
    ['23210100', '23210000'], // Tardigrada Macrobiotidae Macrobiotus
    ['23210101', '23210100'], // Tardigrada Macrobiotidae Macrobiotus ambiguus
    ['23210102', '23210100'], // Tardigrada Macrobiotidae Macrobiotus areolatus
    ['23210103', '23210100'], // Tardigrada Macrobiotidae Macrobiotus dispar
    ['23210104', '23210100'], // Tardigrada Macrobiotidae Macrobiotus echinogenitus
    ['23210105', '23210100'], // Tardigrada Macrobiotidae Macrobiotus hastatus
    ['23210106', '23210100'], // Tardigrada Macrobiotidae Macrobiotus hufelandii
    ['23210107', '23210100'], // Tardigrada Macrobiotidae Macrobiotus intermedius
    ['23210108', '23210100'], // Tardigrada Macrobiotidae Macrobiotus macronyx
    ['23210109', '23210100'], // Tardigrada Macrobiotidae Macrobiotus occidentalis
    ['23210111', '23210100'], // Tardigrada Macrobiotidae Macrobiotus pullari
    ['23210112', '23210100'], // Tardigrada Macrobiotidae Macrobiotus richtersi
    ['23210200', '23210000'], // Tardigrada Macrobiotidae Hypsibius
    ['23210210', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Hypsibius)
    ['23210211', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Hypsibius) arcticus
    ['23210212', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Hypsibius) dujardini
    ['23210213', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Hypsibius) oberhaeuseri
    ['23210220', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Calohypsibius)
    ['23210221', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Calohypsibius) ornatus
    ['23210230', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Isohypsibius)
    ['23210231', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Isohypsibius) annulatus
    ['23210232', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Isohypsibius) augusti
    ['23210233', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Isohypsibius) papillifer
    ['23210234', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Isohypsibius) prosostomus
    ['23210235', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Isohypsibius) sattleri
    ['23210236', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Isohypsibius) schaudinni
    ['23210237', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Isohypsibius) tetradactyloides
    ['23210238', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Isohypsibius) tuberculatus
    ['23210250', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Diphascon)
    ['23210251', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Diphascon) angustatus
    ['23210252', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Diphascon) bullatus
    ['23210253', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Diphascon) chilenensis
    ['23210254', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Diphascon) oculatus
    ['23210255', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Diphascon) scoticus
    ['23210256', '23210200'], // Tardigrada Macrobiotidae Hypsibius (Diphascon) spitzbergensis
    ['23220000', '23000000'], // Tardigrada Milnesiidae
    ['23220100', '23220000'], // Tardigrada Milnesiidae Milnesium
    ['23220101', '23220100'], // Tardigrada Milnesiidae Milnesium tardigradum
    ['24000000', undefined], // Hydracarina
    ['24100000', '24000000'], // Hydracarina Hydrovolzioidea
    ['24110000', '24000000'], // Hydracarina Hydrovolziidae
    ['24110100', '24110000'], // Hydracarina Hydrovolziidae Hydrovolzia
    ['24110101', '24110100'], // Hydracarina Hydrovolziidae Hydrovolzia placophora
    ['24200000', '24000000'], // Hydracarina Hydrachnoidea
    ['24210000', '24000000'], // Hydracarina Hydrachnidae
    ['24210100', '24210000'], // Hydracarina Hydrachnidae Hydrachna
    ['24210101', '24210100'], // Hydracarina Hydrachnidae Hydrachna ferox
    ['24210102', '24210100'], // Hydracarina Hydrachnidae Hydrachna placida
    ['24210103', '24210100'], // Hydracarina Hydrachnidae Hydrachna punctata
    ['24210104', '24210100'], // Hydracarina Hydrachnidae Hydrachna sparsa
    ['24210105', '24210100'], // Hydracarina Hydrachnidae Hydrachna spinifera
    ['24210106', '24210100'], // Hydracarina Hydrachnidae Hydrachna varia
    ['24210110', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Hydrachna)
    ['24210111', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Hydrachna) cruenta
    ['24210112', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Hydrachna) skorikowi
    ['24210120', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Diplohydrachna)
    ['24210121', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Diplohydrachna) conjecta
    ['24210122', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Diplohydrachna) distincta
    ['24210123', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Diplohydrachna) georgei
    ['24210124', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Diplohydrachna) globosa
    ['24210130', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna)
    ['24210131', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) bivirgulata
    ['24210132', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) comosa
    ['24210133', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) geographica
    ['24210134', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) halberti
    ['24210135', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) incisa
    ['24210136', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) leegei
    ['24210137', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) levis
    ['24210138', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) processifera
    ['24210139', '24210100'], // Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) williamsoni
    ['24300000', '24000000'], // Hydracarina Eylaoidea
    ['24310000', '24000000'], // Hydracarina Limnocharidae
    ['24310100', '24310000'], // Hydracarina Limnocharidae Limnochares
    ['24310101', '24310100'], // Hydracarina Limnocharidae Limnochares aquatica
    ['24320000', '24000000'], // Hydracarina Eylaidae
    ['24320100', '24320000'], // Hydracarina Eylaidae Eylais
    ['24320101', '24320100'], // Hydracarina Eylaidae Eylais bicornuta
    ['24320102', '24320100'], // Hydracarina Eylaidae Eylais bisinuosa
    ['24320103', '24320100'], // Hydracarina Eylaidae Eylais celtica
    ['24320104', '24320100'], // Hydracarina Eylaidae Eylais coccinea
    ['24320105', '24320100'], // Hydracarina Eylaidae Eylais discreta
    ['24320106', '24320100'], // Hydracarina Eylaidae Eylais dividua
    ['24320107', '24320100'], // Hydracarina Eylaidae Eylais extendens
    ['24320108', '24320100'], // Hydracarina Eylaidae Eylais gigas
    ['24320109', '24320100'], // Hydracarina Eylaidae Eylais hamata
    ['24320111', '24320100'], // Hydracarina Eylaidae Eylais infundibulifera
    ['24320112', '24320100'], // Hydracarina Eylaidae Eylais insularis
    ['24320113', '24320100'], // Hydracarina Eylaidae Eylais koenikei
    ['24320114', '24320100'], // Hydracarina Eylaidae Eylais meridionalis
    ['24320115', '24320100'], // Hydracarina Eylaidae Eylais mulleri
    ['24320116', '24320100'], // Hydracarina Eylaidae Eylais neglecta
    ['24320117', '24320100'], // Hydracarina Eylaidae Eylais relicta
    ['24320118', '24320100'], // Hydracarina Eylaidae Eylais rimosa
    ['24320119', '24320100'], // Hydracarina Eylaidae Eylais symmetrica
    ['24320121', '24320100'], // Hydracarina Eylaidae Eylais tantilla
    ['24320122', '24320100'], // Hydracarina Eylaidae Eylais wilsoni
    ['24330000', '24000000'], // Hydracarina Piersigiidae
    ['24330100', '24330000'], // Hydracarina Piersigiidae Piersigia
    ['24330101', '24330100'], // Hydracarina Piersigiidae Piersigia intermedia
    ['24330102', '24330100'], // Hydracarina Piersigiidae Piersigia koenikei
    ['24400000', '24000000'], // Hydracarina Hydryphantoidea
    ['24410000', '24000000'], // Hydracarina Hydryphantidae
    ['24410100', '24410000'], // Hydracarina Hydryphantidae Hydryphantes
    ['24410110', '24410100'], // Hydracarina Hydryphantidae Hydryphantes (Hydryphantes)
    ['24410111', '24410100'], // Hydracarina Hydryphantidae Hydryphantes (Hydryphantes) bayeri
    ['24410112', '24410100'], // Hydracarina Hydryphantidae Hydryphantes (Hydryphantes) crassipalpis
    ['24410113', '24410100'], // Hydracarina Hydryphantidae Hydryphantes (Hydryphantes) dispar
    ['24410114', '24410100'], // Hydracarina Hydryphantidae Hydryphantes (Hydryphantes) frici
    ['24410115', '24410100'], // Hydracarina Hydryphantidae Hydryphantes (Hydryphantes) placationis
    ['24410116', '24410100'], // Hydracarina Hydryphantidae Hydryphantes (Hydryphantes) ruber
    ['24410120', '24410100'], // Hydracarina Hydryphantidae Hydryphantes (Polyhydryphantes)
    ['24410121', '24410100'], // Hydracarina Hydryphantidae Hydryphantes (Polyhydryphantes) flexuosus
    ['24410200', '24410000'], // Hydracarina Hydryphantidae Trichothyas
    ['24410220', '24410200'], // Hydracarina Hydryphantidae Trichothyas (Lundbladia)
    ['24410221', '24410200'], // Hydracarina Hydryphantidae Trichothyas (Lundbladia) petrophila
    ['24410300', '24410000'], // Hydracarina Hydryphantidae Panisellus
    ['24410301', '24410300'], // Hydracarina Hydryphantidae Panisellus thienemanni
    ['24410400', '24410000'], // Hydracarina Hydryphantidae Vietsia
    ['24410401', '24410400'], // Hydracarina Hydryphantidae Vietsia scutata
    ['24410500', '24410000'], // Hydracarina Hydryphantidae Thyopsis
    ['24410501', '24410500'], // Hydracarina Hydryphantidae Thyopsis cancellata
    ['24410600', '24410000'], // Hydracarina Hydryphantidae Panisus
    ['24410601', '24410600'], // Hydracarina Hydryphantidae Panisus michaeli
    ['24410602', '24410600'], // Hydracarina Hydryphantidae Panisus torrenticolus
    ['24410700', '24410000'], // Hydracarina Hydryphantidae Panisopsis
    ['24410710', '24410700'], // Hydracarina Hydryphantidae Panisopsis (Panisopsis)
    ['24410711', '24410700'], // Hydracarina Hydryphantidae Panisopsis (Panisopsis) vigilans
    ['24410800', '24410000'], // Hydracarina Hydryphantidae Thyasella
    ['24410810', '24410800'], // Hydracarina Hydryphantidae Thyasella (Thyasella)
    ['24410811', '24410800'], // Hydracarina Hydryphantidae Thyasella (Thyasella) mandibularis
    ['24410900', '24410000'], // Hydracarina Hydryphantidae Thyas
    ['24410901', '24410900'], // Hydracarina Hydryphantidae Thyas barbigera
    ['24410902', '24410900'], // Hydracarina Hydryphantidae Thyas dirempta
    ['24410903', '24410900'], // Hydracarina Hydryphantidae Thyas extendens
    ['24410904', '24410900'], // Hydracarina Hydryphantidae Thyas pachystoma
    ['24410905', '24410900'], // Hydracarina Hydryphantidae Thyas rivalis
    ['24411000', '24410000'], // Hydracarina Hydryphantidae Zschokkea
    ['24411001', '24411000'], // Hydracarina Hydryphantidae Zschokkea oblonga
    ['24411100', '24410000'], // Hydracarina Hydryphantidae Parathyas
    ['24411101', '24411100'], // Hydracarina Hydryphantidae Parathyas thoracata
    ['24411200', '24410000'], // Hydracarina Hydryphantidae Euthyas
    ['24411201', '24411200'], // Hydracarina Hydryphantidae Euthyas truncata
    ['24411300', '24410000'], // Hydracarina Hydryphantidae Protzia
    ['24411310', '24411300'], // Hydracarina Hydryphantidae Protzia (Protzia)
    ['24411311', '24411300'], // Hydracarina Hydryphantidae Protzia (Protzia) distincta
    ['24411320', '24411300'], // Hydracarina Hydryphantidae Protzia (Calonyx)
    ['24411321', '24411300'], // Hydracarina Hydryphantidae Protzia (Calonyx) rotunda
    ['24411400', '24410000'], // Hydracarina Hydryphantidae Wandesia
    ['24411410', '24411400'], // Hydracarina Hydryphantidae Wandesia (Wandesia)
    ['24411411', '24411400'], // Hydracarina Hydryphantidae Wandesia (Wandesia) racovitzai
    ['24411500', '24410000'], // Hydracarina Hydryphantidae Pseudohydryphantes
    ['24411501', '24411500'], // Hydracarina Hydryphantidae Pseudohydryphantes parvulus
    ['24420000', '24000000'], // Hydracarina Hydrodromidae
    ['24420100', '24420000'], // Hydracarina Hydrodromidae Hydrodroma
    ['24420101', '24420100'], // Hydracarina Hydrodromidae Hydrodroma despiciens
    ['24500000', '24000000'], // Hydracarina Lebertioidea
    ['24510000', '24000000'], // Hydracarina Sperchontidae
    ['24510100', '24510000'], // Hydracarina Sperchontidae Sperchonopsis
    ['24510101', '24510100'], // Hydracarina Sperchontidae Sperchonopsis verrucosa
    ['24510200', '24510000'], // Hydracarina Sperchontidae Sperchon
    ['24510220', '24510200'], // Hydracarina Sperchontidae Sperchon (Sperchon)
    ['24510221', '24510200'], // Hydracarina Sperchontidae Sperchon (Sperchon) brevirostris
    ['24510222', '24510200'], // Hydracarina Sperchontidae Sperchon (Sperchon) glandulosus
    ['24510223', '24510200'], // Hydracarina Sperchontidae Sperchon (Sperchon) hibernicus
    ['24510224', '24510200'], // Hydracarina Sperchontidae Sperchon (Sperchon) hispidus
    ['24510225', '24510200'], // Hydracarina Sperchontidae Sperchon (Sperchon) longirostris
    ['24510226', '24510200'], // Hydracarina Sperchontidae Sperchon (Sperchon) longissimus
    ['24510227', '24510200'], // Hydracarina Sperchontidae Sperchon (Sperchon) squamosus
    ['24510228', '24510200'], // Hydracarina Sperchontidae Sperchon (Sperchon) thienemanni
    ['2451022Z', '24510200'], // Hydracarina Sperchontidae Sperchon hibernicus group
    ['24510230', '24510200'], // Hydracarina Sperchontidae Sperchon (Hispidosperchon)
    ['24510231', '24510200'], // Hydracarina Sperchontidae Sperchon (Hispidosperchon) clupeifer
    ['24510232', '24510200'], // Hydracarina Sperchontidae Sperchon (Hispidosperchon) denticulatus
    ['24510233', '24510200'], // Hydracarina Sperchontidae Sperchon (Hispidosperchon) ornatus
    ['24510234', '24510200'], // Hydracarina Sperchontidae Sperchon (Hispidosperchon) setiger
    ['24510240', '24510200'], // Hydracarina Sperchontidae Sperchon (Mixosperchon)
    ['24510241', '24510200'], // Hydracarina Sperchontidae Sperchon (Mixosperchon) papillosus
    ['24520000', '24000000'], // Hydracarina Teutoniidae
    ['24520100', '24520000'], // Hydracarina Teutoniidae Teutonia
    ['24520110', '24520100'], // Hydracarina Teutoniidae Teutonia (Teutonia)
    ['24520111', '24520100'], // Hydracarina Teutoniidae Teutonia (Teutonia) cometes
    ['24530000', '24000000'], // Hydracarina Anisitsiellidae
    ['24530100', '24530000'], // Hydracarina Anisitsiellidae Bandakia
    ['24530101', '24530100'], // Hydracarina Anisitsiellidae Bandakia concreta
    ['24530200', '24530000'], // Hydracarina Anisitsiellidae Nilotonia
    ['24530220', '24530200'], // Hydracarina Anisitsiellidae Nilotonia (Dartia)
    ['24530221', '24530200'], // Hydracarina Anisitsiellidae Nilotonia (Dartia) harrisi
    ['24540000', '24000000'], // Hydracarina Lebertiidae
    ['24540100', '24540000'], // Hydracarina Lebertiidae Lebertia
    ['24540110', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia)
    ['24540111', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) africana
    ['24540112', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) areolata
    ['24540113', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) brunnea
    ['24540114', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) castalia
    ['24540115', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) cognata
    ['24540116', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) compacta
    ['24540117', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) dalmatica
    ['24540118', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) fimbriata
    ['24540119', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) flumenia
    ['2454011A', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) hirtipalpis
    ['2454011B', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) laticoxalis
    ['2454011C', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) maglioi
    ['2454011D', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) minuta
    ['2454011E', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) rufipes
    ['2454011F', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) sparsicapillata
    ['2454011G', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) tenuipalpis
    ['2454011H', '24540100'], // Hydracarina Lebertiidae Lebertia (Lebertia) tenuistriata
    ['24540140', '24540100'], // Hydracarina Lebertiidae Lebertia (Pilolebertia)
    ['24540141', '24540100'], // Hydracarina Lebertiidae Lebertia (Pilolebertia) crassipalpis
    ['24540142', '24540100'], // Hydracarina Lebertiidae Lebertia (Pilolebertia) curvipalpis
    ['24540144', '24540100'], // Hydracarina Lebertiidae Lebertia (Pilolebertia) inaequalis
    ['24540145', '24540100'], // Hydracarina Lebertiidae Lebertia (Pilolebertia) insignis
    ['24540146', '24540100'], // Hydracarina Lebertiidae Lebertia (Pilolebertia) minuticornis
    ['24540148', '24540100'], // Hydracarina Lebertiidae Lebertia (Pilolebertia) plauta
    ['24540149', '24540100'], // Hydracarina Lebertiidae Lebertia (Pilolebertia) porosa
    ['24540160', '24540100'], // Hydracarina Lebertiidae Lebertia (Pseudolebertia)
    ['24540161', '24540100'], // Hydracarina Lebertiidae Lebertia (Pseudolebertia) glabra
    ['24540162', '24540100'], // Hydracarina Lebertiidae Lebertia (Pseudolebertia) mollis
    ['24540163', '24540100'], // Hydracarina Lebertiidae Lebertia (Pseudolebertia) salebrosa
    ['24540170', '24540100'], // Hydracarina Lebertiidae Lebertia (Hexalebertia)
    ['24540171', '24540100'], // Hydracarina Lebertiidae Lebertia (Hexalebertia) dubia
    ['24540172', '24540100'], // Hydracarina Lebertiidae Lebertia (Hexalebertia) novipalpis
    ['24540173', '24540100'], // Hydracarina Lebertiidae Lebertia (Hexalebertia) sefvei
    ['24540174', '24540100'], // Hydracarina Lebertiidae Lebertia (Hexalebertia) stigmatifera
    ['24540180', '24540100'], // Hydracarina Lebertiidae Lebertia (Mixolebertia)
    ['24540181', '24540100'], // Hydracarina Lebertiidae Lebertia (Mixolebertia) densa
    ['24540182', '24540100'], // Hydracarina Lebertiidae Lebertia (Mixolebertia) halberti
    ['24540183', '24540100'], // Hydracarina Lebertiidae Lebertia (Mixolebertia) oudemansi
    ['24550000', '24000000'], // Hydracarina Oxidae
    ['24550100', '24550000'], // Hydracarina Oxidae Frontipoda
    ['24550101', '24550100'], // Hydracarina Oxidae Frontipoda carpenteri
    ['24550102', '24550100'], // Hydracarina Oxidae Frontipoda musculus
    ['24550200', '24550000'], // Hydracarina Oxidae Oxus
    ['24550210', '24550200'], // Hydracarina Oxidae Oxus (Oxus)
    ['24550211', '24550200'], // Hydracarina Oxidae Oxus (Oxus) nodigerus
    ['24550212', '24550200'], // Hydracarina Oxidae Oxus (Oxus) ovalis
    ['24550213', '24550200'], // Hydracarina Oxidae Oxus (Oxus) strigatus
    ['24550220', '24550200'], // Hydracarina Oxidae Oxus (Gnaphiscus)
    ['24550221', '24550200'], // Hydracarina Oxidae Oxus (Gnaphiscus) setosus
    ['24560000', '24000000'], // Hydracarina Torrenticolidae
    ['24560100', '24560000'], // Hydracarina Torrenticolidae Torrenticola
    ['24560110', '24560100'], // Hydracarina Torrenticolidae Torrenticola (Torrenticola)
    ['24560111', '24560100'], // Hydracarina Torrenticolidae Torrenticola (Torrenticola) amplexa
    ['24560112', '24560100'], // Hydracarina Torrenticolidae Torrenticola (Torrenticola) andrei
    ['24560113', '24560100'], // Hydracarina Torrenticolidae Torrenticola (Torrenticola) anomala
    ['24560114', '24560100'], // Hydracarina Torrenticolidae Torrenticola (Torrenticola) brevirostris
    ['24560115', '24560100'], // Hydracarina Torrenticolidae Torrenticola (Torrenticola) elliptica
    ['24560116', '24560100'], // Hydracarina Torrenticolidae Torrenticola (Torrenticola) halberti
    ['24560117', '24560100'], // Hydracarina Torrenticolidae Torrenticola (Torrenticola) maglioi
    ['24560118', '24560100'], // Hydracarina Torrenticolidae Torrenticola (Torrenticola) parvipalpis
    ['24560119', '24560100'], // Hydracarina Torrenticolidae Torrenticola (Torrenticola) robusta
    ['2456011A', '24560100'], // Hydracarina Torrenticolidae Torrenticola (Torrenticola) thori
    ['24560130', '24560100'], // Hydracarina Torrenticolidae Torrenticola (Monatractides)
    ['24560131', '24560100'], // Hydracarina Torrenticolidae Torrenticola (Monatractides) madritensis
    ['24600000', '24000000'], // Hydracarina Hygrobatoidea
    ['24610000', '24000000'], // Hydracarina Limnesiidae
    ['24610100', '24610000'], // Hydracarina Limnesiidae Limnesia
    ['24610110', '24610100'], // Hydracarina Limnesiidae Limnesia (Limnesia)
    ['24610111', '24610100'], // Hydracarina Limnesiidae Limnesia (Limnesia) connata
    ['24610112', '24610100'], // Hydracarina Limnesiidae Limnesia (Limnesia) fulgida
    ['24610113', '24610100'], // Hydracarina Limnesiidae Limnesia (Limnesia) koenikei
    ['24610114', '24610100'], // Hydracarina Limnesiidae Limnesia (Limnesia) maculata
    ['24610115', '24610100'], // Hydracarina Limnesiidae Limnesia (Limnesia) undulata
    ['24620000', '24000000'], // Hydracarina Hygrobatidae
    ['24620100', '24620000'], // Hydracarina Hygrobatidae Hygrobates
    ['24620110', '24620100'], // Hydracarina Hygrobatidae Hygrobates (Hygrobates)
    ['24620111', '24620100'], // Hydracarina Hygrobatidae Hygrobates (Hygrobates) calliger
    ['24620112', '24620100'], // Hydracarina Hygrobatidae Hygrobates (Hygrobates) fluviatilis
    ['24620113', '24620100'], // Hydracarina Hygrobatidae Hygrobates (Hygrobates) foreli
    ['24620114', '24620100'], // Hydracarina Hygrobatidae Hygrobates (Hygrobates) longipalpis
    ['24620115', '24620100'], // Hydracarina Hygrobatidae Hygrobates (Hygrobates) longiporus
    ['24620116', '24620100'], // Hydracarina Hygrobatidae Hygrobates (Hygrobates) nigromaculatus
    ['24620117', '24620100'], // Hydracarina Hygrobatidae Hygrobates (Hygrobates) trigonicus
    ['24620130', '24620100'], // Hydracarina Hygrobatidae Hygrobates (Rivobates)
    ['24620131', '24620100'], // Hydracarina Hygrobatidae Hygrobates (Rivobates) norvegicus
    ['24620200', '24620000'], // Hydracarina Hygrobatidae Atractides
    ['24620210', '24620200'], // Hydracarina Hygrobatidae Atractides (Atractides)
    ['24620211', '24620200'], // Hydracarina Hygrobatidae Atractides (Atractides) denticulatus
    ['24620212', '24620200'], // Hydracarina Hygrobatidae Atractides (Atractides) elongatus
    ['24620213', '24620200'], // Hydracarina Hygrobatidae Atractides (Atractides) gibberipalpis
    ['24620214', '24620200'], // Hydracarina Hygrobatidae Atractides (Atractides) latipalpis
    ['24620215', '24620200'], // Hydracarina Hygrobatidae Atractides (Atractides) longipes
    ['24620216', '24620200'], // Hydracarina Hygrobatidae Atractides (Atractides) magnirostris
    ['24620217', '24620200'], // Hydracarina Hygrobatidae Atractides (Atractides) nodipalpis
    ['24620218', '24620200'], // Hydracarina Hygrobatidae Atractides (Atractides) pachydermis
    ['24620219', '24620200'], // Hydracarina Hygrobatidae Atractides (Atractides) pavesii
    ['2462021A', '24620200'], // Hydracarina Hygrobatidae Atractides (Atractides) spinipes
    ['2462021B', '24620200'], // Hydracarina Hygrobatidae Atractides (Atractides) tener
    ['24620230', '24620200'], // Hydracarina Hygrobatidae Atractides (Octomegapus)
    ['24620231', '24620200'], // Hydracarina Hygrobatidae Atractides (Octomegapus) octoporus
    ['24630000', '24000000'], // Hydracarina Unionicolidae
    ['24630100', '24630000'], // Hydracarina Unionicolidae Unionicola
    ['24630110', '24630100'], // Hydracarina Unionicolidae Unionicola (Unionicola)
    ['24630111', '24630100'], // Hydracarina Unionicolidae Unionicola (Unionicola) crassipes
    ['24630112', '24630100'], // Hydracarina Unionicolidae Unionicola (Unionicola) gracilipalpis
    ['24630113', '24630100'], // Hydracarina Unionicolidae Unionicola (Unionicola) minor
    ['24630120', '24630100'], // Hydracarina Unionicolidae Unionicola (Pentatax)
    ['24630121', '24630100'], // Hydracarina Unionicolidae Unionicola (Pentatax) aculeata
    ['24630122', '24630100'], // Hydracarina Unionicolidae Unionicola (Pentatax) bonzi
    ['24630123', '24630100'], // Hydracarina Unionicolidae Unionicola (Pentatax) figuralis
    ['24630124', '24630100'], // Hydracarina Unionicolidae Unionicola (Pentatax) intermedia
    ['24630130', '24630100'], // Hydracarina Unionicolidae Unionicola (Parasitatax)
    ['24630131', '24630100'], // Hydracarina Unionicolidae Unionicola (Parasitatax) ypsilophora
    ['24630200', '24630000'], // Hydracarina Unionicolidae Neumania
    ['24630210', '24630200'], // Hydracarina Unionicolidae Neumania (Neumania)
    ['24630211', '24630200'], // Hydracarina Unionicolidae Neumania (Neumania) callosa
    ['24630212', '24630200'], // Hydracarina Unionicolidae Neumania (Neumania) deltoides
    ['24630213', '24630200'], // Hydracarina Unionicolidae Neumania (Neumania) limosa
    ['24630214', '24630200'], // Hydracarina Unionicolidae Neumania (Neumania) spinipes
    ['24630215', '24630200'], // Hydracarina Unionicolidae Neumania (Neumania) vernalis
    ['24630220', '24630200'], // Hydracarina Unionicolidae Neumania (Soarella)
    ['24630221', '24630200'], // Hydracarina Unionicolidae Neumania (Soarella) papillosa
    ['24640000', '24000000'], // Hydracarina Feltriidae
    ['24640100', '24640000'], // Hydracarina Feltriidae Feltria
    ['24640110', '24640100'], // Hydracarina Feltriidae Feltria (Feltria)
    ['24640111', '24640100'], // Hydracarina Feltriidae Feltria (Feltria) cornuta
    ['24640112', '24640100'], // Hydracarina Feltriidae Feltria (Feltria) denticulata
    ['24640113', '24640100'], // Hydracarina Feltriidae Feltria (Feltria) minuta
    ['24640114', '24640100'], // Hydracarina Feltriidae Feltria (Feltria) rouxi
    ['24640115', '24640100'], // Hydracarina Feltriidae Feltria (Feltria) subterranea
    ['24640120', '24640100'], // Hydracarina Feltriidae Feltria (Azugofeltria)
    ['24640121', '24640100'], // Hydracarina Feltriidae Feltria (Azugofeltria) motasi
    ['24650000', '24000000'], // Hydracarina Pionidae
    ['24650100', '24650000'], // Hydracarina Pionidae Huitfeldtia
    ['24650101', '24650100'], // Hydracarina Pionidae Huitfeldtia rectipes
    ['24650200', '24650000'], // Hydracarina Pionidae Piona
    ['24650230', '24650200'], // Hydracarina Pionidae Piona (Piona)
    ['24650231', '24650200'], // Hydracarina Pionidae Piona (Piona) affinis
    ['24650232', '24650200'], // Hydracarina Pionidae Piona (Piona) alata
    ['24650233', '24650200'], // Hydracarina Pionidae Piona (Piona) alpicola
    ['24650234', '24650200'], // Hydracarina Pionidae Piona (Piona) ambigua
    ['24650235', '24650200'], // Hydracarina Pionidae Piona (Piona) carnea
    ['24650236', '24650200'], // Hydracarina Pionidae Piona (Piona) coccinea
    ['24650237', '24650200'], // Hydracarina Pionidae Piona (Piona) disparilis
    ['24650238', '24650200'], // Hydracarina Pionidae Piona (Piona) fallax
    ['24650239', '24650200'], // Hydracarina Pionidae Piona (Piona) longipalpis
    ['2465023A', '24650200'], // Hydracarina Pionidae Piona (Piona) nodata
    ['2465023B', '24650200'], // Hydracarina Pionidae Piona (Piona) obturbans
    ['2465023C', '24650200'], // Hydracarina Pionidae Piona (Piona) pusilla
    ['2465023D', '24650200'], // Hydracarina Pionidae Piona (Piona) tuberifera
    ['24650240', '24650200'], // Hydracarina Pionidae Piona (Dispersipiona)
    ['24650241', '24650200'], // Hydracarina Pionidae Piona (Dispersipiona) clavicornis
    ['24650242', '24650200'], // Hydracarina Pionidae Piona (Dispersipiona) conglobata
    ['24650250', '24650200'], // Hydracarina Pionidae Piona (Tetrapiona)
    ['24650251', '24650200'], // Hydracarina Pionidae Piona (Tetrapiona) discrepans
    ['24650252', '24650200'], // Hydracarina Pionidae Piona (Tetrapiona) neumani
    ['24650253', '24650200'], // Hydracarina Pionidae Piona (Tetrapiona) paucipora
    ['24650254', '24650200'], // Hydracarina Pionidae Piona (Tetrapiona) variabilis
    ['24650300', '24650000'], // Hydracarina Pionidae Nautarachna
    ['24650310', '24650300'], // Hydracarina Pionidae Nautarachna (Nautarachna)
    ['24650311', '24650300'], // Hydracarina Pionidae Nautarachna (Nautarachna) crassa
    ['24650320', '24650300'], // Hydracarina Pionidae Nautarachna (Pionella)
    ['24650321', '24650300'], // Hydracarina Pionidae Nautarachna (Pionella) karamani
    ['24650400', '24650000'], // Hydracarina Pionidae Wettina
    ['24650401', '24650400'], // Hydracarina Pionidae Wettina podagrica
    ['24650500', '24650000'], // Hydracarina Pionidae Hydrochoreutes
    ['24650501', '24650500'], // Hydracarina Pionidae Hydrochoreutes krameri
    ['24650502', '24650500'], // Hydracarina Pionidae Hydrochoreutes ungulatus
    ['24650600', '24650000'], // Hydracarina Pionidae Tiphys
    ['24650610', '24650600'], // Hydracarina Pionidae Tiphys (Tiphys)
    ['24650611', '24650600'], // Hydracarina Pionidae Tiphys (Tiphys) bullatus
    ['24650612', '24650600'], // Hydracarina Pionidae Tiphys (Tiphys) lapponicus
    ['24650613', '24650600'], // Hydracarina Pionidae Tiphys (Tiphys) latipes
    ['24650614', '24650600'], // Hydracarina Pionidae Tiphys (Tiphys) ornatus
    ['24650615', '24650600'], // Hydracarina Pionidae Tiphys (Tiphys) scaurus
    ['24650616', '24650600'], // Hydracarina Pionidae Tiphys (Tiphys) torris
    ['24650620', '24650600'], // Hydracarina Pionidae Tiphys (Pionides)
    ['24650621', '24650600'], // Hydracarina Pionidae Tiphys (Pionides) ensifer
    ['24650630', '24650600'], // Hydracarina Pionidae Tiphys (Aceropsis)
    ['24650631', '24650600'], // Hydracarina Pionidae Tiphys (Aceropsis) pistillifer
    ['24650700', '24650000'], // Hydracarina Pionidae Pionopsis
    ['24650710', '24650700'], // Hydracarina Pionidae Pionopsis (Pionopsis)
    ['24650711', '24650700'], // Hydracarina Pionidae Pionopsis (Pionopsis) lutescens
    ['24650800', '24650000'], // Hydracarina Pionidae Pionacercus
    ['24650810', '24650800'], // Hydracarina Pionidae Pionacercus (Pionacercus)
    ['24650811', '24650800'], // Hydracarina Pionidae Pionacercus (Pionacercus) leuckarti
    ['24650812', '24650800'], // Hydracarina Pionidae Pionacercus (Pionacercus) norvegicus
    ['24650813', '24650800'], // Hydracarina Pionidae Pionacercus (Pionacercus) pyriformis
    ['24650814', '24650800'], // Hydracarina Pionidae Pionacercus (Pionacercus) uncinatus
    ['24650820', '24650800'], // Hydracarina Pionidae Pionacercus (Pionacercopsis)
    ['24650821', '24650800'], // Hydracarina Pionidae Pionacercus (Pionacercopsis) vatrax
    ['24650900', '24650000'], // Hydracarina Pionidae Forelia
    ['24650910', '24650900'], // Hydracarina Pionidae Forelia (Forelia)
    ['24650911', '24650900'], // Hydracarina Pionidae Forelia (Forelia) brevipes
    ['24650912', '24650900'], // Hydracarina Pionidae Forelia (Forelia) liliacea
    ['24650913', '24650900'], // Hydracarina Pionidae Forelia (Forelia) variegator
    ['24651000', '24650000'], // Hydracarina Pionidae Pseudofeltria
    ['24651001', '24651000'], // Hydracarina Pionidae Pseudofeltria scourfieldi
    ['24660000', '24000000'], // Hydracarina Aturidae
    ['24660100', '24660000'], // Hydracarina Aturidae Barbaxonella
    ['24660101', '24660100'], // Hydracarina Aturidae Barbaxonella angulata
    ['24660200', '24660000'], // Hydracarina Aturidae Albaxona
    ['24660220', '24660200'], // Hydracarina Aturidae Albaxona (Vietsaxona)
    ['24660221', '24660200'], // Hydracarina Aturidae Albaxona (Vietsaxona) lundbladi
    ['24660300', '24660000'], // Hydracarina Aturidae Axonopsis
    ['24660310', '24660300'], // Hydracarina Aturidae Axonopsis (Axonopsis)
    ['24660311', '24660300'], // Hydracarina Aturidae Axonopsis (Axonopsis) complanata
    ['24660320', '24660300'], // Hydracarina Aturidae Axonopsis (Hexaxonopsis)
    ['24660321', '24660300'], // Hydracarina Aturidae Axonopsis (Hexaxonopsis) romijni
    ['24660400', '24660000'], // Hydracarina Aturidae Brachypoda
    ['24660410', '24660400'], // Hydracarina Aturidae Brachypoda (Brachypoda)
    ['24660411', '24660400'], // Hydracarina Aturidae Brachypoda (Brachypoda) versicolor
    ['24660420', '24660400'], // Hydracarina Aturidae Brachypoda (Ocybrachypoda)
    ['24660421', '24660400'], // Hydracarina Aturidae Brachypoda (Ocybrachypoda) celeripes
    ['24660500', '24660000'], // Hydracarina Aturidae Ljania
    ['24660501', '24660500'], // Hydracarina Aturidae Ljania bipapillata
    ['24660600', '24660000'], // Hydracarina Aturidae Lethaxona
    ['24660610', '24660600'], // Hydracarina Aturidae Lethaxona (Lethaxona)
    ['24660611', '24660600'], // Hydracarina Aturidae Lethaxona (Lethaxona) cavifrons
    ['24660700', '24660000'], // Hydracarina Aturidae Aturus
    ['24660701', '24660700'], // Hydracarina Aturidae Aturus brachypus
    ['24660702', '24660700'], // Hydracarina Aturidae Aturus crinitus
    ['24660703', '24660700'], // Hydracarina Aturidae Aturus intermedius
    ['24660704', '24660700'], // Hydracarina Aturidae Aturus scaber
    ['24660800', '24660000'], // Hydracarina Aturidae Kongsbergia
    ['24660810', '24660800'], // Hydracarina Aturidae Kongsbergia (Kongsbergia)
    ['24660811', '24660800'], // Hydracarina Aturidae Kongsbergia (Kongsbergia) clypeata
    ['24660812', '24660800'], // Hydracarina Aturidae Kongsbergia (Kongsbergia) largaiollii
    ['24660813', '24660800'], // Hydracarina Aturidae Kongsbergia (Kongsbergia) materna
    ['24660814', '24660800'], // Hydracarina Aturidae Kongsbergia (Kongsbergia) vietsi
    ['24660900', '24660000'], // Hydracarina Aturidae Albia
    ['24660901', '24660900'], // Hydracarina Aturidae Albia stationis
    ['24700000', '24000000'], // Hydracarina Arrenuroidea
    ['24710000', '24000000'], // Hydracarina Mideidae
    ['24710100', '24710000'], // Hydracarina Mideidae Midea
    ['24710101', '24710100'], // Hydracarina Mideidae Midea orbiculata
    ['24720000', '24000000'], // Hydracarina Momoniidae
    ['24720100', '24720000'], // Hydracarina Momoniidae Momonia
    ['24720110', '24720100'], // Hydracarina Momoniidae Momonia (Momonia)
    ['24720111', '24720100'], // Hydracarina Momoniidae Momonia (Momonia) falcipalpis
    ['24720200', '24720000'], // Hydracarina Momoniidae Stygomomonia
    ['24720210', '24720200'], // Hydracarina Momoniidae Stygomomonia (Stygomomonia)
    ['24720211', '24720200'], // Hydracarina Momoniidae Stygomomonia (Stygomomonia) latipes
    ['24730000', '24000000'], // Hydracarina Mideopsidae
    ['24730100', '24730000'], // Hydracarina Mideopsidae Mideopsis
    ['24730110', '24730100'], // Hydracarina Mideopsidae Mideopsis (Mideopsis)
    ['24730111', '24730100'], // Hydracarina Mideopsidae Mideopsis (Mideopsis) crassipes
    ['24730112', '24730100'], // Hydracarina Mideopsidae Mideopsis (Mideopsis) orbicularis
    ['24730120', '24730100'], // Hydracarina Mideopsidae Mideopsis (Xystonotus)
    ['24730121', '24730100'], // Hydracarina Mideopsidae Mideopsis (Xystonotus) willmanni
    ['24740000', '24000000'], // Hydracarina Neoacaridae
    ['24740100', '24740000'], // Hydracarina Neoacaridae Neoacarus
    ['24740101', '24740100'], // Hydracarina Neoacaridae Neoacarus hibernicus
    ['24750000', '24000000'], // Hydracarina Athienemanniidae
    ['24750100', '24750000'], // Hydracarina Athienemanniidae Chelomideopsis
    ['24750101', '24750100'], // Hydracarina Athienemanniidae Chelomideopsis annemiae
    ['24750200', '24750000'], // Hydracarina Athienemanniidae Mundamella
    ['24750201', '24750200'], // Hydracarina Athienemanniidae Mundamella germanica
    ['24760000', '24000000'], // Hydracarina Hungarohydracaridae
    ['24760100', '24760000'], // Hydracarina Hungarohydracaridae Hungarohydracarus
    ['24760101', '24760100'], // Hydracarina Hungarohydracaridae Hungarohydracarus subterraneus
    ['24770000', '24000000'], // Hydracarina Arrenuridae
    ['24770100', '24770000'], // Hydracarina Arrenuridae Arrenurus
    ['24770101', '24770100'], // Hydracarina Arrenuridae Arrenurus luteus
    ['24770102', '24770100'], // Hydracarina Arrenuridae Arrenurus mollis
    ['24770103', '24770100'], // Hydracarina Arrenuridae Arrenurus curtus
    ['24770110', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus)
    ['24770111', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) abbreviator
    ['24770112', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) affinis
    ['24770113', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) albator
    ['24770114', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) batillifer
    ['24770115', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) bicuspidator
    ['24770116', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) bruzelii
    ['24770117', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) claviger
    ['24770118', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) compactus
    ['24770119', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) crassicaudatus
    ['2477011A', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) crenatus
    ['2477011B', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) cuspidifer
    ['2477011C', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) fimbriatus
    ['2477011D', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) latus
    ['2477011E', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) leuckarti
    ['2477011F', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) maculator
    ['2477011G', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) neumani
    ['2477011H', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) nobilis
    ['2477011J', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) ornatus
    ['2477011K', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) robustus
    ['2477011L', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) tricuspidator
    ['2477011M', '24770100'], // Hydracarina Arrenuridae Arrenurus (Arrenurus) virens
    ['24770140', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus)
    ['24770141', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) adnatus
    ['24770142', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) buccinator
    ['24770144', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) cylindratus
    ['24770145', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) geminus
    ['24770146', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) globator
    ['24770147', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) stjoerdalensis
    ['24770148', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) mediorotundatus
    ['24770149', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) membranator
    ['2477014A', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) muelleri
    ['2477014B', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) pyriformis
    ['2477014C', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) scourfieldi
    ['2477014D', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) securiformis
    ['2477014E', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) soari
    ['2477014F', '24770100'], // Hydracarina Arrenuridae Arrenurus (Megaluracarus) zachariae
    ['24770160', '24770100'], // Hydracarina Arrenuridae Arrenurus (Truncaturus)
    ['24770161', '24770100'], // Hydracarina Arrenuridae Arrenurus (Truncaturus) fontinalis
    ['24770162', '24770100'], // Hydracarina Arrenuridae Arrenurus (Truncaturus) knauthei
    ['24770163', '24770100'], // Hydracarina Arrenuridae Arrenurus (Truncaturus) nodosus
    ['24770164', '24770100'], // Hydracarina Arrenuridae Arrenurus (Truncaturus) stecki
    ['24770165', '24770100'], // Hydracarina Arrenuridae Arrenurus (Truncaturus) truncatellus
    ['24770170', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus)
    ['24770171', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus) bifidicodulus
    ['24770172', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus) bipapillosus
    ['24770173', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus) biscissus
    ['24770174', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus) britannorum
    ['24770175', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus) forpicatus
    ['24770176', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus) inexploratus
    ['24770177', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus) integrator
    ['24770178', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus) longiusculus
    ['24770179', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus) novus
    ['2477017A', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus) octagonus
    ['2477017B', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus) perforatus
    ['2477017C', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus) sculptus
    ['2477017D', '24770100'], // Hydracarina Arrenuridae Arrenurus (Micruracarus) sinuator
    ['24800000', '24000000'], // Hydracarina Halacaroidea
    ['24810000', '24000000'], // Hydracarina Halacaridae
    ['24810100', '24810000'], // Hydracarina Halacaridae Porohalacarus
    ['24810101', '24810100'], // Hydracarina Halacaridae Porohalacarus alpinus
    ['24810200', '24810000'], // Hydracarina Halacaridae Lobohalacarus
    ['24810201', '24810200'], // Hydracarina Halacaridae Lobohalacarus gallicus
    ['24810202', '24810200'], // Hydracarina Halacaridae Lobohalacarus weberi
    ['24810300', '24810000'], // Hydracarina Halacaridae Limnohalacarus
    ['24810301', '24810300'], // Hydracarina Halacaridae Limnohalacarus wackeri
    ['24810400', '24810000'], // Hydracarina Halacaridae Soldanellonyx
    ['24810401', '24810400'], // Hydracarina Halacaridae Soldanellonyx chappuisi
    ['24810402', '24810400'], // Hydracarina Halacaridae Soldanellonyx monardi
    ['24810403', '24810400'], // Hydracarina Halacaridae Soldanellonyx visurgis
    ['24810500', '24810000'], // Hydracarina Halacaridae Parasoldanellonyx
    ['24810501', '24810500'], // Hydracarina Halacaridae Parasoldanellonyx parviscutatus
    ['24810600', '24810000'], // Hydracarina Halacaridae Porolohmannella
    ['24810601', '24810600'], // Hydracarina Halacaridae Porolohmannella violacea
    ['25000000', undefined], // Oribatei
    ['25100000', '25000000'], // Oribatei Liacaroidea
    ['25110000', '25000000'], // Oribatei Astegistidae
    ['25110100', '25110000'], // Oribatei Astegistidae Astegistes
    ['25110101', '25110100'], // Oribatei Astegistidae Astegistes pilosus
    ['25200000', '25000000'], // Oribatei Hydrozetoidea
    ['25210000', '25000000'], // Oribatei Hydrozetidae
    ['25210100', '25210000'], // Oribatei Hydrozetidae Hydrozetes
    ['25210101', '25210100'], // Oribatei Hydrozetidae Hydrozetes lacustris
    ['25210102', '25210100'], // Oribatei Hydrozetidae Hydrozetes lemnae
    ['25300000', '25000000'], // Oribatei Ceratozetoidea
    ['25310000', '25000000'], // Oribatei Ceratozetidae
    ['25310100', '25310000'], // Oribatei Ceratozetidae Ceratozetes
    ['25310101', '25310100'], // Oribatei Ceratozetidae Ceratozetes furcatus
    ['26000000', undefined], // Araneae
    ['26010000', '26000000'], // Araneae
    ['26010100', '26010000'], // Araneae Argyroneta
    ['26010101', '26010100'], // Araneae Argyroneta aquatica
    ['27000000', undefined], // Anostraca
    ['27010000', '27000000'], // Anostraca
    ['27010100', '27010000'], // Anostraca Artemia
    ['27010101', '27010100'], // Anostraca Artemia salina
    ['27020000', '27000000'], // Anostraca
    ['27020100', '27020000'], // Anostraca Chirocephalus
    ['27020101', '27020100'], // Anostraca Chirocephalus diaphanus
    ['28000000', undefined], // Notostraca
    ['28010000', '28000000'], // Notostraca Triopsidae
    ['28010100', '28010000'], // Notostraca Triopsidae Triops
    ['28010101', '28010100'], // Notostraca Triopsidae Triops cancriformis
    ['29000000', undefined], // Cladocera
    ['29200000', '29000000'], // Cladocera Haplopoda
    ['29210000', '29000000'], // Cladocera Leptodoridae
    ['29210100', '29210000'], // Cladocera Leptodoridae Leptodora
    ['29210101', '29210100'], // Cladocera Leptodoridae Leptodora kindti
    ['29300000', '29000000'], // Cladocera Ctenopoda
    ['29310000', '29000000'], // Cladocera Sididae
    ['29310100', '29310000'], // Cladocera Sididae Diaphanosoma
    ['29310101', '29310100'], // Cladocera Sididae Diaphanosoma brachyurum
    ['29310200', '29310000'], // Cladocera Sididae Latona
    ['29310201', '29310200'], // Cladocera Sididae Latona setifera
    ['29310300', '29310000'], // Cladocera Sididae Sida
    ['29310301', '29310300'], // Cladocera Sididae Sida crystallina
    ['29320000', '29000000'], // Cladocera Holopedidae
    ['29320100', '29320000'], // Cladocera Holopedidae Holopedium
    ['29320101', '29320100'], // Cladocera Holopedidae Holopedium gibberum
    ['29400000', '29000000'], // Cladocera Anomopoda
    ['29410000', '29000000'], // Cladocera Daphniidae
    ['29410100', '29410000'], // Cladocera Daphniidae Ceriodaphnia
    ['29410101', '29410100'], // Cladocera Daphniidae Ceriodaphnia dubia
    ['29410102', '29410100'], // Cladocera Daphniidae Ceriodaphnia laticaudata
    ['29410103', '29410100'], // Cladocera Daphniidae Ceriodaphnia megops
    ['29410104', '29410100'], // Cladocera Daphniidae Ceriodaphnia pulchella
    ['29410105', '29410100'], // Cladocera Daphniidae Ceriodaphnia quadrangula
    ['29410107', '29410100'], // Cladocera Daphniidae Ceriodaphnia reticulata
    ['29410108', '29410100'], // Cladocera Daphniidae Ceriodaphnia setosa
    ['29410200', '29410000'], // Cladocera Daphniidae Daphnia
    ['29410201', '29410200'], // Cladocera Daphniidae Daphnia ambigua
    ['29410202', '29410200'], // Cladocera Daphniidae Daphnia atkinsoni
    ['29410203', '29410200'], // Cladocera Daphniidae Daphnia cucullata
    ['29410204', '29410200'], // Cladocera Daphniidae Daphnia curvirostris
    ['29410205', '29410200'], // Cladocera Daphniidae Daphnia galeata
    ['29410206', '29410200'], // Cladocera Daphniidae Daphnia hyalina
    ['29410207', '29410200'], // Cladocera Daphniidae Daphnia longispina
    ['29410208', '29410200'], // Cladocera Daphniidae Daphnia magna
    ['29410209', '29410200'], // Cladocera Daphniidae Daphnia obtusa
    ['29410210', '29410200'], // Cladocera Daphniidae Daphnia parvula
    ['29410211', '29410200'], // Cladocera Daphniidae Daphnia pulex
    ['29410212', '29410200'], // Cladocera Daphniidae Daphnia rosea
    ['29410300', '29410000'], // Cladocera Daphniidae Megafenestra
    ['29410301', '29410300'], // Cladocera Daphniidae Megafenestra aurita
    ['29410400', '29410000'], // Cladocera Daphniidae Scapholeberis
    ['29410401', '29410400'], // Cladocera Daphniidae Scapholeberis mucronata
    ['29410500', '29410000'], // Cladocera Daphniidae Simocephalus
    ['29410501', '29410500'], // Cladocera Daphniidae Simocephalus exspinosus
    ['29410502', '29410500'], // Cladocera Daphniidae Simocephalus serrulatus
    ['29410503', '29410500'], // Cladocera Daphniidae Simocephalus vetulus
    ['29420000', '29000000'], // Cladocera Moinidae
    ['29420100', '29420000'], // Cladocera Moinidae Moina
    ['29420101', '29420100'], // Cladocera Moinidae Moina brachiata
    ['29420102', '29420100'], // Cladocera Moinidae Moina macrocopa
    ['29420103', '29420100'], // Cladocera Moinidae Moina micrura
    ['29430000', '29000000'], // Cladocera Bosminidae
    ['29430100', '29430000'], // Cladocera Bosminidae Bosmina
    ['29430101', '29430100'], // Cladocera Bosminidae Bosmina coregoni
    ['29430102', '29430100'], // Cladocera Bosminidae Bosmina longirostris
    ['29430104', '29430100'], // Cladocera Bosminidae Bosmina longispina
    ['29440000', '29000000'], // Cladocera Ilyocryptidae
    ['29440100', '29440000'], // Cladocera Ilyocryptidae Ilyocryptus
    ['29440101', '29440100'], // Cladocera Ilyocryptidae Ilyocryptus acutifrons
    ['29440102', '29440100'], // Cladocera Ilyocryptidae Ilyocryptus agilis
    ['29440103', '29440100'], // Cladocera Ilyocryptidae Ilyocryptus sordidus
    ['29450000', '29000000'], // Cladocera Eurycercidae
    ['29450100', '29450000'], // Cladocera Eurycercidae Eurycercus
    ['29450101', '29450100'], // Cladocera Eurycercidae Eurycercus glacialis
    ['29450102', '29450100'], // Cladocera Eurycercidae Eurycercus lamellatus
    ['29460000', '29000000'], // Cladocera Chydoridae
    ['29460100', '29460000'], // Cladocera Chydoridae Acroperus
    ['29460101', '29460100'], // Cladocera Chydoridae Acroperus harpae
    ['29460102', '29460100'], // Cladocera Chydoridae Acroperus angustatus
    ['29460200', '29460000'], // Cladocera Chydoridae Alona
    ['29460201', '29460200'], // Cladocera Chydoridae Alona affinis
    ['29460202', '29460200'], // Cladocera Chydoridae Alona costata
    ['29460203', '29460200'], // Cladocera Chydoridae Alona elegans
    ['29460204', '29460200'], // Cladocera Chydoridae Alona guttata
    ['29460205', '29460200'], // Cladocera Chydoridae Alona intermedia
    ['29460206', '29460200'], // Cladocera Chydoridae Alona karelica
    ['29460207', '29460200'], // Cladocera Chydoridae Alona quadrangularis
    ['29460208', '29460200'], // Cladocera Chydoridae Alona rustica
    ['29460209', '29460200'], // Cladocera Chydoridae Alona weltneri
    ['29460300', '29460000'], // Cladocera Chydoridae Alonella
    ['29460301', '29460300'], // Cladocera Chydoridae Alonella excisa
    ['29460302', '29460300'], // Cladocera Chydoridae Alonella exigua
    ['29460303', '29460300'], // Cladocera Chydoridae Alonella nana
    ['29460400', '29460000'], // Cladocera Chydoridae Alonopsis
    ['29460401', '29460400'], // Cladocera Chydoridae Alonopsis elongata
    ['29460500', '29460000'], // Cladocera Chydoridae Anchistropus
    ['29460501', '29460500'], // Cladocera Chydoridae Anchistropus emarginatus
    ['29460600', '29460000'], // Cladocera Chydoridae Camptocercus
    ['29460601', '29460600'], // Cladocera Chydoridae Camptocercus lilljeborgi
    ['29460602', '29460600'], // Cladocera Chydoridae Camptocercus rectirostris
    ['29460700', '29460000'], // Cladocera Chydoridae Chydorus
    ['29460701', '29460700'], // Cladocera Chydoridae Chydorus gibbus
    ['29460702', '29460700'], // Cladocera Chydoridae Chydorus latus
    ['29460703', '29460700'], // Cladocera Chydoridae Chydorus ovalis
    ['29460704', '29460700'], // Cladocera Chydoridae Chydorus sphaericus
    ['29460800', '29460000'], // Cladocera Chydoridae Coronatella
    ['29460801', '29460800'], // Cladocera Chydoridae Coronatella rectangula
    ['29460900', '29460000'], // Cladocera Chydoridae Disparalona
    ['29460901', '29460900'], // Cladocera Chydoridae Disparalona rostrata
    ['29461000', '29460000'], // Cladocera Chydoridae Dunhevedia
    ['29461001', '29461000'], // Cladocera Chydoridae Dunhevedia crassa
    ['29461100', '29460000'], // Cladocera Chydoridae Graptoleberis
    ['29461101', '29461100'], // Cladocera Chydoridae Graptoleberis testudinaria
    ['29461200', '29460000'], // Cladocera Chydoridae Kurzia
    ['29461201', '29461200'], // Cladocera Chydoridae Kurzia latissima
    ['29461300', '29460000'], // Cladocera Chydoridae Leydigia
    ['29461301', '29461300'], // Cladocera Chydoridae Leydigia acanthocercoides
    ['29461302', '29461300'], // Cladocera Chydoridae Leydigia leydigi
    ['29461400', '29460000'], // Cladocera Chydoridae Monospilus
    ['29461401', '29461400'], // Cladocera Chydoridae Monospilus dispar
    ['29461500', '29460000'], // Cladocera Chydoridae Oxyurella
    ['29461501', '29461500'], // Cladocera Chydoridae Oxyurella tenuicaudis
    ['29461600', '29460000'], // Cladocera Chydoridae Paralona
    ['29461601', '29461600'], // Cladocera Chydoridae Paralona pigra
    ['29461700', '29460000'], // Cladocera Chydoridae Phreatalona
    ['29461701', '29461700'], // Cladocera Chydoridae Phreatalona protzi
    ['29461800', '29460000'], // Cladocera Chydoridae Pleuroxus
    ['29461801', '29461800'], // Cladocera Chydoridae Pleuroxus aduncus
    ['29461802', '29461800'], // Cladocera Chydoridae Pleuroxus denticulatus
    ['29461803', '29461800'], // Cladocera Chydoridae Pleuroxus laevis
    ['29461804', '29461800'], // Cladocera Chydoridae Pleuroxus trigonellus
    ['29461805', '29461800'], // Cladocera Chydoridae Pleuroxus truncatus
    ['29461806', '29461800'], // Cladocera Chydoridae Pleuroxus uncinatus
    ['29461900', '29460000'], // Cladocera Chydoridae Pseudochydorus
    ['29461901', '29461900'], // Cladocera Chydoridae Pseudochydorus globosus
    ['29462000', '29460000'], // Cladocera Chydoridae Rhynchotalona
    ['29462001', '29462000'], // Cladocera Chydoridae Rhynchotalona falcata
    ['29462100', '29460000'], // Cladocera Chydoridae Tretocephala
    ['29462101', '29462100'], // Cladocera Chydoridae Tretocephala ambigua
    ['29470000', '29000000'], // Cladocera Ophryoxidae
    ['29470100', '29470000'], // Cladocera Ophryoxidae Ophryoxus
    ['29470101', '29470100'], // Cladocera Ophryoxidae Ophryoxus gracilis
    ['29480000', '29000000'], // Cladocera Acantholeberidae
    ['29480100', '29480000'], // Cladocera Acantholeberidae Acantholeberis
    ['29480101', '29480100'], // Cladocera Acantholeberidae Acantholeberis curvirostris
    ['29490000', '29000000'], // Cladocera Macrothricidae
    ['29490100', '29490000'], // Cladocera Macrothricidae Drepanothrix
    ['29490101', '29490100'], // Cladocera Macrothricidae Drepanothrix dentata
    ['29490200', '29490000'], // Cladocera Macrothricidae Lathonura
    ['29490201', '29490200'], // Cladocera Macrothricidae Lathonura rectirostris
    ['29490300', '29490000'], // Cladocera Macrothricidae Macrothrix
    ['29490301', '29490300'], // Cladocera Macrothricidae Macrothrix hirsuticornis
    ['29490302', '29490300'], // Cladocera Macrothricidae Macrothrix laticornis
    ['29490303', '29490300'], // Cladocera Macrothricidae Macrothrix rosea
    ['29490400', '29490000'], // Cladocera Macrothricidae Streblocerus
    ['29490401', '29490400'], // Cladocera Macrothricidae Streblocerus serricaudatus
    ['29500000', '29000000'], // Cladocera Onychopoda
    ['29510000', '29000000'], // Cladocera Polyphemidae
    ['29510100', '29510000'], // Cladocera Polyphemidae Polyphemus
    ['29510101', '29510100'], // Cladocera Polyphemidae Polyphemus pediculus
    ['29520000', '29000000'], // Cladocera Cercopagidae
    ['29520100', '29520000'], // Cladocera Cercopagidae Bythotrephes
    ['29520101', '29520100'], // Cladocera Cercopagidae Bythotrephes longimanus
    ['30000000', undefined], // Ostracoda
    ['30100000', '30000000'], // Ostracoda Cytheracea
    ['30110000', '30000000'], // Ostracoda Limnocytheridae
    ['30110100', '30110000'], // Ostracoda Limnocytheridae Limnocythere
    ['30110101', '30110100'], // Ostracoda Limnocytheridae Limnocythere inopinata
    ['30110102', '30110100'], // Ostracoda Limnocytheridae Limnocythere sancti-patricii
    ['30110200', '30110000'], // Ostracoda Limnocytheridae Metacypris
    ['30110201', '30110200'], // Ostracoda Limnocytheridae Metacypris cordata
    ['30120000', '30000000'], // Ostracoda Cytherideidae
    ['30120100', '30120000'], // Ostracoda Cytherideidae Cytherissa
    ['30120101', '30120100'], // Ostracoda Cytherideidae Cytherissa lacustris
    ['30120200', '30120000'], // Ostracoda Cytherideidae Cyprideis
    ['30120201', '30120200'], // Ostracoda Cytherideidae Cyprideis torosa
    ['30200000', '30000000'], // Ostracoda Darwinulacea
    ['30210000', '30000000'], // Ostracoda Darwinulidae
    ['30210100', '30210000'], // Ostracoda Darwinulidae Darwinula
    ['30210101', '30210100'], // Ostracoda Darwinulidae Darwinula stevensoni
    ['30250300', '30250000'], // Ostracoda Darwinulidae Cavernocypris
    ['30250301', '30250300'], // Ostracoda Darwinulidae Cavernocypris subterranea
    ['30300000', '30000000'], // Ostracoda Cypridacea
    ['30310000', '30000000'], // Ostracoda Ilyocyprididae
    ['30310100', '30310000'], // Ostracoda Ilyocyprididae Ilyocypris
    ['30310101', '30310100'], // Ostracoda Ilyocyprididae Ilyocypris biplicata
    ['30310102', '30310100'], // Ostracoda Ilyocyprididae Ilyocypris bradyi
    ['30310103', '30310100'], // Ostracoda Ilyocyprididae Ilyocypris decipiens
    ['30310104', '30310100'], // Ostracoda Ilyocyprididae Ilyocypris getica
    ['30310105', '30310100'], // Ostracoda Ilyocyprididae Ilyocypris gibba
    ['30310106', '30310100'], // Ostracoda Ilyocyprididae Ilyocypris inermis
    ['30310107', '30310100'], // Ostracoda Ilyocyprididae Ilyocypris monstrifica
    ['30320000', '30000000'], // Ostracoda Candonidae
    ['30320100', '30320000'], // Ostracoda Candonidae Candonopsis
    ['30320101', '30320100'], // Ostracoda Candonidae Candonopsis kingsleii
    ['30320200', '30320000'], // Ostracoda Candonidae Paracandona
    ['30320201', '30320200'], // Ostracoda Candonidae Paracandona euplectella
    ['30320300', '30320000'], // Ostracoda Candonidae Pseudocandona
    ['30320301', '30320300'], // Ostracoda Candonidae Pseudocandona elongata
    ['30320400', '30320000'], // Ostracoda Candonidae Candona
    ['30320410', '30320400'], // Ostracoda Candonidae Candona (Cryptocandona)
    ['30320411', '30320400'], // Ostracoda Candonidae Candona (Cryptocandona) reducta
    ['30320412', '30320400'], // Ostracoda Candonidae Candona (Cryptocandona) vavrai
    ['30320420', '30320400'], // Ostracoda Candonidae Candona (Candona)
    ['30320421', '30320400'], // Ostracoda Candonidae Candona (Candona) angulata
    ['30320422', '30320400'], // Ostracoda Candonidae Candona (Candona) candida
    ['30320423', '30320400'], // Ostracoda Candonidae Candona (Candona) neglecta
    ['30320424', '30320400'], // Ostracoda Candonidae Candona (Candona) weltneri
    ['30320430', '30320400'], // Ostracoda Candonidae Candona (Typhlocypris)
    ['30320431', '30320400'], // Ostracoda Candonidae Candona (Typhlocypris) compressa
    ['30320432', '30320400'], // Ostracoda Candonidae Candona (Typhlocypris) insculpta
    ['30320433', '30320400'], // Ostracoda Candonidae Candona (Typhlocypris) lobipes
    ['30320434', '30320400'], // Ostracoda Candonidae Candona (Typhlocypris) marchica
    ['30320435', '30320400'], // Ostracoda Candonidae Candona (Typhlocypris) parallela
    ['30320436', '30320400'], // Ostracoda Candonidae Candona (Typhlocypris) pratensis
    ['30320437', '30320400'], // Ostracoda Candonidae Candona (Typhlocypris) rostrata
    ['30320438', '30320400'], // Ostracoda Candonidae Candona (Typhlocypris) sarsi
    ['30320439', '30320400'], // Ostracoda Candonidae Candona (Typhlocypris) stagnalis
    ['30320450', '30320400'], // Ostracoda Candonidae Candona (Fabaeformiscandona)
    ['30320451', '30320400'], // Ostracoda Candonidae Candona (Fabaeformiscandona) fabaeformis
    ['30320460', '30320400'], // Ostracoda Candonidae Candona (Eucandona)
    ['30320461', '30320400'], // Ostracoda Candonidae Candona (Eucandona) acuminata
    ['30320462', '30320400'], // Ostracoda Candonidae Candona (Eucandona) caudata
    ['30320463', '30320400'], // Ostracoda Candonidae Candona (Eucandona) hyalina
    ['30320464', '30320400'], // Ostracoda Candonidae Candona (Eucandona) protzi
    ['30320500', '30320000'], // Ostracoda Candonidae Cyclocypris
    ['30320501', '30320500'], // Ostracoda Candonidae Cyclocypris globosa
    ['30320502', '30320500'], // Ostracoda Candonidae Cyclocypris laevis
    ['30320503', '30320500'], // Ostracoda Candonidae Cyclocypris ovum
    ['30320504', '30320500'], // Ostracoda Candonidae Cyclocypris serena
    ['30320600', '30320000'], // Ostracoda Candonidae Cypria
    ['30320601', '30320600'], // Ostracoda Candonidae Cypria exsculpta
    ['30320602', '30320600'], // Ostracoda Candonidae Cypria ophthalmica
    ['30330000', '30000000'], // Ostracoda Notodromatidae
    ['30330100', '30330000'], // Ostracoda Notodromatidae Notodromas
    ['30330101', '30330100'], // Ostracoda Notodromatidae Notodromas monacha
    ['30330200', '30330000'], // Ostracoda Notodromatidae Cyprois
    ['30330201', '30330200'], // Ostracoda Notodromatidae Cyprois marginata
    ['30340000', '30000000'], // Ostracoda Cyprididae
    ['30340100', '30340000'], // Ostracoda Cyprididae Scottia
    ['30340101', '30340100'], // Ostracoda Cyprididae Scottia pseudobrowniana
    ['30340200', '30340000'], // Ostracoda Cyprididae Heterocypris
    ['30340201', '30340200'], // Ostracoda Cyprididae Heterocypris incongruens
    ['30340202', '30340200'], // Ostracoda Cyprididae Heterocypris salina
    ['30340300', '30340000'], // Ostracoda Cyprididae Eucypris
    ['30340301', '30340300'], // Ostracoda Cyprididae Eucypris anglica
    ['30340302', '30340300'], // Ostracoda Cyprididae Eucypris clavata
    ['30340303', '30340300'], // Ostracoda Cyprididae Eucypris crassa
    ['30340304', '30340300'], // Ostracoda Cyprididae Eucypris elliptica
    ['30340305', '30340300'], // Ostracoda Cyprididae Eucypris lilljeborgi
    ['30340306', '30340300'], // Ostracoda Cyprididae Eucypris lutaria
    ['30340307', '30340300'], // Ostracoda Cyprididae Eucypris ornata
    ['30340308', '30340300'], // Ostracoda Cyprididae Eucypris pigra
    ['30340309', '30340300'], // Ostracoda Cyprididae Eucypris virens
    ['30340311', '30340300'], // Ostracoda Cyprididae Eucypris zenkeri
    ['30340400', '30340000'], // Ostracoda Cyprididae Bradleycypris
    ['30340401', '30340400'], // Ostracoda Cyprididae Bradleycypris affinis
    ['30340402', '30340400'], // Ostracoda Cyprididae Bradleycypris fuscatus
    ['30340403', '30340400'], // Ostracoda Cyprididae Bradleycypris hirsutus
    ['30340404', '30340400'], // Ostracoda Cyprididae Bradleycypris obliquus
    ['30340500', '30340000'], // Ostracoda Cyprididae Isocypris
    ['30340501', '30340500'], // Ostracoda Cyprididae Isocypris beauchampi
    ['30340600', '30340000'], // Ostracoda Cyprididae Herpetocypris
    ['30340601', '30340600'], // Ostracoda Cyprididae Herpetocypris agilis
    ['30340602', '30340600'], // Ostracoda Cyprididae Herpetocypris brevicaudata
    ['30340603', '30340600'], // Ostracoda Cyprididae Herpetocypris chevreuxi
    ['30340604', '30340600'], // Ostracoda Cyprididae Herpetocypris intermedia
    ['30340605', '30340600'], // Ostracoda Cyprididae Herpetocypris palpiger
    ['30340606', '30340600'], // Ostracoda Cyprididae Herpetocypris reptans
    ['30340700', '30340000'], // Ostracoda Cyprididae Psychrodromus
    ['30340701', '30340700'], // Ostracoda Cyprididae Psychrodromus olivaceus
    ['30340702', '30340700'], // Ostracoda Cyprididae Psychrodromus robertsoni
    ['30340800', '30340000'], // Ostracoda Cyprididae Cypris
    ['30340801', '30340800'], // Ostracoda Cyprididae Cypris bispinosa
    ['30340802', '30340800'], // Ostracoda Cyprididae Cypris pubera
    ['30340900', '30340000'], // Ostracoda Cyprididae Dolerocypris
    ['30340901', '30340900'], // Ostracoda Cyprididae Dolerocypris fasciata
    ['30350000', '30000000'], // Ostracoda Cypridopsidae
    ['30350100', '30350000'], // Ostracoda Cypridopsidae Potamocypris
    ['30350101', '30350100'], // Ostracoda Cypridopsidae Potamocypris dianae
    ['30350102', '30350100'], // Ostracoda Cypridopsidae Potamocypris fallax
    ['30350103', '30350100'], // Ostracoda Cypridopsidae Potamocypris fulva
    ['30350104', '30350100'], // Ostracoda Cypridopsidae Potamocypris pallida
    ['30350105', '30350100'], // Ostracoda Cypridopsidae Potamocypris similis
    ['30350106', '30350100'], // Ostracoda Cypridopsidae Potamocypris variegata
    ['30350107', '30350100'], // Ostracoda Cypridopsidae Potamocypris villosa
    ['30350108', '30350100'], // Ostracoda Cypridopsidae Potamocypris wolfi
    ['30350200', '30350000'], // Ostracoda Cypridopsidae Cypridopsis
    ['30350201', '30350200'], // Ostracoda Cypridopsidae Cypridopsis aculeata
    ['30350202', '30350200'], // Ostracoda Cypridopsidae Cypridopsis hartwigi
    ['30350203', '30350200'], // Ostracoda Cypridopsidae Cypridopsis helvetica
    ['30350204', '30350200'], // Ostracoda Cypridopsidae Cypridopsis newtoni
    ['30350205', '30350200'], // Ostracoda Cypridopsidae Cypridopsis obesa
    ['30350207', '30350200'], // Ostracoda Cypridopsidae Cypridopsis vidua
    ['30350208', '30350200'], // Ostracoda Cypridopsidae Cypridopsis bamberi
    ['31000000', undefined], // Copepoda
    ['31100000', '31000000'], // Copepoda Calanoida
    ['31110000', '31000000'], // Copepoda Centropagidae
    ['31110100', '31110000'], // Copepoda Centropagidae Centropages
    ['31110101', '31110100'], // Copepoda Centropagidae Centropages hamatus
    ['31110200', '31110000'], // Copepoda Centropagidae Limnocalanus
    ['31110201', '31110200'], // Copepoda Centropagidae Limnocalanus macrurus
    ['31120000', '31000000'], // Copepoda Acartiidae
    ['31120100', '31120000'], // Copepoda Acartiidae Acartia
    ['31120101', '31120100'], // Copepoda Acartiidae Acartia bifilosa
    ['31120102', '31120100'], // Copepoda Acartiidae Acartia clausi
    ['31120103', '31120100'], // Copepoda Acartiidae Acartia discaudata
    ['31130000', '31000000'], // Copepoda Diaptomidae
    ['31130100', '31130000'], // Copepoda Diaptomidae Diaptomus
    ['31130101', '31130100'], // Copepoda Diaptomidae Diaptomus castor
    ['31130102', '31130100'], // Copepoda Diaptomidae Diaptomus cyaneus
    ['31130200', '31130000'], // Copepoda Diaptomidae Eudiaptomus
    ['31130201', '31130200'], // Copepoda Diaptomidae Eudiaptomus gracilis
    ['31130202', '31130200'], // Copepoda Diaptomidae Eudiaptomus vulgaris
    ['31130300', '31130000'], // Copepoda Diaptomidae Arctodiaptomus
    ['31130310', '31130300'], // Copepoda Diaptomidae Arctodiaptomus (Arctodiaptomus)
    ['31130311', '31130300'], // Copepoda Diaptomidae Arctodiaptomus (Arctodiaptomus) laticeps
    ['31130312', '31130300'], // Copepoda Diaptomidae Arctodiaptomus (Arctodiaptomus) wierzejskii
    ['31130320', '31130300'], // Copepoda Diaptomidae Arctodiaptomus (Rhabdodiaptomus)
    ['31130321', '31130300'], // Copepoda Diaptomidae Arctodiaptomus (Rhabdodiaptomus) alpinus
    ['31130400', '31130000'], // Copepoda Diaptomidae Mixodiaptomus
    ['31130401', '31130400'], // Copepoda Diaptomidae Mixodiaptomus laciniatus
    ['31140000', '31000000'], // Copepoda Temoridae
    ['31140100', '31140000'], // Copepoda Temoridae Eurytemora
    ['31140101', '31140100'], // Copepoda Temoridae Eurytemora affinis
    ['31140102', '31140100'], // Copepoda Temoridae Eurytemora americana
    ['31140103', '31140100'], // Copepoda Temoridae Eurytemora velox
    ['31200000', '31000000'], // Copepoda Cyclopoida
    ['31210000', '31000000'], // Copepoda Cyclopinidae
    ['31210100', '31210000'], // Copepoda Cyclopinidae Cyclopina
    ['31210101', '31210100'], // Copepoda Cyclopinidae Cyclopina norvegica
    ['31210102', '31210100'], // Copepoda Cyclopinidae Cyclopina esilis
    ['31210200', '31210000'], // Copepoda Cyclopinidae Muceddina
    ['31210201', '31210200'], // Copepoda Cyclopinidae Muceddina multispinosa
    ['31220000', '31000000'], // Copepoda Cyclopidae
    ['31220100', '31220000'], // Copepoda Cyclopidae Halicyclops
    ['31220101', '31220100'], // Copepoda Cyclopidae Halicyclops magniceps
    ['31220102', '31220100'], // Copepoda Cyclopidae Halicyclops neglectus
    ['31220200', '31220000'], // Copepoda Cyclopidae Macrocyclops
    ['31220201', '31220200'], // Copepoda Cyclopidae Macrocyclops albidus
    ['31220202', '31220200'], // Copepoda Cyclopidae Macrocyclops distinctus
    ['31220203', '31220200'], // Copepoda Cyclopidae Macrocyclops fuscus
    ['31220300', '31220000'], // Copepoda Cyclopidae Eucyclops
    ['31220303', '31220300'], // Copepoda Cyclopidae Eucyclops macruroides
    ['31220304', '31220300'], // Copepoda Cyclopidae Eucyclops macrurus
    ['31220305', '31220300'], // Copepoda Cyclopidae Eucyclops serrulatus
    ['31220306', '31220300'], // Copepoda Cyclopidae Eucyclops speratus
    ['31220400', '31220000'], // Copepoda Cyclopidae Tropocyclops
    ['31220401', '31220400'], // Copepoda Cyclopidae Tropocyclops prasinus
    ['31220500', '31220000'], // Copepoda Cyclopidae Paracyclops
    ['31220501', '31220500'], // Copepoda Cyclopidae Paracyclops affinis
    ['31220502', '31220500'], // Copepoda Cyclopidae Paracyclops fimbriatus
    ['31220503', '31220500'], // Copepoda Cyclopidae Paracyclops poppei
    ['31220504', '31220500'], // Copepoda Cyclopidae Paracyclops chiltoni
    ['31220600', '31220000'], // Copepoda Cyclopidae Ectocyclops
    ['31220601', '31220600'], // Copepoda Cyclopidae Ectocyclops phaleratus
    ['31220700', '31220000'], // Copepoda Cyclopidae Cyclops
    ['31220701', '31220700'], // Copepoda Cyclopidae Cyclops abyssorum
    ['31220702', '31220700'], // Copepoda Cyclopidae Cyclops furcifer
    ['31220703', '31220700'], // Copepoda Cyclopidae Cyclops strenuus
    ['31220704', '31220700'], // Copepoda Cyclopidae Cyclops vicinus
    ['31220705', '31220700'], // Copepoda Cyclopidae Cyclops singularis
    ['31220900', '31220000'], // Copepoda Cyclopidae Acanthocyclops
    ['31220922', '31220900'], // Copepoda Cyclopidae Acanthocyclops sensitivus
    ['31220923', '31220900'], // Copepoda Cyclopidae Acanthocyclops venustus
    ['31220924', '31220900'], // Copepoda Cyclopidae Acanthocyclops vernalis
    ['31220925', '31220900'], // Copepoda Cyclopidae Acanthocyclops robustus
    ['31221100', '31220000'], // Copepoda Cyclopidae Graeteriella
    ['31221101', '31221100'], // Copepoda Cyclopidae Graeteriella unisetigera
    ['31221200', '31220000'], // Copepoda Cyclopidae Mesocyclops
    ['31221211', '31221200'], // Copepoda Cyclopidae Mesocyclops leuckarti
    ['31221500', '31220000'], // Copepoda Cyclopidae Microcyclops
    ['31221521', '31221500'], // Copepoda Cyclopidae Microcyclops rubellus
    ['31221522', '31221500'], // Copepoda Cyclopidae Microcyclops varicans
    ['31221700', '31220000'], // Copepoda Cyclopidae Speocyclops
    ['31221701', '31221700'], // Copepoda Cyclopidae Speocyclops demetiensis
    ['31221900', '31220000'], // Copepoda Cyclopidae Megacyclops
    ['31221901', '31221900'], // Copepoda Cyclopidae Megacyclops gigas
    ['31221902', '31221900'], // Copepoda Cyclopidae Megacyclops latipes
    ['31221903', '31221900'], // Copepoda Cyclopidae Megacyclops viridis
    ['31222100', '31220000'], // Copepoda Cyclopidae Diacyclops
    ['31222101', '31222100'], // Copepoda Cyclopidae Diacyclops bicuspidatus
    ['31222102', '31222100'], // Copepoda Cyclopidae Diacyclops bisetosus
    ['31222103', '31222100'], // Copepoda Cyclopidae Diacyclops crassicaudis
    ['31222104', '31222100'], // Copepoda Cyclopidae Diacyclops languidoides
    ['31222105', '31222100'], // Copepoda Cyclopidae Diacyclops languidus
    ['31222106', '31222100'], // Copepoda Cyclopidae Diacyclops nanus
    ['31222200', '31220000'], // Copepoda Cyclopidae Thermocyclops
    ['31222201', '31222200'], // Copepoda Cyclopidae Thermocyclops crassus
    ['31222202', '31222200'], // Copepoda Cyclopidae Thermocyclops dybowskii
    ['31222300', '31220000'], // Copepoda Cyclopidae Metacyclops
    ['31222301', '31222300'], // Copepoda Cyclopidae Metacyclops gracilis
    ['31222302', '31222300'], // Copepoda Cyclopidae Metacyclops minutus
    ['31222400', '31220000'], // Copepoda Cyclopidae Cryptocyclops
    ['31222401', '31222400'], // Copepoda Cyclopidae Cryptocyclops bicolor
    ['31230000', '31000000'], // Copepoda Lernaeidae
    ['31230100', '31230000'], // Copepoda Lernaeidae Lernaea
    ['31230101', '31230100'], // Copepoda Lernaeidae Lernaea cyprinacea
    ['31300000', '31000000'], // Copepoda Harpacticoida
    ['31310000', '31000000'], // Copepoda Phyllognathopodidae
    ['31310100', '31310000'], // Copepoda Phyllognathopodidae Phyllognathopus
    ['31310101', '31310100'], // Copepoda Phyllognathopodidae Phyllognathopus viguieri
    ['31320000', '31000000'], // Copepoda D'arcythompsoniidae
    ['31320100', '31320000'], // Copepoda D'arcythompsoniidae Leptocaris
    ['31320101', '31320100'], // Copepoda D'arcythompsoniidae Leptocaris brevicornis
    ['31330000', '31000000'], // Copepoda Ameiridae
    ['31330100', '31330000'], // Copepoda Ameiridae Nitokra
    ['31330101', '31330100'], // Copepoda Ameiridae Nitokra hibernica
    ['31330102', '31330100'], // Copepoda Ameiridae Nitokra lacustris
    ['31330103', '31330100'], // Copepoda Ameiridae Nitokra spinipes
    ['31330104', '31330100'], // Copepoda Ameiridae Nitokra typica
    ['31340000', '31000000'], // Copepoda Canthocamptidae
    ['31340100', '31340000'], // Copepoda Canthocamptidae Canthocamptus
    ['31340101', '31340100'], // Copepoda Canthocamptidae Canthocamptus staphylinus
    ['31340102', '31340100'], // Copepoda Canthocamptidae Canthocamptus microstaphylinus
    ['31340200', '31340000'], // Copepoda Canthocamptidae Mesochra
    ['31340201', '31340200'], // Copepoda Canthocamptidae Mesochra aestuarii
    ['31340202', '31340200'], // Copepoda Canthocamptidae Mesochra lilljeborgi
    ['31340203', '31340200'], // Copepoda Canthocamptidae Mesochra rapiens
    ['31340300', '31340000'], // Copepoda Canthocamptidae Attheyella
    ['31340310', '31340300'], // Copepoda Canthocamptidae Attheyella (Attheyella)
    ['31340311', '31340300'], // Copepoda Canthocamptidae Attheyella (Attheyella) crassa
    ['31340320', '31340300'], // Copepoda Canthocamptidae Attheyella (Brehmiella)
    ['31340321', '31340300'], // Copepoda Canthocamptidae Attheyella (Brehmiella) dentata
    ['31340322', '31340300'], // Copepoda Canthocamptidae Attheyella (Brehmiella) trispinosa
    ['31340323', '31340300'], // Copepoda Canthocamptidae Attheyella (Brehmiella) wulmeri
    ['31340330', '31340300'], // Copepoda Canthocamptidae Attheyella (Elaphoidella)
    ['31340331', '31340300'], // Copepoda Canthocamptidae Attheyella (Elaphoidella) bidens
    ['31340332', '31340300'], // Copepoda Canthocamptidae Attheyella (Elaphoidella) gracilis
    ['31340500', '31340000'], // Copepoda Canthocamptidae Maraenobiotus
    ['31340501', '31340500'], // Copepoda Canthocamptidae Maraenobiotus vejdovskyi
    ['31340600', '31340000'], // Copepoda Canthocamptidae Epactophanes
    ['31340601', '31340600'], // Copepoda Canthocamptidae Epactophanes richardi
    ['31340700', '31340000'], // Copepoda Canthocamptidae Moraria
    ['31340701', '31340700'], // Copepoda Canthocamptidae Moraria arboricola
    ['31340702', '31340700'], // Copepoda Canthocamptidae Moraria brevipes
    ['31340703', '31340700'], // Copepoda Canthocamptidae Moraria duthiei
    ['31340704', '31340700'], // Copepoda Canthocamptidae Moraria mrazeki
    ['31340705', '31340700'], // Copepoda Canthocamptidae Moraria poppei
    ['31340706', '31340700'], // Copepoda Canthocamptidae Moraria sphagnicola
    ['31340707', '31340700'], // Copepoda Canthocamptidae Moraria varica
    ['31340800', '31340000'], // Copepoda Canthocamptidae Bryocamptus
    ['31340810', '31340800'], // Copepoda Canthocamptidae Bryocamptus (Bryocamptus)
    ['31340811', '31340800'], // Copepoda Canthocamptidae Bryocamptus (Bryocamptus) minutus
    ['31340820', '31340800'], // Copepoda Canthocamptidae Bryocamptus (Rheocamptus)
    ['31340821', '31340800'], // Copepoda Canthocamptidae Bryocamptus (Rheocamptus) pygmaeus
    ['31340822', '31340800'], // Copepoda Canthocamptidae Bryocamptus (Rheocamptus) typhlops
    ['31340823', '31340800'], // Copepoda Canthocamptidae Bryocamptus (Rheocamptus) weberi
    ['31340824', '31340800'], // Copepoda Canthocamptidae Bryocamptus (Rheocamptus) zschokkei
    ['31340830', '31340800'], // Copepoda Canthocamptidae Bryocamptus (Arcticocamptus)
    ['31340831', '31340800'], // Copepoda Canthocamptidae Bryocamptus (Arcticocamptus) cuspidatus
    ['31340832', '31340800'], // Copepoda Canthocamptidae Bryocamptus (Arcticocamptus) rhaeticus
    ['31340840', '31340800'], // Copepoda Canthocamptidae Bryocamptus (Limnocamptus)
    ['31340841', '31340800'], // Copepoda Canthocamptidae Bryocamptus (Limnocamptus) echinatus
    ['31340842', '31340800'], // Copepoda Canthocamptidae Bryocamptus (Limnocamptus) praegeri
    ['31341300', '31340000'], // Copepoda Canthocamptidae Paracamptus
    ['31341301', '31341300'], // Copepoda Canthocamptidae Paracamptus schmeili
    ['31350000', '31000000'], // Copepoda Parastenocarididae
    ['31350100', '31350000'], // Copepoda Parastenocarididae Parastenocaris
    ['31350101', '31350100'], // Copepoda Parastenocarididae Parastenocaris phyllura
    ['31350102', '31350100'], // Copepoda Parastenocarididae Parastenocaris vicesima
    ['31360000', '31000000'], // Copepoda Laophontidae
    ['31360100', '31360000'], // Copepoda Laophontidae Onychocamptus
    ['31360101', '31360100'], // Copepoda Laophontidae Onychocamptus mohammed
    ['31370000', '31000000'], // Copepoda Cletodidae
    ['31370100', '31370000'], // Copepoda Cletodidae Nannopus
    ['31370101', '31370100'], // Copepoda Cletodidae Nannopus palustris
    ['31380000', '31000000'], // Copepoda Tachidiidae
    ['31380100', '31380000'], // Copepoda Tachidiidae Tachidius
    ['31380101', '31380100'], // Copepoda Tachidiidae Tachidius discipes
    ['31380102', '31380100'], // Copepoda Tachidiidae Tachidius incisipes
    ['31380200', '31380000'], // Copepoda Tachidiidae Microarthridion
    ['31380201', '31380200'], // Copepoda Tachidiidae Microarthridion littorale
    ['31400000', '31000000'], // Copepoda Poecilostomatoida
    ['31410000', '31000000'], // Copepoda Ergasilidae
    ['31410100', '31410000'], // Copepoda Ergasilidae Ergasilus
    ['31410101', '31410100'], // Copepoda Ergasilidae Ergasilus briani
    ['31410102', '31410100'], // Copepoda Ergasilidae Ergasilus gibbus
    ['31410103', '31410100'], // Copepoda Ergasilidae Ergasilus sieboldi
    ['31410104', '31410100'], // Copepoda Ergasilidae Ergasilus lizae
    ['31410200', '31410000'], // Copepoda Ergasilidae Neoergasilus
    ['31410201', '31410200'], // Copepoda Ergasilidae Neoergasilus japonicus
    ['31410300', '31410000'], // Copepoda Ergasilidae Thersitina
    ['31410301', '31410300'], // Copepoda Ergasilidae Thersitina gasterostei
    ['31410400', '31410000'], // Copepoda Ergasilidae Paraergasilus
    ['31410401', '31410400'], // Copepoda Ergasilidae Paraergasilus longidigitus
    ['31500000', '31000000'], // Copepoda Siphonostomatoida
    ['31510000', '31000000'], // Copepoda Caligidae
    ['31510100', '31510000'], // Copepoda Caligidae Lepeophtheirus
    ['31510101', '31510100'], // Copepoda Caligidae Lepeophtheirus salmonis
    ['31510200', '31510000'], // Copepoda Caligidae Caligus
    ['31510201', '31510200'], // Copepoda Caligidae Caligus pageti
    ['31520000', '31000000'], // Copepoda Dichelesthiidae
    ['31520100', '31520000'], // Copepoda Dichelesthiidae Dichelesthium
    ['31520101', '31520100'], // Copepoda Dichelesthiidae Dichelesthium oblongum
    ['31530000', '31000000'], // Copepoda Lernaeopodidae
    ['31530100', '31530000'], // Copepoda Lernaeopodidae Tracheliastes
    ['31530101', '31530100'], // Copepoda Lernaeopodidae Tracheliastes polycolpus
    ['31530102', '31530100'], // Copepoda Lernaeopodidae Tracheliastes maculatus
    ['31530200', '31530000'], // Copepoda Lernaeopodidae Achtheres
    ['31530201', '31530200'], // Copepoda Lernaeopodidae Achtheres percarum
    ['31530300', '31530000'], // Copepoda Lernaeopodidae Salmincola
    ['31530301', '31530300'], // Copepoda Lernaeopodidae Salmincola edwardsii
    ['31530302', '31530300'], // Copepoda Lernaeopodidae Salmincola gordoni
    ['31530303', '31530300'], // Copepoda Lernaeopodidae Salmincola salmoneus
    ['31530304', '31530300'], // Copepoda Lernaeopodidae Salmincola thymalli
    ['31530400', '31530000'], // Copepoda Lernaeopodidae Clavellisa
    ['31530401', '31530400'], // Copepoda Lernaeopodidae Clavellisa emarginata
    ['32000000', undefined], // Branchiura
    ['32010000', '32000000'], // Branchiura
    ['32010100', '32010000'], // Branchiura Argulus
    ['32010101', '32010100'], // Branchiura Argulus coregoni
    ['32010102', '32010100'], // Branchiura Argulus foliaceus
    ['33000000', undefined], // Bathynellacea
    ['33010000', '33000000'], // Bathynellacea Bathynellidae
    ['33010100', '33010000'], // Bathynellacea Bathynellidae Bathynella
    ['33010101', '33010100'], // Bathynellacea Bathynellidae Bathynella natans
    ['33010200', '33010000'], // Bathynellacea Bathynellidae Antrobathynella
    ['33010201', '33010200'], // Bathynellacea Bathynellidae Antrobathynella stammeri
    ['34000000', undefined], // Decapoda
    ['34100000', '34000000'], // Decapoda Natantia
    ['34110000', '34000000'], // Decapoda Palaemonidae
    ['34110100', '34110000'], // Decapoda Palaemonidae Palaemonetes
    ['34110101', '34110100'], // Decapoda Palaemonidae Palaemonetes varians
    ['34110200', '34110000'], // Decapoda Palaemonidae Palaemon
    ['34110201', '34110200'], // Decapoda Palaemonidae Palaemon longirostris
    ['34120000', '34000000'], // Decapoda Crangonidae
    ['34120100', '34120000'], // Decapoda Crangonidae Crangon
    ['34120101', '34120100'], // Decapoda Crangonidae Crangon crangon
    ['34200000', '34000000'], // Decapoda Brachyura
    ['34210000', '34000000'], // Decapoda Grapsidae
    ['34210100', '34210000'], // Decapoda Grapsidae Eriocheir
    ['34210101', '34210100'], // Decapoda Grapsidae Eriocheir sinensis
    ['34300000', '34000000'], // Decapoda Astacura
    ['34310000', '34000000'], // Decapoda Astacidae
    ['34310100', '34310000'], // Decapoda Astacidae Austropotamobius
    ['34310101', '34310100'], // Decapoda Astacidae Austropotamobius pallipes
    ['34310200', '34310000'], // Decapoda Astacidae Astacus
    ['34310201', '34310200'], // Decapoda Astacidae Astacus astacus
    ['34310202', '34310200'], // Decapoda Astacidae Astacus leptodactylus
    ['34310300', '34310000'], // Decapoda Astacidae Pacifastacus
    ['34310301', '34310300'], // Decapoda Astacidae Pacifastacus leniusculus
    ['34320000', '34000000'], // Decapoda Cambaridae
    ['34320100', '34320000'], // Decapoda Cambaridae Procambarus
    ['34320101', '34320100'], // Decapoda Cambaridae Procambarus clarkii
    ['34320200', '34320000'], // Decapoda Cambaridae Orconectes
    ['34320201', '34320200'], // Decapoda Cambaridae Orconectes limosus
    ['35000000', undefined], // Mysidacea
    ['35100000', '35000000'], // Mysidacea Mysida
    ['35110000', '35000000'], // Mysidacea Mysidae
    ['35110100', '35110000'], // Mysidacea Mysidae Mysis
    ['35110101', '35110100'], // Mysidacea Mysidae Mysis relicta
    ['35110200', '35110000'], // Mysidacea Mysidae Neomysis
    ['35110201', '35110200'], // Mysidacea Mysidae Neomysis integer
    ['35110300', '35110000'], // Mysidacea Mysidae Hemimysis
    ['35110301', '35110300'], // Mysidacea Mysidae Hemimysis anomala
    ['36000000', undefined], // Isopoda
    ['36100000', '36000000'], // Isopoda Aselloidea
    ['36110000', '36000000'], // Isopoda Asellidae
    ['36110100', '36110000'], // Isopoda Asellidae Asellus
    ['36110101', '36110100'], // Isopoda Asellidae Asellus aquaticus
    ['36110200', '36110000'], // Isopoda Asellidae Proasellus
    ['36110201', '36110200'], // Isopoda Asellidae Proasellus cavaticus
    ['36110202', '36110200'], // Isopoda Asellidae Proasellus meridianus
    ['36110300', '36110000'], // Isopoda Asellidae Caecidotea
    ['36110301', '36110300'], // Isopoda Asellidae Caecidotea communis
    ['36200000', '36000000'], // Isopoda Paraselloidea
    ['36210000', '36000000'], // Isopoda Janiridae
    ['36210100', '36210000'], // Isopoda Janiridae Jaera
    ['36210101', '36210100'], // Isopoda Janiridae Jaera nordmanni
    ['36220000', '36000000'], // Isopoda Sphaeromatidae
    ['36220100', '36220000'], // Isopoda Sphaeromatidae Sphaeroma
    ['36220101', '36220100'], // Isopoda Sphaeromatidae Sphaeroma hookeri
    ['36220102', '36220100'], // Isopoda Sphaeromatidae Sphaeroma rugicauda
    ['37000000', undefined], // Amphipoda
    ['37100000', '37000000'], // Amphipoda Gammaroidea
    ['37110000', '37000000'], // Amphipoda Corophiidae
    ['37110100', '37110000'], // Amphipoda Corophiidae Corophium
    ['37110101', '37110100'], // Amphipoda Corophiidae Corophium curvispinum
    ['37110102', '37110100'], // Amphipoda Corophiidae Corophium insidiosum
    ['37110103', '37110100'], // Amphipoda Corophiidae Corophium lacustre
    ['37110104', '37110100'], // Amphipoda Corophiidae Corophium multisetosum
    ['37110105', '37110100'], // Amphipoda Corophiidae Corophium volutator
    ['3711010Z', '37110100'], // Amphipoda Corophiidae Corophium multisetosum group
    ['37120000', '37000000'], // Amphipoda Talitridae
    ['37120100', '37120000'], // Amphipoda Talitridae Orchestia
    ['37120101', '37120100'], // Amphipoda Talitridae Orchestia cavimana
    ['37130000', '37000000'], // Amphipoda Crangonyctidae
    ['37130100', '37130000'], // Amphipoda Crangonyctidae Crangonyx
    ['37130101', '37130100'], // Amphipoda Crangonyctidae Crangonyx pseudogracilis
    ['37130102', '37130100'], // Amphipoda Crangonyctidae Crangonyx subterraneus
    ['37140000', '37000000'], // Amphipoda Gammaridae
    ['37140100', '37140000'], // Amphipoda Gammaridae Echinogammarus
    ['37140101', '37140100'], // Amphipoda Gammaridae Echinogammarus berilloni
    ['37140200', '37140000'], // Amphipoda Gammaridae Gammarus
    ['37140201', '37140200'], // Amphipoda Gammaridae Gammarus chevreuxi
    ['37140202', '37140200'], // Amphipoda Gammaridae Gammarus duebeni
    ['37140203', '37140200'], // Amphipoda Gammaridae Gammarus lacustris
    ['37140204', '37140200'], // Amphipoda Gammaridae Gammarus locusta
    ['37140205', '37140200'], // Amphipoda Gammaridae Gammarus oceanicus
    ['37140206', '37140200'], // Amphipoda Gammaridae Gammarus pulex
    ['37140207', '37140200'], // Amphipoda Gammaridae Gammarus salinus
    ['37140208', '37140200'], // Amphipoda Gammaridae Gammarus tigrinus
    ['37140209', '37140200'], // Amphipoda Gammaridae Gammarus zaddachi
    ['37140300', '37140000'], // Amphipoda Gammaridae Dikerogammarus
    ['37140301', '37140300'], // Amphipoda Gammaridae Dikerogammarus villosus
    ['37150000', '37000000'], // Amphipoda Niphargidae
    ['37150200', '37150000'], // Amphipoda Niphargidae Niphargus
    ['37150201', '37150200'], // Amphipoda Niphargidae Niphargus aquilex
    ['37150202', '37150200'], // Amphipoda Niphargidae Niphargus fontanus
    ['37150203', '37150200'], // Amphipoda Niphargidae Niphargus kochianus
    ['37150204', '37150200'], // Amphipoda Niphargidae Niphargus wexfordensis
    ['37150205', '37150200'], // Amphipoda Niphargidae Niphargus glenniei
    ['37150300', '37150000'], // Amphipoda Niphargidae Microniphargus
    ['37150301', '37150300'], // Amphipoda Niphargidae Microniphargus leruthi
    ['371Z0000', '37000000'], // Amphipoda Gammaridae (including Crangonyctidae and Niphargidae)
    ['38000000', undefined], // Chilopoda
    ['38100000', '38000000'], // Chilopoda Geophilomorpha
    ['38110000', '38000000'], // Chilopoda Geophilidae
    ['38110100', '38110000'], // Chilopoda Geophilidae Strigamia
    ['38110101', '38110100'], // Chilopoda Geophilidae Strigamia maritima
    ['39000000', undefined], // Collembola
    ['39100000', '39000000'], // Collembola Entomobryomorpha
    ['39130000', '39000000'], // Collembola Isotomidae
    ['39130100', '39130000'], // Collembola Isotomidae Proisotoma
    ['39130112', '39130100'], // Collembola Isotomidae Proisotoma buddenbrocki
    ['39130200', '39130000'], // Collembola Isotomidae Desoria
    ['39130201', '39130200'], // Collembola Isotomidae Desoria infuscata
    ['39130300', '39130000'], // Collembola Isotomidae Isotoma
    ['39130312', '39130300'], // Collembola Isotomidae Isotoma viridis
    ['39130400', '39130000'], // Collembola Isotomidae Agrenia
    ['39130401', '39130400'], // Collembola Isotomidae Agrenia bidenticulata
    ['39130500', '39130000'], // Collembola Isotomidae Isotomurus
    ['39130501', '39130500'], // Collembola Isotomidae Isotomurus alticolus
    ['39130502', '39130500'], // Collembola Isotomidae Isotomurus palustris
    ['39130503', '39130500'], // Collembola Isotomidae Isotomurus antennalis
    ['39130600', '39130000'], // Collembola Isotomidae Ballistura
    ['39130601', '39130600'], // Collembola Isotomidae Ballistura borealis
    ['39130602', '39130600'], // Collembola Isotomidae Ballistura schoetti
    ['39130700', '39130000'], // Collembola Isotomidae Pachyotoma
    ['39130701', '39130700'], // Collembola Isotomidae Pachyotoma crassicauda
    ['39200000', '39000000'], // Collembola Symphypleona
    ['39210000', '39000000'], // Collembola Sminthurididae
    ['39210100', '39210000'], // Collembola Sminthurididae Sminthurides
    ['39210111', '39210100'], // Collembola Sminthurididae Sminthurides aquaticus
    ['39210112', '39210100'], // Collembola Sminthurididae Sminthurides cruciatus
    ['39210113', '39210100'], // Collembola Sminthurididae Sminthurides malmgreni
    ['39210114', '39210100'], // Collembola Sminthurididae Sminthurides parvulus
    ['39210115', '39210100'], // Collembola Sminthurididae Sminthurides schoetti
    ['39210116', '39210100'], // Collembola Sminthurididae Sminthurides signatus
    ['39210300', '39210000'], // Collembola Sminthurididae Stenacidia
    ['39210301', '39210300'], // Collembola Sminthurididae Stenacidia violacea
    ['39230000', '39000000'], // Collembola Bourletiellidae
    ['39230100', '39230000'], // Collembola Bourletiellidae Heterosminthurus
    ['39230101', '39230100'], // Collembola Bourletiellidae Heterosminthurus insignis
    ['39230102', '39230100'], // Collembola Bourletiellidae Heterosminthurus novemlineatus
    ['39300000', '39000000'], // Collembola Poduromorpha
    ['39310000', '39000000'], // Collembola Hypogastruridae
    ['39310100', '39310000'], // Collembola Hypogastruridae Hypogastrura
    ['39310101', '39310100'], // Collembola Hypogastruridae Hypogastrura viatica
    ['39320000', '39000000'], // Collembola Neanuridae
    ['39320100', '39320000'], // Collembola Neanuridae Anurida
    ['39320101', '39320100'], // Collembola Neanuridae Anurida tullbergi
    ['39330000', '39000000'], // Collembola Poduridae
    ['39330100', '39330000'], // Collembola Poduridae Podura
    ['39330101', '39330100'], // Collembola Poduridae Podura aquatica
    ['40000000', undefined], // Ephemeroptera
    ['40100000', '40000000'], // Ephemeroptera Baetoidea
    ['40110000', '40000000'], // Ephemeroptera Siphlonuridae
    ['40110100', '40110000'], // Ephemeroptera Siphlonuridae Siphlonurus
    ['40110101', '40110100'], // Ephemeroptera Siphlonuridae Siphlonurus alternatus
    ['40110102', '40110100'], // Ephemeroptera Siphlonuridae Siphlonurus armatus
    ['40110103', '40110100'], // Ephemeroptera Siphlonuridae Siphlonurus lacustris
    ['40120000', '40000000'], // Ephemeroptera Baetidae
    ['40120100', '40120000'], // Ephemeroptera Baetidae Baetis
    ['40120102', '40120100'], // Ephemeroptera Baetidae Baetis buceratus
    ['40120104', '40120100'], // Ephemeroptera Baetidae Baetis fuscatus
    ['40120107', '40120100'], // Ephemeroptera Baetidae Baetis rhodani
    ['40120108', '40120100'], // Ephemeroptera Baetidae Baetis scambus
    ['40120111', '40120100'], // Ephemeroptera Baetidae Baetis vernus
    ['4012011Z', '40120100'], // Ephemeroptera Baetidae Baetis scambus group
    ['40120200', '40120000'], // Ephemeroptera Baetidae Centroptilum
    ['40120201', '40120200'], // Ephemeroptera Baetidae Centroptilum luteolum
    ['40120300', '40120000'], // Ephemeroptera Baetidae Cloeon
    ['40120301', '40120300'], // Ephemeroptera Baetidae Cloeon dipterum
    ['40120302', '40120300'], // Ephemeroptera Baetidae Cloeon simile
    ['40120400', '40120000'], // Ephemeroptera Baetidae Procloeon
    ['40120401', '40120400'], // Ephemeroptera Baetidae Procloeon bifidum
    ['40120402', '40120400'], // Ephemeroptera Baetidae Procloeon pennulatum
    ['40120500', '40120000'], // Ephemeroptera Baetidae Alainites
    ['40120501', '40120500'], // Ephemeroptera Baetidae Alainites muticus
    ['40120600', '40120000'], // Ephemeroptera Baetidae Labiobaetis
    ['40120601', '40120600'], // Ephemeroptera Baetidae Labiobaetis atrebatinus
    ['40120700', '40120000'], // Ephemeroptera Baetidae Nigrobaetis
    ['40120701', '40120700'], // Ephemeroptera Baetidae Nigrobaetis digitatus
    ['40120702', '40120700'], // Ephemeroptera Baetidae Nigrobaetis niger
    ['40120Y00', '40120000'], // Ephemeroptera Baetidae Centroptilum
    ['40120Z00', '40120000'], // Ephemeroptera Baetidae Baetis
    ['40130000', '40000000'], // Ephemeroptera Heptageniidae
    ['40130100', '40130000'], // Ephemeroptera Heptageniidae Rhithrogena
    ['40130101', '40130100'], // Ephemeroptera Heptageniidae Rhithrogena germanica
    ['40130102', '40130100'], // Ephemeroptera Heptageniidae Rhithrogena semicolorata
    ['40130200', '40130000'], // Ephemeroptera Heptageniidae Heptagenia
    ['40130203', '40130200'], // Ephemeroptera Heptageniidae Heptagenia longicauda
    ['40130204', '40130200'], // Ephemeroptera Heptageniidae Heptagenia sulphurea
    ['40130400', '40130000'], // Ephemeroptera Heptageniidae Ecdyonurus
    ['40130401', '40130400'], // Ephemeroptera Heptageniidae Ecdyonurus dispar
    ['40130402', '40130400'], // Ephemeroptera Heptageniidae Ecdyonurus insignis
    ['40130403', '40130400'], // Ephemeroptera Heptageniidae Ecdyonurus torrentis
    ['40130404', '40130400'], // Ephemeroptera Heptageniidae Ecdyonurus venosus
    ['40130500', '40130000'], // Ephemeroptera Heptageniidae Electrogena
    ['40130501', '40130500'], // Ephemeroptera Heptageniidae Electrogena affinis
    ['40130502', '40130500'], // Ephemeroptera Heptageniidae Electrogena lateralis
    ['40130600', '40130000'], // Ephemeroptera Heptageniidae Kageronia
    ['40130601', '40130600'], // Ephemeroptera Heptageniidae Kageronia fuscogrisea
    ['40130Z00', '40130000'], // Ephemeroptera Heptageniidae Heptagenia
    ['40140000', '40000000'], // Ephemeroptera Ameletidae
    ['40140100', '40140000'], // Ephemeroptera Ameletidae Ameletus
    ['40140101', '40140100'], // Ephemeroptera Ameletidae Ameletus inopinatus
    ['40150000', '40000000'], // Ephemeroptera Arthropleidae
    ['40150100', '40150000'], // Ephemeroptera Arthropleidae Arthroplea
    ['40150101', '40150100'], // Ephemeroptera Arthropleidae Arthroplea congener
    ['401Y0000', '40000000'], // Ephemeroptera Heptageniidae (including Arthropleidae)
    ['401Z0000', '40000000'], // Ephemeroptera Siphlonuridae (including Ameletidae)
    ['40200000', '40000000'], // Ephemeroptera Leptophlebioidea
    ['40210000', '40000000'], // Ephemeroptera Leptophlebiidae
    ['40210100', '40210000'], // Ephemeroptera Leptophlebiidae Leptophlebia
    ['40210101', '40210100'], // Ephemeroptera Leptophlebiidae Leptophlebia marginata
    ['40210102', '40210100'], // Ephemeroptera Leptophlebiidae Leptophlebia vespertina
    ['40210200', '40210000'], // Ephemeroptera Leptophlebiidae Paraleptophlebia
    ['40210201', '40210200'], // Ephemeroptera Leptophlebiidae Paraleptophlebia cincta
    ['40210202', '40210200'], // Ephemeroptera Leptophlebiidae Paraleptophlebia submarginata
    ['40210203', '40210200'], // Ephemeroptera Leptophlebiidae Paraleptophlebia werneri
    ['40210300', '40210000'], // Ephemeroptera Leptophlebiidae Habrophlebia
    ['40210301', '40210300'], // Ephemeroptera Leptophlebiidae Habrophlebia fusca
    ['40300000', '40000000'], // Ephemeroptera Ephemeroidea
    ['40310000', '40000000'], // Ephemeroptera Potamanthidae
    ['40310100', '40310000'], // Ephemeroptera Potamanthidae Potamanthus
    ['40310101', '40310100'], // Ephemeroptera Potamanthidae Potamanthus luteus
    ['40320000', '40000000'], // Ephemeroptera Ephemeridae
    ['40320100', '40320000'], // Ephemeroptera Ephemeridae Ephemera
    ['40320101', '40320100'], // Ephemeroptera Ephemeridae Ephemera danica
    ['40320102', '40320100'], // Ephemeroptera Ephemeridae Ephemera lineata
    ['40320103', '40320100'], // Ephemeroptera Ephemeridae Ephemera vulgata
    ['40400000', '40000000'], // Ephemeroptera Ephemerelloidea
    ['40410000', '40000000'], // Ephemeroptera Ephemerellidae
    ['40410100', '40410000'], // Ephemeroptera Ephemerellidae Ephemerella
    ['40410102', '40410100'], // Ephemeroptera Ephemerellidae Ephemerella notata
    ['40410200', '40410000'], // Ephemeroptera Ephemerellidae Serratella
    ['40410201', '40410200'], // Ephemeroptera Ephemerellidae Serratella ignita
    ['40500000', '40000000'], // Ephemeroptera Caenoidea
    ['40510000', '40000000'], // Ephemeroptera Caenidae
    ['40510100', '40510000'], // Ephemeroptera Caenidae Brachycercus
    ['40510101', '40510100'], // Ephemeroptera Caenidae Brachycercus harrisellus
    ['40510200', '40510000'], // Ephemeroptera Caenidae Caenis
    ['40510201', '40510200'], // Ephemeroptera Caenidae Caenis horaria
    ['40510202', '40510200'], // Ephemeroptera Caenidae Caenis luctuosa
    ['40510203', '40510200'], // Ephemeroptera Caenidae Caenis macrura
    ['40510204', '40510200'], // Ephemeroptera Caenidae Caenis rivulorum
    ['40510205', '40510200'], // Ephemeroptera Caenidae Caenis robusta
    ['40510206', '40510200'], // Ephemeroptera Caenidae Caenis beskidensis
    ['40510207', '40510200'], // Ephemeroptera Caenidae Caenis pseudorivulorum
    ['40510208', '40510200'], // Ephemeroptera Caenidae Caenis pusilla
    ['4051020X', '40510200'], // Ephemeroptera Caenidae Caenis pseudorivulorum group
    ['4051020Z', '40510200'], // Ephemeroptera Caenidae Caenis luctuosa group
    ['41000000', undefined], // Plecoptera
    ['41100000', '41000000'], // Plecoptera Filipalpia
    ['41110000', '41000000'], // Plecoptera Taeniopterygidae
    ['41110100', '41110000'], // Plecoptera Taeniopterygidae Taeniopteryx
    ['41110101', '41110100'], // Plecoptera Taeniopterygidae Taeniopteryx nebulosa
    ['41110200', '41110000'], // Plecoptera Taeniopterygidae Rhabdiopteryx
    ['41110201', '41110200'], // Plecoptera Taeniopterygidae Rhabdiopteryx acuminata
    ['41110300', '41110000'], // Plecoptera Taeniopterygidae Brachyptera
    ['41110301', '41110300'], // Plecoptera Taeniopterygidae Brachyptera putata
    ['41110302', '41110300'], // Plecoptera Taeniopterygidae Brachyptera risi
    ['41120000', '41000000'], // Plecoptera Nemouridae
    ['41120100', '41120000'], // Plecoptera Nemouridae Protonemura
    ['41120101', '41120100'], // Plecoptera Nemouridae Protonemura meyeri
    ['41120102', '41120100'], // Plecoptera Nemouridae Protonemura montana
    ['41120103', '41120100'], // Plecoptera Nemouridae Protonemura praecox
    ['41120200', '41120000'], // Plecoptera Nemouridae Amphinemura
    ['41120201', '41120200'], // Plecoptera Nemouridae Amphinemura standfussi
    ['41120202', '41120200'], // Plecoptera Nemouridae Amphinemura sulcicollis
    ['41120300', '41120000'], // Plecoptera Nemouridae Nemurella
    ['41120301', '41120300'], // Plecoptera Nemouridae Nemurella pictetii
    ['41120400', '41120000'], // Plecoptera Nemouridae Nemoura
    ['41120401', '41120400'], // Plecoptera Nemouridae Nemoura avicularis
    ['41120402', '41120400'], // Plecoptera Nemouridae Nemoura cambrica
    ['41120403', '41120400'], // Plecoptera Nemouridae Nemoura cinerea
    ['41120404', '41120400'], // Plecoptera Nemouridae Nemoura dubitans
    ['41120405', '41120400'], // Plecoptera Nemouridae Nemoura erratica
    ['4112040Z', '41120400'], // Plecoptera Nemouridae Nemoura cambrica group
    ['41130000', '41000000'], // Plecoptera Leuctridae
    ['41130100', '41130000'], // Plecoptera Leuctridae Leuctra
    ['41130101', '41130100'], // Plecoptera Leuctridae Leuctra fusca
    ['41130102', '41130100'], // Plecoptera Leuctridae Leuctra geniculata
    ['41130103', '41130100'], // Plecoptera Leuctridae Leuctra hippopus
    ['41130104', '41130100'], // Plecoptera Leuctridae Leuctra inermis
    ['41130105', '41130100'], // Plecoptera Leuctridae Leuctra moselyi
    ['41130106', '41130100'], // Plecoptera Leuctridae Leuctra nigra
    ['41140000', '41000000'], // Plecoptera Capniidae
    ['41140100', '41140000'], // Plecoptera Capniidae Capnia
    ['41140101', '41140100'], // Plecoptera Capniidae Capnia atra
    ['41140102', '41140100'], // Plecoptera Capniidae Capnia bifrons
    ['41140103', '41140100'], // Plecoptera Capniidae Capnia vidua
    ['41200000', '41000000'], // Plecoptera Setipalpia
    ['41210000', '41000000'], // Plecoptera Perlodidae
    ['41210100', '41210000'], // Plecoptera Perlodidae Isogenus
    ['41210101', '41210100'], // Plecoptera Perlodidae Isogenus nubecula
    ['41210200', '41210000'], // Plecoptera Perlodidae Perlodes
    ['41210201', '41210200'], // Plecoptera Perlodidae Perlodes microcephalus
    ['41210300', '41210000'], // Plecoptera Perlodidae Diura
    ['41210301', '41210300'], // Plecoptera Perlodidae Diura bicaudata
    ['41210400', '41210000'], // Plecoptera Perlodidae Isoperla
    ['41210401', '41210400'], // Plecoptera Perlodidae Isoperla grammatica
    ['41210402', '41210400'], // Plecoptera Perlodidae Isoperla obscura
    ['41220000', '41000000'], // Plecoptera Perlidae
    ['41220100', '41220000'], // Plecoptera Perlidae Dinocras
    ['41220101', '41220100'], // Plecoptera Perlidae Dinocras cephalotes
    ['41220200', '41220000'], // Plecoptera Perlidae Perla
    ['41220201', '41220200'], // Plecoptera Perlidae Perla bipunctata
    ['41230000', '41000000'], // Plecoptera Chloroperlidae
    ['41230100', '41230000'], // Plecoptera Chloroperlidae Chloroperla
    ['41230103', '41230100'], // Plecoptera Chloroperlidae Chloroperla tripunctata
    ['41230200', '41230000'], // Plecoptera Chloroperlidae Xanthoperla
    ['41230201', '41230200'], // Plecoptera Chloroperlidae Xanthoperla apicalis
    ['41230300', '41230000'], // Plecoptera Chloroperlidae Siphonoperla
    ['41230301', '41230300'], // Plecoptera Chloroperlidae Siphonoperla torrentium
    ['41230Z00', '41230000'], // Plecoptera Chloroperlidae Chloroperla
    ['42000000', undefined], // Odonata
    ['42100000', '42000000'], // Odonata Zygoptera
    ['42110000', '42000000'], // Odonata Platycnemididae
    ['42110100', '42110000'], // Odonata Platycnemididae Platycnemis
    ['42110101', '42110100'], // Odonata Platycnemididae Platycnemis pennipes
    ['42120000', '42000000'], // Odonata Coenagrionidae
    ['42120100', '42120000'], // Odonata Coenagrionidae Pyrrhosoma
    ['42120101', '42120100'], // Odonata Coenagrionidae Pyrrhosoma nymphula
    ['42120200', '42120000'], // Odonata Coenagrionidae Ischnura
    ['42120201', '42120200'], // Odonata Coenagrionidae Ischnura elegans
    ['42120202', '42120200'], // Odonata Coenagrionidae Ischnura pumilio
    ['42120300', '42120000'], // Odonata Coenagrionidae Enallagma
    ['42120301', '42120300'], // Odonata Coenagrionidae Enallagma cyathigerum
    ['42120400', '42120000'], // Odonata Coenagrionidae Coenagrion
    ['42120401', '42120400'], // Odonata Coenagrionidae Coenagrion armatum
    ['42120402', '42120400'], // Odonata Coenagrionidae Coenagrion hastulatum
    ['42120403', '42120400'], // Odonata Coenagrionidae Coenagrion lunulatum
    ['42120404', '42120400'], // Odonata Coenagrionidae Coenagrion mercuriale
    ['42120405', '42120400'], // Odonata Coenagrionidae Coenagrion puella
    ['42120406', '42120400'], // Odonata Coenagrionidae Coenagrion pulchellum
    ['42120407', '42120400'], // Odonata Coenagrionidae Coenagrion scitulum
    ['4212040Z', '42120400'], // Odonata Coenagrionidae Coenagrion puella group
    ['42120500', '42120000'], // Odonata Coenagrionidae Ceriagrion
    ['42120501', '42120500'], // Odonata Coenagrionidae Ceriagrion tenellum
    ['42120600', '42120000'], // Odonata Coenagrionidae Erythromma
    ['42120601', '42120600'], // Odonata Coenagrionidae Erythromma najas
    ['42120602', '42120600'], // Odonata Coenagrionidae Erythromma viridulum
    ['42130000', '42000000'], // Odonata Lestidae
    ['42130100', '42130000'], // Odonata Lestidae Lestes
    ['42130101', '42130100'], // Odonata Lestidae Lestes dryas
    ['42130102', '42130100'], // Odonata Lestidae Lestes sponsa
    ['42130103', '42130100'], // Odonata Lestidae Lestes barbarus
    ['42130104', '42130100'], // Odonata Lestidae Lestes viridis
    ['42130200', '42130000'], // Odonata Lestidae Sympecma
    ['42130201', '42130200'], // Odonata Lestidae Sympecma fusca
    ['42140000', '42000000'], // Odonata Calopterygidae
    ['42140100', '42140000'], // Odonata Calopterygidae Calopteryx
    ['42140101', '42140100'], // Odonata Calopterygidae Calopteryx splendens
    ['42140102', '42140100'], // Odonata Calopterygidae Calopteryx virgo
    ['42200000', '42000000'], // Odonata Anisoptera
    ['42210000', '42000000'], // Odonata Gomphidae
    ['42210100', '42210000'], // Odonata Gomphidae Gomphus
    ['42210101', '42210100'], // Odonata Gomphidae Gomphus vulgatissimus
    ['42210102', '42210100'], // Odonata Gomphidae Gomphus flavipes
    ['42220000', '42000000'], // Odonata Cordulegastridae
    ['42220100', '42220000'], // Odonata Cordulegastridae Cordulegaster
    ['42220101', '42220100'], // Odonata Cordulegastridae Cordulegaster boltonii
    ['42230000', '42000000'], // Odonata Aeshnidae
    ['42230100', '42230000'], // Odonata Aeshnidae Brachytron
    ['42230101', '42230100'], // Odonata Aeshnidae Brachytron pratense
    ['42230200', '42230000'], // Odonata Aeshnidae Aeshna
    ['42230201', '42230200'], // Odonata Aeshnidae Aeshna caerulea
    ['42230202', '42230200'], // Odonata Aeshnidae Aeshna cyanea
    ['42230203', '42230200'], // Odonata Aeshnidae Aeshna grandis
    ['42230204', '42230200'], // Odonata Aeshnidae Aeshna isosceles
    ['42230205', '42230200'], // Odonata Aeshnidae Aeshna juncea
    ['42230206', '42230200'], // Odonata Aeshnidae Aeshna mixta
    ['42230207', '42230200'], // Odonata Aeshnidae Aeshna affinis
    ['4223020Z', '42230200'], // Odonata Aeshnidae Aeshna mixta group
    ['42230300', '42230000'], // Odonata Aeshnidae Anax
    ['42230301', '42230300'], // Odonata Aeshnidae Anax imperator
    ['42230302', '42230300'], // Odonata Aeshnidae Anax junius
    ['42230303', '42230300'], // Odonata Aeshnidae Anax parthenope
    ['42230400', '42230000'], // Odonata Aeshnidae Hemianax
    ['42230401', '42230400'], // Odonata Aeshnidae Hemianax ephippiger
    ['42240000', '42000000'], // Odonata Corduliidae
    ['42240100', '42240000'], // Odonata Corduliidae Cordulia
    ['42240101', '42240100'], // Odonata Corduliidae Cordulia aenea
    ['42240200', '42240000'], // Odonata Corduliidae Somatochlora
    ['42240201', '42240200'], // Odonata Corduliidae Somatochlora arctica
    ['42240202', '42240200'], // Odonata Corduliidae Somatochlora metallica
    ['42240300', '42240000'], // Odonata Corduliidae Oxygastra
    ['42240301', '42240300'], // Odonata Corduliidae Oxygastra curtisii
    ['42250000', '42000000'], // Odonata Libellulidae
    ['42250100', '42250000'], // Odonata Libellulidae Orthetrum
    ['42250101', '42250100'], // Odonata Libellulidae Orthetrum cancellatum
    ['42250102', '42250100'], // Odonata Libellulidae Orthetrum coerulescens
    ['42250200', '42250000'], // Odonata Libellulidae Libellula
    ['42250201', '42250200'], // Odonata Libellulidae Libellula depressa
    ['42250202', '42250200'], // Odonata Libellulidae Libellula fulva
    ['42250203', '42250200'], // Odonata Libellulidae Libellula quadrimaculata
    ['42250300', '42250000'], // Odonata Libellulidae Sympetrum
    ['42250301', '42250300'], // Odonata Libellulidae Sympetrum flaveolum
    ['42250302', '42250300'], // Odonata Libellulidae Sympetrum fonscolombii
    ['42250303', '42250300'], // Odonata Libellulidae Sympetrum nigrescens
    ['42250304', '42250300'], // Odonata Libellulidae Sympetrum sanguineum
    ['42250305', '42250300'], // Odonata Libellulidae Sympetrum danae
    ['42250306', '42250300'], // Odonata Libellulidae Sympetrum striolatum
    ['42250307', '42250300'], // Odonata Libellulidae Sympetrum vulgatum
    ['42250308', '42250300'], // Odonata Libellulidae Sympetrum meridionale
    ['42250309', '42250300'], // Odonata Libellulidae Sympetrum pedemontanum
    ['42250400', '42250000'], // Odonata Libellulidae Leucorrhinia
    ['42250401', '42250400'], // Odonata Libellulidae Leucorrhinia dubia
    ['42250500', '42250000'], // Odonata Libellulidae Crocothemis
    ['42250501', '42250500'], // Odonata Libellulidae Crocothemis erythraea
    ['42250600', '42250000'], // Odonata Libellulidae Pantala
    ['42250601', '42250600'], // Odonata Libellulidae Pantala flavescens
    ['43000000', undefined], // Hemiptera
    ['43100000', '43000000'], // Hemiptera Hebroidea
    ['43110000', '43000000'], // Hemiptera Mesoveliidae
    ['43110100', '43110000'], // Hemiptera Mesoveliidae Mesovelia
    ['43110101', '43110100'], // Hemiptera Mesoveliidae Mesovelia furcata
    ['43120000', '43000000'], // Hemiptera Hebridae
    ['43120100', '43120000'], // Hemiptera Hebridae Hebrus
    ['43120110', '43120100'], // Hemiptera Hebridae Hebrus (Hebrus)
    ['43120111', '43120100'], // Hemiptera Hebridae Hebrus (Hebrus) pusillus
    ['43120120', '43120100'], // Hemiptera Hebridae Hebrus (Hebrusella)
    ['43120121', '43120100'], // Hemiptera Hebridae Hebrus (Hebrusella) ruficeps
    ['43200000', '43000000'], // Hemiptera Gerroidea
    ['43210000', '43000000'], // Hemiptera Hydrometridae
    ['43210100', '43210000'], // Hemiptera Hydrometridae Hydrometra
    ['43210101', '43210100'], // Hemiptera Hydrometridae Hydrometra gracilenta
    ['43210102', '43210100'], // Hemiptera Hydrometridae Hydrometra stagnorum
    ['43220000', '43000000'], // Hemiptera Veliidae
    ['43220100', '43220000'], // Hemiptera Veliidae Velia
    ['43220110', '43220100'], // Hemiptera Veliidae Velia (Plesiovelia)
    ['43220111', '43220100'], // Hemiptera Veliidae Velia (Plesiovelia) caprai
    ['43220112', '43220100'], // Hemiptera Veliidae Velia (Plesiovelia) saulii
    ['43220200', '43220000'], // Hemiptera Veliidae Microvelia
    ['43220201', '43220200'], // Hemiptera Veliidae Microvelia pygmaea
    ['43220202', '43220200'], // Hemiptera Veliidae Microvelia reticulata
    ['43220203', '43220200'], // Hemiptera Veliidae Microvelia buenoi
    ['43230000', '43000000'], // Hemiptera Gerridae
    ['43230100', '43230000'], // Hemiptera Gerridae Gerris
    ['43230111', '43230100'], // Hemiptera Gerridae Gerris argentatus
    ['43230112', '43230100'], // Hemiptera Gerridae Gerris costae
    ['43230113', '43230100'], // Hemiptera Gerridae Gerris gibbifer
    ['43230114', '43230100'], // Hemiptera Gerridae Gerris lacustris
    ['43230115', '43230100'], // Hemiptera Gerridae Gerris lateralis
    ['43230116', '43230100'], // Hemiptera Gerridae Gerris odontogaster
    ['43230117', '43230100'], // Hemiptera Gerridae Gerris thoracicus
    ['43230200', '43230000'], // Hemiptera Gerridae Limnoporus
    ['43230201', '43230200'], // Hemiptera Gerridae Limnoporus rufoscutellatus
    ['43230300', '43230000'], // Hemiptera Gerridae Aquarius
    ['43230301', '43230300'], // Hemiptera Gerridae Aquarius najas
    ['43230302', '43230300'], // Hemiptera Gerridae Aquarius paludum
    ['43230Z00', '43230000'], // Hemiptera Gerridae Gerris
    ['43300000', '43000000'], // Hemiptera Nepoidea
    ['43310000', '43000000'], // Hemiptera Nepidae
    ['43310100', '43310000'], // Hemiptera Nepidae Nepa
    ['43310101', '43310100'], // Hemiptera Nepidae Nepa cinerea
    ['43310200', '43310000'], // Hemiptera Nepidae Ranatra
    ['43310201', '43310200'], // Hemiptera Nepidae Ranatra linearis
    ['43400000', '43000000'], // Hemiptera Naucoroidea
    ['43410000', '43000000'], // Hemiptera Naucoridae
    ['43410100', '43410000'], // Hemiptera Naucoridae Ilyocoris
    ['43410101', '43410100'], // Hemiptera Naucoridae Ilyocoris cimicoides
    ['43410200', '43410000'], // Hemiptera Naucoridae Naucoris
    ['43410201', '43410200'], // Hemiptera Naucoridae Naucoris maculatus
    ['43420000', '43000000'], // Hemiptera Aphelocheiridae
    ['43420100', '43420000'], // Hemiptera Aphelocheiridae Aphelocheirus
    ['43420101', '43420100'], // Hemiptera Aphelocheiridae Aphelocheirus aestivalis
    ['43500000', '43000000'], // Hemiptera Notonectoidea
    ['43510000', '43000000'], // Hemiptera Notonectidae
    ['43510100', '43510000'], // Hemiptera Notonectidae Notonecta
    ['43510101', '43510100'], // Hemiptera Notonectidae Notonecta glauca
    ['43510102', '43510100'], // Hemiptera Notonectidae Notonecta maculata
    ['43510103', '43510100'], // Hemiptera Notonectidae Notonecta obliqua
    ['43510104', '43510100'], // Hemiptera Notonectidae Notonecta viridis
    ['43520000', '43000000'], // Hemiptera Pleidae
    ['43520100', '43520000'], // Hemiptera Pleidae Plea
    ['43520101', '43520100'], // Hemiptera Pleidae Plea minutissima
    ['43600000', '43000000'], // Hemiptera Corixoidea
    ['43610000', '43000000'], // Hemiptera Corixidae
    ['43610100', '43610000'], // Hemiptera Corixidae Micronecta
    ['43610110', '43610100'], // Hemiptera Corixidae Micronecta (Dichaetonecta)
    ['43610111', '43610100'], // Hemiptera Corixidae Micronecta (Dichaetonecta) scholtzi
    ['43610120', '43610100'], // Hemiptera Corixidae Micronecta (Micronecta)
    ['43610121', '43610100'], // Hemiptera Corixidae Micronecta (Micronecta) minutissima
    ['43610122', '43610100'], // Hemiptera Corixidae Micronecta (Micronecta) poweri
    ['43610123', '43610100'], // Hemiptera Corixidae Micronecta (Micronecta) griseola
    ['43610300', '43610000'], // Hemiptera Corixidae Cymatia
    ['43610301', '43610300'], // Hemiptera Corixidae Cymatia bonsdorffii
    ['43610302', '43610300'], // Hemiptera Corixidae Cymatia coleoptrata
    ['43610303', '43610300'], // Hemiptera Corixidae Cymatia rogenhoferi
    ['43610400', '43610000'], // Hemiptera Corixidae Glaenocorisa
    ['43610401', '43610400'], // Hemiptera Corixidae Glaenocorisa propinqua
    ['43610500', '43610000'], // Hemiptera Corixidae Callicorixa
    ['43610501', '43610500'], // Hemiptera Corixidae Callicorixa praeusta
    ['43610502', '43610500'], // Hemiptera Corixidae Callicorixa wollastoni
    ['43610600', '43610000'], // Hemiptera Corixidae Corixa
    ['43610601', '43610600'], // Hemiptera Corixidae Corixa affinis
    ['43610602', '43610600'], // Hemiptera Corixidae Corixa dentipes
    ['43610603', '43610600'], // Hemiptera Corixidae Corixa panzeri
    ['43610604', '43610600'], // Hemiptera Corixidae Corixa punctata
    ['43610605', '43610600'], // Hemiptera Corixidae Corixa iberica
    ['43610700', '43610000'], // Hemiptera Corixidae Hesperocorixa
    ['43610701', '43610700'], // Hemiptera Corixidae Hesperocorixa castanea
    ['43610702', '43610700'], // Hemiptera Corixidae Hesperocorixa linnaei
    ['43610703', '43610700'], // Hemiptera Corixidae Hesperocorixa moesta
    ['43610704', '43610700'], // Hemiptera Corixidae Hesperocorixa sahlbergi
    ['43610800', '43610000'], // Hemiptera Corixidae Arctocorisa
    ['43610801', '43610800'], // Hemiptera Corixidae Arctocorisa carinata
    ['43610802', '43610800'], // Hemiptera Corixidae Arctocorisa germari
    ['43610900', '43610000'], // Hemiptera Corixidae Sigara
    ['43610910', '43610900'], // Hemiptera Corixidae Sigara (Sigara)
    ['43610911', '43610900'], // Hemiptera Corixidae Sigara (Sigara) dorsalis
    ['43610912', '43610900'], // Hemiptera Corixidae Sigara (Sigara) striata
    ['43610920', '43610900'], // Hemiptera Corixidae Sigara (Subsigara)
    ['43610921', '43610900'], // Hemiptera Corixidae Sigara (Subsigara) distincta
    ['43610922', '43610900'], // Hemiptera Corixidae Sigara (Subsigara) falleni
    ['43610923', '43610900'], // Hemiptera Corixidae Sigara (Subsigara) fallenoidea
    ['43610924', '43610900'], // Hemiptera Corixidae Sigara (Subsigara) fossarum
    ['43610925', '43610900'], // Hemiptera Corixidae Sigara (Subsigara) scotti
    ['43610926', '43610900'], // Hemiptera Corixidae Sigara (Subsigara) iactans
    ['43610927', '43610900'], // Hemiptera Corixidae Sigara (Subsigara) longipalis
    ['43610940', '43610900'], // Hemiptera Corixidae Sigara (Vermicorixa)
    ['43610941', '43610900'], // Hemiptera Corixidae Sigara (Vermicorixa) lateralis
    ['43610950', '43610900'], // Hemiptera Corixidae Sigara (Pseudovermicorixa)
    ['43610951', '43610900'], // Hemiptera Corixidae Sigara (Pseudovermicorixa) nigrolineata
    ['43610970', '43610900'], // Hemiptera Corixidae Sigara (Retrocorixa)
    ['43610971', '43610900'], // Hemiptera Corixidae Sigara (Retrocorixa) limitata
    ['43610972', '43610900'], // Hemiptera Corixidae Sigara (Retrocorixa) semistriata
    ['43610973', '43610900'], // Hemiptera Corixidae Sigara (Retrocorixa) venusta
    ['43610980', '43610900'], // Hemiptera Corixidae Sigara (Halicorixa)
    ['43610981', '43610900'], // Hemiptera Corixidae Sigara (Halicorixa) selecta
    ['43610982', '43610900'], // Hemiptera Corixidae Sigara (Halicorixa) stagnalis
    ['43610Y00', '43610000'], // Hemiptera Corixinae
    ['43610Z00', '43610000'], // Hemiptera Corixinae Sigara
    ['43611100', '43610000'], // Hemiptera Corixinae Paracorixa
    ['43611101', '43611100'], // Hemiptera Corixinae Paracorixa concinna
    ['44000000', undefined], // Hymenoptera
    ['44100000', '44000000'], // Hymenoptera Ichneumonoidea
    ['44110000', '44000000'], // Hymenoptera Ichneumonidae
    ['44110100', '44110000'], // Hymenoptera Ichneumonidae Agriotypus
    ['44110101', '44110100'], // Hymenoptera Ichneumonidae Agriotypus armatus
    ['44110200', '44110000'], // Hymenoptera Ichneumonidae Hemiteles
    ['44110202', '44110200'], // Hymenoptera Ichneumonidae Hemiteles bipunctator
    ['44110203', '44110200'], // Hymenoptera Ichneumonidae Hemiteles maricesca
    ['44110204', '44110200'], // Hymenoptera Ichneumonidae Hemiteles rubropleuralis
    ['44110205', '44110200'], // Hymenoptera Ichneumonidae Hemiteles similis
    ['44110300', '44110000'], // Hymenoptera Ichneumonidae Gelis
    ['44110301', '44110300'], // Hymenoptera Ichneumonidae Gelis cinctus
    ['44110400', '44110000'], // Hymenoptera Ichneumonidae Eriplanus
    ['44110500', '44110000'], // Hymenoptera Ichneumonidae Bathythrix
    ['44110501', '44110500'], // Hymenoptera Ichneumonidae Bathythrix argentata
    ['44110600', '44110000'], // Hymenoptera Ichneumonidae Phygadeuon
    ['44110601', '44110600'], // Hymenoptera Ichneumonidae Phygadeuon vexator
    ['44110700', '44110000'], // Hymenoptera Ichneumonidae Rhembobius
    ['44110701', '44110700'], // Hymenoptera Ichneumonidae Rhembobius perscrutator
    ['44110800', '44110000'], // Hymenoptera Ichneumonidae Scambus
    ['44110900', '44110000'], // Hymenoptera Ichneumonidae Sulcarius
    ['44110901', '44110900'], // Hymenoptera Ichneumonidae Sulcarius biannulatus
    ['44111000', '44110000'], // Hymenoptera Ichneumonidae Endromopoda
    ['44111001', '44111000'], // Hymenoptera Ichneumonidae Endromopoda arundinator
    ['44120000', '44000000'], // Hymenoptera Braconidae
    ['44120100', '44120000'], // Hymenoptera Braconidae Microgaster
    ['44120200', '44120000'], // Hymenoptera Braconidae Ademon
    ['44120201', '44120200'], // Hymenoptera Braconidae Ademon decrescens
    ['44120400', '44120000'], // Hymenoptera Braconidae Syncrasis
    ['44120401', '44120400'], // Hymenoptera Braconidae Syncrasis fucicola
    ['44120500', '44120000'], // Hymenoptera Braconidae Chaenusa
    ['44120501', '44120500'], // Hymenoptera Braconidae Chaenusa conjugens
    ['44120502', '44120500'], // Hymenoptera Braconidae Chaenusa limoniadum
    ['44120503', '44120500'], // Hymenoptera Braconidae Chaenusa naiadum
    ['44120504', '44120500'], // Hymenoptera Braconidae Chaenusa nereidum
    ['44120600', '44120000'], // Hymenoptera Braconidae Coelinius
    ['44120601', '44120600'], // Hymenoptera Braconidae Coelinius podagrica
    ['44120700', '44120000'], // Hymenoptera Braconidae Dacnusa
    ['44120701', '44120700'], // Hymenoptera Braconidae Dacnusa discolor
    ['44120702', '44120700'], // Hymenoptera Braconidae Dacnusa temula
    ['44120800', '44120000'], // Hymenoptera Braconidae Chorebus
    ['44120801', '44120800'], // Hymenoptera Braconidae Chorebus longicornis
    ['44120802', '44120800'], // Hymenoptera Braconidae Chorebus striola
    ['44120803', '44120800'], // Hymenoptera Braconidae Chorebus uliginosus
    ['44120900', '44120000'], // Hymenoptera Braconidae Hygroplitis
    ['44120901', '44120900'], // Hymenoptera Braconidae Hygroplitis rugulosus
    ['44200000', '44000000'], // Hymenoptera Chalcidoidea
    ['44210000', '44000000'], // Hymenoptera Chalcididae
    ['44210100', '44210000'], // Hymenoptera Chalcididae Chalcis
    ['44210101', '44210100'], // Hymenoptera Chalcididae Chalcis biguttata
    ['44210102', '44210100'], // Hymenoptera Chalcididae Chalcis myrifex
    ['44210103', '44210100'], // Hymenoptera Chalcididae Chalcis sispes
    ['44220000', '44000000'], // Hymenoptera Pteromalidae
    ['44220200', '44220000'], // Hymenoptera Pteromalidae Gyrinophagus
    ['44220201', '44220200'], // Hymenoptera Pteromalidae Gyrinophagus aper
    ['44220300', '44220000'], // Hymenoptera Pteromalidae Urolepis
    ['44220301', '44220300'], // Hymenoptera Pteromalidae Urolepis maritima
    ['44220400', '44220000'], // Hymenoptera Pteromalidae Cyrtogaster
    ['44220401', '44220400'], // Hymenoptera Pteromalidae Cyrtogaster clavicornis
    ['44230000', '44000000'], // Hymenoptera Eulophidae
    ['44230100', '44230000'], // Hymenoptera Eulophidae Mestocharis
    ['44230101', '44230100'], // Hymenoptera Eulophidae Mestocharis bimacularis
    ['44240000', '44000000'], // Hymenoptera Mymaridae
    ['44240100', '44240000'], // Hymenoptera Mymaridae Caraphractus
    ['44240101', '44240100'], // Hymenoptera Mymaridae Caraphractus cinctus
    ['44240200', '44240000'], // Hymenoptera Mymaridae Litus
    ['44240201', '44240200'], // Hymenoptera Mymaridae Litus cynipseus
    ['44240300', '44240000'], // Hymenoptera Mymaridae Anagrus
    ['44240301', '44240300'], // Hymenoptera Mymaridae Anagrus incarnatus
    ['44250000', '44000000'], // Hymenoptera Trichogrammatidae
    ['44250100', '44250000'], // Hymenoptera Trichogrammatidae Prestwichia
    ['44250101', '44250100'], // Hymenoptera Trichogrammatidae Prestwichia aquatica
    ['44300000', '44000000'], // Hymenoptera Proctotrupoidea
    ['44310000', '44000000'], // Hymenoptera Ceraphronidae
    ['44310200', '44310000'], // Hymenoptera Ceraphronidae Dendrocerus
    ['44310201', '44310200'], // Hymenoptera Ceraphronidae Dendrocerus aphidum
    ['44320000', '44000000'], // Hymenoptera Diapriidae
    ['44320100', '44320000'], // Hymenoptera Diapriidae Paramesius
    ['44320101', '44320100'], // Hymenoptera Diapriidae Paramesius rufipes
    ['44320200', '44320000'], // Hymenoptera Diapriidae Diapria
    ['44320201', '44320200'], // Hymenoptera Diapriidae Diapria conica
    ['44330000', '44000000'], // Hymenoptera Scelionidae
    ['44330100', '44330000'], // Hymenoptera Scelionidae Thoron
    ['44330101', '44330100'], // Hymenoptera Scelionidae Thoron metallicus
    ['44400000', '44000000'], // Hymenoptera Cynipoidea
    ['44410000', '44000000'], // Hymenoptera Figitidae
    ['44410100', '44410000'], // Hymenoptera Figitidae Kleidotoma
    ['44410101', '44410100'], // Hymenoptera Figitidae Kleidotoma halophila
    ['44410102', '44410100'], // Hymenoptera Figitidae Kleidotoma subaptera
    ['45000000', undefined], // Coleoptera
    ['45100000', '45000000'], // Coleoptera Caraboidea
    ['45110000', '45000000'], // Coleoptera Haliplidae
    ['45110100', '45110000'], // Coleoptera Haliplidae Brychius
    ['45110101', '45110100'], // Coleoptera Haliplidae Brychius elevatus
    ['45110200', '45110000'], // Coleoptera Haliplidae Peltodytes
    ['45110201', '45110200'], // Coleoptera Haliplidae Peltodytes caesus
    ['45110300', '45110000'], // Coleoptera Haliplidae Haliplus
    ['45110320', '45110300'], // Coleoptera Haliplidae Haliplus (Haliplus)
    ['45110321', '45110300'], // Coleoptera Haliplidae Haliplus (Haliplus) confinis
    ['45110322', '45110300'], // Coleoptera Haliplidae Haliplus (Haliplus) obliquus
    ['45110323', '45110300'], // Coleoptera Haliplidae Haliplus (Haliplus) varius
    ['45110330', '45110300'], // Coleoptera Haliplidae Haliplus (Neohaliplus)
    ['45110331', '45110300'], // Coleoptera Haliplidae Haliplus (Neohaliplus) lineatocollis
    ['45110340', '45110300'], // Coleoptera Haliplidae Haliplus (Haliplinus)
    ['45110341', '45110300'], // Coleoptera Haliplidae Haliplus (Haliplinus) apicalis
    ['45110342', '45110300'], // Coleoptera Haliplidae Haliplus (Haliplinus) fluviatilis
    ['45110343', '45110300'], // Coleoptera Haliplidae Haliplus (Haliplinus) furcatus
    ['45110344', '45110300'], // Coleoptera Haliplidae Haliplus (Haliplinus) heydeni
    ['45110345', '45110300'], // Coleoptera Haliplidae Haliplus (Haliplinus) immaculatus
    ['45110346', '45110300'], // Coleoptera Haliplidae Haliplus (Haliplinus) lineolatus
    ['45110347', '45110300'], // Coleoptera Haliplidae Haliplus (Haliplinus) ruficollis
    ['45110348', '45110300'], // Coleoptera Haliplidae Haliplus (Haliplinus) sibiricus
    ['4511034Z', '45110300'], // Coleoptera Haliplidae Haliplus ruficollis group
    ['45110350', '45110300'], // Coleoptera Haliplidae Haliplus (Liaphlus)
    ['45110351', '45110300'], // Coleoptera Haliplidae Haliplus (Liaphlus) flavicollis
    ['45110352', '45110300'], // Coleoptera Haliplidae Haliplus (Liaphlus) fulvus
    ['45110353', '45110300'], // Coleoptera Haliplidae Haliplus (Liaphlus) laminatus
    ['45110354', '45110300'], // Coleoptera Haliplidae Haliplus (Liaphlus) mucronatus
    ['45110355', '45110300'], // Coleoptera Haliplidae Haliplus (Liaphlus) variegatus
    ['45120000', '45000000'], // Coleoptera Paelobiidae
    ['45120100', '45120000'], // Coleoptera Paelobiidae Hygrobia
    ['45120101', '45120100'], // Coleoptera Paelobiidae Hygrobia hermanni
    ['45130000', '45000000'], // Coleoptera Noteridae
    ['45130100', '45130000'], // Coleoptera Noteridae Noterus
    ['45130101', '45130100'], // Coleoptera Noteridae Noterus clavicornis
    ['45130102', '45130100'], // Coleoptera Noteridae Noterus crassicornis
    ['45140000', '45000000'], // Coleoptera Dytiscidae
    ['45140100', '45140000'], // Coleoptera Dytiscidae Laccophilus
    ['45140101', '45140100'], // Coleoptera Dytiscidae Laccophilus hyalinus
    ['45140102', '45140100'], // Coleoptera Dytiscidae Laccophilus minutus
    ['45140103', '45140100'], // Coleoptera Dytiscidae Laccophilus poecilus
    ['45140200', '45140000'], // Coleoptera Dytiscidae Hydrovatus
    ['45140201', '45140200'], // Coleoptera Dytiscidae Hydrovatus clypealis
    ['45140202', '45140200'], // Coleoptera Dytiscidae Hydrovatus cuspidatus
    ['45140300', '45140000'], // Coleoptera Dytiscidae Hyphydrus
    ['45140301', '45140300'], // Coleoptera Dytiscidae Hyphydrus ovatus
    ['45140302', '45140300'], // Coleoptera Dytiscidae Hyphydrus aubei
    ['45140400', '45140000'], // Coleoptera Dytiscidae Hydroglyphus
    ['45140401', '45140400'], // Coleoptera Dytiscidae Hydroglyphus geminus
    ['45140500', '45140000'], // Coleoptera Dytiscidae Bidessus
    ['45140501', '45140500'], // Coleoptera Dytiscidae Bidessus minutissimus
    ['45140502', '45140500'], // Coleoptera Dytiscidae Bidessus unistriatus
    ['45140600', '45140000'], // Coleoptera Dytiscidae Hygrotus
    ['45140610', '45140600'], // Coleoptera Dytiscidae Hygrotus (Hygrotus)
    ['45140611', '45140600'], // Coleoptera Dytiscidae Hygrotus (Hygrotus) decoratus
    ['45140612', '45140600'], // Coleoptera Dytiscidae Hygrotus (Hygrotus) inaequalis
    ['45140613', '45140600'], // Coleoptera Dytiscidae Hygrotus (Hygrotus) quinquelineatus
    ['45140614', '45140600'], // Coleoptera Dytiscidae Hygrotus (Hygrotus) versicolor
    ['45140620', '45140600'], // Coleoptera Dytiscidae Hygrotus (Coelambus)
    ['45140621', '45140600'], // Coleoptera Dytiscidae Hygrotus (Coelambus) confluens
    ['45140622', '45140600'], // Coleoptera Dytiscidae Hygrotus (Coelambus) impressopunctatus
    ['45140623', '45140600'], // Coleoptera Dytiscidae Hygrotus (Coelambus) nigrolineatus
    ['45140624', '45140600'], // Coleoptera Dytiscidae Hygrotus (Coelambus) novemlineatus
    ['45140625', '45140600'], // Coleoptera Dytiscidae Hygrotus (Coelambus) parallellogrammus
    ['45140800', '45140000'], // Coleoptera Dytiscidae Hydroporus
    ['45140801', '45140800'], // Coleoptera Dytiscidae Hydroporus angustatus
    ['45140802', '45140800'], // Coleoptera Dytiscidae Hydroporus necopinatus
    ['45140803', '45140800'], // Coleoptera Dytiscidae Hydroporus discretus
    ['45140805', '45140800'], // Coleoptera Dytiscidae Hydroporus elongatulus
    ['45140806', '45140800'], // Coleoptera Dytiscidae Hydroporus erythrocephalus
    ['45140807', '45140800'], // Coleoptera Dytiscidae Hydroporus ferrugineus
    ['45140809', '45140800'], // Coleoptera Dytiscidae Hydroporus glabriusculus
    ['45140811', '45140800'], // Coleoptera Dytiscidae Hydroporus gyllenhalii
    ['45140812', '45140800'], // Coleoptera Dytiscidae Hydroporus incognitus
    ['45140813', '45140800'], // Coleoptera Dytiscidae Hydroporus longicornis
    ['45140814', '45140800'], // Coleoptera Dytiscidae Hydroporus longulus
    ['45140815', '45140800'], // Coleoptera Dytiscidae Hydroporus marginatus
    ['45140816', '45140800'], // Coleoptera Dytiscidae Hydroporus melanarius
    ['45140817', '45140800'], // Coleoptera Dytiscidae Hydroporus memnonius
    ['45140818', '45140800'], // Coleoptera Dytiscidae Hydroporus morio
    ['45140819', '45140800'], // Coleoptera Dytiscidae Hydroporus neglectus
    ['45140821', '45140800'], // Coleoptera Dytiscidae Hydroporus nigrita
    ['45140822', '45140800'], // Coleoptera Dytiscidae Hydroporus obscurus
    ['45140823', '45140800'], // Coleoptera Dytiscidae Hydroporus obsoletus
    ['45140824', '45140800'], // Coleoptera Dytiscidae Hydroporus palustris
    ['45140825', '45140800'], // Coleoptera Dytiscidae Hydroporus planus
    ['45140826', '45140800'], // Coleoptera Dytiscidae Hydroporus pubescens
    ['45140827', '45140800'], // Coleoptera Dytiscidae Hydroporus rufifrons
    ['45140828', '45140800'], // Coleoptera Dytiscidae Hydroporus scalesianus
    ['45140829', '45140800'], // Coleoptera Dytiscidae Hydroporus striola
    ['45140831', '45140800'], // Coleoptera Dytiscidae Hydroporus tessellatus
    ['45140832', '45140800'], // Coleoptera Dytiscidae Hydroporus tristis
    ['45140833', '45140800'], // Coleoptera Dytiscidae Hydroporus umbrosus
    ['45140900', '45140000'], // Coleoptera Dytiscidae Stictonectes
    ['45140901', '45140900'], // Coleoptera Dytiscidae Stictonectes lepidus
    ['45141000', '45140000'], // Coleoptera Dytiscidae Graptodytes
    ['45141001', '45141000'], // Coleoptera Dytiscidae Graptodytes bilineatus
    ['45141002', '45141000'], // Coleoptera Dytiscidae Graptodytes flavipes
    ['45141003', '45141000'], // Coleoptera Dytiscidae Graptodytes granularis
    ['45141004', '45141000'], // Coleoptera Dytiscidae Graptodytes pictus
    ['45141100', '45140000'], // Coleoptera Dytiscidae Porhydrus
    ['45141101', '45141100'], // Coleoptera Dytiscidae Porhydrus lineatus
    ['45141200', '45140000'], // Coleoptera Dytiscidae Deronectes
    ['45141201', '45141200'], // Coleoptera Dytiscidae Deronectes latus
    ['45141300', '45140000'], // Coleoptera Dytiscidae Nebrioporus
    ['45141310', '45141300'], // Coleoptera Dytiscidae Nebrioporus (Nebrioporus)
    ['45141311', '45141300'], // Coleoptera Dytiscidae Nebrioporus (Nebrioporus) assimilis
    ['45141312', '45141300'], // Coleoptera Dytiscidae Nebrioporus (Nebrioporus) depressus
    ['45141313', '45141300'], // Coleoptera Dytiscidae Nebrioporus (Nebrioporus) elegans
    ['4514131Z', '45141300'], // Coleoptera Dytiscidae Nebrioporus depressus group
    ['45141320', '45141300'], // Coleoptera Dytiscidae Nebrioporus (Zimmermannius)
    ['45141321', '45141300'], // Coleoptera Dytiscidae Nebrioporus (Zimmermannius) canaliculatus
    ['45141400', '45140000'], // Coleoptera Dytiscidae Stictotarsus
    ['45141401', '45141400'], // Coleoptera Dytiscidae Stictotarsus duodecimpustulatus
    ['45141402', '45141400'], // Coleoptera Dytiscidae Stictotarsus multilineatus
    ['45141500', '45140000'], // Coleoptera Dytiscidae Oreodytes
    ['45141501', '45141500'], // Coleoptera Dytiscidae Oreodytes davisii
    ['45141502', '45141500'], // Coleoptera Dytiscidae Oreodytes sanmarkii
    ['45141503', '45141500'], // Coleoptera Dytiscidae Oreodytes septentrionalis
    ['45141504', '45141500'], // Coleoptera Dytiscidae Oreodytes alpinus
    ['45141600', '45140000'], // Coleoptera Dytiscidae Scarodytes
    ['45141601', '45141600'], // Coleoptera Dytiscidae Scarodytes halensis
    ['45141700', '45140000'], // Coleoptera Dytiscidae Laccornis
    ['45141701', '45141700'], // Coleoptera Dytiscidae Laccornis oblongus
    ['45141800', '45140000'], // Coleoptera Dytiscidae Liopterus
    ['45141801', '45141800'], // Coleoptera Dytiscidae Liopterus haemorrhoidalis
    ['45141900', '45140000'], // Coleoptera Dytiscidae Platambus
    ['45141901', '45141900'], // Coleoptera Dytiscidae Platambus maculatus
    ['45142000', '45140000'], // Coleoptera Dytiscidae Agabus
    ['45142030', '45142000'], // Coleoptera Dytiscidae Agabus (Acatodes)
    ['45142031', '45142000'], // Coleoptera Dytiscidae Agabus (Acatodes) arcticus
    ['45142032', '45142000'], // Coleoptera Dytiscidae Agabus (Acatodes) congener
    ['45142033', '45142000'], // Coleoptera Dytiscidae Agabus (Acatodes) sturmii
    ['45142040', '45142000'], // Coleoptera Dytiscidae Agabus (Agabus)
    ['45142041', '45142000'], // Coleoptera Dytiscidae Agabus (Agabus) labiatus
    ['45142042', '45142000'], // Coleoptera Dytiscidae Agabus (Agabus) uliginosus
    ['45142043', '45142000'], // Coleoptera Dytiscidae Agabus (Agabus) undulatus
    ['45142050', '45142000'], // Coleoptera Dytiscidae Agabus (Gaurodytes)
    ['45142051', '45142000'], // Coleoptera Dytiscidae Agabus (Gaurodytes) affinis
    ['45142052', '45142000'], // Coleoptera Dytiscidae Agabus (Gaurodytes) biguttatus
    ['45142053', '45142000'], // Coleoptera Dytiscidae Agabus (Gaurodytes) bipustulatus
    ['45142054', '45142000'], // Coleoptera Dytiscidae Agabus (Gaurodytes) brunneus
    ['45142055', '45142000'], // Coleoptera Dytiscidae Agabus (Gaurodytes) conspersus
    ['45142056', '45142000'], // Coleoptera Dytiscidae Agabus (Gaurodytes) didymus
    ['45142057', '45142000'], // Coleoptera Dytiscidae Agabus (Gaurodytes) guttatus
    ['45142058', '45142000'], // Coleoptera Dytiscidae Agabus (Gaurodytes) melanarius
    ['45142059', '45142000'], // Coleoptera Dytiscidae Agabus (Gaurodytes) nebulosus
    ['4514205A', '45142000'], // Coleoptera Dytiscidae Agabus (Gaurodytes) paludosus
    ['4514205B', '45142000'], // Coleoptera Dytiscidae Agabus (Gaurodytes) striolatus
    ['4514205C', '45142000'], // Coleoptera Dytiscidae Agabus (Gaurodytes) unguicularis
    ['45142100', '45140000'], // Coleoptera Dytiscidae Ilybius
    ['45142101', '45142100'], // Coleoptera Dytiscidae Ilybius aenescens
    ['45142102', '45142100'], // Coleoptera Dytiscidae Ilybius ater
    ['45142103', '45142100'], // Coleoptera Dytiscidae Ilybius fenestratus
    ['45142104', '45142100'], // Coleoptera Dytiscidae Ilybius fuliginosus
    ['45142105', '45142100'], // Coleoptera Dytiscidae Ilybius guttiger
    ['45142106', '45142100'], // Coleoptera Dytiscidae Ilybius quadriguttatus
    ['45142107', '45142100'], // Coleoptera Dytiscidae Ilybius subaeneus
    ['45142108', '45142100'], // Coleoptera Dytiscidae Ilybius chalconatus
    ['45142109', '45142100'], // Coleoptera Dytiscidae Ilybius montanus
    ['4514210Z', '45142100'], // Coleoptera Dytiscidae Ilybius chalconatus group
    ['45142111', '45142100'], // Coleoptera Dytiscidae Ilybius wasastjernae
    ['45142200', '45140000'], // Coleoptera Dytiscidae Rhantus
    ['45142210', '45142200'], // Coleoptera Dytiscidae Rhantus (Nartus)
    ['45142211', '45142200'], // Coleoptera Dytiscidae Rhantus (Nartus) grapii
    ['45142220', '45142200'], // Coleoptera Dytiscidae Rhantus (Rhantus)
    ['45142221', '45142200'], // Coleoptera Dytiscidae Rhantus (Rhantus) bistriatus
    ['45142222', '45142200'], // Coleoptera Dytiscidae Rhantus (Rhantus) exsoletus
    ['45142223', '45142200'], // Coleoptera Dytiscidae Rhantus (Rhantus) frontalis
    ['45142224', '45142200'], // Coleoptera Dytiscidae Rhantus (Rhantus) suturalis
    ['45142225', '45142200'], // Coleoptera Dytiscidae Rhantus (Rhantus) suturellus
    ['45142300', '45140000'], // Coleoptera Dytiscidae Colymbetes
    ['45142301', '45142300'], // Coleoptera Dytiscidae Colymbetes fuscus
    ['45142400', '45140000'], // Coleoptera Dytiscidae Hydaticus
    ['45142402', '45142400'], // Coleoptera Dytiscidae Hydaticus seminiger
    ['45142403', '45142400'], // Coleoptera Dytiscidae Hydaticus transversalis
    ['45142500', '45140000'], // Coleoptera Dytiscidae Graphoderus
    ['45142501', '45142500'], // Coleoptera Dytiscidae Graphoderus bilineatus
    ['45142502', '45142500'], // Coleoptera Dytiscidae Graphoderus cinereus
    ['45142503', '45142500'], // Coleoptera Dytiscidae Graphoderus zonatus
    ['45142600', '45140000'], // Coleoptera Dytiscidae Acilius
    ['45142601', '45142600'], // Coleoptera Dytiscidae Acilius canaliculatus
    ['45142602', '45142600'], // Coleoptera Dytiscidae Acilius sulcatus
    ['45142700', '45140000'], // Coleoptera Dytiscidae Dytiscus
    ['45142701', '45142700'], // Coleoptera Dytiscidae Dytiscus circumcinctus
    ['45142702', '45142700'], // Coleoptera Dytiscidae Dytiscus circumflexus
    ['45142703', '45142700'], // Coleoptera Dytiscidae Dytiscus dimidiatus
    ['45142704', '45142700'], // Coleoptera Dytiscidae Dytiscus lapponicus
    ['45142705', '45142700'], // Coleoptera Dytiscidae Dytiscus marginalis
    ['45142706', '45142700'], // Coleoptera Dytiscidae Dytiscus semisulcatus
    ['45142800', '45140000'], // Coleoptera Dytiscidae Cybister
    ['45142801', '45142800'], // Coleoptera Dytiscidae Cybister lateralimarginalis
    ['45142900', '45140000'], // Coleoptera Dytiscidae Suphrodytes
    ['45142901', '45142900'], // Coleoptera Dytiscidae Suphrodytes dorsalis
    ['45142Z00', '45140000'], // Coleoptera Dytiscidae Agabus
    ['4514Y000', '45140000'], // Coleoptera Colymbetinae (including Agabinae and Copelatinae)
    ['4514Z000', '45140000'], // Coleoptera Hydroporinae
    ['45150000', '45000000'], // Coleoptera Gyrinidae
    ['45150200', '45150000'], // Coleoptera Gyrinidae Gyrinus
    ['45150201', '45150200'], // Coleoptera Gyrinidae Gyrinus aeratus
    ['45150202', '45150200'], // Coleoptera Gyrinidae Gyrinus paykulli
    ['45150203', '45150200'], // Coleoptera Gyrinidae Gyrinus caspius
    ['45150204', '45150200'], // Coleoptera Gyrinidae Gyrinus distinctus
    ['45150205', '45150200'], // Coleoptera Gyrinidae Gyrinus marinus
    ['45150206', '45150200'], // Coleoptera Gyrinidae Gyrinus minutus
    ['45150207', '45150200'], // Coleoptera Gyrinidae Gyrinus natator
    ['45150208', '45150200'], // Coleoptera Gyrinidae Gyrinus opacus
    ['45150209', '45150200'], // Coleoptera Gyrinidae Gyrinus substriatus
    ['4515020Z', '45150200'], // Coleoptera Gyrinidae Gyrinus natator group
    ['45150211', '45150200'], // Coleoptera Gyrinidae Gyrinus suffriani
    ['45150212', '45150200'], // Coleoptera Gyrinidae Gyrinus urinator
    ['45150400', '45150000'], // Coleoptera Gyrinidae Orectochilus
    ['45150401', '45150400'], // Coleoptera Gyrinidae Orectochilus villosus
    ['451Z0000', '45000000'], // Coleoptera Dytiscidae (including Noteridae)
    ['45200000', '45000000'], // Coleoptera Sphaeriusoidea
    ['45210000', '45000000'], // Coleoptera Sphaeriusidae
    ['45210100', '45210000'], // Coleoptera Sphaeriusidae Sphaerius
    ['45210101', '45210100'], // Coleoptera Sphaeriusidae Sphaerius acaroides
    ['45300000', '45000000'], // Coleoptera Hydrophiloidea
    ['45330000', '45000000'], // Coleoptera Helophoridae
    ['45330100', '45330000'], // Coleoptera Helophoridae Helophorus
    ['45330110', '45330100'], // Coleoptera Helophoridae Helophorus (Empleurus)
    ['45330111', '45330100'], // Coleoptera Helophoridae Helophorus (Empleurus) nubilus
    ['45330112', '45330100'], // Coleoptera Helophoridae Helophorus (Empleurus) porculus
    ['45330113', '45330100'], // Coleoptera Helophoridae Helophorus (Empleurus) rufipes
    ['45330120', '45330100'], // Coleoptera Helophoridae Helophorus (Cyphelophorus)
    ['45330121', '45330100'], // Coleoptera Helophoridae Helophorus (Cyphelophorus) tuberculatus
    ['45330130', '45330100'], // Coleoptera Helophoridae Helophorus (Trichohelophorus)
    ['45330131', '45330100'], // Coleoptera Helophoridae Helophorus (Trichohelophorus) alternans
    ['45330140', '45330100'], // Coleoptera Helophoridae Helophorus (Megahelophorus)
    ['45330141', '45330100'], // Coleoptera Helophoridae Helophorus (Megahelophorus) aequalis
    ['45330142', '45330100'], // Coleoptera Helophoridae Helophorus (Megahelophorus) grandis
    ['45330150', '45330100'], // Coleoptera Helophoridae Helophorus (Atracthelophorus)
    ['45330151', '45330100'], // Coleoptera Helophoridae Helophorus (Atracthelophorus) arvernicus
    ['45330152', '45330100'], // Coleoptera Helophoridae Helophorus (Atracthelophorus) brevipalpis
    ['45330160', '45330100'], // Coleoptera Helophoridae Helophorus (Helophorus)
    ['45330161', '45330100'], // Coleoptera Helophoridae Helophorus (Helophorus) dorsalis
    ['45330162', '45330100'], // Coleoptera Helophoridae Helophorus (Helophorus) flavipes
    ['45330163', '45330100'], // Coleoptera Helophoridae Helophorus (Helophorus) fulgidicollis
    ['45330164', '45330100'], // Coleoptera Helophoridae Helophorus (Helophorus) granularis
    ['45330165', '45330100'], // Coleoptera Helophoridae Helophorus (Helophorus) griseus
    ['45330166', '45330100'], // Coleoptera Helophoridae Helophorus (Helophorus) laticollis
    ['45330167', '45330100'], // Coleoptera Helophoridae Helophorus (Helophorus) longitarsis
    ['45330168', '45330100'], // Coleoptera Helophoridae Helophorus (Helophorus) minutus
    ['45330169', '45330100'], // Coleoptera Helophoridae Helophorus (Helophorus) nanus
    ['4533016A', '45330100'], // Coleoptera Helophoridae Helophorus (Helophorus) obscurus
    ['4533016B', '45330100'], // Coleoptera Helophoridae Helophorus (Helophorus) strigifrons
    ['45340000', '45000000'], // Coleoptera Georissidae
    ['45340100', '45340000'], // Coleoptera Georissidae Georissus
    ['45340101', '45340100'], // Coleoptera Georissidae Georissus crenulatus
    ['45350000', '45000000'], // Coleoptera Hydrophilidae
    ['45351000', '45350000'], // Coleoptera Hydrophilidae Paracymus
    ['45351001', '45351000'], // Coleoptera Hydrophilidae Paracymus aeneus
    ['45351002', '45351000'], // Coleoptera Hydrophilidae Paracymus scutellaris
    ['45351100', '45350000'], // Coleoptera Hydrophilidae Hydrobius
    ['45351101', '45351100'], // Coleoptera Hydrophilidae Hydrobius fuscipes
    ['45351200', '45350000'], // Coleoptera Hydrophilidae Limnoxenus
    ['45351201', '45351200'], // Coleoptera Hydrophilidae Limnoxenus niger
    ['45351300', '45350000'], // Coleoptera Hydrophilidae Anacaena
    ['45351301', '45351300'], // Coleoptera Hydrophilidae Anacaena bipustulata
    ['45351302', '45351300'], // Coleoptera Hydrophilidae Anacaena globulus
    ['45351303', '45351300'], // Coleoptera Hydrophilidae Anacaena limbata
    ['45351304', '45351300'], // Coleoptera Hydrophilidae Anacaena lutescens
    ['45351400', '45350000'], // Coleoptera Hydrophilidae Laccobius
    ['45351410', '45351400'], // Coleoptera Hydrophilidae Laccobius (Laccobius)
    ['45351411', '45351400'], // Coleoptera Hydrophilidae Laccobius (Laccobius) colon
    ['45351412', '45351400'], // Coleoptera Hydrophilidae Laccobius (Laccobius) minutus
    ['45351420', '45351400'], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius)
    ['45351421', '45351400'], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) atratus
    ['45351422', '45351400'], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) ytenensis
    ['45351423', '45351400'], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) bipunctatus
    ['45351425', '45351400'], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) simulatrix
    ['45351426', '45351400'], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) sinuatus
    ['45351427', '45351400'], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) striatulus
    ['45351600', '45350000'], // Coleoptera Hydrophilidae Helochares
    ['45351601', '45351600'], // Coleoptera Hydrophilidae Helochares lividus
    ['45351602', '45351600'], // Coleoptera Hydrophilidae Helochares obscurus
    ['45351603', '45351600'], // Coleoptera Hydrophilidae Helochares punctatus
    ['45351700', '45350000'], // Coleoptera Hydrophilidae Enochrus
    ['45351701', '45351700'], // Coleoptera Hydrophilidae Enochrus affinis
    ['45351702', '45351700'], // Coleoptera Hydrophilidae Enochrus bicolor
    ['45351703', '45351700'], // Coleoptera Hydrophilidae Enochrus coarctatus
    ['45351705', '45351700'], // Coleoptera Hydrophilidae Enochrus melanocephalus
    ['45351706', '45351700'], // Coleoptera Hydrophilidae Enochrus ochropterus
    ['45351707', '45351700'], // Coleoptera Hydrophilidae Enochrus quadripunctatus
    ['45351708', '45351700'], // Coleoptera Hydrophilidae Enochrus testaceus
    ['45351709', '45351700'], // Coleoptera Hydrophilidae Enochrus fuscipennis
    ['45351711', '45351700'], // Coleoptera Hydrophilidae Enochrus halophilus
    ['45351712', '45351700'], // Coleoptera Hydrophilidae Enochrus nigritus
    ['45352000', '45350000'], // Coleoptera Hydrophilidae Cymbiodyta
    ['45352001', '45352000'], // Coleoptera Hydrophilidae Cymbiodyta marginellus
    ['45352100', '45350000'], // Coleoptera Hydrophilidae Chaetarthria
    ['45352101', '45352100'], // Coleoptera Hydrophilidae Chaetarthria seminulum
    ['45352103', '45352100'], // Coleoptera Hydrophilidae Chaetarthria simillima
    ['45352200', '45350000'], // Coleoptera Hydrophilidae Hydrochara
    ['45352201', '45352200'], // Coleoptera Hydrophilidae Hydrochara caraboides
    ['45352300', '45350000'], // Coleoptera Hydrophilidae Hydrophilus
    ['45352301', '45352300'], // Coleoptera Hydrophilidae Hydrophilus piceus
    ['45352400', '45350000'], // Coleoptera Hydrophilidae Berosus
    ['45352410', '45352400'], // Coleoptera Hydrophilidae Berosus (Berosus)
    ['45352411', '45352400'], // Coleoptera Hydrophilidae Berosus (Berosus) affinis
    ['45352412', '45352400'], // Coleoptera Hydrophilidae Berosus (Berosus) luridus
    ['45352413', '45352400'], // Coleoptera Hydrophilidae Berosus (Berosus) signaticollis
    ['45352420', '45352400'], // Coleoptera Hydrophilidae Berosus (Enoplurus)
    ['45352421', '45352400'], // Coleoptera Hydrophilidae Berosus (Enoplurus) fulvus
    ['45353000', '45350000'], // Coleoptera Hydrophilidae Coelostoma
    ['45353001', '45353000'], // Coleoptera Hydrophilidae Coelostoma orbiculare
    ['45353100', '45350000'], // Coleoptera Hydrophilidae Cercyon
    ['45353130', '45353100'], // Coleoptera Hydrophilidae Cercyon (Paracercyon)
    ['45353131', '45353100'], // Coleoptera Hydrophilidae Cercyon (Paracercyon) analis
    ['45353140', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon)
    ['45353141', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) alpinus
    ['45353142', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) nigriceps
    ['45353143', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) bifenestratus
    ['45353144', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) convexiusculus
    ['45353145', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) depressus
    ['45353146', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) granarius
    ['45353147', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) haemorrhoidalis
    ['45353148', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) impressus
    ['45353149', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) laminatus
    ['4535314A', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) lateralis
    ['4535314B', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) littoralis
    ['4535314C', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) marinus
    ['4535314D', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) melanocephalus
    ['4535314E', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) obsoletus
    ['4535314F', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) pygmaeus
    ['4535314G', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) quisquilius
    ['4535314H', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) sternalis
    ['4535314J', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) terminatus
    ['4535314K', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) tristis
    ['4535314L', '45353100'], // Coleoptera Hydrophilidae Cercyon (Cercyon) unipunctatus
    ['45353150', '45353100'], // Coleoptera Hydrophilidae Cercyon (Dicyrtocercyon)
    ['45353151', '45353100'], // Coleoptera Hydrophilidae Cercyon (Dicyrtocercyon) ustulatus
    ['45353200', '45350000'], // Coleoptera Hydrophilidae Cryptopleurum
    ['45353201', '45353200'], // Coleoptera Hydrophilidae Cryptopleurum crenatum
    ['45353202', '45353200'], // Coleoptera Hydrophilidae Cryptopleurum minutum
    ['45353203', '45353200'], // Coleoptera Hydrophilidae Cryptopleurum subtile
    ['45353300', '45350000'], // Coleoptera Hydrophilidae Megasternum
    ['45353301', '45353300'], // Coleoptera Hydrophilidae Megasternum concinnum
    ['45353400', '45350000'], // Coleoptera Hydrophilidae Sphaeridium
    ['45353401', '45353400'], // Coleoptera Hydrophilidae Sphaeridium bipustulatum
    ['45353402', '45353400'], // Coleoptera Hydrophilidae Sphaeridium lunatum
    ['45353403', '45353400'], // Coleoptera Hydrophilidae Sphaeridium marginatum
    ['45353404', '45353400'], // Coleoptera Hydrophilidae Sphaeridium scarabaeoides
    ['45353500', '45350000'], // Coleoptera Hydrophilidae Dactylosternum
    ['45353501', '45353500'], // Coleoptera Hydrophilidae Dactylosternum abdominale
    ['45360000', '45000000'], // Coleoptera Hydrochidae
    ['45360100', '45360000'], // Coleoptera Hydrochidae Hydrochus
    ['45360101', '45360100'], // Coleoptera Hydrochidae Hydrochus angustatus
    ['45360102', '45360100'], // Coleoptera Hydrochidae Hydrochus brevis
    ['45360103', '45360100'], // Coleoptera Hydrochidae Hydrochus crenatus
    ['45360104', '45360100'], // Coleoptera Hydrochidae Hydrochus elongatus
    ['45360105', '45360100'], // Coleoptera Hydrochidae Hydrochus ignicollis
    ['45360106', '45360100'], // Coleoptera Hydrochidae Hydrochus nitidicollis
    ['45360107', '45360100'], // Coleoptera Hydrochidae Hydrochus megaphallus
    ['45370000', '45000000'], // Coleoptera Spercheidae
    ['45370100', '45370000'], // Coleoptera Spercheidae Spercheus
    ['45370101', '45370100'], // Coleoptera Spercheidae Spercheus emarginatus
    ['453Y0000', '45000000'], // Coleoptera Hydrophilidae (including Helophoridae, Georissidae and Hydrochidae)
    ['453Z0000', '45000000'], // Coleoptera Hydrophilidae (including Hydraenidae, Helophoridae, Georissidae and Hydrochidae)
    ['45400000', '45000000'], // Coleoptera Staphylinoidea
    ['45410000', '45000000'], // Coleoptera Hydraenidae
    ['45410100', '45410000'], // Coleoptera Hydraenidae Ochthebius
    ['45410120', '45410100'], // Coleoptera Hydraenidae Ochthebius (Asiobates)
    ['45410121', '45410100'], // Coleoptera Hydraenidae Ochthebius (Asiobates) auriculatus
    ['45410122', '45410100'], // Coleoptera Hydraenidae Ochthebius (Asiobates) bicolon
    ['45410123', '45410100'], // Coleoptera Hydraenidae Ochthebius (Asiobates) dilatatus
    ['45410130', '45410100'], // Coleoptera Hydraenidae Ochthebius (Homalochthebius)
    ['45410131', '45410100'], // Coleoptera Hydraenidae Ochthebius (Homalochthebius) aeneus
    ['45410132', '45410100'], // Coleoptera Hydraenidae Ochthebius (Homalochthebius) minimus
    ['45410133', '45410100'], // Coleoptera Hydraenidae Ochthebius (Homalochthebius) lejolisii
    ['45410140', '45410100'], // Coleoptera Hydraenidae Ochthebius (Hymenodes)
    ['45410141', '45410100'], // Coleoptera Hydraenidae Ochthebius (Hymenodes) nanus
    ['45410142', '45410100'], // Coleoptera Hydraenidae Ochthebius (Hymenodes) poweri
    ['45410143', '45410100'], // Coleoptera Hydraenidae Ochthebius (Hymenodes) punctatus
    ['45410150', '45410100'], // Coleoptera Hydraenidae Ochthebius (Ochthebius)
    ['45410151', '45410100'], // Coleoptera Hydraenidae Ochthebius (Ochthebius) lenensis
    ['45410152', '45410100'], // Coleoptera Hydraenidae Ochthebius (Ochthebius) marinus
    ['45410153', '45410100'], // Coleoptera Hydraenidae Ochthebius (Ochthebius) pusillus
    ['45410154', '45410100'], // Coleoptera Hydraenidae Ochthebius (Ochthebius) viridis
    ['45410200', '45410000'], // Coleoptera Hydraenidae Hydraena
    ['45410201', '45410200'], // Coleoptera Hydraenidae Hydraena britteni
    ['45410202', '45410200'], // Coleoptera Hydraenidae Hydraena gracilis
    ['45410203', '45410200'], // Coleoptera Hydraenidae Hydraena flavipes
    ['45410204', '45410200'], // Coleoptera Hydraenidae Hydraena nigrita
    ['45410205', '45410200'], // Coleoptera Hydraenidae Hydraena palustris
    ['45410206', '45410200'], // Coleoptera Hydraenidae Hydraena pulchella
    ['45410207', '45410200'], // Coleoptera Hydraenidae Hydraena pygmaea
    ['45410208', '45410200'], // Coleoptera Hydraenidae Hydraena riparia
    ['45410209', '45410200'], // Coleoptera Hydraenidae Hydraena rufipes
    ['45410211', '45410200'], // Coleoptera Hydraenidae Hydraena testacea
    ['45410300', '45410000'], // Coleoptera Hydraenidae Limnebius
    ['45410301', '45410300'], // Coleoptera Hydraenidae Limnebius aluta
    ['45410302', '45410300'], // Coleoptera Hydraenidae Limnebius crinifer
    ['45410303', '45410300'], // Coleoptera Hydraenidae Limnebius nitidus
    ['45410304', '45410300'], // Coleoptera Hydraenidae Limnebius papposus
    ['45410305', '45410300'], // Coleoptera Hydraenidae Limnebius truncatellus
    ['45410400', '45410000'], // Coleoptera Hydraenidae Aulacochthebius
    ['45410401', '45410400'], // Coleoptera Hydraenidae Aulacochthebius exaratus
    ['45410500', '45410000'], // Coleoptera Hydraenidae Enicocerus
    ['45410501', '45410500'], // Coleoptera Hydraenidae Enicocerus exsculptus
    ['45410Z00', '45410000'], // Coleoptera Hydraenidae Ochthebius
    ['45500000', '45000000'], // Coleoptera Scirtoidea
    ['45510000', '45000000'], // Coleoptera Scirtidae
    ['45510100', '45510000'], // Coleoptera Scirtidae Elodes
    ['45510102', '45510100'], // Coleoptera Scirtidae Elodes minuta
    ['45510103', '45510100'], // Coleoptera Scirtidae Elodes elongata
    ['45510104', '45510100'], // Coleoptera Scirtidae Elodes pseudominuta
    ['45510105', '45510100'], // Coleoptera Scirtidae Elodes tricuspis
    ['45510200', '45510000'], // Coleoptera Scirtidae Microcara
    ['45510201', '45510200'], // Coleoptera Scirtidae Microcara testacea
    ['45510300', '45510000'], // Coleoptera Scirtidae Cyphon
    ['45510301', '45510300'], // Coleoptera Scirtidae Cyphon coarctatus
    ['45510302', '45510300'], // Coleoptera Scirtidae Cyphon hilaris
    ['45510303', '45510300'], // Coleoptera Scirtidae Cyphon ochraceus
    ['45510304', '45510300'], // Coleoptera Scirtidae Cyphon padi
    ['45510305', '45510300'], // Coleoptera Scirtidae Cyphon palustris
    ['45510306', '45510300'], // Coleoptera Scirtidae Cyphon laevipennis
    ['45510307', '45510300'], // Coleoptera Scirtidae Cyphon pubescens
    ['45510308', '45510300'], // Coleoptera Scirtidae Cyphon punctipennis
    ['45510309', '45510300'], // Coleoptera Scirtidae Cyphon variabilis
    ['45510311', '45510300'], // Coleoptera Scirtidae Cyphon kongsbergensis
    ['45510400', '45510000'], // Coleoptera Scirtidae Prionocyphon
    ['45510401', '45510400'], // Coleoptera Scirtidae Prionocyphon serricornis
    ['45510500', '45510000'], // Coleoptera Scirtidae Hydrocyphon
    ['45510501', '45510500'], // Coleoptera Scirtidae Hydrocyphon deflexicollis
    ['45510600', '45510000'], // Coleoptera Scirtidae Scirtes
    ['45510601', '45510600'], // Coleoptera Scirtidae Scirtes hemisphaericus
    ['45510602', '45510600'], // Coleoptera Scirtidae Scirtes orbicularis
    ['45510700', '45510000'], // Coleoptera Scirtidae Odeles
    ['45510701', '45510700'], // Coleoptera Scirtidae Odeles marginata
    ['45510Z00', '45510000'], // Coleoptera Scirtidae Elodes
    ['45600000', '45000000'], // Coleoptera Byrrhoidea
    ['45610000', '45000000'], // Coleoptera Psephenidae
    ['45610100', '45610000'], // Coleoptera Psephenidae Eubria
    ['45610101', '45610100'], // Coleoptera Psephenidae Eubria palustris
    ['45620000', '45000000'], // Coleoptera Dryopidae
    ['45620100', '45620000'], // Coleoptera Dryopidae Pomatinus
    ['45620101', '45620100'], // Coleoptera Dryopidae Pomatinus substriatus
    ['45620200', '45620000'], // Coleoptera Dryopidae Dryops
    ['45620210', '45620200'], // Coleoptera Dryopidae Dryops (Dryops)
    ['45620211', '45620200'], // Coleoptera Dryopidae Dryops (Dryops) anglicanus
    ['45620212', '45620200'], // Coleoptera Dryopidae Dryops (Dryops) auriculatus
    ['45620213', '45620200'], // Coleoptera Dryopidae Dryops (Dryops) ernesti
    ['45620214', '45620200'], // Coleoptera Dryopidae Dryops (Dryops) griseus
    ['45620215', '45620200'], // Coleoptera Dryopidae Dryops (Dryops) luridus
    ['45620216', '45620200'], // Coleoptera Dryopidae Dryops (Dryops) striatellus
    ['45620217', '45620200'], // Coleoptera Dryopidae Dryops (Dryops) similaris
    ['45620220', '45620200'], // Coleoptera Dryopidae Dryops (Yrdops)
    ['45620221', '45620200'], // Coleoptera Dryopidae Dryops (Yrdops) nitidulus
    ['45630000', '45000000'], // Coleoptera Elmidae
    ['45630100', '45630000'], // Coleoptera Elmidae Elmis
    ['45630101', '45630100'], // Coleoptera Elmidae Elmis aenea
    ['45630200', '45630000'], // Coleoptera Elmidae Esolus
    ['45630201', '45630200'], // Coleoptera Elmidae Esolus parallelepipedus
    ['45630300', '45630000'], // Coleoptera Elmidae Limnius
    ['45630301', '45630300'], // Coleoptera Elmidae Limnius volckmari
    ['45630400', '45630000'], // Coleoptera Elmidae Macronychus
    ['45630401', '45630400'], // Coleoptera Elmidae Macronychus quadrituberculatus
    ['45630500', '45630000'], // Coleoptera Elmidae Normandia
    ['45630501', '45630500'], // Coleoptera Elmidae Normandia nitens
    ['45630600', '45630000'], // Coleoptera Elmidae Oulimnius
    ['45630601', '45630600'], // Coleoptera Elmidae Oulimnius major
    ['45630602', '45630600'], // Coleoptera Elmidae Oulimnius rivularis
    ['45630603', '45630600'], // Coleoptera Elmidae Oulimnius troglodytes
    ['45630604', '45630600'], // Coleoptera Elmidae Oulimnius tuberculatus
    ['45630700', '45630000'], // Coleoptera Elmidae Riolus
    ['45630701', '45630700'], // Coleoptera Elmidae Riolus cupreus
    ['45630702', '45630700'], // Coleoptera Elmidae Riolus subviolaceus
    ['45630800', '45630000'], // Coleoptera Elmidae Stenelmis
    ['45630801', '45630800'], // Coleoptera Elmidae Stenelmis canaliculata
    ['45640000', '45000000'], // Coleoptera Limnichidae
    ['45640100', '45640000'], // Coleoptera Limnichidae Limnichus
    ['45640101', '45640100'], // Coleoptera Limnichidae Limnichus pygmaeus
    ['45650000', '45000000'], // Coleoptera Heteroceridae
    ['45650100', '45650000'], // Coleoptera Heteroceridae Heterocerus
    ['45650101', '45650100'], // Coleoptera Heteroceridae Heterocerus flexuosus
    ['45650102', '45650100'], // Coleoptera Heteroceridae Heterocerus fossor
    ['45650103', '45650100'], // Coleoptera Heteroceridae Heterocerus fusculus
    ['45650105', '45650100'], // Coleoptera Heteroceridae Heterocerus marginatus
    ['45650107', '45650100'], // Coleoptera Heteroceridae Heterocerus obsoletus
    ['45650108', '45650100'], // Coleoptera Heteroceridae Heterocerus fenestratus
    ['45650200', '45650000'], // Coleoptera Heteroceridae Augyles
    ['45650201', '45650200'], // Coleoptera Heteroceridae Augyles hispidulus
    ['45650202', '45650200'], // Coleoptera Heteroceridae Augyles maritimus
    ['45700000', '45000000'], // Coleoptera Chrysomeloidea
    ['45710000', '45000000'], // Coleoptera Chrysomelidae
    ['45710100', '45710000'], // Coleoptera Chrysomelidae Macroplea
    ['45710101', '45710100'], // Coleoptera Chrysomelidae Macroplea appendiculata
    ['45710102', '45710100'], // Coleoptera Chrysomelidae Macroplea mutica
    ['45710200', '45710000'], // Coleoptera Chrysomelidae Donacia
    ['45710201', '45710200'], // Coleoptera Chrysomelidae Donacia aquatica
    ['45710202', '45710200'], // Coleoptera Chrysomelidae Donacia bicolora
    ['45710203', '45710200'], // Coleoptera Chrysomelidae Donacia cinerea
    ['45710204', '45710200'], // Coleoptera Chrysomelidae Donacia clavipes
    ['45710205', '45710200'], // Coleoptera Chrysomelidae Donacia crassipes
    ['45710206', '45710200'], // Coleoptera Chrysomelidae Donacia dentata
    ['45710207', '45710200'], // Coleoptera Chrysomelidae Donacia impressa
    ['45710208', '45710200'], // Coleoptera Chrysomelidae Donacia marginata
    ['45710209', '45710200'], // Coleoptera Chrysomelidae Donacia obscura
    ['45710211', '45710200'], // Coleoptera Chrysomelidae Donacia semicuprea
    ['45710212', '45710200'], // Coleoptera Chrysomelidae Donacia simplex
    ['45710213', '45710200'], // Coleoptera Chrysomelidae Donacia sparganii
    ['45710214', '45710200'], // Coleoptera Chrysomelidae Donacia thalassina
    ['45710215', '45710200'], // Coleoptera Chrysomelidae Donacia versicolorea
    ['45710216', '45710200'], // Coleoptera Chrysomelidae Donacia vulgaris
    ['45710300', '45710000'], // Coleoptera Chrysomelidae Plateumaris
    ['45710302', '45710300'], // Coleoptera Chrysomelidae Plateumaris braccata
    ['45710303', '45710300'], // Coleoptera Chrysomelidae Plateumaris discolor
    ['45710304', '45710300'], // Coleoptera Chrysomelidae Plateumaris sericea
    ['45710305', '45710300'], // Coleoptera Chrysomelidae Plateumaris affinis
    ['45710400', '45710000'], // Coleoptera Chrysomelidae Phaedon
    ['45710401', '45710400'], // Coleoptera Chrysomelidae Phaedon armoraciae
    ['45710Z00', '45710000'], // Coleoptera Chrysomelidae Donacia
    ['45800000', '45000000'], // Coleoptera Curculionoidea
    ['45810000', '45000000'], // Coleoptera Curculionidae
    ['45810100', '45810000'], // Coleoptera Curculionidae Lixus
    ['45810110', '45810100'], // Coleoptera Curculionidae Lixus (Lixus)
    ['45810111', '45810100'], // Coleoptera Curculionidae Lixus (Lixus) paraplecticus
    ['45810200', '45810000'], // Coleoptera Curculionidae Hypera
    ['45810210', '45810200'], // Coleoptera Curculionidae Hypera (Hypera)
    ['45810211', '45810200'], // Coleoptera Curculionidae Hypera (Hypera) suspiciosa
    ['45810220', '45810200'], // Coleoptera Curculionidae Hypera (Eririnomorphus)
    ['45810221', '45810200'], // Coleoptera Curculionidae Hypera (Eririnomorphus) pollux
    ['45810222', '45810200'], // Coleoptera Curculionidae Hypera (Eririnomorphus) arundinis
    ['45810223', '45810200'], // Coleoptera Curculionidae Hypera (Eririnomorphus) rumicis
    ['45810300', '45810000'], // Coleoptera Curculionidae Cionus
    ['45810301', '45810300'], // Coleoptera Curculionidae Cionus alauda
    ['45810302', '45810300'], // Coleoptera Curculionidae Cionus hortulanus
    ['45810303', '45810300'], // Coleoptera Curculionidae Cionus scrophulariae
    ['45810400', '45810000'], // Coleoptera Curculionidae Cleopus
    ['45810401', '45810400'], // Coleoptera Curculionidae Cleopus pulchellus
    ['45810500', '45810000'], // Coleoptera Curculionidae Tanysphyrus
    ['45810501', '45810500'], // Coleoptera Curculionidae Tanysphyrus lemnae
    ['45810600', '45810000'], // Coleoptera Curculionidae Bagous
    ['45810630', '45810600'], // Coleoptera Curculionidae Bagous (Bagous)
    ['45810631', '45810600'], // Coleoptera Curculionidae Bagous (Bagous) argillaceus
    ['45810632', '45810600'], // Coleoptera Curculionidae Bagous (Bagous) binodulus
    ['45810633', '45810600'], // Coleoptera Curculionidae Bagous (Bagous) brevis
    ['45810634', '45810600'], // Coleoptera Curculionidae Bagous (Bagous) collignensis
    ['45810635', '45810600'], // Coleoptera Curculionidae Bagous (Bagous) czwalinae
    ['45810636', '45810600'], // Coleoptera Curculionidae Bagous (Bagous) diglyptus
    ['45810637', '45810600'], // Coleoptera Curculionidae Bagous (Bagous) frit
    ['45810638', '45810600'], // Coleoptera Curculionidae Bagous (Bagous) limosus
    ['45810639', '45810600'], // Coleoptera Curculionidae Bagous (Bagous) longitarsis
    ['4581063A', '45810600'], // Coleoptera Curculionidae Bagous (Bagous) lutulosus
    ['4581063B', '45810600'], // Coleoptera Curculionidae Bagous (Bagous) nodulosus
    ['4581063C', '45810600'], // Coleoptera Curculionidae Bagous (Bagous) subcarinatus
    ['4581063D', '45810600'], // Coleoptera Curculionidae Bagous (Bagous) tempestivus
    ['45810640', '45810600'], // Coleoptera Curculionidae Bagous (Abagous)
    ['45810641', '45810600'], // Coleoptera Curculionidae Bagous (Abagous) glabrirostris
    ['45810642', '45810600'], // Coleoptera Curculionidae Bagous (Abagous) lutosus
    ['45810643', '45810600'], // Coleoptera Curculionidae Bagous (Abagous) lutulentus
    ['45810644', '45810600'], // Coleoptera Curculionidae Bagous (Abagous) puncticollis
    ['45810645', '45810600'], // Coleoptera Curculionidae Bagous (Abagous) robustus
    ['45810650', '45810600'], // Coleoptera Curculionidae Bagous (Cyprus)
    ['45810651', '45810600'], // Coleoptera Curculionidae Bagous (Cyprus) tubulus
    ['45810660', '45810600'], // Coleoptera Curculionidae Bagous (Ephimeropus)
    ['45810661', '45810600'], // Coleoptera Curculionidae Bagous (Ephimeropus) petro
    ['45810670', '45810600'], // Coleoptera Curculionidae Bagous (Hydronomus)
    ['45810671', '45810600'], // Coleoptera Curculionidae Bagous (Hydronomus) alismatis
    ['45810Y00', '45810000'], // Coleoptera Curculionidae Phytobius
    ['45811100', '45810000'], // Coleoptera Curculionidae Mononychus
    ['45811101', '45811100'], // Coleoptera Curculionidae Mononychus punctumalbum
    ['45811200', '45810000'], // Coleoptera Curculionidae Ceutorhynchus
    ['45811300', '45810000'], // Coleoptera Curculionidae Eubrychius
    ['45811301', '45811300'], // Coleoptera Curculionidae Eubrychius velutus
    ['45811500', '45810000'], // Coleoptera Curculionidae Rhinoncus
    ['45811501', '45811500'], // Coleoptera Curculionidae Rhinoncus albicinctus
    ['45811600', '45810000'], // Coleoptera Curculionidae Phytobius
    ['45811602', '45811600'], // Coleoptera Curculionidae Phytobius leucogaster
    ['45811700', '45810000'], // Coleoptera Curculionidae Amalorrhynchus
    ['45811701', '45811700'], // Coleoptera Curculionidae Amalorrhynchus melanarius
    ['45811800', '45810000'], // Coleoptera Curculionidae Drupenatus
    ['45811801', '45811800'], // Coleoptera Curculionidae Drupenatus nasturtii
    ['45811900', '45810000'], // Coleoptera Curculionidae Tapeinotus
    ['45811901', '45811900'], // Coleoptera Curculionidae Tapeinotus sellatus
    ['45812000', '45810000'], // Coleoptera Curculionidae Poophagus
    ['45812001', '45812000'], // Coleoptera Curculionidae Poophagus sisymbrii
    ['45812100', '45810000'], // Coleoptera Curculionidae Limnobaris
    ['45812101', '45812100'], // Coleoptera Curculionidae Limnobaris dolorosa
    ['45812102', '45812100'], // Coleoptera Curculionidae Limnobaris t-album
    ['45812200', '45810000'], // Coleoptera Curculionidae Mecinus
    ['45812201', '45812200'], // Coleoptera Curculionidae Mecinus collaris
    ['45812300', '45810000'], // Coleoptera Curculionidae Gymnetron
    ['45812301', '45812300'], // Coleoptera Curculionidae Gymnetron beccabungae
    ['45812302', '45812300'], // Coleoptera Curculionidae Gymnetron veronicae
    ['45812303', '45812300'], // Coleoptera Curculionidae Gymnetron villosulum
    ['45812600', '45810000'], // Coleoptera Curculionidae Pelenomus
    ['45812601', '45812600'], // Coleoptera Curculionidae Pelenomus canaliculatus
    ['45812602', '45812600'], // Coleoptera Curculionidae Pelenomus comari
    ['45812603', '45812600'], // Coleoptera Curculionidae Pelenomus olssoni
    ['45812604', '45812600'], // Coleoptera Curculionidae Pelenomus quadricorniger
    ['45812605', '45812600'], // Coleoptera Curculionidae Pelenomus waltoni
    ['45812700', '45810000'], // Coleoptera Curculionidae Neophytobius
    ['45812701', '45812700'], // Coleoptera Curculionidae Neophytobius muricatus
    ['45812702', '45812700'], // Coleoptera Curculionidae Neophytobius quadrinodosus
    ['45812800', '45810000'], // Coleoptera Curculionidae Datonychus
    ['45812801', '45812800'], // Coleoptera Curculionidae Datonychus melanostictus
    ['45820000', '45000000'], // Coleoptera Apionidae
    ['45820100', '45820000'], // Coleoptera Apionidae Apion
    ['45830000', '45000000'], // Coleoptera Erirhinidae
    ['45830100', '45830000'], // Coleoptera Erirhinidae Grypus
    ['45830101', '45830100'], // Coleoptera Erirhinidae Grypus equiseti
    ['45830200', '45830000'], // Coleoptera Erirhinidae Notaris
    ['45830201', '45830200'], // Coleoptera Erirhinidae Notaris acridulus
    ['45830202', '45830200'], // Coleoptera Erirhinidae Notaris aethiops
    ['45830203', '45830200'], // Coleoptera Erirhinidae Notaris scirpi
    ['45830300', '45830000'], // Coleoptera Erirhinidae Thryogenes
    ['45830301', '45830300'], // Coleoptera Erirhinidae Thryogenes festucae
    ['45830302', '45830300'], // Coleoptera Erirhinidae Thryogenes nereis
    ['45830400', '45830000'], // Coleoptera Erirhinidae Tournotaris
    ['45830401', '45830400'], // Coleoptera Erirhinidae Tournotaris bimaculatus
    ['45830500', '45830000'], // Coleoptera Erirhinidae Stenopelmus
    ['45830501', '45830500'], // Coleoptera Erirhinidae Stenopelmus rufinasus
    ['45830Z00', '45830000'], // Coleoptera Erirhinidae Notaris
    ['46000000', undefined], // Megaloptera
    ['46100000', '46000000'], // Megaloptera Sialoidea
    ['46110000', '46000000'], // Megaloptera Sialidae
    ['46110100', '46110000'], // Megaloptera Sialidae Sialis
    ['46110101', '46110100'], // Megaloptera Sialidae Sialis fuliginosa
    ['46110102', '46110100'], // Megaloptera Sialidae Sialis lutaria
    ['46110103', '46110100'], // Megaloptera Sialidae Sialis nigripes
    ['47000000', undefined], // Neuroptera
    ['47100000', '47000000'], // Neuroptera Planipennia
    ['47110000', '47000000'], // Neuroptera Osmylidae
    ['47110100', '47110000'], // Neuroptera Osmylidae Osmylus
    ['47110101', '47110100'], // Neuroptera Osmylidae Osmylus fulvicephalus
    ['47120000', '47000000'], // Neuroptera Sisyridae
    ['47120100', '47120000'], // Neuroptera Sisyridae Sisyra
    ['47120101', '47120100'], // Neuroptera Sisyridae Sisyra dalii
    ['47120102', '47120100'], // Neuroptera Sisyridae Sisyra fuscata
    ['47120103', '47120100'], // Neuroptera Sisyridae Sisyra terminalis
    ['48000000', undefined], // Trichoptera
    ['48100000', '48000000'], // Trichoptera Rhyacophiloidea
    ['48110000', '48000000'], // Trichoptera Rhyacophilidae
    ['48110100', '48110000'], // Trichoptera Rhyacophilidae Rhyacophila
    ['48110101', '48110100'], // Trichoptera Rhyacophilidae Rhyacophila dorsalis
    ['48110102', '48110100'], // Trichoptera Rhyacophilidae Rhyacophila munda
    ['48110103', '48110100'], // Trichoptera Rhyacophilidae Rhyacophila obliterata
    ['48110104', '48110100'], // Trichoptera Rhyacophilidae Rhyacophila fasciata
    ['48120000', '48000000'], // Trichoptera Glossosomatidae
    ['48120100', '48120000'], // Trichoptera Glossosomatidae Glossosoma
    ['48120101', '48120100'], // Trichoptera Glossosomatidae Glossosoma boltoni
    ['48120102', '48120100'], // Trichoptera Glossosomatidae Glossosoma conformis
    ['48120103', '48120100'], // Trichoptera Glossosomatidae Glossosoma intermedium
    ['48120200', '48120000'], // Trichoptera Glossosomatidae Agapetus
    ['48120201', '48120200'], // Trichoptera Glossosomatidae Agapetus delicatulus
    ['48120202', '48120200'], // Trichoptera Glossosomatidae Agapetus fuscipes
    ['48120203', '48120200'], // Trichoptera Glossosomatidae Agapetus ochripes
    ['48120300', '48120000'], // Trichoptera Glossosomatidae Synagapetus
    ['48120301', '48120300'], // Trichoptera Glossosomatidae Synagapetus dubitans
    ['48130000', '48000000'], // Trichoptera Hydroptilidae
    ['48130100', '48130000'], // Trichoptera Hydroptilidae Agraylea
    ['48130101', '48130100'], // Trichoptera Hydroptilidae Agraylea multipunctata
    ['48130102', '48130100'], // Trichoptera Hydroptilidae Agraylea sexmaculata
    ['48130200', '48130000'], // Trichoptera Hydroptilidae Allotrichia
    ['48130201', '48130200'], // Trichoptera Hydroptilidae Allotrichia pallicornis
    ['48130300', '48130000'], // Trichoptera Hydroptilidae Hydroptila
    ['48130301', '48130300'], // Trichoptera Hydroptilidae Hydroptila angulata
    ['48130302', '48130300'], // Trichoptera Hydroptilidae Hydroptila cornuta
    ['48130303', '48130300'], // Trichoptera Hydroptilidae Hydroptila forcipata
    ['48130304', '48130300'], // Trichoptera Hydroptilidae Hydroptila lotensis
    ['48130305', '48130300'], // Trichoptera Hydroptilidae Hydroptila martini
    ['48130306', '48130300'], // Trichoptera Hydroptilidae Hydroptila occulta
    ['48130307', '48130300'], // Trichoptera Hydroptilidae Hydroptila pulchricornis
    ['48130308', '48130300'], // Trichoptera Hydroptilidae Hydroptila simulans
    ['48130309', '48130300'], // Trichoptera Hydroptilidae Hydroptila sparsa
    ['48130311', '48130300'], // Trichoptera Hydroptilidae Hydroptila sylvestris
    ['48130312', '48130300'], // Trichoptera Hydroptilidae Hydroptila tigurina
    ['48130313', '48130300'], // Trichoptera Hydroptilidae Hydroptila tineoides
    ['48130314', '48130300'], // Trichoptera Hydroptilidae Hydroptila valesiaca
    ['48130315', '48130300'], // Trichoptera Hydroptilidae Hydroptila vectis
    ['48130400', '48130000'], // Trichoptera Hydroptilidae Oxyethira
    ['48130401', '48130400'], // Trichoptera Hydroptilidae Oxyethira distinctella
    ['48130402', '48130400'], // Trichoptera Hydroptilidae Oxyethira falcata
    ['48130403', '48130400'], // Trichoptera Hydroptilidae Oxyethira flavicornis
    ['48130404', '48130400'], // Trichoptera Hydroptilidae Oxyethira frici
    ['48130405', '48130400'], // Trichoptera Hydroptilidae Oxyethira mirabilis
    ['48130406', '48130400'], // Trichoptera Hydroptilidae Oxyethira sagittifera
    ['48130407', '48130400'], // Trichoptera Hydroptilidae Oxyethira simplex
    ['48130408', '48130400'], // Trichoptera Hydroptilidae Oxyethira tristella
    ['48130500', '48130000'], // Trichoptera Hydroptilidae Tricholeiochiton
    ['48130501', '48130500'], // Trichoptera Hydroptilidae Tricholeiochiton fagesii
    ['48130600', '48130000'], // Trichoptera Hydroptilidae Ithytrichia
    ['48130601', '48130600'], // Trichoptera Hydroptilidae Ithytrichia clavata
    ['48130602', '48130600'], // Trichoptera Hydroptilidae Ithytrichia lamellaris
    ['48130700', '48130000'], // Trichoptera Hydroptilidae Orthotrichia
    ['48130701', '48130700'], // Trichoptera Hydroptilidae Orthotrichia angustella
    ['48130702', '48130700'], // Trichoptera Hydroptilidae Orthotrichia costalis
    ['48130703', '48130700'], // Trichoptera Hydroptilidae Orthotrichia tragetti
    ['481Z0000', '48000000'], // Trichoptera Rhyacophilidae (including Glossosomatidae)
    ['48200000', '48000000'], // Trichoptera Hydropsychoidea
    ['48210000', '48000000'], // Trichoptera Philopotamidae
    ['48210100', '48210000'], // Trichoptera Philopotamidae Philopotamus
    ['48210101', '48210100'], // Trichoptera Philopotamidae Philopotamus montanus
    ['48210200', '48210000'], // Trichoptera Philopotamidae Wormaldia
    ['48210201', '48210200'], // Trichoptera Philopotamidae Wormaldia mediana
    ['48210202', '48210200'], // Trichoptera Philopotamidae Wormaldia occipitalis
    ['48210203', '48210200'], // Trichoptera Philopotamidae Wormaldia subnigra
    ['48210300', '48210000'], // Trichoptera Philopotamidae Chimarra
    ['48210301', '48210300'], // Trichoptera Philopotamidae Chimarra marginata
    ['48220000', '48000000'], // Trichoptera Psychomyiidae
    ['48220100', '48220000'], // Trichoptera Psychomyiidae Lype
    ['48220101', '48220100'], // Trichoptera Psychomyiidae Lype phaeopa
    ['48220102', '48220100'], // Trichoptera Psychomyiidae Lype reducta
    ['48220200', '48220000'], // Trichoptera Psychomyiidae Metalype
    ['48220201', '48220200'], // Trichoptera Psychomyiidae Metalype fragilis
    ['48220300', '48220000'], // Trichoptera Psychomyiidae Psychomyia
    ['48220301', '48220300'], // Trichoptera Psychomyiidae Psychomyia pusilla
    ['48220400', '48220000'], // Trichoptera Psychomyiidae Tinodes
    ['48220401', '48220400'], // Trichoptera Psychomyiidae Tinodes assimilis
    ['48220402', '48220400'], // Trichoptera Psychomyiidae Tinodes dives
    ['48220403', '48220400'], // Trichoptera Psychomyiidae Tinodes maclachlani
    ['48220404', '48220400'], // Trichoptera Psychomyiidae Tinodes maculicornis
    ['48220405', '48220400'], // Trichoptera Psychomyiidae Tinodes pallidulus
    ['48220406', '48220400'], // Trichoptera Psychomyiidae Tinodes rostocki
    ['48220407', '48220400'], // Trichoptera Psychomyiidae Tinodes unicolor
    ['48220408', '48220400'], // Trichoptera Psychomyiidae Tinodes waeneri
    ['48230000', '48000000'], // Trichoptera Ecnomidae
    ['48230100', '48230000'], // Trichoptera Ecnomidae Ecnomus
    ['48230101', '48230100'], // Trichoptera Ecnomidae Ecnomus tenellus
    ['48240000', '48000000'], // Trichoptera Polycentropodidae
    ['48240100', '48240000'], // Trichoptera Polycentropodidae Cyrnus
    ['48240101', '48240100'], // Trichoptera Polycentropodidae Cyrnus flavidus
    ['48240102', '48240100'], // Trichoptera Polycentropodidae Cyrnus insolutus
    ['48240103', '48240100'], // Trichoptera Polycentropodidae Cyrnus trimaculatus
    ['48240200', '48240000'], // Trichoptera Polycentropodidae Holocentropus
    ['48240201', '48240200'], // Trichoptera Polycentropodidae Holocentropus dubius
    ['48240202', '48240200'], // Trichoptera Polycentropodidae Holocentropus picicornis
    ['48240203', '48240200'], // Trichoptera Polycentropodidae Holocentropus stagnalis
    ['48240300', '48240000'], // Trichoptera Polycentropodidae Neureclipsis
    ['48240301', '48240300'], // Trichoptera Polycentropodidae Neureclipsis bimaculata
    ['48240400', '48240000'], // Trichoptera Polycentropodidae Plectrocnemia
    ['48240401', '48240400'], // Trichoptera Polycentropodidae Plectrocnemia brevis
    ['48240402', '48240400'], // Trichoptera Polycentropodidae Plectrocnemia conspersa
    ['48240403', '48240400'], // Trichoptera Polycentropodidae Plectrocnemia geniculata
    ['48240500', '48240000'], // Trichoptera Polycentropodidae Polycentropus
    ['48240501', '48240500'], // Trichoptera Polycentropodidae Polycentropus flavomaculatus
    ['48240502', '48240500'], // Trichoptera Polycentropodidae Polycentropus irroratus
    ['48240503', '48240500'], // Trichoptera Polycentropodidae Polycentropus kingi
    ['48250000', '48000000'], // Trichoptera Hydropsychidae
    ['48250100', '48250000'], // Trichoptera Hydropsychidae Cheumatopsyche
    ['48250101', '48250100'], // Trichoptera Hydropsychidae Cheumatopsyche lepida
    ['48250200', '48250000'], // Trichoptera Hydropsychidae Hydropsyche
    ['48250201', '48250200'], // Trichoptera Hydropsychidae Hydropsyche angustipennis
    ['48250202', '48250200'], // Trichoptera Hydropsychidae Hydropsyche bulgaromanorum
    ['48250203', '48250200'], // Trichoptera Hydropsychidae Hydropsyche contubernalis
    ['48250204', '48250200'], // Trichoptera Hydropsychidae Hydropsyche exocellata
    ['48250205', '48250200'], // Trichoptera Hydropsychidae Hydropsyche fulvipes
    ['48250206', '48250200'], // Trichoptera Hydropsychidae Hydropsyche instabilis
    ['48250207', '48250200'], // Trichoptera Hydropsychidae Hydropsyche pellucidula
    ['48250208', '48250200'], // Trichoptera Hydropsychidae Hydropsyche saxonica
    ['48250209', '48250200'], // Trichoptera Hydropsychidae Hydropsyche siltalai
    ['48250300', '48250000'], // Trichoptera Hydropsychidae Diplectrona
    ['48250301', '48250300'], // Trichoptera Hydropsychidae Diplectrona felix
    ['482Z0000', '48000000'], // Trichoptera Psychomyiidae (including Ecnomidae)
    ['48300000', '48000000'], // Trichoptera Limnephiloidea
    ['48310000', '48000000'], // Trichoptera Phryganeidae
    ['48310100', '48310000'], // Trichoptera Phryganeidae Agrypnia
    ['48310102', '48310100'], // Trichoptera Phryganeidae Agrypnia obsoleta
    ['48310103', '48310100'], // Trichoptera Phryganeidae Agrypnia pagetana
    ['48310104', '48310100'], // Trichoptera Phryganeidae Agrypnia picta
    ['48310105', '48310100'], // Trichoptera Phryganeidae Agrypnia varia
    ['4831010Z', '48310100'], // Trichoptera Phryganeidae Agrypnia obsoleta group
    ['48310300', '48310000'], // Trichoptera Phryganeidae Hagenella
    ['48310301', '48310300'], // Trichoptera Phryganeidae Hagenella clathrata
    ['48310400', '48310000'], // Trichoptera Phryganeidae Oligotricha
    ['48310401', '48310400'], // Trichoptera Phryganeidae Oligotricha striata
    ['48310500', '48310000'], // Trichoptera Phryganeidae Phryganea
    ['48310501', '48310500'], // Trichoptera Phryganeidae Phryganea bipunctata
    ['48310502', '48310500'], // Trichoptera Phryganeidae Phryganea grandis
    ['48310600', '48310000'], // Trichoptera Phryganeidae Trichostegia
    ['48310601', '48310600'], // Trichoptera Phryganeidae Trichostegia minor
    ['48310700', '48310000'], // Trichoptera Phryganeidae Agrypnetes
    ['48310701', '48310700'], // Trichoptera Phryganeidae Agrypnetes crassicornis
    ['48310Y00', '48310000'], // Trichoptera Phryganeidae Agrypnia
    ['48310Z00', '48310000'], // Trichoptera Phryganeidae Phryganea
    ['48320000', '48000000'], // Trichoptera Brachycentridae
    ['48320100', '48320000'], // Trichoptera Brachycentridae Brachycentrus
    ['48320101', '48320100'], // Trichoptera Brachycentridae Brachycentrus subnubilus
    ['48330000', '48000000'], // Trichoptera Lepidostomatidae
    ['48330100', '48330000'], // Trichoptera Lepidostomatidae Crunoecia
    ['48330101', '48330100'], // Trichoptera Lepidostomatidae Crunoecia irrorata
    ['48330200', '48330000'], // Trichoptera Lepidostomatidae Lasiocephala
    ['48330201', '48330200'], // Trichoptera Lepidostomatidae Lasiocephala basalis
    ['48330300', '48330000'], // Trichoptera Lepidostomatidae Lepidostoma
    ['48330301', '48330300'], // Trichoptera Lepidostomatidae Lepidostoma hirtum
    ['48340000', '48000000'], // Trichoptera Limnephilidae
    ['48340100', '48340000'], // Trichoptera Limnephilidae Ironoquia
    ['48340101', '48340100'], // Trichoptera Limnephilidae Ironoquia dubia
    ['48340300', '48340000'], // Trichoptera Limnephilidae Drusus
    ['48340301', '48340300'], // Trichoptera Limnephilidae Drusus annulatus
    ['48340400', '48340000'], // Trichoptera Limnephilidae Ecclisopteryx
    ['48340401', '48340400'], // Trichoptera Limnephilidae Ecclisopteryx guttulata
    ['48340500', '48340000'], // Trichoptera Limnephilidae Allogamus
    ['48340501', '48340500'], // Trichoptera Limnephilidae Allogamus auricollis
    ['48340600', '48340000'], // Trichoptera Limnephilidae Halesus
    ['48340601', '48340600'], // Trichoptera Limnephilidae Halesus digitatus
    ['48340602', '48340600'], // Trichoptera Limnephilidae Halesus radiatus
    ['48340700', '48340000'], // Trichoptera Limnephilidae Hydatophylax
    ['48340701', '48340700'], // Trichoptera Limnephilidae Hydatophylax infumatus
    ['48340800', '48340000'], // Trichoptera Limnephilidae Melampophylax
    ['48340801', '48340800'], // Trichoptera Limnephilidae Melampophylax mucoreus
    ['48340900', '48340000'], // Trichoptera Limnephilidae Mesophylax
    ['48340901', '48340900'], // Trichoptera Limnephilidae Mesophylax aspersus
    ['48340902', '48340900'], // Trichoptera Limnephilidae Mesophylax impunctatus
    ['48340W00', '48340000'], // Trichoptera Limnephilidae Micropterna
    ['48340X00', '48340000'], // Trichoptera Limnephilidae Potamophylax
    ['48341000', '48340000'], // Trichoptera Limnephilidae Micropterna
    ['48341001', '48341000'], // Trichoptera Limnephilidae Micropterna lateralis
    ['48341002', '48341000'], // Trichoptera Limnephilidae Micropterna sequax
    ['48341100', '48340000'], // Trichoptera Limnephilidae Potamophylax
    ['48341101', '48341100'], // Trichoptera Limnephilidae Potamophylax cingulatus
    ['48341102', '48341100'], // Trichoptera Limnephilidae Potamophylax latipennis
    ['48341103', '48341100'], // Trichoptera Limnephilidae Potamophylax rotundipennis
    ['4834110Z', '48341100'], // Trichoptera Limnephilidae Potamophylax cingulatus group
    ['48341200', '48340000'], // Trichoptera Limnephilidae Stenophylax
    ['48341201', '48341200'], // Trichoptera Limnephilidae Stenophylax permistus
    ['48341202', '48341200'], // Trichoptera Limnephilidae Stenophylax vibex
    ['48341300', '48340000'], // Trichoptera Limnephilidae Chaetopteryx
    ['48341301', '48341300'], // Trichoptera Limnephilidae Chaetopteryx villosa
    ['48341400', '48340000'], // Trichoptera Limnephilidae Anabolia
    ['48341401', '48341400'], // Trichoptera Limnephilidae Anabolia nervosa
    ['48341402', '48341400'], // Trichoptera Limnephilidae Anabolia brevipennis
    ['48341500', '48340000'], // Trichoptera Limnephilidae Glyphotaelius
    ['48341501', '48341500'], // Trichoptera Limnephilidae Glyphotaelius pellucidus
    ['48341600', '48340000'], // Trichoptera Limnephilidae Grammotaulius
    ['48341601', '48341600'], // Trichoptera Limnephilidae Grammotaulius nigropunctatus
    ['48341602', '48341600'], // Trichoptera Limnephilidae Grammotaulius nitidus
    ['48341700', '48340000'], // Trichoptera Limnephilidae Limnephilus
    ['48341701', '48341700'], // Trichoptera Limnephilidae Limnephilus affinis
    ['48341702', '48341700'], // Trichoptera Limnephilidae Limnephilus auricula
    ['48341703', '48341700'], // Trichoptera Limnephilidae Limnephilus binotatus
    ['48341704', '48341700'], // Trichoptera Limnephilidae Limnephilus bipunctatus
    ['48341705', '48341700'], // Trichoptera Limnephilidae Limnephilus borealis
    ['48341706', '48341700'], // Trichoptera Limnephilidae Limnephilus centralis
    ['48341707', '48341700'], // Trichoptera Limnephilidae Limnephilus coenosus
    ['48341708', '48341700'], // Trichoptera Limnephilidae Limnephilus decipiens
    ['48341709', '48341700'], // Trichoptera Limnephilidae Limnephilus elegans
    ['4834170Y', '48341700'], // Trichoptera Limnephilidae Limnephilus flavicornis group
    ['4834170Z', '48341700'], // Trichoptera Limnephilidae Limnephilus affinis group
    ['48341711', '48341700'], // Trichoptera Limnephilidae Limnephilus extricatus
    ['48341712', '48341700'], // Trichoptera Limnephilidae Limnephilus flavicornis
    ['48341713', '48341700'], // Trichoptera Limnephilidae Limnephilus fuscicornis
    ['48341714', '48341700'], // Trichoptera Limnephilidae Limnephilus fuscinervis
    ['48341715', '48341700'], // Trichoptera Limnephilidae Limnephilus griseus
    ['48341716', '48341700'], // Trichoptera Limnephilidae Limnephilus hirsutus
    ['48341717', '48341700'], // Trichoptera Limnephilidae Limnephilus ignavus
    ['48341718', '48341700'], // Trichoptera Limnephilidae Limnephilus incisus
    ['48341719', '48341700'], // Trichoptera Limnephilidae Limnephilus lunatus
    ['48341721', '48341700'], // Trichoptera Limnephilidae Limnephilus luridus
    ['48341722', '48341700'], // Trichoptera Limnephilidae Limnephilus marmoratus
    ['48341723', '48341700'], // Trichoptera Limnephilidae Limnephilus nigriceps
    ['48341724', '48341700'], // Trichoptera Limnephilidae Limnephilus pati
    ['48341725', '48341700'], // Trichoptera Limnephilidae Limnephilus politus
    ['48341726', '48341700'], // Trichoptera Limnephilidae Limnephilus rhombicus
    ['48341727', '48341700'], // Trichoptera Limnephilidae Limnephilus sparsus
    ['48341728', '48341700'], // Trichoptera Limnephilidae Limnephilus stigma
    ['48341729', '48341700'], // Trichoptera Limnephilidae Limnephilus subcentralis
    ['48341731', '48341700'], // Trichoptera Limnephilidae Limnephilus tauricus
    ['48341732', '48341700'], // Trichoptera Limnephilidae Limnephilus vittatus
    ['48341800', '48340000'], // Trichoptera Limnephilidae Nemotaulius
    ['48341801', '48341800'], // Trichoptera Limnephilidae Nemotaulius punctatolineatus
    ['48342000', '48340000'], // Trichoptera Limnephilidae Rhadicoleptus
    ['48342001', '48342000'], // Trichoptera Limnephilidae Rhadicoleptus alpestris
    ['4834X000', '48340000'], // Trichoptera Drusinae
    ['48350000', '48000000'], // Trichoptera Goeridae
    ['48350100', '48350000'], // Trichoptera Goeridae Goera
    ['48350101', '48350100'], // Trichoptera Goeridae Goera pilosa
    ['48350200', '48350000'], // Trichoptera Goeridae Silo
    ['48350201', '48350200'], // Trichoptera Goeridae Silo nigricornis
    ['48350202', '48350200'], // Trichoptera Goeridae Silo pallipes
    ['48360000', '48000000'], // Trichoptera Beraeidae
    ['48360100', '48360000'], // Trichoptera Beraeidae Beraea
    ['48360101', '48360100'], // Trichoptera Beraeidae Beraea maurus
    ['48360102', '48360100'], // Trichoptera Beraeidae Beraea pullata
    ['48360200', '48360000'], // Trichoptera Beraeidae Beraeodes
    ['48360201', '48360200'], // Trichoptera Beraeidae Beraeodes minutus
    ['48360300', '48360000'], // Trichoptera Beraeidae Ernodes
    ['48360301', '48360300'], // Trichoptera Beraeidae Ernodes articularis
    ['48370000', '48000000'], // Trichoptera Sericostomatidae
    ['48370100', '48370000'], // Trichoptera Sericostomatidae Notidobia
    ['48370101', '48370100'], // Trichoptera Sericostomatidae Notidobia ciliaris
    ['48370200', '48370000'], // Trichoptera Sericostomatidae Sericostoma
    ['48370201', '48370200'], // Trichoptera Sericostomatidae Sericostoma personatum
    ['48380000', '48000000'], // Trichoptera Odontoceridae
    ['48380100', '48380000'], // Trichoptera Odontoceridae Odontocerum
    ['48380101', '48380100'], // Trichoptera Odontoceridae Odontocerum albicorne
    ['48390000', '48000000'], // Trichoptera Molannidae
    ['48390100', '48390000'], // Trichoptera Molannidae Molanna
    ['48390101', '48390100'], // Trichoptera Molannidae Molanna angustata
    ['48390102', '48390100'], // Trichoptera Molannidae Molanna albicans
    ['483A0000', '48000000'], // Trichoptera Leptoceridae
    ['483A0100', '483A0000'], // Trichoptera Leptoceridae Athripsodes
    ['483A0101', '483A0100'], // Trichoptera Leptoceridae Athripsodes albifrons
    ['483A0102', '483A0100'], // Trichoptera Leptoceridae Athripsodes aterrimus
    ['483A0103', '483A0100'], // Trichoptera Leptoceridae Athripsodes bilineatus
    ['483A0104', '483A0100'], // Trichoptera Leptoceridae Athripsodes cinereus
    ['483A0105', '483A0100'], // Trichoptera Leptoceridae Athripsodes commutatus
    ['483A0200', '483A0000'], // Trichoptera Leptoceridae Ceraclea
    ['483A0201', '483A0200'], // Trichoptera Leptoceridae Ceraclea albimacula
    ['483A0202', '483A0200'], // Trichoptera Leptoceridae Ceraclea annulicornis
    ['483A0203', '483A0200'], // Trichoptera Leptoceridae Ceraclea dissimilis
    ['483A0204', '483A0200'], // Trichoptera Leptoceridae Ceraclea fulva
    ['483A0205', '483A0200'], // Trichoptera Leptoceridae Ceraclea nigronervosa
    ['483A0206', '483A0200'], // Trichoptera Leptoceridae Ceraclea senilis
    ['483A0300', '483A0000'], // Trichoptera Leptoceridae Leptocerus
    ['483A0301', '483A0300'], // Trichoptera Leptoceridae Leptocerus interruptus
    ['483A0302', '483A0300'], // Trichoptera Leptoceridae Leptocerus lusitanicus
    ['483A0303', '483A0300'], // Trichoptera Leptoceridae Leptocerus tineiformis
    ['483A0400', '483A0000'], // Trichoptera Leptoceridae Mystacides
    ['483A0401', '483A0400'], // Trichoptera Leptoceridae Mystacides azurea
    ['483A0402', '483A0400'], // Trichoptera Leptoceridae Mystacides longicornis
    ['483A0403', '483A0400'], // Trichoptera Leptoceridae Mystacides nigra
    ['483A0500', '483A0000'], // Trichoptera Leptoceridae Adicella
    ['483A0501', '483A0500'], // Trichoptera Leptoceridae Adicella filicornis
    ['483A0502', '483A0500'], // Trichoptera Leptoceridae Adicella reducta
    ['483A0600', '483A0000'], // Trichoptera Leptoceridae Erotesis
    ['483A0601', '483A0600'], // Trichoptera Leptoceridae Erotesis baltica
    ['483A0700', '483A0000'], // Trichoptera Leptoceridae Triaenodes
    ['483A0701', '483A0700'], // Trichoptera Leptoceridae Triaenodes bicolor
    ['483A0800', '483A0000'], // Trichoptera Leptoceridae Ylodes
    ['483A0801', '483A0800'], // Trichoptera Leptoceridae Ylodes conspersus
    ['483A0802', '483A0800'], // Trichoptera Leptoceridae Ylodes reuteri
    ['483A0803', '483A0800'], // Trichoptera Leptoceridae Ylodes simulans
    ['483A0900', '483A0000'], // Trichoptera Leptoceridae Oecetis
    ['483A0901', '483A0900'], // Trichoptera Leptoceridae Oecetis furva
    ['483A0902', '483A0900'], // Trichoptera Leptoceridae Oecetis lacustris
    ['483A0903', '483A0900'], // Trichoptera Leptoceridae Oecetis notata
    ['483A0904', '483A0900'], // Trichoptera Leptoceridae Oecetis ochracea
    ['483A0905', '483A0900'], // Trichoptera Leptoceridae Oecetis testacea
    ['483A0Z00', '483A0000'], // Trichoptera Leptoceridae Triaenodes
    ['483A1000', '483A0000'], // Trichoptera Leptoceridae Setodes
    ['483A1001', '483A1000'], // Trichoptera Leptoceridae Setodes argentipunctellus
    ['483A1002', '483A1000'], // Trichoptera Leptoceridae Setodes punctatus
    ['483B0000', '48000000'], // Trichoptera Apataniidae
    ['483B0100', '483B0000'], // Trichoptera Apataniidae Apatania
    ['483B0101', '483B0100'], // Trichoptera Apataniidae Apatania auricula
    ['483B0102', '483B0100'], // Trichoptera Apataniidae Apatania muliebris
    ['483B0103', '483B0100'], // Trichoptera Apataniidae Apatania nielseni
    ['483B0104', '483B0100'], // Trichoptera Apataniidae Apatania wallengreni
    ['483Z0000', '48000000'], // Trichoptera Limnephilidae (including Apataniidae)
    ['49000000', undefined], // Lepidoptera
    ['49100000', '49000000'], // Lepidoptera Pyraloidea
    ['49110000', '49000000'], // Lepidoptera Pyralidae
    ['49110100', '49110000'], // Lepidoptera Pyralidae Acentria
    ['49110101', '49110100'], // Lepidoptera Pyralidae Acentria ephemerella
    ['49110200', '49110000'], // Lepidoptera Pyralidae Nymphula
    ['49110202', '49110200'], // Lepidoptera Pyralidae Nymphula stagnata
    ['49110300', '49110000'], // Lepidoptera Pyralidae Parapoynx
    ['49110302', '49110300'], // Lepidoptera Pyralidae Parapoynx stratiotata
    ['49110400', '49110000'], // Lepidoptera Pyralidae Cataclysta
    ['49110401', '49110400'], // Lepidoptera Pyralidae Cataclysta lemnata
    ['49110500', '49110000'], // Lepidoptera Pyralidae Elophila
    ['49110501', '49110500'], // Lepidoptera Pyralidae Elophila nymphaeata
    ['49110Y00', '49110000'], // Lepidoptera Pyralidae Parapoynx
    ['49110Z00', '49110000'], // Lepidoptera Pyralidae Nymphula
    ['50000000', undefined], // Diptera
    ['50100000', '50000000'], // Diptera Tipuloidea
    ['50110000', '50000000'], // Diptera Tipulidae
    ['50110100', '50110000'], // Diptera Tipulidae Prionocera
    ['50110101', '50110100'], // Diptera Tipulidae Prionocera pubescens
    ['50110102', '50110100'], // Diptera Tipulidae Prionocera subserricornis
    ['50110103', '50110100'], // Diptera Tipulidae Prionocera turcica
    ['50110200', '50110000'], // Diptera Tipulidae Dolichopeza
    ['50110201', '50110200'], // Diptera Tipulidae Dolichopeza albipes
    ['50110300', '50110000'], // Diptera Tipulidae Tipula
    ['50110320', '50110300'], // Diptera Tipulidae Tipula (Schummelia)
    ['50110321', '50110300'], // Diptera Tipulidae Tipula (Schummelia) variicornis
    ['50110322', '50110300'], // Diptera Tipulidae Tipula (Schummelia) yerburyi
    ['50110330', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia)
    ['50110331', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) alpium
    ['50110332', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) cheethami
    ['50110333', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) gimmerthali
    ['50110334', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) grisescens
    ['50110335', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) limbata
    ['50110336', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) confusa
    ['50110337', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) obsoleta
    ['50110338', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) pagana
    ['50110339', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) rufina
    ['5011033A', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) serrulifera
    ['5011033B', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) signata
    ['5011033C', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) staegeri
    ['5011033D', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) subnodicornis
    ['5011033Z', '50110300'], // Diptera Tipulidae Tipula (Savtshenkia) signata group
    ['50110350', '50110300'], // Diptera Tipulidae Tipula (Pterelachisus)
    ['50110351', '50110300'], // Diptera Tipulidae Tipula (Pterelachisus) pabulina
    ['50110352', '50110300'], // Diptera Tipulidae Tipula (Pterelachisus) truncorum
    ['50110360', '50110300'], // Diptera Tipulidae Tipula (Beringotipula)
    ['50110361', '50110300'], // Diptera Tipulidae Tipula (Beringotipula) unca
    ['50110370', '50110300'], // Diptera Tipulidae Tipula (Mediotipula)
    ['50110371', '50110300'], // Diptera Tipulidae Tipula (Mediotipula) sarajevensis
    ['50110372', '50110300'], // Diptera Tipulidae Tipula (Mediotipula) siebkei
    ['50110380', '50110300'], // Diptera Tipulidae Tipula (Lindnerina)
    ['50110381', '50110300'], // Diptera Tipulidae Tipula (Lindnerina) bistilata
    ['50110390', '50110300'], // Diptera Tipulidae Tipula (Platytipula)
    ['50110391', '50110300'], // Diptera Tipulidae Tipula (Platytipula) luteipennis
    ['50110392', '50110300'], // Diptera Tipulidae Tipula (Platytipula) melanoceros
    ['501103A0', '50110300'], // Diptera Tipulidae Tipula (Yamatotipula)
    ['501103A1', '50110300'], // Diptera Tipulidae Tipula (Yamatotipula) coerulescens
    ['501103A2', '50110300'], // Diptera Tipulidae Tipula (Yamatotipula) couckei
    ['501103A3', '50110300'], // Diptera Tipulidae Tipula (Yamatotipula) lateralis
    ['501103A4', '50110300'], // Diptera Tipulidae Tipula (Yamatotipula) marginella
    ['501103A5', '50110300'], // Diptera Tipulidae Tipula (Yamatotipula) montium
    ['501103A6', '50110300'], // Diptera Tipulidae Tipula (Yamatotipula) pruinosa
    ['501103A7', '50110300'], // Diptera Tipulidae Tipula (Yamatotipula) pierrei
    ['501103AZ', '50110300'], // Diptera Tipulidae Tipula (Yamatotipula) montium group
    ['501103B0', '50110300'], // Diptera Tipulidae Tipula (Tipula)
    ['501103B1', '50110300'], // Diptera Tipulidae Tipula (Tipula) subcunctans
    ['501103B2', '50110300'], // Diptera Tipulidae Tipula (Tipula) oleracea
    ['501103B3', '50110300'], // Diptera Tipulidae Tipula (Tipula) paludosa
    ['501103C0', '50110300'], // Diptera Tipulidae Tipula (Acutipula)
    ['501103C1', '50110300'], // Diptera Tipulidae Tipula (Acutipula) fulvipennis
    ['501103C2', '50110300'], // Diptera Tipulidae Tipula (Acutipula) luna
    ['501103C3', '50110300'], // Diptera Tipulidae Tipula (Acutipula) maxima
    ['501103C4', '50110300'], // Diptera Tipulidae Tipula (Acutipula) vittata
    ['501103CZ', '50110300'], // Diptera Tipulidae Tipula (Acutipula) maxima group
    ['50110500', '50110000'], // Diptera Tipulidae Nephrotoma
    ['50110501', '50110500'], // Diptera Tipulidae Nephrotoma analis
    ['50110504', '50110500'], // Diptera Tipulidae Nephrotoma cornicina
    ['50110505', '50110500'], // Diptera Tipulidae Nephrotoma crocata
    ['50110511', '50110500'], // Diptera Tipulidae Nephrotoma quadrifaria
    ['50110600', '50110000'], // Diptera Tipulidae Nigrotipula
    ['50110601', '50110600'], // Diptera Tipulidae Nigrotipula nigra
    ['50110Z00', '50110000'], // Diptera Tipulidae Tipula
    ['50120000', '50000000'], // Diptera Cylindrotomidae
    ['50120100', '50120000'], // Diptera Cylindrotomidae Triogma
    ['50120101', '50120100'], // Diptera Cylindrotomidae Triogma trisulcata
    ['50120200', '50120000'], // Diptera Cylindrotomidae Phalacrocera
    ['50120201', '50120200'], // Diptera Cylindrotomidae Phalacrocera replicata
    ['50130000', '50000000'], // Diptera Limoniidae
    ['50130100', '50130000'], // Diptera Limoniidae Limonia
    ['50130101', '50130100'], // Diptera Limoniidae Limonia dilutior
    ['50130102', '50130100'], // Diptera Limoniidae Limonia flavipes
    ['50130103', '50130100'], // Diptera Limoniidae Limonia macrostigma
    ['50130104', '50130100'], // Diptera Limoniidae Limonia maculipennis
    ['50130105', '50130100'], // Diptera Limoniidae Limonia masoni
    ['50130106', '50130100'], // Diptera Limoniidae Limonia nigropunctata
    ['50130107', '50130100'], // Diptera Limoniidae Limonia nubeculosa
    ['50130108', '50130100'], // Diptera Limoniidae Limonia phragmitidis
    ['50130109', '50130100'], // Diptera Limoniidae Limonia stigma
    ['5013010A', '50130100'], // Diptera Limoniidae Limonia trivittata
    ['50130200', '50130000'], // Diptera Limoniidae Dicranomyia
    ['50130210', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia)
    ['50130211', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) aperta
    ['50130212', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) autumnalis
    ['50130213', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) chorea
    ['50130214', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) consimilis
    ['50130215', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) didyma
    ['50130216', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) distendens
    ['50130217', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) frontalis
    ['50130218', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) goritiensis
    ['50130219', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) halterata
    ['5013021A', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) lucida
    ['5013021B', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) mitis
    ['5013021C', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) modesta
    ['5013021D', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) omissinervis
    ['5013021E', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) ornata
    ['5013021F', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) sera
    ['5013021G', '50130200'], // Diptera Limoniidae Dicranomyia (Dicranomyia) ventralis
    ['50130230', '50130200'], // Diptera Limoniidae Dicranomyia (Glochina)
    ['50130231', '50130200'], // Diptera Limoniidae Dicranomyia (Glochina) pauli
    ['50130232', '50130200'], // Diptera Limoniidae Dicranomyia (Glochina) sericata
    ['50130240', '50130200'], // Diptera Limoniidae Dicranomyia (Idiopyga)
    ['50130241', '50130200'], // Diptera Limoniidae Dicranomyia (Idiopyga) danica
    ['50130242', '50130200'], // Diptera Limoniidae Dicranomyia (Idiopyga) halterella
    ['50130243', '50130200'], // Diptera Limoniidae Dicranomyia (Idiopyga) magnicauda
    ['50130244', '50130200'], // Diptera Limoniidae Dicranomyia (Idiopyga) melleicauda
    ['50130245', '50130200'], // Diptera Limoniidae Dicranomyia (Idiopyga) nigristigma
    ['50130246', '50130200'], // Diptera Limoniidae Dicranomyia (Idiopyga) stigmatica
    ['50130250', '50130200'], // Diptera Limoniidae Dicranomyia (Melanolimonia)
    ['50130251', '50130200'], // Diptera Limoniidae Dicranomyia (Melanolimonia) caledonica
    ['50130252', '50130200'], // Diptera Limoniidae Dicranomyia (Melanolimonia) morio
    ['50130253', '50130200'], // Diptera Limoniidae Dicranomyia (Melanolimonia) occidua
    ['50130254', '50130200'], // Diptera Limoniidae Dicranomyia (Melanolimonia) rufiventris
    ['50130255', '50130200'], // Diptera Limoniidae Dicranomyia (Melanolimonia) stylifera
    ['50130260', '50130200'], // Diptera Limoniidae Dicranomyia (Numantia)
    ['50130261', '50130200'], // Diptera Limoniidae Dicranomyia (Numantia) fusca
    ['50130270', '50130200'], // Diptera Limoniidae Dicranomyia (Sivalimnobia)
    ['50130271', '50130200'], // Diptera Limoniidae Dicranomyia (Sivalimnobia) aquosa
    ['50130300', '50130000'], // Diptera Limoniidae Geranomyia
    ['50130301', '50130300'], // Diptera Limoniidae Geranomyia bezzii
    ['50130302', '50130300'], // Diptera Limoniidae Geranomyia unicolor
    ['50130400', '50130000'], // Diptera Limoniidae Dicranoptycha
    ['50130401', '50130400'], // Diptera Limoniidae Dicranoptycha fuscescens
    ['50130500', '50130000'], // Diptera Limoniidae Antocha
    ['50130510', '50130500'], // Diptera Limoniidae Antocha (Antocha)
    ['50130511', '50130500'], // Diptera Limoniidae Antocha (Antocha) vitripennis
    ['50130600', '50130000'], // Diptera Limoniidae Thaumastoptera
    ['50130601', '50130600'], // Diptera Limoniidae Thaumastoptera calceata
    ['50130700', '50130000'], // Diptera Limoniidae Orimarga
    ['50130701', '50130700'], // Diptera Limoniidae Orimarga juvenilis
    ['50130702', '50130700'], // Diptera Limoniidae Orimarga virgo
    ['50130703', '50130700'], // Diptera Limoniidae Orimarga attenuata
    ['50130900', '50130000'], // Diptera Limoniidae Helius
    ['50130910', '50130900'], // Diptera Limoniidae Helius (Helius)
    ['50130912', '50130900'], // Diptera Limoniidae Helius (Helius) flavus
    ['50130913', '50130900'], // Diptera Limoniidae Helius (Helius) hispanicus
    ['50130914', '50130900'], // Diptera Limoniidae Helius (Helius) longirostris
    ['50130915', '50130900'], // Diptera Limoniidae Helius (Helius) pallirostris
    ['50130Z00', '50130000'], // Diptera Limoniidae Limonia
    ['50131100', '50130000'], // Diptera Limoniidae Achyrolimonia
    ['50131101', '50131100'], // Diptera Limoniidae Achyrolimonia decemmaculata
    ['50131200', '50130000'], // Diptera Limoniidae Atypophthalmus
    ['50131201', '50131200'], // Diptera Limoniidae Atypophthalmus inustus
    ['50131300', '50130000'], // Diptera Limoniidae Metalimnobia
    ['50131310', '50131300'], // Diptera Limoniidae Metalimnobia (Metalimnobia)
    ['50131311', '50131300'], // Diptera Limoniidae Metalimnobia (Metalimnobia) bifasciata
    ['50131312', '50131300'], // Diptera Limoniidae Metalimnobia (Metalimnobia) quadrimaculata
    ['50131313', '50131300'], // Diptera Limoniidae Metalimnobia (Metalimnobia) quadrinotata
    ['50131400', '50130000'], // Diptera Limoniidae Neolimonia
    ['50131401', '50131400'], // Diptera Limoniidae Neolimonia dumetorum
    ['50131700', '50130000'], // Diptera Limoniidae Austrolimnophila
    ['50131710', '50131700'], // Diptera Limoniidae Austrolimnophila (Austrolimnophila)
    ['50131711', '50131700'], // Diptera Limoniidae Austrolimnophila (Austrolimnophila) ochracea
    ['50131800', '50130000'], // Diptera Limoniidae Dactylolabis
    ['50131810', '50131800'], // Diptera Limoniidae Dactylolabis (Dactylolabis)
    ['50131811', '50131800'], // Diptera Limoniidae Dactylolabis (Dactylolabis) sexmaculata
    ['50131812', '50131800'], // Diptera Limoniidae Dactylolabis (Dactylolabis) transversa
    ['50131900', '50130000'], // Diptera Limoniidae Pseudolimnophila
    ['50131901', '50131900'], // Diptera Limoniidae Pseudolimnophila lucorum
    ['50131902', '50131900'], // Diptera Limoniidae Pseudolimnophila sepium
    ['50131Z00', '50130000'], // Diptera Limoniidae Limnophila
    ['50132000', '50130000'], // Diptera Limoniidae Limnophila
    ['50132050', '50132000'], // Diptera Limoniidae Limnophila (Limnophila)
    ['50132051', '50132000'], // Diptera Limoniidae Limnophila (Limnophila) pictipennis
    ['50132052', '50132000'], // Diptera Limoniidae Limnophila (Limnophila) schranki
    ['50132100', '50130000'], // Diptera Limoniidae Eloeophila
    ['50132101', '50132100'], // Diptera Limoniidae Eloeophila apicata
    ['50132102', '50132100'], // Diptera Limoniidae Eloeophila maculata
    ['50132103', '50132100'], // Diptera Limoniidae Eloeophila mundata
    ['50132104', '50132100'], // Diptera Limoniidae Eloeophila submarmorata
    ['50132105', '50132100'], // Diptera Limoniidae Eloeophila trimaculata
    ['50132106', '50132100'], // Diptera Limoniidae Eloeophila verralli
    ['50132200', '50130000'], // Diptera Limoniidae Euphylidorea
    ['50132201', '50132200'], // Diptera Limoniidae Euphylidorea aperta
    ['50132202', '50132200'], // Diptera Limoniidae Euphylidorea dispar
    ['50132203', '50132200'], // Diptera Limoniidae Euphylidorea lineola
    ['50132204', '50132200'], // Diptera Limoniidae Euphylidorea meigeni
    ['50132205', '50132200'], // Diptera Limoniidae Euphylidorea phaeostigma
    ['50132300', '50130000'], // Diptera Limoniidae Idioptera
    ['50132301', '50132300'], // Diptera Limoniidae Idioptera linnei
    ['50132302', '50132300'], // Diptera Limoniidae Idioptera pulchella
    ['50132400', '50130000'], // Diptera Limoniidae Phylidorea
    ['50132410', '50132400'], // Diptera Limoniidae Phylidorea (Phylidorea)
    ['50132411', '50132400'], // Diptera Limoniidae Phylidorea (Phylidorea) abdominalis
    ['50132412', '50132400'], // Diptera Limoniidae Phylidorea (Phylidorea) ferruginea
    ['50132413', '50132400'], // Diptera Limoniidae Phylidorea (Phylidorea) heterogyna
    ['50132414', '50132400'], // Diptera Limoniidae Phylidorea (Phylidorea) longicornis
    ['50132415', '50132400'], // Diptera Limoniidae Phylidorea (Phylidorea) squalens
    ['50132420', '50132400'], // Diptera Limoniidae Phylidorea (Paraphylidorea)
    ['50132421', '50132400'], // Diptera Limoniidae Phylidorea (Paraphylidorea) fulvonervosa
    ['50132500', '50130000'], // Diptera Limoniidae Neolimnomyia
    ['50132510', '50132500'], // Diptera Limoniidae Neolimnomyia (Brachylimnophila)
    ['50132511', '50132500'], // Diptera Limoniidae Neolimnomyia (Brachylimnophila) adjuncta
    ['50132512', '50132500'], // Diptera Limoniidae Neolimnomyia (Brachylimnophila) nemoralis
    ['50132520', '50132500'], // Diptera Limoniidae Neolimnomyia (Neolimnomyia)
    ['50132521', '50132500'], // Diptera Limoniidae Neolimnomyia (Neolimnomyia) batava
    ['50132522', '50132500'], // Diptera Limoniidae Neolimnomyia (Neolimnomyia) filata
    ['50132600', '50130000'], // Diptera Limoniidae Pilaria
    ['50132621', '50132600'], // Diptera Limoniidae Pilaria discicollis
    ['50132622', '50132600'], // Diptera Limoniidae Pilaria fuscipennis
    ['50132623', '50132600'], // Diptera Limoniidae Pilaria meridiana
    ['50132624', '50132600'], // Diptera Limoniidae Pilaria scutellata
    ['50132625', '50132600'], // Diptera Limoniidae Pilaria decolor
    ['50132700', '50130000'], // Diptera Limoniidae Rhipidia
    ['50132710', '50132700'], // Diptera Limoniidae Rhipidia (Rhipidia)
    ['50132711', '50132700'], // Diptera Limoniidae Rhipidia (Rhipidia) ctenophora
    ['50132712', '50132700'], // Diptera Limoniidae Rhipidia (Rhipidia) maculata
    ['50132713', '50132700'], // Diptera Limoniidae Rhipidia (Rhipidia) uniseriata
    ['50132800', '50130000'], // Diptera Limoniidae Hexatoma
    ['50132810', '50132800'], // Diptera Limoniidae Hexatoma (Hexatoma)
    ['50132811', '50132800'], // Diptera Limoniidae Hexatoma (Hexatoma) bicolor
    ['50132812', '50132800'], // Diptera Limoniidae Hexatoma (Hexatoma) fuscipennis
    ['50132900', '50130000'], // Diptera Limoniidae Neolimnophila
    ['50132901', '50132900'], // Diptera Limoniidae Neolimnophila carteri
    ['50132902', '50132900'], // Diptera Limoniidae Neolimnophila placida
    ['50132X00', '50130000'], // Diptera Limoniidae Pilaria
    ['50133000', '50130000'], // Diptera Limoniidae Crypteria
    ['50133001', '50133000'], // Diptera Limoniidae Crypteria limnophiloides
    ['50133100', '50130000'], // Diptera Limoniidae Gonomyia
    ['50133140', '50133100'], // Diptera Limoniidae Gonomyia (Gonomyia)
    ['50133141', '50133100'], // Diptera Limoniidae Gonomyia (Gonomyia) bifida
    ['50133142', '50133100'], // Diptera Limoniidae Gonomyia (Gonomyia) conoviensis
    ['50133143', '50133100'], // Diptera Limoniidae Gonomyia (Gonomyia) dentata
    ['50133144', '50133100'], // Diptera Limoniidae Gonomyia (Gonomyia) lucidula
    ['50133145', '50133100'], // Diptera Limoniidae Gonomyia (Gonomyia) recta
    ['50133146', '50133100'], // Diptera Limoniidae Gonomyia (Gonomyia) simplex
    ['50133147', '50133100'], // Diptera Limoniidae Gonomyia (Gonomyia) tenella
    ['50133148', '50133100'], // Diptera Limoniidae Gonomyia (Gonomyia) hippocampi
    ['50133150', '50133100'], // Diptera Limoniidae Gonomyia (Prolipophleps)
    ['50133151', '50133100'], // Diptera Limoniidae Gonomyia (Prolipophleps) abbreviata
    ['50133170', '50133100'], // Diptera Limoniidae Gonomyia (Teuchogonomyia)
    ['50133171', '50133100'], // Diptera Limoniidae Gonomyia (Teuchogonomyia) edwardsi
    ['50133200', '50130000'], // Diptera Limoniidae Ellipteroides
    ['50133210', '50133200'], // Diptera Limoniidae Ellipteroides (Ellipteroides)
    ['50133211', '50133200'], // Diptera Limoniidae Ellipteroides (Ellipteroides) lateralis
    ['50133220', '50133200'], // Diptera Limoniidae Ellipteroides (Protogonomyia)
    ['50133221', '50133200'], // Diptera Limoniidae Ellipteroides (Protogonomyia) alboscutellatus
    ['50133222', '50133200'], // Diptera Limoniidae Ellipteroides (Protogonomyia) limbatus
    ['50133300', '50130000'], // Diptera Limoniidae Idiocera
    ['50133310', '50133300'], // Diptera Limoniidae Idiocera (Idiocera)
    ['50133311', '50133300'], // Diptera Limoniidae Idiocera (Idiocera) bradleyi
    ['50133313', '50133300'], // Diptera Limoniidae Idiocera (Idiocera) punctata
    ['50133314', '50133300'], // Diptera Limoniidae Idiocera (Idiocera) sexguttata
    ['50133315', '50133300'], // Diptera Limoniidae Idiocera (Idiocera) sziladyi
    ['50133400', '50130000'], // Diptera Limoniidae Hoplolabis
    ['50133410', '50133400'], // Diptera Limoniidae Hoplolabis (Parilisia)
    ['50133411', '50133400'], // Diptera Limoniidae Hoplolabis (Parilisia) areolata
    ['50133412', '50133400'], // Diptera Limoniidae Hoplolabis (Parilisia) vicina
    ['50133413', '50133400'], // Diptera Limoniidae Hoplolabis (Parilisia) yezoana
    ['50133600', '50130000'], // Diptera Limoniidae Rhabdomastix
    ['50133620', '50133600'], // Diptera Limoniidae Rhabdomastix (Sacandaga)
    ['50133621', '50133600'], // Diptera Limoniidae Rhabdomastix (Sacandaga) edwardsi
    ['50133622', '50133600'], // Diptera Limoniidae Rhabdomastix (Sacandaga) laeta
    ['50133630', '50133600'], // Diptera Limoniidae Rhabdomastix (Lurdia)
    ['50133631', '50133600'], // Diptera Limoniidae Rhabdomastix (Lurdia) inclinata
    ['50133700', '50130000'], // Diptera Limoniidae Lipsothrix
    ['50133701', '50133700'], // Diptera Limoniidae Lipsothrix ecucullata
    ['50133702', '50133700'], // Diptera Limoniidae Lipsothrix errans
    ['50133703', '50133700'], // Diptera Limoniidae Lipsothrix nervosa
    ['50133704', '50133700'], // Diptera Limoniidae Lipsothrix nobilis
    ['50133705', '50133700'], // Diptera Limoniidae Lipsothrix remota
    ['50133800', '50130000'], // Diptera Limoniidae Gonempeda
    ['50133801', '50133800'], // Diptera Limoniidae Gonempeda flava
    ['50133900', '50130000'], // Diptera Limoniidae Cheilotrichia
    ['50133910', '50133900'], // Diptera Limoniidae Cheilotrichia (Cheilotrichia)
    ['50133911', '50133900'], // Diptera Limoniidae Cheilotrichia (Cheilotrichia) imbuta
    ['50133920', '50133900'], // Diptera Limoniidae Cheilotrichia (Empeda)
    ['50133921', '50133900'], // Diptera Limoniidae Cheilotrichia (Empeda) cinerascens
    ['50133Z00', '50130000'], // Diptera Limoniidae Gonempeda
    ['50134100', '50130000'], // Diptera Limoniidae Erioptera
    ['50134130', '50134100'], // Diptera Limoniidae Erioptera (Erioptera)
    ['50134132', '50134100'], // Diptera Limoniidae Erioptera (Erioptera) divisa
    ['50134133', '50134100'], // Diptera Limoniidae Erioptera (Erioptera) fuscipennis
    ['50134134', '50134100'], // Diptera Limoniidae Erioptera (Erioptera) fusculenta
    ['50134135', '50134100'], // Diptera Limoniidae Erioptera (Erioptera) flavata
    ['50134136', '50134100'], // Diptera Limoniidae Erioptera (Erioptera) griseipennis
    ['50134137', '50134100'], // Diptera Limoniidae Erioptera (Erioptera) limbata
    ['50134138', '50134100'], // Diptera Limoniidae Erioptera (Erioptera) lutea
    ['50134139', '50134100'], // Diptera Limoniidae Erioptera (Erioptera) meijerei
    ['5013413A', '50134100'], // Diptera Limoniidae Erioptera (Erioptera) nielseni
    ['5013413B', '50134100'], // Diptera Limoniidae Erioptera (Erioptera) verralli
    ['5013413C', '50134100'], // Diptera Limoniidae Erioptera (Erioptera) sordida
    ['5013413D', '50134100'], // Diptera Limoniidae Erioptera (Erioptera) squalida
    ['5013413E', '50134100'], // Diptera Limoniidae Erioptera (Erioptera) flavissima
    ['50134160', '50134100'], // Diptera Limoniidae Erioptera (Mesocyphona)
    ['50134161', '50134100'], // Diptera Limoniidae Erioptera (Mesocyphona) bivittata
    ['50134200', '50130000'], // Diptera Limoniidae Trimicra
    ['50134201', '50134200'], // Diptera Limoniidae Trimicra pilipes
    ['50134300', '50130000'], // Diptera Limoniidae Symplecta
    ['50134310', '50134300'], // Diptera Limoniidae Symplecta (Symplecta)
    ['50134311', '50134300'], // Diptera Limoniidae Symplecta (Symplecta) hybrida
    ['50134312', '50134300'], // Diptera Limoniidae Symplecta (Symplecta) novaezemblae
    ['50134313', '50134300'], // Diptera Limoniidae Symplecta (Symplecta) chosenensis
    ['50134320', '50134300'], // Diptera Limoniidae Symplecta (Psiloconopa)
    ['50134321', '50134300'], // Diptera Limoniidae Symplecta (Psiloconopa) meigeni
    ['50134322', '50134300'], // Diptera Limoniidae Symplecta (Psiloconopa) pusilla
    ['50134323', '50134300'], // Diptera Limoniidae Symplecta (Psiloconopa) stictica
    ['50134400', '50130000'], // Diptera Limoniidae Ilisia
    ['50134401', '50134400'], // Diptera Limoniidae Ilisia maculata
    ['50134402', '50134400'], // Diptera Limoniidae Ilisia occoecata
    ['50134500', '50130000'], // Diptera Limoniidae Erioconopa
    ['50134501', '50134500'], // Diptera Limoniidae Erioconopa diuturna
    ['50134502', '50134500'], // Diptera Limoniidae Erioconopa trivialis
    ['50134800', '50130000'], // Diptera Limoniidae Ormosia
    ['50134810', '50134800'], // Diptera Limoniidae Ormosia (Ormosia)
    ['50134811', '50134800'], // Diptera Limoniidae Ormosia (Ormosia) aciculata
    ['50134812', '50134800'], // Diptera Limoniidae Ormosia (Ormosia) albitibia
    ['50134813', '50134800'], // Diptera Limoniidae Ormosia (Ormosia) bicornis
    ['50134814', '50134800'], // Diptera Limoniidae Ormosia (Ormosia) depilata
    ['50134815', '50134800'], // Diptera Limoniidae Ormosia (Ormosia) hederae
    ['50134816', '50134800'], // Diptera Limoniidae Ormosia (Ormosia) lineata
    ['50134817', '50134800'], // Diptera Limoniidae Ormosia (Ormosia) nodulosa
    ['50134818', '50134800'], // Diptera Limoniidae Ormosia (Ormosia) pseudosimilis
    ['50134819', '50134800'], // Diptera Limoniidae Ormosia (Ormosia) staegeriana
    ['5013481A', '50134800'], // Diptera Limoniidae Ormosia (Ormosia) fascipennis
    ['50134900', '50130000'], // Diptera Limoniidae Rhypholophus
    ['50134901', '50134900'], // Diptera Limoniidae Rhypholophus bifurcatus
    ['50134902', '50134900'], // Diptera Limoniidae Rhypholophus haemorrhoidalis
    ['50134903', '50134900'], // Diptera Limoniidae Rhypholophus varia
    ['50134Y00', '50130000'], // Diptera Limoniidae Ormosia
    ['50135000', '50130000'], // Diptera Limoniidae Scleroprocta
    ['50135001', '50135000'], // Diptera Limoniidae Scleroprocta pentagonalis
    ['50135002', '50135000'], // Diptera Limoniidae Scleroprocta sororcula
    ['50135100', '50130000'], // Diptera Limoniidae Tasiocera
    ['50135120', '50135100'], // Diptera Limoniidae Tasiocera (Dasymolophilus)
    ['50135121', '50135100'], // Diptera Limoniidae Tasiocera (Dasymolophilus) collini
    ['50135122', '50135100'], // Diptera Limoniidae Tasiocera (Dasymolophilus) fuscescens
    ['50135123', '50135100'], // Diptera Limoniidae Tasiocera (Dasymolophilus) jenkinsoni
    ['50135125', '50135100'], // Diptera Limoniidae Tasiocera (Dasymolophilus) murina
    ['50135126', '50135100'], // Diptera Limoniidae Tasiocera (Dasymolophilus) muscula
    ['50135127', '50135100'], // Diptera Limoniidae Tasiocera (Dasymolophilus) robusta
    ['50135300', '50130000'], // Diptera Limoniidae Molophilus
    ['50135330', '50135300'], // Diptera Limoniidae Molophilus (Molophilus)
    ['50135331', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) appendiculatus
    ['50135332', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) ater
    ['50135333', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) bifidus
    ['50135334', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) bihamatus
    ['50135335', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) cinereifrons
    ['50135336', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) corniger
    ['50135337', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) curvatus
    ['50135338', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) czizeki
    ['50135339', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) flavus
    ['5013533A', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) griseus
    ['5013533B', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) lackschewitzianus
    ['5013533C', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) medius
    ['5013533D', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) niger
    ['5013533E', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) obscurus
    ['5013533F', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) occultus
    ['5013533G', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) ochraceus
    ['5013533H', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) crassipygus
    ['5013533J', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) pleuralis
    ['5013533K', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) propinquus
    ['5013533L', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) pusillus
    ['5013533M', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) serpentiger
    ['5013533N', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) undulatus
    ['5013533P', '50135300'], // Diptera Limoniidae Molophilus (Molophilus) variispinus
    ['50135400', '50130000'], // Diptera Limoniidae Paradelphomyia
    ['50135410', '50135400'], // Diptera Limoniidae Paradelphomyia (Oxyrhiza)
    ['50135411', '50135400'], // Diptera Limoniidae Paradelphomyia (Oxyrhiza) dalei
    ['50135412', '50135400'], // Diptera Limoniidae Paradelphomyia (Oxyrhiza) ecalcarata
    ['50135413', '50135400'], // Diptera Limoniidae Paradelphomyia (Oxyrhiza) fuscula
    ['50135414', '50135400'], // Diptera Limoniidae Paradelphomyia (Oxyrhiza) nielseni
    ['50135415', '50135400'], // Diptera Limoniidae Paradelphomyia (Oxyrhiza) senilis
    ['50135500', '50130000'], // Diptera Limoniidae Arctoconopa
    ['50135501', '50135500'], // Diptera Limoniidae Arctoconopa melampodia
    ['50135600', '50130000'], // Diptera Limoniidae Gnophomyia
    ['50135601', '50135600'], // Diptera Limoniidae Gnophomyia elsneri
    ['50135602', '50135600'], // Diptera Limoniidae Gnophomyia viridipennis
    ['50135603', '50135600'], // Diptera Limoniidae Gnophomyia lugubris
    ['50135700', '50130000'], // Diptera Limoniidae Epiphragma
    ['50135710', '50135700'], // Diptera Limoniidae Epiphragma (Epiphragma)
    ['50135711', '50135700'], // Diptera Limoniidae Epiphragma (Epiphragma) ocellare
    ['50135800', '50130000'], // Diptera Limoniidae Discobola
    ['50135801', '50135800'], // Diptera Limoniidae Discobola annulata
    ['5013Y100', '50130000'], // Diptera Limoniidae Erioptera
    ['50140000', '50000000'], // Diptera Pediciidae
    ['50140100', '50140000'], // Diptera Pediciidae Pedicia
    ['50140110', '50140100'], // Diptera Pediciidae Pedicia (Pedicia)
    ['50140111', '50140100'], // Diptera Pediciidae Pedicia (Pedicia) rivosa
    ['50140120', '50140100'], // Diptera Pediciidae Pedicia (Crunobia)
    ['50140121', '50140100'], // Diptera Pediciidae Pedicia (Crunobia) littoralis
    ['50140122', '50140100'], // Diptera Pediciidae Pedicia (Crunobia) straminea
    ['50140130', '50140100'], // Diptera Pediciidae Pedicia (Amalopsis)
    ['50140131', '50140100'], // Diptera Pediciidae Pedicia (Amalopsis) occulta
    ['50140500', '50140000'], // Diptera Pediciidae Dicranota
    ['50140510', '50140500'], // Diptera Pediciidae Dicranota (Dicranota)
    ['50140511', '50140500'], // Diptera Pediciidae Dicranota (Dicranota) bimaculata
    ['50140512', '50140500'], // Diptera Pediciidae Dicranota (Dicranota) guerini
    ['50140520', '50140500'], // Diptera Pediciidae Dicranota (Paradicranota)
    ['50140522', '50140500'], // Diptera Pediciidae Dicranota (Paradicranota) gracilipes
    ['50140523', '50140500'], // Diptera Pediciidae Dicranota (Paradicranota) pavida
    ['50140524', '50140500'], // Diptera Pediciidae Dicranota (Paradicranota) robusta
    ['50140525', '50140500'], // Diptera Pediciidae Dicranota (Paradicranota) subtilis
    ['50140526', '50140500'], // Diptera Pediciidae Dicranota (Paradicranota) simulans
    ['50140530', '50140500'], // Diptera Pediciidae Dicranota (Ludicia)
    ['50140531', '50140500'], // Diptera Pediciidae Dicranota (Ludicia) claripennis
    ['50140532', '50140500'], // Diptera Pediciidae Dicranota (Ludicia) lucidipennis
    ['50140540', '50140500'], // Diptera Pediciidae Dicranota (Rhaphidolabis)
    ['50140541', '50140500'], // Diptera Pediciidae Dicranota (Rhaphidolabis) exclusa
    ['50140600', '50140000'], // Diptera Pediciidae Tricyphona
    ['50140610', '50140600'], // Diptera Pediciidae Tricyphona (Tricyphona)
    ['50140611', '50140600'], // Diptera Pediciidae Tricyphona (Tricyphona) immaculata
    ['50140612', '50140600'], // Diptera Pediciidae Tricyphona (Tricyphona) schummeli
    ['50140613', '50140600'], // Diptera Pediciidae Tricyphona (Tricyphona) unicolor
    ['50140Z00', '50140000'], // Diptera Pediciidae Pedicia
    ['501Y0000', '50000000'], // Diptera Limoniidae (including Dicranota)
    ['501Z0000', '50000000'], // Diptera Tipulidae (including Limoniidae, Cylindrotomidae and Pediciidae)
    ['50200000', '50000000'], // Diptera Psychodoidea
    ['50210000', '50000000'], // Diptera Psychodidae
    ['50210100', '50210000'], // Diptera Psychodidae Sycorax
    ['50210101', '50210100'], // Diptera Psychodidae Sycorax silacea
    ['50210102', '50210100'], // Diptera Psychodidae Sycorax similis
    ['50210103', '50210100'], // Diptera Psychodidae Sycorax feuerborni
    ['50210200', '50210000'], // Diptera Psychodidae Pericoma
    ['50210230', '50210200'], // Diptera Psychodidae Pericoma (Pericoma)
    ['50210231', '50210200'], // Diptera Psychodidae Pericoma (Pericoma) blandula
    ['50210232', '50210200'], // Diptera Psychodidae Pericoma (Pericoma) calcilega
    ['50210233', '50210200'], // Diptera Psychodidae Pericoma (Pericoma) diversa
    ['50210234', '50210200'], // Diptera Psychodidae Pericoma (Pericoma) exquisita
    ['50210235', '50210200'], // Diptera Psychodidae Pericoma (Pericoma) fallax
    ['50210236', '50210200'], // Diptera Psychodidae Pericoma (Pericoma) neoblandula
    ['50210237', '50210200'], // Diptera Psychodidae Pericoma (Pericoma) pseudoexquisita
    ['50210238', '50210200'], // Diptera Psychodidae Pericoma (Pericoma) rivularis
    ['50210239', '50210200'], // Diptera Psychodidae Pericoma (Pericoma) tonnoiri
    ['5021023A', '50210200'], // Diptera Psychodidae Pericoma (Pericoma) trifasciata
    ['50210250', '50210200'], // Diptera Psychodidae Pericoma (Pneumia)
    ['50210251', '50210200'], // Diptera Psychodidae Pericoma (Pneumia) canescens
    ['50210252', '50210200'], // Diptera Psychodidae Pericoma (Pneumia) compta
    ['50210253', '50210200'], // Diptera Psychodidae Pericoma (Pneumia) crispi
    ['50210254', '50210200'], // Diptera Psychodidae Pericoma (Pneumia) extricata
    ['50210255', '50210200'], // Diptera Psychodidae Pericoma (Pneumia) gracilis
    ['50210256', '50210200'], // Diptera Psychodidae Pericoma (Pneumia) mutua
    ['50210257', '50210200'], // Diptera Psychodidae Pericoma (Pneumia) nubila
    ['50210258', '50210200'], // Diptera Psychodidae Pericoma (Pneumia) palustris
    ['50210259', '50210200'], // Diptera Psychodidae Pericoma (Pneumia) pilularia
    ['5021025A', '50210200'], // Diptera Psychodidae Pericoma (Pneumia) sziladyi
    ['5021025B', '50210200'], // Diptera Psychodidae Pericoma (Pneumia) trivialis
    ['5021025Z', '50210200'], // Diptera Psychodidae Pericoma trivialis group
    ['50210270', '50210200'], // Diptera Psychodidae Pericoma (Ulomyia)
    ['50210271', '50210200'], // Diptera Psychodidae Pericoma (Ulomyia) cognata
    ['50210272', '50210200'], // Diptera Psychodidae Pericoma (Ulomyia) fuliginosa
    ['50210300', '50210000'], // Diptera Psychodidae Telmatoscopus
    ['50210301', '50210300'], // Diptera Psychodidae Telmatoscopus advenus
    ['50210302', '50210300'], // Diptera Psychodidae Telmatoscopus ambiguus
    ['50210304', '50210300'], // Diptera Psychodidae Telmatoscopus britteni
    ['50210305', '50210300'], // Diptera Psychodidae Telmatoscopus consors
    ['50210308', '50210300'], // Diptera Psychodidae Telmatoscopus labeculosus
    ['50210309', '50210300'], // Diptera Psychodidae Telmatoscopus laurencei
    ['50210311', '50210300'], // Diptera Psychodidae Telmatoscopus longicornis
    ['50210312', '50210300'], // Diptera Psychodidae Telmatoscopus acuminatus
    ['50210313', '50210300'], // Diptera Psychodidae Telmatoscopus morulus
    ['50210314', '50210300'], // Diptera Psychodidae Telmatoscopus rothschildii
    ['50210315', '50210300'], // Diptera Psychodidae Telmatoscopus soleatus
    ['50210316', '50210300'], // Diptera Psychodidae Telmatoscopus parvulus
    ['50210317', '50210300'], // Diptera Psychodidae Telmatoscopus tristis
    ['50210319', '50210300'], // Diptera Psychodidae Telmatoscopus ellisi
    ['50210321', '50210300'], // Diptera Psychodidae Telmatoscopus pseudolongicornis
    ['50210322', '50210300'], // Diptera Psychodidae Telmatoscopus similis
    ['50210323', '50210300'], // Diptera Psychodidae Telmatoscopus vaillanti
    ['50210324', '50210300'], // Diptera Psychodidae Telmatoscopus valachicus
    ['50210400', '50210000'], // Diptera Psychodidae Peripsychoda
    ['50210401', '50210400'], // Diptera Psychodidae Peripsychoda auriculata
    ['50210402', '50210400'], // Diptera Psychodidae Peripsychoda fusca
    ['50210500', '50210000'], // Diptera Psychodidae Mormia
    ['50210501', '50210500'], // Diptera Psychodidae Mormia andrenipes
    ['50210502', '50210500'], // Diptera Psychodidae Mormia caliginosa
    ['50210503', '50210500'], // Diptera Psychodidae Mormia eatoni
    ['50210504', '50210500'], // Diptera Psychodidae Mormia furva
    ['50210505', '50210500'], // Diptera Psychodidae Mormia incerta
    ['50210506', '50210500'], // Diptera Psychodidae Mormia palposa
    ['50210507', '50210500'], // Diptera Psychodidae Mormia revisenda
    ['50210508', '50210500'], // Diptera Psychodidae Mormia satchelli
    ['50210600', '50210000'], // Diptera Psychodidae Panimerus
    ['50210601', '50210600'], // Diptera Psychodidae Panimerus albifacies
    ['50210602', '50210600'], // Diptera Psychodidae Panimerus goetghebueri
    ['50210603', '50210600'], // Diptera Psychodidae Panimerus notabilis
    ['50210604', '50210600'], // Diptera Psychodidae Panimerus goodi
    ['50210605', '50210600'], // Diptera Psychodidae Panimerus denticulatus
    ['50210606', '50210600'], // Diptera Psychodidae Panimerus maynei
    ['50210700', '50210000'], // Diptera Psychodidae Threticus
    ['50210701', '50210700'], // Diptera Psychodidae Threticus lucifugus
    ['50210702', '50210700'], // Diptera Psychodidae Threticus balkaneoalpinus
    ['50210900', '50210000'], // Diptera Psychodidae Psychoda
    ['50210902', '50210900'], // Diptera Psychodidae Psychoda brevicornis
    ['50210903', '50210900'], // Diptera Psychodidae Psychoda cinerea
    ['50210904', '50210900'], // Diptera Psychodidae Psychoda gemina
    ['50210907', '50210900'], // Diptera Psychodidae Psychoda phalaenoides
    ['50210908', '50210900'], // Diptera Psychodidae Psychoda albipennis
    ['50210909', '50210900'], // Diptera Psychodidae Psychoda surcoufi
    ['5021090A', '50210900'], // Diptera Psychodidae Psychoda buxtoni
    ['5021090B', '50210900'], // Diptera Psychodidae Psychoda crassipenis
    ['5021090C', '50210900'], // Diptera Psychodidae Psychoda erminia
    ['5021090D', '50210900'], // Diptera Psychodidae Psychoda grisescens
    ['5021090E', '50210900'], // Diptera Psychodidae Psychoda lobata
    ['5021090F', '50210900'], // Diptera Psychodidae Psychoda minuta
    ['5021090G', '50210900'], // Diptera Psychodidae Psychoda setigera
    ['5021090H', '50210900'], // Diptera Psychodidae Psychoda trinodulosa
    ['50210X00', '50210000'], // Diptera Psychodidae Psychoda
    ['50210Z00', '50210000'], // Diptera Psychodidae Pericoma
    ['50211100', '50210000'], // Diptera Psychodidae Bazarella
    ['50211101', '50211100'], // Diptera Psychodidae Bazarella neglecta
    ['50211200', '50210000'], // Diptera Psychodidae Szaboiella
    ['50211201', '50211200'], // Diptera Psychodidae Szaboiella hibernica
    ['50211300', '50210000'], // Diptera Psychodidae Tonnoiriella
    ['50211301', '50211300'], // Diptera Psychodidae Tonnoiriella anchoriformis
    ['50211302', '50211300'], // Diptera Psychodidae Tonnoiriella nigricauda
    ['50211303', '50211300'], // Diptera Psychodidae Tonnoiriella pulchra
    ['50211400', '50210000'], // Diptera Psychodidae Boreoclytocerus
    ['50211401', '50211400'], // Diptera Psychodidae Boreoclytocerus dalii
    ['50211402', '50211400'], // Diptera Psychodidae Boreoclytocerus ocellaris
    ['50211403', '50211400'], // Diptera Psychodidae Boreoclytocerus rivosus
    ['50211500', '50210000'], // Diptera Psychodidae Atrichobrunettia
    ['50211510', '50211500'], // Diptera Psychodidae Atrichobrunettia (Mirousiella)
    ['50211511', '50211500'], // Diptera Psychodidae Atrichobrunettia (Mirousiella) angustipennis
    ['50211600', '50210000'], // Diptera Psychodidae Paramormia
    ['50211601', '50211600'], // Diptera Psychodidae Paramormia decipiens
    ['50211602', '50211600'], // Diptera Psychodidae Paramormia fratercula
    ['50211603', '50211600'], // Diptera Psychodidae Paramormia polyascoidea
    ['50211604', '50211600'], // Diptera Psychodidae Paramormia ustulata
    ['50211700', '50210000'], // Diptera Psychodidae Feuerborniella
    ['50211701', '50211700'], // Diptera Psychodidae Feuerborniella obscura
    ['50211800', '50210000'], // Diptera Psychodidae Tinearia
    ['50211801', '50211800'], // Diptera Psychodidae Tinearia alternata
    ['50211802', '50211800'], // Diptera Psychodidae Tinearia lativentris
    ['50211900', '50210000'], // Diptera Psychodidae Saraiella
    ['50211901', '50211900'], // Diptera Psychodidae Saraiella consigliana
    ['50220000', '50000000'], // Diptera Ptychopteridae
    ['50220100', '50220000'], // Diptera Ptychopteridae Ptychoptera
    ['50220101', '50220100'], // Diptera Ptychopteridae Ptychoptera albimana
    ['50220102', '50220100'], // Diptera Ptychopteridae Ptychoptera contaminata
    ['50220103', '50220100'], // Diptera Ptychopteridae Ptychoptera lacustris
    ['50220104', '50220100'], // Diptera Ptychopteridae Ptychoptera longicauda
    ['50220105', '50220100'], // Diptera Ptychopteridae Ptychoptera minuta
    ['50220106', '50220100'], // Diptera Ptychopteridae Ptychoptera paludosa
    ['50220107', '50220100'], // Diptera Ptychopteridae Ptychoptera scutellaris
    ['50300000', '50000000'], // Diptera Culicoidea (Excluding chironomidae)
    ['50310000', '50000000'], // Diptera Dixidae
    ['50310100', '50310000'], // Diptera Dixidae Dixa
    ['50310101', '50310100'], // Diptera Dixidae Dixa dilatata
    ['50310102', '50310100'], // Diptera Dixidae Dixa maculata
    ['50310103', '50310100'], // Diptera Dixidae Dixa nebulosa
    ['50310104', '50310100'], // Diptera Dixidae Dixa nubilipennis
    ['50310105', '50310100'], // Diptera Dixidae Dixa puberula
    ['50310106', '50310100'], // Diptera Dixidae Dixa submaculata
    ['5031010Z', '50310100'], // Diptera Dixidae Dixa maculata complex
    ['50310200', '50310000'], // Diptera Dixidae Dixella
    ['50310201', '50310200'], // Diptera Dixidae Dixella aestivalis
    ['50310202', '50310200'], // Diptera Dixidae Dixella amphibia
    ['50310203', '50310200'], // Diptera Dixidae Dixella attica
    ['50310204', '50310200'], // Diptera Dixidae Dixella autumnalis
    ['50310205', '50310200'], // Diptera Dixidae Dixella filicornis
    ['50310206', '50310200'], // Diptera Dixidae Dixella martinii
    ['50310207', '50310200'], // Diptera Dixidae Dixella obscura
    ['50310208', '50310200'], // Diptera Dixidae Dixella serotina
    ['50310209', '50310200'], // Diptera Dixidae Dixella graeca
    ['50320000', '50000000'], // Diptera Chaoboridae
    ['50320100', '50320000'], // Diptera Chaoboridae Chaoborus
    ['50320110', '50320100'], // Diptera Chaoboridae Chaoborus (Chaoborus)
    ['50320111', '50320100'], // Diptera Chaoboridae Chaoborus (Chaoborus) crystallinus
    ['50320112', '50320100'], // Diptera Chaoboridae Chaoborus (Chaoborus) flavicans
    ['50320113', '50320100'], // Diptera Chaoboridae Chaoborus (Chaoborus) obscuripes
    ['50320120', '50320100'], // Diptera Chaoboridae Chaoborus (Peusomyia)
    ['50320121', '50320100'], // Diptera Chaoboridae Chaoborus (Peusomyia) pallidus
    ['50320300', '50320000'], // Diptera Chaoboridae Mochlonyx
    ['50320301', '50320300'], // Diptera Chaoboridae Mochlonyx velutinus
    ['50320302', '50320300'], // Diptera Chaoboridae Mochlonyx fuliginosus
    ['50330000', '50000000'], // Diptera Culicidae
    ['50330100', '50330000'], // Diptera Culicidae Anopheles
    ['50330110', '50330100'], // Diptera Culicidae Anopheles (Anopheles)
    ['50330111', '50330100'], // Diptera Culicidae Anopheles (Anopheles) algeriensis
    ['50330112', '50330100'], // Diptera Culicidae Anopheles (Anopheles) atroparvus
    ['50330113', '50330100'], // Diptera Culicidae Anopheles (Anopheles) claviger
    ['50330114', '50330100'], // Diptera Culicidae Anopheles (Anopheles) messeae
    ['50330115', '50330100'], // Diptera Culicidae Anopheles (Anopheles) plumbeus
    ['50330116', '50330100'], // Diptera Culicidae Anopheles (Anopheles) daciae
    ['5033011Y', '50330100'], // Diptera Culicidae Anopheles (Anopheles) algeriensis group
    ['5033011Z', '50330100'], // Diptera Culicidae Anopheles (Anopheles) atroparvus group
    ['50330300', '50330000'], // Diptera Culicidae Coquillettidia
    ['50330321', '50330300'], // Diptera Culicidae Coquillettidia richiardii
    ['50330500', '50330000'], // Diptera Culicidae Orthopodomyia
    ['50330501', '50330500'], // Diptera Culicidae Orthopodomyia pulcripalpis
    ['50330600', '50330000'], // Diptera Culicidae Aedes
    ['50330650', '50330600'], // Diptera Culicidae Aedes (Aedimorphus)
    ['50330651', '50330600'], // Diptera Culicidae Aedes (Aedimorphus) vexans
    ['50330660', '50330600'], // Diptera Culicidae Aedes (Aedes)
    ['50330661', '50330600'], // Diptera Culicidae Aedes (Aedes) cinereus
    ['50330700', '50330000'], // Diptera Culicidae Ochlerotatus
    ['50330710', '50330700'], // Diptera Culicidae Ochlerotatus (Finlaya)
    ['50330711', '50330700'], // Diptera Culicidae Ochlerotatus (Finlaya) geniculatus
    ['50330720', '50330700'], // Diptera Culicidae Ochlerotatus (Rusticoides)
    ['50330721', '50330700'], // Diptera Culicidae Ochlerotatus (Rusticoides) rusticus
    ['50330730', '50330700'], // Diptera Culicidae Ochlerotatus (Ochlerotatus)
    ['50330731', '50330700'], // Diptera Culicidae Ochlerotatus (Ochlerotatus) annulipes
    ['50330732', '50330700'], // Diptera Culicidae Ochlerotatus (Ochlerotatus) cantans
    ['50330733', '50330700'], // Diptera Culicidae Ochlerotatus (Ochlerotatus) caspius
    ['50330734', '50330700'], // Diptera Culicidae Ochlerotatus (Ochlerotatus) communis
    ['50330735', '50330700'], // Diptera Culicidae Ochlerotatus (Ochlerotatus) detritus
    ['50330736', '50330700'], // Diptera Culicidae Ochlerotatus (Ochlerotatus) dorsalis
    ['50330737', '50330700'], // Diptera Culicidae Ochlerotatus (Ochlerotatus) flavescens
    ['50330738', '50330700'], // Diptera Culicidae Ochlerotatus (Ochlerotatus) leucomelas
    ['50330739', '50330700'], // Diptera Culicidae Ochlerotatus (Ochlerotatus) punctor
    ['5033073A', '50330700'], // Diptera Culicidae Ochlerotatus (Ochlerotatus) sticticus
    ['50331100', '50330000'], // Diptera Culicidae Culiseta
    ['50331110', '50331100'], // Diptera Culicidae Culiseta (Culiseta)
    ['50331111', '50331100'], // Diptera Culicidae Culiseta (Culiseta) alaskaensis
    ['50331112', '50331100'], // Diptera Culicidae Culiseta (Culiseta) annulata
    ['50331113', '50331100'], // Diptera Culicidae Culiseta (Culiseta) subochrea
    ['50331120', '50331100'], // Diptera Culicidae Culiseta (Culicella)
    ['50331121', '50331100'], // Diptera Culicidae Culiseta (Culicella) fumipennis
    ['50331122', '50331100'], // Diptera Culicidae Culiseta (Culicella) litorea
    ['50331123', '50331100'], // Diptera Culicidae Culiseta (Culicella) morsitans
    ['50331130', '50331100'], // Diptera Culicidae Culiseta (Allotheobaldia)
    ['50331131', '50331100'], // Diptera Culicidae Culiseta (Allotheobaldia) longiareolata
    ['50331400', '50330000'], // Diptera Culicidae Culex
    ['50331410', '50331400'], // Diptera Culicidae Culex (Barraudius)
    ['50331411', '50331400'], // Diptera Culicidae Culex (Barraudius) modestus
    ['50331420', '50331400'], // Diptera Culicidae Culex (Neoculex)
    ['50331421', '50331400'], // Diptera Culicidae Culex (Neoculex) territans
    ['50331430', '50331400'], // Diptera Culicidae Culex (Culex)
    ['50331431', '50331400'], // Diptera Culicidae Culex (Culex) pipiens
    ['50331432', '50331400'], // Diptera Culicidae Culex (Culex) torrentium
    ['50340000', '50000000'], // Diptera Thaumaleidae
    ['50340100', '50340000'], // Diptera Thaumaleidae Thaumalea
    ['50340101', '50340100'], // Diptera Thaumaleidae Thaumalea testacea
    ['50340102', '50340100'], // Diptera Thaumaleidae Thaumalea truncata
    ['50340103', '50340100'], // Diptera Thaumaleidae Thaumalea verralli
    ['50350000', '50000000'], // Diptera Ceratopogonidae
    ['50350100', '50350000'], // Diptera Ceratopogonidae Forcipomyia
    ['50350120', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Caloforcipomyia)
    ['50350121', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Caloforcipomyia) glauca
    ['50350130', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Forcipomyia)
    ['50350131', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Forcipomyia) bipunctata
    ['50350133', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Forcipomyia) brevipennis
    ['50350134', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Forcipomyia) ciliata
    ['50350135', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Forcipomyia) kaltenbachii
    ['50350136', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Forcipomyia) myrmecophila
    ['50350137', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Forcipomyia) nigra
    ['50350138', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Forcipomyia) costata
    ['50350139', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Forcipomyia) pulchrithorax
    ['5035013A', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Forcipomyia) radicicola
    ['5035013B', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Forcipomyia) sphagnophila
    ['5035013C', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Forcipomyia) tenuisquama
    ['5035013D', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Forcipomyia) crassipes
    ['50350150', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Microhelea)
    ['50350151', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Microhelea) fuliginosa
    ['50350160', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Pterobosca)
    ['50350161', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Pterobosca) paludis
    ['50350170', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Synthyridomyia)
    ['50350171', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Synthyridomyia) murina
    ['50350180', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Thyridomyia)
    ['50350181', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Thyridomyia) frutetorum
    ['50350182', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Thyridomyia) monilicornis
    ['50350183', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Thyridomyia) rugosa
    ['50350190', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Trichohelea)
    ['50350191', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Trichohelea) eques
    ['50350192', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Trichohelea) tonnoiri
    ['503501A0', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Panhelea)
    ['503501A1', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Panhelea) brevicubitus
    ['503501B0', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Euprojoannisia)
    ['503501B1', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Euprojoannisia) alacris
    ['503501B2', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Euprojoannisia) palustris
    ['503501B3', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Euprojoannisia) phlebotomoides
    ['503501B4', '50350100'], // Diptera Ceratopogonidae Forcipomyia (Euprojoannisia) titillans
    ['50351300', '50350000'], // Diptera Ceratopogonidae Atrichopogon
    ['50351310', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Atrichopogon)
    ['50351311', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Atrichopogon) aethiops
    ['50351313', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Atrichopogon) brunnipes
    ['50351314', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Atrichopogon) fuscus
    ['50351317', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Atrichopogon) minutus
    ['50351318', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Atrichopogon) pavidus
    ['50351330', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Meloehelea)
    ['50351331', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Meloehelea) winnertzi
    ['50351332', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Meloehelea) oedemerarum
    ['50351333', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Meloehelea) lucorum
    ['50351340', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Lophomyidium)
    ['50351341', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Lophomyidium) rostratus
    ['50351350', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Psammopogon)
    ['50351352', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Psammopogon) muelleri
    ['50351360', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Psilokempia)
    ['50351361', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Psilokempia) appendiculatus
    ['50351362', '50351300'], // Diptera Ceratopogonidae Atrichopogon (Psilokempia) forcipatus
    ['50351600', '50350000'], // Diptera Ceratopogonidae Dasyhelea
    ['50351620', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Dasyhelea)
    ['50351621', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Dasyhelea) bensoni
    ['50351622', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Dasyhelea) dufouri
    ['50351623', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Dasyhelea) flavifrons
    ['50351624', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Dasyhelea) saxicola
    ['50351630', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Dicryptoscena)
    ['50351632', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Dicryptoscena) modesta
    ['50351633', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Dicryptoscena) notata
    ['50351640', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Prokempia)
    ['50351641', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Prokempia) flaviventris
    ['50351642', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Prokempia) biunguis
    ['50351650', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Pseudoculicoides)
    ['50351651', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Pseudoculicoides) corinneae
    ['50351652', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Pseudoculicoides) flavoscutellata
    ['50351660', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Sebessia)
    ['50351661', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Sebessia) acuminata
    ['50351662', '50351600'], // Diptera Ceratopogonidae Dasyhelea (Sebessia) holosericea
    ['50352000', '50350000'], // Diptera Ceratopogonidae Alluaudomyia
    ['50352002', '50352000'], // Diptera Ceratopogonidae Alluaudomyia riparia
    ['50352100', '50350000'], // Diptera Ceratopogonidae Culicoides
    ['50352110', '50352100'], // Diptera Ceratopogonidae Culicoides (Avaritia)
    ['50352111', '50352100'], // Diptera Ceratopogonidae Culicoides (Avaritia) chiopterus
    ['50352112', '50352100'], // Diptera Ceratopogonidae Culicoides (Avaritia) dewulfi
    ['50352113', '50352100'], // Diptera Ceratopogonidae Culicoides (Avaritia) obsoletus
    ['50352114', '50352100'], // Diptera Ceratopogonidae Culicoides (Avaritia) scoticus
    ['50352120', '50352100'], // Diptera Ceratopogonidae Culicoides (Beltranmyia)
    ['50352121', '50352100'], // Diptera Ceratopogonidae Culicoides (Beltranmyia) circumscriptus
    ['50352122', '50352100'], // Diptera Ceratopogonidae Culicoides (Beltranmyia) manchuriensis
    ['50352123', '50352100'], // Diptera Ceratopogonidae Culicoides (Beltranmyia) salinarius
    ['50352130', '50352100'], // Diptera Ceratopogonidae Culicoides (Culicoides)
    ['50352131', '50352100'], // Diptera Ceratopogonidae Culicoides (Culicoides) delta
    ['50352132', '50352100'], // Diptera Ceratopogonidae Culicoides (Culicoides) fagineus
    ['50352133', '50352100'], // Diptera Ceratopogonidae Culicoides (Culicoides) grisescens
    ['50352134', '50352100'], // Diptera Ceratopogonidae Culicoides (Culicoides) newsteadi
    ['50352135', '50352100'], // Diptera Ceratopogonidae Culicoides (Culicoides) impunctatus
    ['50352137', '50352100'], // Diptera Ceratopogonidae Culicoides (Culicoides) pulicaris
    ['50352138', '50352100'], // Diptera Ceratopogonidae Culicoides (Culicoides) punctatus
    ['50352140', '50352100'], // Diptera Ceratopogonidae Culicoides (Silvaticulicoides)
    ['50352141', '50352100'], // Diptera Ceratopogonidae Culicoides (Silvaticulicoides) achrayi
    ['50352142', '50352100'], // Diptera Ceratopogonidae Culicoides (Silvaticulicoides) fascipennis
    ['50352143', '50352100'], // Diptera Ceratopogonidae Culicoides (Silvaticulicoides) pallidicornis
    ['50352144', '50352100'], // Diptera Ceratopogonidae Culicoides (Silvaticulicoides) picturatus
    ['50352145', '50352100'], // Diptera Ceratopogonidae Culicoides (Silvaticulicoides) subfasciipennis
    ['50352150', '50352100'], // Diptera Ceratopogonidae Culicoides (Monoculicoides)
    ['50352151', '50352100'], // Diptera Ceratopogonidae Culicoides (Monoculicoides) nubeculosus
    ['50352152', '50352100'], // Diptera Ceratopogonidae Culicoides (Monoculicoides) parroti
    ['50352153', '50352100'], // Diptera Ceratopogonidae Culicoides (Monoculicoides) puncticollis
    ['50352154', '50352100'], // Diptera Ceratopogonidae Culicoides (Monoculicoides) riethi
    ['50352155', '50352100'], // Diptera Ceratopogonidae Culicoides (Monoculicoides) stigma
    ['50352160', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta)
    ['50352162', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) albicans
    ['50352163', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) brunnicans
    ['50352164', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) cataneii
    ['50352165', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) duddingstoni
    ['50352167', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) furcillatus
    ['50352168', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) heliophilus
    ['50352169', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) kibunensis
    ['5035216A', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) maritimus
    ['5035216B', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) minutissimus
    ['5035216C', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) alazanicus
    ['5035216D', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) festivipennis
    ['5035216E', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) poperinghensis
    ['5035216F', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) griseidorsum
    ['5035216G', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) simulator
    ['5035216H', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) clintoni
    ['5035216J', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) vexans
    ['5035216K', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) cameroni
    ['5035216L', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) reconditus
    ['5035216M', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) segnis
    ['5035216N', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) tbilisicus
    ['5035216P', '50352100'], // Diptera Ceratopogonidae Culicoides (Oecacta) clastrieri
    ['50353000', '50350000'], // Diptera Ceratopogonidae Ceratopogon
    ['50353001', '50353000'], // Diptera Ceratopogonidae Ceratopogon communis
    ['50353002', '50353000'], // Diptera Ceratopogonidae Ceratopogon grandiforceps
    ['50353003', '50353000'], // Diptera Ceratopogonidae Ceratopogon lacteipennis
    ['50353004', '50353000'], // Diptera Ceratopogonidae Ceratopogon niveipennis
    ['50353005', '50353000'], // Diptera Ceratopogonidae Ceratopogon denticulatus
    ['50353700', '50350000'], // Diptera Ceratopogonidae Serromyia
    ['50353701', '50353700'], // Diptera Ceratopogonidae Serromyia atra
    ['50353702', '50353700'], // Diptera Ceratopogonidae Serromyia femorata
    ['50353703', '50353700'], // Diptera Ceratopogonidae Serromyia morio
    ['50353705', '50353700'], // Diptera Ceratopogonidae Serromyia ledicola
    ['50353706', '50353700'], // Diptera Ceratopogonidae Serromyia rufitarsis
    ['50353707', '50353700'], // Diptera Ceratopogonidae Serromyia subinermis
    ['50353800', '50350000'], // Diptera Ceratopogonidae Stilobezzia
    ['50353810', '50353800'], // Diptera Ceratopogonidae Stilobezzia (Acanthohelea)
    ['50353812', '50353800'], // Diptera Ceratopogonidae Stilobezzia (Acanthohelea) gracilis
    ['50353813', '50353800'], // Diptera Ceratopogonidae Stilobezzia (Acanthohelea) lutacea
    ['50353814', '50353800'], // Diptera Ceratopogonidae Stilobezzia (Acanthohelea) ochracea
    ['50353820', '50353800'], // Diptera Ceratopogonidae Stilobezzia (Stilobezzia)
    ['50353821', '50353800'], // Diptera Ceratopogonidae Stilobezzia (Stilobezzia) flavirostris
    ['50354000', '50350000'], // Diptera Ceratopogonidae Clinohelea
    ['50354001', '50354000'], // Diptera Ceratopogonidae Clinohelea unimaculata
    ['50354100', '50350000'], // Diptera Ceratopogonidae Neurohelea
    ['50354101', '50354100'], // Diptera Ceratopogonidae Neurohelea luteitarsis
    ['50354200', '50350000'], // Diptera Ceratopogonidae Mallochohelea
    ['50354201', '50354200'], // Diptera Ceratopogonidae Mallochohelea inermis
    ['50354202', '50354200'], // Diptera Ceratopogonidae Mallochohelea munda
    ['50354203', '50354200'], // Diptera Ceratopogonidae Mallochohelea nitida
    ['50354204', '50354200'], // Diptera Ceratopogonidae Mallochohelea setigera
    ['50354300', '50350000'], // Diptera Ceratopogonidae Probezzia
    ['50354301', '50354300'], // Diptera Ceratopogonidae Probezzia seminigra
    ['50354302', '50354300'], // Diptera Ceratopogonidae Probezzia concinna
    ['50354400', '50350000'], // Diptera Ceratopogonidae Sphaeromias
    ['50354401', '50354400'], // Diptera Ceratopogonidae Sphaeromias miricornis
    ['50354402', '50354400'], // Diptera Ceratopogonidae Sphaeromias fasciatus
    ['50354403', '50354400'], // Diptera Ceratopogonidae Sphaeromias pictus
    ['50354500', '50350000'], // Diptera Ceratopogonidae Palpomyia
    ['50354502', '50354500'], // Diptera Ceratopogonidae Palpomyia armipes
    ['50354503', '50354500'], // Diptera Ceratopogonidae Palpomyia brevicornis
    ['50354504', '50354500'], // Diptera Ceratopogonidae Palpomyia distincta
    ['50354506', '50354500'], // Diptera Ceratopogonidae Palpomyia flavipes
    ['50354508', '50354500'], // Diptera Ceratopogonidae Palpomyia grossipes
    ['50354509', '50354500'], // Diptera Ceratopogonidae Palpomyia lineata
    ['50354511', '50354500'], // Diptera Ceratopogonidae Palpomyia luteifemorata
    ['50354512', '50354500'], // Diptera Ceratopogonidae Palpomyia brachialis
    ['50354513', '50354500'], // Diptera Ceratopogonidae Palpomyia nigripes
    ['50354514', '50354500'], // Diptera Ceratopogonidae Palpomyia praeusta
    ['50354515', '50354500'], // Diptera Ceratopogonidae Palpomyia quadrispinosa
    ['50354517', '50354500'], // Diptera Ceratopogonidae Palpomyia semifumosa
    ['50354518', '50354500'], // Diptera Ceratopogonidae Palpomyia serripes
    ['50354519', '50354500'], // Diptera Ceratopogonidae Palpomyia spinipes
    ['50354521', '50354500'], // Diptera Ceratopogonidae Palpomyia tibialis
    ['50354522', '50354500'], // Diptera Ceratopogonidae Palpomyia pubescens
    ['50354600', '50350000'], // Diptera Ceratopogonidae Bezzia
    ['50354620', '50354600'], // Diptera Ceratopogonidae Bezzia (Bezzia)
    ['50354621', '50354600'], // Diptera Ceratopogonidae Bezzia (Bezzia) coracina
    ['50354622', '50354600'], // Diptera Ceratopogonidae Bezzia (Bezzia) decincta
    ['50354623', '50354600'], // Diptera Ceratopogonidae Bezzia (Bezzia) flavicornis
    ['50354624', '50354600'], // Diptera Ceratopogonidae Bezzia (Bezzia) nigritula
    ['50354625', '50354600'], // Diptera Ceratopogonidae Bezzia (Bezzia) nobilis
    ['50354626', '50354600'], // Diptera Ceratopogonidae Bezzia (Bezzia) ornata
    ['50354627', '50354600'], // Diptera Ceratopogonidae Bezzia (Bezzia) pygmaea
    ['50354628', '50354600'], // Diptera Ceratopogonidae Bezzia (Bezzia) winnertziana
    ['50354630', '50354600'], // Diptera Ceratopogonidae Bezzia (Homobezzia)
    ['50354631', '50354600'], // Diptera Ceratopogonidae Bezzia (Homobezzia) annulipes
    ['50354632', '50354600'], // Diptera Ceratopogonidae Bezzia (Homobezzia) bicolor
    ['50354633', '50354600'], // Diptera Ceratopogonidae Bezzia (Homobezzia) circumdata
    ['50354634', '50354600'], // Diptera Ceratopogonidae Bezzia (Homobezzia) fascispinosa
    ['50354635', '50354600'], // Diptera Ceratopogonidae Bezzia (Homobezzia) leucogaster
    ['50354636', '50354600'], // Diptera Ceratopogonidae Bezzia (Homobezzia) multiannulata
    ['50354637', '50354600'], // Diptera Ceratopogonidae Bezzia (Homobezzia) taeniata
    ['50354640', '50354600'], // Diptera Ceratopogonidae Bezzia (Pygobezzia)
    ['50354641', '50354600'], // Diptera Ceratopogonidae Bezzia (Pygobezzia) calceata
    ['50354700', '50350000'], // Diptera Ceratopogonidae Allohelea
    ['50354701', '50354700'], // Diptera Ceratopogonidae Allohelea tessellata
    ['50354800', '50350000'], // Diptera Ceratopogonidae Schizohelea
    ['50354801', '50354800'], // Diptera Ceratopogonidae Schizohelea leucopeza
    ['50354900', '50350000'], // Diptera Ceratopogonidae Brachypogon
    ['50354910', '50354900'], // Diptera Ceratopogonidae Brachypogon (Isohelea)
    ['50354911', '50354900'], // Diptera Ceratopogonidae Brachypogon (Isohelea) nitidula
    ['50354912', '50354900'], // Diptera Ceratopogonidae Brachypogon (Isohelea) perpusilla
    ['50354913', '50354900'], // Diptera Ceratopogonidae Brachypogon (Isohelea) sociabilis
    ['50355000', '50350000'], // Diptera Ceratopogonidae Kolenohelea
    ['50355001', '50355000'], // Diptera Ceratopogonidae Kolenohelea calcarata
    ['50355100', '50350000'], // Diptera Ceratopogonidae Phaenobezzia
    ['50355101', '50355100'], // Diptera Ceratopogonidae Phaenobezzia rubiginosa
    ['50360000', '50000000'], // Diptera Simuliidae
    ['50360100', '50360000'], // Diptera Simuliidae Prosimulium
    ['50360101', '50360100'], // Diptera Simuliidae Prosimulium hirtipes
    ['50360102', '50360100'], // Diptera Simuliidae Prosimulium latimucro
    ['50360103', '50360100'], // Diptera Simuliidae Prosimulium tomosvaryi
    ['50360200', '50360000'], // Diptera Simuliidae Metacnephia
    ['50360201', '50360200'], // Diptera Simuliidae Metacnephia amphora
    ['50360300', '50360000'], // Diptera Simuliidae Simulium
    ['50360310', '50360300'], // Diptera Simuliidae Simulium (Hellichiella)
    ['50360311', '50360300'], // Diptera Simuliidae Simulium (Hellichiella) latipes
    ['50360320', '50360300'], // Diptera Simuliidae Simulium (Nevermannia)
    ['50360321', '50360300'], // Diptera Simuliidae Simulium (Nevermannia) angustitarse
    ['50360322', '50360300'], // Diptera Simuliidae Simulium (Nevermannia) armoricanum
    ['50360323', '50360300'], // Diptera Simuliidae Simulium (Nevermannia) costatum
    ['50360324', '50360300'], // Diptera Simuliidae Simulium (Nevermannia) cryophilum
    ['50360325', '50360300'], // Diptera Simuliidae Simulium (Nevermannia) dunfellense
    ['50360327', '50360300'], // Diptera Simuliidae Simulium (Nevermannia) lundstromi
    ['50360328', '50360300'], // Diptera Simuliidae Simulium (Nevermannia) naturale
    ['50360329', '50360300'], // Diptera Simuliidae Simulium (Nevermannia) urbanum
    ['5036032A', '50360300'], // Diptera Simuliidae Simulium (Nevermannia) juxtacrenobium
    ['5036032B', '50360300'], // Diptera Simuliidae Simulium (Nevermannia) vernum
    ['5036032X', '50360300'], // Diptera Simuliidae Simulium (Nevermannia) vernum group
    ['5036032Y', '50360300'], // Diptera Simuliidae Simulium (Nevermannia) angustitarse group
    ['5036032Z', '50360300'], // Diptera Simuliidae Simulium (Nevermannia) cryophilum group
    ['50360340', '50360300'], // Diptera Simuliidae Simulium (Eusimulium)
    ['50360341', '50360300'], // Diptera Simuliidae Simulium (Eusimulium) angustipes
    ['50360342', '50360300'], // Diptera Simuliidae Simulium (Eusimulium) aureum
    ['50360343', '50360300'], // Diptera Simuliidae Simulium (Eusimulium) velutinum
    ['5036034Z', '50360300'], // Diptera Simuliidae Simulium (Eusimulium) aureum group
    ['50360350', '50360300'], // Diptera Simuliidae Simulium (Wilhelmia)
    ['50360351', '50360300'], // Diptera Simuliidae Simulium (Wilhelmia) equinum
    ['50360352', '50360300'], // Diptera Simuliidae Simulium (Wilhelmia) lineatum
    ['50360353', '50360300'], // Diptera Simuliidae Simulium (Wilhelmia) pseudequinum
    ['50360360', '50360300'], // Diptera Simuliidae Simulium (Boophthora)
    ['50360361', '50360300'], // Diptera Simuliidae Simulium (Boophthora) erythrocephalum
    ['50360380', '50360300'], // Diptera Simuliidae Simulium (Simulium)
    ['50360381', '50360300'], // Diptera Simuliidae Simulium (Simulium) argyreatum
    ['50360382', '50360300'], // Diptera Simuliidae Simulium (Simulium) rostratum
    ['50360383', '50360300'], // Diptera Simuliidae Simulium (Simulium) intermedium
    ['50360384', '50360300'], // Diptera Simuliidae Simulium (Simulium) morsitans
    ['50360385', '50360300'], // Diptera Simuliidae Simulium (Simulium) noelleri
    ['50360386', '50360300'], // Diptera Simuliidae Simulium (Simulium) ornatum
    ['50360387', '50360300'], // Diptera Simuliidae Simulium (Simulium) posticatum
    ['50360388', '50360300'], // Diptera Simuliidae Simulium (Simulium) reptans
    ['50360389', '50360300'], // Diptera Simuliidae Simulium (Simulium) trifasciatum
    ['5036038A', '50360300'], // Diptera Simuliidae Simulium (Simulium) tuberosum
    ['5036038B', '50360300'], // Diptera Simuliidae Simulium (Simulium) variegatum
    ['5036038Y', '50360300'], // Diptera Simuliidae Simulium (Simulium) argyreatum group
    ['5036038Z', '50360300'], // Diptera Simuliidae Simulium (Simulium) ornatum group
    ['503603Y0', '50360300'], // Diptera Simuliidae Simulium (Eusimulium) group
    ['503603Z0', '50360300'], // Diptera Simuliidae Simulium (Simulium) group
    ['50400000', '50000000'], // Diptera Chironomidae
    ['50410000', '50000000'], // Diptera Buchonomyiinae
    ['50410100', '50410000'], // Diptera Buchonomyiinae Buchonomyia
    ['50410101', '50410100'], // Diptera Buchonomyiinae Buchonomyia thienemanni
    ['50420000', '50000000'], // Diptera Tanypodinae
    ['50420100', '50420000'], // Diptera Tanypodinae Clinotanypus
    ['50420101', '50420100'], // Diptera Tanypodinae Clinotanypus nervosus
    ['50420200', '50420000'], // Diptera Tanypodinae Apsectrotanypus
    ['50420201', '50420200'], // Diptera Tanypodinae Apsectrotanypus trifascipennis
    ['50420400', '50420000'], // Diptera Tanypodinae Macropelopia
    ['50420401', '50420400'], // Diptera Tanypodinae Macropelopia adaucta
    ['50420402', '50420400'], // Diptera Tanypodinae Macropelopia nebulosa
    ['50420403', '50420400'], // Diptera Tanypodinae Macropelopia notata
    ['50420500', '50420000'], // Diptera Tanypodinae Procladius
    ['50420510', '50420500'], // Diptera Tanypodinae Procladius (Holotanypus)
    ['50420511', '50420500'], // Diptera Tanypodinae Procladius (Holotanypus) choreus
    ['50420512', '50420500'], // Diptera Tanypodinae Procladius (Holotanypus) crassinervis
    ['50420513', '50420500'], // Diptera Tanypodinae Procladius (Holotanypus) culiciformis
    ['50420514', '50420500'], // Diptera Tanypodinae Procladius (Holotanypus) sagittalis
    ['50420515', '50420500'], // Diptera Tanypodinae Procladius (Holotanypus) signatus
    ['50420516', '50420500'], // Diptera Tanypodinae Procladius (Holotanypus) simplicistylis
    ['50420520', '50420500'], // Diptera Tanypodinae Procladius (Psilotanypus)
    ['50420521', '50420500'], // Diptera Tanypodinae Procladius (Psilotanypus) flavifrons
    ['50420522', '50420500'], // Diptera Tanypodinae Procladius (Psilotanypus) lugens
    ['50420523', '50420500'], // Diptera Tanypodinae Procladius (Psilotanypus) rufovittatus
    ['50420600', '50420000'], // Diptera Tanypodinae Psectrotanypus
    ['50420601', '50420600'], // Diptera Tanypodinae Psectrotanypus varius
    ['50420800', '50420000'], // Diptera Tanypodinae Ablabesmyia
    ['50420801', '50420800'], // Diptera Tanypodinae Ablabesmyia longistyla
    ['50420802', '50420800'], // Diptera Tanypodinae Ablabesmyia monilis
    ['50420803', '50420800'], // Diptera Tanypodinae Ablabesmyia phatta
    ['50420900', '50420000'], // Diptera Tanypodinae Arctopelopia
    ['50420901', '50420900'], // Diptera Tanypodinae Arctopelopia barbitarsis
    ['50420902', '50420900'], // Diptera Tanypodinae Arctopelopia griseipennis
    ['50420903', '50420900'], // Diptera Tanypodinae Arctopelopia melanosoma
    ['50420X00', '50420000'], // Diptera Tanypodinae Krenopelopia
    ['50420Y00', '50420000'], // Diptera Tanypodinae Thienemannimyia
    ['50420Z00', '50420000'], // Diptera Tanypodinae Zavrelimyia
    ['50421000', '50420000'], // Diptera Tanypodinae Conchapelopia
    ['50421001', '50421000'], // Diptera Tanypodinae Conchapelopia melanops
    ['50421002', '50421000'], // Diptera Tanypodinae Conchapelopia pallidula
    ['50421003', '50421000'], // Diptera Tanypodinae Conchapelopia viator
    ['50421004', '50421000'], // Diptera Tanypodinae Conchapelopia aagardi
    ['50421005', '50421000'], // Diptera Tanypodinae Conchapelopia hittmairorum
    ['50421006', '50421000'], // Diptera Tanypodinae Conchapelopia triannulata
    ['50421100', '50420000'], // Diptera Tanypodinae Guttipelopia
    ['50421101', '50421100'], // Diptera Tanypodinae Guttipelopia guttipennis
    ['50421200', '50420000'], // Diptera Tanypodinae Krenopelopia
    ['50421201', '50421200'], // Diptera Tanypodinae Krenopelopia binotata
    ['50421202', '50421200'], // Diptera Tanypodinae Krenopelopia nigropunctata
    ['50421300', '50420000'], // Diptera Tanypodinae Labrundinia
    ['50421301', '50421300'], // Diptera Tanypodinae Labrundinia longipalpis
    ['50421400', '50420000'], // Diptera Tanypodinae Larsia
    ['50421401', '50421400'], // Diptera Tanypodinae Larsia atrocincta
    ['50421402', '50421400'], // Diptera Tanypodinae Larsia curticalcar
    ['50421500', '50420000'], // Diptera Tanypodinae Monopelopia
    ['50421501', '50421500'], // Diptera Tanypodinae Monopelopia tenuicalcar
    ['50421600', '50420000'], // Diptera Tanypodinae Natarsia
    ['50421601', '50421600'], // Diptera Tanypodinae Natarsia nugax
    ['50421602', '50421600'], // Diptera Tanypodinae Natarsia punctata
    ['50421700', '50420000'], // Diptera Tanypodinae Nilotanypus
    ['50421701', '50421700'], // Diptera Tanypodinae Nilotanypus dubius
    ['50421800', '50420000'], // Diptera Tanypodinae Paramerina
    ['50421801', '50421800'], // Diptera Tanypodinae Paramerina cingulata
    ['50421802', '50421800'], // Diptera Tanypodinae Paramerina divisa
    ['50421900', '50420000'], // Diptera Tanypodinae Rheopelopia
    ['50421901', '50421900'], // Diptera Tanypodinae Rheopelopia eximia
    ['50421902', '50421900'], // Diptera Tanypodinae Rheopelopia maculipennis
    ['50421903', '50421900'], // Diptera Tanypodinae Rheopelopia ornata
    ['50422000', '50420000'], // Diptera Tanypodinae Telmatopelopia
    ['50422001', '50422000'], // Diptera Tanypodinae Telmatopelopia nemorum
    ['50422100', '50420000'], // Diptera Tanypodinae Thienemannimyia
    ['50422101', '50422100'], // Diptera Tanypodinae Thienemannimyia carnea
    ['50422102', '50422100'], // Diptera Tanypodinae Thienemannimyia fusciceps
    ['50422103', '50422100'], // Diptera Tanypodinae Thienemannimyia geijskesi
    ['50422104', '50422100'], // Diptera Tanypodinae Thienemannimyia laeta
    ['50422105', '50422100'], // Diptera Tanypodinae Thienemannimyia lentiginosa
    ['50422106', '50422100'], // Diptera Tanypodinae Thienemannimyia northumbrica
    ['50422107', '50422100'], // Diptera Tanypodinae Thienemannimyia woodi
    ['50422108', '50422100'], // Diptera Tanypodinae Thienemannimyia pseudocarnea
    ['50422109', '50422100'], // Diptera Tanypodinae Thienemannimyia festiva
    ['50422200', '50420000'], // Diptera Tanypodinae Trissopelopia
    ['50422201', '50422200'], // Diptera Tanypodinae Trissopelopia longimana
    ['50422300', '50420000'], // Diptera Tanypodinae Xenopelopia
    ['50422301', '50422300'], // Diptera Tanypodinae Xenopelopia falcigera
    ['50422302', '50422300'], // Diptera Tanypodinae Xenopelopia nigricans
    ['50422400', '50420000'], // Diptera Tanypodinae Zavrelimyia
    ['50422401', '50422400'], // Diptera Tanypodinae Zavrelimyia barbatipes
    ['50422402', '50422400'], // Diptera Tanypodinae Zavrelimyia hirtimana
    ['50422403', '50422400'], // Diptera Tanypodinae Zavrelimyia melanura
    ['50422404', '50422400'], // Diptera Tanypodinae Zavrelimyia nubila
    ['50422500', '50420000'], // Diptera Tanypodinae Tanypus
    ['50422501', '50422500'], // Diptera Tanypodinae Tanypus punctipennis
    ['50422502', '50422500'], // Diptera Tanypodinae Tanypus vilipennis
    ['50422503', '50422500'], // Diptera Tanypodinae Tanypus kraatzi
    ['50422600', '50420000'], // Diptera Tanypodinae Schineriella
    ['50422601', '50422600'], // Diptera Tanypodinae Schineriella schineri
    ['50422700', '50420000'], // Diptera Tanypodinae Hayesomyia
    ['50422701', '50422700'], // Diptera Tanypodinae Hayesomyia tripunctata
    ['50422800', '50420000'], // Diptera Tanypodinae Anatopynia
    ['50422801', '50422800'], // Diptera Tanypodinae Anatopynia plumipes
    ['50430000', '50000000'], // Diptera Podonominae
    ['50430100', '50430000'], // Diptera Podonominae Lasiodiamesa
    ['50430101', '50430100'], // Diptera Podonominae Lasiodiamesa sphagnicola
    ['50430200', '50430000'], // Diptera Podonominae Paraboreochlus
    ['50430201', '50430200'], // Diptera Podonominae Paraboreochlus minutissimus
    ['50430300', '50430000'], // Diptera Podonominae Parochlus
    ['50430301', '50430300'], // Diptera Podonominae Parochlus kiefferi
    ['50440000', '50000000'], // Diptera Diamesinae
    ['50440100', '50440000'], // Diptera Diamesinae Protanypus
    ['50440101', '50440100'], // Diptera Diamesinae Protanypus morio
    ['50440200', '50440000'], // Diptera Diamesinae Diamesa
    ['50440201', '50440200'], // Diptera Diamesinae Diamesa bohemani
    ['50440202', '50440200'], // Diptera Diamesinae Diamesa incallida
    ['50440203', '50440200'], // Diptera Diamesinae Diamesa insignipes
    ['50440204', '50440200'], // Diptera Diamesinae Diamesa latitarsis
    ['50440206', '50440200'], // Diptera Diamesinae Diamesa permacra
    ['50440208', '50440200'], // Diptera Diamesinae Diamesa tonsa
    ['50440209', '50440200'], // Diptera Diamesinae Diamesa cinerella
    ['50440300', '50440000'], // Diptera Diamesinae Potthastia
    ['50440301', '50440300'], // Diptera Diamesinae Potthastia gaedii
    ['50440302', '50440300'], // Diptera Diamesinae Potthastia longimanus
    ['50440303', '50440300'], // Diptera Diamesinae Potthastia montium
    ['50440304', '50440300'], // Diptera Diamesinae Potthastia pastoris
    ['5044030Y', '50440300'], // Diptera Diamesinae Potthastia gaedii group
    ['5044030Z', '50440300'], // Diptera Diamesinae Potthastia longimanus group
    ['50440400', '50440000'], // Diptera Diamesinae Pseudodiamesa
    ['50440401', '50440400'], // Diptera Diamesinae Pseudodiamesa branickii
    ['50440402', '50440400'], // Diptera Diamesinae Pseudodiamesa nivosa
    ['50440500', '50440000'], // Diptera Diamesinae Pseudokiefferiella
    ['50440501', '50440500'], // Diptera Diamesinae Pseudokiefferiella parva
    ['50440600', '50440000'], // Diptera Diamesinae Sympotthastia
    ['50440601', '50440600'], // Diptera Diamesinae Sympotthastia zavreli
    ['50440700', '50440000'], // Diptera Diamesinae Syndiamesa
    ['50440701', '50440700'], // Diptera Diamesinae Syndiamesa edwardsi
    ['50440Z00', '50440000'], // Diptera Diamesinae Diamesa
    ['50450000', '50000000'], // Diptera Prodiamesinae
    ['50450100', '50450000'], // Diptera Prodiamesinae Monodiamesa
    ['50450101', '50450100'], // Diptera Prodiamesinae Monodiamesa bathyphila
    ['50450102', '50450100'], // Diptera Prodiamesinae Monodiamesa ekmani
    ['50450200', '50450000'], // Diptera Prodiamesinae Odontomesa
    ['50450201', '50450200'], // Diptera Prodiamesinae Odontomesa fulva
    ['50450300', '50450000'], // Diptera Prodiamesinae Prodiamesa
    ['50450301', '50450300'], // Diptera Prodiamesinae Prodiamesa olivacea
    ['50450302', '50450300'], // Diptera Prodiamesinae Prodiamesa rufovittata
    ['50460000', '50000000'], // Diptera Orthocladiinae
    ['50460100', '50460000'], // Diptera Orthocladiinae Acricotopus
    ['50460101', '50460100'], // Diptera Orthocladiinae Acricotopus lucens
    ['50460300', '50460000'], // Diptera Orthocladiinae Brillia
    ['50460301', '50460300'], // Diptera Orthocladiinae Brillia flavifrons
    ['50460302', '50460300'], // Diptera Orthocladiinae Brillia bifida
    ['50460400', '50460000'], // Diptera Orthocladiinae Cardiocladius
    ['50460401', '50460400'], // Diptera Orthocladiinae Cardiocladius capucinus
    ['50460402', '50460400'], // Diptera Orthocladiinae Cardiocladius fuscus
    ['50460500', '50460000'], // Diptera Orthocladiinae Cricotopus
    ['50460510', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus)
    ['50460511', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) albiforceps
    ['50460512', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) annulator
    ['50460513', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) bicinctus
    ['50460514', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) ephippium
    ['50460515', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) festivellus
    ['50460516', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) flavocinctus
    ['50460517', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) fuscus
    ['50460518', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) pallidipes
    ['50460519', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) pilosellus
    ['5046051A', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) polaris
    ['5046051B', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) pulchripes
    ['5046051C', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) similis
    ['5046051D', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) tremulus
    ['5046051E', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) triannulatus
    ['5046051F', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) trifascia
    ['5046051G', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) caducus
    ['5046051H', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) curtus
    ['5046051J', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) cylindraceus
    ['5046051K', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) tibialis
    ['5046051L', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) tristis
    ['5046051M', '50460500'], // Diptera Orthocladiinae Cricotopus (Cricotopus) vierriensis
    ['50460540', '50460500'], // Diptera Orthocladiinae Cricotopus (Isocladius)
    ['50460541', '50460500'], // Diptera Orthocladiinae Cricotopus (Isocladius) brevipalpis
    ['50460542', '50460500'], // Diptera Orthocladiinae Cricotopus (Isocladius) intersectus
    ['50460543', '50460500'], // Diptera Orthocladiinae Cricotopus (Isocladius) laricomalis
    ['50460544', '50460500'], // Diptera Orthocladiinae Cricotopus (Isocladius) obnixus
    ['50460545', '50460500'], // Diptera Orthocladiinae Cricotopus (Isocladius) ornatus
    ['50460546', '50460500'], // Diptera Orthocladiinae Cricotopus (Isocladius) pilitarsis
    ['50460547', '50460500'], // Diptera Orthocladiinae Cricotopus (Isocladius) reversus
    ['50460548', '50460500'], // Diptera Orthocladiinae Cricotopus (Isocladius) speciosus
    ['50460549', '50460500'], // Diptera Orthocladiinae Cricotopus (Isocladius) sylvestris
    ['5046054A', '50460500'], // Diptera Orthocladiinae Cricotopus (Isocladius) tricinctus
    ['5046054B', '50460500'], // Diptera Orthocladiinae Cricotopus (Isocladius) trifasciatus
    ['5046054C', '50460500'], // Diptera Orthocladiinae Cricotopus (Isocladius) arcuatus
    ['50460560', '50460500'], // Diptera Orthocladiinae Cricotopus (Nostococladius)
    ['50460561', '50460500'], // Diptera Orthocladiinae Cricotopus (Nostococladius) lygropis
    ['50460600', '50460000'], // Diptera Orthocladiinae Diplocladius
    ['50460601', '50460600'], // Diptera Orthocladiinae Diplocladius cultriger
    ['50460800', '50460000'], // Diptera Orthocladiinae Eukiefferiella
    ['50460801', '50460800'], // Diptera Orthocladiinae Eukiefferiella brevicalcar
    ['50460802', '50460800'], // Diptera Orthocladiinae Eukiefferiella claripennis
    ['50460803', '50460800'], // Diptera Orthocladiinae Eukiefferiella clypeata
    ['50460804', '50460800'], // Diptera Orthocladiinae Eukiefferiella coerulescens
    ['50460805', '50460800'], // Diptera Orthocladiinae Eukiefferiella devonica
    ['50460806', '50460800'], // Diptera Orthocladiinae Eukiefferiella dittmari
    ['50460807', '50460800'], // Diptera Orthocladiinae Eukiefferiella fuldensis
    ['50460808', '50460800'], // Diptera Orthocladiinae Eukiefferiella gracei
    ['50460809', '50460800'], // Diptera Orthocladiinae Eukiefferiella ilkleyensis
    ['50460811', '50460800'], // Diptera Orthocladiinae Eukiefferiella minor
    ['50460812', '50460800'], // Diptera Orthocladiinae Eukiefferiella tirolensis
    ['50460813', '50460800'], // Diptera Orthocladiinae Eukiefferiella ancyla
    ['50460814', '50460800'], // Diptera Orthocladiinae Eukiefferiella fittkaui
    ['50460Y00', '50460000'], // Diptera Orthocladiinae Eukiefferiella
    ['50460Z00', '50460000'], // Diptera Orthocladiinae Cricotopus
    ['50461000', '50460000'], // Diptera Orthocladiinae Eurycnemus
    ['50461001', '50461000'], // Diptera Orthocladiinae Eurycnemus crassipes
    ['50461100', '50460000'], // Diptera Orthocladiinae Halocladius
    ['50461110', '50461100'], // Diptera Orthocladiinae Halocladius (Halocladius)
    ['50461111', '50461100'], // Diptera Orthocladiinae Halocladius (Halocladius) fucicola
    ['50461112', '50461100'], // Diptera Orthocladiinae Halocladius (Halocladius) variabilis
    ['50461113', '50461100'], // Diptera Orthocladiinae Halocladius (Halocladius) varians
    ['50461120', '50461100'], // Diptera Orthocladiinae Halocladius (Psammocladius)
    ['50461121', '50461100'], // Diptera Orthocladiinae Halocladius (Psammocladius) braunsi
    ['50461200', '50460000'], // Diptera Orthocladiinae Heterotanytarsus
    ['50461201', '50461200'], // Diptera Orthocladiinae Heterotanytarsus apicalis
    ['50461300', '50460000'], // Diptera Orthocladiinae Heterotrissocladius
    ['50461301', '50461300'], // Diptera Orthocladiinae Heterotrissocladius grimshawi
    ['50461302', '50461300'], // Diptera Orthocladiinae Heterotrissocladius marcidus
    ['50461303', '50461300'], // Diptera Orthocladiinae Heterotrissocladius brundini
    ['50461800', '50460000'], // Diptera Orthocladiinae Nanocladius
    ['50461801', '50461800'], // Diptera Orthocladiinae Nanocladius balticus
    ['50461802', '50461800'], // Diptera Orthocladiinae Nanocladius dichromus
    ['50461803', '50461800'], // Diptera Orthocladiinae Nanocladius rectinervis
    ['50462000', '50460000'], // Diptera Orthocladiinae Orthocladius
    ['50462010', '50462000'], // Diptera Orthocladiinae Orthocladius (Eudactylocladius)
    ['50462011', '50462000'], // Diptera Orthocladiinae Orthocladius (Eudactylocladius) fuscimanus
    ['50462012', '50462000'], // Diptera Orthocladiinae Orthocladius (Eudactylocladius) gelidus
    ['50462014', '50462000'], // Diptera Orthocladiinae Orthocladius (Eudactylocladius) olivaceus
    ['50462020', '50462000'], // Diptera Orthocladiinae Orthocladius (Pogonocladius)
    ['50462021', '50462000'], // Diptera Orthocladiinae Orthocladius (Pogonocladius) consobrinus
    ['50462030', '50462000'], // Diptera Orthocladiinae Orthocladius (Euorthocladius)
    ['50462033', '50462000'], // Diptera Orthocladiinae Orthocladius (Euorthocladius) rivicola
    ['50462034', '50462000'], // Diptera Orthocladiinae Orthocladius (Euorthocladius) rivulorum
    ['50462035', '50462000'], // Diptera Orthocladiinae Orthocladius (Euorthocladius) thienemanni
    ['50462036', '50462000'], // Diptera Orthocladiinae Orthocladius (Euorthocladius) calvus
    ['50462037', '50462000'], // Diptera Orthocladiinae Orthocladius (Euorthocladius) ashei
    ['50462040', '50462000'], // Diptera Orthocladiinae Orthocladius (Orthocladius)
    ['50462041', '50462000'], // Diptera Orthocladiinae Orthocladius (Orthocladius) glabripennis
    ['50462042', '50462000'], // Diptera Orthocladiinae Orthocladius (Orthocladius) holsatus
    ['50462043', '50462000'], // Diptera Orthocladiinae Orthocladius (Orthocladius) oblidens
    ['50462044', '50462000'], // Diptera Orthocladiinae Orthocladius (Orthocladius) obumbratus
    ['50462045', '50462000'], // Diptera Orthocladiinae Orthocladius (Orthocladius) rubicundus
    ['50462046', '50462000'], // Diptera Orthocladiinae Orthocladius (Orthocladius) wetterensis
    ['50462047', '50462000'], // Diptera Orthocladiinae Orthocladius (Orthocladius) frigidus
    ['50462048', '50462000'], // Diptera Orthocladiinae Orthocladius (Orthocladius) dentifer
    ['50462049', '50462000'], // Diptera Orthocladiinae Orthocladius (Orthocladius) maius
    ['5046204A', '50462000'], // Diptera Orthocladiinae Orthocladius (Orthocladius) pedestris
    ['5046204B', '50462000'], // Diptera Orthocladiinae Orthocladius (Orthocladius) rivinus
    ['5046204C', '50462000'], // Diptera Orthocladiinae Orthocladius (Orthocladius) ruffoi
    ['50462050', '50462000'], // Diptera Orthocladiinae Orthocladius (Symposiocladius)
    ['50462051', '50462000'], // Diptera Orthocladiinae Orthocladius (Symposiocladius) lignicola
    ['50462100', '50460000'], // Diptera Orthocladiinae Paracladius
    ['50462101', '50462100'], // Diptera Orthocladiinae Paracladius conversus
    ['50462300', '50460000'], // Diptera Orthocladiinae Paratrichocladius
    ['50462301', '50462300'], // Diptera Orthocladiinae Paratrichocladius rufiventris
    ['50462302', '50462300'], // Diptera Orthocladiinae Paratrichocladius skirwithensis
    ['50462303', '50462300'], // Diptera Orthocladiinae Paratrichocladius nigritus
    ['50462700', '50460000'], // Diptera Orthocladiinae Psectrocladius
    ['50462710', '50462700'], // Diptera Orthocladiinae Psectrocladius (Monopsectrocladius)
    ['50462711', '50462700'], // Diptera Orthocladiinae Psectrocladius (Monopsectrocladius) calcaratus
    ['50462720', '50462700'], // Diptera Orthocladiinae Psectrocladius (Allopsectrocladius)
    ['50462721', '50462700'], // Diptera Orthocladiinae Psectrocladius (Allopsectrocladius) obvius
    ['50462722', '50462700'], // Diptera Orthocladiinae Psectrocladius (Allopsectrocladius) platypus
    ['50462730', '50462700'], // Diptera Orthocladiinae Psectrocladius (Mesopsectrocladius)
    ['50462731', '50462700'], // Diptera Orthocladiinae Psectrocladius (Mesopsectrocladius) barbatipes
    ['50462740', '50462700'], // Diptera Orthocladiinae Psectrocladius (Psectrocladius)
    ['50462741', '50462700'], // Diptera Orthocladiinae Psectrocladius (Psectrocladius) barbimanus
    ['50462742', '50462700'], // Diptera Orthocladiinae Psectrocladius (Psectrocladius) bisetus
    ['50462743', '50462700'], // Diptera Orthocladiinae Psectrocladius (Psectrocladius) fennicus
    ['50462744', '50462700'], // Diptera Orthocladiinae Psectrocladius (Psectrocladius) limbatellus
    ['50462745', '50462700'], // Diptera Orthocladiinae Psectrocladius (Psectrocladius) octomaculatus
    ['50462746', '50462700'], // Diptera Orthocladiinae Psectrocladius (Psectrocladius) oligosetus
    ['50462747', '50462700'], // Diptera Orthocladiinae Psectrocladius (Psectrocladius) psilopterus
    ['50462748', '50462700'], // Diptera Orthocladiinae Psectrocladius (Psectrocladius) schlienzi
    ['50462749', '50462700'], // Diptera Orthocladiinae Psectrocladius (Psectrocladius) sordidellus
    ['5046274A', '50462700'], // Diptera Orthocladiinae Psectrocladius (Psectrocladius) ventricosus
    ['5046274B', '50462700'], // Diptera Orthocladiinae Psectrocladius (Psectrocladius) oxyura
    ['50462800', '50460000'], // Diptera Orthocladiinae Rheocricotopus
    ['50462810', '50462800'], // Diptera Orthocladiinae Rheocricotopus (Psilocricotopus)
    ['50462811', '50462800'], // Diptera Orthocladiinae Rheocricotopus (Psilocricotopus) atripes
    ['50462812', '50462800'], // Diptera Orthocladiinae Rheocricotopus (Psilocricotopus) chalybeatus
    ['50462813', '50462800'], // Diptera Orthocladiinae Rheocricotopus (Psilocricotopus) glabricollis
    ['50462814', '50462800'], // Diptera Orthocladiinae Rheocricotopus (Psilocricotopus) tirolus
    ['50462820', '50462800'], // Diptera Orthocladiinae Rheocricotopus (Rheocricotopus)
    ['50462821', '50462800'], // Diptera Orthocladiinae Rheocricotopus (Rheocricotopus) effusus
    ['50462822', '50462800'], // Diptera Orthocladiinae Rheocricotopus (Rheocricotopus) fuscipes
    ['50462900', '50460000'], // Diptera Orthocladiinae Synorthocladius
    ['50462901', '50462900'], // Diptera Orthocladiinae Synorthocladius semivirens
    ['50463100', '50460000'], // Diptera Orthocladiinae Trissocladius
    ['50463101', '50463100'], // Diptera Orthocladiinae Trissocladius brevipalpis
    ['50463200', '50460000'], // Diptera Orthocladiinae Tvetenia
    ['50463201', '50463200'], // Diptera Orthocladiinae Tvetenia bavarica
    ['50463202', '50463200'], // Diptera Orthocladiinae Tvetenia calvescens
    ['50463203', '50463200'], // Diptera Orthocladiinae Tvetenia discoloripes
    ['50463204', '50463200'], // Diptera Orthocladiinae Tvetenia verralli
    ['5046320Z', '50463200'], // Diptera Orthocladiinae Tvetenia discoloripes group
    ['50463300', '50460000'], // Diptera Orthocladiinae Zalutschia
    ['50463301', '50463300'], // Diptera Orthocladiinae Zalutschia humphriesiae
    ['50463400', '50460000'], // Diptera Orthocladiinae Acamptocladius
    ['50463401', '50463400'], // Diptera Orthocladiinae Acamptocladius submontanus
    ['50463402', '50463400'], // Diptera Orthocladiinae Acamptocladius reissi
    ['50463500', '50460000'], // Diptera Orthocladiinae Bryophaenocladius
    ['50463501', '50463500'], // Diptera Orthocladiinae Bryophaenocladius aestivus
    ['50463502', '50463500'], // Diptera Orthocladiinae Bryophaenocladius femineus
    ['50463503', '50463500'], // Diptera Orthocladiinae Bryophaenocladius furcatus
    ['50463504', '50463500'], // Diptera Orthocladiinae Bryophaenocladius ictericus
    ['50463505', '50463500'], // Diptera Orthocladiinae Bryophaenocladius illimbatus
    ['50463506', '50463500'], // Diptera Orthocladiinae Bryophaenocladius muscicola
    ['50463507', '50463500'], // Diptera Orthocladiinae Bryophaenocladius nidorum
    ['50463508', '50463500'], // Diptera Orthocladiinae Bryophaenocladius nitidicollis
    ['50463511', '50463500'], // Diptera Orthocladiinae Bryophaenocladius simus
    ['50463512', '50463500'], // Diptera Orthocladiinae Bryophaenocladius subvernalis
    ['50463513', '50463500'], // Diptera Orthocladiinae Bryophaenocladius tuberculatus
    ['50463514', '50463500'], // Diptera Orthocladiinae Bryophaenocladius vernalis
    ['50463515', '50463500'], // Diptera Orthocladiinae Bryophaenocladius xanthogyne
    ['50463516', '50463500'], // Diptera Orthocladiinae Bryophaenocladius flexidens
    ['50463517', '50463500'], // Diptera Orthocladiinae Bryophaenocladius inconstans
    ['50463600', '50460000'], // Diptera Orthocladiinae Camptocladius
    ['50463601', '50463600'], // Diptera Orthocladiinae Camptocladius stercorarius
    ['50463700', '50460000'], // Diptera Orthocladiinae Chaetocladius
    ['50463701', '50463700'], // Diptera Orthocladiinae Chaetocladius dentiforceps
    ['50463702', '50463700'], // Diptera Orthocladiinae Chaetocladius dissipatus
    ['50463703', '50463700'], // Diptera Orthocladiinae Chaetocladius melaleucus
    ['50463704', '50463700'], // Diptera Orthocladiinae Chaetocladius perennis
    ['50463705', '50463700'], // Diptera Orthocladiinae Chaetocladius piger
    ['50463706', '50463700'], // Diptera Orthocladiinae Chaetocladius suecicus
    ['50463707', '50463700'], // Diptera Orthocladiinae Chaetocladius insolitus
    ['50463800', '50460000'], // Diptera Orthocladiinae Corynoneura
    ['50463801', '50463800'], // Diptera Orthocladiinae Corynoneura carriana
    ['50463802', '50463800'], // Diptera Orthocladiinae Corynoneura celeripes
    ['50463803', '50463800'], // Diptera Orthocladiinae Corynoneura celtica
    ['50463804', '50463800'], // Diptera Orthocladiinae Corynoneura coronata
    ['50463805', '50463800'], // Diptera Orthocladiinae Corynoneura edwardsi
    ['50463806', '50463800'], // Diptera Orthocladiinae Corynoneura fittkaui
    ['50463809', '50463800'], // Diptera Orthocladiinae Corynoneura gratias
    ['50463812', '50463800'], // Diptera Orthocladiinae Corynoneura lacustris
    ['50463813', '50463800'], // Diptera Orthocladiinae Corynoneura lobata
    ['50463815', '50463800'], // Diptera Orthocladiinae Corynoneura scutellata
    ['50463816', '50463800'], // Diptera Orthocladiinae Corynoneura arctica
    ['50463900', '50460000'], // Diptera Orthocladiinae Epoicocladius
    ['50463901', '50463900'], // Diptera Orthocladiinae Epoicocladius ephemerae
    ['50464000', '50460000'], // Diptera Orthocladiinae Gymnometriocnemus
    ['50464001', '50464000'], // Diptera Orthocladiinae Gymnometriocnemus brevitarsis
    ['50464011', '50464000'], // Diptera Orthocladiinae Gymnometriocnemus subnudus
    ['50464012', '50464000'], // Diptera Orthocladiinae Gymnometriocnemus brumalis
    ['50464100', '50460000'], // Diptera Orthocladiinae Heleniella
    ['50464101', '50464100'], // Diptera Orthocladiinae Heleniella ornaticollis
    ['50464200', '50460000'], // Diptera Orthocladiinae Krenosmittia
    ['50464201', '50464200'], // Diptera Orthocladiinae Krenosmittia boreoalpina
    ['50464202', '50464200'], // Diptera Orthocladiinae Krenosmittia camptophleps
    ['50464300', '50460000'], // Diptera Orthocladiinae Limnophyes
    ['50464302', '50464300'], // Diptera Orthocladiinae Limnophyes pumilio
    ['50464303', '50464300'], // Diptera Orthocladiinae Limnophyes gurgicola
    ['50464304', '50464300'], // Diptera Orthocladiinae Limnophyes habilis
    ['50464305', '50464300'], // Diptera Orthocladiinae Limnophyes minimus
    ['50464306', '50464300'], // Diptera Orthocladiinae Limnophyes paludis
    ['50464307', '50464300'], // Diptera Orthocladiinae Limnophyes pentaplastus
    ['50464308', '50464300'], // Diptera Orthocladiinae Limnophyes edwardsi
    ['50464311', '50464300'], // Diptera Orthocladiinae Limnophyes asquamatus
    ['50464313', '50464300'], // Diptera Orthocladiinae Limnophyes angelicae
    ['50464314', '50464300'], // Diptera Orthocladiinae Limnophyes brachytomus
    ['50464315', '50464300'], // Diptera Orthocladiinae Limnophyes difficilis
    ['50464316', '50464300'], // Diptera Orthocladiinae Limnophyes natalensis
    ['50464317', '50464300'], // Diptera Orthocladiinae Limnophyes ninae
    ['50464318', '50464300'], // Diptera Orthocladiinae Limnophyes punctipennis
    ['50464319', '50464300'], // Diptera Orthocladiinae Limnophyes spinigus
    ['50464400', '50460000'], // Diptera Orthocladiinae Mesosmittia
    ['50464401', '50464400'], // Diptera Orthocladiinae Mesosmittia flexuella
    ['50464500', '50460000'], // Diptera Orthocladiinae Metriocnemus
    ['50464501', '50464500'], // Diptera Orthocladiinae Metriocnemus albolineatus
    ['50464502', '50464500'], // Diptera Orthocladiinae Metriocnemus atriclavus
    ['50464503', '50464500'], // Diptera Orthocladiinae Metriocnemus cavicola
    ['50464504', '50464500'], // Diptera Orthocladiinae Metriocnemus fuscipes
    ['50464506', '50464500'], // Diptera Orthocladiinae Metriocnemus eurynotus
    ['50464508', '50464500'], // Diptera Orthocladiinae Metriocnemus picipes
    ['50464509', '50464500'], // Diptera Orthocladiinae Metriocnemus terrester
    ['50464511', '50464500'], // Diptera Orthocladiinae Metriocnemus tristellus
    ['50464512', '50464500'], // Diptera Orthocladiinae Metriocnemus ursinus
    ['50464513', '50464500'], // Diptera Orthocladiinae Metriocnemus beringiensis
    ['50464700', '50460000'], // Diptera Orthocladiinae Parakiefferiella
    ['50464701', '50464700'], // Diptera Orthocladiinae Parakiefferiella bathophila
    ['50464702', '50464700'], // Diptera Orthocladiinae Parakiefferiella coronata
    ['50464703', '50464700'], // Diptera Orthocladiinae Parakiefferiella fennica
    ['50464704', '50464700'], // Diptera Orthocladiinae Parakiefferiella smolandica
    ['50464705', '50464700'], // Diptera Orthocladiinae Parakiefferiella wuelkeri
    ['50464706', '50464700'], // Diptera Orthocladiinae Parakiefferiella scandica
    ['50464800', '50460000'], // Diptera Orthocladiinae Paralimnophyes
    ['50464801', '50464800'], // Diptera Orthocladiinae Paralimnophyes longiseta
    ['50464900', '50460000'], // Diptera Orthocladiinae Parametriocnemus
    ['50464901', '50464900'], // Diptera Orthocladiinae Parametriocnemus boreoalpinus
    ['50464902', '50464900'], // Diptera Orthocladiinae Parametriocnemus stylatus
    ['50464Z00', '50460000'], // Diptera Orthocladiinae Metriocnemus
    ['50465000', '50460000'], // Diptera Orthocladiinae Paraphaenocladius
    ['50465001', '50465000'], // Diptera Orthocladiinae Paraphaenocladius cuneatus
    ['50465002', '50465000'], // Diptera Orthocladiinae Paraphaenocladius impensus
    ['50465003', '50465000'], // Diptera Orthocladiinae Paraphaenocladius irritus
    ['50465004', '50465000'], // Diptera Orthocladiinae Paraphaenocladius penerasus
    ['50465005', '50465000'], // Diptera Orthocladiinae Paraphaenocladius pseudirritis
    ['50465100', '50460000'], // Diptera Orthocladiinae Parasmittia
    ['50465101', '50465100'], // Diptera Orthocladiinae Parasmittia carinata
    ['50465200', '50460000'], // Diptera Orthocladiinae Paratrissocladius
    ['50465201', '50465200'], // Diptera Orthocladiinae Paratrissocladius excerptus
    ['50465300', '50460000'], // Diptera Orthocladiinae Pseudorthocladius
    ['50465301', '50465300'], // Diptera Orthocladiinae Pseudorthocladius cranstoni
    ['50465302', '50465300'], // Diptera Orthocladiinae Pseudorthocladius curtistylus
    ['50465303', '50465300'], // Diptera Orthocladiinae Pseudorthocladius filiformis
    ['50465304', '50465300'], // Diptera Orthocladiinae Pseudorthocladius pilosipennis
    ['50465305', '50465300'], // Diptera Orthocladiinae Pseudorthocladius rectangilobus
    ['50465400', '50460000'], // Diptera Orthocladiinae Pseudosmittia
    ['50465401', '50465400'], // Diptera Orthocladiinae Pseudosmittia angusta
    ['50465402', '50465400'], // Diptera Orthocladiinae Pseudosmittia conjuncta
    ['50465403', '50465400'], // Diptera Orthocladiinae Pseudosmittia albipennis
    ['50465404', '50465400'], // Diptera Orthocladiinae Pseudosmittia forcipata
    ['50465405', '50465400'], // Diptera Orthocladiinae Pseudosmittia gracilis
    ['50465408', '50465400'], // Diptera Orthocladiinae Pseudosmittia trilobata
    ['50465409', '50465400'], // Diptera Orthocladiinae Pseudosmittia baueri
    ['50465411', '50465400'], // Diptera Orthocladiinae Pseudosmittia holsata
    ['50465412', '50465400'], // Diptera Orthocladiinae Pseudosmittia obtusa
    ['50465413', '50465400'], // Diptera Orthocladiinae Pseudosmittia oxoniana
    ['50465500', '50460000'], // Diptera Orthocladiinae Rheosmittia
    ['50465501', '50465500'], // Diptera Orthocladiinae Rheosmittia spinicornis
    ['50465600', '50460000'], // Diptera Orthocladiinae Smittia
    ['50465601', '50465600'], // Diptera Orthocladiinae Smittia aterrima
    ['50465602', '50465600'], // Diptera Orthocladiinae Smittia contingens
    ['50465603', '50465600'], // Diptera Orthocladiinae Smittia edwardsi
    ['50465604', '50465600'], // Diptera Orthocladiinae Smittia foliacea
    ['50465605', '50465600'], // Diptera Orthocladiinae Smittia leucopogon
    ['50465606', '50465600'], // Diptera Orthocladiinae Smittia nudipennis
    ['50465607', '50465600'], // Diptera Orthocladiinae Smittia pratorum
    ['50465609', '50465600'], // Diptera Orthocladiinae Smittia brevifurcata
    ['50465611', '50465600'], // Diptera Orthocladiinae Smittia amoena
    ['50465612', '50465600'], // Diptera Orthocladiinae Smittia superata
    ['50465700', '50460000'], // Diptera Orthocladiinae Thalassosmittia
    ['50465701', '50465700'], // Diptera Orthocladiinae Thalassosmittia thalassophila
    ['50465800', '50460000'], // Diptera Orthocladiinae Thienemannia
    ['50465801', '50465800'], // Diptera Orthocladiinae Thienemannia gracilis
    ['50465802', '50465800'], // Diptera Orthocladiinae Thienemannia gracei
    ['50465803', '50465800'], // Diptera Orthocladiinae Thienemannia fulvofasciata
    ['50465900', '50460000'], // Diptera Orthocladiinae Thienemanniella
    ['50465901', '50465900'], // Diptera Orthocladiinae Thienemanniella acuticornis
    ['50465902', '50465900'], // Diptera Orthocladiinae Thienemanniella clavicornis
    ['50465903', '50465900'], // Diptera Orthocladiinae Thienemanniella flavescens
    ['50465904', '50465900'], // Diptera Orthocladiinae Thienemanniella lutea
    ['50465905', '50465900'], // Diptera Orthocladiinae Thienemanniella majuscula
    ['50465906', '50465900'], // Diptera Orthocladiinae Thienemanniella obscura
    ['50465907', '50465900'], // Diptera Orthocladiinae Thienemanniella vittata
    ['50465Y00', '50460000'], // Diptera Orthocladiinae Smittia
    ['50465Z00', '50460000'], // Diptera Orthocladiinae Pseudosmittia
    ['50466000', '50460000'], // Diptera Orthocladiinae Georthocladius
    ['50466001', '50466000'], // Diptera Orthocladiinae Georthocladius luteicornis
    ['50466100', '50460000'], // Diptera Orthocladiinae Euryhapsis
    ['50466200', '50460000'], // Diptera Orthocladiinae Paracricotopus
    ['50466201', '50466200'], // Diptera Orthocladiinae Paracricotopus niger
    ['50466300', '50460000'], // Diptera Orthocladiinae Parothocladius
    ['50466301', '50466300'], // Diptera Orthocladiinae Parothocladius nudipennis
    ['50466400', '50460000'], // Diptera Orthocladiinae Tokunagaia
    ['50466401', '50466400'], // Diptera Orthocladiinae Tokunagaia tonolli
    ['50466500', '50460000'], // Diptera Orthocladiinae Corynoneurella
    ['50466501', '50466500'], // Diptera Orthocladiinae Corynoneurella paludosa
    ['50470000', '50000000'], // Diptera Chironominae (Chironomini)
    ['50470300', '50470000'], // Diptera Chironominae (Chironomini) Chironomus
    ['50470310', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Camptochironomus)
    ['50470311', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Camptochironomus) pallidivittatus
    ['50470312', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Camptochironomus) tentans
    ['50470320', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chaetolabis)
    ['50470321', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chaetolabis) macani
    ['50470330', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus)
    ['50470331', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) annularius
    ['50470332', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) anthracinus
    ['50470333', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) aprilinus
    ['50470334', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) cingulatus
    ['50470335', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) dorsalis
    ['50470336', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) inermifrons
    ['50470338', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) longistylus
    ['50470339', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) lugubris
    ['5047033A', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) luridus
    ['5047033B', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) nuditarsis
    ['5047033C', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) obtusidens
    ['5047033D', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) pilicornis
    ['5047033E', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) plumosus
    ['5047033F', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) prasinus
    ['5047033G', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) pseudothummi
    ['5047033H', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) riparius
    ['5047033J', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) salinarius
    ['5047033K', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) striatus
    ['5047033L', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) venustus
    ['5047033M', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) lacunaris
    ['5047033N', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) piger
    ['5047033P', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) strenzkei
    ['5047033Q', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) nudiventris
    ['5047033R', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) crassimanus
    ['5047033S', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) entis
    ['5047033T', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Chironomus) holomelas
    ['50470360', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Lobochironomus)
    ['50470361', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Lobochironomus) dissidens
    ['50470362', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Lobochironomus) dorsalis
    ['50470363', '50470300'], // Diptera Chironominae (Chironomini) Chironomus (Lobochironomus) carbonarius
    ['50470400', '50470000'], // Diptera Chironominae (Chironomini) Cladopelma
    ['50470401', '50470400'], // Diptera Chironominae (Chironomini) Cladopelma edwardsi
    ['50470402', '50470400'], // Diptera Chironominae (Chironomini) Cladopelma krusemani
    ['50470403', '50470400'], // Diptera Chironominae (Chironomini) Cladopelma goetghebueri
    ['50470404', '50470400'], // Diptera Chironominae (Chironomini) Cladopelma virescens
    ['50470405', '50470400'], // Diptera Chironominae (Chironomini) Cladopelma viridulum
    ['50470406', '50470400'], // Diptera Chironominae (Chironomini) Cladopelma bicarinatum
    ['50470500', '50470000'], // Diptera Chironominae (Chironomini) Cryptochironomus
    ['50470501', '50470500'], // Diptera Chironominae (Chironomini) Cryptochironomus albofasciatus
    ['50470502', '50470500'], // Diptera Chironominae (Chironomini) Cryptochironomus denticulatus
    ['50470503', '50470500'], // Diptera Chironominae (Chironomini) Cryptochironomus obreptans
    ['50470504', '50470500'], // Diptera Chironominae (Chironomini) Cryptochironomus psittacinus
    ['50470505', '50470500'], // Diptera Chironominae (Chironomini) Cryptochironomus redekei
    ['50470506', '50470500'], // Diptera Chironominae (Chironomini) Cryptochironomus rostratus
    ['50470507', '50470500'], // Diptera Chironominae (Chironomini) Cryptochironomus supplicans
    ['50470508', '50470500'], // Diptera Chironominae (Chironomini) Cryptochironomus defectus
    ['50470600', '50470000'], // Diptera Chironominae (Chironomini) Cryptotendipes
    ['50470601', '50470600'], // Diptera Chironominae (Chironomini) Cryptotendipes holsatus
    ['50470602', '50470600'], // Diptera Chironominae (Chironomini) Cryptotendipes nigronitens
    ['50470603', '50470600'], // Diptera Chironominae (Chironomini) Cryptotendipes pflugfelderi
    ['50470604', '50470600'], // Diptera Chironominae (Chironomini) Cryptotendipes pseudotener
    ['50470605', '50470600'], // Diptera Chironominae (Chironomini) Cryptotendipes usmaensis
    ['50470700', '50470000'], // Diptera Chironominae (Chironomini) Demeijerea
    ['50470701', '50470700'], // Diptera Chironominae (Chironomini) Demeijerea rufipes
    ['50470800', '50470000'], // Diptera Chironominae (Chironomini) Demicryptochironomus
    ['50470810', '50470800'], // Diptera Chironominae (Chironomini) Demicryptochironomus (Demicryptochironomus)
    ['50470811', '50470800'], // Diptera Chironominae (Chironomini) Demicryptochironomus (Demicryptochironomus) vulneratus
    ['50470820', '50470800'], // Diptera Chironominae (Chironomini) Demicryptochironomus (Irmakia)
    ['50470821', '50470800'], // Diptera Chironominae (Chironomini) Demicryptochironomus (Irmakia) neglectus
    ['50470900', '50470000'], // Diptera Chironominae (Chironomini) Dicrotendipes
    ['50470911', '50470900'], // Diptera Chironominae (Chironomini) Dicrotendipes pallidicornis
    ['50470921', '50470900'], // Diptera Chironominae (Chironomini) Dicrotendipes lobiger
    ['50470922', '50470900'], // Diptera Chironominae (Chironomini) Dicrotendipes nervosus
    ['50470923', '50470900'], // Diptera Chironominae (Chironomini) Dicrotendipes notatus
    ['50470924', '50470900'], // Diptera Chironominae (Chironomini) Dicrotendipes pulsus
    ['50470925', '50470900'], // Diptera Chironominae (Chironomini) Dicrotendipes tritomus
    ['50471000', '50470000'], // Diptera Chironominae (Chironomini) Einfeldia
    ['50471002', '50471000'], // Diptera Chironominae (Chironomini) Einfeldia pagana
    ['50471003', '50471000'], // Diptera Chironominae (Chironomini) Einfeldia palaearctica
    ['50471100', '50470000'], // Diptera Chironominae (Chironomini) Endochironomus
    ['50471101', '50471100'], // Diptera Chironominae (Chironomini) Endochironomus albipennis
    ['50471106', '50471100'], // Diptera Chironominae (Chironomini) Endochironomus tendens
    ['50471200', '50470000'], // Diptera Chironominae (Chironomini) Glyptotendipes
    ['50471210', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes)
    ['50471211', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes) barbipes
    ['50471212', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes) cauliginellus
    ['50471213', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes) pallens
    ['50471214', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes) paripes
    ['50471215', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes) glaucus
    ['50471216', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes) salinus
    ['50471220', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Caulochironomus)
    ['50471221', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Caulochironomus) foliicola
    ['50471222', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Caulochironomus) imbecilis
    ['50471223', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Caulochironomus) scirpi
    ['50471224', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Caulochironomus) viridis
    ['50471230', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Heynotendipes)
    ['50471231', '50471200'], // Diptera Chironominae (Chironomini) Glyptotendipes (Heynotendipes) signatus
    ['50471300', '50470000'], // Diptera Chironominae (Chironomini) Graceus
    ['50471301', '50471300'], // Diptera Chironominae (Chironomini) Graceus ambiguus
    ['50471400', '50470000'], // Diptera Chironominae (Chironomini) Harnischia
    ['50471401', '50471400'], // Diptera Chironominae (Chironomini) Harnischia curtilamellata
    ['50471402', '50471400'], // Diptera Chironominae (Chironomini) Harnischia fuscimana
    ['50471500', '50470000'], // Diptera Chironominae (Chironomini) Kiefferulus
    ['50471501', '50471500'], // Diptera Chironominae (Chironomini) Kiefferulus tendipediformis
    ['50471600', '50470000'], // Diptera Chironominae (Chironomini) Lauterborniella
    ['50471601', '50471600'], // Diptera Chironominae (Chironomini) Lauterborniella agrayloides
    ['50471800', '50470000'], // Diptera Chironominae (Chironomini) Microchironomus
    ['50471801', '50471800'], // Diptera Chironominae (Chironomini) Microchironomus deribae
    ['50471802', '50471800'], // Diptera Chironominae (Chironomini) Microchironomus tener
    ['50471900', '50470000'], // Diptera Chironominae (Chironomini) Microtendipes
    ['50471901', '50471900'], // Diptera Chironominae (Chironomini) Microtendipes britteni
    ['50471902', '50471900'], // Diptera Chironominae (Chironomini) Microtendipes chloris
    ['50471903', '50471900'], // Diptera Chironominae (Chironomini) Microtendipes confinis
    ['50471904', '50471900'], // Diptera Chironominae (Chironomini) Microtendipes diffinis
    ['50471906', '50471900'], // Diptera Chironominae (Chironomini) Microtendipes nitidus
    ['50471907', '50471900'], // Diptera Chironominae (Chironomini) Microtendipes pedellus
    ['50471908', '50471900'], // Diptera Chironominae (Chironomini) Microtendipes rydalensis
    ['50471909', '50471900'], // Diptera Chironominae (Chironomini) Microtendipes tarsalis
    ['5047190Z', '50471900'], // Diptera Chironominae (Chironomini) Microtendipes rydalensis group
    ['50471Y00', '50470000'], // Diptera Chironominae (Chironomini) Endochironomus
    ['50471Z00', '50470000'], // Diptera Chironominae (Chironomini) Einfeldia
    ['50472000', '50470000'], // Diptera Chironominae (Chironomini) Nilothauma
    ['50472001', '50472000'], // Diptera Chironominae (Chironomini) Nilothauma brayi
    ['50472100', '50470000'], // Diptera Chironominae (Chironomini) Omisus
    ['50472101', '50472100'], // Diptera Chironominae (Chironomini) Omisus caledonicus
    ['50472200', '50470000'], // Diptera Chironominae (Chironomini) Pagastiella
    ['50472201', '50472200'], // Diptera Chironominae (Chironomini) Pagastiella orophila
    ['50472300', '50470000'], // Diptera Chironominae (Chironomini) Parachironomus
    ['50472301', '50472300'], // Diptera Chironominae (Chironomini) Parachironomus arcuatus
    ['50472302', '50472300'], // Diptera Chironominae (Chironomini) Parachironomus biannulatus
    ['50472303', '50472300'], // Diptera Chironominae (Chironomini) Parachironomus digitalis
    ['50472304', '50472300'], // Diptera Chironominae (Chironomini) Parachironomus frequens
    ['50472305', '50472300'], // Diptera Chironominae (Chironomini) Parachironomus mauricii
    ['50472306', '50472300'], // Diptera Chironominae (Chironomini) Parachironomus monochromus
    ['50472307', '50472300'], // Diptera Chironominae (Chironomini) Parachironomus parilis
    ['50472308', '50472300'], // Diptera Chironominae (Chironomini) Parachironomus tenuicaudatus
    ['50472309', '50472300'], // Diptera Chironominae (Chironomini) Parachironomus varus
    ['50472311', '50472300'], // Diptera Chironominae (Chironomini) Parachironomus vitiosus
    ['50472312', '50472300'], // Diptera Chironominae (Chironomini) Parachironomus subalpinus
    ['50472313', '50472300'], // Diptera Chironominae (Chironomini) Parachironomus swammerdami
    ['50472400', '50470000'], // Diptera Chironominae (Chironomini) Paracladopelma
    ['50472401', '50472400'], // Diptera Chironominae (Chironomini) Paracladopelma camptolabis
    ['50472402', '50472400'], // Diptera Chironominae (Chironomini) Paracladopelma laminatum
    ['50472403', '50472400'], // Diptera Chironominae (Chironomini) Paracladopelma nigritulum
    ['50472500', '50470000'], // Diptera Chironominae (Chironomini) Paralauterborniella
    ['50472501', '50472500'], // Diptera Chironominae (Chironomini) Paralauterborniella nigrohalteralis
    ['50472600', '50470000'], // Diptera Chironominae (Chironomini) Paratendipes
    ['50472601', '50472600'], // Diptera Chironominae (Chironomini) Paratendipes albimanus
    ['50472602', '50472600'], // Diptera Chironominae (Chironomini) Paratendipes nudisquama
    ['50472603', '50472600'], // Diptera Chironominae (Chironomini) Paratendipes plebeius
    ['50472800', '50470000'], // Diptera Chironominae (Chironomini) Phaenopsectra
    ['50472801', '50472800'], // Diptera Chironominae (Chironomini) Phaenopsectra flavipes
    ['50472802', '50472800'], // Diptera Chironominae (Chironomini) Phaenopsectra punctipes
    ['50472900', '50470000'], // Diptera Chironominae (Chironomini) Polypedilum
    ['50472910', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Pentapedilum)
    ['50472911', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Pentapedilum) nubens
    ['50472912', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Pentapedilum) sordens
    ['50472913', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Pentapedilum) tritum
    ['50472914', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Pentapedilum) uncinatum
    ['50472920', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Polypedilum)
    ['50472921', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Polypedilum) acutum
    ['50472922', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Polypedilum) albicorne
    ['50472923', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Polypedilum) arundineti
    ['50472926', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Polypedilum) laetum
    ['50472928', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Polypedilum) nubeculosum
    ['50472929', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Polypedilum) pedestre
    ['50472940', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Tripodura)
    ['50472941', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Tripodura) apfelbecki
    ['50472942', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Tripodura) bicrenatum
    ['50472943', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Tripodura) pullum
    ['50472944', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Tripodura) quadriguttatum
    ['50472945', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Tripodura) scalaenum
    ['50472946', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Tripodura) tetracrenatum
    ['50472947', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Tripodura) aegyptium
    ['50472950', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Uresipedilum)
    ['50472951', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Uresipedilum) convictum
    ['50472952', '50472900'], // Diptera Chironominae (Chironomini) Polypedilum (Uresipedilum) cultellatum
    ['50473000', '50470000'], // Diptera Chironominae (Chironomini) Sergentia
    ['50473001', '50473000'], // Diptera Chironominae (Chironomini) Sergentia coracina
    ['50473003', '50473000'], // Diptera Chironominae (Chironomini) Sergentia psiloptera
    ['50473004', '50473000'], // Diptera Chironominae (Chironomini) Sergentia baueri
    ['50473005', '50473000'], // Diptera Chironominae (Chironomini) Sergentia prima
    ['50473100', '50470000'], // Diptera Chironominae (Chironomini) Stenochironomus
    ['50473103', '50473100'], // Diptera Chironominae (Chironomini) Stenochironomus hibernicus
    ['50473110', '50473100'], // Diptera Chironominae (Chironomini) Stenochironomus (Petalopholeus)
    ['50473111', '50473100'], // Diptera Chironominae (Chironomini) Stenochironomus (Petalopholeus) fascipennis
    ['50473120', '50473100'], // Diptera Chironominae (Chironomini) Stenochironomus (Stenochironomus)
    ['50473121', '50473100'], // Diptera Chironominae (Chironomini) Stenochironomus (Stenochironomus) gibbus
    ['50473200', '50470000'], // Diptera Chironominae (Chironomini) Stictochironomus
    ['50473201', '50473200'], // Diptera Chironominae (Chironomini) Stictochironomus maculipennis
    ['50473202', '50473200'], // Diptera Chironominae (Chironomini) Stictochironomus pictulus
    ['50473203', '50473200'], // Diptera Chironominae (Chironomini) Stictochironomus rosenschoeldi
    ['50473204', '50473200'], // Diptera Chironominae (Chironomini) Stictochironomus sticticus
    ['50473300', '50470000'], // Diptera Chironominae (Chironomini) Xenochironomus
    ['50473301', '50473300'], // Diptera Chironominae (Chironomini) Xenochironomus xenolabis
    ['50473400', '50470000'], // Diptera Chironominae (Chironomini) Zavreliella
    ['50473401', '50473400'], // Diptera Chironominae (Chironomini) Zavreliella marmorata
    ['50473500', '50470000'], // Diptera Chironominae (Chironomini) Saetheria
    ['50473501', '50473500'], // Diptera Chironominae (Chironomini) Saetheria reissi
    ['50473600', '50470000'], // Diptera Chironominae (Chironomini) Synendotendipes
    ['50473601', '50473600'], // Diptera Chironominae (Chironomini) Synendotendipes dispar
    ['50473602', '50473600'], // Diptera Chironominae (Chironomini) Synendotendipes impar
    ['50473603', '50473600'], // Diptera Chironominae (Chironomini) Synendotendipes lepidus
    ['50473700', '50470000'], // Diptera Chironominae (Chironomini) Tribelos
    ['50473701', '50473700'], // Diptera Chironominae (Chironomini) Tribelos intextus
    ['50473800', '50470000'], // Diptera Chironominae (Chironomini) Fleuria
    ['50473801', '50473800'], // Diptera Chironominae (Chironomini) Fleuria lacustris
    ['50480000', '50000000'], // Diptera Chironominae (Pseudochironomini)
    ['50480100', '50480000'], // Diptera Chironominae (Pseudochironomini) Pseudochironomus
    ['50480101', '50480100'], // Diptera Chironominae (Pseudochironomini) Pseudochironomus prasinatus
    ['50490000', '50000000'], // Diptera Chironominae (Tanytarsini)
    ['50490100', '50490000'], // Diptera Chironominae (Tanytarsini) Cladotanytarsus
    ['50490101', '50490100'], // Diptera Chironominae (Tanytarsini) Cladotanytarsus atridorsum
    ['50490102', '50490100'], // Diptera Chironominae (Tanytarsini) Cladotanytarsus difficilis
    ['50490103', '50490100'], // Diptera Chironominae (Tanytarsini) Cladotanytarsus dispersopilosus
    ['50490104', '50490100'], // Diptera Chironominae (Tanytarsini) Cladotanytarsus iucundus
    ['50490105', '50490100'], // Diptera Chironominae (Tanytarsini) Cladotanytarsus mancus
    ['50490106', '50490100'], // Diptera Chironominae (Tanytarsini) Cladotanytarsus nigrovittatus
    ['50490107', '50490100'], // Diptera Chironominae (Tanytarsini) Cladotanytarsus vanderwulpi
    ['50490108', '50490100'], // Diptera Chironominae (Tanytarsini) Cladotanytarsus lepidocalcar
    ['50490109', '50490100'], // Diptera Chironominae (Tanytarsini) Cladotanytarsus molestus
    ['50490200', '50490000'], // Diptera Chironominae (Tanytarsini) Micropsectra
    ['50490201', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra apposita
    ['50490202', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra aristata
    ['50490203', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra atrofasciata
    ['50490204', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra attenuata
    ['50490205', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra bidentata
    ['50490206', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra fusca
    ['50490207', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra groenlandica
    ['50490208', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra junci
    ['50490209', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra lindebergi
    ['50490211', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra lindrothi
    ['50490212', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra notescens
    ['50490213', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra recurvata
    ['50490214', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra subnitens
    ['50490215', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra contracta
    ['50490216', '50490200'], // Diptera Chironominae (Tanytarsini) Micropsectra radialis
    ['50490300', '50490000'], // Diptera Chironominae (Tanytarsini) Neozavrelia
    ['50490301', '50490300'], // Diptera Chironominae (Tanytarsini) Neozavrelia fuldensis
    ['50490302', '50490300'], // Diptera Chironominae (Tanytarsini) Neozavrelia longappendiculata
    ['50490303', '50490300'], // Diptera Chironominae (Tanytarsini) Neozavrelia luteola
    ['50490400', '50490000'], // Diptera Chironominae (Tanytarsini) Parapsectra
    ['50490401', '50490400'], // Diptera Chironominae (Tanytarsini) Parapsectra chionophila
    ['50490402', '50490400'], // Diptera Chironominae (Tanytarsini) Parapsectra nana
    ['50490403', '50490400'], // Diptera Chironominae (Tanytarsini) Parapsectra uliginosa
    ['50490500', '50490000'], // Diptera Chironominae (Tanytarsini) Paratanytarsus
    ['50490501', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus austriacus
    ['50490502', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus bituberculatus
    ['50490503', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus dissimilis
    ['50490504', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus inopertus
    ['50490505', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus intricatus
    ['50490506', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus laccophilus
    ['50490507', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus laetipes
    ['50490508', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus lauterborni
    ['50490509', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus natvigi
    ['50490511', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus penicillatus
    ['50490512', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus tenellulus
    ['50490513', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus tenuis
    ['50490514', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus dimorphis
    ['50490515', '50490500'], // Diptera Chironominae (Tanytarsini) Paratanytarsus grimmii
    ['50490600', '50490000'], // Diptera Chironominae (Tanytarsini) Rheotanytarsus
    ['50490601', '50490600'], // Diptera Chironominae (Tanytarsini) Rheotanytarsus curtistylus
    ['50490602', '50490600'], // Diptera Chironominae (Tanytarsini) Rheotanytarsus pellucidus
    ['50490603', '50490600'], // Diptera Chironominae (Tanytarsini) Rheotanytarsus muscicola
    ['50490604', '50490600'], // Diptera Chironominae (Tanytarsini) Rheotanytarsus pentapoda
    ['50490605', '50490600'], // Diptera Chironominae (Tanytarsini) Rheotanytarsus photophilus
    ['50490606', '50490600'], // Diptera Chironominae (Tanytarsini) Rheotanytarsus reissi
    ['50490607', '50490600'], // Diptera Chironominae (Tanytarsini) Rheotanytarsus rhenanus
    ['50490608', '50490600'], // Diptera Chironominae (Tanytarsini) Rheotanytarsus nigricauda
    ['50490609', '50490600'], // Diptera Chironominae (Tanytarsini) Rheotanytarsus ringei
    ['50490611', '50490600'], // Diptera Chironominae (Tanytarsini) Rheotanytarsus rioensis
    ['50490700', '50490000'], // Diptera Chironominae (Tanytarsini) Stempellina
    ['50490701', '50490700'], // Diptera Chironominae (Tanytarsini) Stempellina bausei
    ['50490702', '50490700'], // Diptera Chironominae (Tanytarsini) Stempellina almi
    ['50490800', '50490000'], // Diptera Chironominae (Tanytarsini) Stempellinella
    ['50490801', '50490800'], // Diptera Chironominae (Tanytarsini) Stempellinella brevis
    ['50490802', '50490800'], // Diptera Chironominae (Tanytarsini) Stempellinella cuneipennis
    ['50490803', '50490800'], // Diptera Chironominae (Tanytarsini) Stempellinella flavidula
    ['50490804', '50490800'], // Diptera Chironominae (Tanytarsini) Stempellinella edwardsi
    ['50490900', '50490000'], // Diptera Chironominae (Tanytarsini) Tanytarsus
    ['50490901', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus bathophilus
    ['50490902', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus brundini
    ['50490903', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus buchonius
    ['50490904', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus chinyensis
    ['50490905', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus curticornis
    ['50490906', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus debilis
    ['50490907', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus ejuncidus
    ['50490908', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus eminulus
    ['50490909', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus excavatus
    ['50490911', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus volgensis
    ['50490912', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus glabrescens
    ['50490913', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus gracilentus
    ['50490914', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus gregarius
    ['50490915', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus heusdensis
    ['50490916', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus inaequalis
    ['50490917', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus lactescens
    ['50490918', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus lestagei
    ['50490919', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus lugens
    ['50490921', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus medius
    ['50490922', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus mendax
    ['50490923', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus miriforceps
    ['50490924', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus nemorosus
    ['50490925', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus niger
    ['50490926', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus occultus
    ['50490927', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus palettaris
    ['50490928', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus pallidicornis
    ['50490929', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus palmeni
    ['50490931', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus quadridentatus
    ['50490932', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus recurvatus
    ['50490933', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus signatus
    ['50490934', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus striatulus
    ['50490935', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus sylvaticus
    ['50490936', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus usmaensis
    ['50490937', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus verralli
    ['50490938', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus aculeatus
    ['50490939', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus dispar
    ['50490941', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus gibbosiceps
    ['50490942', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus longitarsis
    ['50490943', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus telmaticus
    ['50490944', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus anderseni
    ['50490945', '50490900'], // Diptera Chironominae (Tanytarsini) Tanytarsus mancospinosus
    ['50490W00', '50490000'], // Diptera Chironominae (Tanytarsini) Micropsectra
    ['50490X00', '50490000'], // Diptera Chironominae (Tanytarsini) Paratanytarsus
    ['50490Y00', '50490000'], // Diptera Chironominae (Tanytarsini) Stempellinella
    ['50490Z00', '50490000'], // Diptera Chironominae (Tanytarsini) Tanytarsus
    ['50491000', '50490000'], // Diptera Chironominae (Tanytarsini) Virgatanytarsus
    ['50491001', '50491000'], // Diptera Chironominae (Tanytarsini) Virgatanytarsus arduennensis
    ['50491002', '50491000'], // Diptera Chironominae (Tanytarsini) Virgatanytarsus triangularis
    ['50491100', '50490000'], // Diptera Chironominae (Tanytarsini) Zavrelia
    ['50491101', '50491100'], // Diptera Chironominae (Tanytarsini) Zavrelia pentatoma
    ['50491200', '50490000'], // Diptera Chironominae (Tanytarsini) Corynocera
    ['50491201', '50491200'], // Diptera Chironominae (Tanytarsini) Corynocera ambigua
    ['504A0000', '50000000'], // Diptera Telmatogetoniinae
    ['504A0100', '504A0000'], // Diptera Telmatogetoniinae Telmatogeton
    ['504A0101', '504A0100'], // Diptera Telmatogetoniinae Telmatogeton pectinatus
    ['504A0102', '504A0100'], // Diptera Telmatogetoniinae Telmatogeton japonicus
    ['504A0200', '504A0000'], // Diptera Telmatogetoniinae Thalassomya
    ['504A0201', '504A0200'], // Diptera Telmatogetoniinae Thalassomya frauenfeldi
    ['50500000', '50000000'], // Diptera Bibionoidea
    ['50510000', '50000000'], // Diptera Bibionidae
    ['50600000', '50000000'], // Diptera Tabanoidea
    ['50610000', '50000000'], // Diptera Stratiomyidae
    ['50610100', '50610000'], // Diptera Stratiomyidae Beris
    ['50610101', '50610100'], // Diptera Stratiomyidae Beris clavipes
    ['50610102', '50610100'], // Diptera Stratiomyidae Beris fuscipes
    ['50610103', '50610100'], // Diptera Stratiomyidae Beris vallata
    ['50610200', '50610000'], // Diptera Stratiomyidae Nemotelus
    ['50610210', '50610200'], // Diptera Stratiomyidae Nemotelus (Camptopelma)
    ['50610211', '50610200'], // Diptera Stratiomyidae Nemotelus (Camptopelma) nigrinus
    ['50610220', '50610200'], // Diptera Stratiomyidae Nemotelus (Nemotelus)
    ['50610221', '50610200'], // Diptera Stratiomyidae Nemotelus (Nemotelus) notatus
    ['50610222', '50610200'], // Diptera Stratiomyidae Nemotelus (Nemotelus) pantherinus
    ['50610223', '50610200'], // Diptera Stratiomyidae Nemotelus (Nemotelus) uliginosus
    ['50610300', '50610000'], // Diptera Stratiomyidae Oxycera
    ['50610301', '50610300'], // Diptera Stratiomyidae Oxycera analis
    ['50610302', '50610300'], // Diptera Stratiomyidae Oxycera dives
    ['50610303', '50610300'], // Diptera Stratiomyidae Oxycera fallenii
    ['50610304', '50610300'], // Diptera Stratiomyidae Oxycera nigricornis
    ['50610305', '50610300'], // Diptera Stratiomyidae Oxycera morrisii
    ['50610307', '50610300'], // Diptera Stratiomyidae Oxycera pardalina
    ['50610308', '50610300'], // Diptera Stratiomyidae Oxycera rara
    ['50610309', '50610300'], // Diptera Stratiomyidae Oxycera pygmaea
    ['50610311', '50610300'], // Diptera Stratiomyidae Oxycera terminata
    ['50610312', '50610300'], // Diptera Stratiomyidae Oxycera trilineata
    ['50610313', '50610300'], // Diptera Stratiomyidae Oxycera leonina
    ['50610400', '50610000'], // Diptera Stratiomyidae Vanoyia
    ['50610401', '50610400'], // Diptera Stratiomyidae Vanoyia tenuicornis
    ['50610500', '50610000'], // Diptera Stratiomyidae Odontomyia
    ['50610501', '50610500'], // Diptera Stratiomyidae Odontomyia angulata
    ['50610502', '50610500'], // Diptera Stratiomyidae Odontomyia argentata
    ['50610503', '50610500'], // Diptera Stratiomyidae Odontomyia hydroleon
    ['50610504', '50610500'], // Diptera Stratiomyidae Odontomyia ornata
    ['50610505', '50610500'], // Diptera Stratiomyidae Odontomyia tigrina
    ['50610600', '50610000'], // Diptera Stratiomyidae Stratiomys
    ['50610601', '50610600'], // Diptera Stratiomyidae Stratiomys chamaeleon
    ['50610602', '50610600'], // Diptera Stratiomyidae Stratiomys singularior
    ['50610603', '50610600'], // Diptera Stratiomyidae Stratiomys longicornis
    ['50610604', '50610600'], // Diptera Stratiomyidae Stratiomys potamida
    ['50610700', '50610000'], // Diptera Stratiomyidae Oplodontha
    ['50610701', '50610700'], // Diptera Stratiomyidae Oplodontha viridula
    ['50610Z00', '50610000'], // Diptera Stratiomyidae Odontomyia
    ['50620000', '50000000'], // Diptera Rhagionidae
    ['50620300', '50620000'], // Diptera Rhagionidae Chrysophilus
    ['50620301', '50620300'], // Diptera Rhagionidae Chrysophilus cristatus
    ['50620302', '50620300'], // Diptera Rhagionidae Chrysophilus erythrophthalmus
    ['50630000', '50000000'], // Diptera Tabanidae
    ['50630100', '50630000'], // Diptera Tabanidae Chrysops
    ['50630101', '50630100'], // Diptera Tabanidae Chrysops caecutiens
    ['50630102', '50630100'], // Diptera Tabanidae Chrysops relictus
    ['50630103', '50630100'], // Diptera Tabanidae Chrysops sepulcralis
    ['50630104', '50630100'], // Diptera Tabanidae Chrysops viduatus
    ['50630200', '50630000'], // Diptera Tabanidae Haematopota
    ['50630201', '50630200'], // Diptera Tabanidae Haematopota bigoti
    ['50630202', '50630200'], // Diptera Tabanidae Haematopota crassicornis
    ['50630203', '50630200'], // Diptera Tabanidae Haematopota grandis
    ['50630205', '50630200'], // Diptera Tabanidae Haematopota subcylindrica
    ['50630300', '50630000'], // Diptera Tabanidae Atylotus
    ['50630301', '50630300'], // Diptera Tabanidae Atylotus fulvus
    ['50630302', '50630300'], // Diptera Tabanidae Atylotus latistriatus
    ['50630303', '50630300'], // Diptera Tabanidae Atylotus plebeius
    ['50630304', '50630300'], // Diptera Tabanidae Atylotus rusticus
    ['50630400', '50630000'], // Diptera Tabanidae Hybomitra
    ['50630401', '50630400'], // Diptera Tabanidae Hybomitra bimaculata
    ['50630402', '50630400'], // Diptera Tabanidae Hybomitra ciureai
    ['50630403', '50630400'], // Diptera Tabanidae Hybomitra distinguenda
    ['50630404', '50630400'], // Diptera Tabanidae Hybomitra expollicata
    ['50630405', '50630400'], // Diptera Tabanidae Hybomitra lurida
    ['50630406', '50630400'], // Diptera Tabanidae Hybomitra montana
    ['50630407', '50630400'], // Diptera Tabanidae Hybomitra muehlfeldi
    ['50630408', '50630400'], // Diptera Tabanidae Hybomitra micans
    ['50630409', '50630400'], // Diptera Tabanidae Hybomitra solstitialis
    ['50630500', '50630000'], // Diptera Tabanidae Tabanus
    ['50630501', '50630500'], // Diptera Tabanidae Tabanus autumnalis
    ['50630502', '50630500'], // Diptera Tabanidae Tabanus bovinus
    ['50630503', '50630500'], // Diptera Tabanidae Tabanus bromius
    ['50630504', '50630500'], // Diptera Tabanidae Tabanus cordiger
    ['50630505', '50630500'], // Diptera Tabanidae Tabanus glaucopis
    ['50630506', '50630500'], // Diptera Tabanidae Tabanus maculicornis
    ['50630507', '50630500'], // Diptera Tabanidae Tabanus miki
    ['50630508', '50630500'], // Diptera Tabanidae Tabanus sudeticus
    ['50630Z00', '50630000'], // Diptera Tabanidae Tabanus
    ['50640000', '50000000'], // Diptera Athericidae
    ['50640100', '50640000'], // Diptera Athericidae Atherix
    ['50640101', '50640100'], // Diptera Athericidae Atherix ibis
    ['50640200', '50640000'], // Diptera Athericidae Atrichops
    ['50640201', '50640200'], // Diptera Athericidae Atrichops crassipes
    ['50640300', '50640000'], // Diptera Athericidae Ibisia
    ['50640301', '50640300'], // Diptera Athericidae Ibisia marginata
    ['506Z0000', '50000000'], // Diptera Rhagionidae (including Athericidae)
    ['50700000', '50000000'], // Diptera Empidoidea
    ['50710000', '50000000'], // Diptera Empididae
    ['50710200', '50710000'], // Diptera Empididae Rhamphomyia
    ['50710220', '50710200'], // Diptera Empididae Rhamphomyia (Pararhamphomyia)
    ['50710221', '50710200'], // Diptera Empididae Rhamphomyia (Pararhamphomyia) barbata
    ['50710270', '50710200'], // Diptera Empididae Rhamphomyia (Holoclera)
    ['50710271', '50710200'], // Diptera Empididae Rhamphomyia (Holoclera) flava
    ['50710900', '50710000'], // Diptera Empididae Heleodromia
    ['50710901', '50710900'], // Diptera Empididae Heleodromia immaculata
    ['50711000', '50710000'], // Diptera Empididae Chelipoda
    ['50711001', '50711000'], // Diptera Empididae Chelipoda albiseta
    ['50711002', '50711000'], // Diptera Empididae Chelipoda vocatoria
    ['50711100', '50710000'], // Diptera Empididae Phyllodromia
    ['50711101', '50711100'], // Diptera Empididae Phyllodromia melanocephala
    ['50711200', '50710000'], // Diptera Empididae Chelifera
    ['50711201', '50711200'], // Diptera Empididae Chelifera angusta
    ['50711202', '50711200'], // Diptera Empididae Chelifera aperticauda
    ['50711203', '50711200'], // Diptera Empididae Chelifera astigma
    ['50711204', '50711200'], // Diptera Empididae Chelifera concinnicauda
    ['50711205', '50711200'], // Diptera Empididae Chelifera diversicauda
    ['50711206', '50711200'], // Diptera Empididae Chelifera flavella
    ['50711207', '50711200'], // Diptera Empididae Chelifera monostigma
    ['50711208', '50711200'], // Diptera Empididae Chelifera pectinicauda
    ['50711209', '50711200'], // Diptera Empididae Chelifera precabunda
    ['50711211', '50711200'], // Diptera Empididae Chelifera precatoria
    ['50711212', '50711200'], // Diptera Empididae Chelifera stigmatica
    ['50711213', '50711200'], // Diptera Empididae Chelifera subangusta
    ['50711214', '50711200'], // Diptera Empididae Chelifera trapezina
    ['50711300', '50710000'], // Diptera Empididae Hemerodromia
    ['50711301', '50711300'], // Diptera Empididae Hemerodromia adulatoria
    ['50711302', '50711300'], // Diptera Empididae Hemerodromia baetica
    ['50711303', '50711300'], // Diptera Empididae Hemerodromia laudatoria
    ['50711304', '50711300'], // Diptera Empididae Hemerodromia melangyna
    ['50711305', '50711300'], // Diptera Empididae Hemerodromia oratoria
    ['50711306', '50711300'], // Diptera Empididae Hemerodromia raptoria
    ['50711307', '50711300'], // Diptera Empididae Hemerodromia unilineata
    ['50711400', '50710000'], // Diptera Empididae Dryodromia
    ['50711401', '50711400'], // Diptera Empididae Dryodromia testacea
    ['50711500', '50710000'], // Diptera Empididae Dolichocephala
    ['50711501', '50711500'], // Diptera Empididae Dolichocephala guttata
    ['50711502', '50711500'], // Diptera Empididae Dolichocephala irrorata
    ['50711503', '50711500'], // Diptera Empididae Dolichocephala ocellata
    ['50711504', '50711500'], // Diptera Empididae Dolichocephala thomasi
    ['50711600', '50710000'], // Diptera Empididae Trichopeza
    ['50711601', '50711600'], // Diptera Empididae Trichopeza longicornis
    ['50711700', '50710000'], // Diptera Empididae Clinocera
    ['50711711', '50711700'], // Diptera Empididae Clinocera nigra
    ['50711721', '50711700'], // Diptera Empididae Clinocera fontinalis
    ['50711722', '50711700'], // Diptera Empididae Clinocera nivalis
    ['50711723', '50711700'], // Diptera Empididae Clinocera stagnalis
    ['50711724', '50711700'], // Diptera Empididae Clinocera wesmaeli
    ['50711800', '50710000'], // Diptera Empididae Kowarzia
    ['50711801', '50711800'], // Diptera Empididae Kowarzia bipunctata
    ['50711802', '50711800'], // Diptera Empididae Kowarzia tenella
    ['50711803', '50711800'], // Diptera Empididae Kowarzia madicola
    ['50712000', '50710000'], // Diptera Empididae Wiedemannia
    ['50712010', '50712000'], // Diptera Empididae Wiedemannia (Wiedemannia)
    ['50712011', '50712000'], // Diptera Empididae Wiedemannia (Wiedemannia) bistigma
    ['50712012', '50712000'], // Diptera Empididae Wiedemannia (Wiedemannia) rhynchops
    ['50712020', '50712000'], // Diptera Empididae Wiedemannia (Pseudowiedemannia)
    ['50712021', '50712000'], // Diptera Empididae Wiedemannia (Pseudowiedemannia) lamellata
    ['50712030', '50712000'], // Diptera Empididae Wiedemannia (Chamaedipsia)
    ['50712031', '50712000'], // Diptera Empididae Wiedemannia (Chamaedipsia) lota
    ['50712040', '50712000'], // Diptera Empididae Wiedemannia (Philolutra)
    ['50712041', '50712000'], // Diptera Empididae Wiedemannia (Philolutra) simplex
    ['50712042', '50712000'], // Diptera Empididae Wiedemannia (Philolutra) phantasma
    ['50713000', '50710000'], // Diptera Empididae Hilara
    ['50713006', '50713000'], // Diptera Empididae Hilara anglodanica
    ['50713011', '50713000'], // Diptera Empididae Hilara beckeri
    ['50713014', '50713000'], // Diptera Empididae Hilara brevistyla
    ['50713017', '50713000'], // Diptera Empididae Hilara chorica
    ['50713021', '50713000'], // Diptera Empididae Hilara cornicula
    ['50713025', '50713000'], // Diptera Empididae Hilara flavipes
    ['50713028', '50713000'], // Diptera Empididae Hilara galactoptera
    ['50713037', '50713000'], // Diptera Empididae Hilara intermedia
    ['50713038', '50713000'], // Diptera Empididae Hilara interstincta
    ['50713039', '50713000'], // Diptera Empididae Hilara litorea
    ['50713041', '50713000'], // Diptera Empididae Hilara longivittata
    ['50713043', '50713000'], // Diptera Empididae Hilara lundbecki
    ['50713046', '50713000'], // Diptera Empididae Hilara manicata
    ['50713047', '50713000'], // Diptera Empididae Hilara maura
    ['50713052', '50713000'], // Diptera Empididae Hilara longifurca
    ['50713053', '50713000'], // Diptera Empididae Hilara morata
    ['50713054', '50713000'], // Diptera Empididae Hilara nigrina
    ['50713057', '50713000'], // Diptera Empididae Hilara obscura
    ['50713065', '50713000'], // Diptera Empididae Hilara quadriseta
    ['50713066', '50713000'], // Diptera Empididae Hilara quadrifasciata
    ['50713068', '50713000'], // Diptera Empididae Hilara rejecta
    ['50713069', '50713000'], // Diptera Empididae Hilara subpollinosa
    ['50713075', '50713000'], // Diptera Empididae Hilara thoracica
    ['5071X000', '50710000'], // Diptera Clinocerinae
    ['5071Y000', '50710000'], // Diptera Hemerodrominae
    ['50720000', '50000000'], // Diptera Dolichopodidae
    ['50720100', '50720000'], // Diptera Dolichopodidae Dolichopus
    ['50720110', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus)
    ['50720111', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) arbustorum
    ['50720112', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) atratus
    ['50720113', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) cilifemoratus
    ['50720114', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) griseipennis
    ['50720115', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) nubilus
    ['50720116', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) pennatus
    ['50720117', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) phaeopus
    ['50720118', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) plumipes
    ['50720119', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) popularis
    ['5072011A', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) signatus
    ['5072011B', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) ungulatus
    ['5072011C', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) urbanus
    ['5072011D', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) trivialis
    ['5072011E', '50720100'], // Diptera Dolichopodidae Dolichopus (Dolichopus) excisus
    ['50720400', '50720000'], // Diptera Dolichopodidae Hercostomus
    ['50720410', '50720400'], // Diptera Dolichopodidae Hercostomus (Hercostomus)
    ['50720413', '50720400'], // Diptera Dolichopodidae Hercostomus (Hercostomus) chetifer
    ['50720414', '50720400'], // Diptera Dolichopodidae Hercostomus (Hercostomus) nigripennis
    ['50720500', '50720000'], // Diptera Dolichopodidae Gymnopternus
    ['50720501', '50720500'], // Diptera Dolichopodidae Gymnopternus aerosus
    ['50720502', '50720500'], // Diptera Dolichopodidae Gymnopternus assimilis
    ['50720800', '50720000'], // Diptera Dolichopodidae Tachytrechus
    ['50720801', '50720800'], // Diptera Dolichopodidae Tachytrechus insignis
    ['50720802', '50720800'], // Diptera Dolichopodidae Tachytrechus notatus
    ['50720900', '50720000'], // Diptera Dolichopodidae Hydrophorus
    ['50720901', '50720900'], // Diptera Dolichopodidae Hydrophorus albiceps
    ['50720902', '50720900'], // Diptera Dolichopodidae Hydrophorus balticus
    ['50720903', '50720900'], // Diptera Dolichopodidae Hydrophorus bipunctatus
    ['50720904', '50720900'], // Diptera Dolichopodidae Hydrophorus litoreus
    ['50720905', '50720900'], // Diptera Dolichopodidae Hydrophorus nebulosus
    ['50720906', '50720900'], // Diptera Dolichopodidae Hydrophorus oceanus
    ['50720907', '50720900'], // Diptera Dolichopodidae Hydrophorus praecox
    ['50720908', '50720900'], // Diptera Dolichopodidae Hydrophorus viridis
    ['50721000', '50720000'], // Diptera Dolichopodidae Liancalus
    ['50721001', '50721000'], // Diptera Dolichopodidae Liancalus virens
    ['50721100', '50720000'], // Diptera Dolichopodidae Aphrosylus
    ['50721101', '50721100'], // Diptera Dolichopodidae Aphrosylus mitis
    ['50721200', '50720000'], // Diptera Dolichopodidae Rhaphium
    ['50721201', '50721200'], // Diptera Dolichopodidae Rhaphium albomaculatum
    ['50721202', '50721200'], // Diptera Dolichopodidae Rhaphium brevicorne
    ['50721203', '50721200'], // Diptera Dolichopodidae Rhaphium consobrinum
    ['50721204', '50721200'], // Diptera Dolichopodidae Rhaphium elegantulum
    ['50721205', '50721200'], // Diptera Dolichopodidae Rhaphium fractum
    ['50721206', '50721200'], // Diptera Dolichopodidae Rhaphium riparium
    ['50721300', '50720000'], // Diptera Dolichopodidae Syntormon
    ['50721311', '50721300'], // Diptera Dolichopodidae Syntormon filiger
    ['50721312', '50721300'], // Diptera Dolichopodidae Syntormon macula
    ['50721313', '50721300'], // Diptera Dolichopodidae Syntormon mikii
    ['50721314', '50721300'], // Diptera Dolichopodidae Syntormon monile
    ['50721315', '50721300'], // Diptera Dolichopodidae Syntormon pallipes
    ['50721316', '50721300'], // Diptera Dolichopodidae Syntormon pumilum
    ['50721317', '50721300'], // Diptera Dolichopodidae Syntormon sulcipes
    ['50721318', '50721300'], // Diptera Dolichopodidae Syntormon tarsatum
    ['50721319', '50721300'], // Diptera Dolichopodidae Syntormon zelleri
    ['50721321', '50721300'], // Diptera Dolichopodidae Syntormon setosum
    ['50721331', '50721300'], // Diptera Dolichopodidae Syntormon aulicum
    ['50721500', '50720000'], // Diptera Dolichopodidae Machaerium
    ['50721501', '50721500'], // Diptera Dolichopodidae Machaerium maritimae
    ['50721600', '50720000'], // Diptera Dolichopodidae Systenus
    ['50721601', '50721600'], // Diptera Dolichopodidae Systenus bipartitus
    ['50721602', '50721600'], // Diptera Dolichopodidae Systenus leucurus
    ['50721603', '50721600'], // Diptera Dolichopodidae Systenus pallipes
    ['50721604', '50721600'], // Diptera Dolichopodidae Systenus scholtzii
    ['50721605', '50721600'], // Diptera Dolichopodidae Systenus tener
    ['50721700', '50720000'], // Diptera Dolichopodidae Achalcus
    ['50721701', '50721700'], // Diptera Dolichopodidae Achalcus flavicollis
    ['50721800', '50720000'], // Diptera Dolichopodidae Chrysotus
    ['50721801', '50721800'], // Diptera Dolichopodidae Chrysotus cilipes
    ['50721802', '50721800'], // Diptera Dolichopodidae Chrysotus gramineus
    ['50721803', '50721800'], // Diptera Dolichopodidae Chrysotus monochaetus
    ['50721804', '50721800'], // Diptera Dolichopodidae Chrysotus suavis
    ['50721805', '50721800'], // Diptera Dolichopodidae Chrysotus angulicornis
    ['50721900', '50720000'], // Diptera Dolichopodidae Argyra
    ['50721901', '50721900'], // Diptera Dolichopodidae Argyra argyria
    ['50721902', '50721900'], // Diptera Dolichopodidae Argyra ilonae
    ['50721903', '50721900'], // Diptera Dolichopodidae Argyra diaphana
    ['50721904', '50721900'], // Diptera Dolichopodidae Argyra leucocephala
    ['50721905', '50721900'], // Diptera Dolichopodidae Argyra vestita
    ['50721906', '50721900'], // Diptera Dolichopodidae Argyra argentina
    ['50721907', '50721900'], // Diptera Dolichopodidae Argyra elongata
    ['50721908', '50721900'], // Diptera Dolichopodidae Argyra perplexa
    ['50722000', '50720000'], // Diptera Dolichopodidae Campsicnemus
    ['50722011', '50722000'], // Diptera Dolichopodidae Campsicnemus armatus
    ['50722012', '50722000'], // Diptera Dolichopodidae Campsicnemus compeditus
    ['50722013', '50722000'], // Diptera Dolichopodidae Campsicnemus curvipes
    ['50722014', '50722000'], // Diptera Dolichopodidae Campsicnemus loripes
    ['50722015', '50722000'], // Diptera Dolichopodidae Campsicnemus magius
    ['50722016', '50722000'], // Diptera Dolichopodidae Campsicnemus marginatus
    ['50722017', '50722000'], // Diptera Dolichopodidae Campsicnemus pumilio
    ['50722018', '50722000'], // Diptera Dolichopodidae Campsicnemus picticornis
    ['50722019', '50722000'], // Diptera Dolichopodidae Campsicnemus pusillus
    ['50722021', '50722000'], // Diptera Dolichopodidae Campsicnemus scambus
    ['50722022', '50722000'], // Diptera Dolichopodidae Campsicnemus dasycnemus
    ['50722023', '50722000'], // Diptera Dolichopodidae Campsicnemus umbripennis
    ['50722200', '50720000'], // Diptera Dolichopodidae Acropsilus
    ['50722201', '50722200'], // Diptera Dolichopodidae Acropsilus niger
    ['50722300', '50720000'], // Diptera Dolichopodidae Teuchophorus
    ['50722301', '50722300'], // Diptera Dolichopodidae Teuchophorus calcaratus
    ['50722302', '50722300'], // Diptera Dolichopodidae Teuchophorus monacanthus
    ['50722303', '50722300'], // Diptera Dolichopodidae Teuchophorus nigricosta
    ['50722304', '50722300'], // Diptera Dolichopodidae Teuchophorus simplex
    ['50722305', '50722300'], // Diptera Dolichopodidae Teuchophorus spinigerellus
    ['50722400', '50720000'], // Diptera Dolichopodidae Telmaturgus
    ['50722401', '50722400'], // Diptera Dolichopodidae Telmaturgus tumidulus
    ['50722500', '50720000'], // Diptera Dolichopodidae Anepsiomyia
    ['50722501', '50722500'], // Diptera Dolichopodidae Anepsiomyia flaviventris
    ['50722600', '50720000'], // Diptera Dolichopodidae Poecilobothrus
    ['50722601', '50722600'], // Diptera Dolichopodidae Poecilobothrus nobilitatus
    ['50722700', '50720000'], // Diptera Dolichopodidae Sybistroma
    ['50722701', '50722700'], // Diptera Dolichopodidae Sybistroma obscurellum
    ['50722800', '50720000'], // Diptera Dolichopodidae Orthoceratium
    ['50722801', '50722800'], // Diptera Dolichopodidae Orthoceratium lacustre
    ['50722900', '50720000'], // Diptera Dolichopodidae Dolichophorus
    ['50722901', '50722900'], // Diptera Dolichopodidae Dolichophorus kerteszii
    ['50723000', '50720000'], // Diptera Dolichopodidae Ethiromyia
    ['50723001', '50723000'], // Diptera Dolichopodidae Ethiromyia chalybeata
    ['50730000', '50000000'], // Diptera Hybotidae
    ['50730100', '50730000'], // Diptera Hybotidae Stilpon
    ['50730101', '50730100'], // Diptera Hybotidae Stilpon graminum
    ['50730102', '50730100'], // Diptera Hybotidae Stilpon lunatus
    ['50730103', '50730100'], // Diptera Hybotidae Stilpon nubilus
    ['50730104', '50730100'], // Diptera Hybotidae Stilpon sublunatus
    ['50730105', '50730100'], // Diptera Hybotidae Stilpon subnubilis
    ['507Z0000', '50000000'], // Diptera Empididae (including Stilpon sp.)
    ['50800000', '50000000'], // Diptera Cyclorrhapha
    ['50810000', '50000000'], // Diptera Syrphidae
    ['50810100', '50810000'], // Diptera Syrphidae Chrysogaster
    ['50810101', '50810100'], // Diptera Syrphidae Chrysogaster cemiteriorum
    ['50810104', '50810100'], // Diptera Syrphidae Chrysogaster solstitialis
    ['50810105', '50810100'], // Diptera Syrphidae Chrysogaster virescens
    ['50810200', '50810000'], // Diptera Syrphidae Lejogaster
    ['50810201', '50810200'], // Diptera Syrphidae Lejogaster metallina
    ['50810202', '50810200'], // Diptera Syrphidae Lejogaster tarsata
    ['50810300', '50810000'], // Diptera Syrphidae Orthonevra
    ['50810301', '50810300'], // Diptera Syrphidae Orthonevra brevicornis
    ['50810302', '50810300'], // Diptera Syrphidae Orthonevra geniculata
    ['50810303', '50810300'], // Diptera Syrphidae Orthonevra nobilis
    ['50810400', '50810000'], // Diptera Syrphidae Sericomyia
    ['50810401', '50810400'], // Diptera Syrphidae Sericomyia lappona
    ['50810402', '50810400'], // Diptera Syrphidae Sericomyia silentis
    ['50810500', '50810000'], // Diptera Syrphidae Helophilus
    ['50810501', '50810500'], // Diptera Syrphidae Helophilus groenlandicus
    ['50810502', '50810500'], // Diptera Syrphidae Helophilus hybridus
    ['50810503', '50810500'], // Diptera Syrphidae Helophilus trivittatus
    ['50810504', '50810500'], // Diptera Syrphidae Helophilus pendulus
    ['50810505', '50810500'], // Diptera Syrphidae Helophilus affinis
    ['50810600', '50810000'], // Diptera Syrphidae Anasimyia
    ['50810601', '50810600'], // Diptera Syrphidae Anasimyia contracta
    ['50810602', '50810600'], // Diptera Syrphidae Anasimyia interpuncta
    ['50810603', '50810600'], // Diptera Syrphidae Anasimyia lineata
    ['50810604', '50810600'], // Diptera Syrphidae Anasimyia lunulata
    ['50810605', '50810600'], // Diptera Syrphidae Anasimyia transfuga
    ['50810700', '50810000'], // Diptera Syrphidae Lejops
    ['50810701', '50810700'], // Diptera Syrphidae Lejops vittata
    ['50810800', '50810000'], // Diptera Syrphidae Parhelophilus
    ['50810801', '50810800'], // Diptera Syrphidae Parhelophilus consimilis
    ['50810802', '50810800'], // Diptera Syrphidae Parhelophilus frutetorum
    ['50810803', '50810800'], // Diptera Syrphidae Parhelophilus versicolor
    ['50810900', '50810000'], // Diptera Syrphidae Mallota
    ['50810901', '50810900'], // Diptera Syrphidae Mallota cimbiciformis
    ['50810Z00', '50810000'], // Diptera Syrphidae Chrysogaster
    ['50811000', '50810000'], // Diptera Syrphidae Eristalis
    ['50811010', '50811000'], // Diptera Syrphidae Eristalis (Eoseristalis)
    ['50811011', '50811000'], // Diptera Syrphidae Eristalis (Eoseristalis) abusiva
    ['50811012', '50811000'], // Diptera Syrphidae Eristalis (Eoseristalis) arbustorum
    ['50811013', '50811000'], // Diptera Syrphidae Eristalis (Eoseristalis) cryptarum
    ['50811014', '50811000'], // Diptera Syrphidae Eristalis (Eoseristalis) horticola
    ['50811015', '50811000'], // Diptera Syrphidae Eristalis (Eoseristalis) intricaria
    ['50811016', '50811000'], // Diptera Syrphidae Eristalis (Eoseristalis) nemorum
    ['50811017', '50811000'], // Diptera Syrphidae Eristalis (Eoseristalis) pertinax
    ['50811018', '50811000'], // Diptera Syrphidae Eristalis (Eoseristalis) rupium
    ['50811019', '50811000'], // Diptera Syrphidae Eristalis (Eoseristalis) similis
    ['50811030', '50811000'], // Diptera Syrphidae Eristalis (Eristalis)
    ['50811031', '50811000'], // Diptera Syrphidae Eristalis (Eristalis) tenax
    ['50811200', '50810000'], // Diptera Syrphidae Eristalinus
    ['50811210', '50811200'], // Diptera Syrphidae Eristalinus (Eristalinus)
    ['50811211', '50811200'], // Diptera Syrphidae Eristalinus (Eristalinus) sepulchralis
    ['50811220', '50811200'], // Diptera Syrphidae Eristalinus (Lathyropthalmus)
    ['50811221', '50811200'], // Diptera Syrphidae Eristalinus (Lathyropthalmus) aeneus
    ['50811300', '50810000'], // Diptera Syrphidae Myathropa
    ['50811301', '50811300'], // Diptera Syrphidae Myathropa florea
    ['50811400', '50810000'], // Diptera Syrphidae Melanogaster
    ['50811401', '50811400'], // Diptera Syrphidae Melanogaster aerosa
    ['50811402', '50811400'], // Diptera Syrphidae Melanogaster hirtella
    ['50811500', '50810000'], // Diptera Syrphidae Riponnensia
    ['50811501', '50811500'], // Diptera Syrphidae Riponnensia splendens
    ['50811600', '50810000'], // Diptera Syrphidae Arctophila
    ['50811601', '50811600'], // Diptera Syrphidae Arctophila superbiens
    ['50811700', '50810000'], // Diptera Syrphidae Neoascia
    ['50811710', '50811700'], // Diptera Syrphidae Neoascia (Neoascia)
    ['50811711', '50811700'], // Diptera Syrphidae Neoascia (Neoascia) podagrica
    ['50811712', '50811700'], // Diptera Syrphidae Neoascia (Neoascia) tenur
    ['50811720', '50811700'], // Diptera Syrphidae Neoascia (Neoasciella)
    ['50811721', '50811700'], // Diptera Syrphidae Neoascia (Neoasciella) geniculata
    ['50811722', '50811700'], // Diptera Syrphidae Neoascia (Neoasciella) interrupta
    ['50811723', '50811700'], // Diptera Syrphidae Neoascia (Neoasciella) meticulosa
    ['50811724', '50811700'], // Diptera Syrphidae Neoascia (Neoasciella) obliqua
    ['50811800', '50810000'], // Diptera Syrphidae Sphegina
    ['50811810', '50811800'], // Diptera Syrphidae Sphegina (Sphegina)
    ['50811811', '50811800'], // Diptera Syrphidae Sphegina (Sphegina) clunipes
    ['50811812', '50811800'], // Diptera Syrphidae Sphegina (Sphegina) elegans
    ['50820000', '50000000'], // Diptera Sciomyzidae
    ['50820100', '50820000'], // Diptera Sciomyzidae Colobaea
    ['50820101', '50820100'], // Diptera Sciomyzidae Colobaea bifasciella
    ['50820102', '50820100'], // Diptera Sciomyzidae Colobaea distincta
    ['50820103', '50820100'], // Diptera Sciomyzidae Colobaea pectoralis
    ['50820104', '50820100'], // Diptera Sciomyzidae Colobaea punctata
    ['50820200', '50820000'], // Diptera Sciomyzidae Pherbellia
    ['50820203', '50820200'], // Diptera Sciomyzidae Pherbellia argyra
    ['50820204', '50820200'], // Diptera Sciomyzidae Pherbellia brunnipes
    ['50820205', '50820200'], // Diptera Sciomyzidae Pherbellia cinerella
    ['50820209', '50820200'], // Diptera Sciomyzidae Pherbellia griseola
    ['50820213', '50820200'], // Diptera Sciomyzidae Pherbellia nana
    ['50820215', '50820200'], // Diptera Sciomyzidae Pherbellia schoenherri
    ['50820218', '50820200'], // Diptera Sciomyzidae Pherbellia ventralis
    ['50820219', '50820200'], // Diptera Sciomyzidae Pherbellia stylifera
    ['50820300', '50820000'], // Diptera Sciomyzidae Pteromicra
    ['50820301', '50820300'], // Diptera Sciomyzidae Pteromicra angustipennis
    ['50820302', '50820300'], // Diptera Sciomyzidae Pteromicra glabricula
    ['50820303', '50820300'], // Diptera Sciomyzidae Pteromicra leucopeza
    ['50820304', '50820300'], // Diptera Sciomyzidae Pteromicra pectorosa
    ['50820400', '50820000'], // Diptera Sciomyzidae Sciomyza
    ['50820401', '50820400'], // Diptera Sciomyzidae Sciomyza dryomyzina
    ['50820402', '50820400'], // Diptera Sciomyzidae Sciomyza simplex
    ['50820403', '50820400'], // Diptera Sciomyzidae Sciomyza testacea
    ['50820500', '50820000'], // Diptera Sciomyzidae Antichaeta
    ['50820501', '50820500'], // Diptera Sciomyzidae Antichaeta analis
    ['50820502', '50820500'], // Diptera Sciomyzidae Antichaeta brevipennis
    ['50820503', '50820500'], // Diptera Sciomyzidae Antichaeta atriseta
    ['50820504', '50820500'], // Diptera Sciomyzidae Antichaeta obliviosa
    ['50820600', '50820000'], // Diptera Sciomyzidae Dictya
    ['50820601', '50820600'], // Diptera Sciomyzidae Dictya umbrarum
    ['50820700', '50820000'], // Diptera Sciomyzidae Elgiva
    ['50820701', '50820700'], // Diptera Sciomyzidae Elgiva cucularia
    ['50820702', '50820700'], // Diptera Sciomyzidae Elgiva solicita
    ['50820800', '50820000'], // Diptera Sciomyzidae Hydromya
    ['50820801', '50820800'], // Diptera Sciomyzidae Hydromya dorsalis
    ['50820900', '50820000'], // Diptera Sciomyzidae Ilione
    ['50820910', '50820900'], // Diptera Sciomyzidae Ilione (Ilione)
    ['50820911', '50820900'], // Diptera Sciomyzidae Ilione (Ilione) albiseta
    ['50820920', '50820900'], // Diptera Sciomyzidae Ilione (Tumidicercus)
    ['50820921', '50820900'], // Diptera Sciomyzidae Ilione (Tumidicercus) lineata
    ['50821000', '50820000'], // Diptera Sciomyzidae Limnia
    ['50821001', '50821000'], // Diptera Sciomyzidae Limnia paludicola
    ['50821002', '50821000'], // Diptera Sciomyzidae Limnia unguicornis
    ['50821100', '50820000'], // Diptera Sciomyzidae Pherbina
    ['50821101', '50821100'], // Diptera Sciomyzidae Pherbina coryleti
    ['50821200', '50820000'], // Diptera Sciomyzidae Psacadina
    ['50821201', '50821200'], // Diptera Sciomyzidae Psacadina verbekei
    ['50821202', '50821200'], // Diptera Sciomyzidae Psacadina vittigera
    ['50821203', '50821200'], // Diptera Sciomyzidae Psacadina zernyi
    ['50821300', '50820000'], // Diptera Sciomyzidae Renocera
    ['50821301', '50821300'], // Diptera Sciomyzidae Renocera stroblii
    ['50821302', '50821300'], // Diptera Sciomyzidae Renocera pallida
    ['50821303', '50821300'], // Diptera Sciomyzidae Renocera striata
    ['50821400', '50820000'], // Diptera Sciomyzidae Sepedon
    ['50821401', '50821400'], // Diptera Sciomyzidae Sepedon sphegea
    ['50821402', '50821400'], // Diptera Sciomyzidae Sepedon spinipes
    ['50821500', '50820000'], // Diptera Sciomyzidae Tetanocera
    ['50821501', '50821500'], // Diptera Sciomyzidae Tetanocera arrogans
    ['50821503', '50821500'], // Diptera Sciomyzidae Tetanocera ferruginea
    ['50821504', '50821500'], // Diptera Sciomyzidae Tetanocera freyi
    ['50821505', '50821500'], // Diptera Sciomyzidae Tetanocera hyalipennis
    ['50821508', '50821500'], // Diptera Sciomyzidae Tetanocera robusta
    ['50821509', '50821500'], // Diptera Sciomyzidae Tetanocera silvatica
    ['50821511', '50821500'], // Diptera Sciomyzidae Tetanocera fuscinervis
    ['50821600', '50820000'], // Diptera Sciomyzidae Ditaeniella
    ['50821601', '50821600'], // Diptera Sciomyzidae Ditaeniella grisescens
    ['50830000', '50000000'], // Diptera Ephydridae
    ['50830100', '50830000'], // Diptera Ephydridae Notiphila
    ['50830110', '50830100'], // Diptera Ephydridae Notiphila (Notiphila)
    ['50830111', '50830100'], // Diptera Ephydridae Notiphila (Notiphila) annulipes
    ['50830113', '50830100'], // Diptera Ephydridae Notiphila (Notiphila) brunipes
    ['50830114', '50830100'], // Diptera Ephydridae Notiphila (Notiphila) cinerea
    ['50830115', '50830100'], // Diptera Ephydridae Notiphila (Notiphila) dorsata
    ['50830116', '50830100'], // Diptera Ephydridae Notiphila (Notiphila) maculata
    ['50830117', '50830100'], // Diptera Ephydridae Notiphila (Notiphila) nigricornis
    ['50830118', '50830100'], // Diptera Ephydridae Notiphila (Notiphila) riparia
    ['50830119', '50830100'], // Diptera Ephydridae Notiphila (Notiphila) stagnicola
    ['5083011B', '50830100'], // Diptera Ephydridae Notiphila (Notiphila) subnigra
    ['5083011C', '50830100'], // Diptera Ephydridae Notiphila (Notiphila) guttiventris
    ['5083011D', '50830100'], // Diptera Ephydridae Notiphila (Notiphila) nubila
    ['5083011E', '50830100'], // Diptera Ephydridae Notiphila (Notiphila) umbrosa
    ['50830130', '50830100'], // Diptera Ephydridae Notiphila (Acrolimna)
    ['50830131', '50830100'], // Diptera Ephydridae Notiphila (Acrolimna) uliginosa
    ['50830132', '50830100'], // Diptera Ephydridae Notiphila (Acrolimna) venusta
    ['50830140', '50830100'], // Diptera Ephydridae Notiphila (Dichaeta)
    ['50830141', '50830100'], // Diptera Ephydridae Notiphila (Dichaeta) caudata
    ['50830400', '50830000'], // Diptera Ephydridae Hydrellia
    ['50830401', '50830400'], // Diptera Ephydridae Hydrellia subalbiceps
    ['50830402', '50830400'], // Diptera Ephydridae Hydrellia albilabris
    ['50830403', '50830400'], // Diptera Ephydridae Hydrellia cardamines
    ['50830405', '50830400'], // Diptera Ephydridae Hydrellia cochleariae
    ['50830406', '50830400'], // Diptera Ephydridae Hydrellia flavicornis
    ['50830407', '50830400'], // Diptera Ephydridae Hydrellia griseola
    ['50830408', '50830400'], // Diptera Ephydridae Hydrellia maura
    ['50830409', '50830400'], // Diptera Ephydridae Hydrellia mutata
    ['50830411', '50830400'], // Diptera Ephydridae Hydrellia ranunculi
    ['50830412', '50830400'], // Diptera Ephydridae Hydrellia nigricans
    ['50830500', '50830000'], // Diptera Ephydridae Ochthera
    ['50830501', '50830500'], // Diptera Ephydridae Ochthera mantis
    ['50830502', '50830500'], // Diptera Ephydridae Ochthera schembrii
    ['50830503', '50830500'], // Diptera Ephydridae Ochthera manicata
    ['50830600', '50830000'], // Diptera Ephydridae Ephydra
    ['50830601', '50830600'], // Diptera Ephydridae Ephydra macellaria
    ['50830602', '50830600'], // Diptera Ephydridae Ephydra riparia
    ['50830700', '50830000'], // Diptera Ephydridae Setacera
    ['50830701', '50830700'], // Diptera Ephydridae Setacera aurata
    ['50830702', '50830700'], // Diptera Ephydridae Setacera micans
    ['50830703', '50830700'], // Diptera Ephydridae Setacera trina
    ['50830800', '50830000'], // Diptera Ephydridae Scatella
    ['50830801', '50830800'], // Diptera Ephydridae Scatella paludum
    ['50830802', '50830800'], // Diptera Ephydridae Scatella stagnalis
    ['50830900', '50830000'], // Diptera Ephydridae Coenia
    ['50830901', '50830900'], // Diptera Ephydridae Coenia curvicauda
    ['50830902', '50830900'], // Diptera Ephydridae Coenia palustris
    ['50831000', '50830000'], // Diptera Ephydridae Paracoenia
    ['50831001', '50831000'], // Diptera Ephydridae Paracoenia fumosa
    ['50831200', '50830000'], // Diptera Ephydridae Parydra
    ['50831210', '50831200'], // Diptera Ephydridae Parydra (Chaetoapnaea)
    ['50831211', '50831200'], // Diptera Ephydridae Parydra (Chaetoapnaea) pusilla
    ['50831300', '50830000'], // Diptera Ephydridae Pelina
    ['50831301', '50831300'], // Diptera Ephydridae Pelina aenescens
    ['50840000', '50000000'], // Diptera Scathophagidae
    ['50840100', '50840000'], // Diptera Scathophagidae Acanthocnema
    ['50840110', '50840100'], // Diptera Scathophagidae Acanthocnema (Acanthocnema)
    ['50840112', '50840100'], // Diptera Scathophagidae Acanthocnema (Acanthocnema) nigrimana
    ['50840120', '50840100'], // Diptera Scathophagidae Acanthocnema (Clinoceroides)
    ['50840121', '50840100'], // Diptera Scathophagidae Acanthocnema (Clinoceroides) glaucescens
    ['50840200', '50840000'], // Diptera Scathophagidae Spaziphora
    ['50840201', '50840200'], // Diptera Scathophagidae Spaziphora hydromyzina
    ['50840300', '50840000'], // Diptera Scathophagidae Hydromyza
    ['50840301', '50840300'], // Diptera Scathophagidae Hydromyza livens
    ['50840400', '50840000'], // Diptera Scathophagidae Chaetosa
    ['50840401', '50840400'], // Diptera Scathophagidae Chaetosa punctipes
    ['50840500', '50840000'], // Diptera Scathophagidae Conisternum
    ['50840501', '50840500'], // Diptera Scathophagidae Conisternum obscurum
    ['50840600', '50840000'], // Diptera Scathophagidae Microprosopa
    ['50840601', '50840600'], // Diptera Scathophagidae Microprosopa pallidicauda
    ['50840700', '50840000'], // Diptera Scathophagidae Pogonota
    ['50840701', '50840700'], // Diptera Scathophagidae Pogonota barbata
    ['50840800', '50840000'], // Diptera Scathophagidae Trichopalpus
    ['50840801', '50840800'], // Diptera Scathophagidae Trichopalpus fraternus
    ['50850000', '50000000'], // Diptera Muscidae
    ['50850100', '50850000'], // Diptera Muscidae Phaonia
    ['50850101', '50850100'], // Diptera Muscidae Phaonia exoleta
    ['50850102', '50850100'], // Diptera Muscidae Phaonia longicornis
    ['50850200', '50850000'], // Diptera Muscidae Limnophora
    ['50850212', '50850200'], // Diptera Muscidae Limnophora riparia
    ['50850500', '50850000'], // Diptera Muscidae Lispe
    ['50850501', '50850500'], // Diptera Muscidae Lispe caesia
    ['50850502', '50850500'], // Diptera Muscidae Lispe consanguinea
    ['50850507', '50850500'], // Diptera Muscidae Lispe pygmaea
    ['50850509', '50850500'], // Diptera Muscidae Lispe tentaculata
    ['50850511', '50850500'], // Diptera Muscidae Lispe uliginosa
    ['50850Z00', '50850000'], // Diptera Muscidae Phaonia
    ['508X0000', '50000000'], // Diptera Anthomyiidae
    ['508Z0000', '50000000'], // Diptera Lonchopteridae
])
/*
// Candidates for change
////////////////////////

// Candidates for family
// Porifera Demospongea
	.set('02110000',	'02100000')	// Porifera Spongillidae
// Coelenterata Hydroida
	.set('03110000',	'03100000')	// Coelenterata Hydridae
	.set('03120000',	'03100000')	// Coelenterata Protohydridae
	.set('03130000',	'03100000')	// Coelenterata Clavidae
// Coelenterata Trachylina
	.set('03210000',	'03200000')	// Coelenterata Olindiidae
// Microturbellaria Catenulida
	.set('04110000',	'04100000')	// Microturbellaria Catenulidae
	.set('04120000',	'04100000')	// Microturbellaria Stenostomidae
// Microturbellaria Macrostomida
	.set('04210000',	'04200000')	// Microturbellaria Microstomidae
	.set('04220000',	'04200000')	// Microturbellaria Macrostomidae
// Microturbellaria Neorhabdocoela
	.set('04310000',	'04300000')	// Microturbellaria Dalyelliidae
	.set('04320000',	'04300000')	// Microturbellaria Typhloplanidae
	.set('04330000',	'04300000')	// Microturbellaria Polycystididae
// Microturbellaria Lecithoepitheliata
	.set('04410000',	'04400000')	// Microturbellaria Prorhynchidae
// Microturbellaria Prolecithophora
	.set('04510000',	'04500000')	// Microturbellaria Plagiostomidae
// Microturbellaria Seriata
	.set('04610000',	'04600000')	// Microturbellaria Bothrioplanidae
	.set('04620000',	'04600000')	// Microturbellaria Otomesostomidae
// Tricladida Paludicola
	.set('05110000',	'05100000')	// Tricladida Planariidae
	.set('05120000',	'05100000')	// Tricladida Dugesiidae
	.set('05130000',	'05100000')	// Tricladida Dendrocoelidae
	.set('051Z0000',	'05100000')	// Tricladida Planariidae (including Dugesiidae)
// Nemertea Hoplonemertea
	.set('08110000',	'08100000')	// Nemertea Tetrastemmatidae
// Nematomorpha Gordioidea
	.set('09110000',	'09100000')	// Nematomorpha Gordiidae
	.set('09120000',	'09100000')	// Nematomorpha Chordodidae
// Nematoda Tylenchida
	.set('10110000',	'10100000')	// Nematoda Tylenchidae
	.set('10120000',	'10100000')	// Nematoda Aphelenchoididae
// Nematoda Rhabditida
	.set('10210000',	'10200000')	// Nematoda Diplogasteridae
	.set('10220000',	'10200000')	// Nematoda Panagrolaimidae
	.set('10230000',	'10200000')	// Nematoda Cephalobidae
// Nematoda Teratocephalida
	.set('10310000',	'10300000')	// Nematoda Teratocephalidae
// Nematoda Araeolaimida
	.set('10410000',	'10400000')	// Nematoda Plectidae
	.set('10420000',	'10400000')	// Nematoda Camacolaimidae
// Nematoda Monhysterida
	.set('10510000',	'10500000')	// Nematoda Monhysteridae
// Nematoda Chromadorida
	.set('10610000',	'10600000')	// Nematoda Chromadoridae
	.set('10620000',	'10600000')	// Nematoda Cyatholaimidae
// Nematoda Enoplida
	.set('10710000',	'10700000')	// Nematoda Tripylidae
	.set('10720000',	'10700000')	// Nematoda Ironidae
	.set('10730000',	'10700000')	// Nematoda Alaimidae
// Nematoda Dorylaimida
	.set('10810000',	'10800000')	// Nematoda Dorylaimidae
	.set('10820000',	'10800000')	// Nematoda Belondiridae
	.set('10830000',	'10800000')	// Nematoda Leptonchidae
	.set('10840000',	'10800000')	// Nematoda Mononchidae
// Gastrotricha Chaetonotoidea
	.set('11110000',	'11100000')	// Gastrotricha Chaetonotidae
	.set('11120000',	'11100000')	// Gastrotricha Dichaeturidae
	.set('11130000',	'11100000')	// Gastrotricha Neogosseidae
	.set('11140000',	'11100000')	// Gastrotricha Dasyditidae
// Rotifera Bdelloidea
	.set('12110000',	'12100000')	// Rotifera Habrotrochidae
	.set('12120000',	'12100000')	// Rotifera Adinetidae
	.set('12130000',	'12100000')	// Rotifera Philodinidae
	.set('12140000',	'12100000')	// Rotifera Philodinavidae
// Rotifera Flosculariacea
	.set('12210000',	'12200000')	// Rotifera Testudinellidae
	.set('12220000',	'12200000')	// Rotifera Flosculariidae
	.set('12230000',	'12200000')	// Rotifera Conochilidae
	.set('12240000',	'12200000')	// Rotifera Hexarthridae
	.set('12250000',	'12200000')	// Rotifera Filiniidae
// Rotifera Collothecacea
	.set('12310000',	'12300000')	// Rotifera Collothecidae
	.set('12320000',	'12300000')	// Rotifera Atrochidae
// Rotifera Ploimida
	.set('12410000',	'12400000')	// Rotifera Epiphanidae
	.set('12420000',	'12400000')	// Rotifera Brachionidae
	.set('12430000',	'12400000')	// Rotifera Euchlanidae
	.set('12440000',	'12400000')	// Rotifera Mytilinidae
	.set('12450000',	'12400000')	// Rotifera Trichotridae
	.set('12460000',	'12400000')	// Rotifera Colurellidae
	.set('12470000',	'12400000')	// Rotifera Lecanidae
	.set('12480000',	'12400000')	// Rotifera Proalidae
	.set('124A0000',	'12400000')	// Rotifera Lindiidae
	.set('124B0000',	'12400000')	// Rotifera Notommatidae
	.set('124C0000',	'12400000')	// Rotifera Trichocercidae
	.set('124D0000',	'12400000')	// Rotifera Gastropodidae
	.set('124F0000',	'12400000')	// Rotifera Synchaetidae
	.set('124G0000',	'12400000')	// Rotifera Asplanchnidae
	.set('124H0000',	'12400000')	// Rotifera Dicranophoridae
	.set('124J0000',	'12400000')	// Rotifera Microcodinidae
// Ectoprocta Phylactolaemata
	.set('14110000',	'14100000')	// Ectoprocta Fredericellidae
	.set('14120000',	'14100000')	// Ectoprocta Plumatellidae
	.set('14130000',	'14100000')	// Ectoprocta Lophopodidae
	.set('14140000',	'14100000')	// Ectoprocta Cristatellidae
// Ectoprocta Gymnolaemata
	.set('14210000',	'14200000')	// Ectoprocta Paludicellidae
	.set('14220000',	'14200000')	// Ectoprocta Noellidae
// Gastropoda Prosobranchia
	.set('16110000',	'16100000')	// Gastropoda Neritidae
	.set('16120000',	'16100000')	// Gastropoda Viviparidae
	.set('16130000',	'16100000')	// Gastropoda Valvatidae
	.set('16140000',	'16100000')	// Gastropoda Hydrobiidae
	.set('16160000',	'16100000')	// Gastropoda Bithyniidae
	.set('16170000',	'16100000')	// Gastropoda Assimineidae
	.set('161Z0000',	'16100000')	// Gastropoda Hydrobiidae (including Bithyniidae)
// Gastropoda Aquatic pulmonata
	.set('16210000',	'16200000')	// Gastropoda Physidae
	.set('16220000',	'16200000')	// Gastropoda Lymnaeidae
	.set('16230000',	'16200000')	// Gastropoda Planorbidae
	.set('16250000',	'16200000')	// Gastropoda Acroloxidae
	.set('162X0000',	'16200000')	// Gastropoda Planorbidae (excluding Ancylus group)
	.set('162Y0000',	'16200000')	// Gastropoda Ancylus group
	.set('162Z0000',	'16200000')	// Gastropoda Ancylus group (including Acroloxidae)
// Gastropoda Semi-aquatic pulmonata
	.set('16310000',	'16300000')	// Gastropoda Ellobiidae
	.set('16320000',	'16300000')	// Gastropoda Succineidae
	.set('16330000',	'16300000')	// Gastropoda Vertiginidae
	.set('16340000',	'16300000')	// Gastropoda Pupillidae
	.set('16350000',	'16300000')	// Gastropoda Zonitidae
	.set('16360000',	'16300000')	// Gastropoda Euconulidae
	.set('16370000',	'16300000')	// Gastropoda Clausiliidae
	.set('16380000',	'16300000')	// Gastropoda Helicidae
	.set('16390000',	'16300000')	// Gastropoda Carychiidae
// Bivalvia Heterodonta
	.set('17110000',	'17100000')	// Bivalvia Margaritiferidae
	.set('17120000',	'17100000')	// Bivalvia Unionidae
	.set('17130000',	'17100000')	// Bivalvia Sphaeriidae
	.set('17140000',	'17100000')	// Bivalvia Dreissenidae
// Bivalvia Pelecypodia
	.set('17210000',	'17200000')	// Bivalvia Corbiculidae
// Aphanoneura Aeolosomatida
	.set('19110000',	'19100000')	// Aphanoneura Aeolosomatidae
// Oligochaeta Lumbriculida
	.set('20110000',	'20100000')	// Oligochaeta Lumbriculidae
// Oligochaeta Haplotaxina
	.set('20210000',	'20200000')	// Oligochaeta Haplotaxidae
// Oligochaeta Tubificina
	.set('20310000',	'20300000')	// Oligochaeta Enchytraeidae
	.set('20320000',	'20300000')	// Oligochaeta Dorydrilidae
	.set('20330000',	'20300000')	// Oligochaeta Naididae
	.set('20340000',	'20300000')	// Oligochaeta Tubificidae
	.set('20350000',	'20300000')	// Oligochaeta Phreodrilidae
	.set('20360000',	'20300000')	// Oligochaeta Propappidae
	.set('203Z0000',	'20300000')	// Oligochaeta Enchytraeidae (including Propappidae)
// Oligochaeta Lumbricina
	.set('20410000',	'20400000')	// Oligochaeta Glossoscolecidae
	.set('20420000',	'20400000')	// Oligochaeta Lumbricidae
// Hirudinea Rhynchobdellida
	.set('22110000',	'22100000')	// Hirudinea Piscicolidae
	.set('22120000',	'22100000')	// Hirudinea Glossiphoniidae
// Hirudinea Arhynchobdellida
	.set('22210000',	'22200000')	// Hirudinea Hirudinidae
	.set('22220000',	'22200000')	// Hirudinea Haemopidae
	.set('22230000',	'22200000')	// Hirudinea Erpobdellidae
	.set('222X0000',	'22200000')	// Hirudinea Hirudinidae (including Haemopidae)
// Tardigrada Heterotardigrada
	.set('23110000',	'23100000')	// Tardigrada Echiniscidae
// Tardigrada Eutardigrada
	.set('23210000',	'23200000')	// Tardigrada Macrobiotidae
	.set('23220000',	'23200000')	// Tardigrada Milnesiidae
// Hydracarina Hydrovolzioidea
	.set('24110000',	'24100000')	// Hydracarina Hydrovolziidae
// Hydracarina Hydrachnoidea
	.set('24210000',	'24200000')	// Hydracarina Hydrachnidae
// Hydracarina Eylaoidea
	.set('24310000',	'24300000')	// Hydracarina Limnocharidae
	.set('24320000',	'24300000')	// Hydracarina Eylaidae
	.set('24330000',	'24300000')	// Hydracarina Piersigiidae
// Hydracarina Hydryphantoidea
	.set('24410000',	'24400000')	// Hydracarina Hydryphantidae
	.set('24420000',	'24400000')	// Hydracarina Hydrodromidae
// Hydracarina Lebertioidea
	.set('24510000',	'24500000')	// Hydracarina Sperchontidae
	.set('24520000',	'24500000')	// Hydracarina Teutoniidae
	.set('24530000',	'24500000')	// Hydracarina Anisitsiellidae
	.set('24540000',	'24500000')	// Hydracarina Lebertiidae
	.set('24550000',	'24500000')	// Hydracarina Oxidae
	.set('24560000',	'24500000')	// Hydracarina Torrenticolidae
// Hydracarina Hygrobatoidea
	.set('24610000',	'24600000')	// Hydracarina Limnesiidae
	.set('24620000',	'24600000')	// Hydracarina Hygrobatidae
	.set('24630000',	'24600000')	// Hydracarina Unionicolidae
	.set('24640000',	'24600000')	// Hydracarina Feltriidae
	.set('24650000',	'24600000')	// Hydracarina Pionidae
	.set('24660000',	'24600000')	// Hydracarina Aturidae
// Hydracarina Arrenuroidea
	.set('24710000',	'24700000')	// Hydracarina Mideidae
	.set('24720000',	'24700000')	// Hydracarina Momoniidae
	.set('24730000',	'24700000')	// Hydracarina Mideopsidae
	.set('24740000',	'24700000')	// Hydracarina Neoacaridae
	.set('24750000',	'24700000')	// Hydracarina Athienemanniidae
	.set('24760000',	'24700000')	// Hydracarina Hungarohydracaridae
	.set('24770000',	'24700000')	// Hydracarina Arrenuridae
// Hydracarina Halacaroidea
	.set('24810000',	'24800000')	// Hydracarina Halacaridae
// Oribatei Liacaroidea
	.set('25110000',	'25100000')	// Oribatei Astegistidae
// Oribatei Hydrozetoidea
	.set('25210000',	'25200000')	// Oribatei Hydrozetidae
// Oribatei Ceratozetoidea
	.set('25310000',	'25300000')	// Oribatei Ceratozetidae
// Cladocera Haplopoda
	.set('29210000',	'29200000')	// Cladocera Leptodoridae
// Cladocera Ctenopoda
	.set('29310000',	'29300000')	// Cladocera Sididae
	.set('29320000',	'29300000')	// Cladocera Holopedidae
// Cladocera Anomopoda
	.set('29410000',	'29400000')	// Cladocera Daphniidae
	.set('29420000',	'29400000')	// Cladocera Moinidae
	.set('29430000',	'29400000')	// Cladocera Bosminidae
	.set('29440000',	'29400000')	// Cladocera Ilyocryptidae
	.set('29450000',	'29400000')	// Cladocera Eurycercidae
	.set('29460000',	'29400000')	// Cladocera Chydoridae
	.set('29470000',	'29400000')	// Cladocera Ophryoxidae
	.set('29480000',	'29400000')	// Cladocera Acantholeberidae
	.set('29490000',	'29400000')	// Cladocera Macrothricidae
// Cladocera Onychopoda
	.set('29510000',	'29500000')	// Cladocera Polyphemidae
	.set('29520000',	'29500000')	// Cladocera Cercopagidae
// Ostracoda Cytheracea
	.set('30110000',	'30100000')	// Ostracoda Limnocytheridae
	.set('30120000',	'30100000')	// Ostracoda Cytherideidae
// Ostracoda Darwinulacea
	.set('30210000',	'30200000')	// Ostracoda Darwinulidae
// Ostracoda Cypridacea
	.set('30310000',	'30300000')	// Ostracoda Ilyocyprididae
	.set('30320000',	'30300000')	// Ostracoda Candonidae
	.set('30330000',	'30300000')	// Ostracoda Notodromatidae
	.set('30340000',	'30300000')	// Ostracoda Cyprididae
	.set('30350000',	'30300000')	// Ostracoda Cypridopsidae
// Copepoda Calanoida
	.set('31110000',	'31100000')	// Copepoda Centropagidae
	.set('31120000',	'31100000')	// Copepoda Acartiidae
	.set('31130000',	'31100000')	// Copepoda Diaptomidae
	.set('31140000',	'31100000')	// Copepoda Temoridae
// Copepoda Cyclopoida
	.set('31210000',	'31200000')	// Copepoda Cyclopinidae
	.set('31220000',	'31200000')	// Copepoda Cyclopidae
	.set('31230000',	'31200000')	// Copepoda Lernaeidae
// Copepoda Harpacticoida
	.set('31310000',	'31300000')	// Copepoda Phyllognathopodidae
	.set('31320000',	'31300000')	// Copepoda D'arcythompsoniidae
	.set('31330000',	'31300000')	// Copepoda Ameiridae
	.set('31340000',	'31300000')	// Copepoda Canthocamptidae
	.set('31350000',	'31300000')	// Copepoda Parastenocarididae
	.set('31360000',	'31300000')	// Copepoda Laophontidae
	.set('31370000',	'31300000')	// Copepoda Cletodidae
	.set('31380000',	'31300000')	// Copepoda Tachidiidae
// Copepoda Poecilostomatoida
	.set('31410000',	'31400000')	// Copepoda Ergasilidae
// Copepoda Siphonostomatoida
	.set('31510000',	'31500000')	// Copepoda Caligidae
	.set('31520000',	'31500000')	// Copepoda Dichelesthiidae
	.set('31530000',	'31500000')	// Copepoda Lernaeopodidae
// Decapoda Natantia
	.set('34110000',	'34100000')	// Decapoda Palaemonidae
	.set('34120000',	'34100000')	// Decapoda Crangonidae
// Decapoda Brachyura
	.set('34210000',	'34200000')	// Decapoda Grapsidae
// Decapoda Astacura
	.set('34310000',	'34300000')	// Decapoda Astacidae
	.set('34320000',	'34300000')	// Decapoda Cambaridae
// Mysidacea Mysida
	.set('35110000',	'35100000')	// Mysidacea Mysidae
// Isopoda Aselloidea
	.set('36110000',	'36100000')	// Isopoda Asellidae
// Isopoda Paraselloidea
	.set('36210000',	'36200000')	// Isopoda Janiridae
	.set('36220000',	'36200000')	// Isopoda Sphaeromatidae
// Amphipoda Gammaroidea
	.set('37110000',	'37100000')	// Amphipoda Corophiidae
	.set('37120000',	'37100000')	// Amphipoda Talitridae
	.set('37130000',	'37100000')	// Amphipoda Crangonyctidae
	.set('37140000',	'37100000')	// Amphipoda Gammaridae
	.set('37150000',	'37100000')	// Amphipoda Niphargidae
	.set('371Z0000',	'37100000')	// Amphipoda Gammaridae (including Crangonyctidae and Niphargidae)
// Chilopoda Geophilomorpha
	.set('38110000',	'38100000')	// Chilopoda Geophilidae
// Collembola Entomobryomorpha
	.set('39130000',	'39100000')	// Collembola Isotomidae
// Collembola Symphypleona
	.set('39210000',	'39200000')	// Collembola Sminthurididae
	.set('39230000',	'39200000')	// Collembola Bourletiellidae
// Collembola Poduromorpha
	.set('39310000',	'39300000')	// Collembola Hypogastruridae
	.set('39320000',	'39300000')	// Collembola Neanuridae
	.set('39330000',	'39300000')	// Collembola Poduridae
// Ephemeroptera Baetoidea
	.set('40110000',	'40100000')	// Ephemeroptera Siphlonuridae
	.set('40120000',	'40100000')	// Ephemeroptera Baetidae
	.set('40130000',	'40100000')	// Ephemeroptera Heptageniidae
	.set('40140000',	'40100000')	// Ephemeroptera Ameletidae
	.set('40150000',	'40100000')	// Ephemeroptera Arthropleidae
	.set('401Y0000',	'40100000')	// Ephemeroptera Heptageniidae (including Arthropleidae)
	.set('401Z0000',	'40100000')	// Ephemeroptera Siphlonuridae (including Ameletidae)
// Ephemeroptera Leptophlebioidea
	.set('40210000',	'40200000')	// Ephemeroptera Leptophlebiidae
// Ephemeroptera Ephemeroidea
	.set('40310000',	'40300000')	// Ephemeroptera Potamanthidae
	.set('40320000',	'40300000')	// Ephemeroptera Ephemeridae
// Ephemeroptera Ephemerelloidea
	.set('40410000',	'40400000')	// Ephemeroptera Ephemerellidae
// Ephemeroptera Caenoidea
	.set('40510000',	'40500000')	// Ephemeroptera Caenidae
// Plecoptera Filipalpia
	.set('41110000',	'41100000')	// Plecoptera Taeniopterygidae
	.set('41120000',	'41100000')	// Plecoptera Nemouridae
	.set('41130000',	'41100000')	// Plecoptera Leuctridae
	.set('41140000',	'41100000')	// Plecoptera Capniidae
// Plecoptera Setipalpia
	.set('41210000',	'41200000')	// Plecoptera Perlodidae
	.set('41220000',	'41200000')	// Plecoptera Perlidae
	.set('41230000',	'41200000')	// Plecoptera Chloroperlidae
// Odonata Zygoptera
	.set('42110000',	'42100000')	// Odonata Platycnemididae
	.set('42120000',	'42100000')	// Odonata Coenagrionidae
	.set('42130000',	'42100000')	// Odonata Lestidae
	.set('42140000',	'42100000')	// Odonata Calopterygidae
// Odonata Anisoptera
	.set('42210000',	'42200000')	// Odonata Gomphidae
	.set('42220000',	'42200000')	// Odonata Cordulegastridae
	.set('42230000',	'42200000')	// Odonata Aeshnidae
	.set('42240000',	'42200000')	// Odonata Corduliidae
	.set('42250000',	'42200000')	// Odonata Libellulidae
// Hemiptera Hebroidea
	.set('43110000',	'43100000')	// Hemiptera Mesoveliidae
	.set('43120000',	'43100000')	// Hemiptera Hebridae
// Hemiptera Gerroidea
	.set('43210000',	'43200000')	// Hemiptera Hydrometridae
	.set('43220000',	'43200000')	// Hemiptera Veliidae
	.set('43230000',	'43200000')	// Hemiptera Gerridae
// Hemiptera Nepoidea
	.set('43310000',	'43300000')	// Hemiptera Nepidae
// Hemiptera Naucoroidea
	.set('43410000',	'43400000')	// Hemiptera Naucoridae
	.set('43420000',	'43400000')	// Hemiptera Aphelocheiridae
// Hemiptera Notonectoidea
	.set('43510000',	'43500000')	// Hemiptera Notonectidae
	.set('43520000',	'43500000')	// Hemiptera Pleidae
// Hemiptera Corixoidea
	.set('43610000',	'43600000')	// Hemiptera Corixidae
// Hymenoptera Ichneumonoidea
	.set('44110000',	'44100000')	// Hymenoptera Ichneumonidae
	.set('44120000',	'44100000')	// Hymenoptera Braconidae
// Hymenoptera Chalcidoidea
	.set('44210000',	'44200000')	// Hymenoptera Chalcididae
	.set('44220000',	'44200000')	// Hymenoptera Pteromalidae
	.set('44230000',	'44200000')	// Hymenoptera Eulophidae
	.set('44240000',	'44200000')	// Hymenoptera Mymaridae
	.set('44250000',	'44200000')	// Hymenoptera Trichogrammatidae
// Hymenoptera Proctotrupoidea
	.set('44310000',	'44300000')	// Hymenoptera Ceraphronidae
	.set('44320000',	'44300000')	// Hymenoptera Diapriidae
	.set('44330000',	'44300000')	// Hymenoptera Scelionidae
// Hymenoptera Cynipoidea
	.set('44410000',	'44400000')	// Hymenoptera Figitidae
// Coleoptera Caraboidea
	.set('45110000',	'45100000')	// Coleoptera Haliplidae
	.set('45120000',	'45100000')	// Coleoptera Paelobiidae
	.set('45130000',	'45100000')	// Coleoptera Noteridae
	.set('45140000',	'45100000')	// Coleoptera Dytiscidae
	.set('45150000',	'45100000')	// Coleoptera Gyrinidae
	.set('451Z0000',	'45100000')	// Coleoptera Dytiscidae (including Noteridae)
// Coleoptera Sphaeriusoidea
	.set('45210000',	'45200000')	// Coleoptera Sphaeriusidae
// Coleoptera Hydrophiloidea
	.set('45330000',	'45300000')	// Coleoptera Helophoridae
	.set('45340000',	'45300000')	// Coleoptera Georissidae
	.set('45350000',	'45300000')	// Coleoptera Hydrophilidae
	.set('45360000',	'45300000')	// Coleoptera Hydrochidae
	.set('45370000',	'45300000')	// Coleoptera Spercheidae
	.set('453Y0000',	'45300000')	// Coleoptera Hydrophilidae (including Helophoridae, Georissidae and Hydrochidae)
	.set('453Z0000',	'45300000')	// Coleoptera Hydrophilidae (including Hydraenidae, Helophoridae, Georissidae and Hydrochidae)
// Coleoptera Staphylinoidea
	.set('45410000',	'45400000')	// Coleoptera Hydraenidae
// Coleoptera Scirtoidea
	.set('45510000',	'45500000')	// Coleoptera Scirtidae
// Coleoptera Byrrhoidea
	.set('45610000',	'45600000')	// Coleoptera Psephenidae
	.set('45620000',	'45600000')	// Coleoptera Dryopidae
	.set('45630000',	'45600000')	// Coleoptera Elmidae
	.set('45640000',	'45600000')	// Coleoptera Limnichidae
	.set('45650000',	'45600000')	// Coleoptera Heteroceridae
// Coleoptera Chrysomeloidea
	.set('45710000',	'45700000')	// Coleoptera Chrysomelidae
// Coleoptera Curculionoidea
	.set('45810000',	'45800000')	// Coleoptera Curculionidae
	.set('45820000',	'45800000')	// Coleoptera Apionidae
	.set('45830000',	'45800000')	// Coleoptera Erirhinidae
// Megaloptera Sialoidea
	.set('46110000',	'46100000')	// Megaloptera Sialidae
// Neuroptera Planipennia
	.set('47110000',	'47100000')	// Neuroptera Osmylidae
	.set('47120000',	'47100000')	// Neuroptera Sisyridae
// Trichoptera Rhyacophiloidea
	.set('48110000',	'48100000')	// Trichoptera Rhyacophilidae
	.set('48120000',	'48100000')	// Trichoptera Glossosomatidae
	.set('48130000',	'48100000')	// Trichoptera Hydroptilidae
	.set('481Z0000',	'48100000')	// Trichoptera Rhyacophilidae (including Glossosomatidae)
// Trichoptera Hydropsychoidea
	.set('48210000',	'48200000')	// Trichoptera Philopotamidae
	.set('48220000',	'48200000')	// Trichoptera Psychomyiidae
	.set('48230000',	'48200000')	// Trichoptera Ecnomidae
	.set('48240000',	'48200000')	// Trichoptera Polycentropodidae
	.set('48250000',	'48200000')	// Trichoptera Hydropsychidae
	.set('482Z0000',	'48200000')	// Trichoptera Psychomyiidae (including Ecnomidae)
// Trichoptera Limnephiloidea
	.set('48310000',	'48300000')	// Trichoptera Phryganeidae
	.set('48320000',	'48300000')	// Trichoptera Brachycentridae
	.set('48330000',	'48300000')	// Trichoptera Lepidostomatidae
	.set('48340000',	'48300000')	// Trichoptera Limnephilidae
	.set('48350000',	'48300000')	// Trichoptera Goeridae
	.set('48360000',	'48300000')	// Trichoptera Beraeidae
	.set('48370000',	'48300000')	// Trichoptera Sericostomatidae
	.set('48380000',	'48300000')	// Trichoptera Odontoceridae
	.set('48390000',	'48300000')	// Trichoptera Molannidae
	.set('483A0000',	'48300000')	// Trichoptera Leptoceridae
	.set('483B0000',	'48300000')	// Trichoptera Apataniidae
	.set('483Z0000',	'48300000')	// Trichoptera Limnephilidae (including Apataniidae)
// Lepidoptera Pyraloidea
	.set('49110000',	'49100000')	// Lepidoptera Pyralidae
// Diptera Tipuloidea
	.set('50110000',	'50100000')	// Diptera Tipulidae
	.set('50120000',	'50100000')	// Diptera Cylindrotomidae
	.set('50130000',	'50100000')	// Diptera Limoniidae
	.set('50140000',	'50100000')	// Diptera Pediciidae
	.set('501Y0000',	'50100000')	// Diptera Limoniidae (including Dicranota)
	.set('501Z0000',	'50100000')	// Diptera Tipulidae (including Limoniidae, Cylindrotomidae and Pediciidae)
// Diptera Psychodoidea
	.set('50210000',	'50200000')	// Diptera Psychodidae
	.set('50220000',	'50200000')	// Diptera Ptychopteridae
// Diptera Culicoidea (Excluding chironomidae)
	.set('50310000',	'50300000')	// Diptera Dixidae
	.set('50320000',	'50300000')	// Diptera Chaoboridae
	.set('50330000',	'50300000')	// Diptera Culicidae
	.set('50340000',	'50300000')	// Diptera Thaumaleidae
	.set('50350000',	'50300000')	// Diptera Ceratopogonidae
	.set('50360000',	'50300000')	// Diptera Simuliidae
// Diptera Chironomidae
	.set('50410000',	'50400000')	// Diptera Buchonomyiinae
	.set('50420000',	'50400000')	// Diptera Tanypodinae
	.set('50430000',	'50400000')	// Diptera Podonominae
	.set('50440000',	'50400000')	// Diptera Diamesinae
	.set('50450000',	'50400000')	// Diptera Prodiamesinae
	.set('50460000',	'50400000')	// Diptera Orthocladiinae
	.set('50470000',	'50400000')	// Diptera Chironominae (Chironomini)
	.set('50480000',	'50400000')	// Diptera Chironominae (Pseudochironomini)
	.set('50490000',	'50400000')	// Diptera Chironominae (Tanytarsini)
	.set('504A0000',	'50400000')	// Diptera Telmatogetoniinae
// Diptera Bibionoidea
	.set('50510000',	'50500000')	// Diptera Bibionidae
// Diptera Tabanoidea
	.set('50610000',	'50600000')	// Diptera Stratiomyidae
	.set('50620000',	'50600000')	// Diptera Rhagionidae
	.set('50630000',	'50600000')	// Diptera Tabanidae
	.set('50640000',	'50600000')	// Diptera Athericidae
	.set('506Z0000',	'50600000')	// Diptera Rhagionidae (including Athericidae)
// Diptera Empidoidea
	.set('50710000',	'50700000')	// Diptera Empididae
	.set('50720000',	'50700000')	// Diptera Dolichopodidae
	.set('50730000',	'50700000')	// Diptera Hybotidae
	.set('507Z0000',	'50700000')	// Diptera Empididae (including Stilpon sp.)
// Diptera Cyclorrhapha
	.set('50810000',	'50800000')	// Diptera Syrphidae
	.set('50820000',	'50800000')	// Diptera Sciomyzidae
	.set('50830000',	'50800000')	// Diptera Ephydridae
	.set('50840000',	'50800000')	// Diptera Scathophagidae
	.set('50850000',	'50800000')	// Diptera Muscidae
	.set('508X0000',	'50800000')	// Diptera Anthomyiidae
	.set('508Z0000',	'50800000')	// Diptera Lonchopteridae

// Candidates for species
// Rotifera Colurellidae Lepadella (Lepadella)
	.set('12460411',	'12460410')	// Rotifera Colurellidae Lepadella (Lepadella) acuminata
	.set('12460412',	'12460410')	// Rotifera Colurellidae Lepadella (Lepadella) cristata
	.set('12460413',	'12460410')	// Rotifera Colurellidae Lepadella (Lepadella) minuta
	.set('12460414',	'12460410')	// Rotifera Colurellidae Lepadella (Lepadella) ovalis
	.set('12460415',	'12460410')	// Rotifera Colurellidae Lepadella (Lepadella) patella
	.set('12460416',	'12460410')	// Rotifera Colurellidae Lepadella (Lepadella) pterygoides
	.set('12460417',	'12460410')	// Rotifera Colurellidae Lepadella (Lepadella) rhomboides
	.set('12460418',	'12460410')	// Rotifera Colurellidae Lepadella (Lepadella) triptera
// Rotifera Colurellidae Lepadella (Heterolepadella)
	.set('12460431',	'12460430')	// Rotifera Colurellidae Lepadella (Heterolepadella) ehrenbergi
// Rotifera Lecanidae Lecane (Lecane)
	.set('12470111',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) aquila
	.set('12470112',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) brachydactyla
	.set('12470113',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) clara
	.set('12470114',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) flexilis
	.set('12470115',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) hornemanni
	.set('12470116',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) inermis
	.set('12470117',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) levistyla
	.set('12470118',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) ligona
	.set('12470119',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) ludwigi
	.set('1247011A',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) luna
	.set('1247011B',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) pumila
	.set('1247011C',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) signifera
	.set('1247011D',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) stichaea
	.set('1247011E',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) stokesi
	.set('1247011F',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) sulcata
	.set('1247011G',	'12470110')	// Rotifera Lecanidae Lecane (Lecane) ungulata
// Rotifera Lecanidae Lecane (Hemimonostyla)
	.set('12470141',	'12470140')	// Rotifera Lecanidae Lecane (Hemimonostyla) agilis
// Rotifera Lecanidae Lecane (Monostyla)
	.set('12470151',	'12470150')	// Rotifera Lecanidae Lecane (Monostyla) acus
	.set('12470152',	'12470150')	// Rotifera Lecanidae Lecane (Monostyla) arcuata
	.set('12470153',	'12470150')	// Rotifera Lecanidae Lecane (Monostyla) bifurca
	.set('12470154',	'12470150')	// Rotifera Lecanidae Lecane (Monostyla) bulla
	.set('12470155',	'12470150')	// Rotifera Lecanidae Lecane (Monostyla) closterocerca
	.set('12470156',	'12470150')	// Rotifera Lecanidae Lecane (Monostyla) cornuta
	.set('12470157',	'12470150')	// Rotifera Lecanidae Lecane (Monostyla) furcata
	.set('12470158',	'12470150')	// Rotifera Lecanidae Lecane (Monostyla) galeata
	.set('12470159',	'12470150')	// Rotifera Lecanidae Lecane (Monostyla) hamata
	.set('1247015A',	'12470150')	// Rotifera Lecanidae Lecane (Monostyla) lunaris
	.set('1247015B',	'12470150')	// Rotifera Lecanidae Lecane (Monostyla) quadridentata
	.set('1247015C',	'12470150')	// Rotifera Lecanidae Lecane (Monostyla) stenroosi
	.set('1247015D',	'12470150')	// Rotifera Lecanidae Lecane (Monostyla) subulata
// Rotifera Trichocercidae Trichocerca (Diurella)
	.set('124C0111',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) bidens
	.set('124C0112',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) birostris
	.set('124C0113',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) brachyura
	.set('124C0114',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) cavia
	.set('124C0115',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) collaris
	.set('124C0116',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) dixon-nuttalli
	.set('124C0117',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) inermis
	.set('124C0118',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) intermedia
	.set('124C011A',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) porcellus
	.set('124C011B',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) rousseleti
	.set('124C011C',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) similis
	.set('124C011D',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) sulcata
	.set('124C011E',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) tenuior
	.set('124C011F',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) tigris
	.set('124C011G',	'124C0110')	// Rotifera Trichocercidae Trichocerca (Diurella) weberi
// Rotifera Trichocercidae Trichocerca (Trichocerca)
	.set('124C0141',	'124C0140')	// Rotifera Trichocercidae Trichocerca (Trichocerca) bicristata
	.set('124C0142',	'124C0140')	// Rotifera Trichocercidae Trichocerca (Trichocerca) capucina
	.set('124C0143',	'124C0140')	// Rotifera Trichocercidae Trichocerca (Trichocerca) cylindrica
	.set('124C0144',	'124C0140')	// Rotifera Trichocercidae Trichocerca (Trichocerca) elongata
	.set('124C0145',	'124C0140')	// Rotifera Trichocercidae Trichocerca (Trichocerca) iernis
	.set('124C0146',	'124C0140')	// Rotifera Trichocercidae Trichocerca (Trichocerca) jenningsi
	.set('124C0147',	'124C0140')	// Rotifera Trichocercidae Trichocerca (Trichocerca) longiseta
	.set('124C0148',	'124C0140')	// Rotifera Trichocercidae Trichocerca (Trichocerca) lophoessa
	.set('124C0149',	'124C0140')	// Rotifera Trichocercidae Trichocerca (Trichocerca) macera
	.set('124C014A',	'124C0140')	// Rotifera Trichocercidae Trichocerca (Trichocerca) marina
	.set('124C014B',	'124C0140')	// Rotifera Trichocercidae Trichocerca (Trichocerca) pusilla
	.set('124C014C',	'124C0140')	// Rotifera Trichocercidae Trichocerca (Trichocerca) rattus
	.set('124C014D',	'124C0140')	// Rotifera Trichocercidae Trichocerca (Trichocerca) stylata
// Rotifera Synchaetidae Ploesoma (Bipalpus)
	.set('124F0311',	'124F0310')	// Rotifera Synchaetidae Ploesoma (Bipalpus) hudsoni
// Rotifera Synchaetidae Ploesoma (Ploesoma)
	.set('124F0321',	'124F0320')	// Rotifera Synchaetidae Ploesoma (Ploesoma) lenticulare
	.set('124F0322',	'124F0320')	// Rotifera Synchaetidae Ploesoma (Ploesoma) triacanthum
	.set('124F0323',	'124F0320')	// Rotifera Synchaetidae Ploesoma (Ploesoma) truncatum
// Rotifera Asplanchnidae Asplanchna (Asplanchna)
	.set('124G0311',	'124G0310')	// Rotifera Asplanchnidae Asplanchna (Asplanchna) herricki
	.set('124G0312',	'124G0310')	// Rotifera Asplanchnidae Asplanchna (Asplanchna) priodonta
// Rotifera Asplanchnidae Asplanchna (Asplanchnella)
	.set('124G0321',	'124G0320')	// Rotifera Asplanchnidae Asplanchna (Asplanchnella) brightwelli
	.set('124G0322',	'124G0320')	// Rotifera Asplanchnidae Asplanchna (Asplanchnella) girodi
	.set('124G0323',	'124G0320')	// Rotifera Asplanchnidae Asplanchna (Asplanchnella) intermedia
	.set('124G0324',	'124G0320')	// Rotifera Asplanchnidae Asplanchna (Asplanchnella) sieboldi
// Rotifera Dicranophoridae Encentrum (Encentrum)
	.set('124H0511',	'124H0510')	// Rotifera Dicranophoridae Encentrum (Encentrum) felis
	.set('124H0512',	'124H0510')	// Rotifera Dicranophoridae Encentrum (Encentrum) grande
	.set('124H0513',	'124H0510')	// Rotifera Dicranophoridae Encentrum (Encentrum) marinum
	.set('124H0514',	'124H0510')	// Rotifera Dicranophoridae Encentrum (Encentrum) mustela
	.set('124H0515',	'124H0510')	// Rotifera Dicranophoridae Encentrum (Encentrum) rousseleti
	.set('124H0516',	'124H0510')	// Rotifera Dicranophoridae Encentrum (Encentrum) voigti
// Rotifera Dicranophoridae Encentrum (Parencentrum)
	.set('124H0521',	'124H0520')	// Rotifera Dicranophoridae Encentrum (Parencentrum) plicatum
	.set('124H0522',	'124H0520')	// Rotifera Dicranophoridae Encentrum (Parencentrum) saundersiae
// Gastropoda Valvatidae Valvata (Valvata)
	.set('16130111',	'16130110')	// Gastropoda Valvatidae Valvata (Valvata) cristata
// Gastropoda Valvatidae Valvata (Tropidina)
	.set('16130121',	'16130120')	// Gastropoda Valvatidae Valvata (Tropidina) macrostoma
// Gastropoda Valvatidae Valvata (Cincinna)
	.set('16130131',	'16130130')	// Gastropoda Valvatidae Valvata (Cincinna) piscinalis
// Gastropoda Hydrobiidae Hydrobia (Hydrobia)
	.set('16140111',	'16140110')	// Gastropoda Hydrobiidae Hydrobia (Hydrobia) acuta
// Gastropoda Bithyniidae Bithynia (Bithynia)
	.set('16160111',	'16160110')	// Gastropoda Bithyniidae Bithynia (Bithynia) tentaculata
// Gastropoda Bithyniidae Bithynia (Codiella)
	.set('16160121',	'16160120')	// Gastropoda Bithyniidae Bithynia (Codiella) leachii
// Gastropoda Physidae Physella (Physella)
	.set('16210311',	'16210310')	// Gastropoda Physidae Physella (Physella) gyrina
// Gastropoda Physidae Physella (Costatella)
	.set('16210321',	'16210320')	// Gastropoda Physidae Physella (Costatella) acuta
// Gastropoda Planorbidae Planorbis (Planorbis)
	.set('16230111',	'16230110')	// Gastropoda Planorbidae Planorbis (Planorbis) carinatus
	.set('16230112',	'16230110')	// Gastropoda Planorbidae Planorbis (Planorbis) planorbis
// Gastropoda Planorbidae Anisus (Anisus)
	.set('16230211',	'16230210')	// Gastropoda Planorbidae Anisus (Anisus) leucostoma
	.set('16230212',	'16230210')	// Gastropoda Planorbidae Anisus (Anisus) spirorbis
// Gastropoda Planorbidae Anisus (Disculifer)
	.set('16230221',	'16230220')	// Gastropoda Planorbidae Anisus (Disculifer) vortex
	.set('16230222',	'16230220')	// Gastropoda Planorbidae Anisus (Disculifer) vorticulus
// Gastropoda Planorbidae Gyraulus (Gyraulus)
	.set('16230411',	'16230410')	// Gastropoda Planorbidae Gyraulus (Gyraulus) acronicus
	.set('16230412',	'16230410')	// Gastropoda Planorbidae Gyraulus (Gyraulus) albus
// Gastropoda Planorbidae Gyraulus (Torquis)
	.set('16230421',	'16230420')	// Gastropoda Planorbidae Gyraulus (Torquis) laevis
// Gastropoda Planorbidae Gyraulus (Armiger)
	.set('16230431',	'16230430')	// Gastropoda Planorbidae Gyraulus (Armiger) crista
// Gastropoda Planorbidae Menetus (Dilatata)
	.set('16230911',	'16230910')	// Gastropoda Planorbidae Menetus (Dilatata) dilatatus
// Gastropoda Planorbidae Ferrissia (Pettancylus)
	.set('16231211',	'16231210')	// Gastropoda Planorbidae Ferrissia (Pettancylus) clessiniana
// Gastropoda Succineidae Oxyloma (Oxyloma)
	.set('16320311',	'16320310')	// Gastropoda Succineidae Oxyloma (Oxyloma) pfeifferi
	.set('16320312',	'16320310')	// Gastropoda Succineidae Oxyloma (Oxyloma) sarsii
// Gastropoda Vertiginidae Vertigo (Vertilla)
	.set('16330211',	'16330210')	// Gastropoda Vertiginidae Vertigo (Vertilla) angustior
// Gastropoda Vertiginidae Vertigo (Vertigo)
	.set('16330221',	'16330220')	// Gastropoda Vertiginidae Vertigo (Vertigo) antivertigo
	.set('16330222',	'16330220')	// Gastropoda Vertiginidae Vertigo (Vertigo) geyeri
	.set('16330223',	'16330220')	// Gastropoda Vertiginidae Vertigo (Vertigo) lilljeborgi
	.set('16330224',	'16330220')	// Gastropoda Vertiginidae Vertigo (Vertigo) moulinsiana
	.set('16330225',	'16330220')	// Gastropoda Vertiginidae Vertigo (Vertigo) pygmaea
	.set('16330226',	'16330220')	// Gastropoda Vertiginidae Vertigo (Vertigo) substriata
	.set('16330227',	'16330220')	// Gastropoda Vertiginidae Vertigo (Vertigo) genesii
// Gastropoda Zonitidae Zonitoides (Zonitoides)
	.set('16350111',	'16350110')	// Gastropoda Zonitidae Zonitoides (Zonitoides) nitidus
// Gastropoda Clausiliidae Balea (Alinda)
	.set('16370111',	'16370110')	// Gastropoda Clausiliidae Balea (Alinda) biplicata
// Oligochaeta Naididae Dero (Dero)
	.set('20331411',	'20331410')	// Oligochaeta Naididae Dero (Dero) digitata
	.set('20331412',	'20331410')	// Oligochaeta Naididae Dero (Dero) obtusa
// Oligochaeta Naididae Dero (Aulophorus)
	.set('20331421',	'20331420')	// Oligochaeta Naididae Dero (Aulophorus) furcatus
// Oligochaeta Naididae Pristina (Pristina)
	.set('20331511',	'20331510')	// Oligochaeta Naididae Pristina (Pristina) aequiseta
	.set('20331512',	'20331510')	// Oligochaeta Naididae Pristina (Pristina) longiseta
// Oligochaeta Naididae Pristina (Pristinella)
	.set('20331521',	'20331520')	// Oligochaeta Naididae Pristina (Pristinella) amphibiotica
	.set('20331522',	'20331520')	// Oligochaeta Naididae Pristina (Pristinella) jenkinae
	.set('20331523',	'20331520')	// Oligochaeta Naididae Pristina (Pristinella) menoni
// Tardigrada Echiniscidae Echiniscus (Echiniscus)
	.set('23110111',	'23110110')	// Tardigrada Echiniscidae Echiniscus (Echiniscus) granulatus
	.set('23110112',	'23110110')	// Tardigrada Echiniscidae Echiniscus (Echiniscus) mediantus
	.set('23110113',	'23110110')	// Tardigrada Echiniscidae Echiniscus (Echiniscus) oihonnae
	.set('23110114',	'23110110')	// Tardigrada Echiniscidae Echiniscus (Echiniscus) quadrispinosus
	.set('23110115',	'23110110')	// Tardigrada Echiniscidae Echiniscus (Echiniscus) reticulatus
	.set('23110116',	'23110110')	// Tardigrada Echiniscidae Echiniscus (Echiniscus) spitsbergensis
	.set('23110117',	'23110110')	// Tardigrada Echiniscidae Echiniscus (Echiniscus) testudo
	.set('23110118',	'23110110')	// Tardigrada Echiniscidae Echiniscus (Echiniscus) tympanista
	.set('23110119',	'23110110')	// Tardigrada Echiniscidae Echiniscus (Echiniscus) viridis
	.set('2311011A',	'23110110')	// Tardigrada Echiniscidae Echiniscus (Echiniscus) wendti
// Tardigrada Echiniscidae Echiniscus (Hypechiniscus)
	.set('23110131',	'23110130')	// Tardigrada Echiniscidae Echiniscus (Hypechiniscus) gladiator
// Tardigrada Echiniscidae Echiniscus (Bryodelphax)
	.set('23110141',	'23110140')	// Tardigrada Echiniscidae Echiniscus (Bryodelphax) parvulus
// Tardigrada Macrobiotidae Hypsibius (Hypsibius)
	.set('23210211',	'23210210')	// Tardigrada Macrobiotidae Hypsibius (Hypsibius) arcticus
	.set('23210212',	'23210210')	// Tardigrada Macrobiotidae Hypsibius (Hypsibius) dujardini
	.set('23210213',	'23210210')	// Tardigrada Macrobiotidae Hypsibius (Hypsibius) oberhaeuseri
// Tardigrada Macrobiotidae Hypsibius (Calohypsibius)
	.set('23210221',	'23210220')	// Tardigrada Macrobiotidae Hypsibius (Calohypsibius) ornatus
// Tardigrada Macrobiotidae Hypsibius (Isohypsibius)
	.set('23210231',	'23210230')	// Tardigrada Macrobiotidae Hypsibius (Isohypsibius) annulatus
	.set('23210232',	'23210230')	// Tardigrada Macrobiotidae Hypsibius (Isohypsibius) augusti
	.set('23210233',	'23210230')	// Tardigrada Macrobiotidae Hypsibius (Isohypsibius) papillifer
	.set('23210234',	'23210230')	// Tardigrada Macrobiotidae Hypsibius (Isohypsibius) prosostomus
	.set('23210235',	'23210230')	// Tardigrada Macrobiotidae Hypsibius (Isohypsibius) sattleri
	.set('23210236',	'23210230')	// Tardigrada Macrobiotidae Hypsibius (Isohypsibius) schaudinni
	.set('23210237',	'23210230')	// Tardigrada Macrobiotidae Hypsibius (Isohypsibius) tetradactyloides
	.set('23210238',	'23210230')	// Tardigrada Macrobiotidae Hypsibius (Isohypsibius) tuberculatus
// Tardigrada Macrobiotidae Hypsibius (Diphascon)
	.set('23210251',	'23210250')	// Tardigrada Macrobiotidae Hypsibius (Diphascon) angustatus
	.set('23210252',	'23210250')	// Tardigrada Macrobiotidae Hypsibius (Diphascon) bullatus
	.set('23210253',	'23210250')	// Tardigrada Macrobiotidae Hypsibius (Diphascon) chilenensis
	.set('23210254',	'23210250')	// Tardigrada Macrobiotidae Hypsibius (Diphascon) oculatus
	.set('23210255',	'23210250')	// Tardigrada Macrobiotidae Hypsibius (Diphascon) scoticus
	.set('23210256',	'23210250')	// Tardigrada Macrobiotidae Hypsibius (Diphascon) spitzbergensis
// Hydracarina Hydrachnidae Hydrachna (Hydrachna)
	.set('24210111',	'24210110')	// Hydracarina Hydrachnidae Hydrachna (Hydrachna) cruenta
	.set('24210112',	'24210110')	// Hydracarina Hydrachnidae Hydrachna (Hydrachna) skorikowi
// Hydracarina Hydrachnidae Hydrachna (Diplohydrachna)
	.set('24210121',	'24210120')	// Hydracarina Hydrachnidae Hydrachna (Diplohydrachna) conjecta
	.set('24210122',	'24210120')	// Hydracarina Hydrachnidae Hydrachna (Diplohydrachna) distincta
	.set('24210123',	'24210120')	// Hydracarina Hydrachnidae Hydrachna (Diplohydrachna) georgei
	.set('24210124',	'24210120')	// Hydracarina Hydrachnidae Hydrachna (Diplohydrachna) globosa
// Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna)
	.set('24210131',	'24210130')	// Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) bivirgulata
	.set('24210132',	'24210130')	// Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) comosa
	.set('24210133',	'24210130')	// Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) geographica
	.set('24210134',	'24210130')	// Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) halberti
	.set('24210135',	'24210130')	// Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) incisa
	.set('24210136',	'24210130')	// Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) leegei
	.set('24210137',	'24210130')	// Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) levis
	.set('24210138',	'24210130')	// Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) processifera
	.set('24210139',	'24210130')	// Hydracarina Hydrachnidae Hydrachna (Rhabdohydrachna) williamsoni
// Hydracarina Hydryphantidae Hydryphantes (Hydryphantes)
	.set('24410111',	'24410110')	// Hydracarina Hydryphantidae Hydryphantes (Hydryphantes) bayeri
	.set('24410112',	'24410110')	// Hydracarina Hydryphantidae Hydryphantes (Hydryphantes) crassipalpis
	.set('24410113',	'24410110')	// Hydracarina Hydryphantidae Hydryphantes (Hydryphantes) dispar
	.set('24410114',	'24410110')	// Hydracarina Hydryphantidae Hydryphantes (Hydryphantes) frici
	.set('24410115',	'24410110')	// Hydracarina Hydryphantidae Hydryphantes (Hydryphantes) placationis
	.set('24410116',	'24410110')	// Hydracarina Hydryphantidae Hydryphantes (Hydryphantes) ruber
// Hydracarina Hydryphantidae Hydryphantes (Polyhydryphantes)
	.set('24410121',	'24410120')	// Hydracarina Hydryphantidae Hydryphantes (Polyhydryphantes) flexuosus
// Hydracarina Hydryphantidae Trichothyas (Lundbladia)
	.set('24410221',	'24410220')	// Hydracarina Hydryphantidae Trichothyas (Lundbladia) petrophila
// Hydracarina Hydryphantidae Panisopsis (Panisopsis)
	.set('24410711',	'24410710')	// Hydracarina Hydryphantidae Panisopsis (Panisopsis) vigilans
// Hydracarina Hydryphantidae Thyasella (Thyasella)
	.set('24410811',	'24410810')	// Hydracarina Hydryphantidae Thyasella (Thyasella) mandibularis
// Hydracarina Hydryphantidae Protzia (Protzia)
	.set('24411311',	'24411310')	// Hydracarina Hydryphantidae Protzia (Protzia) distincta
// Hydracarina Hydryphantidae Protzia (Calonyx)
	.set('24411321',	'24411320')	// Hydracarina Hydryphantidae Protzia (Calonyx) rotunda
// Hydracarina Hydryphantidae Wandesia (Wandesia)
	.set('24411411',	'24411410')	// Hydracarina Hydryphantidae Wandesia (Wandesia) racovitzai
// Hydracarina Sperchontidae Sperchon (Sperchon)
	.set('24510221',	'24510220')	// Hydracarina Sperchontidae Sperchon (Sperchon) brevirostris
	.set('24510222',	'24510220')	// Hydracarina Sperchontidae Sperchon (Sperchon) glandulosus
	.set('24510223',	'24510220')	// Hydracarina Sperchontidae Sperchon (Sperchon) hibernicus
	.set('24510224',	'24510220')	// Hydracarina Sperchontidae Sperchon (Sperchon) hispidus
	.set('24510225',	'24510220')	// Hydracarina Sperchontidae Sperchon (Sperchon) longirostris
	.set('24510226',	'24510220')	// Hydracarina Sperchontidae Sperchon (Sperchon) longissimus
	.set('24510227',	'24510220')	// Hydracarina Sperchontidae Sperchon (Sperchon) squamosus
	.set('24510228',	'24510220')	// Hydracarina Sperchontidae Sperchon (Sperchon) thienemanni
	.set('2451022Z',	'24510220')	// Hydracarina Sperchontidae Sperchon hibernicus group
// Hydracarina Sperchontidae Sperchon (Hispidosperchon)
	.set('24510231',	'24510230')	// Hydracarina Sperchontidae Sperchon (Hispidosperchon) clupeifer
	.set('24510232',	'24510230')	// Hydracarina Sperchontidae Sperchon (Hispidosperchon) denticulatus
	.set('24510233',	'24510230')	// Hydracarina Sperchontidae Sperchon (Hispidosperchon) ornatus
	.set('24510234',	'24510230')	// Hydracarina Sperchontidae Sperchon (Hispidosperchon) setiger
// Hydracarina Sperchontidae Sperchon (Mixosperchon)
	.set('24510241',	'24510240')	// Hydracarina Sperchontidae Sperchon (Mixosperchon) papillosus
// Hydracarina Teutoniidae Teutonia (Teutonia)
	.set('24520111',	'24520110')	// Hydracarina Teutoniidae Teutonia (Teutonia) cometes
// Hydracarina Anisitsiellidae Nilotonia (Dartia)
	.set('24530221',	'24530220')	// Hydracarina Anisitsiellidae Nilotonia (Dartia) harrisi
// Hydracarina Lebertiidae Lebertia (Lebertia)
	.set('24540111',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) africana
	.set('24540112',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) areolata
	.set('24540113',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) brunnea
	.set('24540114',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) castalia
	.set('24540115',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) cognata
	.set('24540116',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) compacta
	.set('24540117',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) dalmatica
	.set('24540118',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) fimbriata
	.set('24540119',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) flumenia
	.set('2454011A',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) hirtipalpis
	.set('2454011B',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) laticoxalis
	.set('2454011C',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) maglioi
	.set('2454011D',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) minuta
	.set('2454011E',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) rufipes
	.set('2454011F',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) sparsicapillata
	.set('2454011G',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) tenuipalpis
	.set('2454011H',	'24540110')	// Hydracarina Lebertiidae Lebertia (Lebertia) tenuistriata
// Hydracarina Lebertiidae Lebertia (Pilolebertia)
	.set('24540141',	'24540140')	// Hydracarina Lebertiidae Lebertia (Pilolebertia) crassipalpis
	.set('24540142',	'24540140')	// Hydracarina Lebertiidae Lebertia (Pilolebertia) curvipalpis
	.set('24540144',	'24540140')	// Hydracarina Lebertiidae Lebertia (Pilolebertia) inaequalis
	.set('24540145',	'24540140')	// Hydracarina Lebertiidae Lebertia (Pilolebertia) insignis
	.set('24540146',	'24540140')	// Hydracarina Lebertiidae Lebertia (Pilolebertia) minuticornis
	.set('24540148',	'24540140')	// Hydracarina Lebertiidae Lebertia (Pilolebertia) plauta
	.set('24540149',	'24540140')	// Hydracarina Lebertiidae Lebertia (Pilolebertia) porosa
// Hydracarina Lebertiidae Lebertia (Pseudolebertia)
	.set('24540161',	'24540160')	// Hydracarina Lebertiidae Lebertia (Pseudolebertia) glabra
	.set('24540162',	'24540160')	// Hydracarina Lebertiidae Lebertia (Pseudolebertia) mollis
	.set('24540163',	'24540160')	// Hydracarina Lebertiidae Lebertia (Pseudolebertia) salebrosa
// Hydracarina Lebertiidae Lebertia (Hexalebertia)
	.set('24540171',	'24540170')	// Hydracarina Lebertiidae Lebertia (Hexalebertia) dubia
	.set('24540172',	'24540170')	// Hydracarina Lebertiidae Lebertia (Hexalebertia) novipalpis
	.set('24540173',	'24540170')	// Hydracarina Lebertiidae Lebertia (Hexalebertia) sefvei
	.set('24540174',	'24540170')	// Hydracarina Lebertiidae Lebertia (Hexalebertia) stigmatifera
// Hydracarina Lebertiidae Lebertia (Mixolebertia)
	.set('24540181',	'24540180')	// Hydracarina Lebertiidae Lebertia (Mixolebertia) densa
	.set('24540182',	'24540180')	// Hydracarina Lebertiidae Lebertia (Mixolebertia) halberti
	.set('24540183',	'24540180')	// Hydracarina Lebertiidae Lebertia (Mixolebertia) oudemansi
// Hydracarina Oxidae Oxus (Oxus)
	.set('24550211',	'24550210')	// Hydracarina Oxidae Oxus (Oxus) nodigerus
	.set('24550212',	'24550210')	// Hydracarina Oxidae Oxus (Oxus) ovalis
	.set('24550213',	'24550210')	// Hydracarina Oxidae Oxus (Oxus) strigatus
// Hydracarina Oxidae Oxus (Gnaphiscus)
	.set('24550221',	'24550220')	// Hydracarina Oxidae Oxus (Gnaphiscus) setosus
// Hydracarina Torrenticolidae Torrenticola (Torrenticola)
	.set('24560111',	'24560110')	// Hydracarina Torrenticolidae Torrenticola (Torrenticola) amplexa
	.set('24560112',	'24560110')	// Hydracarina Torrenticolidae Torrenticola (Torrenticola) andrei
	.set('24560113',	'24560110')	// Hydracarina Torrenticolidae Torrenticola (Torrenticola) anomala
	.set('24560114',	'24560110')	// Hydracarina Torrenticolidae Torrenticola (Torrenticola) brevirostris
	.set('24560115',	'24560110')	// Hydracarina Torrenticolidae Torrenticola (Torrenticola) elliptica
	.set('24560116',	'24560110')	// Hydracarina Torrenticolidae Torrenticola (Torrenticola) halberti
	.set('24560117',	'24560110')	// Hydracarina Torrenticolidae Torrenticola (Torrenticola) maglioi
	.set('24560118',	'24560110')	// Hydracarina Torrenticolidae Torrenticola (Torrenticola) parvipalpis
	.set('24560119',	'24560110')	// Hydracarina Torrenticolidae Torrenticola (Torrenticola) robusta
	.set('2456011A',	'24560110')	// Hydracarina Torrenticolidae Torrenticola (Torrenticola) thori
// Hydracarina Torrenticolidae Torrenticola (Monatractides)
	.set('24560131',	'24560130')	// Hydracarina Torrenticolidae Torrenticola (Monatractides) madritensis
// Hydracarina Limnesiidae Limnesia (Limnesia)
	.set('24610111',	'24610110')	// Hydracarina Limnesiidae Limnesia (Limnesia) connata
	.set('24610112',	'24610110')	// Hydracarina Limnesiidae Limnesia (Limnesia) fulgida
	.set('24610113',	'24610110')	// Hydracarina Limnesiidae Limnesia (Limnesia) koenikei
	.set('24610114',	'24610110')	// Hydracarina Limnesiidae Limnesia (Limnesia) maculata
	.set('24610115',	'24610110')	// Hydracarina Limnesiidae Limnesia (Limnesia) undulata
// Hydracarina Hygrobatidae Hygrobates (Hygrobates)
	.set('24620111',	'24620110')	// Hydracarina Hygrobatidae Hygrobates (Hygrobates) calliger
	.set('24620112',	'24620110')	// Hydracarina Hygrobatidae Hygrobates (Hygrobates) fluviatilis
	.set('24620113',	'24620110')	// Hydracarina Hygrobatidae Hygrobates (Hygrobates) foreli
	.set('24620114',	'24620110')	// Hydracarina Hygrobatidae Hygrobates (Hygrobates) longipalpis
	.set('24620115',	'24620110')	// Hydracarina Hygrobatidae Hygrobates (Hygrobates) longiporus
	.set('24620116',	'24620110')	// Hydracarina Hygrobatidae Hygrobates (Hygrobates) nigromaculatus
	.set('24620117',	'24620110')	// Hydracarina Hygrobatidae Hygrobates (Hygrobates) trigonicus
// Hydracarina Hygrobatidae Hygrobates (Rivobates)
	.set('24620131',	'24620130')	// Hydracarina Hygrobatidae Hygrobates (Rivobates) norvegicus
// Hydracarina Hygrobatidae Atractides (Atractides)
	.set('24620211',	'24620210')	// Hydracarina Hygrobatidae Atractides (Atractides) denticulatus
	.set('24620212',	'24620210')	// Hydracarina Hygrobatidae Atractides (Atractides) elongatus
	.set('24620213',	'24620210')	// Hydracarina Hygrobatidae Atractides (Atractides) gibberipalpis
	.set('24620214',	'24620210')	// Hydracarina Hygrobatidae Atractides (Atractides) latipalpis
	.set('24620215',	'24620210')	// Hydracarina Hygrobatidae Atractides (Atractides) longipes
	.set('24620216',	'24620210')	// Hydracarina Hygrobatidae Atractides (Atractides) magnirostris
	.set('24620217',	'24620210')	// Hydracarina Hygrobatidae Atractides (Atractides) nodipalpis
	.set('24620218',	'24620210')	// Hydracarina Hygrobatidae Atractides (Atractides) pachydermis
	.set('24620219',	'24620210')	// Hydracarina Hygrobatidae Atractides (Atractides) pavesii
	.set('2462021A',	'24620210')	// Hydracarina Hygrobatidae Atractides (Atractides) spinipes
	.set('2462021B',	'24620210')	// Hydracarina Hygrobatidae Atractides (Atractides) tener
// Hydracarina Hygrobatidae Atractides (Octomegapus)
	.set('24620231',	'24620230')	// Hydracarina Hygrobatidae Atractides (Octomegapus) octoporus
// Hydracarina Unionicolidae Unionicola (Unionicola)
	.set('24630111',	'24630110')	// Hydracarina Unionicolidae Unionicola (Unionicola) crassipes
	.set('24630112',	'24630110')	// Hydracarina Unionicolidae Unionicola (Unionicola) gracilipalpis
	.set('24630113',	'24630110')	// Hydracarina Unionicolidae Unionicola (Unionicola) minor
// Hydracarina Unionicolidae Unionicola (Pentatax)
	.set('24630121',	'24630120')	// Hydracarina Unionicolidae Unionicola (Pentatax) aculeata
	.set('24630122',	'24630120')	// Hydracarina Unionicolidae Unionicola (Pentatax) bonzi
	.set('24630123',	'24630120')	// Hydracarina Unionicolidae Unionicola (Pentatax) figuralis
	.set('24630124',	'24630120')	// Hydracarina Unionicolidae Unionicola (Pentatax) intermedia
// Hydracarina Unionicolidae Unionicola (Parasitatax)
	.set('24630131',	'24630130')	// Hydracarina Unionicolidae Unionicola (Parasitatax) ypsilophora
// Hydracarina Unionicolidae Neumania (Neumania)
	.set('24630211',	'24630210')	// Hydracarina Unionicolidae Neumania (Neumania) callosa
	.set('24630212',	'24630210')	// Hydracarina Unionicolidae Neumania (Neumania) deltoides
	.set('24630213',	'24630210')	// Hydracarina Unionicolidae Neumania (Neumania) limosa
	.set('24630214',	'24630210')	// Hydracarina Unionicolidae Neumania (Neumania) spinipes
	.set('24630215',	'24630210')	// Hydracarina Unionicolidae Neumania (Neumania) vernalis
// Hydracarina Unionicolidae Neumania (Soarella)
	.set('24630221',	'24630220')	// Hydracarina Unionicolidae Neumania (Soarella) papillosa
// Hydracarina Feltriidae Feltria (Feltria)
	.set('24640111',	'24640110')	// Hydracarina Feltriidae Feltria (Feltria) cornuta
	.set('24640112',	'24640110')	// Hydracarina Feltriidae Feltria (Feltria) denticulata
	.set('24640113',	'24640110')	// Hydracarina Feltriidae Feltria (Feltria) minuta
	.set('24640114',	'24640110')	// Hydracarina Feltriidae Feltria (Feltria) rouxi
	.set('24640115',	'24640110')	// Hydracarina Feltriidae Feltria (Feltria) subterranea
// Hydracarina Feltriidae Feltria (Azugofeltria)
	.set('24640121',	'24640120')	// Hydracarina Feltriidae Feltria (Azugofeltria) motasi
// Hydracarina Pionidae Piona (Piona)
	.set('24650231',	'24650230')	// Hydracarina Pionidae Piona (Piona) affinis
	.set('24650232',	'24650230')	// Hydracarina Pionidae Piona (Piona) alata
	.set('24650233',	'24650230')	// Hydracarina Pionidae Piona (Piona) alpicola
	.set('24650234',	'24650230')	// Hydracarina Pionidae Piona (Piona) ambigua
	.set('24650235',	'24650230')	// Hydracarina Pionidae Piona (Piona) carnea
	.set('24650236',	'24650230')	// Hydracarina Pionidae Piona (Piona) coccinea
	.set('24650237',	'24650230')	// Hydracarina Pionidae Piona (Piona) disparilis
	.set('24650238',	'24650230')	// Hydracarina Pionidae Piona (Piona) fallax
	.set('24650239',	'24650230')	// Hydracarina Pionidae Piona (Piona) longipalpis
	.set('2465023A',	'24650230')	// Hydracarina Pionidae Piona (Piona) nodata
	.set('2465023B',	'24650230')	// Hydracarina Pionidae Piona (Piona) obturbans
	.set('2465023C',	'24650230')	// Hydracarina Pionidae Piona (Piona) pusilla
	.set('2465023D',	'24650230')	// Hydracarina Pionidae Piona (Piona) tuberifera
// Hydracarina Pionidae Piona (Dispersipiona)
	.set('24650241',	'24650240')	// Hydracarina Pionidae Piona (Dispersipiona) clavicornis
	.set('24650242',	'24650240')	// Hydracarina Pionidae Piona (Dispersipiona) conglobata
// Hydracarina Pionidae Piona (Tetrapiona)
	.set('24650251',	'24650250')	// Hydracarina Pionidae Piona (Tetrapiona) discrepans
	.set('24650252',	'24650250')	// Hydracarina Pionidae Piona (Tetrapiona) neumani
	.set('24650253',	'24650250')	// Hydracarina Pionidae Piona (Tetrapiona) paucipora
	.set('24650254',	'24650250')	// Hydracarina Pionidae Piona (Tetrapiona) variabilis
// Hydracarina Pionidae Nautarachna (Nautarachna)
	.set('24650311',	'24650310')	// Hydracarina Pionidae Nautarachna (Nautarachna) crassa
// Hydracarina Pionidae Nautarachna (Pionella)
	.set('24650321',	'24650320')	// Hydracarina Pionidae Nautarachna (Pionella) karamani
// Hydracarina Pionidae Tiphys (Tiphys)
	.set('24650611',	'24650610')	// Hydracarina Pionidae Tiphys (Tiphys) bullatus
	.set('24650612',	'24650610')	// Hydracarina Pionidae Tiphys (Tiphys) lapponicus
	.set('24650613',	'24650610')	// Hydracarina Pionidae Tiphys (Tiphys) latipes
	.set('24650614',	'24650610')	// Hydracarina Pionidae Tiphys (Tiphys) ornatus
	.set('24650615',	'24650610')	// Hydracarina Pionidae Tiphys (Tiphys) scaurus
	.set('24650616',	'24650610')	// Hydracarina Pionidae Tiphys (Tiphys) torris
// Hydracarina Pionidae Tiphys (Pionides)
	.set('24650621',	'24650620')	// Hydracarina Pionidae Tiphys (Pionides) ensifer
// Hydracarina Pionidae Tiphys (Aceropsis)
	.set('24650631',	'24650630')	// Hydracarina Pionidae Tiphys (Aceropsis) pistillifer
// Hydracarina Pionidae Pionopsis (Pionopsis)
	.set('24650711',	'24650710')	// Hydracarina Pionidae Pionopsis (Pionopsis) lutescens
// Hydracarina Pionidae Pionacercus (Pionacercus)
	.set('24650811',	'24650810')	// Hydracarina Pionidae Pionacercus (Pionacercus) leuckarti
	.set('24650812',	'24650810')	// Hydracarina Pionidae Pionacercus (Pionacercus) norvegicus
	.set('24650813',	'24650810')	// Hydracarina Pionidae Pionacercus (Pionacercus) pyriformis
	.set('24650814',	'24650810')	// Hydracarina Pionidae Pionacercus (Pionacercus) uncinatus
// Hydracarina Pionidae Pionacercus (Pionacercopsis)
	.set('24650821',	'24650820')	// Hydracarina Pionidae Pionacercus (Pionacercopsis) vatrax
// Hydracarina Pionidae Forelia (Forelia)
	.set('24650911',	'24650910')	// Hydracarina Pionidae Forelia (Forelia) brevipes
	.set('24650912',	'24650910')	// Hydracarina Pionidae Forelia (Forelia) liliacea
	.set('24650913',	'24650910')	// Hydracarina Pionidae Forelia (Forelia) variegator
// Hydracarina Aturidae Albaxona (Vietsaxona)
	.set('24660221',	'24660220')	// Hydracarina Aturidae Albaxona (Vietsaxona) lundbladi
// Hydracarina Aturidae Axonopsis (Axonopsis)
	.set('24660311',	'24660310')	// Hydracarina Aturidae Axonopsis (Axonopsis) complanata
// Hydracarina Aturidae Axonopsis (Hexaxonopsis)
	.set('24660321',	'24660320')	// Hydracarina Aturidae Axonopsis (Hexaxonopsis) romijni
// Hydracarina Aturidae Brachypoda (Brachypoda)
	.set('24660411',	'24660410')	// Hydracarina Aturidae Brachypoda (Brachypoda) versicolor
// Hydracarina Aturidae Brachypoda (Ocybrachypoda)
	.set('24660421',	'24660420')	// Hydracarina Aturidae Brachypoda (Ocybrachypoda) celeripes
// Hydracarina Aturidae Lethaxona (Lethaxona)
	.set('24660611',	'24660610')	// Hydracarina Aturidae Lethaxona (Lethaxona) cavifrons
// Hydracarina Aturidae Kongsbergia (Kongsbergia)
	.set('24660811',	'24660810')	// Hydracarina Aturidae Kongsbergia (Kongsbergia) clypeata
	.set('24660812',	'24660810')	// Hydracarina Aturidae Kongsbergia (Kongsbergia) largaiollii
	.set('24660813',	'24660810')	// Hydracarina Aturidae Kongsbergia (Kongsbergia) materna
	.set('24660814',	'24660810')	// Hydracarina Aturidae Kongsbergia (Kongsbergia) vietsi
// Hydracarina Momoniidae Momonia (Momonia)
	.set('24720111',	'24720110')	// Hydracarina Momoniidae Momonia (Momonia) falcipalpis
// Hydracarina Momoniidae Stygomomonia (Stygomomonia)
	.set('24720211',	'24720210')	// Hydracarina Momoniidae Stygomomonia (Stygomomonia) latipes
// Hydracarina Mideopsidae Mideopsis (Mideopsis)
	.set('24730111',	'24730110')	// Hydracarina Mideopsidae Mideopsis (Mideopsis) crassipes
	.set('24730112',	'24730110')	// Hydracarina Mideopsidae Mideopsis (Mideopsis) orbicularis
// Hydracarina Mideopsidae Mideopsis (Xystonotus)
	.set('24730121',	'24730120')	// Hydracarina Mideopsidae Mideopsis (Xystonotus) willmanni
// Hydracarina Arrenuridae Arrenurus (Arrenurus)
	.set('24770111',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) abbreviator
	.set('24770112',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) affinis
	.set('24770113',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) albator
	.set('24770114',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) batillifer
	.set('24770115',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) bicuspidator
	.set('24770116',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) bruzelii
	.set('24770117',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) claviger
	.set('24770118',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) compactus
	.set('24770119',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) crassicaudatus
	.set('2477011A',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) crenatus
	.set('2477011B',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) cuspidifer
	.set('2477011C',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) fimbriatus
	.set('2477011D',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) latus
	.set('2477011E',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) leuckarti
	.set('2477011F',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) maculator
	.set('2477011G',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) neumani
	.set('2477011H',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) nobilis
	.set('2477011J',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) ornatus
	.set('2477011K',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) robustus
	.set('2477011L',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) tricuspidator
	.set('2477011M',	'24770110')	// Hydracarina Arrenuridae Arrenurus (Arrenurus) virens
// Hydracarina Arrenuridae Arrenurus (Megaluracarus)
	.set('24770141',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) adnatus
	.set('24770142',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) buccinator
	.set('24770144',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) cylindratus
	.set('24770145',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) geminus
	.set('24770146',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) globator
	.set('24770147',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) stjoerdalensis
	.set('24770148',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) mediorotundatus
	.set('24770149',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) membranator
	.set('2477014A',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) muelleri
	.set('2477014B',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) pyriformis
	.set('2477014C',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) scourfieldi
	.set('2477014D',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) securiformis
	.set('2477014E',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) soari
	.set('2477014F',	'24770140')	// Hydracarina Arrenuridae Arrenurus (Megaluracarus) zachariae
// Hydracarina Arrenuridae Arrenurus (Truncaturus)
	.set('24770161',	'24770160')	// Hydracarina Arrenuridae Arrenurus (Truncaturus) fontinalis
	.set('24770162',	'24770160')	// Hydracarina Arrenuridae Arrenurus (Truncaturus) knauthei
	.set('24770163',	'24770160')	// Hydracarina Arrenuridae Arrenurus (Truncaturus) nodosus
	.set('24770164',	'24770160')	// Hydracarina Arrenuridae Arrenurus (Truncaturus) stecki
	.set('24770165',	'24770160')	// Hydracarina Arrenuridae Arrenurus (Truncaturus) truncatellus
// Hydracarina Arrenuridae Arrenurus (Micruracarus)
	.set('24770171',	'24770170')	// Hydracarina Arrenuridae Arrenurus (Micruracarus) bifidicodulus
	.set('24770172',	'24770170')	// Hydracarina Arrenuridae Arrenurus (Micruracarus) bipapillosus
	.set('24770173',	'24770170')	// Hydracarina Arrenuridae Arrenurus (Micruracarus) biscissus
	.set('24770174',	'24770170')	// Hydracarina Arrenuridae Arrenurus (Micruracarus) britannorum
	.set('24770175',	'24770170')	// Hydracarina Arrenuridae Arrenurus (Micruracarus) forpicatus
	.set('24770176',	'24770170')	// Hydracarina Arrenuridae Arrenurus (Micruracarus) inexploratus
	.set('24770177',	'24770170')	// Hydracarina Arrenuridae Arrenurus (Micruracarus) integrator
	.set('24770178',	'24770170')	// Hydracarina Arrenuridae Arrenurus (Micruracarus) longiusculus
	.set('24770179',	'24770170')	// Hydracarina Arrenuridae Arrenurus (Micruracarus) novus
	.set('2477017A',	'24770170')	// Hydracarina Arrenuridae Arrenurus (Micruracarus) octagonus
	.set('2477017B',	'24770170')	// Hydracarina Arrenuridae Arrenurus (Micruracarus) perforatus
	.set('2477017C',	'24770170')	// Hydracarina Arrenuridae Arrenurus (Micruracarus) sculptus
	.set('2477017D',	'24770170')	// Hydracarina Arrenuridae Arrenurus (Micruracarus) sinuator
// Ostracoda Candonidae Candona (Cryptocandona)
	.set('30320411',	'30320410')	// Ostracoda Candonidae Candona (Cryptocandona) reducta
	.set('30320412',	'30320410')	// Ostracoda Candonidae Candona (Cryptocandona) vavrai
// Ostracoda Candonidae Candona (Candona)
	.set('30320421',	'30320420')	// Ostracoda Candonidae Candona (Candona) angulata
	.set('30320422',	'30320420')	// Ostracoda Candonidae Candona (Candona) candida
	.set('30320423',	'30320420')	// Ostracoda Candonidae Candona (Candona) neglecta
	.set('30320424',	'30320420')	// Ostracoda Candonidae Candona (Candona) weltneri
// Ostracoda Candonidae Candona (Typhlocypris)
	.set('30320431',	'30320430')	// Ostracoda Candonidae Candona (Typhlocypris) compressa
	.set('30320432',	'30320430')	// Ostracoda Candonidae Candona (Typhlocypris) insculpta
	.set('30320433',	'30320430')	// Ostracoda Candonidae Candona (Typhlocypris) lobipes
	.set('30320434',	'30320430')	// Ostracoda Candonidae Candona (Typhlocypris) marchica
	.set('30320435',	'30320430')	// Ostracoda Candonidae Candona (Typhlocypris) parallela
	.set('30320436',	'30320430')	// Ostracoda Candonidae Candona (Typhlocypris) pratensis
	.set('30320437',	'30320430')	// Ostracoda Candonidae Candona (Typhlocypris) rostrata
	.set('30320438',	'30320430')	// Ostracoda Candonidae Candona (Typhlocypris) sarsi
	.set('30320439',	'30320430')	// Ostracoda Candonidae Candona (Typhlocypris) stagnalis
// Ostracoda Candonidae Candona (Fabaeformiscandona)
	.set('30320451',	'30320450')	// Ostracoda Candonidae Candona (Fabaeformiscandona) fabaeformis
// Ostracoda Candonidae Candona (Eucandona)
	.set('30320461',	'30320460')	// Ostracoda Candonidae Candona (Eucandona) acuminata
	.set('30320462',	'30320460')	// Ostracoda Candonidae Candona (Eucandona) caudata
	.set('30320463',	'30320460')	// Ostracoda Candonidae Candona (Eucandona) hyalina
	.set('30320464',	'30320460')	// Ostracoda Candonidae Candona (Eucandona) protzi
// Copepoda Diaptomidae Arctodiaptomus (Arctodiaptomus)
	.set('31130311',	'31130310')	// Copepoda Diaptomidae Arctodiaptomus (Arctodiaptomus) laticeps
	.set('31130312',	'31130310')	// Copepoda Diaptomidae Arctodiaptomus (Arctodiaptomus) wierzejskii
// Copepoda Diaptomidae Arctodiaptomus (Rhabdodiaptomus)
	.set('31130321',	'31130320')	// Copepoda Diaptomidae Arctodiaptomus (Rhabdodiaptomus) alpinus
// Copepoda Canthocamptidae Attheyella (Attheyella)
	.set('31340311',	'31340310')	// Copepoda Canthocamptidae Attheyella (Attheyella) crassa
// Copepoda Canthocamptidae Attheyella (Brehmiella)
	.set('31340321',	'31340320')	// Copepoda Canthocamptidae Attheyella (Brehmiella) dentata
	.set('31340322',	'31340320')	// Copepoda Canthocamptidae Attheyella (Brehmiella) trispinosa
	.set('31340323',	'31340320')	// Copepoda Canthocamptidae Attheyella (Brehmiella) wulmeri
// Copepoda Canthocamptidae Attheyella (Elaphoidella)
	.set('31340331',	'31340330')	// Copepoda Canthocamptidae Attheyella (Elaphoidella) bidens
	.set('31340332',	'31340330')	// Copepoda Canthocamptidae Attheyella (Elaphoidella) gracilis
// Copepoda Canthocamptidae Bryocamptus (Bryocamptus)
	.set('31340811',	'31340810')	// Copepoda Canthocamptidae Bryocamptus (Bryocamptus) minutus
// Copepoda Canthocamptidae Bryocamptus (Rheocamptus)
	.set('31340821',	'31340820')	// Copepoda Canthocamptidae Bryocamptus (Rheocamptus) pygmaeus
	.set('31340822',	'31340820')	// Copepoda Canthocamptidae Bryocamptus (Rheocamptus) typhlops
	.set('31340823',	'31340820')	// Copepoda Canthocamptidae Bryocamptus (Rheocamptus) weberi
	.set('31340824',	'31340820')	// Copepoda Canthocamptidae Bryocamptus (Rheocamptus) zschokkei
// Copepoda Canthocamptidae Bryocamptus (Arcticocamptus)
	.set('31340831',	'31340830')	// Copepoda Canthocamptidae Bryocamptus (Arcticocamptus) cuspidatus
	.set('31340832',	'31340830')	// Copepoda Canthocamptidae Bryocamptus (Arcticocamptus) rhaeticus
// Copepoda Canthocamptidae Bryocamptus (Limnocamptus)
	.set('31340841',	'31340840')	// Copepoda Canthocamptidae Bryocamptus (Limnocamptus) echinatus
	.set('31340842',	'31340840')	// Copepoda Canthocamptidae Bryocamptus (Limnocamptus) praegeri
// Hemiptera Hebridae Hebrus (Hebrus)
	.set('43120111',	'43120110')	// Hemiptera Hebridae Hebrus (Hebrus) pusillus
// Hemiptera Hebridae Hebrus (Hebrusella)
	.set('43120121',	'43120120')	// Hemiptera Hebridae Hebrus (Hebrusella) ruficeps
// Hemiptera Veliidae Velia (Plesiovelia)
	.set('43220111',	'43220110')	// Hemiptera Veliidae Velia (Plesiovelia) caprai
	.set('43220112',	'43220110')	// Hemiptera Veliidae Velia (Plesiovelia) saulii
// Hemiptera Corixidae Micronecta (Dichaetonecta)
	.set('43610111',	'43610110')	// Hemiptera Corixidae Micronecta (Dichaetonecta) scholtzi
// Hemiptera Corixidae Micronecta (Micronecta)
	.set('43610121',	'43610120')	// Hemiptera Corixidae Micronecta (Micronecta) minutissima
	.set('43610122',	'43610120')	// Hemiptera Corixidae Micronecta (Micronecta) poweri
	.set('43610123',	'43610120')	// Hemiptera Corixidae Micronecta (Micronecta) griseola
// Hemiptera Corixidae Sigara (Sigara)
	.set('43610911',	'43610910')	// Hemiptera Corixidae Sigara (Sigara) dorsalis
	.set('43610912',	'43610910')	// Hemiptera Corixidae Sigara (Sigara) striata
// Hemiptera Corixidae Sigara (Subsigara)
	.set('43610921',	'43610920')	// Hemiptera Corixidae Sigara (Subsigara) distincta
	.set('43610922',	'43610920')	// Hemiptera Corixidae Sigara (Subsigara) falleni
	.set('43610923',	'43610920')	// Hemiptera Corixidae Sigara (Subsigara) fallenoidea
	.set('43610924',	'43610920')	// Hemiptera Corixidae Sigara (Subsigara) fossarum
	.set('43610925',	'43610920')	// Hemiptera Corixidae Sigara (Subsigara) scotti
	.set('43610926',	'43610920')	// Hemiptera Corixidae Sigara (Subsigara) iactans
	.set('43610927',	'43610920')	// Hemiptera Corixidae Sigara (Subsigara) longipalis
// Hemiptera Corixidae Sigara (Vermicorixa)
	.set('43610941',	'43610940')	// Hemiptera Corixidae Sigara (Vermicorixa) lateralis
// Hemiptera Corixidae Sigara (Pseudovermicorixa)
	.set('43610951',	'43610950')	// Hemiptera Corixidae Sigara (Pseudovermicorixa) nigrolineata
// Hemiptera Corixidae Sigara (Retrocorixa)
	.set('43610971',	'43610970')	// Hemiptera Corixidae Sigara (Retrocorixa) limitata
	.set('43610972',	'43610970')	// Hemiptera Corixidae Sigara (Retrocorixa) semistriata
	.set('43610973',	'43610970')	// Hemiptera Corixidae Sigara (Retrocorixa) venusta
// Hemiptera Corixidae Sigara (Halicorixa)
	.set('43610981',	'43610980')	// Hemiptera Corixidae Sigara (Halicorixa) selecta
	.set('43610982',	'43610980')	// Hemiptera Corixidae Sigara (Halicorixa) stagnalis
// Coleoptera Haliplidae Haliplus (Haliplus)
	.set('45110321',	'45110320')	// Coleoptera Haliplidae Haliplus (Haliplus) confinis
	.set('45110322',	'45110320')	// Coleoptera Haliplidae Haliplus (Haliplus) obliquus
	.set('45110323',	'45110320')	// Coleoptera Haliplidae Haliplus (Haliplus) varius
// Coleoptera Haliplidae Haliplus (Neohaliplus)
	.set('45110331',	'45110330')	// Coleoptera Haliplidae Haliplus (Neohaliplus) lineatocollis
// Coleoptera Haliplidae Haliplus (Haliplinus)
	.set('45110341',	'45110340')	// Coleoptera Haliplidae Haliplus (Haliplinus) apicalis
	.set('45110342',	'45110340')	// Coleoptera Haliplidae Haliplus (Haliplinus) fluviatilis
	.set('45110343',	'45110340')	// Coleoptera Haliplidae Haliplus (Haliplinus) furcatus
	.set('45110344',	'45110340')	// Coleoptera Haliplidae Haliplus (Haliplinus) heydeni
	.set('45110345',	'45110340')	// Coleoptera Haliplidae Haliplus (Haliplinus) immaculatus
	.set('45110346',	'45110340')	// Coleoptera Haliplidae Haliplus (Haliplinus) lineolatus
	.set('45110347',	'45110340')	// Coleoptera Haliplidae Haliplus (Haliplinus) ruficollis
	.set('45110348',	'45110340')	// Coleoptera Haliplidae Haliplus (Haliplinus) sibiricus
	.set('4511034Z',	'45110340')	// Coleoptera Haliplidae Haliplus ruficollis group
// Coleoptera Haliplidae Haliplus (Liaphlus)
	.set('45110351',	'45110350')	// Coleoptera Haliplidae Haliplus (Liaphlus) flavicollis
	.set('45110352',	'45110350')	// Coleoptera Haliplidae Haliplus (Liaphlus) fulvus
	.set('45110353',	'45110350')	// Coleoptera Haliplidae Haliplus (Liaphlus) laminatus
	.set('45110354',	'45110350')	// Coleoptera Haliplidae Haliplus (Liaphlus) mucronatus
	.set('45110355',	'45110350')	// Coleoptera Haliplidae Haliplus (Liaphlus) variegatus
// Coleoptera Dytiscidae Hygrotus (Hygrotus)
	.set('45140611',	'45140610')	// Coleoptera Dytiscidae Hygrotus (Hygrotus) decoratus
	.set('45140612',	'45140610')	// Coleoptera Dytiscidae Hygrotus (Hygrotus) inaequalis
	.set('45140613',	'45140610')	// Coleoptera Dytiscidae Hygrotus (Hygrotus) quinquelineatus
	.set('45140614',	'45140610')	// Coleoptera Dytiscidae Hygrotus (Hygrotus) versicolor
// Coleoptera Dytiscidae Hygrotus (Coelambus)
	.set('45140621',	'45140620')	// Coleoptera Dytiscidae Hygrotus (Coelambus) confluens
	.set('45140622',	'45140620')	// Coleoptera Dytiscidae Hygrotus (Coelambus) impressopunctatus
	.set('45140623',	'45140620')	// Coleoptera Dytiscidae Hygrotus (Coelambus) nigrolineatus
	.set('45140624',	'45140620')	// Coleoptera Dytiscidae Hygrotus (Coelambus) novemlineatus
	.set('45140625',	'45140620')	// Coleoptera Dytiscidae Hygrotus (Coelambus) parallellogrammus
// Coleoptera Dytiscidae Nebrioporus (Nebrioporus)
	.set('45141311',	'45141310')	// Coleoptera Dytiscidae Nebrioporus (Nebrioporus) assimilis
	.set('45141312',	'45141310')	// Coleoptera Dytiscidae Nebrioporus (Nebrioporus) depressus
	.set('45141313',	'45141310')	// Coleoptera Dytiscidae Nebrioporus (Nebrioporus) elegans
	.set('4514131Z',	'45141310')	// Coleoptera Dytiscidae Nebrioporus depressus group
// Coleoptera Dytiscidae Nebrioporus (Zimmermannius)
	.set('45141321',	'45141320')	// Coleoptera Dytiscidae Nebrioporus (Zimmermannius) canaliculatus
// Coleoptera Dytiscidae Agabus (Acatodes)
	.set('45142031',	'45142030')	// Coleoptera Dytiscidae Agabus (Acatodes) arcticus
	.set('45142032',	'45142030')	// Coleoptera Dytiscidae Agabus (Acatodes) congener
	.set('45142033',	'45142030')	// Coleoptera Dytiscidae Agabus (Acatodes) sturmii
// Coleoptera Dytiscidae Agabus (Agabus)
	.set('45142041',	'45142040')	// Coleoptera Dytiscidae Agabus (Agabus) labiatus
	.set('45142042',	'45142040')	// Coleoptera Dytiscidae Agabus (Agabus) uliginosus
	.set('45142043',	'45142040')	// Coleoptera Dytiscidae Agabus (Agabus) undulatus
// Coleoptera Dytiscidae Agabus (Gaurodytes)
	.set('45142051',	'45142050')	// Coleoptera Dytiscidae Agabus (Gaurodytes) affinis
	.set('45142052',	'45142050')	// Coleoptera Dytiscidae Agabus (Gaurodytes) biguttatus
	.set('45142053',	'45142050')	// Coleoptera Dytiscidae Agabus (Gaurodytes) bipustulatus
	.set('45142054',	'45142050')	// Coleoptera Dytiscidae Agabus (Gaurodytes) brunneus
	.set('45142055',	'45142050')	// Coleoptera Dytiscidae Agabus (Gaurodytes) conspersus
	.set('45142056',	'45142050')	// Coleoptera Dytiscidae Agabus (Gaurodytes) didymus
	.set('45142057',	'45142050')	// Coleoptera Dytiscidae Agabus (Gaurodytes) guttatus
	.set('45142058',	'45142050')	// Coleoptera Dytiscidae Agabus (Gaurodytes) melanarius
	.set('45142059',	'45142050')	// Coleoptera Dytiscidae Agabus (Gaurodytes) nebulosus
	.set('4514205A',	'45142050')	// Coleoptera Dytiscidae Agabus (Gaurodytes) paludosus
	.set('4514205B',	'45142050')	// Coleoptera Dytiscidae Agabus (Gaurodytes) striolatus
	.set('4514205C',	'45142050')	// Coleoptera Dytiscidae Agabus (Gaurodytes) unguicularis
// Coleoptera Dytiscidae Rhantus (Nartus)
	.set('45142211',	'45142210')	// Coleoptera Dytiscidae Rhantus (Nartus) grapii
// Coleoptera Dytiscidae Rhantus (Rhantus)
	.set('45142221',	'45142220')	// Coleoptera Dytiscidae Rhantus (Rhantus) bistriatus
	.set('45142222',	'45142220')	// Coleoptera Dytiscidae Rhantus (Rhantus) exsoletus
	.set('45142223',	'45142220')	// Coleoptera Dytiscidae Rhantus (Rhantus) frontalis
	.set('45142224',	'45142220')	// Coleoptera Dytiscidae Rhantus (Rhantus) suturalis
	.set('45142225',	'45142220')	// Coleoptera Dytiscidae Rhantus (Rhantus) suturellus
// Coleoptera Helophoridae Helophorus (Empleurus)
	.set('45330111',	'45330110')	// Coleoptera Helophoridae Helophorus (Empleurus) nubilus
	.set('45330112',	'45330110')	// Coleoptera Helophoridae Helophorus (Empleurus) porculus
	.set('45330113',	'45330110')	// Coleoptera Helophoridae Helophorus (Empleurus) rufipes
// Coleoptera Helophoridae Helophorus (Cyphelophorus)
	.set('45330121',	'45330120')	// Coleoptera Helophoridae Helophorus (Cyphelophorus) tuberculatus
// Coleoptera Helophoridae Helophorus (Trichohelophorus)
	.set('45330131',	'45330130')	// Coleoptera Helophoridae Helophorus (Trichohelophorus) alternans
// Coleoptera Helophoridae Helophorus (Megahelophorus)
	.set('45330141',	'45330140')	// Coleoptera Helophoridae Helophorus (Megahelophorus) aequalis
	.set('45330142',	'45330140')	// Coleoptera Helophoridae Helophorus (Megahelophorus) grandis
// Coleoptera Helophoridae Helophorus (Atracthelophorus)
	.set('45330151',	'45330150')	// Coleoptera Helophoridae Helophorus (Atracthelophorus) arvernicus
	.set('45330152',	'45330150')	// Coleoptera Helophoridae Helophorus (Atracthelophorus) brevipalpis
// Coleoptera Helophoridae Helophorus (Helophorus)
	.set('45330161',	'45330160')	// Coleoptera Helophoridae Helophorus (Helophorus) dorsalis
	.set('45330162',	'45330160')	// Coleoptera Helophoridae Helophorus (Helophorus) flavipes
	.set('45330163',	'45330160')	// Coleoptera Helophoridae Helophorus (Helophorus) fulgidicollis
	.set('45330164',	'45330160')	// Coleoptera Helophoridae Helophorus (Helophorus) granularis
	.set('45330165',	'45330160')	// Coleoptera Helophoridae Helophorus (Helophorus) griseus
	.set('45330166',	'45330160')	// Coleoptera Helophoridae Helophorus (Helophorus) laticollis
	.set('45330167',	'45330160')	// Coleoptera Helophoridae Helophorus (Helophorus) longitarsis
	.set('45330168',	'45330160')	// Coleoptera Helophoridae Helophorus (Helophorus) minutus
	.set('45330169',	'45330160')	// Coleoptera Helophoridae Helophorus (Helophorus) nanus
	.set('4533016A',	'45330160')	// Coleoptera Helophoridae Helophorus (Helophorus) obscurus
	.set('4533016B',	'45330160')	// Coleoptera Helophoridae Helophorus (Helophorus) strigifrons
// Coleoptera Hydrophilidae Laccobius (Laccobius)
	.set('45351411',	'45351410')	// Coleoptera Hydrophilidae Laccobius (Laccobius) colon
	.set('45351412',	'45351410')	// Coleoptera Hydrophilidae Laccobius (Laccobius) minutus
// Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius)
	.set('45351421',	'45351420')	// Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) atratus
	.set('45351422',	'45351420')	// Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) ytenensis
	.set('45351423',	'45351420')	// Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) bipunctatus
	.set('45351425',	'45351420')	// Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) simulatrix
	.set('45351426',	'45351420')	// Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) sinuatus
	.set('45351427',	'45351420')	// Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) striatulus
// Coleoptera Hydrophilidae Berosus (Berosus)
	.set('45352411',	'45352410')	// Coleoptera Hydrophilidae Berosus (Berosus) affinis
	.set('45352412',	'45352410')	// Coleoptera Hydrophilidae Berosus (Berosus) luridus
	.set('45352413',	'45352410')	// Coleoptera Hydrophilidae Berosus (Berosus) signaticollis
// Coleoptera Hydrophilidae Berosus (Enoplurus)
	.set('45352421',	'45352420')	// Coleoptera Hydrophilidae Berosus (Enoplurus) fulvus
// Coleoptera Hydrophilidae Cercyon (Paracercyon)
	.set('45353131',	'45353130')	// Coleoptera Hydrophilidae Cercyon (Paracercyon) analis
// Coleoptera Hydrophilidae Cercyon (Cercyon)
	.set('45353141',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) alpinus
	.set('45353142',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) nigriceps
	.set('45353143',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) bifenestratus
	.set('45353144',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) convexiusculus
	.set('45353145',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) depressus
	.set('45353146',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) granarius
	.set('45353147',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) haemorrhoidalis
	.set('45353148',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) impressus
	.set('45353149',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) laminatus
	.set('4535314A',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) lateralis
	.set('4535314B',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) littoralis
	.set('4535314C',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) marinus
	.set('4535314D',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) melanocephalus
	.set('4535314E',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) obsoletus
	.set('4535314F',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) pygmaeus
	.set('4535314G',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) quisquilius
	.set('4535314H',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) sternalis
	.set('4535314J',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) terminatus
	.set('4535314K',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) tristis
	.set('4535314L',	'45353140')	// Coleoptera Hydrophilidae Cercyon (Cercyon) unipunctatus
// Coleoptera Hydrophilidae Cercyon (Dicyrtocercyon)
	.set('45353151',	'45353150')	// Coleoptera Hydrophilidae Cercyon (Dicyrtocercyon) ustulatus
// Coleoptera Hydraenidae Ochthebius (Asiobates)
	.set('45410121',	'45410120')	// Coleoptera Hydraenidae Ochthebius (Asiobates) auriculatus
	.set('45410122',	'45410120')	// Coleoptera Hydraenidae Ochthebius (Asiobates) bicolon
	.set('45410123',	'45410120')	// Coleoptera Hydraenidae Ochthebius (Asiobates) dilatatus
// Coleoptera Hydraenidae Ochthebius (Homalochthebius)
	.set('45410131',	'45410130')	// Coleoptera Hydraenidae Ochthebius (Homalochthebius) aeneus
	.set('45410132',	'45410130')	// Coleoptera Hydraenidae Ochthebius (Homalochthebius) minimus
	.set('45410133',	'45410130')	// Coleoptera Hydraenidae Ochthebius (Homalochthebius) lejolisii
// Coleoptera Hydraenidae Ochthebius (Hymenodes)
	.set('45410141',	'45410140')	// Coleoptera Hydraenidae Ochthebius (Hymenodes) nanus
	.set('45410142',	'45410140')	// Coleoptera Hydraenidae Ochthebius (Hymenodes) poweri
	.set('45410143',	'45410140')	// Coleoptera Hydraenidae Ochthebius (Hymenodes) punctatus
// Coleoptera Hydraenidae Ochthebius (Ochthebius)
	.set('45410151',	'45410150')	// Coleoptera Hydraenidae Ochthebius (Ochthebius) lenensis
	.set('45410152',	'45410150')	// Coleoptera Hydraenidae Ochthebius (Ochthebius) marinus
	.set('45410153',	'45410150')	// Coleoptera Hydraenidae Ochthebius (Ochthebius) pusillus
	.set('45410154',	'45410150')	// Coleoptera Hydraenidae Ochthebius (Ochthebius) viridis
// Coleoptera Dryopidae Dryops (Dryops)
	.set('45620211',	'45620210')	// Coleoptera Dryopidae Dryops (Dryops) anglicanus
	.set('45620212',	'45620210')	// Coleoptera Dryopidae Dryops (Dryops) auriculatus
	.set('45620213',	'45620210')	// Coleoptera Dryopidae Dryops (Dryops) ernesti
	.set('45620214',	'45620210')	// Coleoptera Dryopidae Dryops (Dryops) griseus
	.set('45620215',	'45620210')	// Coleoptera Dryopidae Dryops (Dryops) luridus
	.set('45620216',	'45620210')	// Coleoptera Dryopidae Dryops (Dryops) striatellus
	.set('45620217',	'45620210')	// Coleoptera Dryopidae Dryops (Dryops) similaris
// Coleoptera Dryopidae Dryops (Yrdops)
	.set('45620221',	'45620220')	// Coleoptera Dryopidae Dryops (Yrdops) nitidulus
// Coleoptera Curculionidae Lixus (Lixus)
	.set('45810111',	'45810110')	// Coleoptera Curculionidae Lixus (Lixus) paraplecticus
// Coleoptera Curculionidae Hypera (Hypera)
	.set('45810211',	'45810210')	// Coleoptera Curculionidae Hypera (Hypera) suspiciosa
// Coleoptera Curculionidae Hypera (Eririnomorphus)
	.set('45810221',	'45810220')	// Coleoptera Curculionidae Hypera (Eririnomorphus) pollux
	.set('45810222',	'45810220')	// Coleoptera Curculionidae Hypera (Eririnomorphus) arundinis
	.set('45810223',	'45810220')	// Coleoptera Curculionidae Hypera (Eririnomorphus) rumicis
// Coleoptera Curculionidae Bagous (Bagous)
	.set('45810631',	'45810630')	// Coleoptera Curculionidae Bagous (Bagous) argillaceus
	.set('45810632',	'45810630')	// Coleoptera Curculionidae Bagous (Bagous) binodulus
	.set('45810633',	'45810630')	// Coleoptera Curculionidae Bagous (Bagous) brevis
	.set('45810634',	'45810630')	// Coleoptera Curculionidae Bagous (Bagous) collignensis
	.set('45810635',	'45810630')	// Coleoptera Curculionidae Bagous (Bagous) czwalinae
	.set('45810636',	'45810630')	// Coleoptera Curculionidae Bagous (Bagous) diglyptus
	.set('45810637',	'45810630')	// Coleoptera Curculionidae Bagous (Bagous) frit
	.set('45810638',	'45810630')	// Coleoptera Curculionidae Bagous (Bagous) limosus
	.set('45810639',	'45810630')	// Coleoptera Curculionidae Bagous (Bagous) longitarsis
	.set('4581063A',	'45810630')	// Coleoptera Curculionidae Bagous (Bagous) lutulosus
	.set('4581063B',	'45810630')	// Coleoptera Curculionidae Bagous (Bagous) nodulosus
	.set('4581063C',	'45810630')	// Coleoptera Curculionidae Bagous (Bagous) subcarinatus
	.set('4581063D',	'45810630')	// Coleoptera Curculionidae Bagous (Bagous) tempestivus
// Coleoptera Curculionidae Bagous (Abagous)
	.set('45810641',	'45810640')	// Coleoptera Curculionidae Bagous (Abagous) glabrirostris
	.set('45810642',	'45810640')	// Coleoptera Curculionidae Bagous (Abagous) lutosus
	.set('45810643',	'45810640')	// Coleoptera Curculionidae Bagous (Abagous) lutulentus
	.set('45810644',	'45810640')	// Coleoptera Curculionidae Bagous (Abagous) puncticollis
	.set('45810645',	'45810640')	// Coleoptera Curculionidae Bagous (Abagous) robustus
// Coleoptera Curculionidae Bagous (Cyprus)
	.set('45810651',	'45810650')	// Coleoptera Curculionidae Bagous (Cyprus) tubulus
// Coleoptera Curculionidae Bagous (Ephimeropus)
	.set('45810661',	'45810660')	// Coleoptera Curculionidae Bagous (Ephimeropus) petro
// Coleoptera Curculionidae Bagous (Hydronomus)
	.set('45810671',	'45810670')	// Coleoptera Curculionidae Bagous (Hydronomus) alismatis
// Diptera Tipulidae Tipula (Schummelia)
	.set('50110321',	'50110320')	// Diptera Tipulidae Tipula (Schummelia) variicornis
	.set('50110322',	'50110320')	// Diptera Tipulidae Tipula (Schummelia) yerburyi
// Diptera Tipulidae Tipula (Savtshenkia)
	.set('50110331',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) alpium
	.set('50110332',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) cheethami
	.set('50110333',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) gimmerthali
	.set('50110334',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) grisescens
	.set('50110335',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) limbata
	.set('50110336',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) confusa
	.set('50110337',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) obsoleta
	.set('50110338',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) pagana
	.set('50110339',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) rufina
	.set('5011033A',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) serrulifera
	.set('5011033B',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) signata
	.set('5011033C',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) staegeri
	.set('5011033D',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) subnodicornis
	.set('5011033Z',	'50110330')	// Diptera Tipulidae Tipula (Savtshenkia) signata group
// Diptera Tipulidae Tipula (Pterelachisus)
	.set('50110351',	'50110350')	// Diptera Tipulidae Tipula (Pterelachisus) pabulina
	.set('50110352',	'50110350')	// Diptera Tipulidae Tipula (Pterelachisus) truncorum
// Diptera Tipulidae Tipula (Beringotipula)
	.set('50110361',	'50110360')	// Diptera Tipulidae Tipula (Beringotipula) unca
// Diptera Tipulidae Tipula (Mediotipula)
	.set('50110371',	'50110370')	// Diptera Tipulidae Tipula (Mediotipula) sarajevensis
	.set('50110372',	'50110370')	// Diptera Tipulidae Tipula (Mediotipula) siebkei
// Diptera Tipulidae Tipula (Lindnerina)
	.set('50110381',	'50110380')	// Diptera Tipulidae Tipula (Lindnerina) bistilata
// Diptera Tipulidae Tipula (Platytipula)
	.set('50110391',	'50110390')	// Diptera Tipulidae Tipula (Platytipula) luteipennis
	.set('50110392',	'50110390')	// Diptera Tipulidae Tipula (Platytipula) melanoceros
// Diptera Tipulidae Tipula (Yamatotipula)
	.set('501103A1',	'501103A0')	// Diptera Tipulidae Tipula (Yamatotipula) coerulescens
	.set('501103A2',	'501103A0')	// Diptera Tipulidae Tipula (Yamatotipula) couckei
	.set('501103A3',	'501103A0')	// Diptera Tipulidae Tipula (Yamatotipula) lateralis
	.set('501103A4',	'501103A0')	// Diptera Tipulidae Tipula (Yamatotipula) marginella
	.set('501103A5',	'501103A0')	// Diptera Tipulidae Tipula (Yamatotipula) montium
	.set('501103A6',	'501103A0')	// Diptera Tipulidae Tipula (Yamatotipula) pruinosa
	.set('501103A7',	'501103A0')	// Diptera Tipulidae Tipula (Yamatotipula) pierrei
	.set('501103AZ',	'501103A0')	// Diptera Tipulidae Tipula (Yamatotipula) montium group
// Diptera Tipulidae Tipula (Tipula)
	.set('501103B1',	'501103B0')	// Diptera Tipulidae Tipula (Tipula) subcunctans
	.set('501103B2',	'501103B0')	// Diptera Tipulidae Tipula (Tipula) oleracea
	.set('501103B3',	'501103B0')	// Diptera Tipulidae Tipula (Tipula) paludosa
// Diptera Tipulidae Tipula (Acutipula)
	.set('501103C1',	'501103C0')	// Diptera Tipulidae Tipula (Acutipula) fulvipennis
	.set('501103C2',	'501103C0')	// Diptera Tipulidae Tipula (Acutipula) luna
	.set('501103C3',	'501103C0')	// Diptera Tipulidae Tipula (Acutipula) maxima
	.set('501103C4',	'501103C0')	// Diptera Tipulidae Tipula (Acutipula) vittata
	.set('501103CZ',	'501103C0')	// Diptera Tipulidae Tipula (Acutipula) maxima group
// Diptera Limoniidae Dicranomyia (Dicranomyia)
	.set('50130211',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) aperta
	.set('50130212',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) autumnalis
	.set('50130213',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) chorea
	.set('50130214',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) consimilis
	.set('50130215',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) didyma
	.set('50130216',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) distendens
	.set('50130217',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) frontalis
	.set('50130218',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) goritiensis
	.set('50130219',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) halterata
	.set('5013021A',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) lucida
	.set('5013021B',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) mitis
	.set('5013021C',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) modesta
	.set('5013021D',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) omissinervis
	.set('5013021E',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) ornata
	.set('5013021F',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) sera
	.set('5013021G',	'50130210')	// Diptera Limoniidae Dicranomyia (Dicranomyia) ventralis
// Diptera Limoniidae Dicranomyia (Glochina)
	.set('50130231',	'50130230')	// Diptera Limoniidae Dicranomyia (Glochina) pauli
	.set('50130232',	'50130230')	// Diptera Limoniidae Dicranomyia (Glochina) sericata
// Diptera Limoniidae Dicranomyia (Idiopyga)
	.set('50130241',	'50130240')	// Diptera Limoniidae Dicranomyia (Idiopyga) danica
	.set('50130242',	'50130240')	// Diptera Limoniidae Dicranomyia (Idiopyga) halterella
	.set('50130243',	'50130240')	// Diptera Limoniidae Dicranomyia (Idiopyga) magnicauda
	.set('50130244',	'50130240')	// Diptera Limoniidae Dicranomyia (Idiopyga) melleicauda
	.set('50130245',	'50130240')	// Diptera Limoniidae Dicranomyia (Idiopyga) nigristigma
	.set('50130246',	'50130240')	// Diptera Limoniidae Dicranomyia (Idiopyga) stigmatica
// Diptera Limoniidae Dicranomyia (Melanolimonia)
	.set('50130251',	'50130250')	// Diptera Limoniidae Dicranomyia (Melanolimonia) caledonica
	.set('50130252',	'50130250')	// Diptera Limoniidae Dicranomyia (Melanolimonia) morio
	.set('50130253',	'50130250')	// Diptera Limoniidae Dicranomyia (Melanolimonia) occidua
	.set('50130254',	'50130250')	// Diptera Limoniidae Dicranomyia (Melanolimonia) rufiventris
	.set('50130255',	'50130250')	// Diptera Limoniidae Dicranomyia (Melanolimonia) stylifera
// Diptera Limoniidae Dicranomyia (Numantia)
	.set('50130261',	'50130260')	// Diptera Limoniidae Dicranomyia (Numantia) fusca
// Diptera Limoniidae Dicranomyia (Sivalimnobia)
	.set('50130271',	'50130270')	// Diptera Limoniidae Dicranomyia (Sivalimnobia) aquosa
// Diptera Limoniidae Antocha (Antocha)
	.set('50130511',	'50130510')	// Diptera Limoniidae Antocha (Antocha) vitripennis
// Diptera Limoniidae Helius (Helius)
	.set('50130912',	'50130910')	// Diptera Limoniidae Helius (Helius) flavus
	.set('50130913',	'50130910')	// Diptera Limoniidae Helius (Helius) hispanicus
	.set('50130914',	'50130910')	// Diptera Limoniidae Helius (Helius) longirostris
	.set('50130915',	'50130910')	// Diptera Limoniidae Helius (Helius) pallirostris
// Diptera Limoniidae Metalimnobia (Metalimnobia)
	.set('50131311',	'50131310')	// Diptera Limoniidae Metalimnobia (Metalimnobia) bifasciata
	.set('50131312',	'50131310')	// Diptera Limoniidae Metalimnobia (Metalimnobia) quadrimaculata
	.set('50131313',	'50131310')	// Diptera Limoniidae Metalimnobia (Metalimnobia) quadrinotata
// Diptera Limoniidae Austrolimnophila (Austrolimnophila)
	.set('50131711',	'50131710')	// Diptera Limoniidae Austrolimnophila (Austrolimnophila) ochracea
// Diptera Limoniidae Dactylolabis (Dactylolabis)
	.set('50131811',	'50131810')	// Diptera Limoniidae Dactylolabis (Dactylolabis) sexmaculata
	.set('50131812',	'50131810')	// Diptera Limoniidae Dactylolabis (Dactylolabis) transversa
// Diptera Limoniidae Limnophila (Limnophila)
	.set('50132051',	'50132050')	// Diptera Limoniidae Limnophila (Limnophila) pictipennis
	.set('50132052',	'50132050')	// Diptera Limoniidae Limnophila (Limnophila) schranki
// Diptera Limoniidae Phylidorea (Phylidorea)
	.set('50132411',	'50132410')	// Diptera Limoniidae Phylidorea (Phylidorea) abdominalis
	.set('50132412',	'50132410')	// Diptera Limoniidae Phylidorea (Phylidorea) ferruginea
	.set('50132413',	'50132410')	// Diptera Limoniidae Phylidorea (Phylidorea) heterogyna
	.set('50132414',	'50132410')	// Diptera Limoniidae Phylidorea (Phylidorea) longicornis
	.set('50132415',	'50132410')	// Diptera Limoniidae Phylidorea (Phylidorea) squalens
// Diptera Limoniidae Phylidorea (Paraphylidorea)
	.set('50132421',	'50132420')	// Diptera Limoniidae Phylidorea (Paraphylidorea) fulvonervosa
// Diptera Limoniidae Neolimnomyia (Brachylimnophila)
	.set('50132511',	'50132510')	// Diptera Limoniidae Neolimnomyia (Brachylimnophila) adjuncta
	.set('50132512',	'50132510')	// Diptera Limoniidae Neolimnomyia (Brachylimnophila) nemoralis
// Diptera Limoniidae Neolimnomyia (Neolimnomyia)
	.set('50132521',	'50132520')	// Diptera Limoniidae Neolimnomyia (Neolimnomyia) batava
	.set('50132522',	'50132520')	// Diptera Limoniidae Neolimnomyia (Neolimnomyia) filata
// Diptera Limoniidae Rhipidia (Rhipidia)
	.set('50132711',	'50132710')	// Diptera Limoniidae Rhipidia (Rhipidia) ctenophora
	.set('50132712',	'50132710')	// Diptera Limoniidae Rhipidia (Rhipidia) maculata
	.set('50132713',	'50132710')	// Diptera Limoniidae Rhipidia (Rhipidia) uniseriata
// Diptera Limoniidae Hexatoma (Hexatoma)
	.set('50132811',	'50132810')	// Diptera Limoniidae Hexatoma (Hexatoma) bicolor
	.set('50132812',	'50132810')	// Diptera Limoniidae Hexatoma (Hexatoma) fuscipennis
// Diptera Limoniidae Gonomyia (Gonomyia)
	.set('50133141',	'50133140')	// Diptera Limoniidae Gonomyia (Gonomyia) bifida
	.set('50133142',	'50133140')	// Diptera Limoniidae Gonomyia (Gonomyia) conoviensis
	.set('50133143',	'50133140')	// Diptera Limoniidae Gonomyia (Gonomyia) dentata
	.set('50133144',	'50133140')	// Diptera Limoniidae Gonomyia (Gonomyia) lucidula
	.set('50133145',	'50133140')	// Diptera Limoniidae Gonomyia (Gonomyia) recta
	.set('50133146',	'50133140')	// Diptera Limoniidae Gonomyia (Gonomyia) simplex
	.set('50133147',	'50133140')	// Diptera Limoniidae Gonomyia (Gonomyia) tenella
	.set('50133148',	'50133140')	// Diptera Limoniidae Gonomyia (Gonomyia) hippocampi
// Diptera Limoniidae Gonomyia (Prolipophleps)
	.set('50133151',	'50133150')	// Diptera Limoniidae Gonomyia (Prolipophleps) abbreviata
// Diptera Limoniidae Gonomyia (Teuchogonomyia)
	.set('50133171',	'50133170')	// Diptera Limoniidae Gonomyia (Teuchogonomyia) edwardsi
// Diptera Limoniidae Ellipteroides (Ellipteroides)
	.set('50133211',	'50133210')	// Diptera Limoniidae Ellipteroides (Ellipteroides) lateralis
// Diptera Limoniidae Ellipteroides (Protogonomyia)
	.set('50133221',	'50133220')	// Diptera Limoniidae Ellipteroides (Protogonomyia) alboscutellatus
	.set('50133222',	'50133220')	// Diptera Limoniidae Ellipteroides (Protogonomyia) limbatus
// Diptera Limoniidae Idiocera (Idiocera)
	.set('50133311',	'50133310')	// Diptera Limoniidae Idiocera (Idiocera) bradleyi
	.set('50133313',	'50133310')	// Diptera Limoniidae Idiocera (Idiocera) punctata
	.set('50133314',	'50133310')	// Diptera Limoniidae Idiocera (Idiocera) sexguttata
	.set('50133315',	'50133310')	// Diptera Limoniidae Idiocera (Idiocera) sziladyi
// Diptera Limoniidae Hoplolabis (Parilisia)
	.set('50133411',	'50133410')	// Diptera Limoniidae Hoplolabis (Parilisia) areolata
	.set('50133412',	'50133410')	// Diptera Limoniidae Hoplolabis (Parilisia) vicina
	.set('50133413',	'50133410')	// Diptera Limoniidae Hoplolabis (Parilisia) yezoana
// Diptera Limoniidae Rhabdomastix (Sacandaga)
	.set('50133621',	'50133620')	// Diptera Limoniidae Rhabdomastix (Sacandaga) edwardsi
	.set('50133622',	'50133620')	// Diptera Limoniidae Rhabdomastix (Sacandaga) laeta
// Diptera Limoniidae Rhabdomastix (Lurdia)
	.set('50133631',	'50133630')	// Diptera Limoniidae Rhabdomastix (Lurdia) inclinata
// Diptera Limoniidae Cheilotrichia (Cheilotrichia)
	.set('50133911',	'50133910')	// Diptera Limoniidae Cheilotrichia (Cheilotrichia) imbuta
// Diptera Limoniidae Cheilotrichia (Empeda)
	.set('50133921',	'50133920')	// Diptera Limoniidae Cheilotrichia (Empeda) cinerascens
// Diptera Limoniidae Erioptera (Erioptera)
	.set('50134132',	'50134130')	// Diptera Limoniidae Erioptera (Erioptera) divisa
	.set('50134133',	'50134130')	// Diptera Limoniidae Erioptera (Erioptera) fuscipennis
	.set('50134134',	'50134130')	// Diptera Limoniidae Erioptera (Erioptera) fusculenta
	.set('50134135',	'50134130')	// Diptera Limoniidae Erioptera (Erioptera) flavata
	.set('50134136',	'50134130')	// Diptera Limoniidae Erioptera (Erioptera) griseipennis
	.set('50134137',	'50134130')	// Diptera Limoniidae Erioptera (Erioptera) limbata
	.set('50134138',	'50134130')	// Diptera Limoniidae Erioptera (Erioptera) lutea
	.set('50134139',	'50134130')	// Diptera Limoniidae Erioptera (Erioptera) meijerei
	.set('5013413A',	'50134130')	// Diptera Limoniidae Erioptera (Erioptera) nielseni
	.set('5013413B',	'50134130')	// Diptera Limoniidae Erioptera (Erioptera) verralli
	.set('5013413C',	'50134130')	// Diptera Limoniidae Erioptera (Erioptera) sordida
	.set('5013413D',	'50134130')	// Diptera Limoniidae Erioptera (Erioptera) squalida
	.set('5013413E',	'50134130')	// Diptera Limoniidae Erioptera (Erioptera) flavissima
// Diptera Limoniidae Erioptera (Mesocyphona)
	.set('50134161',	'50134160')	// Diptera Limoniidae Erioptera (Mesocyphona) bivittata
// Diptera Limoniidae Symplecta (Symplecta)
	.set('50134311',	'50134310')	// Diptera Limoniidae Symplecta (Symplecta) hybrida
	.set('50134312',	'50134310')	// Diptera Limoniidae Symplecta (Symplecta) novaezemblae
	.set('50134313',	'50134310')	// Diptera Limoniidae Symplecta (Symplecta) chosenensis
// Diptera Limoniidae Symplecta (Psiloconopa)
	.set('50134321',	'50134320')	// Diptera Limoniidae Symplecta (Psiloconopa) meigeni
	.set('50134322',	'50134320')	// Diptera Limoniidae Symplecta (Psiloconopa) pusilla
	.set('50134323',	'50134320')	// Diptera Limoniidae Symplecta (Psiloconopa) stictica
// Diptera Limoniidae Ormosia (Ormosia)
	.set('50134811',	'50134810')	// Diptera Limoniidae Ormosia (Ormosia) aciculata
	.set('50134812',	'50134810')	// Diptera Limoniidae Ormosia (Ormosia) albitibia
	.set('50134813',	'50134810')	// Diptera Limoniidae Ormosia (Ormosia) bicornis
	.set('50134814',	'50134810')	// Diptera Limoniidae Ormosia (Ormosia) depilata
	.set('50134815',	'50134810')	// Diptera Limoniidae Ormosia (Ormosia) hederae
	.set('50134816',	'50134810')	// Diptera Limoniidae Ormosia (Ormosia) lineata
	.set('50134817',	'50134810')	// Diptera Limoniidae Ormosia (Ormosia) nodulosa
	.set('50134818',	'50134810')	// Diptera Limoniidae Ormosia (Ormosia) pseudosimilis
	.set('50134819',	'50134810')	// Diptera Limoniidae Ormosia (Ormosia) staegeriana
	.set('5013481A',	'50134810')	// Diptera Limoniidae Ormosia (Ormosia) fascipennis
// Diptera Limoniidae Tasiocera (Dasymolophilus)
	.set('50135121',	'50135120')	// Diptera Limoniidae Tasiocera (Dasymolophilus) collini
	.set('50135122',	'50135120')	// Diptera Limoniidae Tasiocera (Dasymolophilus) fuscescens
	.set('50135123',	'50135120')	// Diptera Limoniidae Tasiocera (Dasymolophilus) jenkinsoni
	.set('50135125',	'50135120')	// Diptera Limoniidae Tasiocera (Dasymolophilus) murina
	.set('50135126',	'50135120')	// Diptera Limoniidae Tasiocera (Dasymolophilus) muscula
	.set('50135127',	'50135120')	// Diptera Limoniidae Tasiocera (Dasymolophilus) robusta
// Diptera Limoniidae Molophilus (Molophilus)
	.set('50135331',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) appendiculatus
	.set('50135332',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) ater
	.set('50135333',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) bifidus
	.set('50135334',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) bihamatus
	.set('50135335',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) cinereifrons
	.set('50135336',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) corniger
	.set('50135337',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) curvatus
	.set('50135338',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) czizeki
	.set('50135339',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) flavus
	.set('5013533A',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) griseus
	.set('5013533B',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) lackschewitzianus
	.set('5013533C',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) medius
	.set('5013533D',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) niger
	.set('5013533E',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) obscurus
	.set('5013533F',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) occultus
	.set('5013533G',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) ochraceus
	.set('5013533H',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) crassipygus
	.set('5013533J',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) pleuralis
	.set('5013533K',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) propinquus
	.set('5013533L',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) pusillus
	.set('5013533M',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) serpentiger
	.set('5013533N',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) undulatus
	.set('5013533P',	'50135330')	// Diptera Limoniidae Molophilus (Molophilus) variispinus
// Diptera Limoniidae Paradelphomyia (Oxyrhiza)
	.set('50135411',	'50135410')	// Diptera Limoniidae Paradelphomyia (Oxyrhiza) dalei
	.set('50135412',	'50135410')	// Diptera Limoniidae Paradelphomyia (Oxyrhiza) ecalcarata
	.set('50135413',	'50135410')	// Diptera Limoniidae Paradelphomyia (Oxyrhiza) fuscula
	.set('50135414',	'50135410')	// Diptera Limoniidae Paradelphomyia (Oxyrhiza) nielseni
	.set('50135415',	'50135410')	// Diptera Limoniidae Paradelphomyia (Oxyrhiza) senilis
// Diptera Limoniidae Epiphragma (Epiphragma)
	.set('50135711',	'50135710')	// Diptera Limoniidae Epiphragma (Epiphragma) ocellare
// Diptera Pediciidae Pedicia (Pedicia)
	.set('50140111',	'50140110')	// Diptera Pediciidae Pedicia (Pedicia) rivosa
// Diptera Pediciidae Pedicia (Crunobia)
	.set('50140121',	'50140120')	// Diptera Pediciidae Pedicia (Crunobia) littoralis
	.set('50140122',	'50140120')	// Diptera Pediciidae Pedicia (Crunobia) straminea
// Diptera Pediciidae Pedicia (Amalopsis)
	.set('50140131',	'50140130')	// Diptera Pediciidae Pedicia (Amalopsis) occulta
// Diptera Pediciidae Dicranota (Dicranota)
	.set('50140511',	'50140510')	// Diptera Pediciidae Dicranota (Dicranota) bimaculata
	.set('50140512',	'50140510')	// Diptera Pediciidae Dicranota (Dicranota) guerini
// Diptera Pediciidae Dicranota (Paradicranota)
	.set('50140522',	'50140520')	// Diptera Pediciidae Dicranota (Paradicranota) gracilipes
	.set('50140523',	'50140520')	// Diptera Pediciidae Dicranota (Paradicranota) pavida
	.set('50140524',	'50140520')	// Diptera Pediciidae Dicranota (Paradicranota) robusta
	.set('50140525',	'50140520')	// Diptera Pediciidae Dicranota (Paradicranota) subtilis
	.set('50140526',	'50140520')	// Diptera Pediciidae Dicranota (Paradicranota) simulans
// Diptera Pediciidae Dicranota (Ludicia)
	.set('50140531',	'50140530')	// Diptera Pediciidae Dicranota (Ludicia) claripennis
	.set('50140532',	'50140530')	// Diptera Pediciidae Dicranota (Ludicia) lucidipennis
// Diptera Pediciidae Dicranota (Rhaphidolabis)
	.set('50140541',	'50140540')	// Diptera Pediciidae Dicranota (Rhaphidolabis) exclusa
// Diptera Pediciidae Tricyphona (Tricyphona)
	.set('50140611',	'50140610')	// Diptera Pediciidae Tricyphona (Tricyphona) immaculata
	.set('50140612',	'50140610')	// Diptera Pediciidae Tricyphona (Tricyphona) schummeli
	.set('50140613',	'50140610')	// Diptera Pediciidae Tricyphona (Tricyphona) unicolor
// Diptera Psychodidae Pericoma (Pericoma)
	.set('50210231',	'50210230')	// Diptera Psychodidae Pericoma (Pericoma) blandula
	.set('50210232',	'50210230')	// Diptera Psychodidae Pericoma (Pericoma) calcilega
	.set('50210233',	'50210230')	// Diptera Psychodidae Pericoma (Pericoma) diversa
	.set('50210234',	'50210230')	// Diptera Psychodidae Pericoma (Pericoma) exquisita
	.set('50210235',	'50210230')	// Diptera Psychodidae Pericoma (Pericoma) fallax
	.set('50210236',	'50210230')	// Diptera Psychodidae Pericoma (Pericoma) neoblandula
	.set('50210237',	'50210230')	// Diptera Psychodidae Pericoma (Pericoma) pseudoexquisita
	.set('50210238',	'50210230')	// Diptera Psychodidae Pericoma (Pericoma) rivularis
	.set('50210239',	'50210230')	// Diptera Psychodidae Pericoma (Pericoma) tonnoiri
	.set('5021023A',	'50210230')	// Diptera Psychodidae Pericoma (Pericoma) trifasciata
// Diptera Psychodidae Pericoma (Pneumia)
	.set('50210251',	'50210250')	// Diptera Psychodidae Pericoma (Pneumia) canescens
	.set('50210252',	'50210250')	// Diptera Psychodidae Pericoma (Pneumia) compta
	.set('50210253',	'50210250')	// Diptera Psychodidae Pericoma (Pneumia) crispi
	.set('50210254',	'50210250')	// Diptera Psychodidae Pericoma (Pneumia) extricata
	.set('50210255',	'50210250')	// Diptera Psychodidae Pericoma (Pneumia) gracilis
	.set('50210256',	'50210250')	// Diptera Psychodidae Pericoma (Pneumia) mutua
	.set('50210257',	'50210250')	// Diptera Psychodidae Pericoma (Pneumia) nubila
	.set('50210258',	'50210250')	// Diptera Psychodidae Pericoma (Pneumia) palustris
	.set('50210259',	'50210250')	// Diptera Psychodidae Pericoma (Pneumia) pilularia
	.set('5021025A',	'50210250')	// Diptera Psychodidae Pericoma (Pneumia) sziladyi
	.set('5021025B',	'50210250')	// Diptera Psychodidae Pericoma (Pneumia) trivialis
	.set('5021025Z',	'50210250')	// Diptera Psychodidae Pericoma trivialis group
// Diptera Psychodidae Pericoma (Ulomyia)
	.set('50210271',	'50210270')	// Diptera Psychodidae Pericoma (Ulomyia) cognata
	.set('50210272',	'50210270')	// Diptera Psychodidae Pericoma (Ulomyia) fuliginosa
// Diptera Psychodidae Atrichobrunettia (Mirousiella)
	.set('50211511',	'50211510')	// Diptera Psychodidae Atrichobrunettia (Mirousiella) angustipennis
// Diptera Chaoboridae Chaoborus (Chaoborus)
	.set('50320111',	'50320110')	// Diptera Chaoboridae Chaoborus (Chaoborus) crystallinus
	.set('50320112',	'50320110')	// Diptera Chaoboridae Chaoborus (Chaoborus) flavicans
	.set('50320113',	'50320110')	// Diptera Chaoboridae Chaoborus (Chaoborus) obscuripes
// Diptera Chaoboridae Chaoborus (Peusomyia)
	.set('50320121',	'50320120')	// Diptera Chaoboridae Chaoborus (Peusomyia) pallidus
// Diptera Culicidae Anopheles (Anopheles)
	.set('50330111',	'50330110')	// Diptera Culicidae Anopheles (Anopheles) algeriensis
	.set('50330112',	'50330110')	// Diptera Culicidae Anopheles (Anopheles) atroparvus
	.set('50330113',	'50330110')	// Diptera Culicidae Anopheles (Anopheles) claviger
	.set('50330114',	'50330110')	// Diptera Culicidae Anopheles (Anopheles) messeae
	.set('50330115',	'50330110')	// Diptera Culicidae Anopheles (Anopheles) plumbeus
	.set('50330116',	'50330110')	// Diptera Culicidae Anopheles (Anopheles) daciae
	.set('5033011Y',	'50330110')	// Diptera Culicidae Anopheles (Anopheles) algeriensis group
	.set('5033011Z',	'50330110')	// Diptera Culicidae Anopheles (Anopheles) atroparvus group
// Diptera Culicidae Aedes (Aedimorphus)
	.set('50330651',	'50330650')	// Diptera Culicidae Aedes (Aedimorphus) vexans
// Diptera Culicidae Aedes (Aedes)
	.set('50330661',	'50330660')	// Diptera Culicidae Aedes (Aedes) cinereus
// Diptera Culicidae Ochlerotatus (Finlaya)
	.set('50330711',	'50330710')	// Diptera Culicidae Ochlerotatus (Finlaya) geniculatus
// Diptera Culicidae Ochlerotatus (Rusticoides)
	.set('50330721',	'50330720')	// Diptera Culicidae Ochlerotatus (Rusticoides) rusticus
// Diptera Culicidae Ochlerotatus (Ochlerotatus)
	.set('50330731',	'50330730')	// Diptera Culicidae Ochlerotatus (Ochlerotatus) annulipes
	.set('50330732',	'50330730')	// Diptera Culicidae Ochlerotatus (Ochlerotatus) cantans
	.set('50330733',	'50330730')	// Diptera Culicidae Ochlerotatus (Ochlerotatus) caspius
	.set('50330734',	'50330730')	// Diptera Culicidae Ochlerotatus (Ochlerotatus) communis
	.set('50330735',	'50330730')	// Diptera Culicidae Ochlerotatus (Ochlerotatus) detritus
	.set('50330736',	'50330730')	// Diptera Culicidae Ochlerotatus (Ochlerotatus) dorsalis
	.set('50330737',	'50330730')	// Diptera Culicidae Ochlerotatus (Ochlerotatus) flavescens
	.set('50330738',	'50330730')	// Diptera Culicidae Ochlerotatus (Ochlerotatus) leucomelas
	.set('50330739',	'50330730')	// Diptera Culicidae Ochlerotatus (Ochlerotatus) punctor
	.set('5033073A',	'50330730')	// Diptera Culicidae Ochlerotatus (Ochlerotatus) sticticus
// Diptera Culicidae Culiseta (Culiseta)
	.set('50331111',	'50331110')	// Diptera Culicidae Culiseta (Culiseta) alaskaensis
	.set('50331112',	'50331110')	// Diptera Culicidae Culiseta (Culiseta) annulata
	.set('50331113',	'50331110')	// Diptera Culicidae Culiseta (Culiseta) subochrea
// Diptera Culicidae Culiseta (Culicella)
	.set('50331121',	'50331120')	// Diptera Culicidae Culiseta (Culicella) fumipennis
	.set('50331122',	'50331120')	// Diptera Culicidae Culiseta (Culicella) litorea
	.set('50331123',	'50331120')	// Diptera Culicidae Culiseta (Culicella) morsitans
// Diptera Culicidae Culiseta (Allotheobaldia)
	.set('50331131',	'50331130')	// Diptera Culicidae Culiseta (Allotheobaldia) longiareolata
// Diptera Culicidae Culex (Barraudius)
	.set('50331411',	'50331410')	// Diptera Culicidae Culex (Barraudius) modestus
// Diptera Culicidae Culex (Neoculex)
	.set('50331421',	'50331420')	// Diptera Culicidae Culex (Neoculex) territans
// Diptera Culicidae Culex (Culex)
	.set('50331431',	'50331430')	// Diptera Culicidae Culex (Culex) pipiens
	.set('50331432',	'50331430')	// Diptera Culicidae Culex (Culex) torrentium
// Diptera Ceratopogonidae Forcipomyia (Caloforcipomyia)
	.set('50350121',	'50350120')	// Diptera Ceratopogonidae Forcipomyia (Caloforcipomyia) glauca
// Diptera Ceratopogonidae Forcipomyia (Forcipomyia)
	.set('50350131',	'50350130')	// Diptera Ceratopogonidae Forcipomyia (Forcipomyia) bipunctata
	.set('50350133',	'50350130')	// Diptera Ceratopogonidae Forcipomyia (Forcipomyia) brevipennis
	.set('50350134',	'50350130')	// Diptera Ceratopogonidae Forcipomyia (Forcipomyia) ciliata
	.set('50350135',	'50350130')	// Diptera Ceratopogonidae Forcipomyia (Forcipomyia) kaltenbachii
	.set('50350136',	'50350130')	// Diptera Ceratopogonidae Forcipomyia (Forcipomyia) myrmecophila
	.set('50350137',	'50350130')	// Diptera Ceratopogonidae Forcipomyia (Forcipomyia) nigra
	.set('50350138',	'50350130')	// Diptera Ceratopogonidae Forcipomyia (Forcipomyia) costata
	.set('50350139',	'50350130')	// Diptera Ceratopogonidae Forcipomyia (Forcipomyia) pulchrithorax
	.set('5035013A',	'50350130')	// Diptera Ceratopogonidae Forcipomyia (Forcipomyia) radicicola
	.set('5035013B',	'50350130')	// Diptera Ceratopogonidae Forcipomyia (Forcipomyia) sphagnophila
	.set('5035013C',	'50350130')	// Diptera Ceratopogonidae Forcipomyia (Forcipomyia) tenuisquama
	.set('5035013D',	'50350130')	// Diptera Ceratopogonidae Forcipomyia (Forcipomyia) crassipes
// Diptera Ceratopogonidae Forcipomyia (Microhelea)
	.set('50350151',	'50350150')	// Diptera Ceratopogonidae Forcipomyia (Microhelea) fuliginosa
// Diptera Ceratopogonidae Forcipomyia (Pterobosca)
	.set('50350161',	'50350160')	// Diptera Ceratopogonidae Forcipomyia (Pterobosca) paludis
// Diptera Ceratopogonidae Forcipomyia (Synthyridomyia)
	.set('50350171',	'50350170')	// Diptera Ceratopogonidae Forcipomyia (Synthyridomyia) murina
// Diptera Ceratopogonidae Forcipomyia (Thyridomyia)
	.set('50350181',	'50350180')	// Diptera Ceratopogonidae Forcipomyia (Thyridomyia) frutetorum
	.set('50350182',	'50350180')	// Diptera Ceratopogonidae Forcipomyia (Thyridomyia) monilicornis
	.set('50350183',	'50350180')	// Diptera Ceratopogonidae Forcipomyia (Thyridomyia) rugosa
// Diptera Ceratopogonidae Forcipomyia (Trichohelea)
	.set('50350191',	'50350190')	// Diptera Ceratopogonidae Forcipomyia (Trichohelea) eques
	.set('50350192',	'50350190')	// Diptera Ceratopogonidae Forcipomyia (Trichohelea) tonnoiri
// Diptera Ceratopogonidae Forcipomyia (Panhelea)
	.set('503501A1',	'503501A0')	// Diptera Ceratopogonidae Forcipomyia (Panhelea) brevicubitus
// Diptera Ceratopogonidae Forcipomyia (Euprojoannisia)
	.set('503501B1',	'503501B0')	// Diptera Ceratopogonidae Forcipomyia (Euprojoannisia) alacris
	.set('503501B2',	'503501B0')	// Diptera Ceratopogonidae Forcipomyia (Euprojoannisia) palustris
	.set('503501B3',	'503501B0')	// Diptera Ceratopogonidae Forcipomyia (Euprojoannisia) phlebotomoides
	.set('503501B4',	'503501B0')	// Diptera Ceratopogonidae Forcipomyia (Euprojoannisia) titillans
// Diptera Ceratopogonidae Atrichopogon (Atrichopogon)
	.set('50351311',	'50351310')	// Diptera Ceratopogonidae Atrichopogon (Atrichopogon) aethiops
	.set('50351313',	'50351310')	// Diptera Ceratopogonidae Atrichopogon (Atrichopogon) brunnipes
	.set('50351314',	'50351310')	// Diptera Ceratopogonidae Atrichopogon (Atrichopogon) fuscus
	.set('50351317',	'50351310')	// Diptera Ceratopogonidae Atrichopogon (Atrichopogon) minutus
	.set('50351318',	'50351310')	// Diptera Ceratopogonidae Atrichopogon (Atrichopogon) pavidus
// Diptera Ceratopogonidae Atrichopogon (Meloehelea)
	.set('50351331',	'50351330')	// Diptera Ceratopogonidae Atrichopogon (Meloehelea) winnertzi
	.set('50351332',	'50351330')	// Diptera Ceratopogonidae Atrichopogon (Meloehelea) oedemerarum
	.set('50351333',	'50351330')	// Diptera Ceratopogonidae Atrichopogon (Meloehelea) lucorum
// Diptera Ceratopogonidae Atrichopogon (Lophomyidium)
	.set('50351341',	'50351340')	// Diptera Ceratopogonidae Atrichopogon (Lophomyidium) rostratus
// Diptera Ceratopogonidae Atrichopogon (Psammopogon)
	.set('50351352',	'50351350')	// Diptera Ceratopogonidae Atrichopogon (Psammopogon) muelleri
// Diptera Ceratopogonidae Atrichopogon (Psilokempia)
	.set('50351361',	'50351360')	// Diptera Ceratopogonidae Atrichopogon (Psilokempia) appendiculatus
	.set('50351362',	'50351360')	// Diptera Ceratopogonidae Atrichopogon (Psilokempia) forcipatus
// Diptera Ceratopogonidae Dasyhelea (Dasyhelea)
	.set('50351621',	'50351620')	// Diptera Ceratopogonidae Dasyhelea (Dasyhelea) bensoni
	.set('50351622',	'50351620')	// Diptera Ceratopogonidae Dasyhelea (Dasyhelea) dufouri
	.set('50351623',	'50351620')	// Diptera Ceratopogonidae Dasyhelea (Dasyhelea) flavifrons
	.set('50351624',	'50351620')	// Diptera Ceratopogonidae Dasyhelea (Dasyhelea) saxicola
// Diptera Ceratopogonidae Dasyhelea (Dicryptoscena)
	.set('50351632',	'50351630')	// Diptera Ceratopogonidae Dasyhelea (Dicryptoscena) modesta
	.set('50351633',	'50351630')	// Diptera Ceratopogonidae Dasyhelea (Dicryptoscena) notata
// Diptera Ceratopogonidae Dasyhelea (Prokempia)
	.set('50351641',	'50351640')	// Diptera Ceratopogonidae Dasyhelea (Prokempia) flaviventris
	.set('50351642',	'50351640')	// Diptera Ceratopogonidae Dasyhelea (Prokempia) biunguis
// Diptera Ceratopogonidae Dasyhelea (Pseudoculicoides)
	.set('50351651',	'50351650')	// Diptera Ceratopogonidae Dasyhelea (Pseudoculicoides) corinneae
	.set('50351652',	'50351650')	// Diptera Ceratopogonidae Dasyhelea (Pseudoculicoides) flavoscutellata
// Diptera Ceratopogonidae Dasyhelea (Sebessia)
	.set('50351661',	'50351660')	// Diptera Ceratopogonidae Dasyhelea (Sebessia) acuminata
	.set('50351662',	'50351660')	// Diptera Ceratopogonidae Dasyhelea (Sebessia) holosericea
// Diptera Ceratopogonidae Culicoides (Avaritia)
	.set('50352111',	'50352110')	// Diptera Ceratopogonidae Culicoides (Avaritia) chiopterus
	.set('50352112',	'50352110')	// Diptera Ceratopogonidae Culicoides (Avaritia) dewulfi
	.set('50352113',	'50352110')	// Diptera Ceratopogonidae Culicoides (Avaritia) obsoletus
	.set('50352114',	'50352110')	// Diptera Ceratopogonidae Culicoides (Avaritia) scoticus
// Diptera Ceratopogonidae Culicoides (Beltranmyia)
	.set('50352121',	'50352120')	// Diptera Ceratopogonidae Culicoides (Beltranmyia) circumscriptus
	.set('50352122',	'50352120')	// Diptera Ceratopogonidae Culicoides (Beltranmyia) manchuriensis
	.set('50352123',	'50352120')	// Diptera Ceratopogonidae Culicoides (Beltranmyia) salinarius
// Diptera Ceratopogonidae Culicoides (Culicoides)
	.set('50352131',	'50352130')	// Diptera Ceratopogonidae Culicoides (Culicoides) delta
	.set('50352132',	'50352130')	// Diptera Ceratopogonidae Culicoides (Culicoides) fagineus
	.set('50352133',	'50352130')	// Diptera Ceratopogonidae Culicoides (Culicoides) grisescens
	.set('50352134',	'50352130')	// Diptera Ceratopogonidae Culicoides (Culicoides) newsteadi
	.set('50352135',	'50352130')	// Diptera Ceratopogonidae Culicoides (Culicoides) impunctatus
	.set('50352137',	'50352130')	// Diptera Ceratopogonidae Culicoides (Culicoides) pulicaris
	.set('50352138',	'50352130')	// Diptera Ceratopogonidae Culicoides (Culicoides) punctatus
// Diptera Ceratopogonidae Culicoides (Silvaticulicoides)
	.set('50352141',	'50352140')	// Diptera Ceratopogonidae Culicoides (Silvaticulicoides) achrayi
	.set('50352142',	'50352140')	// Diptera Ceratopogonidae Culicoides (Silvaticulicoides) fascipennis
	.set('50352143',	'50352140')	// Diptera Ceratopogonidae Culicoides (Silvaticulicoides) pallidicornis
	.set('50352144',	'50352140')	// Diptera Ceratopogonidae Culicoides (Silvaticulicoides) picturatus
	.set('50352145',	'50352140')	// Diptera Ceratopogonidae Culicoides (Silvaticulicoides) subfasciipennis
// Diptera Ceratopogonidae Culicoides (Monoculicoides)
	.set('50352151',	'50352150')	// Diptera Ceratopogonidae Culicoides (Monoculicoides) nubeculosus
	.set('50352152',	'50352150')	// Diptera Ceratopogonidae Culicoides (Monoculicoides) parroti
	.set('50352153',	'50352150')	// Diptera Ceratopogonidae Culicoides (Monoculicoides) puncticollis
	.set('50352154',	'50352150')	// Diptera Ceratopogonidae Culicoides (Monoculicoides) riethi
	.set('50352155',	'50352150')	// Diptera Ceratopogonidae Culicoides (Monoculicoides) stigma
// Diptera Ceratopogonidae Culicoides (Oecacta)
	.set('50352162',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) albicans
	.set('50352163',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) brunnicans
	.set('50352164',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) cataneii
	.set('50352165',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) duddingstoni
	.set('50352167',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) furcillatus
	.set('50352168',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) heliophilus
	.set('50352169',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) kibunensis
	.set('5035216A',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) maritimus
	.set('5035216B',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) minutissimus
	.set('5035216C',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) alazanicus
	.set('5035216D',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) festivipennis
	.set('5035216E',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) poperinghensis
	.set('5035216F',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) griseidorsum
	.set('5035216G',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) simulator
	.set('5035216H',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) clintoni
	.set('5035216J',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) vexans
	.set('5035216K',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) cameroni
	.set('5035216L',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) reconditus
	.set('5035216M',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) segnis
	.set('5035216N',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) tbilisicus
	.set('5035216P',	'50352160')	// Diptera Ceratopogonidae Culicoides (Oecacta) clastrieri
// Diptera Ceratopogonidae Stilobezzia (Acanthohelea)
	.set('50353812',	'50353810')	// Diptera Ceratopogonidae Stilobezzia (Acanthohelea) gracilis
	.set('50353813',	'50353810')	// Diptera Ceratopogonidae Stilobezzia (Acanthohelea) lutacea
	.set('50353814',	'50353810')	// Diptera Ceratopogonidae Stilobezzia (Acanthohelea) ochracea
// Diptera Ceratopogonidae Stilobezzia (Stilobezzia)
	.set('50353821',	'50353820')	// Diptera Ceratopogonidae Stilobezzia (Stilobezzia) flavirostris
// Diptera Ceratopogonidae Bezzia (Bezzia)
	.set('50354621',	'50354620')	// Diptera Ceratopogonidae Bezzia (Bezzia) coracina
	.set('50354622',	'50354620')	// Diptera Ceratopogonidae Bezzia (Bezzia) decincta
	.set('50354623',	'50354620')	// Diptera Ceratopogonidae Bezzia (Bezzia) flavicornis
	.set('50354624',	'50354620')	// Diptera Ceratopogonidae Bezzia (Bezzia) nigritula
	.set('50354625',	'50354620')	// Diptera Ceratopogonidae Bezzia (Bezzia) nobilis
	.set('50354626',	'50354620')	// Diptera Ceratopogonidae Bezzia (Bezzia) ornata
	.set('50354627',	'50354620')	// Diptera Ceratopogonidae Bezzia (Bezzia) pygmaea
	.set('50354628',	'50354620')	// Diptera Ceratopogonidae Bezzia (Bezzia) winnertziana
// Diptera Ceratopogonidae Bezzia (Homobezzia)
	.set('50354631',	'50354630')	// Diptera Ceratopogonidae Bezzia (Homobezzia) annulipes
	.set('50354632',	'50354630')	// Diptera Ceratopogonidae Bezzia (Homobezzia) bicolor
	.set('50354633',	'50354630')	// Diptera Ceratopogonidae Bezzia (Homobezzia) circumdata
	.set('50354634',	'50354630')	// Diptera Ceratopogonidae Bezzia (Homobezzia) fascispinosa
	.set('50354635',	'50354630')	// Diptera Ceratopogonidae Bezzia (Homobezzia) leucogaster
	.set('50354636',	'50354630')	// Diptera Ceratopogonidae Bezzia (Homobezzia) multiannulata
	.set('50354637',	'50354630')	// Diptera Ceratopogonidae Bezzia (Homobezzia) taeniata
// Diptera Ceratopogonidae Bezzia (Pygobezzia)
	.set('50354641',	'50354640')	// Diptera Ceratopogonidae Bezzia (Pygobezzia) calceata
// Diptera Ceratopogonidae Brachypogon (Isohelea)
	.set('50354911',	'50354910')	// Diptera Ceratopogonidae Brachypogon (Isohelea) nitidula
	.set('50354912',	'50354910')	// Diptera Ceratopogonidae Brachypogon (Isohelea) perpusilla
	.set('50354913',	'50354910')	// Diptera Ceratopogonidae Brachypogon (Isohelea) sociabilis
// Diptera Simuliidae Simulium (Hellichiella)
	.set('50360311',	'50360310')	// Diptera Simuliidae Simulium (Hellichiella) latipes
// Diptera Simuliidae Simulium (Nevermannia)
	.set('50360321',	'50360320')	// Diptera Simuliidae Simulium (Nevermannia) angustitarse
	.set('50360322',	'50360320')	// Diptera Simuliidae Simulium (Nevermannia) armoricanum
	.set('50360323',	'50360320')	// Diptera Simuliidae Simulium (Nevermannia) costatum
	.set('50360324',	'50360320')	// Diptera Simuliidae Simulium (Nevermannia) cryophilum
	.set('50360325',	'50360320')	// Diptera Simuliidae Simulium (Nevermannia) dunfellense
	.set('50360327',	'50360320')	// Diptera Simuliidae Simulium (Nevermannia) lundstromi
	.set('50360328',	'50360320')	// Diptera Simuliidae Simulium (Nevermannia) naturale
	.set('50360329',	'50360320')	// Diptera Simuliidae Simulium (Nevermannia) urbanum
	.set('5036032A',	'50360320')	// Diptera Simuliidae Simulium (Nevermannia) juxtacrenobium
	.set('5036032B',	'50360320')	// Diptera Simuliidae Simulium (Nevermannia) vernum
	.set('5036032X',	'50360320')	// Diptera Simuliidae Simulium (Nevermannia) vernum group
	.set('5036032Y',	'50360320')	// Diptera Simuliidae Simulium (Nevermannia) angustitarse group
	.set('5036032Z',	'50360320')	// Diptera Simuliidae Simulium (Nevermannia) cryophilum group
// Diptera Simuliidae Simulium (Eusimulium)
	.set('50360341',	'50360340')	// Diptera Simuliidae Simulium (Eusimulium) angustipes
	.set('50360342',	'50360340')	// Diptera Simuliidae Simulium (Eusimulium) aureum
	.set('50360343',	'50360340')	// Diptera Simuliidae Simulium (Eusimulium) velutinum
	.set('5036034Z',	'50360340')	// Diptera Simuliidae Simulium (Eusimulium) aureum group
// Diptera Simuliidae Simulium (Wilhelmia)
	.set('50360351',	'50360350')	// Diptera Simuliidae Simulium (Wilhelmia) equinum
	.set('50360352',	'50360350')	// Diptera Simuliidae Simulium (Wilhelmia) lineatum
	.set('50360353',	'50360350')	// Diptera Simuliidae Simulium (Wilhelmia) pseudequinum
// Diptera Simuliidae Simulium (Boophthora)
	.set('50360361',	'50360360')	// Diptera Simuliidae Simulium (Boophthora) erythrocephalum
// Diptera Simuliidae Simulium (Simulium)
	.set('50360381',	'50360380')	// Diptera Simuliidae Simulium (Simulium) argyreatum
	.set('50360382',	'50360380')	// Diptera Simuliidae Simulium (Simulium) rostratum
	.set('50360383',	'50360380')	// Diptera Simuliidae Simulium (Simulium) intermedium
	.set('50360384',	'50360380')	// Diptera Simuliidae Simulium (Simulium) morsitans
	.set('50360385',	'50360380')	// Diptera Simuliidae Simulium (Simulium) noelleri
	.set('50360386',	'50360380')	// Diptera Simuliidae Simulium (Simulium) ornatum
	.set('50360387',	'50360380')	// Diptera Simuliidae Simulium (Simulium) posticatum
	.set('50360388',	'50360380')	// Diptera Simuliidae Simulium (Simulium) reptans
	.set('50360389',	'50360380')	// Diptera Simuliidae Simulium (Simulium) trifasciatum
	.set('5036038A',	'50360380')	// Diptera Simuliidae Simulium (Simulium) tuberosum
	.set('5036038B',	'50360380')	// Diptera Simuliidae Simulium (Simulium) variegatum
	.set('5036038Y',	'50360380')	// Diptera Simuliidae Simulium (Simulium) argyreatum group
	.set('5036038Z',	'50360380')	// Diptera Simuliidae Simulium (Simulium) ornatum group
// Diptera Tanypodinae Procladius (Holotanypus)
	.set('50420511',	'50420510')	// Diptera Tanypodinae Procladius (Holotanypus) choreus
	.set('50420512',	'50420510')	// Diptera Tanypodinae Procladius (Holotanypus) crassinervis
	.set('50420513',	'50420510')	// Diptera Tanypodinae Procladius (Holotanypus) culiciformis
	.set('50420514',	'50420510')	// Diptera Tanypodinae Procladius (Holotanypus) sagittalis
	.set('50420515',	'50420510')	// Diptera Tanypodinae Procladius (Holotanypus) signatus
	.set('50420516',	'50420510')	// Diptera Tanypodinae Procladius (Holotanypus) simplicistylis
// Diptera Tanypodinae Procladius (Psilotanypus)
	.set('50420521',	'50420520')	// Diptera Tanypodinae Procladius (Psilotanypus) flavifrons
	.set('50420522',	'50420520')	// Diptera Tanypodinae Procladius (Psilotanypus) lugens
	.set('50420523',	'50420520')	// Diptera Tanypodinae Procladius (Psilotanypus) rufovittatus
// Diptera Orthocladiinae Cricotopus (Cricotopus)
	.set('50460511',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) albiforceps
	.set('50460512',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) annulator
	.set('50460513',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) bicinctus
	.set('50460514',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) ephippium
	.set('50460515',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) festivellus
	.set('50460516',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) flavocinctus
	.set('50460517',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) fuscus
	.set('50460518',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) pallidipes
	.set('50460519',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) pilosellus
	.set('5046051A',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) polaris
	.set('5046051B',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) pulchripes
	.set('5046051C',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) similis
	.set('5046051D',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) tremulus
	.set('5046051E',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) triannulatus
	.set('5046051F',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) trifascia
	.set('5046051G',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) caducus
	.set('5046051H',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) curtus
	.set('5046051J',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) cylindraceus
	.set('5046051K',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) tibialis
	.set('5046051L',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) tristis
	.set('5046051M',	'50460510')	// Diptera Orthocladiinae Cricotopus (Cricotopus) vierriensis
// Diptera Orthocladiinae Cricotopus (Isocladius)
	.set('50460541',	'50460540')	// Diptera Orthocladiinae Cricotopus (Isocladius) brevipalpis
	.set('50460542',	'50460540')	// Diptera Orthocladiinae Cricotopus (Isocladius) intersectus
	.set('50460543',	'50460540')	// Diptera Orthocladiinae Cricotopus (Isocladius) laricomalis
	.set('50460544',	'50460540')	// Diptera Orthocladiinae Cricotopus (Isocladius) obnixus
	.set('50460545',	'50460540')	// Diptera Orthocladiinae Cricotopus (Isocladius) ornatus
	.set('50460546',	'50460540')	// Diptera Orthocladiinae Cricotopus (Isocladius) pilitarsis
	.set('50460547',	'50460540')	// Diptera Orthocladiinae Cricotopus (Isocladius) reversus
	.set('50460548',	'50460540')	// Diptera Orthocladiinae Cricotopus (Isocladius) speciosus
	.set('50460549',	'50460540')	// Diptera Orthocladiinae Cricotopus (Isocladius) sylvestris
	.set('5046054A',	'50460540')	// Diptera Orthocladiinae Cricotopus (Isocladius) tricinctus
	.set('5046054B',	'50460540')	// Diptera Orthocladiinae Cricotopus (Isocladius) trifasciatus
	.set('5046054C',	'50460540')	// Diptera Orthocladiinae Cricotopus (Isocladius) arcuatus
// Diptera Orthocladiinae Cricotopus (Nostococladius)
	.set('50460561',	'50460560')	// Diptera Orthocladiinae Cricotopus (Nostococladius) lygropis
// Diptera Orthocladiinae Halocladius (Halocladius)
	.set('50461111',	'50461110')	// Diptera Orthocladiinae Halocladius (Halocladius) fucicola
	.set('50461112',	'50461110')	// Diptera Orthocladiinae Halocladius (Halocladius) variabilis
	.set('50461113',	'50461110')	// Diptera Orthocladiinae Halocladius (Halocladius) varians
// Diptera Orthocladiinae Halocladius (Psammocladius)
	.set('50461121',	'50461120')	// Diptera Orthocladiinae Halocladius (Psammocladius) braunsi
// Diptera Orthocladiinae Orthocladius (Eudactylocladius)
	.set('50462011',	'50462010')	// Diptera Orthocladiinae Orthocladius (Eudactylocladius) fuscimanus
	.set('50462012',	'50462010')	// Diptera Orthocladiinae Orthocladius (Eudactylocladius) gelidus
	.set('50462014',	'50462010')	// Diptera Orthocladiinae Orthocladius (Eudactylocladius) olivaceus
// Diptera Orthocladiinae Orthocladius (Pogonocladius)
	.set('50462021',	'50462020')	// Diptera Orthocladiinae Orthocladius (Pogonocladius) consobrinus
// Diptera Orthocladiinae Orthocladius (Euorthocladius)
	.set('50462033',	'50462030')	// Diptera Orthocladiinae Orthocladius (Euorthocladius) rivicola
	.set('50462034',	'50462030')	// Diptera Orthocladiinae Orthocladius (Euorthocladius) rivulorum
	.set('50462035',	'50462030')	// Diptera Orthocladiinae Orthocladius (Euorthocladius) thienemanni
	.set('50462036',	'50462030')	// Diptera Orthocladiinae Orthocladius (Euorthocladius) calvus
	.set('50462037',	'50462030')	// Diptera Orthocladiinae Orthocladius (Euorthocladius) ashei
// Diptera Orthocladiinae Orthocladius (Orthocladius)
	.set('50462041',	'50462040')	// Diptera Orthocladiinae Orthocladius (Orthocladius) glabripennis
	.set('50462042',	'50462040')	// Diptera Orthocladiinae Orthocladius (Orthocladius) holsatus
	.set('50462043',	'50462040')	// Diptera Orthocladiinae Orthocladius (Orthocladius) oblidens
	.set('50462044',	'50462040')	// Diptera Orthocladiinae Orthocladius (Orthocladius) obumbratus
	.set('50462045',	'50462040')	// Diptera Orthocladiinae Orthocladius (Orthocladius) rubicundus
	.set('50462046',	'50462040')	// Diptera Orthocladiinae Orthocladius (Orthocladius) wetterensis
	.set('50462047',	'50462040')	// Diptera Orthocladiinae Orthocladius (Orthocladius) frigidus
	.set('50462048',	'50462040')	// Diptera Orthocladiinae Orthocladius (Orthocladius) dentifer
	.set('50462049',	'50462040')	// Diptera Orthocladiinae Orthocladius (Orthocladius) maius
	.set('5046204A',	'50462040')	// Diptera Orthocladiinae Orthocladius (Orthocladius) pedestris
	.set('5046204B',	'50462040')	// Diptera Orthocladiinae Orthocladius (Orthocladius) rivinus
	.set('5046204C',	'50462040')	// Diptera Orthocladiinae Orthocladius (Orthocladius) ruffoi
// Diptera Orthocladiinae Orthocladius (Symposiocladius)
	.set('50462051',	'50462050')	// Diptera Orthocladiinae Orthocladius (Symposiocladius) lignicola
// Diptera Orthocladiinae Psectrocladius (Monopsectrocladius)
	.set('50462711',	'50462710')	// Diptera Orthocladiinae Psectrocladius (Monopsectrocladius) calcaratus
// Diptera Orthocladiinae Psectrocladius (Allopsectrocladius)
	.set('50462721',	'50462720')	// Diptera Orthocladiinae Psectrocladius (Allopsectrocladius) obvius
	.set('50462722',	'50462720')	// Diptera Orthocladiinae Psectrocladius (Allopsectrocladius) platypus
// Diptera Orthocladiinae Psectrocladius (Mesopsectrocladius)
	.set('50462731',	'50462730')	// Diptera Orthocladiinae Psectrocladius (Mesopsectrocladius) barbatipes
// Diptera Orthocladiinae Psectrocladius (Psectrocladius)
	.set('50462741',	'50462740')	// Diptera Orthocladiinae Psectrocladius (Psectrocladius) barbimanus
	.set('50462742',	'50462740')	// Diptera Orthocladiinae Psectrocladius (Psectrocladius) bisetus
	.set('50462743',	'50462740')	// Diptera Orthocladiinae Psectrocladius (Psectrocladius) fennicus
	.set('50462744',	'50462740')	// Diptera Orthocladiinae Psectrocladius (Psectrocladius) limbatellus
	.set('50462745',	'50462740')	// Diptera Orthocladiinae Psectrocladius (Psectrocladius) octomaculatus
	.set('50462746',	'50462740')	// Diptera Orthocladiinae Psectrocladius (Psectrocladius) oligosetus
	.set('50462747',	'50462740')	// Diptera Orthocladiinae Psectrocladius (Psectrocladius) psilopterus
	.set('50462748',	'50462740')	// Diptera Orthocladiinae Psectrocladius (Psectrocladius) schlienzi
	.set('50462749',	'50462740')	// Diptera Orthocladiinae Psectrocladius (Psectrocladius) sordidellus
	.set('5046274A',	'50462740')	// Diptera Orthocladiinae Psectrocladius (Psectrocladius) ventricosus
	.set('5046274B',	'50462740')	// Diptera Orthocladiinae Psectrocladius (Psectrocladius) oxyura
// Diptera Orthocladiinae Rheocricotopus (Psilocricotopus)
	.set('50462811',	'50462810')	// Diptera Orthocladiinae Rheocricotopus (Psilocricotopus) atripes
	.set('50462812',	'50462810')	// Diptera Orthocladiinae Rheocricotopus (Psilocricotopus) chalybeatus
	.set('50462813',	'50462810')	// Diptera Orthocladiinae Rheocricotopus (Psilocricotopus) glabricollis
	.set('50462814',	'50462810')	// Diptera Orthocladiinae Rheocricotopus (Psilocricotopus) tirolus
// Diptera Orthocladiinae Rheocricotopus (Rheocricotopus)
	.set('50462821',	'50462820')	// Diptera Orthocladiinae Rheocricotopus (Rheocricotopus) effusus
	.set('50462822',	'50462820')	// Diptera Orthocladiinae Rheocricotopus (Rheocricotopus) fuscipes
// Diptera Chironominae (Chironomini) Chironomus (Camptochironomus)
	.set('50470311',	'50470310')	// Diptera Chironominae (Chironomini) Chironomus (Camptochironomus) pallidivittatus
	.set('50470312',	'50470310')	// Diptera Chironominae (Chironomini) Chironomus (Camptochironomus) tentans
// Diptera Chironominae (Chironomini) Chironomus (Chaetolabis)
	.set('50470321',	'50470320')	// Diptera Chironominae (Chironomini) Chironomus (Chaetolabis) macani
// Diptera Chironominae (Chironomini) Chironomus (Chironomus)
	.set('50470331',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) annularius
	.set('50470332',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) anthracinus
	.set('50470333',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) aprilinus
	.set('50470334',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) cingulatus
	.set('50470335',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) dorsalis
	.set('50470336',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) inermifrons
	.set('50470338',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) longistylus
	.set('50470339',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) lugubris
	.set('5047033A',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) luridus
	.set('5047033B',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) nuditarsis
	.set('5047033C',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) obtusidens
	.set('5047033D',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) pilicornis
	.set('5047033E',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) plumosus
	.set('5047033F',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) prasinus
	.set('5047033G',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) pseudothummi
	.set('5047033H',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) riparius
	.set('5047033J',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) salinarius
	.set('5047033K',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) striatus
	.set('5047033L',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) venustus
	.set('5047033M',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) lacunaris
	.set('5047033N',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) piger
	.set('5047033P',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) strenzkei
	.set('5047033Q',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) nudiventris
	.set('5047033R',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) crassimanus
	.set('5047033S',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) entis
	.set('5047033T',	'50470330')	// Diptera Chironominae (Chironomini) Chironomus (Chironomus) holomelas
// Diptera Chironominae (Chironomini) Chironomus (Lobochironomus)
	.set('50470361',	'50470360')	// Diptera Chironominae (Chironomini) Chironomus (Lobochironomus) dissidens
	.set('50470362',	'50470360')	// Diptera Chironominae (Chironomini) Chironomus (Lobochironomus) dorsalis
	.set('50470363',	'50470360')	// Diptera Chironominae (Chironomini) Chironomus (Lobochironomus) carbonarius
// Diptera Chironominae (Chironomini) Demicryptochironomus (Demicryptochironomus)
	.set('50470811',	'50470810')	// Diptera Chironominae (Chironomini) Demicryptochironomus (Demicryptochironomus) vulneratus
// Diptera Chironominae (Chironomini) Demicryptochironomus (Irmakia)
	.set('50470821',	'50470820')	// Diptera Chironominae (Chironomini) Demicryptochironomus (Irmakia) neglectus
// Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes)
	.set('50471211',	'50471210')	// Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes) barbipes
	.set('50471212',	'50471210')	// Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes) cauliginellus
	.set('50471213',	'50471210')	// Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes) pallens
	.set('50471214',	'50471210')	// Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes) paripes
	.set('50471215',	'50471210')	// Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes) glaucus
	.set('50471216',	'50471210')	// Diptera Chironominae (Chironomini) Glyptotendipes (Glyptotendipes) salinus
// Diptera Chironominae (Chironomini) Glyptotendipes (Caulochironomus)
	.set('50471221',	'50471220')	// Diptera Chironominae (Chironomini) Glyptotendipes (Caulochironomus) foliicola
	.set('50471222',	'50471220')	// Diptera Chironominae (Chironomini) Glyptotendipes (Caulochironomus) imbecilis
	.set('50471223',	'50471220')	// Diptera Chironominae (Chironomini) Glyptotendipes (Caulochironomus) scirpi
	.set('50471224',	'50471220')	// Diptera Chironominae (Chironomini) Glyptotendipes (Caulochironomus) viridis
// Diptera Chironominae (Chironomini) Glyptotendipes (Heynotendipes)
	.set('50471231',	'50471230')	// Diptera Chironominae (Chironomini) Glyptotendipes (Heynotendipes) signatus
// Diptera Chironominae (Chironomini) Polypedilum (Pentapedilum)
	.set('50472911',	'50472910')	// Diptera Chironominae (Chironomini) Polypedilum (Pentapedilum) nubens
	.set('50472912',	'50472910')	// Diptera Chironominae (Chironomini) Polypedilum (Pentapedilum) sordens
	.set('50472913',	'50472910')	// Diptera Chironominae (Chironomini) Polypedilum (Pentapedilum) tritum
	.set('50472914',	'50472910')	// Diptera Chironominae (Chironomini) Polypedilum (Pentapedilum) uncinatum
// Diptera Chironominae (Chironomini) Polypedilum (Polypedilum)
	.set('50472921',	'50472920')	// Diptera Chironominae (Chironomini) Polypedilum (Polypedilum) acutum
	.set('50472922',	'50472920')	// Diptera Chironominae (Chironomini) Polypedilum (Polypedilum) albicorne
	.set('50472923',	'50472920')	// Diptera Chironominae (Chironomini) Polypedilum (Polypedilum) arundineti
	.set('50472926',	'50472920')	// Diptera Chironominae (Chironomini) Polypedilum (Polypedilum) laetum
	.set('50472928',	'50472920')	// Diptera Chironominae (Chironomini) Polypedilum (Polypedilum) nubeculosum
	.set('50472929',	'50472920')	// Diptera Chironominae (Chironomini) Polypedilum (Polypedilum) pedestre
// Diptera Chironominae (Chironomini) Polypedilum (Tripodura)
	.set('50472941',	'50472940')	// Diptera Chironominae (Chironomini) Polypedilum (Tripodura) apfelbecki
	.set('50472942',	'50472940')	// Diptera Chironominae (Chironomini) Polypedilum (Tripodura) bicrenatum
	.set('50472943',	'50472940')	// Diptera Chironominae (Chironomini) Polypedilum (Tripodura) pullum
	.set('50472944',	'50472940')	// Diptera Chironominae (Chironomini) Polypedilum (Tripodura) quadriguttatum
	.set('50472945',	'50472940')	// Diptera Chironominae (Chironomini) Polypedilum (Tripodura) scalaenum
	.set('50472946',	'50472940')	// Diptera Chironominae (Chironomini) Polypedilum (Tripodura) tetracrenatum
	.set('50472947',	'50472940')	// Diptera Chironominae (Chironomini) Polypedilum (Tripodura) aegyptium
// Diptera Chironominae (Chironomini) Polypedilum (Uresipedilum)
	.set('50472951',	'50472950')	// Diptera Chironominae (Chironomini) Polypedilum (Uresipedilum) convictum
	.set('50472952',	'50472950')	// Diptera Chironominae (Chironomini) Polypedilum (Uresipedilum) cultellatum
// Diptera Chironominae (Chironomini) Stenochironomus (Petalopholeus)
	.set('50473111',	'50473110')	// Diptera Chironominae (Chironomini) Stenochironomus (Petalopholeus) fascipennis
// Diptera Chironominae (Chironomini) Stenochironomus (Stenochironomus)
	.set('50473121',	'50473120')	// Diptera Chironominae (Chironomini) Stenochironomus (Stenochironomus) gibbus
// Diptera Stratiomyidae Nemotelus (Camptopelma)
	.set('50610211',	'50610210')	// Diptera Stratiomyidae Nemotelus (Camptopelma) nigrinus
// Diptera Stratiomyidae Nemotelus (Nemotelus)
	.set('50610221',	'50610220')	// Diptera Stratiomyidae Nemotelus (Nemotelus) notatus
	.set('50610222',	'50610220')	// Diptera Stratiomyidae Nemotelus (Nemotelus) pantherinus
	.set('50610223',	'50610220')	// Diptera Stratiomyidae Nemotelus (Nemotelus) uliginosus
// Diptera Empididae Rhamphomyia (Pararhamphomyia)
	.set('50710221',	'50710220')	// Diptera Empididae Rhamphomyia (Pararhamphomyia) barbata
// Diptera Empididae Rhamphomyia (Holoclera)
	.set('50710271',	'50710270')	// Diptera Empididae Rhamphomyia (Holoclera) flava
// Diptera Empididae Wiedemannia (Wiedemannia)
	.set('50712011',	'50712010')	// Diptera Empididae Wiedemannia (Wiedemannia) bistigma
	.set('50712012',	'50712010')	// Diptera Empididae Wiedemannia (Wiedemannia) rhynchops
// Diptera Empididae Wiedemannia (Pseudowiedemannia)
	.set('50712021',	'50712020')	// Diptera Empididae Wiedemannia (Pseudowiedemannia) lamellata
// Diptera Empididae Wiedemannia (Chamaedipsia)
	.set('50712031',	'50712030')	// Diptera Empididae Wiedemannia (Chamaedipsia) lota
// Diptera Empididae Wiedemannia (Philolutra)
	.set('50712041',	'50712040')	// Diptera Empididae Wiedemannia (Philolutra) simplex
	.set('50712042',	'50712040')	// Diptera Empididae Wiedemannia (Philolutra) phantasma
// Diptera Dolichopodidae Dolichopus (Dolichopus)
	.set('50720111',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) arbustorum
	.set('50720112',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) atratus
	.set('50720113',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) cilifemoratus
	.set('50720114',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) griseipennis
	.set('50720115',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) nubilus
	.set('50720116',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) pennatus
	.set('50720117',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) phaeopus
	.set('50720118',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) plumipes
	.set('50720119',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) popularis
	.set('5072011A',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) signatus
	.set('5072011B',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) ungulatus
	.set('5072011C',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) urbanus
	.set('5072011D',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) trivialis
	.set('5072011E',	'50720110')	// Diptera Dolichopodidae Dolichopus (Dolichopus) excisus
// Diptera Dolichopodidae Hercostomus (Hercostomus)
	.set('50720413',	'50720410')	// Diptera Dolichopodidae Hercostomus (Hercostomus) chetifer
	.set('50720414',	'50720410')	// Diptera Dolichopodidae Hercostomus (Hercostomus) nigripennis
// Diptera Syrphidae Eristalis (Eoseristalis)
	.set('50811011',	'50811010')	// Diptera Syrphidae Eristalis (Eoseristalis) abusiva
	.set('50811012',	'50811010')	// Diptera Syrphidae Eristalis (Eoseristalis) arbustorum
	.set('50811013',	'50811010')	// Diptera Syrphidae Eristalis (Eoseristalis) cryptarum
	.set('50811014',	'50811010')	// Diptera Syrphidae Eristalis (Eoseristalis) horticola
	.set('50811015',	'50811010')	// Diptera Syrphidae Eristalis (Eoseristalis) intricaria
	.set('50811016',	'50811010')	// Diptera Syrphidae Eristalis (Eoseristalis) nemorum
	.set('50811017',	'50811010')	// Diptera Syrphidae Eristalis (Eoseristalis) pertinax
	.set('50811018',	'50811010')	// Diptera Syrphidae Eristalis (Eoseristalis) rupium
	.set('50811019',	'50811010')	// Diptera Syrphidae Eristalis (Eoseristalis) similis
// Diptera Syrphidae Eristalis (Eristalis)
	.set('50811031',	'50811030')	// Diptera Syrphidae Eristalis (Eristalis) tenax
// Diptera Syrphidae Eristalinus (Eristalinus)
	.set('50811211',	'50811210')	// Diptera Syrphidae Eristalinus (Eristalinus) sepulchralis
// Diptera Syrphidae Eristalinus (Lathyropthalmus)
	.set('50811221',	'50811220')	// Diptera Syrphidae Eristalinus (Lathyropthalmus) aeneus
// Diptera Syrphidae Neoascia (Neoascia)
	.set('50811711',	'50811710')	// Diptera Syrphidae Neoascia (Neoascia) podagrica
	.set('50811712',	'50811710')	// Diptera Syrphidae Neoascia (Neoascia) tenur
// Diptera Syrphidae Neoascia (Neoasciella)
	.set('50811721',	'50811720')	// Diptera Syrphidae Neoascia (Neoasciella) geniculata
	.set('50811722',	'50811720')	// Diptera Syrphidae Neoascia (Neoasciella) interrupta
	.set('50811723',	'50811720')	// Diptera Syrphidae Neoascia (Neoasciella) meticulosa
	.set('50811724',	'50811720')	// Diptera Syrphidae Neoascia (Neoasciella) obliqua
// Diptera Syrphidae Sphegina (Sphegina)
	.set('50811811',	'50811810')	// Diptera Syrphidae Sphegina (Sphegina) clunipes
	.set('50811812',	'50811810')	// Diptera Syrphidae Sphegina (Sphegina) elegans
// Diptera Sciomyzidae Ilione (Ilione)
	.set('50820911',	'50820910')	// Diptera Sciomyzidae Ilione (Ilione) albiseta
// Diptera Sciomyzidae Ilione (Tumidicercus)
	.set('50820921',	'50820920')	// Diptera Sciomyzidae Ilione (Tumidicercus) lineata
// Diptera Ephydridae Notiphila (Notiphila)
	.set('50830111',	'50830110')	// Diptera Ephydridae Notiphila (Notiphila) annulipes
	.set('50830113',	'50830110')	// Diptera Ephydridae Notiphila (Notiphila) brunipes
	.set('50830114',	'50830110')	// Diptera Ephydridae Notiphila (Notiphila) cinerea
	.set('50830115',	'50830110')	// Diptera Ephydridae Notiphila (Notiphila) dorsata
	.set('50830116',	'50830110')	// Diptera Ephydridae Notiphila (Notiphila) maculata
	.set('50830117',	'50830110')	// Diptera Ephydridae Notiphila (Notiphila) nigricornis
	.set('50830118',	'50830110')	// Diptera Ephydridae Notiphila (Notiphila) riparia
	.set('50830119',	'50830110')	// Diptera Ephydridae Notiphila (Notiphila) stagnicola
	.set('5083011B',	'50830110')	// Diptera Ephydridae Notiphila (Notiphila) subnigra
	.set('5083011C',	'50830110')	// Diptera Ephydridae Notiphila (Notiphila) guttiventris
	.set('5083011D',	'50830110')	// Diptera Ephydridae Notiphila (Notiphila) nubila
	.set('5083011E',	'50830110')	// Diptera Ephydridae Notiphila (Notiphila) umbrosa
// Diptera Ephydridae Notiphila (Acrolimna)
	.set('50830131',	'50830130')	// Diptera Ephydridae Notiphila (Acrolimna) uliginosa
	.set('50830132',	'50830130')	// Diptera Ephydridae Notiphila (Acrolimna) venusta
// Diptera Ephydridae Notiphila (Dichaeta)
	.set('50830141',	'50830140')	// Diptera Ephydridae Notiphila (Dichaeta) caudata
// Diptera Ephydridae Parydra (Chaetoapnaea)
	.set('50831211',	'50831210')	// Diptera Ephydridae Parydra (Chaetoapnaea) pusilla
// Diptera Scathophagidae Acanthocnema (Acanthocnema)
	.set('50840112',	'50840110')	// Diptera Scathophagidae Acanthocnema (Acanthocnema) nigrimana
// Diptera Scathophagidae Acanthocnema (Clinoceroides)
    .set('50840121',	'50840120')	// Diptera Scathophagidae Acanthocnema (Clinoceroides) glaucescens