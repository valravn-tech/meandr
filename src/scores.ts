import { TaxonCode } from './alltaxa'
export type ScoreInfo = ScoreAwic | ScoreBmwp | ScoreCci | ScoreDehli | ScoreLife| ScorePsi | ScoreWhpt;

export type Score  =   number;
export type      ScoreAwic  = Score;
export interface ScoreBmwp  { score_orig:number, score_rev?:number, score_riffle?:number, score_riffle_pool?:number, score_pool?:number }
export type      ScoreCci   = Score;
export type      ScoreDehli = Score;
export interface ScoreLife  { flow:string }
export interface ScorePsi   { fssr:string }
export interface ScoreWhpt  { score_presence:number,  scores:number[] }

export interface PartialScorePsi {
    AB: number,
    AD: number,
}

export interface ScoreSinglePsi {
    fssr: string,
    score: number,
}

export interface ScoreSingleLife {
    flow: string,
    score: number,
}

export type ScoreSingleWhpt = Score;

export const scoresWhpt = new Map<TaxonCode, ScoreWhpt>([
	[ "05110000", { score_presence:4.9,  scores:[4.7,  5.4,  5.4,  5.4]  }], // Tricladida Planariidae
	[ "05120000", { score_presence:2.9,  scores:[2.8,  3.1,  3.1,  3.1]  }], // Tricladida Dugesiidae
	[ "05130000", { score_presence:3,    scores:[3,    2.6,  2.6,  2.6]  }], // Tricladida Dendrocoelidae
	[ "16110000", { score_presence:6.4,  scores:[6.4,  6.5,  6.9,  6.9]  }], // Gastropoda Neritidae
	[ "16120000", { score_presence:5.7,  scores:[5.2,  6.7,  6.7,  6.7]  }], // Gastropoda Viviparidae
	[ "16130000", { score_presence:3.2,  scores:[3.3,  3.1,  2.7,  2.7]  }], // Gastropoda Valvatidae
	[ "16140000", { score_presence:4.2,  scores:[4.1,  4.2,  4.6,  3.7]  }], // Gastropoda Hydrobiidae
	[ "16160000", { score_presence:3.7,  scores:[3.6,  3.8,  3.3,  3.3]  }], // Gastropoda Bithyniidae
	[ "16210000", { score_presence:2.4,  scores:[2.7,  2,    0.4,  0.4]  }], // Gastropoda Physidae
	[ "16220000", { score_presence:3.3,  scores:[3.6,  2.5,  1.2,  1.2]  }], // Gastropoda Lymnaeidae
	[ "16230000", { score_presence:3.1,  scores:[3.2,  3,    2.4,  2.4]  }], // Gastropoda Planorbidae
	[ "16250000", { score_presence:3.6,  scores:[3.6,  3.8,  3.8,  3.8]  }], // Gastropoda Acroloxidae
	[ "17120000", { score_presence:5.3,  scores:[5.2,  6.8,  6.8,  6.8]  }], // Bivalvia Unionidae
	[ "17130000", { score_presence:3.9,  scores:[4.4,  3.5,  3.4,  2.3]  }], // Bivalvia Sphaeriidae
	[ "17140000", { score_presence:3.7,  scores:[3.7,  3.7,  3.7,  3.7]  }], // Bivalvia Dreissenidae
	[ "20000000", { score_presence:2.7,  scores:[3.6,  2.3,  1.4,  -0.6] }], // Oligochaeta
	[ "22110000", { score_presence:5.2,  scores:[5.2,  4.9,  4.9,  4.9]  }], // Hirudinea Piscicolidae
	[ "22120000", { score_presence:3.2,  scores:[3.4,  2.5,  0.8,  0.8]  }], // Hirudinea Glossiphoniidae
	[ "22210000", { score_presence:-0.8, scores:[-0.8, -0.8, -0.8, -0.8] }], // Hirudinea Hirudinidae
	[ "22230000", { score_presence:3.1,  scores:[3.6,  2,    -0.8, -0.8] }], // Hirudinea Erpobdellidae
	[ "34310000", { score_presence:7.9,  scores:[7.9,  7.9,  7.9,  7.9]  }], // Decapoda Astacidae
	[ "36110000", { score_presence:2.8,  scores:[4,    2.3,  0.8,  -1.6] }], // Isopoda Asellidae
	[ "37110000", { score_presence:5.8,  scores:[5.7,  5.8,  5.8,  5.8]  }], // Amphipoda Corophiidae
	[ "37130000", { score_presence:3.9,  scores:[3.8,  4,    3.6,  3.6]  }], // Amphipoda Crangonyctidae
	[ "37140000", { score_presence:4.4,  scores:[4.2,  4.5,  4.6,  3.9]  }], // Amphipoda Gammaridae
	[ "37150000", { score_presence:6.3,  scores:[6.3,  6.3,  6.3,  6.3]  }], // Amphipoda Niphargidae
	[ "40110000", { score_presence:11.5, scores:[11.3, 12.2, 12.2, 12.2] }], // Ephemeroptera Siphlonuridae
	[ "40120000", { score_presence:5.5,  scores:[3.6,  5.9,  7.2,  7.5]  }], // Ephemeroptera Baetidae
	[ "40130000", { score_presence:9.7,  scores:[8.5,  10.3, 11.1, 11.1] }], // Ephemeroptera Heptageniidae
	[ "40210000", { score_presence:8.8,  scores:[8.8,  9.1,  9.2,  9.2]  }], // Ephemeroptera Leptophlebiidae
	[ "40310000", { score_presence:10,   scores:[9.8,  10.4, 10.4, 10.4] }], // Ephemeroptera Potamanthidae
	[ "40320000", { score_presence:8.4,  scores:[8.3,  8.8,  9.4,  9.4]  }], // Ephemeroptera Ephemeridae
	[ "40410000", { score_presence:8.2,  scores:[7.9,  8.5,  9,    9]    }], // Ephemeroptera Ephemerellidae
	[ "40510000", { score_presence:6.5,  scores:[6.5,  6.5,  6.5,  6.5]  }], // Ephemeroptera Caenidae
	[ "41110000", { score_presence:11.3, scores:[11,   11.9, 12.1, 12.1] }], // Plecoptera Taeniopterygidae
	[ "41120000", { score_presence:9.3,  scores:[8.7,  10.7, 10.7, 10.7] }], // Plecoptera Nemouridae
	[ "41130000", { score_presence:10,   scores:[9.3,  10.6, 10.6, 10.6] }], // Plecoptera Leuctridae
	[ "41140000", { score_presence:9.6,  scores:[9.7,  9.4,  9.4,  9.4]  }], // Plecoptera Capniidae
	[ "41210000", { score_presence:10.8, scores:[10.5, 11.5, 11.5, 11.5] }], // Plecoptera Perlodidae
	[ "41220000", { score_presence:12.7, scores:[12.6, 13,   13,   13]   }], // Plecoptera Perlidae
	[ "41230000", { score_presence:11.6, scores:[11.4, 12.2, 12.2, 12.2] }], // Plecoptera Chloroperlidae
	[ "42110000", { score_presence:6,    scores:[6,    6,    6,    6]    }], // Odonata Platycnemididae
	[ "42120000", { score_presence:3.5,  scores:[3.4,  3.8,  3.8,  3.8]  }], // Odonata Coenagrionidae
	[ "42140000", { score_presence:6,    scores:[5.9,  6.2,  6.2,  6.2]  }], // Odonata Calopterygidae
	[ "42220000", { score_presence:9.8,  scores:[9.8,  9.8,  9.8,  9.8]  }], // Odonata Cordulegastridae
	[ "42230000", { score_presence:4.7,  scores:[4.7,  4.7,  4.7,  4.7]  }], // Odonata Aeshnidae
	[ "42250000", { score_presence:4.1,  scores:[4.1,  4.1,  4.1,  4.1]  }], // Odonata Libellulidae
	[ "43110000", { score_presence:4.7,  scores:[4.7,  4.7,  4.7,  4.7]  }], // Hemiptera Mesoveliidae
	[ "43210000", { score_presence:4.3,  scores:[4.3,  4.3,  4.3,  4.3]  }], // Hemiptera Hydrometridae
	[ "43220000", { score_presence:4.5,  scores:[4.5,  3.9,  3.9,  3.9]  }], // Hemiptera Veliidae
	[ "43230000", { score_presence:5.2,  scores:[5.2,  5.5,  5.5,  5.5]  }], // Hemiptera Gerridae
	[ "43310000", { score_presence:2.9,  scores:[2.9,  2.9,  2.9,  2.9]  }], // Hemiptera Nepidae
	[ "43410000", { score_presence:3.7,  scores:[3.7,  3.7,  3.7,  3.7]  }], // Hemiptera Naucoridae
	[ "43420000", { score_presence:8.5,  scores:[8.6,  8.5,  8,    8]    }], // Hemiptera Aphelocheiridae
	[ "43510000", { score_presence:3.4,  scores:[3.4,  3.9,  3.9,  3.9]  }], // Hemiptera Notonectidae
	[ "43520000", { score_presence:3.3,  scores:[3.3,  3.3,  3.3,  3.3]  }], // Hemiptera Pleidae
	[ "43610000", { score_presence:3.8,  scores:[3.7,  3.9,  3.7,  3.7]  }], // Hemiptera Corixidae
	[ "45110000", { score_presence:3.6,  scores:[3.6,  3.4,  3.4,  3.4]  }], // Coleoptera Haliplidae
	[ "45120000", { score_presence:3.8,  scores:[3.8,  3.8,  3.8,  3.8]  }], // Coleoptera Paelobiidae
	[ "45130000", { score_presence:3.2,  scores:[3.2,  3.2,  3.2,  3.2]  }], // Coleoptera Noteridae
	[ "45140000", { score_presence:4.5,  scores:[4.5,  4.8,  4.8,  4.8]  }], // Coleoptera Dytiscidae
	[ "45150000", { score_presence:8.2,  scores:[8.1,  9,    9,    9]    }], // Coleoptera Gyrinidae
	[ "45350000", { score_presence:6.2,  scores:[5.8,  8.8,  8.8,  8.8]  }], // Coleoptera Hydrophilidae
	[ "45410000", { score_presence:8.9,  scores:[8.5,  10.5, 10.5, 10.5] }], // Coleoptera Hydraenidae
	[ "45510000", { score_presence:6.9,  scores:[6.9,  6.8,  6.8,  6.8]  }], // Coleoptera Scirtidae
	[ "45620000", { score_presence:6,    scores:[6,    6,    6,    6]    }], // Coleoptera Dryopidae
	[ "45630000", { score_presence:6.6,  scores:[5.3,  7.4,  8.3,  8.3]  }], // Coleoptera Elmidae
	[ "46110000", { score_presence:4.3,  scores:[4.2,  4.4,  4.4,  4.4]  }], // Megaloptera Sialidae
	[ "47120000", { score_presence:5.7,  scores:[5.7,  5.7,  5.7,  5.7]  }], // Neuroptera Sisyridae
	[ "48110000", { score_presence:8.4,  scores:[8.1,  9.2,  8.3,  8.3]  }], // Trichoptera Rhyacophilidae
	[ "48120000", { score_presence:7.7,  scores:[7.8,  7.6,  7.2,  7.2]  }], // Trichoptera Glossosomatidae
	[ "48130000", { score_presence:6.2,  scores:[6.1,  6.5,  6.8,  6.8]  }], // Trichoptera Hydroptilidae
	[ "48210000", { score_presence:11.2, scores:[11.2, 11.1, 11.1, 11.1] }], // Trichoptera Philopotamidae
	[ "48220000", { score_presence:5.8,  scores:[5.8,  5.7,  5.7,  5.7]  }], // Trichoptera Psychomyiidae
	[ "48240000", { score_presence:8.1,  scores:[8.2,  8.1,  8.1,  8.1]  }], // Trichoptera Polycentropodidae
	[ "48250000", { score_presence:6.6,  scores:[5.8,  7.2,  7.4,  7.4]  }], // Trichoptera Hydropsychidae
	[ "48310000", { score_presence:5.5,  scores:[5.5,  5.5,  5.5,  5.5]  }], // Trichoptera Phryganeidae
	[ "48320000", { score_presence:9.5,  scores:[9.6,  9.5,  8.9,  8.9]  }], // Trichoptera Brachycentridae
	[ "48330000", { score_presence:10.1, scores:[9.9,  10.3, 10.2, 10.2] }], // Trichoptera Lepidostomatidae
	[ "48340000", { score_presence:6.2,  scores:[5.9,  6.9,  6.9,  6.9]  }], // Trichoptera Limnephilidae
	[ "48350000", { score_presence:8.8,  scores:[8.8,  8.8,  9.4,  9.4]  }], // Trichoptera Goeridae
	[ "48360000", { score_presence:8.7,  scores:[8.8,  7.3,  7.3,  7.3]  }], // Trichoptera Beraeidae
	[ "48370000", { score_presence:9.1,  scores:[8.9,  9.4,  9.5,  9.5]  }], // Trichoptera Sericostomatidae
	[ "48380000", { score_presence:11,   scores:[11.1, 10.3, 10.3, 10.3] }], // Trichoptera Odontoceridae
	[ "48390000", { score_presence:6.6,  scores:[6.5,  7.6,  7.6,  7.6]  }], // Trichoptera Molannidae
	[ "483A0000", { score_presence:6.7,  scores:[6.7,  6.9,  7.1,  7.1]  }], // Trichoptera Leptoceridae
	[ "50110000", { score_presence:5.9,  scores:[5.4,  6.9,  6.9,  7.1]  }], // Diptera Tipulidae
	[ "50210000", { score_presence:4.4,  scores:[4.5,  3,    3,    3]    }], // Diptera Psychodidae
	[ "50220000", { score_presence:6.4,  scores:[6.4,  6.4,  6.4,  6.4]  }], // Diptera Ptychopteridae
	[ "50310000", { score_presence:7,    scores:[7,    7,    7,    7]    }], // Diptera Dixidae
	[ "50320000", { score_presence:3,    scores:[3,    3,    3,    3]    }], // Diptera Chaoboridae
	[ "50330000", { score_presence:2,    scores:[2,    1.9,  1.9,  1.9]  }], // Diptera Culicidae
	[ "50350000", { score_presence:5.5,  scores:[5.4,  5.5,  5.5,  5.5]  }], // Diptera Ceratopogonidae
	[ "50360000", { score_presence:5.8,  scores:[5.5,  6.1,  5.8,  3.9]  }], // Diptera Simuliidae
	[ "50400000", { score_presence:1.1,  scores:[1.2,  1.3,  -0.9, -0.9] }], // Diptera Chironomidae
	[ "50610000", { score_presence:3.6,  scores:[3.6,  3.6,  3.6,  3.6]  }], // Diptera Stratiomyidae
	[ "50620000", { score_presence:9.6,  scores:[9.6,  9.6,  9.6,  9.6]  }], // Diptera Rhagionidae
	[ "50630000", { score_presence:7.1,  scores:[7.1,  7.3,  7.3,  7.3]  }], // Diptera Tabanidae
	[ "50640000", { score_presence:9.3,  scores:[9.3,  9.5,  9.5,  9.5]  }], // Diptera Athericidae
	[ "50710000", { score_presence:7.1,  scores:[7,    7.6,  7.6,  7.6]  }], // Diptera Empididae
	[ "50720000", { score_presence:4.9,  scores:[4.9,  4.9,  4.9,  4.9]  }], // Diptera Dolichopodidae
	[ "50810000", { score_presence:1.9,  scores:[1.9,  1.9,  1.9,  1.9]  }], // Diptera Syrphidae
	[ "50820000", { score_presence:3.4,  scores:[3.4,  3.4,  3.4,  3.4]  }], // Diptera Sciomyzidae
	[ "50830000", { score_presence:4.4,  scores:[4.4,  4.4,  4.4,  4.4]  }], // Diptera Ephydridae
	[ "50850000", { score_presence:3.9,  scores:[4,    2.6,  2.6,  2.6]  }], // Diptera Muscidae
])

//                                         Log Abundance (1-9, 10-99...)
export const scoresPsiGroups: {[fssrGroup: string]: { description: string, scores: number[] }} = {
	'A': { description: 'Highly sensitive',       scores: [2, 3, 4, 5] },
	'B': { description: 'Moderately sensitive',   scores: [1, 2, 3, 4] },
	'C': { description: 'Moderately insensitive', scores: [1, 2, 3, 4] },
	'D': { description: 'Highly insensitive',     scores: [2, 3, 4, 5] },
}

export const scoresPsiSpecies = new Map<TaxonCode, ScorePsi>([
	[ "02110101", { fssr:"B" } ], // Porifera Spongillidae Spongilla lacustris
	[ "02110201", { fssr:"D" } ], // Porifera Spongillidae Eunapius fragilis
	[ "02110301", { fssr:"C" } ], // Porifera Spongillidae Ephydatia fluviatilis
	[ "02110302", { fssr:"C" } ], // Porifera Spongillidae Ephydatia mulleri
	[ "02110401", { fssr:"B" } ], // Porifera Spongillidae Racekiela ryderi
	[ "05110101", { fssr:"D" } ], // Tricladida Planariidae Planaria torva
	[ "05110200", { fssr:"D" } ], // Tricladida Planariidae Polycelis
	[ "05110201", { fssr:"C" } ], // Tricladida Planariidae Polycelis felina
	[ "05110202", { fssr:"D" } ], // Tricladida Planariidae Polycelis nigra
	[ "05110203", { fssr:"D" } ], // Tricladida Planariidae Polycelis tenuis
	[ "05110300", { fssr:"B" } ], // Tricladida Planariidae Phagocata
	[ "05110301", { fssr:"B" } ], // Tricladida Planariidae Phagocata vitta
	[ "05110302", { fssr:"C" } ], // Tricladida Planariidae Phagocata woodworthi
	[ "05110401", { fssr:"B" } ], // Tricladida Planariidae Crenobia alpina
	[ "05120100", { fssr:"D" } ], // Tricladida Dugesiidae Dugesia
	[ "05120101", { fssr:"D" } ], // Tricladida Dugesiidae Dugesia lugubris
	[ "05120102", { fssr:"D" } ], // Tricladida Dugesiidae Dugesia polychroa
	[ "05120103", { fssr:"D" } ], // Tricladida Dugesiidae Dugesia tigrina
	[ "05130101", { fssr:"D" } ], // Tricladida Dendrocoelidae Bdellocephala punctata
	[ "05130201", { fssr:"C" } ], // Tricladida Dendrocoelidae Dendrocoelum lacteum
	[ "16110101", { fssr:"C" } ], // Gastropoda Neritidae Theodoxus fluviatilis
	[ "16120100", { fssr:"D" } ], // Gastropoda Viviparidae Viviparus
	[ "16120101", { fssr:"D" } ], // Gastropoda Viviparidae Viviparus contectus
	[ "16120102", { fssr:"D" } ], // Gastropoda Viviparidae Viviparus viviparus
	[ "16130100", { fssr:"C" } ], // Gastropoda Valvatidae Valvata
	[ "16130111", { fssr:"C" } ], // Gastropoda Valvatidae Valvata (Valvata) cristata
	[ "16130121", { fssr:"D" } ], // Gastropoda Valvatidae Valvata (Tropidina) macrostoma
	[ "16130131", { fssr:"C" } ], // Gastropoda Valvatidae Valvata (Cincinna) piscinalis
	[ "16140301", { fssr:"C" } ], // Gastropoda Hydrobiidae Potamopyrgus antipodarum
	[ "16160100", { fssr:"D" } ], // Gastropoda Bithyniidae Bithynia
	[ "16160111", { fssr:"D" } ], // Gastropoda Bithyniidae Bithynia (Bithynia) tentaculata
	[ "16160121", { fssr:"D" } ], // Gastropoda Bithyniidae Bithynia (Codiella) leachii
	[ "16210101", { fssr:"D" } ], // Gastropoda Physidae Aplexa hypnorum
	[ "16210200", { fssr:"D" } ], // Gastropoda Physidae Physa
	[ "16210202", { fssr:"D" } ], // Gastropoda Physidae Physa fontinalis
	[ "16210300", { fssr:"D" } ], // Gastropoda Physidae Physella
	[ "16210311", { fssr:"D" } ], // Gastropoda Physidae Physella (Physella) gyrina
	[ "16210321", { fssr:"D" } ], // Gastropoda Physidae Physella (Costatella) acuta
	[ "16220100", { fssr:"D" } ], // Gastropoda Lymnaeidae Lymnaea
	[ "16220105", { fssr:"D" } ], // Gastropoda Lymnaeidae Lymnaea stagnalis
	[ "16220201", { fssr:"C" } ], // Gastropoda Lymnaeidae Myxas glutinosa
	[ "16220301", { fssr:"D" } ], // Gastropoda Lymnaeidae Galba truncatula
	[ "16220400", { fssr:"D" } ], // Gastropoda Lymnaeidae Stagnicola
	[ "16220401", { fssr:"D" } ], // Gastropoda Lymnaeidae Stagnicola palustris
	[ "16220402", { fssr:"D" } ], // Gastropoda Lymnaeidae Stagnicola fuscus
	[ "16220403", { fssr:"D" } ], // Gastropoda Lymnaeidae Stagnicola catascopium
	[ "16220501", { fssr:"C" } ], // Gastropoda Lymnaeidae Omphiscola glabra
	[ "16220600", { fssr:"D" } ], // Gastropoda Lymnaeidae Radix
	[ "16220601", { fssr:"D" } ], // Gastropoda Lymnaeidae Radix auricularia
	[ "16220602", { fssr:"D" } ], // Gastropoda Lymnaeidae Radix balthica
	[ "16230100", { fssr:"D" } ], // Gastropoda Planorbidae Planorbis
	[ "16230111", { fssr:"D" } ], // Gastropoda Planorbidae Planorbis (Planorbis) carinatus
	[ "16230112", { fssr:"D" } ], // Gastropoda Planorbidae Planorbis (Planorbis) planorbis
	[ "16230200", { fssr:"D" } ], // Gastropoda Planorbidae Anisus
	[ "16230211", { fssr:"D" } ], // Gastropoda Planorbidae Anisus (Anisus) leucostoma
	[ "16230212", { fssr:"D" } ], // Gastropoda Planorbidae Anisus (Anisus) spirorbis
	[ "16230221", { fssr:"D" } ], // Gastropoda Planorbidae Anisus (Disculifer) vortex
	[ "16230222", { fssr:"D" } ], // Gastropoda Planorbidae Anisus (Disculifer) vorticulus
	[ "16230301", { fssr:"D" } ], // Gastropoda Planorbidae Bathyomphalus contortus
	[ "16230400", { fssr:"C" } ], // Gastropoda Planorbidae Gyraulus
	[ "16230411", { fssr:"C" } ], // Gastropoda Planorbidae Gyraulus (Gyraulus) acronicus
	[ "16230412", { fssr:"C" } ], // Gastropoda Planorbidae Gyraulus (Gyraulus) albus
	[ "16230421", { fssr:"D" } ], // Gastropoda Planorbidae Gyraulus (Torquis) laevis
	[ "16230431", { fssr:"C" } ], // Gastropoda Planorbidae Gyraulus (Armiger) crista
	[ "16230601", { fssr:"D" } ], // Gastropoda Planorbidae Hippeutis complanatus
	[ "16230701", { fssr:"D" } ], // Gastropoda Planorbidae Segmentina nitida
	[ "16230801", { fssr:"D" } ], // Gastropoda Planorbidae Planorbarius corneus
	[ "16230911", { fssr:"D" } ], // Gastropoda Planorbidae Menetus (Dilatata) dilatatus
	[ "16231101", { fssr:"A" } ], // Gastropoda Planorbidae Ancylus fluviatilis
	[ "16231211", { fssr:"C" } ], // Gastropoda Planorbidae Ferrissia (Pettancylus) clessiniana
	[ "17110101", { fssr:"A" } ], // Bivalvia Margaritiferidae Margaritifera margaritifera
	[ "17120100", { fssr:"D" } ], // Bivalvia Unionidae Unio
	[ "17120101", { fssr:"D" } ], // Bivalvia Unionidae Unio pictorum
	[ "17120102", { fssr:"D" } ], // Bivalvia Unionidae Unio tumidus
	[ "17120200", { fssr:"D" } ], // Bivalvia Unionidae Anodonta
	[ "17120201", { fssr:"C" } ], // Bivalvia Unionidae Anodonta anatina
	[ "17120202", { fssr:"D" } ], // Bivalvia Unionidae Anodonta cygnea
	[ "17120203", { fssr:"D" } ], // Bivalvia Unionidae Anodonta woodiana
	[ "17120301", { fssr:"C" } ], // Bivalvia Unionidae Pseudanodonta complanata
	[ "17130100", { fssr:"D" } ], // Bivalvia Sphaeriidae Sphaerium
	[ "17130101", { fssr:"D" } ], // Bivalvia Sphaeriidae Sphaerium corneum
	[ "17130103", { fssr:"D" } ], // Bivalvia Sphaeriidae Sphaerium rivicola
	[ "17130104", { fssr:"B" } ], // Bivalvia Sphaeriidae Sphaerium solidum
	[ "17130106", { fssr:"D" } ], // Bivalvia Sphaeriidae Sphaerium nucleus
	[ "17130200", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium
	[ "17130201", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium amnicum
	[ "17130202", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium casertanum
	[ "17130203", { fssr:"C" } ], // Bivalvia Sphaeriidae Pisidium conventus
	[ "17130204", { fssr:"C" } ], // Bivalvia Sphaeriidae Pisidium henslowanum
	[ "17130205", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium hibernicum
	[ "17130206", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium lilljeborgii
	[ "17130207", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium milium
	[ "17130208", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium moitessierianum
	[ "17130209", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium nitidum
	[ "17130211", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium obtusale
	[ "17130212", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium personatum
	[ "17130213", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium pseudosphaerium
	[ "17130214", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium pulchellum
	[ "17130215", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium subtruncatum
	[ "17130216", { fssr:"C" } ], // Bivalvia Sphaeriidae Pisidium supinum
	[ "17130217", { fssr:"D" } ], // Bivalvia Sphaeriidae Pisidium tenuilineatum
	[ "17130300", { fssr:"D" } ], // Bivalvia Sphaeriidae Musculium
	[ "17130301", { fssr:"D" } ], // Bivalvia Sphaeriidae Musculium lacustre
	[ "17130302", { fssr:"D" } ], // Bivalvia Sphaeriidae Musculium transversum
	[ "22110101", { fssr:"B" } ], // Hirudinea Piscicolidae Piscicola geometra
	[ "22120201", { fssr:"D" } ], // Hirudinea Glossiphoniidae Theromyzon tessulatum
	[ "22120301", { fssr:"C" } ], // Hirudinea Glossiphoniidae Hemiclepsis marginata
	[ "22120400", { fssr:"C" } ], // Hirudinea Glossiphoniidae Glossiphonia
	[ "22120401", { fssr:"C" } ], // Hirudinea Glossiphoniidae Glossiphonia complanata
	[ "22120403", { fssr:"C" } ], // Hirudinea Glossiphoniidae Glossiphonia verrucata
	[ "22120404", { fssr:"D" } ], // Hirudinea Glossiphoniidae Glossiphonia paludosa
	[ "22120701", { fssr:"C" } ], // Hirudinea Glossiphoniidae Helobdella stagnalis
	[ "22120801", { fssr:"C" } ], // Hirudinea Glossiphoniidae Alboglossiphonia heteroclita
	[ "22120901", { fssr:"C" } ], // Hirudinea Glossiphoniidae Placobdella costata
	[ "22220101", { fssr:"D" } ], // Hirudinea Haemopidae Haemopis sanguisuga
	[ "22210201", { fssr:"D" } ], // Hirudinea Hirudinidae Hirudo medicinalis
	[ "22230100", { fssr:"C" } ], // Hirudinea Erpobdellidae Erpobdella
	[ "22230101", { fssr:"C" } ], // Hirudinea Erpobdellidae Erpobdella octoculata
	[ "22230102", { fssr:"C" } ], // Hirudinea Erpobdellidae Erpobdella testacea
	[ "22230201", { fssr:"D" } ], // Hirudinea Erpobdellidae Dina lineata
	[ "22230300", { fssr:"C" } ], // Hirudinea Erpobdellidae Trocheta
	[ "22230301", { fssr:"C" } ], // Hirudinea Erpobdellidae Trocheta bykowskii
	[ "22230302", { fssr:"C" } ], // Hirudinea Erpobdellidae Trocheta subviridis
	[ "33010201", { fssr:"B" } ], // Bathynellacea Bathynellidae Antrobathynella stammeri
	[ "34310101", { fssr:"B" } ], // Decapoda Astacidae Austropotamobius pallipes
	[ "36110100", { fssr:"D" } ], // Isopoda Asellidae Asellus
	[ "36110101", { fssr:"D" } ], // Isopoda Asellidae Asellus aquaticus
	[ "36110202", { fssr:"D" } ], // Isopoda Asellidae Proasellus meridianus
	[ "36110301", { fssr:"D" } ], // Isopoda Asellidae Caecidotea communis
	[ "37110100", { fssr:"D" } ], // Amphipoda Corophiidae Corophium
	[ "37110101", { fssr:"D" } ], // Amphipoda Corophiidae Corophium curvispinum
	[ "37110102", { fssr:"D" } ], // Amphipoda Corophiidae Corophium insidiosum
	[ "37110103", { fssr:"D" } ], // Amphipoda Corophiidae Corophium lacustre
	[ "37110104", { fssr:"D" } ], // Amphipoda Corophiidae Corophium multisetosum
	[ "37110105", { fssr:"D" } ], // Amphipoda Corophiidae Corophium volutator
	[ "37130101", { fssr:"D" } ], // Amphipoda Crangonyctidae Crangonyx pseudogracilis
	[ "37140101", { fssr:"D" } ], // Amphipoda Gammaridae Echinogammarus berilloni
	[ "37140200", { fssr:"B" } ], // Amphipoda Gammaridae Gammarus
	[ "37140202", { fssr:"B" } ], // Amphipoda Gammaridae Gammarus duebeni
	[ "37140203", { fssr:"C" } ], // Amphipoda Gammaridae Gammarus lacustris
	[ "37140206", { fssr:"B" } ], // Amphipoda Gammaridae Gammarus pulex
	[ "37140208", { fssr:"D" } ], // Amphipoda Gammaridae Gammarus tigrinus
	[ "37140209", { fssr:"D" } ], // Amphipoda Gammaridae Gammarus zaddachi
	[ "37150200", { fssr:"B" } ], // Amphipoda Niphargidae Niphargus
	[ "37150201", { fssr:"B" } ], // Amphipoda Niphargidae Niphargus aquilex
	[ "37150202", { fssr:"B" } ], // Amphipoda Niphargidae Niphargus fontanus
	[ "37150203", { fssr:"B" } ], // Amphipoda Niphargidae Niphargus kochianus
	[ "37150204", { fssr:"B" } ], // Amphipoda Niphargidae Niphargus wexfordensis
	[ "37150205", { fssr:"B" } ], // Amphipoda Niphargidae Niphargus glenniei
	[ "40110100", { fssr:"C" } ], // Ephemeroptera Siphlonuridae Siphlonurus
	[ "40110101", { fssr:"C" } ], // Ephemeroptera Siphlonuridae Siphlonurus alternatus
	[ "40110102", { fssr:"C" } ], // Ephemeroptera Siphlonuridae Siphlonurus armatus
	[ "40110103", { fssr:"C" } ], // Ephemeroptera Siphlonuridae Siphlonurus lacustris
	[ "40120100", { fssr:"A" } ], // Ephemeroptera Baetidae Baetis
	[ "40120102", { fssr:"B" } ], // Ephemeroptera Baetidae Baetis buceratus
	[ "40120104", { fssr:"A" } ], // Ephemeroptera Baetidae Baetis fuscatus
	[ "40120107", { fssr:"A" } ], // Ephemeroptera Baetidae Baetis rhodani
	[ "40120108", { fssr:"A" } ], // Ephemeroptera Baetidae Baetis scambus
	[ "40120111", { fssr:"B" } ], // Ephemeroptera Baetidae Baetis vernus
	[ "40120201", { fssr:"C" } ], // Ephemeroptera Baetidae Centroptilum luteolum
	[ "40120300", { fssr:"D" } ], // Ephemeroptera Baetidae Cloeon
	[ "40120301", { fssr:"D" } ], // Ephemeroptera Baetidae Cloeon dipterum
	[ "40120302", { fssr:"C" } ], // Ephemeroptera Baetidae Cloeon simile
	[ "40120400", { fssr:"C" } ], // Ephemeroptera Baetidae Procloeon
	[ "40120401", { fssr:"C" } ], // Ephemeroptera Baetidae Procloeon bifidum
	[ "40120402", { fssr:"B" } ], // Ephemeroptera Baetidae Procloeon pennulatum
	[ "40120501", { fssr:"A" } ], // Ephemeroptera Baetidae Alainites muticus
	[ "40120601", { fssr:"A" } ], // Ephemeroptera Baetidae Labiobaetis atrebatinus
	[ "40120700", { fssr:"A" } ], // Ephemeroptera Baetidae Nigrobaetis
	[ "40120701", { fssr:"A" } ], // Ephemeroptera Baetidae Nigrobaetis digitatus
	[ "40120702", { fssr:"A" } ], // Ephemeroptera Baetidae Nigrobaetis niger
	[ "40130100", { fssr:"A" } ], // Ephemeroptera Heptageniidae Rhithrogena
	[ "40130101", { fssr:"A" } ], // Ephemeroptera Heptageniidae Rhithrogena germanica
	[ "40130102", { fssr:"A" } ], // Ephemeroptera Heptageniidae Rhithrogena semicolorata
	[ "40130200", { fssr:"A" } ], // Ephemeroptera Heptageniidae Heptagenia
	[ "40130203", { fssr:"A" } ], // Ephemeroptera Heptageniidae Heptagenia longicauda
	[ "40130204", { fssr:"A" } ], // Ephemeroptera Heptageniidae Heptagenia sulphurea
	[ "40130400", { fssr:"A" } ], // Ephemeroptera Heptageniidae Ecdyonurus
	[ "40130401", { fssr:"A" } ], // Ephemeroptera Heptageniidae Ecdyonurus dispar
	[ "40130402", { fssr:"A" } ], // Ephemeroptera Heptageniidae Ecdyonurus insignis
	[ "40130403", { fssr:"A" } ], // Ephemeroptera Heptageniidae Ecdyonurus torrentis
	[ "40130404", { fssr:"A" } ], // Ephemeroptera Heptageniidae Ecdyonurus venosus
	[ "40130500", { fssr:"A" } ], // Ephemeroptera Heptageniidae Electrogena
	[ "40130501", { fssr:"C" } ], // Ephemeroptera Heptageniidae Electrogena affinis
	[ "40130502", { fssr:"A" } ], // Ephemeroptera Heptageniidae Electrogena lateralis
	[ "40130601", { fssr:"C" } ], // Ephemeroptera Heptageniidae Kageronia fuscogrisea
	[ "40140101", { fssr:"B" } ], // Ephemeroptera Ameletidae Ameletus inopinatus
	[ "40150101", { fssr:"D" } ], // Ephemeroptera Arthropleidae Arthroplea congener
	[ "40210100", { fssr:"D" } ], // Ephemeroptera Leptophlebiidae Leptophlebia
	[ "40210101", { fssr:"D" } ], // Ephemeroptera Leptophlebiidae Leptophlebia marginata
	[ "40210102", { fssr:"D" } ], // Ephemeroptera Leptophlebiidae Leptophlebia vespertina
	[ "40210200", { fssr:"B" } ], // Ephemeroptera Leptophlebiidae Paraleptophlebia
	[ "40210201", { fssr:"A" } ], // Ephemeroptera Leptophlebiidae Paraleptophlebia cincta
	[ "40210202", { fssr:"B" } ], // Ephemeroptera Leptophlebiidae Paraleptophlebia submarginata
	[ "40210203", { fssr:"C" } ], // Ephemeroptera Leptophlebiidae Paraleptophlebia werneri
	[ "40210301", { fssr:"C" } ], // Ephemeroptera Leptophlebiidae Habrophlebia fusca
	[ "40310101", { fssr:"B" } ], // Ephemeroptera Potamanthidae Potamanthus luteus
	[ "40320100", { fssr:"C" } ], // Ephemeroptera Ephemeridae Ephemera
	[ "40320101", { fssr:"C" } ], // Ephemeroptera Ephemeridae Ephemera danica
	[ "40320102", { fssr:"D" } ], // Ephemeroptera Ephemeridae Ephemera lineata
	[ "40320103", { fssr:"D" } ], // Ephemeroptera Ephemeridae Ephemera vulgata
	[ "40410102", { fssr:"B" } ], // Ephemeroptera Ephemerellidae Ephemerella notata
	[ "40410201", { fssr:"A" } ], // Ephemeroptera Ephemerellidae Serratella ignita
	[ "40510101", { fssr:"D" } ], // Ephemeroptera Caenidae Brachycercus harrisellus
	[ "40510200", { fssr:"D" } ], // Ephemeroptera Caenidae Caenis
	[ "40510201", { fssr:"D" } ], // Ephemeroptera Caenidae Caenis horaria
	[ "40510202", { fssr:"D" } ], // Ephemeroptera Caenidae Caenis luctuosa
	[ "40510203", { fssr:"D" } ], // Ephemeroptera Caenidae Caenis macrura
	[ "40510204", { fssr:"C" } ], // Ephemeroptera Caenidae Caenis rivulorum
	[ "40510205", { fssr:"D" } ], // Ephemeroptera Caenidae Caenis robusta
	[ "40510206", { fssr:"C" } ], // Ephemeroptera Caenidae Caenis beskidensis
	[ "40510207", { fssr:"D" } ], // Ephemeroptera Caenidae Caenis pseudorivulorum
	[ "40510208", { fssr:"D" } ], // Ephemeroptera Caenidae Caenis pusilla
	[ "41110101", { fssr:"C" } ], // Plecoptera Taeniopterygidae Taeniopteryx nebulosa
	[ "41110201", { fssr:"A" } ], // Plecoptera Taeniopterygidae Rhabdiopteryx acuminata
	[ "41110300", { fssr:"A" } ], // Plecoptera Taeniopterygidae Brachyptera
	[ "41110301", { fssr:"A" } ], // Plecoptera Taeniopterygidae Brachyptera putata
	[ "41110302", { fssr:"A" } ], // Plecoptera Taeniopterygidae Brachyptera risi
	[ "41120100", { fssr:"A" } ], // Plecoptera Nemouridae Protonemura
	[ "41120101", { fssr:"A" } ], // Plecoptera Nemouridae Protonemura meyeri
	[ "41120102", { fssr:"A" } ], // Plecoptera Nemouridae Protonemura montana
	[ "41120103", { fssr:"A" } ], // Plecoptera Nemouridae Protonemura praecox
	[ "41120200", { fssr:"B" } ], // Plecoptera Nemouridae Amphinemura
	[ "41120201", { fssr:"C" } ], // Plecoptera Nemouridae Amphinemura standfussi
	[ "41120202", { fssr:"B" } ], // Plecoptera Nemouridae Amphinemura sulcicollis
	[ "41120301", { fssr:"C" } ], // Plecoptera Nemouridae Nemurella pictetii
	[ "41120400", { fssr:"C" } ], // Plecoptera Nemouridae Nemoura
	[ "41120401", { fssr:"C" } ], // Plecoptera Nemouridae Nemoura avicularis
	[ "41120402", { fssr:"B" } ], // Plecoptera Nemouridae Nemoura cambrica
	[ "41120403", { fssr:"C" } ], // Plecoptera Nemouridae Nemoura cinerea
	[ "41120405", { fssr:"B" } ], // Plecoptera Nemouridae Nemoura erratica
	[ "41130100", { fssr:"A" } ], // Plecoptera Leuctridae Leuctra
	[ "41130101", { fssr:"A" } ], // Plecoptera Leuctridae Leuctra fusca
	[ "41130102", { fssr:"B" } ], // Plecoptera Leuctridae Leuctra geniculata
	[ "41130103", { fssr:"A" } ], // Plecoptera Leuctridae Leuctra hippopus
	[ "41130104", { fssr:"A" } ], // Plecoptera Leuctridae Leuctra inermis
	[ "41130105", { fssr:"A" } ], // Plecoptera Leuctridae Leuctra moselyi
	[ "41130106", { fssr:"B" } ], // Plecoptera Leuctridae Leuctra nigra
	[ "41140100", { fssr:"A" } ], // Plecoptera Capniidae Capnia
	[ "41140101", { fssr:"A" } ], // Plecoptera Capniidae Capnia atra
	[ "41140102", { fssr:"B" } ], // Plecoptera Capniidae Capnia bifrons
	[ "41140103", { fssr:"A" } ], // Plecoptera Capniidae Capnia vidua
	[ "41210101", { fssr:"A" } ], // Plecoptera Perlodidae Isogenus nubecula
	[ "41210201", { fssr:"A" } ], // Plecoptera Perlodidae Perlodes microcephalus
	[ "41210301", { fssr:"A" } ], // Plecoptera Perlodidae Diura bicaudata
	[ "41210400", { fssr:"A" } ], // Plecoptera Perlodidae Isoperla
	[ "41210401", { fssr:"A" } ], // Plecoptera Perlodidae Isoperla grammatica
	[ "41210402", { fssr:"A" } ], // Plecoptera Perlodidae Isoperla obscura
	[ "41220101", { fssr:"A" } ], // Plecoptera Perlidae Dinocras cephalotes
	[ "41220201", { fssr:"A" } ], // Plecoptera Perlidae Perla bipunctata
	[ "41230100", { fssr:"A" } ], // Plecoptera Chloroperlidae Chloroperla
	[ "41230103", { fssr:"A" } ], // Plecoptera Chloroperlidae Chloroperla tripunctata
	[ "41230301", { fssr:"A" } ], // Plecoptera Chloroperlidae Siphonoperla torrentium
	[ "41230201", { fssr:"A" } ], // Plecoptera Chloroperlidae Xanthoperla apicalis
	[ "42110101", { fssr:"D" } ], // Odonata Platycnemididae Platycnemis pennipes
	[ "42120202", { fssr:"D" } ], // Odonata Coenagrionidae Ischnura pumilio
	[ "42120404", { fssr:"D" } ], // Odonata Coenagrionidae Coenagrion mercuriale
	[ "42140100", { fssr:"C" } ], // Odonata Calopterygidae Calopteryx
	[ "42140101", { fssr:"C" } ], // Odonata Calopterygidae Calopteryx splendens
	[ "42140102", { fssr:"B" } ], // Odonata Calopterygidae Calopteryx virgo
	[ "42210100", { fssr:"D" } ], // Odonata Gomphidae Gomphus
	[ "42210101", { fssr:"D" } ], // Odonata Gomphidae Gomphus vulgatissimus
	[ "42210102", { fssr:"D" } ], // Odonata Gomphidae Gomphus flavipes
	[ "42220101", { fssr:"D" } ], // Odonata Cordulegastridae Cordulegaster boltonii
	[ "42230101", { fssr:"C" } ], // Odonata Aeshnidae Brachytron pratense
	[ "42230200", { fssr:"C" } ], // Odonata Aeshnidae Aeshna
	[ "42230201", { fssr:"C" } ], // Odonata Aeshnidae Aeshna caerulea
	[ "42230202", { fssr:"C" } ], // Odonata Aeshnidae Aeshna cyanea
	[ "42230203", { fssr:"C" } ], // Odonata Aeshnidae Aeshna grandis
	[ "42230204", { fssr:"C" } ], // Odonata Aeshnidae Aeshna isosceles
	[ "42230205", { fssr:"C" } ], // Odonata Aeshnidae Aeshna juncea
	[ "42230206", { fssr:"C" } ], // Odonata Aeshnidae Aeshna mixta
	[ "42230207", { fssr:"C" } ], // Odonata Aeshnidae Aeshna affinis
	[ "42230300", { fssr:"C" } ], // Odonata Aeshnidae Anax
	[ "42230301", { fssr:"C" } ], // Odonata Aeshnidae Anax imperator
	[ "42230302", { fssr:"C" } ], // Odonata Aeshnidae Anax junius
	[ "42230303", { fssr:"C" } ], // Odonata Aeshnidae Anax parthenope
	[ "42230401", { fssr:"C" } ], // Odonata Aeshnidae Hemianax ephippiger
	[ "42240101", { fssr:"D" } ], // Odonata Corduliidae Cordulia aenea
	[ "42240200", { fssr:"D" } ], // Odonata Corduliidae Somatochlora
	[ "42240201", { fssr:"D" } ], // Odonata Corduliidae Somatochlora arctica
	[ "42240202", { fssr:"D" } ], // Odonata Corduliidae Somatochlora metallica
	[ "42250100", { fssr:"D" } ], // Odonata Libellulidae Orthetrum
	[ "42250101", { fssr:"D" } ], // Odonata Libellulidae Orthetrum cancellatum
	[ "42250102", { fssr:"D" } ], // Odonata Libellulidae Orthetrum coerulescens
	[ "42250200", { fssr:"D" } ], // Odonata Libellulidae Libellula
	[ "42250201", { fssr:"D" } ], // Odonata Libellulidae Libellula depressa
	[ "42250202", { fssr:"D" } ], // Odonata Libellulidae Libellula fulva
	[ "42250203", { fssr:"D" } ], // Odonata Libellulidae Libellula quadrimaculata
	[ "42250301", { fssr:"C" } ], // Odonata Libellulidae Sympetrum flaveolum
	[ "42250302", { fssr:"C" } ], // Odonata Libellulidae Sympetrum fonscolombii
	[ "42250303", { fssr:"C" } ], // Odonata Libellulidae Sympetrum nigrescens
	[ "42250304", { fssr:"C" } ], // Odonata Libellulidae Sympetrum sanguineum
	[ "42250305", { fssr:"C" } ], // Odonata Libellulidae Sympetrum danae
	[ "42250306", { fssr:"C" } ], // Odonata Libellulidae Sympetrum striolatum
	[ "42250307", { fssr:"C" } ], // Odonata Libellulidae Sympetrum vulgatum
	[ "42250308", { fssr:"C" } ], // Odonata Libellulidae Sympetrum meridionale
	[ "42250309", { fssr:"C" } ], // Odonata Libellulidae Sympetrum pedemontanum
	[ "42250501", { fssr:"C" } ], // Odonata Libellulidae Crocothemis erythraea
	[ "43310101", { fssr:"D" } ], // Hemiptera Nepidae Nepa cinerea
	[ "43420101", { fssr:"A" } ], // Hemiptera Aphelocheiridae Aphelocheirus aestivalis
	[ "43610100", { fssr:"B" } ], // Hemiptera Corixidae Micronecta
	[ "43610111", { fssr:"B" } ], // Hemiptera Corixidae Micronecta (Dichaetonecta) scholtzi
	[ "43610121", { fssr:"C" } ], // Hemiptera Corixidae Micronecta (Micronecta) minutissima
	[ "43610122", { fssr:"B" } ], // Hemiptera Corixidae Micronecta (Micronecta) poweri
	[ "43610123", { fssr:"C" } ], // Hemiptera Corixidae Micronecta (Micronecta) griseola
	[ "43610401", { fssr:"D" } ], // Hemiptera Corixidae Glaenocorisa propinqua
	[ "43610500", { fssr:"D" } ], // Hemiptera Corixidae Callicorixa
	[ "43610501", { fssr:"D" } ], // Hemiptera Corixidae Callicorixa praeusta
	[ "43610502", { fssr:"C" } ], // Hemiptera Corixidae Callicorixa wollastoni
	[ "43610600", { fssr:"D" } ], // Hemiptera Corixidae Corixa
	[ "43610601", { fssr:"D" } ], // Hemiptera Corixidae Corixa affinis
	[ "43610602", { fssr:"D" } ], // Hemiptera Corixidae Corixa dentipes
	[ "43610603", { fssr:"D" } ], // Hemiptera Corixidae Corixa panzeri
	[ "43610604", { fssr:"D" } ], // Hemiptera Corixidae Corixa punctata
	[ "43610605", { fssr:"D" } ], // Hemiptera Corixidae Corixa iberica
	[ "43610700", { fssr:"D" } ], // Hemiptera Corixidae Hesperocorixa
	[ "43610701", { fssr:"D" } ], // Hemiptera Corixidae Hesperocorixa castanea
	[ "43610702", { fssr:"D" } ], // Hemiptera Corixidae Hesperocorixa linnaei
	[ "43610703", { fssr:"D" } ], // Hemiptera Corixidae Hesperocorixa moesta
	[ "43610704", { fssr:"D" } ], // Hemiptera Corixidae Hesperocorixa sahlbergi
	[ "43610800", { fssr:"D" } ], // Hemiptera Corixidae Arctocorisa
	[ "43610801", { fssr:"C" } ], // Hemiptera Corixidae Arctocorisa carinata
	[ "43610802", { fssr:"D" } ], // Hemiptera Corixidae Arctocorisa germari
	[ "43610900", { fssr:"D" } ], // Hemiptera Corixidae Sigara
	[ "43610911", { fssr:"D" } ], // Hemiptera Corixidae Sigara (Sigara) dorsalis
	[ "43610912", { fssr:"D" } ], // Hemiptera Corixidae Sigara (Sigara) striata
	[ "43610921", { fssr:"D" } ], // Hemiptera Corixidae Sigara (Subsigara) distincta
	[ "43610922", { fssr:"C" } ], // Hemiptera Corixidae Sigara (Subsigara) falleni
	[ "43610923", { fssr:"C" } ], // Hemiptera Corixidae Sigara (Subsigara) fallenoidea
	[ "43610924", { fssr:"D" } ], // Hemiptera Corixidae Sigara (Subsigara) fossarum
	[ "43610925", { fssr:"C" } ], // Hemiptera Corixidae Sigara (Subsigara) scotti
	[ "43610926", { fssr:"D" } ], // Hemiptera Corixidae Sigara (Subsigara) iactans
	[ "43610941", { fssr:"D" } ], // Hemiptera Corixidae Sigara (Vermicorixa) lateralis
	[ "43610951", { fssr:"D" } ], // Hemiptera Corixidae Sigara (Pseudovermicorixa) nigrolineata
	[ "43610971", { fssr:"D" } ], // Hemiptera Corixidae Sigara (Retrocorixa) limitata
	[ "43610972", { fssr:"D" } ], // Hemiptera Corixidae Sigara (Retrocorixa) semistriata
	[ "43610973", { fssr:"C" } ], // Hemiptera Corixidae Sigara (Retrocorixa) venusta
	[ "43610981", { fssr:"D" } ], // Hemiptera Corixidae Sigara (Halicorixa) selecta
	[ "43610982", { fssr:"D" } ], // Hemiptera Corixidae Sigara (Halicorixa) stagnalis
	[ "43611101", { fssr:"D" } ], // Hemiptera Corixinae Paracorixa concinna
	[ "45110101", { fssr:"C" } ], // Coleoptera Haliplidae Brychius elevatus
	[ "45110201", { fssr:"D" } ], // Coleoptera Haliplidae Peltodytes caesus
	[ "45110300", { fssr:"D" } ], // Coleoptera Haliplidae Haliplus
	[ "45110341", { fssr:"D" } ], // Coleoptera Haliplidae Haliplus (Haliplinus) apicalis
	[ "45110321", { fssr:"D" } ], // Coleoptera Haliplidae Haliplus (Haliplus) confinis
	[ "45110351", { fssr:"C" } ], // Coleoptera Haliplidae Haliplus (Liaphlus) flavicollis
	[ "45110342", { fssr:"D" } ], // Coleoptera Haliplidae Haliplus (Haliplinus) fluviatilis
	[ "45110352", { fssr:"D" } ], // Coleoptera Haliplidae Haliplus (Liaphlus) fulvus
	[ "45110343", { fssr:"D" } ], // Coleoptera Haliplidae Haliplus (Haliplinus) furcatus
	[ "45110344", { fssr:"D" } ], // Coleoptera Haliplidae Haliplus (Haliplinus) heydeni
	[ "45110345", { fssr:"D" } ], // Coleoptera Haliplidae Haliplus (Haliplinus) immaculatus
	[ "45110353", { fssr:"D" } ], // Coleoptera Haliplidae Haliplus (Liaphlus) laminatus
	[ "45110331", { fssr:"C" } ], // Coleoptera Haliplidae Haliplus (Neohaliplus) lineatocollis
	[ "45110346", { fssr:"C" } ], // Coleoptera Haliplidae Haliplus (Haliplinus) lineolatus
	[ "45110354", { fssr:"C" } ], // Coleoptera Haliplidae Haliplus (Liaphlus) mucronatus
	[ "45110347", { fssr:"D" } ], // Coleoptera Haliplidae Haliplus (Haliplinus) ruficollis
	[ "45110355", { fssr:"D" } ], // Coleoptera Haliplidae Haliplus (Liaphlus) variegatus
	[ "45110323", { fssr:"C" } ], // Coleoptera Haliplidae Haliplus (Haliplus) varius
	[ "45110348", { fssr:"C" } ], // Coleoptera Haliplidae Haliplus (Haliplinus) sibiricus
	[ "45120101", { fssr:"D" } ], // Coleoptera Paelobiidae Hygrobia hermanni
	[ "45130100", { fssr:"D" } ], // Coleoptera Noteridae Noterus
	[ "45130101", { fssr:"D" } ], // Coleoptera Noteridae Noterus clavicornis
	[ "45130102", { fssr:"D" } ], // Coleoptera Noteridae Noterus crassicornis
	[ "45140100", { fssr:"D" } ], // Coleoptera Dytiscidae Laccophilus
	[ "45140101", { fssr:"D" } ], // Coleoptera Dytiscidae Laccophilus hyalinus
	[ "45140102", { fssr:"D" } ], // Coleoptera Dytiscidae Laccophilus minutus
	[ "45140103", { fssr:"D" } ], // Coleoptera Dytiscidae Laccophilus poecilus
	[ "45140201", { fssr:"D" } ], // Coleoptera Dytiscidae Hydrovatus clypealis
	[ "45140300", { fssr:"D" } ], // Coleoptera Dytiscidae Hyphydrus
	[ "45140301", { fssr:"D" } ], // Coleoptera Dytiscidae Hyphydrus ovatus
	[ "45140302", { fssr:"D" } ], // Coleoptera Dytiscidae Hyphydrus aubei
	[ "45140401", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroglyphus geminus
	[ "45140501", { fssr:"B" } ], // Coleoptera Dytiscidae Bidessus minutissimus
	[ "45140502", { fssr:"D" } ], // Coleoptera Dytiscidae Bidessus unistriatus
	[ "45140600", { fssr:"D" } ], // Coleoptera Dytiscidae Hygrotus
	[ "45140611", { fssr:"D" } ], // Coleoptera Dytiscidae Hygrotus (Hygrotus) decoratus
	[ "45140612", { fssr:"D" } ], // Coleoptera Dytiscidae Hygrotus (Hygrotus) inaequalis
	[ "45140613", { fssr:"D" } ], // Coleoptera Dytiscidae Hygrotus (Hygrotus) quinquelineatus
	[ "45140614", { fssr:"D" } ], // Coleoptera Dytiscidae Hygrotus (Hygrotus) versicolor
	[ "45140621", { fssr:"D" } ], // Coleoptera Dytiscidae Hygrotus (Coelambus) confluens
	[ "45140622", { fssr:"D" } ], // Coleoptera Dytiscidae Hygrotus (Coelambus) impressopunctatus
	[ "45140623", { fssr:"C" } ], // Coleoptera Dytiscidae Hygrotus (Coelambus) nigrolineatus
	[ "45140624", { fssr:"D" } ], // Coleoptera Dytiscidae Hygrotus (Coelambus) novemlineatus
	[ "45140625", { fssr:"D" } ], // Coleoptera Dytiscidae Hygrotus (Coelambus) parallellogrammus
	[ "45140800", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus
	[ "45140801", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus angustatus
	[ "45140803", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus discretus
	[ "45140805", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus elongatulus
	[ "45140806", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus erythrocephalus
	[ "45140807", { fssr:"B" } ], // Coleoptera Dytiscidae Hydroporus ferrugineus
	[ "45140811", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus gyllenhalii
	[ "45140812", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus incognitus
	[ "45140813", { fssr:"C" } ], // Coleoptera Dytiscidae Hydroporus longicornis
	[ "45140814", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus longulus
	[ "45140815", { fssr:"B" } ], // Coleoptera Dytiscidae Hydroporus marginatus
	[ "45140816", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus melanarius
	[ "45140817", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus memnonius
	[ "45140818", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus morio
	[ "45140819", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus neglectus
	[ "45140821", { fssr:"C" } ], // Coleoptera Dytiscidae Hydroporus nigrita
	[ "45140822", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus obscurus
	[ "45140823", { fssr:"B" } ], // Coleoptera Dytiscidae Hydroporus obsoletus
	[ "45140824", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus palustris
	[ "45140826", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus pubescens
	[ "45140827", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus rufifrons
	[ "45140829", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus striola
	[ "45140831", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus tessellatus
	[ "45140833", { fssr:"D" } ], // Coleoptera Dytiscidae Hydroporus umbrosus
	[ "45140901", { fssr:"B" } ], // Coleoptera Dytiscidae Stictonectes lepidus
	[ "45141000", { fssr:"D" } ], // Coleoptera Dytiscidae Graptodytes
	[ "45141001", { fssr:"D" } ], // Coleoptera Dytiscidae Graptodytes bilineatus
	[ "45141002", { fssr:"D" } ], // Coleoptera Dytiscidae Graptodytes flavipes
	[ "45141003", { fssr:"D" } ], // Coleoptera Dytiscidae Graptodytes granularis
	[ "45141004", { fssr:"D" } ], // Coleoptera Dytiscidae Graptodytes pictus
	[ "45141101", { fssr:"D" } ], // Coleoptera Dytiscidae Porhydrus lineatus
	[ "45141201", { fssr:"A" } ], // Coleoptera Dytiscidae Deronectes latus
	[ "45141300", { fssr:"C" } ], // Coleoptera Dytiscidae Nebrioporus
	[ "45141311", { fssr:"C" } ], // Coleoptera Dytiscidae Nebrioporus (Nebrioporus) assimilis
	[ "45141312", { fssr:"C" } ], // Coleoptera Dytiscidae Nebrioporus (Nebrioporus) depressus
	[ "45141313", { fssr:"C" } ], // Coleoptera Dytiscidae Nebrioporus (Nebrioporus) elegans
	[ "45141321", { fssr:"D" } ], // Coleoptera Dytiscidae Nebrioporus (Zimmermannius) canaliculatus
	[ "45141400", { fssr:"C" } ], // Coleoptera Dytiscidae Stictotarsus
	[ "45141401", { fssr:"C" } ], // Coleoptera Dytiscidae Stictotarsus duodecimpustulatus
	[ "45141402", { fssr:"C" } ], // Coleoptera Dytiscidae Stictotarsus multilineatus
	[ "45141500", { fssr:"B" } ], // Coleoptera Dytiscidae Oreodytes
	[ "45141501", { fssr:"B" } ], // Coleoptera Dytiscidae Oreodytes davisii
	[ "45141502", { fssr:"B" } ], // Coleoptera Dytiscidae Oreodytes sanmarkii
	[ "45141503", { fssr:"B" } ], // Coleoptera Dytiscidae Oreodytes septentrionalis
	[ "45141504", { fssr:"B" } ], // Coleoptera Dytiscidae Oreodytes alpinus
	[ "45141601", { fssr:"D" } ], // Coleoptera Dytiscidae Scarodytes halensis
	[ "45141801", { fssr:"D" } ], // Coleoptera Dytiscidae Liopterus haemorrhoidalis
	[ "45141901", { fssr:"B" } ], // Coleoptera Dytiscidae Platambus maculatus
	[ "45142000", { fssr:"D" } ], // Coleoptera Dytiscidae Agabus
	[ "45142031", { fssr:"C" } ], // Coleoptera Dytiscidae Agabus (Acatodes) arcticus
	[ "45142052", { fssr:"B" } ], // Coleoptera Dytiscidae Agabus (Gaurodytes) biguttatus
	[ "45142053", { fssr:"D" } ], // Coleoptera Dytiscidae Agabus (Gaurodytes) bipustulatus
	[ "45142054", { fssr:"B" } ], // Coleoptera Dytiscidae Agabus (Gaurodytes) brunneus
	[ "45142055", { fssr:"D" } ], // Coleoptera Dytiscidae Agabus (Gaurodytes) conspersus
	[ "45142056", { fssr:"C" } ], // Coleoptera Dytiscidae Agabus (Gaurodytes) didymus
	[ "45142057", { fssr:"B" } ], // Coleoptera Dytiscidae Agabus (Gaurodytes) guttatus
	[ "45142041", { fssr:"D" } ], // Coleoptera Dytiscidae Agabus (Agabus) labiatus
	[ "45142058", { fssr:"D" } ], // Coleoptera Dytiscidae Agabus (Gaurodytes) melanarius
	[ "45142059", { fssr:"D" } ], // Coleoptera Dytiscidae Agabus (Gaurodytes) nebulosus
	[ "4514205A", { fssr:"C" } ], // Coleoptera Dytiscidae Agabus (Gaurodytes) paludosus
	[ "45142033", { fssr:"D" } ], // Coleoptera Dytiscidae Agabus (Acatodes) sturmii
	[ "45142042", { fssr:"D" } ], // Coleoptera Dytiscidae Agabus (Agabus) uliginosus
	[ "45142043", { fssr:"D" } ], // Coleoptera Dytiscidae Agabus (Agabus) undulatus
	[ "4514205C", { fssr:"D" } ], // Coleoptera Dytiscidae Agabus (Gaurodytes) unguicularis
	[ "45142100", { fssr:"D" } ], // Coleoptera Dytiscidae Ilybius
	[ "45142102", { fssr:"D" } ], // Coleoptera Dytiscidae Ilybius ater
	[ "45142103", { fssr:"D" } ], // Coleoptera Dytiscidae Ilybius fenestratus
	[ "45142104", { fssr:"C" } ], // Coleoptera Dytiscidae Ilybius fuliginosus
	[ "45142106", { fssr:"D" } ], // Coleoptera Dytiscidae Ilybius quadriguttatus
	[ "45142107", { fssr:"D" } ], // Coleoptera Dytiscidae Ilybius subaeneus
	[ "45142108", { fssr:"D" } ], // Coleoptera Dytiscidae Ilybius chalconatus
	[ "45142109", { fssr:"D" } ], // Coleoptera Dytiscidae Ilybius montanus
	[ "45142200", { fssr:"D" } ], // Coleoptera Dytiscidae Rhantus
	[ "45142222", { fssr:"D" } ], // Coleoptera Dytiscidae Rhantus (Rhantus) exsoletus
	[ "45142223", { fssr:"D" } ], // Coleoptera Dytiscidae Rhantus (Rhantus) frontalis
	[ "45142211", { fssr:"D" } ], // Coleoptera Dytiscidae Rhantus (Nartus) grapii
	[ "45142224", { fssr:"D" } ], // Coleoptera Dytiscidae Rhantus (Rhantus) suturalis
	[ "45142225", { fssr:"D" } ], // Coleoptera Dytiscidae Rhantus (Rhantus) suturellus
	[ "45142700", { fssr:"D" } ], // Coleoptera Dytiscidae Dytiscus
	[ "45142701", { fssr:"D" } ], // Coleoptera Dytiscidae Dytiscus circumcinctus
	[ "45142702", { fssr:"D" } ], // Coleoptera Dytiscidae Dytiscus circumflexus
	[ "45142703", { fssr:"D" } ], // Coleoptera Dytiscidae Dytiscus dimidiatus
	[ "45142704", { fssr:"D" } ], // Coleoptera Dytiscidae Dytiscus lapponicus
	[ "45142705", { fssr:"D" } ], // Coleoptera Dytiscidae Dytiscus marginalis
	[ "45142706", { fssr:"D" } ], // Coleoptera Dytiscidae Dytiscus semisulcatus
	[ "45142901", { fssr:"D" } ], // Coleoptera Dytiscidae Suphrodytes dorsalis
	[ "45150401", { fssr:"A" } ], // Coleoptera Gyrinidae Orectochilus villosus
	[ "45360100", { fssr:"D" } ], // Coleoptera Hydrochidae Hydrochus
	[ "45360101", { fssr:"D" } ], // Coleoptera Hydrochidae Hydrochus angustatus
	[ "45360102", { fssr:"D" } ], // Coleoptera Hydrochidae Hydrochus brevis
	[ "45360103", { fssr:"D" } ], // Coleoptera Hydrochidae Hydrochus crenatus
	[ "45360104", { fssr:"D" } ], // Coleoptera Hydrochidae Hydrochus elongatus
	[ "45360105", { fssr:"D" } ], // Coleoptera Hydrochidae Hydrochus ignicollis
	[ "45360106", { fssr:"D" } ], // Coleoptera Hydrochidae Hydrochus nitidicollis
	[ "45360107", { fssr:"D" } ], // Coleoptera Hydrochidae Hydrochus megaphallus
	[ "45330100", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus
	[ "45330131", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Trichohelophorus) alternans
	[ "45330141", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Megahelophorus) aequalis
	[ "45330142", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Megahelophorus) grandis
	[ "45330151", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Atracthelophorus) arvernicus
	[ "45330152", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Atracthelophorus) brevipalpis
	[ "45330161", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Helophorus) dorsalis
	[ "45330162", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Helophorus) flavipes
	[ "45330163", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Helophorus) fulgidicollis
	[ "45330164", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Helophorus) granularis
	[ "45330165", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Helophorus) griseus
	[ "45330166", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Helophorus) laticollis
	[ "45330167", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Helophorus) longitarsis
	[ "45330168", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Helophorus) minutus
	[ "45330169", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Helophorus) nanus
	[ "4533016A", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Helophorus) obscurus
	[ "4533016B", { fssr:"D" } ], // Coleoptera Helophoridae Helophorus (Helophorus) strigifrons
	[ "45340101", { fssr:"D" } ], // Coleoptera Georissidae Georissus crenulatus
	[ "45351000", { fssr:"D" } ], // Coleoptera Hydrophilidae Paracymus
	[ "45351001", { fssr:"D" } ], // Coleoptera Hydrophilidae Paracymus aeneus
	[ "45351002", { fssr:"D" } ], // Coleoptera Hydrophilidae Paracymus scutellaris
	[ "45351101", { fssr:"D" } ], // Coleoptera Hydrophilidae Hydrobius fuscipes
	[ "45351201", { fssr:"D" } ], // Coleoptera Hydrophilidae Limnoxenus niger
	[ "45351300", { fssr:"D" } ], // Coleoptera Hydrophilidae Anacaena
	[ "45351301", { fssr:"D" } ], // Coleoptera Hydrophilidae Anacaena bipustulata
	[ "45351302", { fssr:"C" } ], // Coleoptera Hydrophilidae Anacaena globulus
	[ "45351303", { fssr:"D" } ], // Coleoptera Hydrophilidae Anacaena limbata
	[ "45351304", { fssr:"D" } ], // Coleoptera Hydrophilidae Anacaena lutescens
	[ "45351400", { fssr:"D" } ], // Coleoptera Hydrophilidae Laccobius
	[ "45351411", { fssr:"D" } ], // Coleoptera Hydrophilidae Laccobius (Laccobius) colon
	[ "45351412", { fssr:"D" } ], // Coleoptera Hydrophilidae Laccobius (Laccobius) minutus
	[ "45351421", { fssr:"D" } ], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) atratus
	[ "45351422", { fssr:"D" } ], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) ytenensis
	[ "45351423", { fssr:"D" } ], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) bipunctatus
	[ "45351425", { fssr:"C" } ], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) simulatrix
	[ "45351426", { fssr:"D" } ], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) sinuatus
	[ "45351427", { fssr:"D" } ], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) striatulus
	[ "45351600", { fssr:"D" } ], // Coleoptera Hydrophilidae Helochares
	[ "45351601", { fssr:"D" } ], // Coleoptera Hydrophilidae Helochares lividus
	[ "45351602", { fssr:"D" } ], // Coleoptera Hydrophilidae Helochares obscurus
	[ "45351700", { fssr:"D" } ], // Coleoptera Hydrophilidae Enochrus
	[ "45351702", { fssr:"D" } ], // Coleoptera Hydrophilidae Enochrus bicolor
	[ "45351703", { fssr:"D" } ], // Coleoptera Hydrophilidae Enochrus coarctatus
	[ "45351705", { fssr:"D" } ], // Coleoptera Hydrophilidae Enochrus melanocephalus
	[ "45351706", { fssr:"D" } ], // Coleoptera Hydrophilidae Enochrus ochropterus
	[ "45351707", { fssr:"D" } ], // Coleoptera Hydrophilidae Enochrus quadripunctatus
	[ "45351708", { fssr:"D" } ], // Coleoptera Hydrophilidae Enochrus testaceus
	[ "45351709", { fssr:"D" } ], // Coleoptera Hydrophilidae Enochrus fuscipennis
	[ "45351711", { fssr:"D" } ], // Coleoptera Hydrophilidae Enochrus halophilus
	[ "45351712", { fssr:"D" } ], // Coleoptera Hydrophilidae Enochrus nigritus
	[ "45352001", { fssr:"D" } ], // Coleoptera Hydrophilidae Cymbiodyta marginellus
	[ "45352100", { fssr:"D" } ], // Coleoptera Hydrophilidae Chaetarthria
	[ "45352101", { fssr:"D" } ], // Coleoptera Hydrophilidae Chaetarthria seminulum
	[ "45352103", { fssr:"D" } ], // Coleoptera Hydrophilidae Chaetarthria simillima
	[ "45352201", { fssr:"D" } ], // Coleoptera Hydrophilidae Hydrochara caraboides
	[ "45352301", { fssr:"D" } ], // Coleoptera Hydrophilidae Hydrophilus piceus
	[ "45352400", { fssr:"D" } ], // Coleoptera Hydrophilidae Berosus
	[ "45352411", { fssr:"D" } ], // Coleoptera Hydrophilidae Berosus (Berosus) affinis
	[ "45352412", { fssr:"D" } ], // Coleoptera Hydrophilidae Berosus (Berosus) luridus
	[ "45352413", { fssr:"D" } ], // Coleoptera Hydrophilidae Berosus (Berosus) signaticollis
	[ "45352421", { fssr:"D" } ], // Coleoptera Hydrophilidae Berosus (Enoplurus) fulvus
	[ "45353001", { fssr:"D" } ], // Coleoptera Hydrophilidae Coelostoma orbiculare
	[ "45353100", { fssr:"D" } ], // Coleoptera Hydrophilidae Cercyon
	[ "45353143", { fssr:"C" } ], // Coleoptera Hydrophilidae Cercyon (Cercyon) bifenestratus
	[ "45353144", { fssr:"D" } ], // Coleoptera Hydrophilidae Cercyon (Cercyon) convexiusculus
	[ "4535314C", { fssr:"D" } ], // Coleoptera Hydrophilidae Cercyon (Cercyon) marinus
	[ "4535314K", { fssr:"D" } ], // Coleoptera Hydrophilidae Cercyon (Cercyon) tristis
	[ "45353151", { fssr:"D" } ], // Coleoptera Hydrophilidae Cercyon (Dicyrtocercyon) ustulatus
	[ "45410100", { fssr:"D" } ], // Coleoptera Hydraenidae Ochthebius
	[ "45410121", { fssr:"D" } ], // Coleoptera Hydraenidae Ochthebius (Asiobates) auriculatus
	[ "45410122", { fssr:"D" } ], // Coleoptera Hydraenidae Ochthebius (Asiobates) bicolon
	[ "45410123", { fssr:"D" } ], // Coleoptera Hydraenidae Ochthebius (Asiobates) dilatatus
	[ "45410151", { fssr:"D" } ], // Coleoptera Hydraenidae Ochthebius (Ochthebius) lenensis
	[ "45410132", { fssr:"D" } ], // Coleoptera Hydraenidae Ochthebius (Homalochthebius) minimus
	[ "45410141", { fssr:"D" } ], // Coleoptera Hydraenidae Ochthebius (Hymenodes) nanus
	[ "45410153", { fssr:"D" } ], // Coleoptera Hydraenidae Ochthebius (Ochthebius) pusillus
	[ "45410154", { fssr:"D" } ], // Coleoptera Hydraenidae Ochthebius (Ochthebius) viridis
	[ "45410401", { fssr:"D" } ], // Coleoptera Hydraenidae Aulacochthebius exaratus
	[ "45410200", { fssr:"B" } ], // Coleoptera Hydraenidae Hydraena
	[ "45410201", { fssr:"D" } ], // Coleoptera Hydraenidae Hydraena britteni
	[ "45410202", { fssr:"B" } ], // Coleoptera Hydraenidae Hydraena gracilis
	[ "45410203", { fssr:"B" } ], // Coleoptera Hydraenidae Hydraena flavipes
	[ "45410204", { fssr:"B" } ], // Coleoptera Hydraenidae Hydraena nigrita
	[ "45410205", { fssr:"D" } ], // Coleoptera Hydraenidae Hydraena palustris
	[ "45410206", { fssr:"C" } ], // Coleoptera Hydraenidae Hydraena pulchella
	[ "45410207", { fssr:"B" } ], // Coleoptera Hydraenidae Hydraena pygmaea
	[ "45410208", { fssr:"B" } ], // Coleoptera Hydraenidae Hydraena riparia
	[ "45410209", { fssr:"B" } ], // Coleoptera Hydraenidae Hydraena rufipes
	[ "45410211", { fssr:"D" } ], // Coleoptera Hydraenidae Hydraena testacea
	[ "45410300", { fssr:"D" } ], // Coleoptera Hydraenidae Limnebius
	[ "45410301", { fssr:"D" } ], // Coleoptera Hydraenidae Limnebius aluta
	[ "45410302", { fssr:"D" } ], // Coleoptera Hydraenidae Limnebius crinifer
	[ "45410303", { fssr:"D" } ], // Coleoptera Hydraenidae Limnebius nitidus
	[ "45410304", { fssr:"D" } ], // Coleoptera Hydraenidae Limnebius papposus
	[ "45410305", { fssr:"C" } ], // Coleoptera Hydraenidae Limnebius truncatellus
	[ "45510100", { fssr:"B" } ], // Coleoptera Scirtidae Elodes
	[ "45510201", { fssr:"D" } ], // Coleoptera Scirtidae Microcara testacea
	[ "45510300", { fssr:"D" } ], // Coleoptera Scirtidae Cyphon
	[ "45510701", { fssr:"B" } ], // Coleoptera Scirtidae Odeles marginata
	[ "45620200", { fssr:"D" } ], // Coleoptera Dryopidae Dryops
	[ "45620211", { fssr:"D" } ], // Coleoptera Dryopidae Dryops (Dryops) anglicanus
	[ "45620212", { fssr:"D" } ], // Coleoptera Dryopidae Dryops (Dryops) auriculatus
	[ "45620213", { fssr:"D" } ], // Coleoptera Dryopidae Dryops (Dryops) ernesti
	[ "45620214", { fssr:"D" } ], // Coleoptera Dryopidae Dryops (Dryops) griseus
	[ "45620215", { fssr:"D" } ], // Coleoptera Dryopidae Dryops (Dryops) luridus
	[ "45620221", { fssr:"D" } ], // Coleoptera Dryopidae Dryops (Yrdops) nitidulus
	[ "45620216", { fssr:"D" } ], // Coleoptera Dryopidae Dryops (Dryops) striatellus
	[ "45620217", { fssr:"D" } ], // Coleoptera Dryopidae Dryops (Dryops) similaris
	[ "45630101", { fssr:"B" } ], // Coleoptera Elmidae Elmis aenea
	[ "45630201", { fssr:"C" } ], // Coleoptera Elmidae Esolus parallelepipedus
	[ "45630301", { fssr:"B" } ], // Coleoptera Elmidae Limnius volckmari
	[ "45630501", { fssr:"B" } ], // Coleoptera Elmidae Normandia nitens
	[ "45630600", { fssr:"C" } ], // Coleoptera Elmidae Oulimnius
	[ "45630601", { fssr:"C" } ], // Coleoptera Elmidae Oulimnius major
	[ "45630602", { fssr:"C" } ], // Coleoptera Elmidae Oulimnius rivularis
	[ "45630603", { fssr:"C" } ], // Coleoptera Elmidae Oulimnius troglodytes
	[ "45630604", { fssr:"C" } ], // Coleoptera Elmidae Oulimnius tuberculatus
	[ "45630700", { fssr:"B" } ], // Coleoptera Elmidae Riolus
	[ "45630701", { fssr:"B" } ], // Coleoptera Elmidae Riolus cupreus
	[ "45630702", { fssr:"B" } ], // Coleoptera Elmidae Riolus subviolaceus
	[ "45630801", { fssr:"B" } ], // Coleoptera Elmidae Stenelmis canaliculata
	[ "45640101", { fssr:"D" } ], // Coleoptera Limnichidae Limnichus pygmaeus
	[ "45650100", { fssr:"D" } ], // Coleoptera Heteroceridae Heterocerus
	[ "45650101", { fssr:"D" } ], // Coleoptera Heteroceridae Heterocerus flexuosus
	[ "45650102", { fssr:"D" } ], // Coleoptera Heteroceridae Heterocerus fossor
	[ "45650103", { fssr:"D" } ], // Coleoptera Heteroceridae Heterocerus fusculus
	[ "45650105", { fssr:"D" } ], // Coleoptera Heteroceridae Heterocerus marginatus
	[ "45650107", { fssr:"D" } ], // Coleoptera Heteroceridae Heterocerus obsoletus
	[ "45650108", { fssr:"D" } ], // Coleoptera Heteroceridae Heterocerus fenestratus
	[ "46110101", { fssr:"B" } ], // Megaloptera Sialidae Sialis fuliginosa
	[ "46110102", { fssr:"D" } ], // Megaloptera Sialidae Sialis lutaria
	[ "46110103", { fssr:"C" } ], // Megaloptera Sialidae Sialis nigripes
	[ "47110101", { fssr:"B" } ], // Neuroptera Osmylidae Osmylus fulvicephalus
	[ "47120100", { fssr:"B" } ], // Neuroptera Sisyridae Sisyra
	[ "47120101", { fssr:"B" } ], // Neuroptera Sisyridae Sisyra dalii
	[ "47120102", { fssr:"B" } ], // Neuroptera Sisyridae Sisyra fuscata
	[ "47120103", { fssr:"B" } ], // Neuroptera Sisyridae Sisyra terminalis
	[ "48110100", { fssr:"A" } ], // Trichoptera Rhyacophilidae Rhyacophila
	[ "48110101", { fssr:"A" } ], // Trichoptera Rhyacophilidae Rhyacophila dorsalis
	[ "48110102", { fssr:"A" } ], // Trichoptera Rhyacophilidae Rhyacophila munda
	[ "48110103", { fssr:"A" } ], // Trichoptera Rhyacophilidae Rhyacophila obliterata
	[ "48110104", { fssr:"A" } ], // Trichoptera Rhyacophilidae Rhyacophila fasciata
	[ "48120100", { fssr:"A" } ], // Trichoptera Glossosomatidae Glossosoma
	[ "48120101", { fssr:"A" } ], // Trichoptera Glossosomatidae Glossosoma boltoni
	[ "48120102", { fssr:"A" } ], // Trichoptera Glossosomatidae Glossosoma conformis
	[ "48120103", { fssr:"A" } ], // Trichoptera Glossosomatidae Glossosoma intermedium
	[ "48120200", { fssr:"A" } ], // Trichoptera Glossosomatidae Agapetus
	[ "48120201", { fssr:"A" } ], // Trichoptera Glossosomatidae Agapetus delicatulus
	[ "48120202", { fssr:"A" } ], // Trichoptera Glossosomatidae Agapetus fuscipes
	[ "48120203", { fssr:"A" } ], // Trichoptera Glossosomatidae Agapetus ochripes
	[ "48130201", { fssr:"B" } ], // Trichoptera Hydroptilidae Allotrichia pallicornis
	[ "48210101", { fssr:"A" } ], // Trichoptera Philopotamidae Philopotamus montanus
	[ "48210200", { fssr:"A" } ], // Trichoptera Philopotamidae Wormaldia
	[ "48210201", { fssr:"A" } ], // Trichoptera Philopotamidae Wormaldia mediana
	[ "48210202", { fssr:"A" } ], // Trichoptera Philopotamidae Wormaldia occipitalis
	[ "48210203", { fssr:"A" } ], // Trichoptera Philopotamidae Wormaldia subnigra
	[ "48210301", { fssr:"A" } ], // Trichoptera Philopotamidae Chimarra marginata
	[ "48220201", { fssr:"A" } ], // Trichoptera Psychomyiidae Metalype fragilis
	[ "48220301", { fssr:"A" } ], // Trichoptera Psychomyiidae Psychomyia pusilla
	[ "48220400", { fssr:"A" } ], // Trichoptera Psychomyiidae Tinodes
	[ "48220401", { fssr:"A" } ], // Trichoptera Psychomyiidae Tinodes assimilis
	[ "48220402", { fssr:"A" } ], // Trichoptera Psychomyiidae Tinodes dives
	[ "48220403", { fssr:"A" } ], // Trichoptera Psychomyiidae Tinodes maclachlani
	[ "48220404", { fssr:"A" } ], // Trichoptera Psychomyiidae Tinodes maculicornis
	[ "48220405", { fssr:"A" } ], // Trichoptera Psychomyiidae Tinodes pallidulus
	[ "48220406", { fssr:"A" } ], // Trichoptera Psychomyiidae Tinodes rostocki
	[ "48220407", { fssr:"A" } ], // Trichoptera Psychomyiidae Tinodes unicolor
	[ "48220408", { fssr:"B" } ], // Trichoptera Psychomyiidae Tinodes waeneri
	[ "48230101", { fssr:"C" } ], // Trichoptera Ecnomidae Ecnomus tenellus
	[ "48240103", { fssr:"B" } ], // Trichoptera Polycentropodidae Cyrnus trimaculatus
	[ "48240301", { fssr:"B" } ], // Trichoptera Polycentropodidae Neureclipsis bimaculata
	[ "48240400", { fssr:"B" } ], // Trichoptera Polycentropodidae Plectrocnemia
	[ "48240401", { fssr:"B" } ], // Trichoptera Polycentropodidae Plectrocnemia brevis
	[ "48240402", { fssr:"B" } ], // Trichoptera Polycentropodidae Plectrocnemia conspersa
	[ "48240403", { fssr:"B" } ], // Trichoptera Polycentropodidae Plectrocnemia geniculata
	[ "48240500", { fssr:"B" } ], // Trichoptera Polycentropodidae Polycentropus
	[ "48240501", { fssr:"B" } ], // Trichoptera Polycentropodidae Polycentropus flavomaculatus
	[ "48240502", { fssr:"B" } ], // Trichoptera Polycentropodidae Polycentropus irroratus
	[ "48240503", { fssr:"B" } ], // Trichoptera Polycentropodidae Polycentropus kingi
	[ "48250101", { fssr:"B" } ], // Trichoptera Hydropsychidae Cheumatopsyche lepida
	[ "48250200", { fssr:"A" } ], // Trichoptera Hydropsychidae Hydropsyche
	[ "48250201", { fssr:"B" } ], // Trichoptera Hydropsychidae Hydropsyche angustipennis
	[ "48250202", { fssr:"B" } ], // Trichoptera Hydropsychidae Hydropsyche bulgaromanorum
	[ "48250203", { fssr:"B" } ], // Trichoptera Hydropsychidae Hydropsyche contubernalis
	[ "48250204", { fssr:"A" } ], // Trichoptera Hydropsychidae Hydropsyche exocellata
	[ "48250205", { fssr:"A" } ], // Trichoptera Hydropsychidae Hydropsyche fulvipes
	[ "48250206", { fssr:"A" } ], // Trichoptera Hydropsychidae Hydropsyche instabilis
	[ "48250207", { fssr:"A" } ], // Trichoptera Hydropsychidae Hydropsyche pellucidula
	[ "48250208", { fssr:"A" } ], // Trichoptera Hydropsychidae Hydropsyche saxonica
	[ "48250209", { fssr:"A" } ], // Trichoptera Hydropsychidae Hydropsyche siltalai
	[ "48250301", { fssr:"A" } ], // Trichoptera Hydropsychidae Diplectrona felix
	[ "48310100", { fssr:"D" } ], // Trichoptera Phryganeidae Agrypnia
	[ "48310102", { fssr:"D" } ], // Trichoptera Phryganeidae Agrypnia obsoleta
	[ "48310103", { fssr:"D" } ], // Trichoptera Phryganeidae Agrypnia pagetana
	[ "48310104", { fssr:"D" } ], // Trichoptera Phryganeidae Agrypnia picta
	[ "48310105", { fssr:"D" } ], // Trichoptera Phryganeidae Agrypnia varia
	[ "48310301", { fssr:"D" } ], // Trichoptera Phryganeidae Hagenella clathrata
	[ "48310401", { fssr:"D" } ], // Trichoptera Phryganeidae Oligotricha striata
	[ "48310500", { fssr:"D" } ], // Trichoptera Phryganeidae Phryganea
	[ "48310501", { fssr:"D" } ], // Trichoptera Phryganeidae Phryganea bipunctata
	[ "48310502", { fssr:"D" } ], // Trichoptera Phryganeidae Phryganea grandis
	[ "48310601", { fssr:"D" } ], // Trichoptera Phryganeidae Trichostegia minor
	[ "48310701", { fssr:"D" } ], // Trichoptera Phryganeidae Agrypnetes crassicornis
	[ "48320101", { fssr:"A" } ], // Trichoptera Brachycentridae Brachycentrus subnubilus
	[ "48330101", { fssr:"B" } ], // Trichoptera Lepidostomatidae Crunoecia irrorata
	[ "48330201", { fssr:"B" } ], // Trichoptera Lepidostomatidae Lasiocephala basalis
	[ "48330301", { fssr:"B" } ], // Trichoptera Lepidostomatidae Lepidostoma hirtum
	[ "48340301", { fssr:"A" } ], // Trichoptera Limnephilidae Drusus annulatus
	[ "48340401", { fssr:"A" } ], // Trichoptera Limnephilidae Ecclisopteryx guttulata
	[ "48340501", { fssr:"B" } ], // Trichoptera Limnephilidae Allogamus auricollis
	[ "48340600", { fssr:"C" } ], // Trichoptera Limnephilidae Halesus
	[ "48340601", { fssr:"C" } ], // Trichoptera Limnephilidae Halesus digitatus
	[ "48340602", { fssr:"C" } ], // Trichoptera Limnephilidae Halesus radiatus
	[ "48340701", { fssr:"C" } ], // Trichoptera Limnephilidae Hydatophylax infumatus
	[ "48340801", { fssr:"B" } ], // Trichoptera Limnephilidae Melampophylax mucoreus
	[ "48340900", { fssr:"A" } ], // Trichoptera Limnephilidae Mesophylax
	[ "48340901", { fssr:"A" } ], // Trichoptera Limnephilidae Mesophylax aspersus
	[ "48340902", { fssr:"A" } ], // Trichoptera Limnephilidae Mesophylax impunctatus
	[ "48341000", { fssr:"B" } ], // Trichoptera Limnephilidae Micropterna
	[ "48341001", { fssr:"B" } ], // Trichoptera Limnephilidae Micropterna lateralis
	[ "48341002", { fssr:"B" } ], // Trichoptera Limnephilidae Micropterna sequax
	[ "48341100", { fssr:"B" } ], // Trichoptera Limnephilidae Potamophylax
	[ "48341101", { fssr:"B" } ], // Trichoptera Limnephilidae Potamophylax cingulatus
	[ "48341102", { fssr:"B" } ], // Trichoptera Limnephilidae Potamophylax latipennis
	[ "48341103", { fssr:"B" } ], // Trichoptera Limnephilidae Potamophylax rotundipennis
	[ "48341200", { fssr:"B" } ], // Trichoptera Limnephilidae Stenophylax
	[ "48341201", { fssr:"B" } ], // Trichoptera Limnephilidae Stenophylax permistus
	[ "48341202", { fssr:"B" } ], // Trichoptera Limnephilidae Stenophylax vibex
	[ "48341301", { fssr:"B" } ], // Trichoptera Limnephilidae Chaetopteryx villosa
	[ "48341400", { fssr:"C" } ], // Trichoptera Limnephilidae Anabolia
	[ "48341401", { fssr:"C" } ], // Trichoptera Limnephilidae Anabolia nervosa
	[ "48341402", { fssr:"C" } ], // Trichoptera Limnephilidae Anabolia brevipennis
	[ "48341501", { fssr:"D" } ], // Trichoptera Limnephilidae Glyphotaelius pellucidus
	[ "48341600", { fssr:"D" } ], // Trichoptera Limnephilidae Grammotaulius
	[ "48341601", { fssr:"D" } ], // Trichoptera Limnephilidae Grammotaulius nigropunctatus
	[ "48341602", { fssr:"D" } ], // Trichoptera Limnephilidae Grammotaulius nitidus
	[ "48341700", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus
	[ "48341701", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus affinis
	[ "48341702", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus auricula
	[ "48341703", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus binotatus
	[ "48341704", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus bipunctatus
	[ "48341705", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus borealis
	[ "48341706", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus centralis
	[ "48341707", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus coenosus
	[ "48341708", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus decipiens
	[ "48341709", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus elegans
	[ "48341711", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus extricatus
	[ "48341712", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus flavicornis
	[ "48341713", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus fuscicornis
	[ "48341714", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus fuscinervis
	[ "48341715", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus griseus
	[ "48341716", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus hirsutus
	[ "48341717", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus ignavus
	[ "48341718", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus incisus
	[ "48341719", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus lunatus
	[ "48341721", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus luridus
	[ "48341722", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus marmoratus
	[ "48341723", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus nigriceps
	[ "48341724", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus pati
	[ "48341725", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus politus
	[ "48341726", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus rhombicus
	[ "48341727", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus sparsus
	[ "48341728", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus stigma
	[ "48341729", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus subcentralis
	[ "48341731", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus tauricus
	[ "48341732", { fssr:"C" } ], // Trichoptera Limnephilidae Limnephilus vittatus
	[ "48342001", { fssr:"C" } ], // Trichoptera Limnephilidae Rhadicoleptus alpestris
	[ "48350101", { fssr:"B" } ], // Trichoptera Goeridae Goera pilosa
	[ "48350200", { fssr:"A" } ], // Trichoptera Goeridae Silo
	[ "48350201", { fssr:"A" } ], // Trichoptera Goeridae Silo nigricornis
	[ "48350202", { fssr:"A" } ], // Trichoptera Goeridae Silo pallipes
	[ "48360100", { fssr:"A" } ], // Trichoptera Beraeidae Beraea
	[ "48360101", { fssr:"A" } ], // Trichoptera Beraeidae Beraea maurus
	[ "48360102", { fssr:"A" } ], // Trichoptera Beraeidae Beraea pullata
	[ "48360201", { fssr:"B" } ], // Trichoptera Beraeidae Beraeodes minutus
	[ "48360301", { fssr:"A" } ], // Trichoptera Beraeidae Ernodes articularis
	[ "48370101", { fssr:"D" } ], // Trichoptera Sericostomatidae Notidobia ciliaris
	[ "48370201", { fssr:"B" } ], // Trichoptera Sericostomatidae Sericostoma personatum
	[ "48380101", { fssr:"B" } ], // Trichoptera Odontoceridae Odontocerum albicorne
	[ "48390100", { fssr:"C" } ], // Trichoptera Molannidae Molanna
	[ "48390101", { fssr:"C" } ], // Trichoptera Molannidae Molanna angustata
	[ "48390102", { fssr:"C" } ], // Trichoptera Molannidae Molanna albicans
	[ "483A0101", { fssr:"A" } ], // Trichoptera Leptoceridae Athripsodes albifrons
	[ "483A0102", { fssr:"D" } ], // Trichoptera Leptoceridae Athripsodes aterrimus
	[ "483A0103", { fssr:"A" } ], // Trichoptera Leptoceridae Athripsodes bilineatus
	[ "483A0104", { fssr:"B" } ], // Trichoptera Leptoceridae Athripsodes cinereus
	[ "483A0105", { fssr:"A" } ], // Trichoptera Leptoceridae Athripsodes commutatus
	[ "483A0200", { fssr:"A" } ], // Trichoptera Leptoceridae Ceraclea
	[ "483A0201", { fssr:"A" } ], // Trichoptera Leptoceridae Ceraclea albimacula
	[ "483A0202", { fssr:"A" } ], // Trichoptera Leptoceridae Ceraclea annulicornis
	[ "483A0203", { fssr:"A" } ], // Trichoptera Leptoceridae Ceraclea dissimilis
	[ "483A0204", { fssr:"A" } ], // Trichoptera Leptoceridae Ceraclea fulva
	[ "483A0205", { fssr:"A" } ], // Trichoptera Leptoceridae Ceraclea nigronervosa
	[ "483A0206", { fssr:"A" } ], // Trichoptera Leptoceridae Ceraclea senilis
	[ "483A0400", { fssr:"D" } ], // Trichoptera Leptoceridae Mystacides
	[ "483A0401", { fssr:"D" } ], // Trichoptera Leptoceridae Mystacides azurea
	[ "483A0402", { fssr:"D" } ], // Trichoptera Leptoceridae Mystacides longicornis
	[ "483A0403", { fssr:"D" } ], // Trichoptera Leptoceridae Mystacides nigra
	[ "483A0902", { fssr:"D" } ], // Trichoptera Leptoceridae Oecetis lacustris
	[ "483A0903", { fssr:"A" } ], // Trichoptera Leptoceridae Oecetis notata
	[ "483A0904", { fssr:"D" } ], // Trichoptera Leptoceridae Oecetis ochracea
	[ "483A0905", { fssr:"A" } ], // Trichoptera Leptoceridae Oecetis testacea
	[ "483A1000", { fssr:"B" } ], // Trichoptera Leptoceridae Setodes
	[ "483A1001", { fssr:"B" } ], // Trichoptera Leptoceridae Setodes argentipunctellus
	[ "483A1002", { fssr:"B" } ], // Trichoptera Leptoceridae Setodes punctatus
	[ "483B0100", { fssr:"A" } ], // Trichoptera Apataniidae Apatania
	[ "483B0101", { fssr:"A" } ], // Trichoptera Apataniidae Apatania auricula
	[ "483B0102", { fssr:"A" } ], // Trichoptera Apataniidae Apatania muliebris
	[ "483B0103", { fssr:"A" } ], // Trichoptera Apataniidae Apatania nielseni
	[ "483B0104", { fssr:"A" } ], // Trichoptera Apataniidae Apatania wallengreni
	[ "50110300", { fssr:"B" } ], // Diptera Tipulidae Tipula
	[ "50110332", { fssr:"B" } ], // Diptera Tipulidae Tipula (Savtshenkia) cheethami
	[ "5011033D", { fssr:"B" } ], // Diptera Tipulidae Tipula (Savtshenkia) subnodicornis
	[ "501103A2", { fssr:"C" } ], // Diptera Tipulidae Tipula (Yamatotipula) couckei
	[ "501103A3", { fssr:"C" } ], // Diptera Tipulidae Tipula (Yamatotipula) lateralis
	[ "501103A5", { fssr:"B" } ], // Diptera Tipulidae Tipula (Yamatotipula) montium
	[ "501103C1", { fssr:"C" } ], // Diptera Tipulidae Tipula (Acutipula) fulvipennis
	[ "501103C3", { fssr:"B" } ], // Diptera Tipulidae Tipula (Acutipula) maxima
	[ "50130511", { fssr:"B" } ], // Diptera Limoniidae Antocha (Antocha) vitripennis
	[ "50131800", { fssr:"A" } ], // Diptera Limoniidae Dactylolabis
	[ "50132000", { fssr:"B" } ], // Diptera Limoniidae Limnophila
	[ "50132100", { fssr:"B" } ], // Diptera Limoniidae Eloeophila
	[ "50132600", { fssr:"C" } ], // Diptera Limoniidae Pilaria
	[ "50132800", { fssr:"B" } ], // Diptera Limoniidae Hexatoma
	[ "50133100", { fssr:"B" } ], // Diptera Limoniidae Gonomyia
	[ "50133600", { fssr:"B" } ], // Diptera Limoniidae Rhabdomastix
	[ "50135000", { fssr:"B" } ], // Diptera Limoniidae Scleroprocta
	[ "50140100", { fssr:"B" } ], // Diptera Pediciidae Pedicia
	[ "50140500", { fssr:"B" } ], // Diptera Pediciidae Dicranota
	[ "50140600", { fssr:"B" } ], // Diptera Pediciidae Tricyphona
	[ "50210100", { fssr:"D" } ], // Diptera Psychodidae Sycorax
	[ "50210200", { fssr:"D" } ], // Diptera Psychodidae Pericoma
	[ "50211101", { fssr:"D" } ], // Diptera Psychodidae Bazarella neglecta
	[ "50210300", { fssr:"D" } ], // Diptera Psychodidae Telmatoscopus
	[ "50210400", { fssr:"D" } ], // Diptera Psychodidae Peripsychoda
	[ "50210500", { fssr:"D" } ], // Diptera Psychodidae Mormia
	[ "50210600", { fssr:"D" } ], // Diptera Psychodidae Panimerus
	[ "50210700", { fssr:"D" } ], // Diptera Psychodidae Threticus
	[ "50210900", { fssr:"D" } ], // Diptera Psychodidae Psychoda
	[ "50211201", { fssr:"D" } ], // Diptera Psychodidae Szaboiella hibernica
	[ "50211300", { fssr:"D" } ], // Diptera Psychodidae Tonnoiriella
	[ "50211400", { fssr:"D" } ], // Diptera Psychodidae Boreoclytocerus
	[ "50211511", { fssr:"D" } ], // Diptera Psychodidae Atrichobrunettia (Mirousiella) angustipennis
	[ "50211600", { fssr:"D" } ], // Diptera Psychodidae Paramormia
	[ "50211701", { fssr:"D" } ], // Diptera Psychodidae Feuerborniella obscura
	[ "50211800", { fssr:"D" } ], // Diptera Psychodidae Tinearia
	[ "50211901", { fssr:"D" } ], // Diptera Psychodidae Saraiella consigliana
	[ "50220100", { fssr:"D" } ], // Diptera Ptychopteridae Ptychoptera
	[ "50220101", { fssr:"D" } ], // Diptera Ptychopteridae Ptychoptera albimana
	[ "50220102", { fssr:"D" } ], // Diptera Ptychopteridae Ptychoptera contaminata
	[ "50220103", { fssr:"D" } ], // Diptera Ptychopteridae Ptychoptera lacustris
	[ "50220104", { fssr:"D" } ], // Diptera Ptychopteridae Ptychoptera longicauda
	[ "50220105", { fssr:"D" } ], // Diptera Ptychopteridae Ptychoptera minuta
	[ "50220106", { fssr:"D" } ], // Diptera Ptychopteridae Ptychoptera paludosa
	[ "50220107", { fssr:"D" } ], // Diptera Ptychopteridae Ptychoptera scutellaris
	[ "50310100", { fssr:"B" } ], // Diptera Dixidae Dixa
	[ "50310101", { fssr:"B" } ], // Diptera Dixidae Dixa dilatata
	[ "50310102", { fssr:"A" } ], // Diptera Dixidae Dixa maculata
	[ "50310104", { fssr:"B" } ], // Diptera Dixidae Dixa nubilipennis
	[ "50310105", { fssr:"A" } ], // Diptera Dixidae Dixa puberula
	[ "50310106", { fssr:"B" } ], // Diptera Dixidae Dixa submaculata
	[ "50310205", { fssr:"C" } ], // Diptera Dixidae Dixella filicornis
	[ "50310207", { fssr:"D" } ], // Diptera Dixidae Dixella obscura
	[ "50360100", { fssr:"A" } ], // Diptera Simuliidae Prosimulium
	[ "50360101", { fssr:"A" } ], // Diptera Simuliidae Prosimulium hirtipes
	[ "50360102", { fssr:"A" } ], // Diptera Simuliidae Prosimulium latimucro
	[ "50360103", { fssr:"A" } ], // Diptera Simuliidae Prosimulium tomosvaryi
	[ "50360201", { fssr:"A" } ], // Diptera Simuliidae Metacnephia amphora
	[ "50360300", { fssr:"B" } ], // Diptera Simuliidae Simulium
	[ "50360311", { fssr:"B" } ], // Diptera Simuliidae Simulium (Hellichiella) latipes
	[ "50360321", { fssr:"A" } ], // Diptera Simuliidae Simulium (Nevermannia) angustitarse
	[ "50360322", { fssr:"A" } ], // Diptera Simuliidae Simulium (Nevermannia) armoricanum
	[ "50360323", { fssr:"A" } ], // Diptera Simuliidae Simulium (Nevermannia) costatum
	[ "50360324", { fssr:"A" } ], // Diptera Simuliidae Simulium (Nevermannia) cryophilum
	[ "50360325", { fssr:"A" } ], // Diptera Simuliidae Simulium (Nevermannia) dunfellense
	[ "50360329", { fssr:"B" } ], // Diptera Simuliidae Simulium (Nevermannia) urbanum
	[ "5036032A", { fssr:"A" } ], // Diptera Simuliidae Simulium (Nevermannia) juxtacrenobium
	[ "50360341", { fssr:"B" } ], // Diptera Simuliidae Simulium (Eusimulium) angustipes
	[ "50360342", { fssr:"A" } ], // Diptera Simuliidae Simulium (Eusimulium) aureum
	[ "50360343", { fssr:"B" } ], // Diptera Simuliidae Simulium (Eusimulium) velutinum
	[ "50360351", { fssr:"B" } ], // Diptera Simuliidae Simulium (Wilhelmia) equinum
	[ "50360352", { fssr:"B" } ], // Diptera Simuliidae Simulium (Wilhelmia) lineatum
	[ "50360353", { fssr:"B" } ], // Diptera Simuliidae Simulium (Wilhelmia) pseudequinum
	[ "50360361", { fssr:"A" } ], // Diptera Simuliidae Simulium (Boophthora) erythrocephalum
	[ "50360381", { fssr:"A" } ], // Diptera Simuliidae Simulium (Simulium) argyreatum
	[ "50360382", { fssr:"A" } ], // Diptera Simuliidae Simulium (Simulium) rostratum
	[ "50360383", { fssr:"A" } ], // Diptera Simuliidae Simulium (Simulium) intermedium
	[ "50360384", { fssr:"B" } ], // Diptera Simuliidae Simulium (Simulium) morsitans
	[ "50360385", { fssr:"C" } ], // Diptera Simuliidae Simulium (Simulium) noelleri
	[ "50360386", { fssr:"B" } ], // Diptera Simuliidae Simulium (Simulium) ornatum
	[ "50360387", { fssr:"B" } ], // Diptera Simuliidae Simulium (Simulium) posticatum
	[ "50360388", { fssr:"A" } ], // Diptera Simuliidae Simulium (Simulium) reptans
	[ "50360389", { fssr:"A" } ], // Diptera Simuliidae Simulium (Simulium) trifasciatum
	[ "5036038A", { fssr:"A" } ], // Diptera Simuliidae Simulium (Simulium) tuberosum
	[ "5036038B", { fssr:"A" } ], // Diptera Simuliidae Simulium (Simulium) variegatum
	[ "50610100", { fssr:"C" } ], // Diptera Stratiomyidae Beris
	[ "50610101", { fssr:"C" } ], // Diptera Stratiomyidae Beris clavipes
	[ "50610102", { fssr:"C" } ], // Diptera Stratiomyidae Beris fuscipes
	[ "50610103", { fssr:"C" } ], // Diptera Stratiomyidae Beris vallata
	[ "50610211", { fssr:"C" } ], // Diptera Stratiomyidae Nemotelus (Camptopelma) nigrinus
	[ "50610221", { fssr:"D" } ], // Diptera Stratiomyidae Nemotelus (Nemotelus) notatus
	[ "50610222", { fssr:"B" } ], // Diptera Stratiomyidae Nemotelus (Nemotelus) pantherinus
	[ "50610301", { fssr:"C" } ], // Diptera Stratiomyidae Oxycera analis
	[ "50610302", { fssr:"B" } ], // Diptera Stratiomyidae Oxycera dives
	[ "50610303", { fssr:"A" } ], // Diptera Stratiomyidae Oxycera fallenii
	[ "50610304", { fssr:"C" } ], // Diptera Stratiomyidae Oxycera nigricornis
	[ "50610305", { fssr:"B" } ], // Diptera Stratiomyidae Oxycera morrisii
	[ "50610307", { fssr:"A" } ], // Diptera Stratiomyidae Oxycera pardalina
	[ "50610308", { fssr:"C" } ], // Diptera Stratiomyidae Oxycera rara
	[ "50610309", { fssr:"B" } ], // Diptera Stratiomyidae Oxycera pygmaea
	[ "50610311", { fssr:"C" } ], // Diptera Stratiomyidae Oxycera terminata
	[ "50610312", { fssr:"C" } ], // Diptera Stratiomyidae Oxycera trilineata
	[ "50610401", { fssr:"C" } ], // Diptera Stratiomyidae Vanoyia tenuicornis
	[ "50610503", { fssr:"C" } ], // Diptera Stratiomyidae Odontomyia hydroleon
	[ "50610600", { fssr:"D" } ], // Diptera Stratiomyidae Stratiomys
	[ "50610601", { fssr:"C" } ], // Diptera Stratiomyidae Stratiomys chamaeleon
	[ "50610602", { fssr:"D" } ], // Diptera Stratiomyidae Stratiomys singularior
	[ "50610604", { fssr:"D" } ], // Diptera Stratiomyidae Stratiomys potamida
	[ "50610701", { fssr:"D" } ], // Diptera Stratiomyidae Oplodontha viridula
	[ "50620300", { fssr:"D" } ], // Diptera Rhagionidae Chrysophilus
	[ "50620301", { fssr:"D" } ], // Diptera Rhagionidae Chrysophilus cristatus
	[ "50620302", { fssr:"A" } ], // Diptera Rhagionidae Chrysophilus erythrophthalmus
	[ "50630100", { fssr:"D" } ], // Diptera Tabanidae Chrysops
	[ "50630101", { fssr:"D" } ], // Diptera Tabanidae Chrysops caecutiens
	[ "50630102", { fssr:"D" } ], // Diptera Tabanidae Chrysops relictus
	[ "50630104", { fssr:"D" } ], // Diptera Tabanidae Chrysops viduatus
	[ "50630200", { fssr:"D" } ], // Diptera Tabanidae Haematopota
	[ "50630201", { fssr:"D" } ], // Diptera Tabanidae Haematopota bigoti
	[ "50630202", { fssr:"D" } ], // Diptera Tabanidae Haematopota crassicornis
	[ "50630203", { fssr:"D" } ], // Diptera Tabanidae Haematopota grandis
	[ "50630205", { fssr:"D" } ], // Diptera Tabanidae Haematopota subcylindrica
	[ "50630300", { fssr:"D" } ], // Diptera Tabanidae Atylotus
	[ "50630301", { fssr:"D" } ], // Diptera Tabanidae Atylotus fulvus
	[ "50630302", { fssr:"D" } ], // Diptera Tabanidae Atylotus latistriatus
	[ "50630304", { fssr:"D" } ], // Diptera Tabanidae Atylotus rusticus
	[ "50630400", { fssr:"D" } ], // Diptera Tabanidae Hybomitra
	[ "50630401", { fssr:"D" } ], // Diptera Tabanidae Hybomitra bimaculata
	[ "50630402", { fssr:"D" } ], // Diptera Tabanidae Hybomitra ciureai
	[ "50630403", { fssr:"E" } ], // Diptera Tabanidae Hybomitra distinguenda
	[ "50630404", { fssr:"D" } ], // Diptera Tabanidae Hybomitra expollicata
	[ "50630405", { fssr:"D" } ], // Diptera Tabanidae Hybomitra lurida
	[ "50630500", { fssr:"D" } ], // Diptera Tabanidae Tabanus
	[ "50630501", { fssr:"D" } ], // Diptera Tabanidae Tabanus autumnalis
	[ "50630503", { fssr:"D" } ], // Diptera Tabanidae Tabanus bromius
	[ "50630504", { fssr:"B" } ], // Diptera Tabanidae Tabanus cordiger
	[ "50630506", { fssr:"D" } ], // Diptera Tabanidae Tabanus maculicornis
	[ "50630508", { fssr:"D" } ], // Diptera Tabanidae Tabanus sudeticus
	[ "50640101", { fssr:"D" } ], // Diptera Athericidae Atherix ibis
	[ "50640201", { fssr:"D" } ], // Diptera Athericidae Atrichops crassipes
	[ "50640301", { fssr:"A" } ], // Diptera Athericidae Ibisia marginata
	[ "50811000", { fssr:"D" } ], // Diptera Syrphidae Eristalis
])

export const scoresPsiFamily = new Map<TaxonCode, ScorePsi>([
	[ "02110000", { fssr:"B" } ], // Porifera Spongillidae
	[ "05110000", { fssr:"D" } ], // Tricladida Planariidae
	[ "05120000", { fssr:"D" } ], // Tricladida Dugesiidae
	[ "05130000", { fssr:"C" } ], // Tricladida Dendrocoelidae
	[ "16110000", { fssr:"C" } ], // Gastropoda Neritidae
	[ "16120000", { fssr:"D" } ], // Gastropoda Viviparidae
	[ "16130000", { fssr:"C" } ], // Gastropoda Valvatidae
	[ "16140000", { fssr:"C" } ], // Gastropoda Hydrobiidae
	[ "16160000", { fssr:"D" } ], // Gastropoda Bithyniidae
	[ "16210000", { fssr:"D" } ], // Gastropoda Physidae
	[ "16220000", { fssr:"D" } ], // Gastropoda Lymnaeidae
	[ "16230000", { fssr:"D" } ], // Gastropoda Planorbidae
	[ "17110000", { fssr:"A" } ], // Bivalvia Margaritiferidae
	[ "17120000", { fssr:"D" } ], // Bivalvia Unionidae
	[ "17130000", { fssr:"D" } ], // Bivalvia Sphaeriidae
	[ "20000000", { fssr:"D" } ], // Oligochaeta
	[ "22110000", { fssr:"B" } ], // Hirudinea Piscicolidae
	[ "22120000", { fssr:"C" } ], // Hirudinea Glossiphoniidae
	[ "22210000", { fssr:"D" } ], // Hirudinea Hirudinidae
	[ "22230000", { fssr:"C" } ], // Hirudinea Erpobdellidae
	[ "33010000", { fssr:"B" } ], // Bathynellacea Bathynellidae
	[ "36110000", { fssr:"D" } ], // Isopoda Asellidae
	[ "37110000", { fssr:"D" } ], // Amphipoda Corophiidae
	[ "37130000", { fssr:"D" } ], // Amphipoda Crangonyctidae
	[ "37140000", { fssr:"B" } ], // Amphipoda Gammaridae
	[ "37150000", { fssr:"B" } ], // Amphipoda Niphargidae
	[ "40110000", { fssr:"C" } ], // Ephemeroptera Siphlonuridae
	[ "40120000", { fssr:"A" } ], // Ephemeroptera Baetidae
	[ "40130000", { fssr:"A" } ], // Ephemeroptera Heptageniidae
	[ "40140000", { fssr:"B" } ], // Ephemeroptera Ameletidae
	[ "40150000", { fssr:"D" } ], // Ephemeroptera Arthropleidae
	[ "40210000", { fssr:"B" } ], // Ephemeroptera Leptophlebiidae
	[ "40310000", { fssr:"B" } ], // Ephemeroptera Potamanthidae
	[ "40320000", { fssr:"C" } ], // Ephemeroptera Ephemeridae
	[ "40410000", { fssr:"A" } ], // Ephemeroptera Ephemerellidae
	[ "40510000", { fssr:"D" } ], // Ephemeroptera Caenidae
	[ "41110000", { fssr:"A" } ], // Plecoptera Taeniopterygidae
	[ "41120000", { fssr:"C" } ], // Plecoptera Nemouridae
	[ "41130000", { fssr:"A" } ], // Plecoptera Leuctridae
	[ "41140000", { fssr:"A" } ], // Plecoptera Capniidae
	[ "41210000", { fssr:"A" } ], // Plecoptera Perlodidae
	[ "41220000", { fssr:"A" } ], // Plecoptera Perlidae
	[ "41230000", { fssr:"A" } ], // Plecoptera Chloroperlidae
	[ "42110000", { fssr:"D" } ], // Odonata Platycnemididae
	[ "42140000", { fssr:"C" } ], // Odonata Calopterygidae
	[ "42210000", { fssr:"D" } ], // Odonata Gomphidae
	[ "42220000", { fssr:"D" } ], // Odonata Cordulegastridae
	[ "42230000", { fssr:"C" } ], // Odonata Aeshnidae
	[ "42240000", { fssr:"D" } ], // Odonata Corduliidae
	[ "42250000", { fssr:"C" } ], // Odonata Libellulidae
	[ "43310000", { fssr:"D" } ], // Hemiptera Nepidae
	[ "43420000", { fssr:"A" } ], // Hemiptera Aphelocheiridae
	[ "43610000", { fssr:"D" } ], // Hemiptera Corixidae
	[ "45110000", { fssr:"D" } ], // Coleoptera Haliplidae
	[ "45120000", { fssr:"D" } ], // Coleoptera Paelobiidae
	[ "45130000", { fssr:"D" } ], // Coleoptera Noteridae
	[ "45140000", { fssr:"D" } ], // Coleoptera Dytiscidae
	[ "45360000", { fssr:"D" } ], // Coleoptera Hydrochidae
	[ "45330000", { fssr:"D" } ], // Coleoptera Helophoridae
	[ "45340000", { fssr:"D" } ], // Coleoptera Georissidae
	[ "45350000", { fssr:"D" } ], // Coleoptera Hydrophilidae
	[ "45410000", { fssr:"B" } ], // Coleoptera Hydraenidae
	[ "45510000", { fssr:"B" } ], // Coleoptera Scirtidae
	[ "45620000", { fssr:"D" } ], // Coleoptera Dryopidae
	[ "45630000", { fssr:"B" } ], // Coleoptera Elmidae
	[ "45640000", { fssr:"D" } ], // Coleoptera Limnichidae
	[ "45650000", { fssr:"D" } ], // Coleoptera Heteroceridae
	[ "46110000", { fssr:"D" } ], // Megaloptera Sialidae
	[ "47110000", { fssr:"B" } ], // Neuroptera Osmylidae
	[ "47120000", { fssr:"B" } ], // Neuroptera Sisyridae
	[ "48110000", { fssr:"A" } ], // Trichoptera Rhyacophilidae
	[ "48120000", { fssr:"A" } ], // Trichoptera Glossosomatidae
	[ "48210000", { fssr:"A" } ], // Trichoptera Philopotamidae
	[ "48220000", { fssr:"B" } ], // Trichoptera Psychomyiidae
	[ "48230000", { fssr:"C" } ], // Trichoptera Ecnomidae
	[ "48240000", { fssr:"B" } ], // Trichoptera Polycentropodidae
	[ "48250000", { fssr:"A" } ], // Trichoptera Hydropsychidae
	[ "48310000", { fssr:"D" } ], // Trichoptera Phryganeidae
	[ "48320000", { fssr:"A" } ], // Trichoptera Brachycentridae
	[ "48330000", { fssr:"B" } ], // Trichoptera Lepidostomatidae
	[ "48340000", { fssr:"B" } ], // Trichoptera Limnephilidae
	[ "48350000", { fssr:"A" } ], // Trichoptera Goeridae
	[ "48360000", { fssr:"A" } ], // Trichoptera Beraeidae
	[ "48370000", { fssr:"B" } ], // Trichoptera Sericostomatidae
	[ "48380000", { fssr:"B" } ], // Trichoptera Odontoceridae
	[ "48390000", { fssr:"C" } ], // Trichoptera Molannidae
	[ "483B0000", { fssr:"A" } ], // Trichoptera Apataniidae
	[ "50110000", { fssr:"B" } ], // Diptera Tipulidae
	[ "50130000", { fssr:"B" } ], // Diptera Limoniidae
	[ "50140000", { fssr:"B" } ], // Diptera Pediciidae
	[ "50210000", { fssr:"D" } ], // Diptera Psychodidae
	[ "50220000", { fssr:"D" } ], // Diptera Ptychopteridae
	[ "50310000", { fssr:"B" } ], // Diptera Dixidae
	[ "50360000", { fssr:"A" } ], // Diptera Simuliidae
	[ "50610000", { fssr:"C" } ], // Diptera Stratiomyidae
	[ "50620000", { fssr:"D" } ], // Diptera Rhagionidae
	[ "50630000", { fssr:"D" } ], // Diptera Tabanidae
	[ "50810000", { fssr:"D" } ], // Diptera Syrphidae
])


// TODO: enums?
//                                        Log Abundance (1-9, 10-99...)
export const scoresLifeGroups: {[flowGroup: string]: { description: string, scores: number[] }} = {
	'I':   { description: 'Rapid',             scores: [9, 10, 11, 12] },
	'II':  { description: 'Moderate-fast',     scores: [8, 9 , 10, 11] },
	'III': { description: 'Slow-sluggish',     scores: [7, 7 , 7 , 7 ] },
	'IV':  { description: 'Flowing-standing',  scores: [6, 5 , 4 , 3 ] },
	'V':   { description: 'Standing',          scores: [5, 4 , 3 , 2 ] },
	'VI':  { description: 'Drought_resistant', scores: [4, 3 , 2 , 1 ] },
}

export const scoresLifeSpecies = new Map<TaxonCode, ScoreLife>([
	[ "05110101", { flow:"IV"  }], // Tricladida Planariidae Planaria torva
	[ "05110202", { flow:"IV"  }], // Tricladida Planariidae Polycelis nigra
	[ "05110203", { flow:"IV"  }], // Tricladida Planariidae Polycelis tenuis
	[ "05110201", { flow:"II"  }], // Tricladida Planariidae Polycelis felina
	[ "05120101", { flow:"IV"  }], // Tricladida Dugesiidae Dugesia lugubris
	[ "05120103", { flow:"III" }], // Tricladida Dugesiidae Dugesia tigrina
	[ "05120102", { flow:"IV"  }], // Tricladida Dugesiidae Dugesia polychroa
	[ "05110301", { flow:"II"  }], // Tricladida Planariidae Phagocata vitta
	[ "05110401", { flow:"II"  }], // Tricladida Planariidae Crenobia alpina
	[ "05130201", { flow:"IV"  }], // Tricladida Dendrocoelidae Dendrocoelum lacteum
	[ "05130101", { flow:"V"   }], // Tricladida Dendrocoelidae Bdellocephala punctata
	[ "16110101", { flow:"II"  }], // Gastropoda Neritidae Theodoxus fluviatilis
	[ "16120102", { flow:"III" }], // Gastropoda Viviparidae Viviparus viviparus
	[ "16120101", { flow:"III" }], // Gastropoda Viviparidae Viviparus contectus
	[ "16130111", { flow:"IV"  }], // Gastropoda Valvatidae Valvata (Valvata) cristata
	[ "16130121", { flow:"V"   }], // Gastropoda Valvatidae Valvata (Tropidina) macrostoma
	[ "16130131", { flow:"IV"  }], // Gastropoda Valvatidae Valvata (Cincinna) piscinalis
	[ "16140301", { flow:"III" }], // Gastropoda Hydrobiidae Potamopyrgus antipodarum
	[ "16160111", { flow:"IV"  }], // Gastropoda Bithyniidae Bithynia (Bithynia) tentaculata
	[ "16160121", { flow:"IV"  }], // Gastropoda Bithyniidae Bithynia (Codiella) leachii
	[ "16220301", { flow:"VI"  }], // Gastropoda Lymnaeidae Galba truncatula
	[ "16220501", { flow:"VI"  }], // Gastropoda Lymnaeidae Omphiscola glabra
	[ "16220401", { flow:"VI"  }], // Gastropoda Lymnaeidae Stagnicola palustris
	[ "16220403", { flow:"V"   }], // Gastropoda Lymnaeidae Stagnicola catascopium
	[ "16220105", { flow:"IV"  }], // Gastropoda Lymnaeidae Lymnaea stagnalis
	[ "16220601", { flow:"IV"  }], // Gastropoda Lymnaeidae Radix auricularia
	[ "16220602", { flow:"IV"  }], // Gastropoda Lymnaeidae Radix balthica
	[ "16220201", { flow:"IV"  }], // Gastropoda Lymnaeidae Myxas glutinosa
	[ "16210101", { flow:"VI"  }], // Gastropoda Physidae Aplexa hypnorum
	[ "16210202", { flow:"III" }], // Gastropoda Physidae Physa fontinalis
	[ "16230801", { flow:"IV"  }], // Gastropoda Planorbidae Planorbarius corneus
	[ "16230911", { flow:"V"   }], // Gastropoda Planorbidae Menetus (Dilatata) dilatatus
	[ "16230111", { flow:"IV"  }], // Gastropoda Planorbidae Planorbis (Planorbis) carinatus
	[ "16230112", { flow:"IV"  }], // Gastropoda Planorbidae Planorbis (Planorbis) planorbis
	[ "16230222", { flow:"VI"  }], // Gastropoda Planorbidae Anisus (Disculifer) vorticulus
	[ "16230221", { flow:"IV"  }], // Gastropoda Planorbidae Anisus (Disculifer) vortex
	[ "16230211", { flow:"VI"  }], // Gastropoda Planorbidae Anisus (Anisus) leucostoma
	[ "16230421", { flow:"V"   }], // Gastropoda Planorbidae Gyraulus (Torquis) laevis
	[ "16230412", { flow:"IV"  }], // Gastropoda Planorbidae Gyraulus (Gyraulus) albus
	[ "16230411", { flow:"IV"  }], // Gastropoda Planorbidae Gyraulus (Gyraulus) acronicus
	[ "16230431", { flow:"IV"  }], // Gastropoda Planorbidae Gyraulus (Armiger) crista
	[ "16230301", { flow:"IV"  }], // Gastropoda Planorbidae Bathyomphalus contortus
	[ "16230601", { flow:"V"   }], // Gastropoda Planorbidae Hippeutis complanatus
	[ "16230701", { flow:"V"   }], // Gastropoda Planorbidae Segmentina nitida
	[ "16250101", { flow:"IV"  }], // Gastropoda Acroloxidae Acroloxus lacustris
	[ "16231101", { flow:"II"  }], // Gastropoda Planorbidae Ancylus fluviatilis
	[ "17110101", { flow:"II"  }], // Bivalvia Margaritiferidae Margaritifera margaritifera
	[ "17120101", { flow:"IV"  }], // Bivalvia Unionidae Unio pictorum
	[ "17120102", { flow:"III" }], // Bivalvia Unionidae Unio tumidus
	[ "17120202", { flow:"IV"  }], // Bivalvia Unionidae Anodonta cygnea
	[ "17120201", { flow:"III" }], // Bivalvia Unionidae Anodonta anatina
	[ "17120301", { flow:"III" }], // Bivalvia Unionidae Pseudanodonta complanata
	[ "17130103", { flow:"III" }], // Bivalvia Sphaeriidae Sphaerium rivicola
	[ "17130101", { flow:"IV"  }], // Bivalvia Sphaeriidae Sphaerium corneum
	[ "17130302", { flow:"IV"  }], // Bivalvia Sphaeriidae Musculium transversum
	[ "17130301", { flow:"V"   }], // Bivalvia Sphaeriidae Musculium lacustre
	[ "17130104", { flow:"III" }], // Bivalvia Sphaeriidae Sphaerium solidum
	[ "17130201", { flow:"III" }], // Bivalvia Sphaeriidae Pisidium amnicum
	[ "17130202", { flow:"IV"  }], // Bivalvia Sphaeriidae Pisidium casertanum
	[ "17130203", { flow:"V"   }], // Bivalvia Sphaeriidae Pisidium conventus
	[ "17130212", { flow:"V"   }], // Bivalvia Sphaeriidae Pisidium personatum
	[ "17130211", { flow:"IV"  }], // Bivalvia Sphaeriidae Pisidium obtusale
	[ "17130207", { flow:"III" }], // Bivalvia Sphaeriidae Pisidium milium
	[ "17130213", { flow:"IV"  }], // Bivalvia Sphaeriidae Pisidium pseudosphaerium
	[ "17130215", { flow:"IV"  }], // Bivalvia Sphaeriidae Pisidium subtruncatum
	[ "17130216", { flow:"III" }], // Bivalvia Sphaeriidae Pisidium supinum
	[ "17130204", { flow:"III" }], // Bivalvia Sphaeriidae Pisidium henslowanum
	[ "17130206", { flow:"V"   }], // Bivalvia Sphaeriidae Pisidium lilljeborgii
	[ "17130205", { flow:"IV"  }], // Bivalvia Sphaeriidae Pisidium hibernicum
	[ "17130209", { flow:"IV"  }], // Bivalvia Sphaeriidae Pisidium nitidum
	[ "17130214", { flow:"IV"  }], // Bivalvia Sphaeriidae Pisidium pulchellum
	[ "17130208", { flow:"IV"  }], // Bivalvia Sphaeriidae Pisidium moitessierianum
	[ "17130217", { flow:"IV"  }], // Bivalvia Sphaeriidae Pisidium tenuilineatum
	[ "17140101", { flow:"IV"  }], // Bivalvia Dreissenidae Dreissena polymorpha
	[ "22110101", { flow:"II"  }], // Hirudinea Piscicolidae Piscicola geometra
	[ "22120201", { flow:"IV"  }], // Hirudinea Glossiphoniidae Theromyzon tessulatum
	[ "22120301", { flow:"IV"  }], // Hirudinea Glossiphoniidae Hemiclepsis marginata
	[ "22120801", { flow:"IV"  }], // Hirudinea Glossiphoniidae Alboglossiphonia heteroclita
	[ "22120401", { flow:"IV"  }], // Hirudinea Glossiphoniidae Glossiphonia complanata
	[ "22120701", { flow:"IV"  }], // Hirudinea Glossiphoniidae Helobdella stagnalis
	[ "22220101", { flow:"IV"  }], // Hirudinea Haemopidae Haemopis sanguisuga
	[ "22210201", { flow:"IV"  }], // Hirudinea Hirudinidae Hirudo medicinalis
	[ "22230102", { flow:"V"   }], // Hirudinea Erpobdellidae Erpobdella testacea
	[ "22230101", { flow:"IV"  }], // Hirudinea Erpobdellidae Erpobdella octoculata
	[ "22230201", { flow:"IV"  }], // Hirudinea Erpobdellidae Dina lineata
	[ "22230302", { flow:"IV"  }], // Hirudinea Erpobdellidae Trocheta subviridis
	[ "22230301", { flow:"II"  }], // Hirudinea Erpobdellidae Trocheta bykowskii
	[ "26010101", { flow:"V"   }], // Araneae Argyroneta aquatica
	[ "27010101", { flow:"VI"  }], // Anostraca Artemia salina
	[ "27020101", { flow:"VI"  }], // Anostraca Chirocephalus diaphanus
	[ "28010101", { flow:"VI"  }], // Notostraca Triopsidae Triops cancriformis
	[ "35110101", { flow:"V"   }], // Mysidacea Mysidae Mysis relicta
	[ "36110101", { flow:"IV"  }], // Isopoda Asellidae Asellus aquaticus
	[ "36110301", { flow:"V"   }], // Isopoda Asellidae Caecidotea communis
	[ "36110202", { flow:"IV"  }], // Isopoda Asellidae Proasellus meridianus
	[ "37110101", { flow:"III" }], // Amphipoda Corophiidae Corophium curvispinum
	[ "37130101", { flow:"IV"  }], // Amphipoda Crangonyctidae Crangonyx pseudogracilis
	[ "37140202", { flow:"III" }], // Amphipoda Gammaridae Gammarus duebeni
	[ "37140203", { flow:"V"   }], // Amphipoda Gammaridae Gammarus lacustris
	[ "37140206", { flow:"II"  }], // Amphipoda Gammaridae Gammarus pulex
	[ "37140208", { flow:"III" }], // Amphipoda Gammaridae Gammarus tigrinus
	[ "37120101", { flow:"VI"  }], // Amphipoda Talitridae Orchestia cavimana
	[ "34310101", { flow:"II"  }], // Decapoda Astacidae Austropotamobius pallipes
	[ "40110102", { flow:"IV"  }], // Ephemeroptera Siphlonuridae Siphlonurus armatus
	[ "40110103", { flow:"IV"  }], // Ephemeroptera Siphlonuridae Siphlonurus lacustris
	[ "40110101", { flow:"IV"  }], // Ephemeroptera Siphlonuridae Siphlonurus alternatus
	[ "40140101", { flow:"I"   }], // Ephemeroptera Ameletidae Ameletus inopinatus
	[ "40120104", { flow:"II"  }], // Ephemeroptera Baetidae Baetis fuscatus
	[ "40120108", { flow:"II"  }], // Ephemeroptera Baetidae Baetis scambus
	[ "40120111", { flow:"II"  }], // Ephemeroptera Baetidae Baetis vernus
	[ "40120102", { flow:"II"  }], // Ephemeroptera Baetidae Baetis buceratus
	[ "40120107", { flow:"II"  }], // Ephemeroptera Baetidae Baetis rhodani
	[ "40120601", { flow:"II"  }], // Ephemeroptera Baetidae Labiobaetis atrebatinus
	[ "40120501", { flow:"II"  }], // Ephemeroptera Baetidae Alainites muticus
	[ "40120702", { flow:"II"  }], // Ephemeroptera Baetidae Nigrobaetis niger
	[ "40120701", { flow:"II"  }], // Ephemeroptera Baetidae Nigrobaetis digitatus
	[ "40120201", { flow:"III" }], // Ephemeroptera Baetidae Centroptilum luteolum
	[ "40120402", { flow:"III" }], // Ephemeroptera Baetidae Procloeon pennulatum
	[ "40120301", { flow:"IV"  }], // Ephemeroptera Baetidae Cloeon dipterum
	[ "40120302", { flow:"IV"  }], // Ephemeroptera Baetidae Cloeon simile
	[ "40120401", { flow:"III" }], // Ephemeroptera Baetidae Procloeon bifidum
	[ "40130102", { flow:"I"   }], // Ephemeroptera Heptageniidae Rhithrogena semicolorata
	[ "40130101", { flow:"I"   }], // Ephemeroptera Heptageniidae Rhithrogena germanica
	[ "40130204", { flow:"I"   }], // Ephemeroptera Heptageniidae Heptagenia sulphurea
	[ "40130203", { flow:"I"   }], // Ephemeroptera Heptageniidae Heptagenia longicauda
	[ "40130601", { flow:"IV"  }], // Ephemeroptera Heptageniidae Kageronia fuscogrisea
	[ "40130502", { flow:"I"   }], // Ephemeroptera Heptageniidae Electrogena lateralis
	[ "40150101", { flow:"III" }], // Ephemeroptera Arthropleidae Arthroplea congener
	[ "40130404", { flow:"I"   }], // Ephemeroptera Heptageniidae Ecdyonurus venosus
	[ "40130403", { flow:"I"   }], // Ephemeroptera Heptageniidae Ecdyonurus torrentis
	[ "40130401", { flow:"I"   }], // Ephemeroptera Heptageniidae Ecdyonurus dispar
	[ "40130402", { flow:"I"   }], // Ephemeroptera Heptageniidae Ecdyonurus insignis
	[ "40210101", { flow:"IV"  }], // Ephemeroptera Leptophlebiidae Leptophlebia marginata
	[ "40210102", { flow:"IV"  }], // Ephemeroptera Leptophlebiidae Leptophlebia vespertina
	[ "40210202", { flow:"II"  }], // Ephemeroptera Leptophlebiidae Paraleptophlebia submarginata
	[ "40210201", { flow:"II"  }], // Ephemeroptera Leptophlebiidae Paraleptophlebia cincta
	[ "40210203", { flow:"II"  }], // Ephemeroptera Leptophlebiidae Paraleptophlebia werneri
	[ "40210301", { flow:"III" }], // Ephemeroptera Leptophlebiidae Habrophlebia fusca
	[ "40410201", { flow:"II"  }], // Ephemeroptera Ephemerellidae Serratella ignita
	[ "40410102", { flow:"II"  }], // Ephemeroptera Ephemerellidae Ephemerella notata
	[ "40310101", { flow:"III" }], // Ephemeroptera Potamanthidae Potamanthus luteus
	[ "40320103", { flow:"III" }], // Ephemeroptera Ephemeridae Ephemera vulgata
	[ "40320101", { flow:"II"  }], // Ephemeroptera Ephemeridae Ephemera danica
	[ "40320102", { flow:"III" }], // Ephemeroptera Ephemeridae Ephemera lineata
	[ "40510101", { flow:"III" }], // Ephemeroptera Caenidae Brachycercus harrisellus
	[ "40510203", { flow:"III" }], // Ephemeroptera Caenidae Caenis macrura
	[ "40510202", { flow:"IV"  }], // Ephemeroptera Caenidae Caenis luctuosa
	[ "40510205", { flow:"IV"  }], // Ephemeroptera Caenidae Caenis robusta
	[ "40510201", { flow:"IV"  }], // Ephemeroptera Caenidae Caenis horaria
	[ "40510204", { flow:"II"  }], // Ephemeroptera Caenidae Caenis rivulorum
	[ "40510208", { flow:"II"  }], // Ephemeroptera Caenidae Caenis pusilla
	[ "40510207", { flow:"II"  }], // Ephemeroptera Caenidae Caenis pseudorivulorum
	[ "40510206", { flow:"II"  }], // Ephemeroptera Caenidae Caenis beskidensis
	[ "41110101", { flow:"II"  }], // Plecoptera Taeniopterygidae Taeniopteryx nebulosa
	[ "41110201", { flow:"I"   }], // Plecoptera Taeniopterygidae Rhabdiopteryx acuminata
	[ "41110301", { flow:"III" }], // Plecoptera Taeniopterygidae Brachyptera putata
	[ "41110302", { flow:"I"   }], // Plecoptera Taeniopterygidae Brachyptera risi
	[ "41120103", { flow:"I"   }], // Plecoptera Nemouridae Protonemura praecox
	[ "41120102", { flow:"I"   }], // Plecoptera Nemouridae Protonemura montana
	[ "41120101", { flow:"I"   }], // Plecoptera Nemouridae Protonemura meyeri
	[ "41120201", { flow:"II"  }], // Plecoptera Nemouridae Amphinemura standfussi
	[ "41120202", { flow:"II"  }], // Plecoptera Nemouridae Amphinemura sulcicollis
	[ "41120301", { flow:"IV"  }], // Plecoptera Nemouridae Nemurella pictetii
	[ "41120403", { flow:"IV"  }], // Plecoptera Nemouridae Nemoura cinerea
	[ "41120404", { flow:"II"  }], // Plecoptera Nemouridae Nemoura dubitans
	[ "41120401", { flow:"IV"  }], // Plecoptera Nemouridae Nemoura avicularis
	[ "41120402", { flow:"II"  }], // Plecoptera Nemouridae Nemoura cambrica
	[ "41120405", { flow:"II"  }], // Plecoptera Nemouridae Nemoura erratica
	[ "41130102", { flow:"II"  }], // Plecoptera Leuctridae Leuctra geniculata
	[ "41130104", { flow:"I"   }], // Plecoptera Leuctridae Leuctra inermis
	[ "41130103", { flow:"I"   }], // Plecoptera Leuctridae Leuctra hippopus
	[ "41130106", { flow:"II"  }], // Plecoptera Leuctridae Leuctra nigra
	[ "41130101", { flow:"II"  }], // Plecoptera Leuctridae Leuctra fusca
	[ "41130105", { flow:"I"   }], // Plecoptera Leuctridae Leuctra moselyi
	[ "41140102", { flow:"I"   }], // Plecoptera Capniidae Capnia bifrons
	[ "41140101", { flow:"V"   }], // Plecoptera Capniidae Capnia atra
	[ "41140103", { flow:"I"   }], // Plecoptera Capniidae Capnia vidua
	[ "41210101", { flow:"I"   }], // Plecoptera Perlodidae Isogenus nubecula
	[ "41210201", { flow:"I"   }], // Plecoptera Perlodidae Perlodes microcephalus
	[ "41210301", { flow:"I"   }], // Plecoptera Perlodidae Diura bicaudata
	[ "41210401", { flow:"I"   }], // Plecoptera Perlodidae Isoperla grammatica
	[ "41210402", { flow:"III" }], // Plecoptera Perlodidae Isoperla obscura
	[ "41220101", { flow:"I"   }], // Plecoptera Perlidae Dinocras cephalotes
	[ "41220201", { flow:"I"   }], // Plecoptera Perlidae Perla bipunctata
	[ "41230301", { flow:"I"   }], // Plecoptera Chloroperlidae Siphonoperla torrentium
	[ "41230103", { flow:"I"   }], // Plecoptera Chloroperlidae Chloroperla tripunctata
	[ "41230201", { flow:"II"  }], // Plecoptera Chloroperlidae Xanthoperla apicalis
	[ "42110101", { flow:"IV"  }], // Odonata Platycnemididae Platycnemis pennipes
	[ "42120101", { flow:"IV"  }], // Odonata Coenagrionidae Pyrrhosoma nymphula
	[ "42120201", { flow:"IV"  }], // Odonata Coenagrionidae Ischnura elegans
	[ "42120202", { flow:"V"   }], // Odonata Coenagrionidae Ischnura pumilio
	[ "42120301", { flow:"IV"  }], // Odonata Coenagrionidae Enallagma cyathigerum
	[ "42120401", { flow:"V"   }], // Odonata Coenagrionidae Coenagrion armatum
	[ "42120402", { flow:"IV"  }], // Odonata Coenagrionidae Coenagrion hastulatum
	[ "42120404", { flow:"III" }], // Odonata Coenagrionidae Coenagrion mercuriale
	[ "42120405", { flow:"IV"  }], // Odonata Coenagrionidae Coenagrion puella
	[ "42120406", { flow:"IV"  }], // Odonata Coenagrionidae Coenagrion pulchellum
	[ "42120407", { flow:"V"   }], // Odonata Coenagrionidae Coenagrion scitulum
	[ "42120501", { flow:"IV"  }], // Odonata Coenagrionidae Ceriagrion tenellum
	[ "42120601", { flow:"IV"  }], // Odonata Coenagrionidae Erythromma najas
	[ "42130101", { flow:"V"   }], // Odonata Lestidae Lestes dryas
	[ "42130102", { flow:"IV"  }], // Odonata Lestidae Lestes sponsa
	[ "42140101", { flow:"III" }], // Odonata Calopterygidae Calopteryx splendens
	[ "42140102", { flow:"II"  }], // Odonata Calopterygidae Calopteryx virgo
	[ "42210101", { flow:"III" }], // Odonata Gomphidae Gomphus vulgatissimus
	[ "42220101", { flow:"II"  }], // Odonata Cordulegastridae Cordulegaster boltonii
	[ "42230101", { flow:"IV"  }], // Odonata Aeshnidae Brachytron pratense
	[ "42230201", { flow:"V"   }], // Odonata Aeshnidae Aeshna caerulea
	[ "42230202", { flow:"IV"  }], // Odonata Aeshnidae Aeshna cyanea
	[ "42230203", { flow:"V"   }], // Odonata Aeshnidae Aeshna grandis
	[ "42230204", { flow:"V"   }], // Odonata Aeshnidae Aeshna isosceles
	[ "42230205", { flow:"V"   }], // Odonata Aeshnidae Aeshna juncea
	[ "42230206", { flow:"IV"  }], // Odonata Aeshnidae Aeshna mixta
	[ "42230301", { flow:"V"   }], // Odonata Aeshnidae Anax imperator
	[ "42240101", { flow:"V"   }], // Odonata Corduliidae Cordulia aenea
	[ "42240201", { flow:"V"   }], // Odonata Corduliidae Somatochlora arctica
	[ "42240202", { flow:"IV"  }], // Odonata Corduliidae Somatochlora metallica
	[ "42240301", { flow:"III" }], // Odonata Corduliidae Oxygastra curtisii
	[ "42250101", { flow:"V"   }], // Odonata Libellulidae Orthetrum cancellatum
	[ "42250102", { flow:"IV"  }], // Odonata Libellulidae Orthetrum coerulescens
	[ "42250201", { flow:"V"   }], // Odonata Libellulidae Libellula depressa
	[ "42250202", { flow:"III" }], // Odonata Libellulidae Libellula fulva
	[ "42250203", { flow:"IV"  }], // Odonata Libellulidae Libellula quadrimaculata
	[ "42250301", { flow:"V"   }], // Odonata Libellulidae Sympetrum flaveolum
	[ "42250302", { flow:"V"   }], // Odonata Libellulidae Sympetrum fonscolombii
	[ "42250303", { flow:"V"   }], // Odonata Libellulidae Sympetrum nigrescens
	[ "42250304", { flow:"V"   }], // Odonata Libellulidae Sympetrum sanguineum
	[ "42250305", { flow:"V"   }], // Odonata Libellulidae Sympetrum danae
	[ "42250306", { flow:"IV"  }], // Odonata Libellulidae Sympetrum striolatum
	[ "42250307", { flow:"IV"  }], // Odonata Libellulidae Sympetrum vulgatum
	[ "42250401", { flow:"V"   }], // Odonata Libellulidae Leucorrhinia dubia
	[ "43110101", { flow:"V"   }], // Hemiptera Mesoveliidae Mesovelia furcata
	[ "43120111", { flow:"V"   }], // Hemiptera Hebridae Hebrus (Hebrus) pusillus
	[ "43120121", { flow:"IV"  }], // Hemiptera Hebridae Hebrus (Hebrusella) ruficeps
	[ "43210101", { flow:"V"   }], // Hemiptera Hydrometridae Hydrometra gracilenta
	[ "43210102", { flow:"IV"  }], // Hemiptera Hydrometridae Hydrometra stagnorum
	[ "43220111", { flow:"III" }], // Hemiptera Veliidae Velia (Plesiovelia) caprai
	[ "43220112", { flow:"IV"  }], // Hemiptera Veliidae Velia (Plesiovelia) saulii
	[ "43220201", { flow:"IV"  }], // Hemiptera Veliidae Microvelia pygmaea
	[ "43220202", { flow:"IV"  }], // Hemiptera Veliidae Microvelia reticulata
	[ "43220203", { flow:"IV"  }], // Hemiptera Veliidae Microvelia buenoi
	[ "43230112", { flow:"V"   }], // Hemiptera Gerridae Gerris costae
	[ "43230115", { flow:"V"   }], // Hemiptera Gerridae Gerris lateralis
	[ "43230117", { flow:"IV"  }], // Hemiptera Gerridae Gerris thoracicus
	[ "43230113", { flow:"V"   }], // Hemiptera Gerridae Gerris gibbifer
	[ "43230111", { flow:"V"   }], // Hemiptera Gerridae Gerris argentatus
	[ "43230114", { flow:"IV"  }], // Hemiptera Gerridae Gerris lacustris
	[ "43230116", { flow:"V"   }], // Hemiptera Gerridae Gerris odontogaster
	[ "43230301", { flow:"IV"  }], // Hemiptera Gerridae Aquarius najas
	[ "43230302", { flow:"V"   }], // Hemiptera Gerridae Aquarius paludum
	[ "43230201", { flow:"IV"  }], // Hemiptera Gerridae Limnoporus rufoscutellatus
	[ "43310101", { flow:"V"   }], // Hemiptera Nepidae Nepa cinerea
	[ "43310201", { flow:"V"   }], // Hemiptera Nepidae Ranatra linearis
	[ "43410101", { flow:"IV"  }], // Hemiptera Naucoridae Ilyocoris cimicoides
	[ "43420101", { flow:"II"  }], // Hemiptera Aphelocheiridae Aphelocheirus aestivalis
	[ "43510101", { flow:"IV"  }], // Hemiptera Notonectidae Notonecta glauca
	[ "43510104", { flow:"IV"  }], // Hemiptera Notonectidae Notonecta viridis
	[ "43510103", { flow:"V"   }], // Hemiptera Notonectidae Notonecta obliqua
	[ "43510102", { flow:"IV"  }], // Hemiptera Notonectidae Notonecta maculata
	[ "43520101", { flow:"IV"  }], // Hemiptera Pleidae Plea minutissima
	[ "43610111", { flow:"IV"  }], // Hemiptera Corixidae Micronecta (Dichaetonecta) scholtzi
	[ "43520101", { flow:"IV"  }], // Hemiptera Pleidae Plea minutissima
	[ "43610122", { flow:"IV"  }], // Hemiptera Corixidae Micronecta (Micronecta) poweri
	[ "43610301", { flow:"IV"  }], // Hemiptera Corixidae Cymatia bonsdorffii
	[ "43610302", { flow:"IV"  }], // Hemiptera Corixidae Cymatia coleoptrata
	[ "43610401", { flow:"IV"  }], // Hemiptera Corixidae Glaenocorisa propinqua
	[ "43610501", { flow:"VI"  }], // Hemiptera Corixidae Callicorixa praeusta
	[ "43610502", { flow:"V"   }], // Hemiptera Corixidae Callicorixa wollastoni
	[ "43610602", { flow:"IV"  }], // Hemiptera Corixidae Corixa dentipes
	[ "43610604", { flow:"IV"  }], // Hemiptera Corixidae Corixa punctata
	[ "43610601", { flow:"IV"  }], // Hemiptera Corixidae Corixa affinis
	[ "43610603", { flow:"IV"  }], // Hemiptera Corixidae Corixa panzeri
	[ "43610702", { flow:"V"   }], // Hemiptera Corixidae Hesperocorixa linnaei
	[ "43610704", { flow:"IV"  }], // Hemiptera Corixidae Hesperocorixa sahlbergi
	[ "43610701", { flow:"V"   }], // Hemiptera Corixidae Hesperocorixa castanea
	[ "43610703", { flow:"V"   }], // Hemiptera Corixidae Hesperocorixa moesta
	[ "43610801", { flow:"IV"  }], // Hemiptera Corixidae Arctocorisa carinata
	[ "43610802", { flow:"IV"  }], // Hemiptera Corixidae Arctocorisa germari
	[ "43610911", { flow:"IV"  }], // Hemiptera Corixidae Sigara (Sigara) dorsalis
	[ "43610912", { flow:"IV"  }], // Hemiptera Corixidae Sigara (Sigara) striata
	[ "43610921", { flow:"IV"  }], // Hemiptera Corixidae Sigara (Subsigara) distincta
	[ "43610922", { flow:"IV"  }], // Hemiptera Corixidae Sigara (Subsigara) falleni
	[ "43610923", { flow:"V"   }], // Hemiptera Corixidae Sigara (Subsigara) fallenoidea
	[ "43610924", { flow:"IV"  }], // Hemiptera Corixidae Sigara (Subsigara) fossarum
	[ "43610925", { flow:"V"   }], // Hemiptera Corixidae Sigara (Subsigara) scotti
	[ "43610941", { flow:"V"   }], // Hemiptera Corixidae Sigara (Vermicorixa) lateralis
	[ "43610951", { flow:"IV"  }], // Hemiptera Corixidae Sigara (Pseudovermicorixa) nigrolineata
	[ "43611101", { flow:"IV"  }], // Hemiptera Corixinae Paracorixa concinna
	[ "43610971", { flow:"V"   }], // Hemiptera Corixidae Sigara (Retrocorixa) limitata
	[ "43610972", { flow:"IV"  }], // Hemiptera Corixidae Sigara (Retrocorixa) semistriata
	[ "43610973", { flow:"IV"  }], // Hemiptera Corixidae Sigara (Retrocorixa) venusta
	[ "43610981", { flow:"V"   }], // Hemiptera Corixidae Sigara (Halicorixa) selecta
	[ "43610982", { flow:"V"   }], // Hemiptera Corixidae Sigara (Halicorixa) stagnalis
	[ "45110101", { flow:"II"  }], // Coleoptera Haliplidae Brychius elevatus
	[ "45110201", { flow:"V"   }], // Coleoptera Haliplidae Peltodytes caesus
	[ "45110341", { flow:"IV"  }], // Coleoptera Haliplidae Haliplus (Haliplinus) apicalis
	[ "45110321", { flow:"IV"  }], // Coleoptera Haliplidae Haliplus (Haliplus) confinis
	[ "45110351", { flow:"IV"  }], // Coleoptera Haliplidae Haliplus (Liaphlus) flavicollis
	[ "45110342", { flow:"IV"  }], // Coleoptera Haliplidae Haliplus (Haliplinus) fluviatilis
	[ "45110352", { flow:"V"   }], // Coleoptera Haliplidae Haliplus (Liaphlus) fulvus
	[ "45110343", { flow:"V"   }], // Coleoptera Haliplidae Haliplus (Haliplinus) furcatus
	[ "45110344", { flow:"V"   }], // Coleoptera Haliplidae Haliplus (Haliplinus) heydeni
	[ "45110345", { flow:"V"   }], // Coleoptera Haliplidae Haliplus (Haliplinus) immaculatus
	[ "45110353", { flow:"IV"  }], // Coleoptera Haliplidae Haliplus (Liaphlus) laminatus
	[ "45110331", { flow:"III" }], // Coleoptera Haliplidae Haliplus (Neohaliplus) lineatocollis
	[ "45110346", { flow:"IV"  }], // Coleoptera Haliplidae Haliplus (Haliplinus) lineolatus
	[ "45110354", { flow:"V"   }], // Coleoptera Haliplidae Haliplus (Liaphlus) mucronatus
	[ "45110322", { flow:"IV"  }], // Coleoptera Haliplidae Haliplus (Haliplus) obliquus
	[ "45110347", { flow:"V"   }], // Coleoptera Haliplidae Haliplus (Haliplinus) ruficollis
	[ "45110355", { flow:"V"   }], // Coleoptera Haliplidae Haliplus (Liaphlus) variegatus
	[ "45110323", { flow:"V"   }], // Coleoptera Haliplidae Haliplus (Haliplus) varius
	[ "45110348", { flow:"IV"  }], // Coleoptera Haliplidae Haliplus (Haliplinus) sibiricus
	[ "45120101", { flow:"V"   }], // Coleoptera Paelobiidae Hygrobia hermanni
	[ "45130101", { flow:"IV"  }], // Coleoptera Noteridae Noterus clavicornis
	[ "45130102", { flow:"V"   }], // Coleoptera Noteridae Noterus crassicornis
	[ "45140101", { flow:"III" }], // Coleoptera Dytiscidae Laccophilus hyalinus
	[ "45140102", { flow:"IV"  }], // Coleoptera Dytiscidae Laccophilus minutus
	[ "45140103", { flow:"V"   }], // Coleoptera Dytiscidae Laccophilus poecilus
	[ "45140201", { flow:"V"   }], // Coleoptera Dytiscidae Hydrovatus clypealis
	[ "45140301", { flow:"IV"  }], // Coleoptera Dytiscidae Hyphydrus ovatus
	[ "45140401", { flow:"V"   }], // Coleoptera Dytiscidae Hydroglyphus geminus
	[ "45140501", { flow:"IV"  }], // Coleoptera Dytiscidae Bidessus minutissimus
	[ "45140502", { flow:"V"   }], // Coleoptera Dytiscidae Bidessus unistriatus
	[ "45140611", { flow:"V"   }], // Coleoptera Dytiscidae Hygrotus (Hygrotus) decoratus
	[ "45140612", { flow:"IV"  }], // Coleoptera Dytiscidae Hygrotus (Hygrotus) inaequalis
	[ "45140613", { flow:"V"   }], // Coleoptera Dytiscidae Hygrotus (Hygrotus) quinquelineatus
	[ "45140614", { flow:"IV"  }], // Coleoptera Dytiscidae Hygrotus (Hygrotus) versicolor
	[ "45140621", { flow:"V"   }], // Coleoptera Dytiscidae Hygrotus (Coelambus) confluens
	[ "45140622", { flow:"V"   }], // Coleoptera Dytiscidae Hygrotus (Coelambus) impressopunctatus
	[ "45140624", { flow:"V"   }], // Coleoptera Dytiscidae Hygrotus (Coelambus) novemlineatus
	[ "45140625", { flow:"V"   }], // Coleoptera Dytiscidae Hygrotus (Coelambus) parallellogrammus
	[ "45140801", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus angustatus
	[ "45140803", { flow:"II"  }], // Coleoptera Dytiscidae Hydroporus discretus
	[ "45140805", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus elongatulus
	[ "45140806", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus erythrocephalus
	[ "45140807", { flow:"IV"  }], // Coleoptera Dytiscidae Hydroporus ferrugineus
	[ "45140809", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus glabriusculus
	[ "45140811", { flow:"IV"  }], // Coleoptera Dytiscidae Hydroporus gyllenhalii
	[ "45140812", { flow:"IV"  }], // Coleoptera Dytiscidae Hydroporus incognitus
	[ "45140813", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus longicornis
	[ "45140814", { flow:"II"  }], // Coleoptera Dytiscidae Hydroporus longulus
	[ "45140815", { flow:"VI"  }], // Coleoptera Dytiscidae Hydroporus marginatus
	[ "45140816", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus melanarius
	[ "45140817", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus memnonius
	[ "45140818", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus morio
	[ "45140819", { flow:"IV"  }], // Coleoptera Dytiscidae Hydroporus neglectus
	[ "45140821", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus nigrita
	[ "45140822", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus obscurus
	[ "45140823", { flow:"II"  }], // Coleoptera Dytiscidae Hydroporus obsoletus
	[ "45140824", { flow:"IV"  }], // Coleoptera Dytiscidae Hydroporus palustris
	[ "45140825", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus planus
	[ "45140826", { flow:"IV"  }], // Coleoptera Dytiscidae Hydroporus pubescens
	[ "45140827", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus rufifrons
	[ "45140828", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus scalesianus
	[ "45140829", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus striola
	[ "45140831", { flow:"IV"  }], // Coleoptera Dytiscidae Hydroporus tessellatus
	[ "45140832", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus tristis
	[ "45140833", { flow:"V"   }], // Coleoptera Dytiscidae Hydroporus umbrosus
	[ "45142901", { flow:"V"   }], // Coleoptera Dytiscidae Suphrodytes dorsalis
	[ "45140901", { flow:"IV"  }], // Coleoptera Dytiscidae Stictonectes lepidus
	[ "45141001", { flow:"V"   }], // Coleoptera Dytiscidae Graptodytes bilineatus
	[ "45141002", { flow:"V"   }], // Coleoptera Dytiscidae Graptodytes flavipes
	[ "45141003", { flow:"V"   }], // Coleoptera Dytiscidae Graptodytes granularis
	[ "45141004", { flow:"IV"  }], // Coleoptera Dytiscidae Graptodytes pictus
	[ "45141101", { flow:"V"   }], // Coleoptera Dytiscidae Porhydrus lineatus
	[ "45141201", { flow:"II"  }], // Coleoptera Dytiscidae Deronectes latus
	[ "45141311", { flow:"V"   }], // Coleoptera Dytiscidae Nebrioporus (Nebrioporus) assimilis
	[ "45141312", { flow:"IV"  }], // Coleoptera Dytiscidae Nebrioporus (Nebrioporus) depressus
	[ "45141313", { flow:"III" }], // Coleoptera Dytiscidae Nebrioporus (Nebrioporus) elegans
	[ "45141402", { flow:"V"   }], // Coleoptera Dytiscidae Stictotarsus multilineatus
	[ "45141401", { flow:"II"  }], // Coleoptera Dytiscidae Stictotarsus duodecimpustulatus
	[ "45141501", { flow:"I"   }], // Coleoptera Dytiscidae Oreodytes davisii
	[ "45141502", { flow:"II"  }], // Coleoptera Dytiscidae Oreodytes sanmarkii
	[ "45141503", { flow:"II"  }], // Coleoptera Dytiscidae Oreodytes septentrionalis
	[ "45141601", { flow:"IV"  }], // Coleoptera Dytiscidae Scarodytes halensis
	[ "45141701", { flow:"V"   }], // Coleoptera Dytiscidae Laccornis oblongus
	[ "45141901", { flow:"II"  }], // Coleoptera Dytiscidae Platambus maculatus
	[ "45141801", { flow:"V"   }], // Coleoptera Dytiscidae Liopterus haemorrhoidalis
	[ "45142051", { flow:"V"   }], // Coleoptera Dytiscidae Agabus (Gaurodytes) affinis
	[ "45142031", { flow:"V"   }], // Coleoptera Dytiscidae Agabus (Acatodes) arcticus
	[ "45142052", { flow:"VI"  }], // Coleoptera Dytiscidae Agabus (Gaurodytes) biguttatus
	[ "45142053", { flow:"IV"  }], // Coleoptera Dytiscidae Agabus (Gaurodytes) bipustulatus
	[ "45142108", { flow:"IV"  }], // Coleoptera Dytiscidae Ilybius chalconatus
	[ "45142032", { flow:"V"   }], // Coleoptera Dytiscidae Agabus (Acatodes) congener
	[ "45142055", { flow:"V"   }], // Coleoptera Dytiscidae Agabus (Gaurodytes) conspersus
	[ "45142056", { flow:"III" }], // Coleoptera Dytiscidae Agabus (Gaurodytes) didymus
	[ "45142057", { flow:"II"  }], // Coleoptera Dytiscidae Agabus (Gaurodytes) guttatus
	[ "45142041", { flow:"V"   }], // Coleoptera Dytiscidae Agabus (Agabus) labiatus
	[ "45142058", { flow:"V"   }], // Coleoptera Dytiscidae Agabus (Gaurodytes) melanarius
	[ "45142109", { flow:"IV"  }], // Coleoptera Dytiscidae Ilybius montanus
	[ "45142059", { flow:"V"   }], // Coleoptera Dytiscidae Agabus (Gaurodytes) nebulosus
	[ "4514205A", { flow:"II"  }], // Coleoptera Dytiscidae Agabus (Gaurodytes) paludosus
	[ "4514205B", { flow:"V"   }], // Coleoptera Dytiscidae Agabus (Gaurodytes) striolatus
	[ "45142033", { flow:"IV"  }], // Coleoptera Dytiscidae Agabus (Acatodes) sturmii
	[ "45142042", { flow:"V"   }], // Coleoptera Dytiscidae Agabus (Agabus) uliginosus
	[ "45142043", { flow:"V"   }], // Coleoptera Dytiscidae Agabus (Agabus) undulatus
	[ "4514205C", { flow:"V"   }], // Coleoptera Dytiscidae Agabus (Gaurodytes) unguicularis
	[ "45142101", { flow:"V"   }], // Coleoptera Dytiscidae Ilybius aenescens
	[ "45142102", { flow:"V"   }], // Coleoptera Dytiscidae Ilybius ater
	[ "45142103", { flow:"IV"  }], // Coleoptera Dytiscidae Ilybius fenestratus
	[ "45142104", { flow:"IV"  }], // Coleoptera Dytiscidae Ilybius fuliginosus
	[ "45142105", { flow:"V"   }], // Coleoptera Dytiscidae Ilybius guttiger
	[ "45142106", { flow:"V"   }], // Coleoptera Dytiscidae Ilybius quadriguttatus
	[ "45142107", { flow:"V"   }], // Coleoptera Dytiscidae Ilybius subaeneus
	[ "45142221", { flow:"V"   }], // Coleoptera Dytiscidae Rhantus (Rhantus) bistriatus
	[ "45142222", { flow:"V"   }], // Coleoptera Dytiscidae Rhantus (Rhantus) exsoletus
	[ "45142223", { flow:"V"   }], // Coleoptera Dytiscidae Rhantus (Rhantus) frontalis
	[ "45142211", { flow:"V"   }], // Coleoptera Dytiscidae Rhantus (Nartus) grapii
	[ "45142224", { flow:"V"   }], // Coleoptera Dytiscidae Rhantus (Rhantus) suturalis
	[ "45142301", { flow:"V"   }], // Coleoptera Dytiscidae Colymbetes fuscus
	[ "45142402", { flow:"V"   }], // Coleoptera Dytiscidae Hydaticus seminiger
	[ "45142403", { flow:"V"   }], // Coleoptera Dytiscidae Hydaticus transversalis
	[ "45142601", { flow:"V"   }], // Coleoptera Dytiscidae Acilius canaliculatus
	[ "45142602", { flow:"V"   }], // Coleoptera Dytiscidae Acilius sulcatus
	[ "45142501", { flow:"V"   }], // Coleoptera Dytiscidae Graphoderus bilineatus
	[ "45142502", { flow:"V"   }], // Coleoptera Dytiscidae Graphoderus cinereus
	[ "45142503", { flow:"V"   }], // Coleoptera Dytiscidae Graphoderus zonatus
	[ "45142701", { flow:"V"   }], // Coleoptera Dytiscidae Dytiscus circumcinctus
	[ "45142702", { flow:"V"   }], // Coleoptera Dytiscidae Dytiscus circumflexus
	[ "45142703", { flow:"V"   }], // Coleoptera Dytiscidae Dytiscus dimidiatus
	[ "45142704", { flow:"V"   }], // Coleoptera Dytiscidae Dytiscus lapponicus
	[ "45142705", { flow:"IV"  }], // Coleoptera Dytiscidae Dytiscus marginalis
	[ "45142706", { flow:"V"   }], // Coleoptera Dytiscidae Dytiscus semisulcatus
	[ "45150201", { flow:"IV"  }], // Coleoptera Gyrinidae Gyrinus aeratus
	[ "45150203", { flow:"IV"  }], // Coleoptera Gyrinidae Gyrinus caspius
	[ "45150204", { flow:"V"   }], // Coleoptera Gyrinidae Gyrinus distinctus
	[ "45150205", { flow:"V"   }], // Coleoptera Gyrinidae Gyrinus marinus
	[ "45150206", { flow:"V"   }], // Coleoptera Gyrinidae Gyrinus minutus
	[ "45150202", { flow:"V"   }], // Coleoptera Gyrinidae Gyrinus paykulli
	[ "45150209", { flow:"IV"  }], // Coleoptera Gyrinidae Gyrinus substriatus
	[ "45150211", { flow:"V"   }], // Coleoptera Gyrinidae Gyrinus suffriani
	[ "45150212", { flow:"III" }], // Coleoptera Gyrinidae Gyrinus urinator
	[ "45150401", { flow:"II"  }], // Coleoptera Gyrinidae Orectochilus villosus
	[ "45340101", { flow:"VI"  }], // Coleoptera Georissidae Georissus crenulatus
	[ "45370101", { flow:"V"   }], // Coleoptera Spercheidae Spercheus emarginatus
	[ "45360101", { flow:"V"   }], // Coleoptera Hydrochidae Hydrochus angustatus
	[ "45360102", { flow:"V"   }], // Coleoptera Hydrochidae Hydrochus brevis
	[ "45360103", { flow:"V"   }], // Coleoptera Hydrochidae Hydrochus crenatus
	[ "45360104", { flow:"V"   }], // Coleoptera Hydrochidae Hydrochus elongatus
	[ "45360105", { flow:"V"   }], // Coleoptera Hydrochidae Hydrochus ignicollis
	[ "45360107", { flow:"V"   }], // Coleoptera Hydrochidae Hydrochus megaphallus
	[ "45360106", { flow:"IV"  }], // Coleoptera Hydrochidae Hydrochus nitidicollis
	[ "45330141", { flow:"V"   }], // Coleoptera Helophoridae Helophorus (Megahelophorus) aequalis
	[ "45330131", { flow:"V"   }], // Coleoptera Helophoridae Helophorus (Trichohelophorus) alternans
	[ "45330151", { flow:"III" }], // Coleoptera Helophoridae Helophorus (Atracthelophorus) arvernicus
	[ "45330152", { flow:"IV"  }], // Coleoptera Helophoridae Helophorus (Atracthelophorus) brevipalpis
	[ "45330161", { flow:"V"   }], // Coleoptera Helophoridae Helophorus (Helophorus) dorsalis
	[ "45330162", { flow:"V"   }], // Coleoptera Helophoridae Helophorus (Helophorus) flavipes
	[ "45330163", { flow:"V"   }], // Coleoptera Helophoridae Helophorus (Helophorus) fulgidicollis
	[ "45330142", { flow:"IV"  }], // Coleoptera Helophoridae Helophorus (Megahelophorus) grandis
	[ "45330164", { flow:"V"   }], // Coleoptera Helophoridae Helophorus (Helophorus) granularis
	[ "45330165", { flow:"V"   }], // Coleoptera Helophoridae Helophorus (Helophorus) griseus
	[ "45330167", { flow:"V"   }], // Coleoptera Helophoridae Helophorus (Helophorus) longitarsis
	[ "45330168", { flow:"V"   }], // Coleoptera Helophoridae Helophorus (Helophorus) minutus
	[ "45330169", { flow:"V"   }], // Coleoptera Helophoridae Helophorus (Helophorus) nanus
	[ "45330111", { flow:"V"   }], // Coleoptera Helophoridae Helophorus (Empleurus) nubilus
	[ "4533016A", { flow:"V"   }], // Coleoptera Helophoridae Helophorus (Helophorus) obscurus
	[ "4533016B", { flow:"VI"  }], // Coleoptera Helophoridae Helophorus (Helophorus) strigifrons
	[ "45330121", { flow:"V"   }], // Coleoptera Helophoridae Helophorus (Cyphelophorus) tuberculatus
	[ "45353001", { flow:"VI"  }], // Coleoptera Hydrophilidae Coelostoma orbiculare
	[ "45353143", { flow:"VI"  }], // Coleoptera Hydrophilidae Cercyon (Cercyon) bifenestratus
	[ "45353144", { flow:"VI"  }], // Coleoptera Hydrophilidae Cercyon (Cercyon) convexiusculus
	[ "45353145", { flow:"VI"  }], // Coleoptera Hydrophilidae Cercyon (Cercyon) depressus
	[ "45353146", { flow:"VI"  }], // Coleoptera Hydrophilidae Cercyon (Cercyon) granarius
	[ "45353148", { flow:"VI"  }], // Coleoptera Hydrophilidae Cercyon (Cercyon) impressus
	[ "4535314A", { flow:"VI"  }], // Coleoptera Hydrophilidae Cercyon (Cercyon) lateralis
	[ "4535314B", { flow:"VI"  }], // Coleoptera Hydrophilidae Cercyon (Cercyon) littoralis
	[ "4535314E", { flow:"VI"  }], // Coleoptera Hydrophilidae Cercyon (Cercyon) obsoletus
	[ "4535314C", { flow:"VI"  }], // Coleoptera Hydrophilidae Cercyon (Cercyon) marinus
	[ "4535314D", { flow:"VI"  }], // Coleoptera Hydrophilidae Cercyon (Cercyon) melanocephalus
	[ "4535314H", { flow:"VI"  }], // Coleoptera Hydrophilidae Cercyon (Cercyon) sternalis
	[ "4535314K", { flow:"VI"  }], // Coleoptera Hydrophilidae Cercyon (Cercyon) tristis
	[ "45353151", { flow:"VI"  }], // Coleoptera Hydrophilidae Cercyon (Dicyrtocercyon) ustulatus
	[ "45351002", { flow:"IV"  }], // Coleoptera Hydrophilidae Paracymus scutellaris
	[ "45351101", { flow:"V"   }], // Coleoptera Hydrophilidae Hydrobius fuscipes
	[ "45351201", { flow:"V"   }], // Coleoptera Hydrophilidae Limnoxenus niger
	[ "45351301", { flow:"IV"  }], // Coleoptera Hydrophilidae Anacaena bipustulata
	[ "45351302", { flow:"IV"  }], // Coleoptera Hydrophilidae Anacaena globulus
	[ "45351303", { flow:"IV"  }], // Coleoptera Hydrophilidae Anacaena limbata
	[ "45351304", { flow:"IV"  }], // Coleoptera Hydrophilidae Anacaena lutescens
	[ "45351421", { flow:"V"   }], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) atratus
	[ "45351422", { flow:"VI"  }], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) ytenensis
	[ "45351411", { flow:"IV"  }], // Coleoptera Hydrophilidae Laccobius (Laccobius) colon
	[ "45351423", { flow:"VI"  }], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) bipunctatus
	[ "45351412", { flow:"V"   }], // Coleoptera Hydrophilidae Laccobius (Laccobius) minutus
	[ "45351426", { flow:"IV"  }], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) sinuatus
	[ "45351427", { flow:"III" }], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) striatulus
	[ "45351601", { flow:"V"   }], // Coleoptera Hydrophilidae Helochares lividus
	[ "45351602", { flow:"V"   }], // Coleoptera Hydrophilidae Helochares obscurus
	[ "45351603", { flow:"V"   }], // Coleoptera Hydrophilidae Helochares punctatus
	[ "45351701", { flow:"V"   }], // Coleoptera Hydrophilidae Enochrus affinis
	[ "45351702", { flow:"V"   }], // Coleoptera Hydrophilidae Enochrus bicolor
	[ "45351703", { flow:"V"   }], // Coleoptera Hydrophilidae Enochrus coarctatus
	[ "45351709", { flow:"V"   }], // Coleoptera Hydrophilidae Enochrus fuscipennis
	[ "45351711", { flow:"V"   }], // Coleoptera Hydrophilidae Enochrus halophilus
	[ "45351712", { flow:"V"   }], // Coleoptera Hydrophilidae Enochrus nigritus
	[ "45351705", { flow:"V"   }], // Coleoptera Hydrophilidae Enochrus melanocephalus
	[ "45351706", { flow:"V"   }], // Coleoptera Hydrophilidae Enochrus ochropterus
	[ "45351707", { flow:"IV"  }], // Coleoptera Hydrophilidae Enochrus quadripunctatus
	[ "45351708", { flow:"IV"  }], // Coleoptera Hydrophilidae Enochrus testaceus
	[ "45352001", { flow:"V"   }], // Coleoptera Hydrophilidae Cymbiodyta marginellus
	[ "45352101", { flow:"VI"  }], // Coleoptera Hydrophilidae Chaetarthria seminulum
	[ "45352201", { flow:"V"   }], // Coleoptera Hydrophilidae Hydrochara caraboides
	[ "45352301", { flow:"V"   }], // Coleoptera Hydrophilidae Hydrophilus piceus
	[ "45352411", { flow:"V"   }], // Coleoptera Hydrophilidae Berosus (Berosus) affinis
	[ "45352412", { flow:"V"   }], // Coleoptera Hydrophilidae Berosus (Berosus) luridus
	[ "45352413", { flow:"V"   }], // Coleoptera Hydrophilidae Berosus (Berosus) signaticollis
	[ "45352421", { flow:"V"   }], // Coleoptera Hydrophilidae Berosus (Enoplurus) fulvus
	[ "45410121", { flow:"VI"  }], // Coleoptera Hydraenidae Ochthebius (Asiobates) auriculatus
	[ "45410122", { flow:"VI"  }], // Coleoptera Hydraenidae Ochthebius (Asiobates) bicolon
	[ "45410123", { flow:"V"   }], // Coleoptera Hydraenidae Ochthebius (Asiobates) dilatatus
	[ "45410501", { flow:"II"  }], // Coleoptera Hydraenidae Enicocerus exsculptus
	[ "45410152", { flow:"V"   }], // Coleoptera Hydraenidae Ochthebius (Ochthebius) marinus
	[ "45410132", { flow:"V"   }], // Coleoptera Hydraenidae Ochthebius (Homalochthebius) minimus
	[ "45410141", { flow:"V"   }], // Coleoptera Hydraenidae Ochthebius (Hymenodes) nanus
	[ "45410142", { flow:"VI"  }], // Coleoptera Hydraenidae Ochthebius (Hymenodes) poweri
	[ "45410143", { flow:"V"   }], // Coleoptera Hydraenidae Ochthebius (Hymenodes) punctatus
	[ "45410153", { flow:"V"   }], // Coleoptera Hydraenidae Ochthebius (Ochthebius) pusillus
	[ "45410133", { flow:"V"   }], // Coleoptera Hydraenidae Ochthebius (Homalochthebius) lejolisii
	[ "45410154", { flow:"V"   }], // Coleoptera Hydraenidae Ochthebius (Ochthebius) viridis
	[ "45410201", { flow:"IV"  }], // Coleoptera Hydraenidae Hydraena britteni
	[ "45410202", { flow:"II"  }], // Coleoptera Hydraenidae Hydraena gracilis
	[ "45410203", { flow:"IV"  }], // Coleoptera Hydraenidae Hydraena flavipes
	[ "45410204", { flow:"II"  }], // Coleoptera Hydraenidae Hydraena nigrita
	[ "45410205", { flow:"V"   }], // Coleoptera Hydraenidae Hydraena palustris
	[ "45410206", { flow:"III" }], // Coleoptera Hydraenidae Hydraena pulchella
	[ "45410207", { flow:"II"  }], // Coleoptera Hydraenidae Hydraena pygmaea
	[ "45410208", { flow:"IV"  }], // Coleoptera Hydraenidae Hydraena riparia
	[ "45410209", { flow:"II"  }], // Coleoptera Hydraenidae Hydraena rufipes
	[ "45410211", { flow:"IV"  }], // Coleoptera Hydraenidae Hydraena testacea
	[ "45410301", { flow:"V"   }], // Coleoptera Hydraenidae Limnebius aluta
	[ "45410303", { flow:"IV"  }], // Coleoptera Hydraenidae Limnebius nitidus
	[ "45410304", { flow:"V"   }], // Coleoptera Hydraenidae Limnebius papposus
	[ "45410305", { flow:"II"  }], // Coleoptera Hydraenidae Limnebius truncatellus
	[ "45630101", { flow:"II"  }], // Coleoptera Elmidae Elmis aenea
	[ "45630201", { flow:"II"  }], // Coleoptera Elmidae Esolus parallelepipedus
	[ "45630301", { flow:"II"  }], // Coleoptera Elmidae Limnius volckmari
	[ "45630401", { flow:"III" }], // Coleoptera Elmidae Macronychus quadrituberculatus
	[ "45630501", { flow:"II"  }], // Coleoptera Elmidae Normandia nitens
	[ "45630601", { flow:"IV"  }], // Coleoptera Elmidae Oulimnius major
	[ "45630602", { flow:"IV"  }], // Coleoptera Elmidae Oulimnius rivularis
	[ "45630603", { flow:"IV"  }], // Coleoptera Elmidae Oulimnius troglodytes
	[ "45630604", { flow:"IV"  }], // Coleoptera Elmidae Oulimnius tuberculatus
	[ "45630701", { flow:"II"  }], // Coleoptera Elmidae Riolus cupreus
	[ "45630702", { flow:"II"  }], // Coleoptera Elmidae Riolus subviolaceus
	[ "45630801", { flow:"III" }], // Coleoptera Elmidae Stenelmis canaliculata
	[ "45620101", { flow:"IV"  }], // Coleoptera Dryopidae Pomatinus substriatus
	[ "46110102", { flow:"IV"  }], // Megaloptera Sialidae Sialis lutaria
	[ "46110101", { flow:"II"  }], // Megaloptera Sialidae Sialis fuliginosa
	[ "46110103", { flow:"IV"  }], // Megaloptera Sialidae Sialis nigripes
	[ "47110101", { flow:"II"  }], // Neuroptera Osmylidae Osmylus fulvicephalus
	[ "47120102", { flow:"IV"  }], // Neuroptera Sisyridae Sisyra fuscata
	[ "47120101", { flow:"I"   }], // Neuroptera Sisyridae Sisyra dalii
	[ "47120103", { flow:"III" }], // Neuroptera Sisyridae Sisyra terminalis
	[ "48110101", { flow:"I"   }], // Trichoptera Rhyacophilidae Rhyacophila dorsalis
	[ "48110104", { flow:"I"   }], // Trichoptera Rhyacophilidae Rhyacophila fasciata
	[ "48110103", { flow:"I"   }], // Trichoptera Rhyacophilidae Rhyacophila obliterata
	[ "48110102", { flow:"I"   }], // Trichoptera Rhyacophilidae Rhyacophila munda
	[ "48120102", { flow:"II"  }], // Trichoptera Glossosomatidae Glossosoma conformis
	[ "48120101", { flow:"II"  }], // Trichoptera Glossosomatidae Glossosoma boltoni
	[ "48120103", { flow:"II"  }], // Trichoptera Glossosomatidae Glossosoma intermedium
	[ "48120202", { flow:"II"  }], // Trichoptera Glossosomatidae Agapetus fuscipes
	[ "48120203", { flow:"II"  }], // Trichoptera Glossosomatidae Agapetus ochripes
	[ "48120201", { flow:"II"  }], // Trichoptera Glossosomatidae Agapetus delicatulus
	[ "48210101", { flow:"I"   }], // Trichoptera Philopotamidae Philopotamus montanus
	[ "48210202", { flow:"I"   }], // Trichoptera Philopotamidae Wormaldia occipitalis
	[ "48210201", { flow:"I"   }], // Trichoptera Philopotamidae Wormaldia mediana
	[ "48210203", { flow:"I"   }], // Trichoptera Philopotamidae Wormaldia subnigra
	[ "48210301", { flow:"I"   }], // Trichoptera Philopotamidae Chimarra marginata
	[ "48240301", { flow:"III" }], // Trichoptera Polycentropodidae Neureclipsis bimaculata
	[ "48240402", { flow:"II"  }], // Trichoptera Polycentropodidae Plectrocnemia conspersa
	[ "48240403", { flow:"I"   }], // Trichoptera Polycentropodidae Plectrocnemia geniculata
	[ "48240401", { flow:"II"  }], // Trichoptera Polycentropodidae Plectrocnemia brevis
	[ "48240501", { flow:"II"  }], // Trichoptera Polycentropodidae Polycentropus flavomaculatus
	[ "48240502", { flow:"II"  }], // Trichoptera Polycentropodidae Polycentropus irroratus
	[ "48240503", { flow:"II"  }], // Trichoptera Polycentropodidae Polycentropus kingi
	[ "48240201", { flow:"V"   }], // Trichoptera Polycentropodidae Holocentropus dubius
	[ "48240202", { flow:"V"   }], // Trichoptera Polycentropodidae Holocentropus picicornis
	[ "48240203", { flow:"V"   }], // Trichoptera Polycentropodidae Holocentropus stagnalis
	[ "48240103", { flow:"IV"  }], // Trichoptera Polycentropodidae Cyrnus trimaculatus
	[ "48240102", { flow:"V"   }], // Trichoptera Polycentropodidae Cyrnus insolutus
	[ "48240101", { flow:"IV"  }], // Trichoptera Polycentropodidae Cyrnus flavidus
	[ "48230101", { flow:"III" }], // Trichoptera Ecnomidae Ecnomus tenellus
	[ "48220408", { flow:"III" }], // Trichoptera Psychomyiidae Tinodes waeneri
	[ "48220403", { flow:"II"  }], // Trichoptera Psychomyiidae Tinodes maclachlani
	[ "48220401", { flow:"II"  }], // Trichoptera Psychomyiidae Tinodes assimilis
	[ "48220405", { flow:"II"  }], // Trichoptera Psychomyiidae Tinodes pallidulus
	[ "48220404", { flow:"II"  }], // Trichoptera Psychomyiidae Tinodes maculicornis
	[ "48220407", { flow:"II"  }], // Trichoptera Psychomyiidae Tinodes unicolor
	[ "48220406", { flow:"II"  }], // Trichoptera Psychomyiidae Tinodes rostocki
	[ "48220402", { flow:"I"   }], // Trichoptera Psychomyiidae Tinodes dives
	[ "48220101", { flow:"II"  }], // Trichoptera Psychomyiidae Lype phaeopa
	[ "48220102", { flow:"II"  }], // Trichoptera Psychomyiidae Lype reducta
	[ "48220201", { flow:"II"  }], // Trichoptera Psychomyiidae Metalype fragilis
	[ "48220301", { flow:"II"  }], // Trichoptera Psychomyiidae Psychomyia pusilla
	[ "48250207", { flow:"II"  }], // Trichoptera Hydropsychidae Hydropsyche pellucidula
	[ "48250201", { flow:"II"  }], // Trichoptera Hydropsychidae Hydropsyche angustipennis
	[ "48250209", { flow:"II"  }], // Trichoptera Hydropsychidae Hydropsyche siltalai
	[ "48250208", { flow:"I"   }], // Trichoptera Hydropsychidae Hydropsyche saxonica
	[ "48250203", { flow:"II"  }], // Trichoptera Hydropsychidae Hydropsyche contubernalis
	[ "48250202", { flow:"III" }], // Trichoptera Hydropsychidae Hydropsyche bulgaromanorum
	[ "48250206", { flow:"II"  }], // Trichoptera Hydropsychidae Hydropsyche instabilis
	[ "48250205", { flow:"II"  }], // Trichoptera Hydropsychidae Hydropsyche fulvipes
	[ "48250204", { flow:"II"  }], // Trichoptera Hydropsychidae Hydropsyche exocellata
	[ "48250101", { flow:"II"  }], // Trichoptera Hydropsychidae Cheumatopsyche lepida
	[ "48250301", { flow:"II"  }], // Trichoptera Hydropsychidae Diplectrona felix
	[ "48130101", { flow:"IV"  }], // Trichoptera Hydroptilidae Agraylea multipunctata
	[ "48130102", { flow:"IV"  }], // Trichoptera Hydroptilidae Agraylea sexmaculata
	[ "48130201", { flow:"I"   }], // Trichoptera Hydroptilidae Allotrichia pallicornis
	[ "48130309", { flow:"II"  }], // Trichoptera Hydroptilidae Hydroptila sparsa
	[ "48130308", { flow:"II"  }], // Trichoptera Hydroptilidae Hydroptila simulans
	[ "48130302", { flow:"II"  }], // Trichoptera Hydroptilidae Hydroptila cornuta
	[ "48130304", { flow:"II"  }], // Trichoptera Hydroptilidae Hydroptila lotensis
	[ "48130301", { flow:"II"  }], // Trichoptera Hydroptilidae Hydroptila angulata
	[ "48130311", { flow:"I"   }], // Trichoptera Hydroptilidae Hydroptila sylvestris
	[ "48130305", { flow:"III" }], // Trichoptera Hydroptilidae Hydroptila martini
	[ "48130306", { flow:"I"   }], // Trichoptera Hydroptilidae Hydroptila occulta
	[ "48130313", { flow:"IV"  }], // Trichoptera Hydroptilidae Hydroptila tineoides
	[ "48130307", { flow:"IV"  }], // Trichoptera Hydroptilidae Hydroptila pulchricornis
	[ "48130303", { flow:"II"  }], // Trichoptera Hydroptilidae Hydroptila forcipata
	[ "48130315", { flow:"II"  }], // Trichoptera Hydroptilidae Hydroptila vectis
	[ "48130312", { flow:"II"  }], // Trichoptera Hydroptilidae Hydroptila tigurina
	[ "48130314", { flow:"II"  }], // Trichoptera Hydroptilidae Hydroptila valesiaca
	[ "48130602", { flow:"II"  }], // Trichoptera Hydroptilidae Ithytrichia lamellaris
	[ "48130601", { flow:"II"  }], // Trichoptera Hydroptilidae Ithytrichia clavata
	[ "48130701", { flow:"IV"  }], // Trichoptera Hydroptilidae Orthotrichia angustella
	[ "48130703", { flow:"V"   }], // Trichoptera Hydroptilidae Orthotrichia tragetti
	[ "48130702", { flow:"IV"  }], // Trichoptera Hydroptilidae Orthotrichia costalis
	[ "48130403", { flow:"V"   }], // Trichoptera Hydroptilidae Oxyethira flavicornis
	[ "48130408", { flow:"IV"  }], // Trichoptera Hydroptilidae Oxyethira tristella
	[ "48130407", { flow:"IV"  }], // Trichoptera Hydroptilidae Oxyethira simplex
	[ "48130402", { flow:"IV"  }], // Trichoptera Hydroptilidae Oxyethira falcata
	[ "48130404", { flow:"II"  }], // Trichoptera Hydroptilidae Oxyethira frici
	[ "48130401", { flow:"V"   }], // Trichoptera Hydroptilidae Oxyethira distinctella
	[ "48130406", { flow:"V"   }], // Trichoptera Hydroptilidae Oxyethira sagittifera
	[ "48130405", { flow:"III" }], // Trichoptera Hydroptilidae Oxyethira mirabilis
	[ "48130501", { flow:"V"   }], // Trichoptera Hydroptilidae Tricholeiochiton fagesii
	[ "48310301", { flow:"III" }], // Trichoptera Phryganeidae Hagenella clathrata
	[ "48310502", { flow:"IV"  }], // Trichoptera Phryganeidae Phryganea grandis
	[ "48310501", { flow:"IV"  }], // Trichoptera Phryganeidae Phryganea bipunctata
	[ "48310401", { flow:"V"   }], // Trichoptera Phryganeidae Oligotricha striata
	[ "48310105", { flow:"V"   }], // Trichoptera Phryganeidae Agrypnia varia
	[ "48310102", { flow:"V"   }], // Trichoptera Phryganeidae Agrypnia obsoleta
	[ "48310104", { flow:"V"   }], // Trichoptera Phryganeidae Agrypnia picta
	[ "48310103", { flow:"V"   }], // Trichoptera Phryganeidae Agrypnia pagetana
	[ "48310701", { flow:"V"   }], // Trichoptera Phryganeidae Agrypnetes crassicornis
	[ "48310601", { flow:"VI"  }], // Trichoptera Phryganeidae Trichostegia minor
	[ "48340101", { flow:"II"  }], // Trichoptera Limnephilidae Ironoquia dubia
	[ "483B0104", { flow:"V"   }], // Trichoptera Apataniidae Apatania wallengreni
	[ "483B0101", { flow:"V"   }], // Trichoptera Apataniidae Apatania auricula
	[ "483B0102", { flow:"II"  }], // Trichoptera Apataniidae Apatania muliebris
	[ "48340301", { flow:"II"  }], // Trichoptera Limnephilidae Drusus annulatus
	[ "48340401", { flow:"I"   }], // Trichoptera Limnephilidae Ecclisopteryx guttulata
	[ "48341726", { flow:"IV"  }], // Trichoptera Limnephilidae Limnephilus rhombicus
	[ "48341712", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus flavicornis
	[ "48341729", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus subcentralis
	[ "48341705", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus borealis
	[ "48341722", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus marmoratus
	[ "48341725", { flow:"IV"  }], // Trichoptera Limnephilidae Limnephilus politus
	[ "48341731", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus tauricus
	[ "48341724", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus pati
	[ "48341728", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus stigma
	[ "48341703", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus binotatus
	[ "48341708", { flow:"IV"  }], // Trichoptera Limnephilidae Limnephilus decipiens
	[ "48341719", { flow:"IV"  }], // Trichoptera Limnephilidae Limnephilus lunatus
	[ "48341721", { flow:"VI"  }], // Trichoptera Limnephilidae Limnephilus luridus
	[ "48341717", { flow:"III" }], // Trichoptera Limnephilidae Limnephilus ignavus
	[ "48341714", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus fuscinervis
	[ "48341709", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus elegans
	[ "48341715", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus griseus
	[ "48341704", { flow:"VI"  }], // Trichoptera Limnephilidae Limnephilus bipunctatus
	[ "48341701", { flow:"IV"  }], // Trichoptera Limnephilidae Limnephilus affinis
	[ "48341718", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus incisus
	[ "48341716", { flow:"II"  }], // Trichoptera Limnephilidae Limnephilus hirsutus
	[ "48341706", { flow:"IV"  }], // Trichoptera Limnephilidae Limnephilus centralis
	[ "48341727", { flow:"VI"  }], // Trichoptera Limnephilidae Limnephilus sparsus
	[ "48341702", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus auricula
	[ "48341732", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus vittatus
	[ "48341723", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus nigriceps
	[ "48341711", { flow:"III" }], // Trichoptera Limnephilidae Limnephilus extricatus
	[ "48341713", { flow:"II"  }], // Trichoptera Limnephilidae Limnephilus fuscicornis
	[ "48341707", { flow:"V"   }], // Trichoptera Limnephilidae Limnephilus coenosus
	[ "48341602", { flow:"V"   }], // Trichoptera Limnephilidae Grammotaulius nitidus
	[ "48341601", { flow:"V"   }], // Trichoptera Limnephilidae Grammotaulius nigropunctatus
	[ "48341501", { flow:"IV"  }], // Trichoptera Limnephilidae Glyphotaelius pellucidus
	[ "48341801", { flow:"V"   }], // Trichoptera Limnephilidae Nemotaulius punctatolineatus
	[ "48341401", { flow:"IV"  }], // Trichoptera Limnephilidae Anabolia nervosa
	[ "48341402", { flow:"IV"  }], // Trichoptera Limnephilidae Anabolia brevipennis
	[ "48342001", { flow:"V"   }], // Trichoptera Limnephilidae Rhadicoleptus alpestris
	[ "48341102", { flow:"II"  }], // Trichoptera Limnephilidae Potamophylax latipennis
	[ "48341101", { flow:"II"  }], // Trichoptera Limnephilidae Potamophylax cingulatus
	[ "48341103", { flow:"II"  }], // Trichoptera Limnephilidae Potamophylax rotundipennis
	[ "48340602", { flow:"II"  }], // Trichoptera Limnephilidae Halesus radiatus
	[ "48340601", { flow:"II"  }], // Trichoptera Limnephilidae Halesus digitatus
	[ "48340801", { flow:"II"  }], // Trichoptera Limnephilidae Melampophylax mucoreus
	[ "48341201", { flow:"III" }], // Trichoptera Limnephilidae Stenophylax permistus
	[ "48341202", { flow:"II"  }], // Trichoptera Limnephilidae Stenophylax vibex
	[ "48341001", { flow:"II"  }], // Trichoptera Limnephilidae Micropterna lateralis
	[ "48341002", { flow:"II"  }], // Trichoptera Limnephilidae Micropterna sequax
	[ "48340902", { flow:"V"   }], // Trichoptera Limnephilidae Mesophylax impunctatus
	[ "48340901", { flow:"II"  }], // Trichoptera Limnephilidae Mesophylax aspersus
	[ "48340501", { flow:"I"   }], // Trichoptera Limnephilidae Allogamus auricollis
	[ "48340701", { flow:"II"  }], // Trichoptera Limnephilidae Hydatophylax infumatus
	[ "48341301", { flow:"II"  }], // Trichoptera Limnephilidae Chaetopteryx villosa
	[ "48390101", { flow:"IV"  }], // Trichoptera Molannidae Molanna angustata
	[ "48390102", { flow:"V"   }], // Trichoptera Molannidae Molanna albicans
	[ "48360102", { flow:"III" }], // Trichoptera Beraeidae Beraea pullata
	[ "48360101", { flow:"II"  }], // Trichoptera Beraeidae Beraea maurus
	[ "48360301", { flow:"II"  }], // Trichoptera Beraeidae Ernodes articularis
	[ "48360201", { flow:"II"  }], // Trichoptera Beraeidae Beraeodes minutus
	[ "48380101", { flow:"I"   }], // Trichoptera Odontoceridae Odontocerum albicorne
	[ "483A0205", { flow:"IV"  }], // Trichoptera Leptoceridae Ceraclea nigronervosa
	[ "483A0204", { flow:"IV"  }], // Trichoptera Leptoceridae Ceraclea fulva
	[ "483A0206", { flow:"IV"  }], // Trichoptera Leptoceridae Ceraclea senilis
	[ "483A0202", { flow:"II"  }], // Trichoptera Leptoceridae Ceraclea annulicornis
	[ "483A0203", { flow:"IV"  }], // Trichoptera Leptoceridae Ceraclea dissimilis
	[ "483A0102", { flow:"IV"  }], // Trichoptera Leptoceridae Athripsodes aterrimus
	[ "483A0104", { flow:"II"  }], // Trichoptera Leptoceridae Athripsodes cinereus
	[ "483A0101", { flow:"II"  }], // Trichoptera Leptoceridae Athripsodes albifrons
	[ "483A0103", { flow:"II"  }], // Trichoptera Leptoceridae Athripsodes bilineatus
	[ "483A0105", { flow:"I"   }], // Trichoptera Leptoceridae Athripsodes commutatus
	[ "483A0403", { flow:"IV"  }], // Trichoptera Leptoceridae Mystacides nigra
	[ "483A0401", { flow:"IV"  }], // Trichoptera Leptoceridae Mystacides azurea
	[ "483A0402", { flow:"IV"  }], // Trichoptera Leptoceridae Mystacides longicornis
	[ "483A0701", { flow:"IV"  }], // Trichoptera Leptoceridae Triaenodes bicolor
	[ "483A0801", { flow:"II"  }], // Trichoptera Leptoceridae Ylodes conspersus
	[ "483A0803", { flow:"II"  }], // Trichoptera Leptoceridae Ylodes simulans
	[ "483A0802", { flow:"III" }], // Trichoptera Leptoceridae Ylodes reuteri
	[ "483A0601", { flow:"V"   }], // Trichoptera Leptoceridae Erotesis baltica
	[ "483A0502", { flow:"III" }], // Trichoptera Leptoceridae Adicella reducta
	[ "483A0501", { flow:"II"  }], // Trichoptera Leptoceridae Adicella filicornis
	[ "483A0904", { flow:"IV"  }], // Trichoptera Leptoceridae Oecetis ochracea
	[ "483A0901", { flow:"V"   }], // Trichoptera Leptoceridae Oecetis furva
	[ "483A0902", { flow:"IV"  }], // Trichoptera Leptoceridae Oecetis lacustris
	[ "483A0903", { flow:"II"  }], // Trichoptera Leptoceridae Oecetis notata
	[ "483A0905", { flow:"IV"  }], // Trichoptera Leptoceridae Oecetis testacea
	[ "483A0303", { flow:"V"   }], // Trichoptera Leptoceridae Leptocerus tineiformis
	[ "483A0302", { flow:"III" }], // Trichoptera Leptoceridae Leptocerus lusitanicus
	[ "483A0301", { flow:"III" }], // Trichoptera Leptoceridae Leptocerus interruptus
	[ "483A1002", { flow:"II"  }], // Trichoptera Leptoceridae Setodes punctatus
	[ "483A1001", { flow:"V"   }], // Trichoptera Leptoceridae Setodes argentipunctellus
	[ "48350101", { flow:"I"   }], // Trichoptera Goeridae Goera pilosa
	[ "48350202", { flow:"I"   }], // Trichoptera Goeridae Silo pallipes
	[ "48350201", { flow:"I"   }], // Trichoptera Goeridae Silo nigricornis
	[ "48330101", { flow:"II"  }], // Trichoptera Lepidostomatidae Crunoecia irrorata
	[ "48330301", { flow:"II"  }], // Trichoptera Lepidostomatidae Lepidostoma hirtum
	[ "48330201", { flow:"II"  }], // Trichoptera Lepidostomatidae Lasiocephala basalis
	[ "48320101", { flow:"II"  }], // Trichoptera Brachycentridae Brachycentrus subnubilus
	[ "48370201", { flow:"II"  }], // Trichoptera Sericostomatidae Sericostoma personatum
	[ "48370101", { flow:"III" }], // Trichoptera Sericostomatidae Notidobia ciliaris
	[ "50140500", { flow:"II"  }], // Diptera Pediciidae Dicranota
	[ "50140100", { flow:"II"  }], // Diptera Pediciidae Pedicia
	[ "50220100", { flow:"II"  }], // Diptera Ptychopteridae Ptychoptera
	[ "50811000", { flow:"V"   }], // Diptera Syrphidae Eristalis
	[ "50360000", { flow:"II"  }], // Diptera Simuliidae
	[ "50320000", { flow:"V"   }], // Diptera Chaoboridae
	[ "50330000", { flow:"V"   }], // Diptera Culicidae
])

export const scoresLifeFamily = new Map<TaxonCode, ScoreLife>([
	[ "05110000", { flow:"IV"  }], // Tricladida Planariidae
	[ "05120000", { flow:"IV"  }], // Tricladida Dugesiidae
	[ "05130000", { flow:"IV"  }], // Tricladida Dendrocoelidae
	[ "16110000", { flow:"II"  }], // Gastropoda Neritidae
	[ "16120000", { flow:"III" }], // Gastropoda Viviparidae
	[ "16130000", { flow:"IV"  }], // Gastropoda Valvatidae
	[ "16140000", { flow:"IV"  }], // Gastropoda Hydrobiidae
	[ "16160000", { flow:"IV"  }], // Gastropoda Bithyniidae
	[ "16220000", { flow:"IV"  }], // Gastropoda Lymnaeidae
	[ "16210000", { flow:"IV"  }], // Gastropoda Physidae
	[ "16230000", { flow:"IV"  }], // Gastropoda Planorbidae
	[ "16250000", { flow:"IV"  }], // Gastropoda Acroloxidae
	[ "17110000", { flow:"II"  }], // Bivalvia Margaritiferidae
	[ "17120000", { flow:"IV"  }], // Bivalvia Unionidae
	[ "17130000", { flow:"IV"  }], // Bivalvia Sphaeriidae
	[ "17140000", { flow:"IV"  }], // Bivalvia Dreissenidae
	[ "22110000", { flow:"II"  }], // Hirudinea Piscicolidae
	[ "22120000", { flow:"IV"  }], // Hirudinea Glossiphoniidae
	[ "22210000", { flow:"IV"  }], // Hirudinea Hirudinidae
	[ "22230000", { flow:"IV"  }], // Hirudinea Erpobdellidae
	[ "28010000", { flow:"VI"  }], // Notostraca Triopsidae
	[ "35110000", { flow:"V"   }], // Mysidacea Mysidae
	[ "36110000", { flow:"IV"  }], // Isopoda Asellidae
	[ "37110000", { flow:"III" }], // Amphipoda Corophiidae
	[ "37140000", { flow:"II"  }], // Amphipoda Gammaridae
	[ "37130000", { flow:"IV"  }], // Amphipoda Crangonyctidae
	[ "37120000", { flow:"VI"  }], // Amphipoda Talitridae
	[ "34310000", { flow:"II"  }], // Decapoda Astacidae
	[ "40110000", { flow:"IV"  }], // Ephemeroptera Siphlonuridae
	[ "40120000", { flow:"II"  }], // Ephemeroptera Baetidae
	[ "40130000", { flow:"I"   }], // Ephemeroptera Heptageniidae
	[ "40210000", { flow:"II"  }], // Ephemeroptera Leptophlebiidae
	[ "40410000", { flow:"II"  }], // Ephemeroptera Ephemerellidae
	[ "40310000", { flow:"III" }], // Ephemeroptera Potamanthidae
	[ "40320000", { flow:"II"  }], // Ephemeroptera Ephemeridae
	[ "40510000", { flow:"IV"  }], // Ephemeroptera Caenidae
	[ "41110000", { flow:"II"  }], // Plecoptera Taeniopterygidae
	[ "41120000", { flow:"IV"  }], // Plecoptera Nemouridae
	[ "41130000", { flow:"II"  }], // Plecoptera Leuctridae
	[ "41140000", { flow:"I"   }], // Plecoptera Capniidae
	[ "41210000", { flow:"I"   }], // Plecoptera Perlodidae
	[ "41220000", { flow:"I"   }], // Plecoptera Perlidae
	[ "41230000", { flow:"I"   }], // Plecoptera Chloroperlidae
	[ "42110000", { flow:"IV"  }], // Odonata Platycnemididae
	[ "42120000", { flow:"IV"  }], // Odonata Coenagrionidae
	[ "42130000", { flow:"IV"  }], // Odonata Lestidae
	[ "42140000", { flow:"III" }], // Odonata Calopterygidae
	[ "42210000", { flow:"II"  }], // Odonata Gomphidae
	[ "42220000", { flow:"II"  }], // Odonata Cordulegastridae
	[ "42230000", { flow:"IV"  }], // Odonata Aeshnidae
	[ "42240000", { flow:"IV"  }], // Odonata Corduliidae
	[ "42250000", { flow:"IV"  }], // Odonata Libellulidae
	[ "43110000", { flow:"V"   }], // Hemiptera Mesoveliidae
	[ "43120000", { flow:"IV"  }], // Hemiptera Hebridae
	[ "43210000", { flow:"IV"  }], // Hemiptera Hydrometridae
	[ "43220000", { flow:"IV"  }], // Hemiptera Veliidae
	[ "43230000", { flow:"IV"  }], // Hemiptera Gerridae
	[ "43310000", { flow:"V"   }], // Hemiptera Nepidae
	[ "43410000", { flow:"IV"  }], // Hemiptera Naucoridae
	[ "43420000", { flow:"II"  }], // Hemiptera Aphelocheiridae
	[ "43510000", { flow:"IV"  }], // Hemiptera Notonectidae
	[ "43520000", { flow:"IV"  }], // Hemiptera Pleidae
	[ "43610000", { flow:"IV"  }], // Hemiptera Corixidae
	[ "45110000", { flow:"IV"  }], // Coleoptera Haliplidae
	[ "45120000", { flow:"V"   }], // Coleoptera Paelobiidae
	[ "45130000", { flow:"IV"  }], // Coleoptera Noteridae
	[ "45140000", { flow:"IV"  }], // Coleoptera Dytiscidae
	[ "45150000", { flow:"IV"  }], // Coleoptera Gyrinidae
	[ "45350000", { flow:"IV"  }], // Coleoptera Hydrophilidae
	[ "45410000", { flow:"IV"  }], // Coleoptera Hydraenidae
	[ "45510000", { flow:"IV"  }], // Coleoptera Scirtidae
	[ "45630000", { flow:"II"  }], // Coleoptera Elmidae
	[ "46110000", { flow:"IV"  }], // Megaloptera Sialidae
	[ "47110000", { flow:"II"  }], // Neuroptera Osmylidae
	[ "47120000", { flow:"IV"  }], // Neuroptera Sisyridae
	[ "48110000", { flow:"I"   }], // Trichoptera Rhyacophilidae
	[ "48120000", { flow:"II"  }], // Trichoptera Glossosomatidae
	[ "48210000", { flow:"I"   }], // Trichoptera Philopotamidae
	[ "48240000", { flow:"IV"  }], // Trichoptera Polycentropodidae
	[ "48220000", { flow:"II"  }], // Trichoptera Psychomyiidae
	[ "48230000", { flow:"III" }], // Trichoptera Ecnomidae
	[ "48250000", { flow:"II"  }], // Trichoptera Hydropsychidae
	[ "48130000", { flow:"IV"  }], // Trichoptera Hydroptilidae
	[ "48310000", { flow:"IV"  }], // Trichoptera Phryganeidae
	[ "48340000", { flow:"IV"  }], // Trichoptera Limnephilidae
	[ "48390000", { flow:"IV"  }], // Trichoptera Molannidae
	[ "48360000", { flow:"II"  }], // Trichoptera Beraeidae
	[ "48380000", { flow:"I"   }], // Trichoptera Odontoceridae
	[ "483A0000", { flow:"IV"  }], // Trichoptera Leptoceridae
	[ "48350000", { flow:"I"   }], // Trichoptera Goeridae
	[ "48330000", { flow:"II"  }], // Trichoptera Lepidostomatidae
	[ "48320000", { flow:"II"  }], // Trichoptera Brachycentridae
	[ "48370000", { flow:"II"  }], // Trichoptera Sericostomatidae
	[ "50110000", { flow:"IV"  }], // Diptera Tipulidae
	[ "50220000", { flow:"II"  }], // Diptera Ptychopteridae
	[ "50320000", { flow:"V"   }], // Diptera Chaoboridae
	[ "50330000", { flow:"V"   }], // Diptera Culicidae
	[ "50360000", { flow:"II"  }], // Diptera Simuliidae
	[ "50810000", { flow:"V"   }], // Diptera Syrphidae
])

export const scoresDehli = new Map<TaxonCode, ScoreDehli>([
	[ "40130000", 0  ], // Ephemeroptera Heptageniidae
	[ "40140000", 10 ], // Ephemeroptera Ameletidae
	[ "41220000", 10 ], // Plecoptera Perlidae
	[ "41230000", 10 ], // Plecoptera Chloroperlidae
	[ "41110300", 9  ], // Plecoptera Taeniopterygidae Brachyptera
	[ "41110200", 9  ], // Plecoptera Taeniopterygidae Rhabdiopteryx
	[ "48210100", 10 ], // Trichoptera Philopotamidae Philopotamus
	[ "48210200", 10 ], // Trichoptera Philopotamidae Wormaldia
	[ "48110000", 10 ], // Trichoptera Rhyacophilidae
	[ "48380000", 9  ], // Trichoptera Odontoceridae
	[ "16140000", 7  ], // Gastropoda Hydrobiidae
	[ "16160000", 7  ], // Gastropoda Bithyniidae
	[ "16130000", 7  ], // Gastropoda Valvatidae
	[ "42110000", 7  ], // Odonata Platycnemididae
	[ "42130000", 7  ], // Odonata Lestidae
	[ "42140000", 7  ], // Odonata Calopterygidae
	[ "42230000", 7  ], // Odonata Aeshnidae
	[ "43310000", 7  ], // Hemiptera Nepidae
	[ "45410000", 7  ], // Coleoptera Hydraenidae
	[ "48310000", 7  ], // Trichoptera Phryganeidae
	[ "48360000", 7  ], // Trichoptera Beraeidae
	[ "49110000", 7  ], // Lepidoptera Pyralidae
	[ "50340000", 8  ], // Diptera Thaumaleidae
	[ "50310000", 8  ], // Diptera Dixidae
	[ "37140000", 6  ], // Amphipoda Gammaridae
	[ "40120100", 7  ], // Ephemeroptera Baetidae Baetis
	[ "40210200", 6  ], // Ephemeroptera Leptophlebiidae Paraleptophlebia
	[ "41210000", 7  ], // Plecoptera Perlodidae
	[ "41120100", 7  ], // Plecoptera Nemouridae Protonemura
	[ "41120200", 7  ], // Plecoptera Nemouridae Amphinemura
	[ "41120300", 7  ], // Plecoptera Nemouridae Nemurella
	[ "41110100", 6  ], // Plecoptera Taeniopterygidae Taeniopteryx
	[ "41130000", 7  ], // Plecoptera Leuctridae
	[ "43420000", 7  ], // Hemiptera Aphelocheiridae
	[ "45510100", 6  ], // Coleoptera Scirtidae Elodes
	[ "48320000", 6  ], // Trichoptera Brachycentridae
	[ "48330000", 7  ], // Trichoptera Lepidostomatidae
	[ "48120000", 7  ], // Trichoptera Glossosomatidae
	[ "48210300", 6  ], // Trichoptera Philopotamidae Chimarra
	[ "48250000", 5  ], // Trichoptera Hydropsychidae
	[ "483A0000", 5  ], // Trichoptera Leptoceridae
	[ "48240000", 6  ], // Trichoptera Polycentropodidae
	[ "48350000", 8  ], // Trichoptera Goeridae
	[ "48370000", 7  ], // Trichoptera Sericostomatidae
	[ "50360000", 6  ], // Diptera Simuliidae
	[ "50140000", 7  ], // Diptera Pediciidae
	[ "50710000", 6  ], // Diptera Empididae
	[ "50610000", 7  ], // Diptera Stratiomyidae
	[ "50850000", 5  ], // Diptera Muscidae
	[ "17120000", 6  ], // Bivalvia Unionidae
	[ "42120000", 5  ], // Odonata Coenagrionidae
	[ "42240000", 4  ], // Odonata Corduliidae
	[ "42250000", 4  ], // Odonata Libellulidae
	[ "42210000", 5  ], // Odonata Gomphidae
	[ "40110000", 5  ], // Ephemeroptera Siphlonuridae
	[ "40320000", 5  ], // Ephemeroptera Ephemeridae
	[ "40120300", 4  ], // Ephemeroptera Baetidae Cloeon
	[ "40510000", 5  ], // Ephemeroptera Caenidae
	[ "40210100", 5  ], // Ephemeroptera Leptophlebiidae Leptophlebia
	[ "40210300", 5  ], // Ephemeroptera Leptophlebiidae Habrophlebia
	[ "41120400", 6  ], // Plecoptera Nemouridae Nemoura
	[ "46110000", 5  ], // Megaloptera Sialidae
	[ "47120000", 6  ], // Neuroptera Sisyridae
	[ "45630000", 5  ], // Coleoptera Elmidae
	[ "45360000", 5  ], // Coleoptera Hydrochidae
	[ "45330000", 3  ], // Coleoptera Helophoridae
	[ "48230000", 4  ], // Trichoptera Ecnomidae
	[ "48390000", 5  ], // Trichoptera Molannidae
	[ "50420000", 5  ], // Diptera Tanypodinae
	[ "50460000", 5  ], // Diptera Orthocladiinae
	[ "50130000", 5  ], // Diptera Limoniidae
	[ "50110000", 4  ], // Diptera Tipulidae
	[ "50220000", 5  ], // Diptera Ptychopteridae
	[ "50720000", 5  ], // Diptera Dolichopodidae
	[ "50210000", 4  ], // Diptera Psychodidae
	[ "50630000", 4  ], // Diptera Tabanidae
	[ "50620000", 5  ], // Diptera Rhagionidae
	[ "50640000", 5  ], // Diptera Athericidae
	[ "05110000", 3  ], // Tricladida Planariidae
	[ "05120000", 3  ], // Tricladida Dugesiidae
	[ "16220000", 2  ], // Gastropoda Lymnaeidae
	[ "16210000", 3  ], // Gastropoda Physidae
	[ "17130000", 2  ], // Bivalvia Sphaeriidae
	[ "36110000", 2  ], // Isopoda Asellidae
	[ "43610000", 2  ], // Hemiptera Corixidae
	[ "43230000", 2  ], // Hemiptera Gerridae
	[ "43210000", 2  ], // Hemiptera Hydrometridae
	[ "43510000", 1  ], // Hemiptera Notonectidae
	[ "43410000", 3  ], // Hemiptera Naucoridae
	[ "43220000", 2  ], // Hemiptera Veliidae
	[ "43110000", 2  ], // Hemiptera Mesoveliidae
	[ "45150000", 2  ], // Coleoptera Gyrinidae
	[ "45350000", 3  ], // Coleoptera Hydrophilidae
	[ "45510000", 3  ], // Coleoptera Scirtidae
	[ "45140000", 1  ], // Coleoptera Dytiscidae
	[ "50830000", 2  ], // Diptera Ephydridae
	[ "50470000", 1  ], // Diptera Chironominae (Chironomini)
	[ "50330000", 1  ], // Diptera Culicidae
	[ "50810000", 1  ], // Diptera Syrphidae
	[ "50350000", 1  ], // Diptera Ceratopogonidae
	[ "16230000", 1  ], // Gastropoda Planorbidae
	[ "45140000", 1  ], // Coleoptera Dytiscidae
	[ "50350000", 1  ], // Diptera Ceratopogonidae
])

export const scoresCciCommunity = [ 0, 1, 1, 3, 3, 5, 5, 7, 10, 12, 15 ];

export const scoresCci = new Map<TaxonCode, ScoreCci>([
	[ "05110101", 6  ], // Tricladida Planariidae Planaria torva
	[ "05110202", 1  ], // Tricladida Planariidae Polycelis nigra
	[ "05110203", 1  ], // Tricladida Planariidae Polycelis tenuis
	[ "05110201", 3  ], // Tricladida Planariidae Polycelis felina
	[ "05110301", 3  ], // Tricladida Planariidae Phagocata vitta
	[ "05110401", 2  ], // Tricladida Planariidae Crenobia alpina
	[ "05120101", 2  ], // Tricladida Dugesiidae Dugesia lugubris
	[ "05120103", 3  ], // Tricladida Dugesiidae Dugesia tigrina
	[ "05120102", 2  ], // Tricladida Dugesiidae Dugesia polychroa
	[ "05130201", 2  ], // Tricladida Dendrocoelidae Dendrocoelum lacteum
	[ "05130101", 7  ], // Tricladida Dendrocoelidae Bdellocephala punctata
	[ "16110101", 3  ], // Gastropoda Neritidae Theodoxus fluviatilis
	[ "16120102", 3  ], // Gastropoda Viviparidae Viviparus viviparus
	[ "16120101", 5  ], // Gastropoda Viviparidae Viviparus contectus
	[ "16130111", 2  ], // Gastropoda Valvatidae Valvata (Valvata) cristata
	[ "16130121", 9  ], // Gastropoda Valvatidae Valvata (Tropidina) macrostoma
	[ "16130131", 1  ], // Gastropoda Valvatidae Valvata (Cincinna) piscinalis
	[ "16140801", 4  ], // Gastropoda Hydrobiidae Ventrosia ventrosa
	[ "16140111", 6  ], // Gastropoda Hydrobiidae Hydrobia (Hydrobia) acuta
	[ "16140701", 1  ], // Gastropoda Hydrobiidae Peringia ulvae
	[ "16140301", 1  ], // Gastropoda Hydrobiidae Potamopyrgus antipodarum
	[ "16140401", 8  ], // Gastropoda Hydrobiidae Marstoniopsis insubrica
	[ "16160111", 1  ], // Gastropoda Bithyniidae Bithynia (Bithynia) tentaculata
	[ "16160121", 5  ], // Gastropoda Bithyniidae Bithynia (Codiella) leachii
	[ "16170101", 2  ], // Gastropoda Assimineidae Assiminea grayana
	[ "16220301", 3  ], // Gastropoda Lymnaeidae Galba truncatula
	[ "16220501", 9  ], // Gastropoda Lymnaeidae Omphiscola glabra
	[ "16220401", 2  ], // Gastropoda Lymnaeidae Stagnicola palustris
	[ "16220105", 1  ], // Gastropoda Lymnaeidae Lymnaea stagnalis
	[ "16220601", 2  ], // Gastropoda Lymnaeidae Radix auricularia
	[ "16220201", 10  ], // Gastropoda Lymnaeidae Myxas glutinosa
	[ "16210101", 5  ], // Gastropoda Physidae Aplexa hypnorum
	[ "16210202", 1  ], // Gastropoda Physidae Physa fontinalis
	[ "16230801", 4  ], // Gastropoda Planorbidae Planorbarius corneus
	[ "16230911", 7  ], // Gastropoda Planorbidae Menetus (Dilatata) dilatatus
	[ "16230111", 1  ], // Gastropoda Planorbidae Planorbis (Planorbis) carinatus
	[ "16230112", 1  ], // Gastropoda Planorbidae Planorbis (Planorbis) planorbis
	[ "16230222", 9  ], // Gastropoda Planorbidae Anisus (Disculifer) vorticulus
	[ "16230221", 1  ], // Gastropoda Planorbidae Anisus (Disculifer) vortex
	[ "16230211", 5  ], // Gastropoda Planorbidae Anisus (Anisus) leucostoma
	[ "16230421", 6  ], // Gastropoda Planorbidae Gyraulus (Torquis) laevis
	[ "16230412", 1  ], // Gastropoda Planorbidae Gyraulus (Gyraulus) albus
	[ "16230411", 9  ], // Gastropoda Planorbidae Gyraulus (Gyraulus) acronicus
	[ "16230431", 2  ], // Gastropoda Planorbidae Gyraulus (Armiger) crista
	[ "16230301", 2  ], // Gastropoda Planorbidae Bathyomphalus contortus
	[ "16230601", 3  ], // Gastropoda Planorbidae Hippeutis complanatus
	[ "16230701", 10  ], // Gastropoda Planorbidae Segmentina nitida
	[ "16250101", 2  ], // Gastropoda Acroloxidae Acroloxus lacustris
	[ "16231101", 1  ], // Gastropoda Planorbidae Ancylus fluviatilis
	[ "16320501", 8  ], // Gastropoda Succineidae Succinella oblonga
	[ "16320201", 1  ], // Gastropoda Succineidae Succinea putris
	[ "16320311", 1  ], // Gastropoda Succineidae Oxyloma (Oxyloma) pfeifferi
	[ "16320401", 10  ], // Gastropoda Succineidae Quickella arenaria
	[ "16330221", 3  ], // Gastropoda Vertiginidae Vertigo (Vertigo) antivertigo
	[ "16330224", 8  ], // Gastropoda Vertiginidae Vertigo (Vertigo) moulinsiana
	[ "16330223", 8  ], // Gastropoda Vertiginidae Vertigo (Vertigo) lilljeborgi
	[ "16330211", 10  ], // Gastropoda Vertiginidae Vertigo (Vertilla) angustior
	[ "16350111", 4  ], // Gastropoda Zonitidae Zonitoides (Zonitoides) nitidus
	[ "17110101", 7  ], // Bivalvia Margaritiferidae Margaritifera margaritifera
	[ "17120101", 3  ], // Bivalvia Unionidae Unio pictorum
	[ "17120102", 5  ], // Bivalvia Unionidae Unio tumidus
	[ "17120202", 2  ], // Bivalvia Unionidae Anodonta cygnea
	[ "17120201", 3  ], // Bivalvia Unionidae Anodonta anatina
	[ "17120301", 7  ], // Bivalvia Unionidae Pseudanodonta complanata
	[ "17130103", 3  ], // Bivalvia Sphaeriidae Sphaerium rivicola
	[ "17130101", 1  ], // Bivalvia Sphaeriidae Sphaerium corneum
	[ "17130104", 10  ], // Bivalvia Sphaeriidae Sphaerium solidum
	[ "17130301", 3  ], // Bivalvia Sphaeriidae Musculium lacustre
	[ "17130302", 5  ], // Bivalvia Sphaeriidae Musculium transversum
	[ "17130201", 3  ], // Bivalvia Sphaeriidae Pisidium amnicum
	[ "17130202", 1  ], // Bivalvia Sphaeriidae Pisidium casertanum
	[ "17130203", 7  ], // Bivalvia Sphaeriidae Pisidium conventus
	[ "17130212", 3  ], // Bivalvia Sphaeriidae Pisidium personatum
	[ "17130211", 4  ], // Bivalvia Sphaeriidae Pisidium obtusale
	[ "17130207", 4  ], // Bivalvia Sphaeriidae Pisidium milium
	[ "17130213", 8  ], // Bivalvia Sphaeriidae Pisidium pseudosphaerium
	[ "17130215", 1  ], // Bivalvia Sphaeriidae Pisidium subtruncatum
	[ "17130216", 5  ], // Bivalvia Sphaeriidae Pisidium supinum
	[ "17130204", 4  ], // Bivalvia Sphaeriidae Pisidium henslowanum
	[ "17130206", 5  ], // Bivalvia Sphaeriidae Pisidium lilljeborgii
	[ "17130205", 4  ], // Bivalvia Sphaeriidae Pisidium hibernicum
	[ "17130209", 3  ], // Bivalvia Sphaeriidae Pisidium nitidum
	[ "17130214", 5  ], // Bivalvia Sphaeriidae Pisidium pulchellum
	[ "17130208", 4  ], // Bivalvia Sphaeriidae Pisidium moitessierianum
	[ "17130217", 8  ], // Bivalvia Sphaeriidae Pisidium tenuilineatum
	[ "17140101", 2  ], // Bivalvia Dreissenidae Dreissena polymorpha
	[ "22110101", 2  ], // Hirudinea Piscicolidae Piscicola geometra
	[ "22120201", 2  ], // Hirudinea Glossiphoniidae Theromyzon tessulatum
	[ "22120301", 4  ], // Hirudinea Glossiphoniidae Hemiclepsis marginata
	[ "22120801", 4  ], // Hirudinea Glossiphoniidae Alboglossiphonia heteroclita
	[ "22120401", 1  ], // Hirudinea Glossiphoniidae Glossiphonia complanata
	[ "22120403", 7  ], // Hirudinea Glossiphoniidae Glossiphonia verrucata
	[ "22120901", 7  ], // Hirudinea Glossiphoniidae Placobdella costata
	[ "22120404", 7  ], // Hirudinea Glossiphoniidae Glossiphonia paludosa
	[ "22120701", 1  ], // Hirudinea Glossiphoniidae Helobdella stagnalis
	[ "22210201", 8  ], // Hirudinea Hirudinidae Hirudo medicinalis
	[ "22220101", 5  ], // Hirudinea Haemopidae Haemopis sanguisuga
	[ "22230102", 5  ], // Hirudinea Erpobdellidae Erpobdella testacea
	[ "22230101", 1  ], // Hirudinea Erpobdellidae Erpobdella octoculata
	[ "22230201", 6  ], // Hirudinea Erpobdellidae Dina lineata
	[ "22230302", 4  ], // Hirudinea Erpobdellidae Trocheta subviridis
	[ "22230301", 5  ], // Hirudinea Erpobdellidae Trocheta bykowskii
	[ "26010101", 3  ], // Araneae Argyroneta aquatica
	[ "27010101", 10  ], // Anostraca Artemia salina
	[ "27020101", 9  ], // Anostraca Chirocephalus diaphanus
	[ "28010101", 10  ], // Notostraca Triopsidae Triops cancriformis
	[ "33010101", 7  ], // Bathynellacea Bathynellidae Bathynella natans
	[ "33010201", 7  ], // Bathynellacea Bathynellidae Antrobathynella stammeri
	[ "35110101", 10  ], // Mysidacea Mysidae Mysis relicta
	[ "35110201", 1  ], // Mysidacea Mysidae Neomysis integer
	[ "36110101", 1  ], // Isopoda Asellidae Asellus aquaticus
	[ "36110201", 7  ], // Isopoda Asellidae Proasellus cavaticus
	[ "36110301", 7  ], // Isopoda Asellidae Caecidotea communis
	[ "36110202", 3  ], // Isopoda Asellidae Proasellus meridianus
	[ "36220101", 2  ], // Isopoda Sphaeromatidae Sphaeroma hookeri
	[ "36220102", 2  ], // Isopoda Sphaeromatidae Sphaeroma rugicauda
	[ "36210101", 2  ], // Isopoda Janiridae Jaera nordmanni
	[ "37110101", 3  ], // Amphipoda Corophiidae Corophium curvispinum
	[ "37110102", 7  ], // Amphipoda Corophiidae Corophium insidiosum
	[ "37110103", 8  ], // Amphipoda Corophiidae Corophium lacustre
	[ "37110104", 2  ], // Amphipoda Corophiidae Corophium multisetosum
	[ "37110105", 3  ], // Amphipoda Corophiidae Corophium volutator
	[ "37130101", 1  ], // Amphipoda Crangonyctidae Crangonyx pseudogracilis
	[ "37130102", 7  ], // Amphipoda Crangonyctidae Crangonyx subterraneus
	[ "37140202", 4  ], // Amphipoda Gammaridae Gammarus duebeni
	[ "37140203", 5  ], // Amphipoda Gammaridae Gammarus lacustris
	[ "37140206", 1  ], // Amphipoda Gammaridae Gammarus pulex
	[ "37140208", 1  ], // Amphipoda Gammaridae Gammarus tigrinus
	[ "37140209", 1  ], // Amphipoda Gammaridae Gammarus zaddachi
	[ "37140101", 7  ], // Amphipoda Gammaridae Echinogammarus berilloni
	[ "37150205", 7  ], // Amphipoda Niphargidae Niphargus glenniei
	[ "37150201", 6  ], // Amphipoda Niphargidae Niphargus aquilex
	[ "37150202", 7  ], // Amphipoda Niphargidae Niphargus fontanus
	[ "37150203", 7  ], // Amphipoda Niphargidae Niphargus kochianus
	[ "37120101", 5  ], // Amphipoda Talitridae Orchestia cavimana
	[ "34110101", 1  ], // Decapoda Palaemonidae Palaemonetes varians
	[ "34110201", 5  ], // Decapoda Palaemonidae Palaemon longirostris
	[ "34310101", 7  ], // Decapoda Astacidae Austropotamobius pallipes
	[ "40110102", 6  ], // Ephemeroptera Siphlonuridae Siphlonurus armatus
	[ "40110103", 4  ], // Ephemeroptera Siphlonuridae Siphlonurus lacustris
	[ "40110101", 6  ], // Ephemeroptera Siphlonuridae Siphlonurus alternatus
	[ "40140101", 5  ], // Ephemeroptera Ameletidae Ameletus inopinatus
	[ "40120102", 6  ], // Ephemeroptera Baetidae Baetis buceratus
	[ "40120104", 4  ], // Ephemeroptera Baetidae Baetis fuscatus
	[ "40120107", 1  ], // Ephemeroptera Baetidae Baetis rhodani
	[ "40120108", 4  ], // Ephemeroptera Baetidae Baetis scambus
	[ "40120111", 3  ], // Ephemeroptera Baetidae Baetis vernus
	[ "40120501", 2  ], // Ephemeroptera Baetidae Alainites muticus
	[ "40120601", 6  ], // Ephemeroptera Baetidae Labiobaetis atrebatinus
	[ "40120701", 5  ], // Ephemeroptera Baetidae Nigrobaetis digitatus
	[ "40120702", 4  ], // Ephemeroptera Baetidae Nigrobaetis niger
	[ "40120201", 4  ], // Ephemeroptera Baetidae Centroptilum luteolum
	[ "40120301", 1  ], // Ephemeroptera Baetidae Cloeon dipterum
	[ "40120302", 2  ], // Ephemeroptera Baetidae Cloeon simile
	[ "40120401", 6  ], // Ephemeroptera Baetidae Procloeon bifidum
	[ "40120402", 5  ], // Ephemeroptera Baetidae Procloeon pennulatum
	[ "40130101", 5  ], // Ephemeroptera Heptageniidae Rhithrogena germanica
	[ "40130102", 2  ], // Ephemeroptera Heptageniidae Rhithrogena semicolorata
	[ "40130601", 7  ], // Ephemeroptera Heptageniidae Kageronia fuscogrisea
	[ "40130502", 2  ], // Ephemeroptera Heptageniidae Electrogena lateralis
	[ "40130203", 10  ], // Ephemeroptera Heptageniidae Heptagenia longicauda
	[ "40130204", 4  ], // Ephemeroptera Heptageniidae Heptagenia sulphurea
	[ "40130401", 2  ], // Ephemeroptera Heptageniidae Ecdyonurus dispar
	[ "40130402", 5  ], // Ephemeroptera Heptageniidae Ecdyonurus insignis
	[ "40130403", 2  ], // Ephemeroptera Heptageniidae Ecdyonurus torrentis
	[ "40130404", 2  ], // Ephemeroptera Heptageniidae Ecdyonurus venosus
	[ "40150101", 10  ], // Ephemeroptera Arthropleidae Arthroplea congener
	[ "40210101", 3  ], // Ephemeroptera Leptophlebiidae Leptophlebia marginata
	[ "40210102", 3  ], // Ephemeroptera Leptophlebiidae Leptophlebia vespertina
	[ "40210201", 3  ], // Ephemeroptera Leptophlebiidae Paraleptophlebia cincta
	[ "40210202", 2  ], // Ephemeroptera Leptophlebiidae Paraleptophlebia submarginata
	[ "40210203", 8  ], // Ephemeroptera Leptophlebiidae Paraleptophlebia werneri
	[ "40210301", 2  ], // Ephemeroptera Leptophlebiidae Habrophlebia fusca
	[ "40410102", 6  ], // Ephemeroptera Ephemerellidae Ephemerella notata
	[ "40410201", 1  ], // Ephemeroptera Ephemerellidae Serratella ignita
	[ "40310101", 9  ], // Ephemeroptera Potamanthidae Potamanthus luteus
	[ "40320101", 1  ], // Ephemeroptera Ephemeridae Ephemera danica
	[ "40320102", 9  ], // Ephemeroptera Ephemeridae Ephemera lineata
	[ "40320103", 4  ], // Ephemeroptera Ephemeridae Ephemera vulgata
	[ "40510101", 6  ], // Ephemeroptera Caenidae Brachycercus harrisellus
	[ "40510206", 7  ], // Ephemeroptera Caenidae Caenis beskidensis
	[ "40510201", 1  ], // Ephemeroptera Caenidae Caenis horaria
	[ "40510202", 1  ], // Ephemeroptera Caenidae Caenis luctuosa
	[ "40510203", 4  ], // Ephemeroptera Caenidae Caenis macrura
	[ "40510207", 6  ], // Ephemeroptera Caenidae Caenis pseudorivulorum
	[ "41110101", 4  ], // Plecoptera Taeniopterygidae Taeniopteryx nebulosa
	[ "41110201", 7  ], // Plecoptera Taeniopterygidae Rhabdiopteryx acuminata
	[ "41110301", 7  ], // Plecoptera Taeniopterygidae Brachyptera putata
	[ "41110302", 3  ], // Plecoptera Taeniopterygidae Brachyptera risi
	[ "41120103", 5  ], // Plecoptera Nemouridae Protonemura praecox
	[ "41120102", 6  ], // Plecoptera Nemouridae Protonemura montana
	[ "41120101", 6  ], // Plecoptera Nemouridae Protonemura meyeri
	[ "41120201", 6  ], // Plecoptera Nemouridae Amphinemura standfussi
	[ "41120202", 2  ], // Plecoptera Nemouridae Amphinemura sulcicollis
	[ "41120301", 2  ], // Plecoptera Nemouridae Nemurella pictetii
	[ "41120403", 1  ], // Plecoptera Nemouridae Nemoura cinerea
	[ "41120404", 7  ], // Plecoptera Nemouridae Nemoura dubitans
	[ "41120401", 4  ], // Plecoptera Nemouridae Nemoura avicularis
	[ "41120402", 2  ], // Plecoptera Nemouridae Nemoura cambrica
	[ "41120405", 5  ], // Plecoptera Nemouridae Nemoura erratica
	[ "41130102", 4  ], // Plecoptera Leuctridae Leuctra geniculata
	[ "41130104", 1  ], // Plecoptera Leuctridae Leuctra inermis
	[ "41130103", 3  ], // Plecoptera Leuctridae Leuctra hippopus
	[ "41130106", 4  ], // Plecoptera Leuctridae Leuctra nigra
	[ "41130101", 1  ], // Plecoptera Leuctridae Leuctra fusca
	[ "41130105", 6  ], // Plecoptera Leuctridae Leuctra moselyi
	[ "41140102", 6  ], // Plecoptera Capniidae Capnia bifrons
	[ "41140101", 5  ], // Plecoptera Capniidae Capnia atra
	[ "41140103", 7  ], // Plecoptera Capniidae Capnia vidua
	[ "41210101", 9  ], // Plecoptera Perlodidae Isogenus nubecula
	[ "41210201", 3  ], // Plecoptera Perlodidae Perlodes microcephalus
	[ "41210301", 3  ], // Plecoptera Perlodidae Diura bicaudata
	[ "41210401", 2  ], // Plecoptera Perlodidae Isoperla grammatica
	[ "41210402", 10  ], // Plecoptera Perlodidae Isoperla obscura
	[ "41220101", 4  ], // Plecoptera Perlidae Dinocras cephalotes
	[ "41220201", 3  ], // Plecoptera Perlidae Perla bipunctata
	[ "41230301", 1  ], // Plecoptera Chloroperlidae Siphonoperla torrentium
	[ "41230103", 4  ], // Plecoptera Chloroperlidae Chloroperla tripunctata
	[ "41230201", 10  ], // Plecoptera Chloroperlidae Xanthoperla apicalis
	[ "42110101", 5  ], // Odonata Platycnemididae Platycnemis pennipes
	[ "42120101", 3  ], // Odonata Coenagrionidae Pyrrhosoma nymphula
	[ "42120201", 1  ], // Odonata Coenagrionidae Ischnura elegans
	[ "42120202", 7  ], // Odonata Coenagrionidae Ischnura pumilio
	[ "42120301", 2  ], // Odonata Coenagrionidae Enallagma cyathigerum
	[ "42120401", 10  ], // Odonata Coenagrionidae Coenagrion armatum
	[ "42120402", 9  ], // Odonata Coenagrionidae Coenagrion hastulatum
	[ "42120404", 8  ], // Odonata Coenagrionidae Coenagrion mercuriale
	[ "42120405", 2  ], // Odonata Coenagrionidae Coenagrion puella
	[ "42120406", 5  ], // Odonata Coenagrionidae Coenagrion pulchellum
	[ "42120407", 10  ], // Odonata Coenagrionidae Coenagrion scitulum
	[ "42120501", 6  ], // Odonata Coenagrionidae Ceriagrion tenellum
	[ "42120601", 4  ], // Odonata Coenagrionidae Erythromma najas
	[ "42130101", 9  ], // Odonata Lestidae Lestes dryas
	[ "42130102", 4  ], // Odonata Lestidae Lestes sponsa
	[ "42140101", 2  ], // Odonata Calopterygidae Calopteryx splendens
	[ "42140102", 5  ], // Odonata Calopterygidae Calopteryx virgo
	[ "42210101", 7  ], // Odonata Gomphidae Gomphus vulgatissimus
	[ "42220101", 4  ], // Odonata Cordulegastridae Cordulegaster boltonii
	[ "42230101", 5  ], // Odonata Aeshnidae Brachytron pratense
	[ "42230201", 7  ], // Odonata Aeshnidae Aeshna caerulea
	[ "42230202", 2  ], // Odonata Aeshnidae Aeshna cyanea
	[ "42230203", 2  ], // Odonata Aeshnidae Aeshna grandis
	[ "42230204", 10  ], // Odonata Aeshnidae Aeshna isosceles
	[ "42230205", 4  ], // Odonata Aeshnidae Aeshna juncea
	[ "42230206", 3  ], // Odonata Aeshnidae Aeshna mixta
	[ "42230301", 5  ], // Odonata Aeshnidae Anax imperator
	[ "42240101", 6  ], // Odonata Corduliidae Cordulia aenea
	[ "42240201", 8  ], // Odonata Corduliidae Somatochlora arctica
	[ "42240202", 7  ], // Odonata Corduliidae Somatochlora metallica
	[ "42240301", 10  ], // Odonata Corduliidae Oxygastra curtisii
	[ "42250101", 5  ], // Odonata Libellulidae Orthetrum cancellatum
	[ "42250102", 5  ], // Odonata Libellulidae Orthetrum coerulescens
	[ "42250201", 5  ], // Odonata Libellulidae Libellula depressa
	[ "42250202", 8  ], // Odonata Libellulidae Libellula fulva
	[ "42250203", 4  ], // Odonata Libellulidae Libellula quadrimaculata
	[ "42250301", 7  ], // Odonata Libellulidae Sympetrum flaveolum
	[ "42250302", 7  ], // Odonata Libellulidae Sympetrum fonscolombii
	[ "42250303", 7  ], // Odonata Libellulidae Sympetrum nigrescens
	[ "42250304", 5  ], // Odonata Libellulidae Sympetrum sanguineum
	[ "42250305", 5  ], // Odonata Libellulidae Sympetrum danae
	[ "42250306", 1  ], // Odonata Libellulidae Sympetrum striolatum
	[ "42250307", 7  ], // Odonata Libellulidae Sympetrum vulgatum
	[ "42250401", 7  ], // Odonata Libellulidae Leucorrhinia dubia
	[ "43110101", 6  ], // Hemiptera Mesoveliidae Mesovelia furcata
	[ "43120111", 7  ], // Hemiptera Hebridae Hebrus (Hebrus) pusillus
	[ "43120121", 5  ], // Hemiptera Hebridae Hebrus (Hebrusella) ruficeps
	[ "43210101", 8  ], // Hemiptera Hydrometridae Hydrometra gracilenta
	[ "43210102", 2  ], // Hemiptera Hydrometridae Hydrometra stagnorum
	[ "43220111", 2  ], // Hemiptera Veliidae Velia (Plesiovelia) caprai
	[ "43220112", 5  ], // Hemiptera Veliidae Velia (Plesiovelia) saulii
	[ "43220201", 7  ], // Hemiptera Veliidae Microvelia pygmaea
	[ "43220202", 5  ], // Hemiptera Veliidae Microvelia reticulata
	[ "43220203", 8  ], // Hemiptera Veliidae Microvelia buenoi
	[ "43230112", 4  ], // Hemiptera Gerridae Gerris costae
	[ "43230115", 5  ], // Hemiptera Gerridae Gerris lateralis
	[ "43230117", 4  ], // Hemiptera Gerridae Gerris thoracicus
	[ "43230113", 4  ], // Hemiptera Gerridae Gerris gibbifer
	[ "43230111", 5  ], // Hemiptera Gerridae Gerris argentatus
	[ "43230114", 1  ], // Hemiptera Gerridae Gerris lacustris
	[ "43230116", 2  ], // Hemiptera Gerridae Gerris odontogaster
	[ "43230301", 5  ], // Hemiptera Gerridae Aquarius najas
	[ "43230302", 7  ], // Hemiptera Gerridae Aquarius paludum
	[ "43230201", 6  ], // Hemiptera Gerridae Limnoporus rufoscutellatus
	[ "43310101", 3  ], // Hemiptera Nepidae Nepa cinerea
	[ "43310201", 5  ], // Hemiptera Nepidae Ranatra linearis
	[ "43410101", 4  ], // Hemiptera Naucoridae Ilyocoris cimicoides
	[ "43420101", 5  ], // Hemiptera Aphelocheiridae Aphelocheirus aestivalis
	[ "43510101", 1  ], // Hemiptera Notonectidae Notonecta glauca
	[ "43510104", 5  ], // Hemiptera Notonectidae Notonecta viridis
	[ "43510103", 5  ], // Hemiptera Notonectidae Notonecta obliqua
	[ "43510102", 5  ], // Hemiptera Notonectidae Notonecta maculata
	[ "43520101", 4  ], // Hemiptera Pleidae Plea minutissima
	[ "43610111", 6  ], // Hemiptera Corixidae Micronecta (Dichaetonecta) scholtzi
	[ "43610121", 8  ], // Hemiptera Corixidae Micronecta (Micronecta) minutissima
	[ "43610122", 4  ], // Hemiptera Corixidae Micronecta (Micronecta) poweri
	[ "43610301", 4  ], // Hemiptera Corixidae Cymatia bonsdorffii
	[ "43610302", 4  ], // Hemiptera Corixidae Cymatia coleoptrata
	[ "43610401", 5  ], // Hemiptera Corixidae Glaenocorisa propinqua
	[ "43610501", 3  ], // Hemiptera Corixidae Callicorixa praeusta
	[ "43610502", 5  ], // Hemiptera Corixidae Callicorixa wollastoni
	[ "43610602", 5  ], // Hemiptera Corixidae Corixa dentipes
	[ "43610604", 1  ], // Hemiptera Corixidae Corixa punctata
	[ "43610601", 6  ], // Hemiptera Corixidae Corixa affinis
	[ "43610603", 5  ], // Hemiptera Corixidae Corixa panzeri
	[ "43610605", 7  ], // Hemiptera Corixidae Corixa iberica
	[ "43610702", 4  ], // Hemiptera Corixidae Hesperocorixa linnaei
	[ "43610704", 2  ], // Hemiptera Corixidae Hesperocorixa sahlbergi
	[ "43610701", 4  ], // Hemiptera Corixidae Hesperocorixa castanea
	[ "43610703", 6  ], // Hemiptera Corixidae Hesperocorixa moesta
	[ "43610801", 6  ], // Hemiptera Corixidae Arctocorisa carinata
	[ "43610802", 5  ], // Hemiptera Corixidae Arctocorisa germari
	[ "43610911", 1  ], // Hemiptera Corixidae Sigara (Sigara) dorsalis
	[ "43610912", 7  ], // Hemiptera Corixidae Sigara (Sigara) striata
	[ "43610921", 3  ], // Hemiptera Corixidae Sigara (Subsigara) distincta
	[ "43610922", 1  ], // Hemiptera Corixidae Sigara (Subsigara) falleni
	[ "43610923", 6  ], // Hemiptera Corixidae Sigara (Subsigara) fallenoidea
	[ "43610924", 3  ], // Hemiptera Corixidae Sigara (Subsigara) fossarum
	[ "43610925", 5  ], // Hemiptera Corixidae Sigara (Subsigara) scotti
	[ "43610941", 2  ], // Hemiptera Corixidae Sigara (Vermicorixa) lateralis
	[ "43610951", 2  ], // Hemiptera Corixidae Sigara (Pseudovermicorixa) nigrolineata
	[ "43611101", 5  ], // Hemiptera Corixinae Paracorixa concinna
	[ "43610971", 5  ], // Hemiptera Corixidae Sigara (Retrocorixa) limitata
	[ "43610972", 5  ], // Hemiptera Corixidae Sigara (Retrocorixa) semistriata
	[ "43610973", 4  ], // Hemiptera Corixidae Sigara (Retrocorixa) venusta
	[ "43610981", 6  ], // Hemiptera Corixidae Sigara (Halicorixa) selecta
	[ "43610982", 5  ], // Hemiptera Corixidae Sigara (Halicorixa) stagnalis
	[ "45110101", 3  ], // Coleoptera Haliplidae Brychius elevatus
	[ "45110201", 7  ], // Coleoptera Haliplidae Peltodytes caesus
	[ "45110341", 7  ], // Coleoptera Haliplidae Haliplus (Haliplinus) apicalis
	[ "45110321", 2  ], // Coleoptera Haliplidae Haliplus (Haliplus) confinis
	[ "45110351", 4  ], // Coleoptera Haliplidae Haliplus (Liaphlus) flavicollis
	[ "45110342", 2  ], // Coleoptera Haliplidae Haliplus (Haliplinus) fluviatilis
	[ "45110352", 4  ], // Coleoptera Haliplidae Haliplus (Liaphlus) fulvus
	[ "45110343", 10  ], // Coleoptera Haliplidae Haliplus (Haliplinus) furcatus
	[ "45110344", 7  ], // Coleoptera Haliplidae Haliplus (Haliplinus) heydeni
	[ "45110345", 4  ], // Coleoptera Haliplidae Haliplus (Haliplinus) immaculatus
	[ "45110353", 7  ], // Coleoptera Haliplidae Haliplus (Liaphlus) laminatus
	[ "45110331", 1  ], // Coleoptera Haliplidae Haliplus (Neohaliplus) lineatocollis
	[ "45110346", 4  ], // Coleoptera Haliplidae Haliplus (Haliplinus) lineolatus
	[ "45110354", 8  ], // Coleoptera Haliplidae Haliplus (Liaphlus) mucronatus
	[ "45110322", 4  ], // Coleoptera Haliplidae Haliplus (Haliplus) obliquus
	[ "45110347", 1  ], // Coleoptera Haliplidae Haliplus (Haliplinus) ruficollis
	[ "45110355", 8  ], // Coleoptera Haliplidae Haliplus (Liaphlus) variegatus
	[ "45110323", 8  ], // Coleoptera Haliplidae Haliplus (Haliplus) varius
	[ "45110348", 3  ], // Coleoptera Haliplidae Haliplus (Haliplinus) sibiricus
	[ "45120101", 4  ], // Coleoptera Paelobiidae Hygrobia hermanni
	[ "45130101", 2  ], // Coleoptera Noteridae Noterus clavicornis
	[ "45130102", 7  ], // Coleoptera Noteridae Noterus crassicornis
	[ "45140101", 1  ], // Coleoptera Dytiscidae Laccophilus hyalinus
	[ "45140102", 2  ], // Coleoptera Dytiscidae Laccophilus minutus
	[ "45140103", 9  ], // Coleoptera Dytiscidae Laccophilus poecilus
	[ "45140201", 8  ], // Coleoptera Dytiscidae Hydrovatus clypealis
	[ "45140301", 2  ], // Coleoptera Dytiscidae Hyphydrus ovatus
	[ "45140401", 7  ], // Coleoptera Dytiscidae Hydroglyphus geminus
	[ "45140501", 8  ], // Coleoptera Dytiscidae Bidessus minutissimus
	[ "45140502", 10  ], // Coleoptera Dytiscidae Bidessus unistriatus
	[ "45140611", 7  ], // Coleoptera Dytiscidae Hygrotus (Hygrotus) decoratus
	[ "45140612", 2  ], // Coleoptera Dytiscidae Hygrotus (Hygrotus) inaequalis
	[ "45140613", 7  ], // Coleoptera Dytiscidae Hygrotus (Hygrotus) quinquelineatus
	[ "45140614", 5  ], // Coleoptera Dytiscidae Hygrotus (Hygrotus) versicolor
	[ "45140621", 7  ], // Coleoptera Dytiscidae Hygrotus (Coelambus) confluens
	[ "45140622", 5  ], // Coleoptera Dytiscidae Hygrotus (Coelambus) impressopunctatus
	[ "45140623", 8  ], // Coleoptera Dytiscidae Hygrotus (Coelambus) nigrolineatus
	[ "45140624", 7  ], // Coleoptera Dytiscidae Hygrotus (Coelambus) novemlineatus
	[ "45140625", 7  ], // Coleoptera Dytiscidae Hygrotus (Coelambus) parallellogrammus
	[ "45140801", 2  ], // Coleoptera Dytiscidae Hydroporus angustatus
	[ "45140803", 3  ], // Coleoptera Dytiscidae Hydroporus discretus
	[ "45140805", 8  ], // Coleoptera Dytiscidae Hydroporus elongatulus
	[ "45140806", 3  ], // Coleoptera Dytiscidae Hydroporus erythrocephalus
	[ "45140807", 7  ], // Coleoptera Dytiscidae Hydroporus ferrugineus
	[ "45140809", 8  ], // Coleoptera Dytiscidae Hydroporus glabriusculus
	[ "45140811", 2  ], // Coleoptera Dytiscidae Hydroporus gyllenhalii
	[ "45140812", 3  ], // Coleoptera Dytiscidae Hydroporus incognitus
	[ "45140813", 7  ], // Coleoptera Dytiscidae Hydroporus longicornis
	[ "45140814", 5  ], // Coleoptera Dytiscidae Hydroporus longulus
	[ "45140815", 7  ], // Coleoptera Dytiscidae Hydroporus marginatus
	[ "45140816", 5  ], // Coleoptera Dytiscidae Hydroporus melanarius
	[ "45140817", 4  ], // Coleoptera Dytiscidae Hydroporus memnonius
	[ "45140818", 6  ], // Coleoptera Dytiscidae Hydroporus morio
	[ "45140819", 7  ], // Coleoptera Dytiscidae Hydroporus neglectus
	[ "45140821", 3  ], // Coleoptera Dytiscidae Hydroporus nigrita
	[ "45140822", 5  ], // Coleoptera Dytiscidae Hydroporus obscurus
	[ "45140823", 7  ], // Coleoptera Dytiscidae Hydroporus obsoletus
	[ "45140824", 1  ], // Coleoptera Dytiscidae Hydroporus palustris
	[ "45140825", 2  ], // Coleoptera Dytiscidae Hydroporus planus
	[ "45140826", 2  ], // Coleoptera Dytiscidae Hydroporus pubescens
	[ "45140827", 9  ], // Coleoptera Dytiscidae Hydroporus rufifrons
	[ "45140828", 9  ], // Coleoptera Dytiscidae Hydroporus scalesianus
	[ "45140829", 2  ], // Coleoptera Dytiscidae Hydroporus striola
	[ "45140831", 2  ], // Coleoptera Dytiscidae Hydroporus tessellatus
	[ "45140832", 5  ], // Coleoptera Dytiscidae Hydroporus tristis
	[ "45140833", 4  ], // Coleoptera Dytiscidae Hydroporus umbrosus
	[ "45142901", 5  ], // Coleoptera Dytiscidae Suphrodytes dorsalis
	[ "45140901", 7  ], // Coleoptera Dytiscidae Stictonectes lepidus
	[ "45141001", 8  ], // Coleoptera Dytiscidae Graptodytes bilineatus
	[ "45141002", 9  ], // Coleoptera Dytiscidae Graptodytes flavipes
	[ "45141003", 7  ], // Coleoptera Dytiscidae Graptodytes granularis
	[ "45141004", 3  ], // Coleoptera Dytiscidae Graptodytes pictus
	[ "45141101", 6  ], // Coleoptera Dytiscidae Porhydrus lineatus
	[ "45141201", 7  ], // Coleoptera Dytiscidae Deronectes latus
	[ "45141311", 5  ], // Coleoptera Dytiscidae Nebrioporus (Nebrioporus) assimilis
	[ "45141312", 7  ], // Coleoptera Dytiscidae Nebrioporus (Nebrioporus) depressus
	[ "45141402", 7  ], // Coleoptera Dytiscidae Stictotarsus multilineatus
	[ "45141313", 1  ], // Coleoptera Dytiscidae Nebrioporus (Nebrioporus) elegans
	[ "45141401", 2  ], // Coleoptera Dytiscidae Stictotarsus duodecimpustulatus
	[ "45141504", 8  ], // Coleoptera Dytiscidae Oreodytes alpinus
	[ "45141501", 6  ], // Coleoptera Dytiscidae Oreodytes davisii
	[ "45141502", 2  ], // Coleoptera Dytiscidae Oreodytes sanmarkii
	[ "45141503", 3  ], // Coleoptera Dytiscidae Oreodytes septentrionalis
	[ "45141601", 7  ], // Coleoptera Dytiscidae Scarodytes halensis
	[ "45141701", 7  ], // Coleoptera Dytiscidae Laccornis oblongus
	[ "45141901", 2  ], // Coleoptera Dytiscidae Platambus maculatus
	[ "45142051", 4  ], // Coleoptera Dytiscidae Agabus (Gaurodytes) affinis
	[ "45142031", 6  ], // Coleoptera Dytiscidae Agabus (Acatodes) arcticus
	[ "45142052", 7  ], // Coleoptera Dytiscidae Agabus (Gaurodytes) biguttatus
	[ "45142053", 1  ], // Coleoptera Dytiscidae Agabus (Gaurodytes) bipustulatus
	[ "45142054", 9  ], // Coleoptera Dytiscidae Agabus (Gaurodytes) brunneus
	[ "45142108", 7  ], // Coleoptera Dytiscidae Ilybius chalconatus
	[ "45142032", 5  ], // Coleoptera Dytiscidae Agabus (Acatodes) congener
	[ "45142055", 7  ], // Coleoptera Dytiscidae Agabus (Gaurodytes) conspersus
	[ "45142056", 1  ], // Coleoptera Dytiscidae Agabus (Gaurodytes) didymus
	[ "45142057", 5  ], // Coleoptera Dytiscidae Agabus (Gaurodytes) guttatus
	[ "45142041", 7  ], // Coleoptera Dytiscidae Agabus (Agabus) labiatus
	[ "45142058", 7  ], // Coleoptera Dytiscidae Agabus (Gaurodytes) melanarius
	[ "45142109", 5  ], // Coleoptera Dytiscidae Ilybius montanus
	[ "45142059", 1  ], // Coleoptera Dytiscidae Agabus (Gaurodytes) nebulosus
	[ "4514205A", 1  ], // Coleoptera Dytiscidae Agabus (Gaurodytes) paludosus
	[ "4514205B", 9  ], // Coleoptera Dytiscidae Agabus (Gaurodytes) striolatus
	[ "45142033", 1  ], // Coleoptera Dytiscidae Agabus (Acatodes) sturmii
	[ "45142042", 7  ], // Coleoptera Dytiscidae Agabus (Agabus) uliginosus
	[ "45142043", 9  ], // Coleoptera Dytiscidae Agabus (Agabus) undulatus
	[ "4514205C", 7  ], // Coleoptera Dytiscidae Agabus (Gaurodytes) unguicularis
	[ "45142101", 7  ], // Coleoptera Dytiscidae Ilybius aenescens
	[ "45142102", 3  ], // Coleoptera Dytiscidae Ilybius ater
	[ "45142103", 7  ], // Coleoptera Dytiscidae Ilybius fenestratus
	[ "45142104", 1  ], // Coleoptera Dytiscidae Ilybius fuliginosus
	[ "45142105", 7  ], // Coleoptera Dytiscidae Ilybius guttiger
	[ "45142106", 5  ], // Coleoptera Dytiscidae Ilybius quadriguttatus
	[ "45142107", 7  ], // Coleoptera Dytiscidae Ilybius subaeneus
	[ "45142221", 6  ], // Coleoptera Dytiscidae Rhantus (Rhantus) bistriatus
	[ "45142222", 5  ], // Coleoptera Dytiscidae Rhantus (Rhantus) exsoletus
	[ "45142223", 7  ], // Coleoptera Dytiscidae Rhantus (Rhantus) frontalis
	[ "45142211", 7  ], // Coleoptera Dytiscidae Rhantus (Nartus) grapii
	[ "45142224", 7  ], // Coleoptera Dytiscidae Rhantus (Rhantus) suturalis
	[ "45142301", 1  ], // Coleoptera Dytiscidae Colymbetes fuscus
	[ "45142402", 7  ], // Coleoptera Dytiscidae Hydaticus seminiger
	[ "45142403", 7  ], // Coleoptera Dytiscidae Hydaticus transversalis
	[ "45142601", 7  ], // Coleoptera Dytiscidae Acilius canaliculatus
	[ "45142602", 5  ], // Coleoptera Dytiscidae Acilius sulcatus
	[ "45142501", 10  ], // Coleoptera Dytiscidae Graphoderus bilineatus
	[ "45142502", 8  ], // Coleoptera Dytiscidae Graphoderus cinereus
	[ "45142503", 10  ], // Coleoptera Dytiscidae Graphoderus zonatus
	[ "45142701", 7  ], // Coleoptera Dytiscidae Dytiscus circumcinctus
	[ "45142702", 7  ], // Coleoptera Dytiscidae Dytiscus circumflexus
	[ "45142703", 7  ], // Coleoptera Dytiscidae Dytiscus dimidiatus
	[ "45142704", 7  ], // Coleoptera Dytiscidae Dytiscus lapponicus
	[ "45142705", 1  ], // Coleoptera Dytiscidae Dytiscus marginalis
	[ "45142706", 4  ], // Coleoptera Dytiscidae Dytiscus semisulcatus
	[ "45150201", 7  ], // Coleoptera Gyrinidae Gyrinus aeratus
	[ "45150203", 3  ], // Coleoptera Gyrinidae Gyrinus caspius
	[ "45150204", 7  ], // Coleoptera Gyrinidae Gyrinus distinctus
	[ "45150205", 2  ], // Coleoptera Gyrinidae Gyrinus marinus
	[ "45150206", 7  ], // Coleoptera Gyrinidae Gyrinus minutus
	[ "45150208", 7  ], // Coleoptera Gyrinidae Gyrinus opacus
	[ "45150202", 7  ], // Coleoptera Gyrinidae Gyrinus paykulli
	[ "45150209", 1  ], // Coleoptera Gyrinidae Gyrinus substriatus
	[ "45150211", 7  ], // Coleoptera Gyrinidae Gyrinus suffriani
	[ "45150212", 7  ], // Coleoptera Gyrinidae Gyrinus urinator
	[ "45150401", 3  ], // Coleoptera Gyrinidae Orectochilus villosus
	[ "45340101", 7  ], // Coleoptera Georissidae Georissus crenulatus
	[ "45370101", 10  ], // Coleoptera Spercheidae Spercheus emarginatus
	[ "45360101", 7  ], // Coleoptera Hydrochidae Hydrochus angustatus
	[ "45360102", 8  ], // Coleoptera Hydrochidae Hydrochus brevis
	[ "45360103", 8  ], // Coleoptera Hydrochidae Hydrochus crenatus
	[ "45360104", 8  ], // Coleoptera Hydrochidae Hydrochus elongatus
	[ "45360105", 8  ], // Coleoptera Hydrochidae Hydrochus ignicollis
	[ "45360107", 8  ], // Coleoptera Hydrochidae Hydrochus megaphallus
	[ "45360106", 8  ], // Coleoptera Hydrochidae Hydrochus nitidicollis
	[ "45330141", 1  ], // Coleoptera Helophoridae Helophorus (Megahelophorus) aequalis
	[ "45330131", 7  ], // Coleoptera Helophoridae Helophorus (Trichohelophorus) alternans
	[ "45330151", 7  ], // Coleoptera Helophoridae Helophorus (Atracthelophorus) arvernicus
	[ "45330152", 1  ], // Coleoptera Helophoridae Helophorus (Atracthelophorus) brevipalpis
	[ "45330161", 8  ], // Coleoptera Helophoridae Helophorus (Helophorus) dorsalis
	[ "45330162", 2  ], // Coleoptera Helophoridae Helophorus (Helophorus) flavipes
	[ "45330163", 7  ], // Coleoptera Helophoridae Helophorus (Helophorus) fulgidicollis
	[ "45330142", 2  ], // Coleoptera Helophoridae Helophorus (Megahelophorus) grandis
	[ "45330164", 5  ], // Coleoptera Helophoridae Helophorus (Helophorus) granularis
	[ "45330165", 7  ], // Coleoptera Helophoridae Helophorus (Helophorus) griseus
	[ "45330166", 9  ], // Coleoptera Helophoridae Helophorus (Helophorus) laticollis
	[ "45330167", 8  ], // Coleoptera Helophoridae Helophorus (Helophorus) longitarsis
	[ "45330168", 3  ], // Coleoptera Helophoridae Helophorus (Helophorus) minutus
	[ "45330169", 7  ], // Coleoptera Helophoridae Helophorus (Helophorus) nanus
	[ "45330111", 4  ], // Coleoptera Helophoridae Helophorus (Empleurus) nubilus
	[ "4533016A", 3  ], // Coleoptera Helophoridae Helophorus (Helophorus) obscurus
	[ "4533016B", 7  ], // Coleoptera Helophoridae Helophorus (Helophorus) strigifrons
	[ "45330121", 8  ], // Coleoptera Helophoridae Helophorus (Cyphelophorus) tuberculatus
	[ "45353001", 6  ], // Coleoptera Hydrophilidae Coelostoma orbiculare
	[ "45353143", 8  ], // Coleoptera Hydrophilidae Cercyon (Cercyon) bifenestratus
	[ "45353144", 7  ], // Coleoptera Hydrophilidae Cercyon (Cercyon) convexiusculus
	[ "45353145", 7  ], // Coleoptera Hydrophilidae Cercyon (Cercyon) depressus
	[ "45353146", 8  ], // Coleoptera Hydrophilidae Cercyon (Cercyon) granarius
	[ "45353148", 1  ], // Coleoptera Hydrophilidae Cercyon (Cercyon) impressus
	[ "4535314A", 3  ], // Coleoptera Hydrophilidae Cercyon (Cercyon) lateralis
	[ "4535314B", 3  ], // Coleoptera Hydrophilidae Cercyon (Cercyon) littoralis
	[ "4535314E", 7  ], // Coleoptera Hydrophilidae Cercyon (Cercyon) obsoletus
	[ "4535314C", 3  ], // Coleoptera Hydrophilidae Cercyon (Cercyon) marinus
	[ "4535314D", 2  ], // Coleoptera Hydrophilidae Cercyon (Cercyon) melanocephalus
	[ "4535314H", 7  ], // Coleoptera Hydrophilidae Cercyon (Cercyon) sternalis
	[ "4535314K", 7  ], // Coleoptera Hydrophilidae Cercyon (Cercyon) tristis
	[ "45353151", 7  ], // Coleoptera Hydrophilidae Cercyon (Dicyrtocercyon) ustulatus
	[ "45351001", 10  ], // Coleoptera Hydrophilidae Paracymus aeneus
	[ "45351002", 7  ], // Coleoptera Hydrophilidae Paracymus scutellaris
	[ "45351101", 1  ], // Coleoptera Hydrophilidae Hydrobius fuscipes
	[ "45351201", 7  ], // Coleoptera Hydrophilidae Limnoxenus niger
	[ "45351301", 7  ], // Coleoptera Hydrophilidae Anacaena bipustulata
	[ "45351302", 1  ], // Coleoptera Hydrophilidae Anacaena globulus
	[ "45351303", 1  ], // Coleoptera Hydrophilidae Anacaena limbata
	[ "45351304", 3  ], // Coleoptera Hydrophilidae Anacaena lutescens
	[ "45351421", 7  ], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) atratus
	[ "45351422", 7  ], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) ytenensis
	[ "45351411", 5  ], // Coleoptera Hydrophilidae Laccobius (Laccobius) colon
	[ "45351423", 2  ], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) bipunctatus
	[ "45351412", 2  ], // Coleoptera Hydrophilidae Laccobius (Laccobius) minutus
	[ "45351425", 8  ], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) simulatrix
	[ "45351426", 7  ], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) sinuatus
	[ "45351427", 2  ], // Coleoptera Hydrophilidae Laccobius (Dimorpholaccobius) striatulus
	[ "45351601", 7  ], // Coleoptera Hydrophilidae Helochares lividus
	[ "45351602", 8  ], // Coleoptera Hydrophilidae Helochares obscurus
	[ "45351603", 7  ], // Coleoptera Hydrophilidae Helochares punctatus
	[ "45351701", 7  ], // Coleoptera Hydrophilidae Enochrus affinis
	[ "45351702", 7  ], // Coleoptera Hydrophilidae Enochrus bicolor
	[ "45351703", 7  ], // Coleoptera Hydrophilidae Enochrus coarctatus
	[ "45351709", 5  ], // Coleoptera Hydrophilidae Enochrus fuscipennis
	[ "45351711", 7  ], // Coleoptera Hydrophilidae Enochrus halophilus
	[ "45351712", 8  ], // Coleoptera Hydrophilidae Enochrus nigritus
	[ "45351705", 7  ], // Coleoptera Hydrophilidae Enochrus melanocephalus
	[ "45351706", 7  ], // Coleoptera Hydrophilidae Enochrus ochropterus
	[ "45351707", 7  ], // Coleoptera Hydrophilidae Enochrus quadripunctatus
	[ "45351708", 3  ], // Coleoptera Hydrophilidae Enochrus testaceus
	[ "45352001", 5  ], // Coleoptera Hydrophilidae Cymbiodyta marginellus
	[ "45352101", 7  ], // Coleoptera Hydrophilidae Chaetarthria seminulum
	[ "45352201", 10  ], // Coleoptera Hydrophilidae Hydrochara caraboides
	[ "45352301", 8  ], // Coleoptera Hydrophilidae Hydrophilus piceus
	[ "45352411", 7  ], // Coleoptera Hydrophilidae Berosus (Berosus) affinis
	[ "45352412", 7  ], // Coleoptera Hydrophilidae Berosus (Berosus) luridus
	[ "45352413", 7  ], // Coleoptera Hydrophilidae Berosus (Berosus) signaticollis
	[ "45352421", 8  ], // Coleoptera Hydrophilidae Berosus (Enoplurus) fulvus
	[ "45410131", 10  ], // Coleoptera Hydraenidae Ochthebius (Homalochthebius) aeneus
	[ "45410121", 7  ], // Coleoptera Hydraenidae Ochthebius (Asiobates) auriculatus
	[ "45410122", 7  ], // Coleoptera Hydraenidae Ochthebius (Asiobates) bicolon
	[ "45410123", 3  ], // Coleoptera Hydraenidae Ochthebius (Asiobates) dilatatus
	[ "45410501", 7  ], // Coleoptera Hydraenidae Enicocerus exsculptus
	[ "45410151", 9  ], // Coleoptera Hydraenidae Ochthebius (Ochthebius) lenensis
	[ "45410152", 7  ], // Coleoptera Hydraenidae Ochthebius (Ochthebius) marinus
	[ "45410132", 1  ], // Coleoptera Hydraenidae Ochthebius (Homalochthebius) minimus
	[ "45410141", 7  ], // Coleoptera Hydraenidae Ochthebius (Hymenodes) nanus
	[ "45410142", 8  ], // Coleoptera Hydraenidae Ochthebius (Hymenodes) poweri
	[ "45410143", 7  ], // Coleoptera Hydraenidae Ochthebius (Hymenodes) punctatus
	[ "45410153", 7  ], // Coleoptera Hydraenidae Ochthebius (Ochthebius) pusillus
	[ "45410154", 7  ], // Coleoptera Hydraenidae Ochthebius (Ochthebius) viridis
	[ "45410201", 5  ], // Coleoptera Hydraenidae Hydraena britteni
	[ "45410202", 1  ], // Coleoptera Hydraenidae Hydraena gracilis
	[ "45410203", 7  ], // Coleoptera Hydraenidae Hydraena flavipes
	[ "45410204", 7  ], // Coleoptera Hydraenidae Hydraena nigrita
	[ "45410205", 9  ], // Coleoptera Hydraenidae Hydraena palustris
	[ "45410206", 7  ], // Coleoptera Hydraenidae Hydraena pulchella
	[ "45410207", 8  ], // Coleoptera Hydraenidae Hydraena pygmaea
	[ "45410208", 1  ], // Coleoptera Hydraenidae Hydraena riparia
	[ "45410209", 7  ], // Coleoptera Hydraenidae Hydraena rufipes
	[ "45410211", 7  ], // Coleoptera Hydraenidae Hydraena testacea
	[ "45410301", 7  ], // Coleoptera Hydraenidae Limnebius aluta
	[ "45410302", 8  ], // Coleoptera Hydraenidae Limnebius crinifer
	[ "45410303", 7  ], // Coleoptera Hydraenidae Limnebius nitidus
	[ "45410304", 7  ], // Coleoptera Hydraenidae Limnebius papposus
	[ "45410305", 1  ], // Coleoptera Hydraenidae Limnebius truncatellus
	[ "45630101", 1  ], // Coleoptera Elmidae Elmis aenea
	[ "45630201", 4  ], // Coleoptera Elmidae Esolus parallelepipedus
	[ "45630301", 2  ], // Coleoptera Elmidae Limnius volckmari
	[ "45630401", 8  ], // Coleoptera Elmidae Macronychus quadrituberculatus
	[ "45630501", 9  ], // Coleoptera Elmidae Normandia nitens
	[ "45630601", 8  ], // Coleoptera Elmidae Oulimnius major
	[ "45630602", 7  ], // Coleoptera Elmidae Oulimnius rivularis
	[ "45630603", 7  ], // Coleoptera Elmidae Oulimnius troglodytes
	[ "45630604", 2  ], // Coleoptera Elmidae Oulimnius tuberculatus
	[ "45630701", 7  ], // Coleoptera Elmidae Riolus cupreus
	[ "45630702", 7  ], // Coleoptera Elmidae Riolus subviolaceus
	[ "45630801", 9  ], // Coleoptera Elmidae Stenelmis canaliculata
	[ "45620101", 7  ], // Coleoptera Dryopidae Pomatinus substriatus
	[ "45620211", 8  ], // Coleoptera Dryopidae Dryops (Dryops) anglicanus
	[ "45620212", 7  ], // Coleoptera Dryopidae Dryops (Dryops) auriculatus
	[ "45620213", 3  ], // Coleoptera Dryopidae Dryops (Dryops) ernesti
	[ "45620214", 8  ], // Coleoptera Dryopidae Dryops (Dryops) griseus
	[ "45620215", 1  ], // Coleoptera Dryopidae Dryops (Dryops) luridus
	[ "45620221", 7  ], // Coleoptera Dryopidae Dryops (Yrdops) nitidulus
	[ "45620217", 7  ], // Coleoptera Dryopidae Dryops (Dryops) similaris
	[ "45620216", 7  ], // Coleoptera Dryopidae Dryops (Dryops) striatellus
	[ "45650108", 3  ], // Coleoptera Heteroceridae Heterocerus fenestratus
	[ "45650101", 5  ], // Coleoptera Heteroceridae Heterocerus flexuosus
	[ "45650201", 8  ], // Coleoptera Heteroceridae Augyles hispidulus
	[ "45650107", 3  ], // Coleoptera Heteroceridae Heterocerus obsoletus
	[ "45710201", 7  ], // Coleoptera Chrysomelidae Donacia aquatica
	[ "45710202", 7  ], // Coleoptera Chrysomelidae Donacia bicolora
	[ "45710203", 7  ], // Coleoptera Chrysomelidae Donacia cinerea
	[ "45710204", 7  ], // Coleoptera Chrysomelidae Donacia clavipes
	[ "45710205", 7  ], // Coleoptera Chrysomelidae Donacia crassipes
	[ "45710206", 7  ], // Coleoptera Chrysomelidae Donacia dentata
	[ "45710207", 7  ], // Coleoptera Chrysomelidae Donacia impressa
	[ "45710208", 4  ], // Coleoptera Chrysomelidae Donacia marginata
	[ "45710209", 9  ], // Coleoptera Chrysomelidae Donacia obscura
	[ "45710211", 5  ], // Coleoptera Chrysomelidae Donacia semicuprea
	[ "45710212", 5  ], // Coleoptera Chrysomelidae Donacia simplex
	[ "45710213", 7  ], // Coleoptera Chrysomelidae Donacia sparganii
	[ "45710214", 7  ], // Coleoptera Chrysomelidae Donacia thalassina
	[ "45710215", 5  ], // Coleoptera Chrysomelidae Donacia versicolorea
	[ "45710216", 5  ], // Coleoptera Chrysomelidae Donacia vulgaris
	[ "45710305", 7  ], // Coleoptera Chrysomelidae Plateumaris affinis
	[ "45710302", 7  ], // Coleoptera Chrysomelidae Plateumaris braccata
	[ "45710303", 5  ], // Coleoptera Chrysomelidae Plateumaris discolor
	[ "45710304", 3  ], // Coleoptera Chrysomelidae Plateumaris sericea
	[ "45810501", 5  ], // Coleoptera Curculionidae Tanysphyrus lemnae
	[ "45811301", 7  ], // Coleoptera Curculionidae Eubrychius velutus
	[ "45811602", 7  ], // Coleoptera Curculionidae Phytobius leucogaster
	[ "45812601", 7  ], // Coleoptera Curculionidae Pelenomus canaliculatus
	[ "45812604", 7  ], // Coleoptera Curculionidae Pelenomus quadricorniger
	[ "45812702", 8  ], // Coleoptera Curculionidae Neophytobius quadrinodosus
	[ "45812301", 7  ], // Coleoptera Curculionidae Gymnetron beccabungae
	[ "45812302", 7  ], // Coleoptera Curculionidae Gymnetron veronicae
	[ "45812001", 5  ], // Coleoptera Curculionidae Poophagus sisymbrii
	[ "45810671", 7  ], // Coleoptera Curculionidae Bagous (Hydronomus) alismatis
	[ "45510103", 8  ], // Coleoptera Scirtidae Elodes elongata
	[ "45510307", 8  ], // Coleoptera Scirtidae Cyphon pubescens
	[ "45510401", 8  ], // Coleoptera Scirtidae Prionocyphon serricornis
	[ "45510602", 8  ], // Coleoptera Scirtidae Scirtes orbicularis
	[ "46110102", 1  ], // Megaloptera Sialidae Sialis lutaria
	[ "46110101", 5  ], // Megaloptera Sialidae Sialis fuliginosa
	[ "46110103", 7  ], // Megaloptera Sialidae Sialis nigripes
	[ "47110101", 5  ], // Neuroptera Osmylidae Osmylus fulvicephalus
	[ "47120102", 5  ], // Neuroptera Sisyridae Sisyra fuscata
	[ "47120101", 7  ], // Neuroptera Sisyridae Sisyra dalii
	[ "47120103", 5  ], // Neuroptera Sisyridae Sisyra terminalis
	[ "48110101", 1  ], // Trichoptera Rhyacophilidae Rhyacophila dorsalis
	[ "48110104", 7  ], // Trichoptera Rhyacophilidae Rhyacophila fasciata
	[ "48110103", 4  ], // Trichoptera Rhyacophilidae Rhyacophila obliterata
	[ "48110102", 3  ], // Trichoptera Rhyacophilidae Rhyacophila munda
	[ "48120102", 4  ], // Trichoptera Glossosomatidae Glossosoma conformis
	[ "48120101", 3  ], // Trichoptera Glossosomatidae Glossosoma boltoni
	[ "48120103", 8  ], // Trichoptera Glossosomatidae Glossosoma intermedium
	[ "48120202", 1  ], // Trichoptera Glossosomatidae Agapetus fuscipes
	[ "48120203", 3  ], // Trichoptera Glossosomatidae Agapetus ochripes
	[ "48120201", 3  ], // Trichoptera Glossosomatidae Agapetus delicatulus
	[ "48210101", 2  ], // Trichoptera Philopotamidae Philopotamus montanus
	[ "48210202", 2  ], // Trichoptera Philopotamidae Wormaldia occipitalis
	[ "48210201", 5  ], // Trichoptera Philopotamidae Wormaldia mediana
	[ "48210203", 5  ], // Trichoptera Philopotamidae Wormaldia subnigra
	[ "48210301", 7  ], // Trichoptera Philopotamidae Chimarra marginata
	[ "48240301", 3  ], // Trichoptera Polycentropodidae Neureclipsis bimaculata
	[ "48240402", 2  ], // Trichoptera Polycentropodidae Plectrocnemia conspersa
	[ "48240403", 3  ], // Trichoptera Polycentropodidae Plectrocnemia geniculata
	[ "48240401", 8  ], // Trichoptera Polycentropodidae Plectrocnemia brevis
	[ "48240501", 2  ], // Trichoptera Polycentropodidae Polycentropus flavomaculatus
	[ "48240502", 5  ], // Trichoptera Polycentropodidae Polycentropus irroratus
	[ "48240503", 5  ], // Trichoptera Polycentropodidae Polycentropus kingi
	[ "48240201", 4  ], // Trichoptera Polycentropodidae Holocentropus dubius
	[ "48240202", 3  ], // Trichoptera Polycentropodidae Holocentropus picicornis
	[ "48240203", 4  ], // Trichoptera Polycentropodidae Holocentropus stagnalis
	[ "48240103", 3  ], // Trichoptera Polycentropodidae Cyrnus trimaculatus
	[ "48240102", 10  ], // Trichoptera Polycentropodidae Cyrnus insolutus
	[ "48240101", 5  ], // Trichoptera Polycentropodidae Cyrnus flavidus
	[ "48230101", 5  ], // Trichoptera Ecnomidae Ecnomus tenellus
	[ "48220408", 1  ], // Trichoptera Psychomyiidae Tinodes waeneri
	[ "48220403", 4  ], // Trichoptera Psychomyiidae Tinodes maclachlani
	[ "48220401", 5  ], // Trichoptera Psychomyiidae Tinodes assimilis
	[ "48220405", 9  ], // Trichoptera Psychomyiidae Tinodes pallidulus
	[ "48220404", 7  ], // Trichoptera Psychomyiidae Tinodes maculicornis
	[ "48220407", 7  ], // Trichoptera Psychomyiidae Tinodes unicolor
	[ "48220406", 7  ], // Trichoptera Psychomyiidae Tinodes rostocki
	[ "48220402", 7  ], // Trichoptera Psychomyiidae Tinodes dives
	[ "48220101", 4  ], // Trichoptera Psychomyiidae Lype phaeopa
	[ "48220102", 3  ], // Trichoptera Psychomyiidae Lype reducta
	[ "48220201", 7  ], // Trichoptera Psychomyiidae Metalype fragilis
	[ "48220301", 4  ], // Trichoptera Psychomyiidae Psychomyia pusilla
	[ "48250207", 2  ], // Trichoptera Hydropsychidae Hydropsyche pellucidula
	[ "48250201", 1  ], // Trichoptera Hydropsychidae Hydropsyche angustipennis
	[ "48250209", 1  ], // Trichoptera Hydropsychidae Hydropsyche siltalai
	[ "48250208", 10  ], // Trichoptera Hydropsychidae Hydropsyche saxonica
	[ "48250203", 4  ], // Trichoptera Hydropsychidae Hydropsyche contubernalis
	[ "48250202", 10  ], // Trichoptera Hydropsychidae Hydropsyche bulgaromanorum
	[ "48250206", 4  ], // Trichoptera Hydropsychidae Hydropsyche instabilis
	[ "48250205", 7  ], // Trichoptera Hydropsychidae Hydropsyche fulvipes
	[ "48250204", 10  ], // Trichoptera Hydropsychidae Hydropsyche exocellata
	[ "48250101", 4  ], // Trichoptera Hydropsychidae Cheumatopsyche lepida
	[ "48250301", 4  ], // Trichoptera Hydropsychidae Diplectrona felix
	[ "48130101", 1  ], // Trichoptera Hydroptilidae Agraylea multipunctata
	[ "48130102", 5  ], // Trichoptera Hydroptilidae Agraylea sexmaculata
	[ "48130201", 5  ], // Trichoptera Hydroptilidae Allotrichia pallicornis
	[ "48130309", 4  ], // Trichoptera Hydroptilidae Hydroptila sparsa
	[ "48130308", 3  ], // Trichoptera Hydroptilidae Hydroptila simulans
	[ "48130302", 7  ], // Trichoptera Hydroptilidae Hydroptila cornuta
	[ "48130304", 9  ], // Trichoptera Hydroptilidae Hydroptila lotensis
	[ "48130301", 5  ], // Trichoptera Hydroptilidae Hydroptila angulata
	[ "48130311", 7  ], // Trichoptera Hydroptilidae Hydroptila sylvestris
	[ "48130305", 6  ], // Trichoptera Hydroptilidae Hydroptila martini
	[ "48130306", 5  ], // Trichoptera Hydroptilidae Hydroptila occulta
	[ "48130313", 2  ], // Trichoptera Hydroptilidae Hydroptila tineoides
	[ "48130307", 6  ], // Trichoptera Hydroptilidae Hydroptila pulchricornis
	[ "48130303", 3  ], // Trichoptera Hydroptilidae Hydroptila forcipata
	[ "48130315", 2  ], // Trichoptera Hydroptilidae Hydroptila vectis
	[ "48130312", 10  ], // Trichoptera Hydroptilidae Hydroptila tigurina
	[ "48130314", 7  ], // Trichoptera Hydroptilidae Hydroptila valesiaca
	[ "48130602", 4  ], // Trichoptera Hydroptilidae Ithytrichia lamellaris
	[ "48130601", 8  ], // Trichoptera Hydroptilidae Ithytrichia clavata
	[ "48130701", 5  ], // Trichoptera Hydroptilidae Orthotrichia angustella
	[ "48130703", 10  ], // Trichoptera Hydroptilidae Orthotrichia tragetti
	[ "48130702", 5  ], // Trichoptera Hydroptilidae Orthotrichia costalis
	[ "48130403", 3  ], // Trichoptera Hydroptilidae Oxyethira flavicornis
	[ "48130408", 10  ], // Trichoptera Hydroptilidae Oxyethira tristella
	[ "48130407", 6  ], // Trichoptera Hydroptilidae Oxyethira simplex
	[ "48130402", 3  ], // Trichoptera Hydroptilidae Oxyethira falcata
	[ "48130404", 4  ], // Trichoptera Hydroptilidae Oxyethira frici
	[ "48130401", 10  ], // Trichoptera Hydroptilidae Oxyethira distinctella
	[ "48130406", 8  ], // Trichoptera Hydroptilidae Oxyethira sagittifera
	[ "48130405", 8  ], // Trichoptera Hydroptilidae Oxyethira mirabilis
	[ "48130501", 8  ], // Trichoptera Hydroptilidae Tricholeiochiton fagesii
	[ "48310301", 10  ], // Trichoptera Phryganeidae Hagenella clathrata
	[ "48310502", 5  ], // Trichoptera Phryganeidae Phryganea grandis
	[ "48310501", 2  ], // Trichoptera Phryganeidae Phryganea bipunctata
	[ "48310401", 4  ], // Trichoptera Phryganeidae Oligotricha striata
	[ "48310105", 3  ], // Trichoptera Phryganeidae Agrypnia varia
	[ "48310102", 5  ], // Trichoptera Phryganeidae Agrypnia obsoleta
	[ "48310104", 10  ], // Trichoptera Phryganeidae Agrypnia picta
	[ "48310103", 5  ], // Trichoptera Phryganeidae Agrypnia pagetana
	[ "48310601", 5  ], // Trichoptera Phryganeidae Trichostegia minor
	[ "48340101", 9  ], // Trichoptera Limnephilidae Ironoquia dubia
	[ "483B0104", 5  ], // Trichoptera Apataniidae Apatania wallengreni
	[ "483B0101", 7  ], // Trichoptera Apataniidae Apatania auricula
	[ "483B0102", 5  ], // Trichoptera Apataniidae Apatania muliebris
	[ "48340301", 1  ], // Trichoptera Limnephilidae Drusus annulatus
	[ "48340401", 4  ], // Trichoptera Limnephilidae Ecclisopteryx guttulata
	[ "48341726", 3  ], // Trichoptera Limnephilidae Limnephilus rhombicus
	[ "48341712", 2  ], // Trichoptera Limnephilidae Limnephilus flavicornis
	[ "48341729", 7  ], // Trichoptera Limnephilidae Limnephilus subcentralis
	[ "48341705", 7  ], // Trichoptera Limnephilidae Limnephilus borealis
	[ "48341722", 3  ], // Trichoptera Limnephilidae Limnephilus marmoratus
	[ "48341725", 4  ], // Trichoptera Limnephilidae Limnephilus politus
	[ "48341731", 9  ], // Trichoptera Limnephilidae Limnephilus tauricus
	[ "48341724", 10  ], // Trichoptera Limnephilidae Limnephilus pati
	[ "48341728", 4  ], // Trichoptera Limnephilidae Limnephilus stigma
	[ "48341703", 5  ], // Trichoptera Limnephilidae Limnephilus binotatus
	[ "48341708", 5  ], // Trichoptera Limnephilidae Limnephilus decipiens
	[ "48341719", 1  ], // Trichoptera Limnephilidae Limnephilus lunatus
	[ "48341721", 2  ], // Trichoptera Limnephilidae Limnephilus luridus
	[ "48341717", 6  ], // Trichoptera Limnephilidae Limnephilus ignavus
	[ "48341714", 7  ], // Trichoptera Limnephilidae Limnephilus fuscinervis
	[ "48341709", 7  ], // Trichoptera Limnephilidae Limnephilus elegans
	[ "48341715", 4  ], // Trichoptera Limnephilidae Limnephilus griseus
	[ "48341704", 5  ], // Trichoptera Limnephilidae Limnephilus bipunctatus
	[ "48341701", 3  ], // Trichoptera Limnephilidae Limnephilus affinis
	[ "48341718", 3  ], // Trichoptera Limnephilidae Limnephilus incisus
	[ "48341716", 4  ], // Trichoptera Limnephilidae Limnephilus hirsutus
	[ "48341706", 3  ], // Trichoptera Limnephilidae Limnephilus centralis
	[ "48341727", 2  ], // Trichoptera Limnephilidae Limnephilus sparsus
	[ "48341702", 3  ], // Trichoptera Limnephilidae Limnephilus auricula
	[ "48341732", 3  ], // Trichoptera Limnephilidae Limnephilus vittatus
	[ "48341723", 6  ], // Trichoptera Limnephilidae Limnephilus nigriceps
	[ "48341711", 2  ], // Trichoptera Limnephilidae Limnephilus extricatus
	[ "48341713", 5  ], // Trichoptera Limnephilidae Limnephilus fuscicornis
	[ "48341707", 4  ], // Trichoptera Limnephilidae Limnephilus coenosus
	[ "48341602", 10  ], // Trichoptera Limnephilidae Grammotaulius nitidus
	[ "48341601", 4  ], // Trichoptera Limnephilidae Grammotaulius nigropunctatus
	[ "48341501", 3  ], // Trichoptera Limnephilidae Glyphotaelius pellucidus
	[ "48341801", 8  ], // Trichoptera Limnephilidae Nemotaulius punctatolineatus
	[ "48341401", 2  ], // Trichoptera Limnephilidae Anabolia nervosa
	[ "48341402", 7  ], // Trichoptera Limnephilidae Anabolia brevipennis
	[ "48342001", 5  ], // Trichoptera Limnephilidae Rhadicoleptus alpestris
	[ "48341102", 2  ], // Trichoptera Limnephilidae Potamophylax latipennis
	[ "48341101", 2  ], // Trichoptera Limnephilidae Potamophylax cingulatus
	[ "48341103", 6  ], // Trichoptera Limnephilidae Potamophylax rotundipennis
	[ "48340602", 2  ], // Trichoptera Limnephilidae Halesus radiatus
	[ "48340601", 3  ], // Trichoptera Limnephilidae Halesus digitatus
	[ "48340801", 5  ], // Trichoptera Limnephilidae Melampophylax mucoreus
	[ "48341201", 3  ], // Trichoptera Limnephilidae Stenophylax permistus
	[ "48341202", 5  ], // Trichoptera Limnephilidae Stenophylax vibex
	[ "48341001", 2  ], // Trichoptera Limnephilidae Micropterna lateralis
	[ "48341002", 1  ], // Trichoptera Limnephilidae Micropterna sequax
	[ "48340902", 5  ], // Trichoptera Limnephilidae Mesophylax impunctatus
	[ "48340901", 8  ], // Trichoptera Limnephilidae Mesophylax aspersus
	[ "48340501", 4  ], // Trichoptera Limnephilidae Allogamus auricollis
	[ "48340701", 5  ], // Trichoptera Limnephilidae Hydatophylax infumatus
	[ "48341301", 3  ], // Trichoptera Limnephilidae Chaetopteryx villosa
	[ "48390101", 2  ], // Trichoptera Molannidae Molanna angustata
	[ "48390102", 5  ], // Trichoptera Molannidae Molanna albicans
	[ "48360102", 4  ], // Trichoptera Beraeidae Beraea pullata
	[ "48360101", 3  ], // Trichoptera Beraeidae Beraea maurus
	[ "48360301", 8  ], // Trichoptera Beraeidae Ernodes articularis
	[ "48360201", 5  ], // Trichoptera Beraeidae Beraeodes minutus
	[ "48380101", 3  ], // Trichoptera Odontoceridae Odontocerum albicorne
	[ "483A0201", 5  ], // Trichoptera Leptoceridae Ceraclea albimacula
	[ "483A0205", 4  ], // Trichoptera Leptoceridae Ceraclea nigronervosa
	[ "483A0204", 5  ], // Trichoptera Leptoceridae Ceraclea fulva
	[ "483A0206", 7  ], // Trichoptera Leptoceridae Ceraclea senilis
	[ "483A0202", 4  ], // Trichoptera Leptoceridae Ceraclea annulicornis
	[ "483A0203", 3  ], // Trichoptera Leptoceridae Ceraclea dissimilis
	[ "483A0102", 1  ], // Trichoptera Leptoceridae Athripsodes aterrimus
	[ "483A0104", 1  ], // Trichoptera Leptoceridae Athripsodes cinereus
	[ "483A0101", 4  ], // Trichoptera Leptoceridae Athripsodes albifrons
	[ "483A0103", 5  ], // Trichoptera Leptoceridae Athripsodes bilineatus
	[ "483A0105", 6  ], // Trichoptera Leptoceridae Athripsodes commutatus
	[ "483A0403", 6  ], // Trichoptera Leptoceridae Mystacides nigra
	[ "483A0401", 2  ], // Trichoptera Leptoceridae Mystacides azurea
	[ "483A0402", 1  ], // Trichoptera Leptoceridae Mystacides longicornis
	[ "483A0701", 2  ], // Trichoptera Leptoceridae Triaenodes bicolor
	[ "483A0801", 7  ], // Trichoptera Leptoceridae Ylodes conspersus
	[ "483A0803", 8  ], // Trichoptera Leptoceridae Ylodes simulans
	[ "483A0802", 8  ], // Trichoptera Leptoceridae Ylodes reuteri
	[ "483A0601", 8  ], // Trichoptera Leptoceridae Erotesis baltica
	[ "483A0502", 3  ], // Trichoptera Leptoceridae Adicella reducta
	[ "483A0501", 8  ], // Trichoptera Leptoceridae Adicella filicornis
	[ "483A0904", 2  ], // Trichoptera Leptoceridae Oecetis ochracea
	[ "483A0901", 5  ], // Trichoptera Leptoceridae Oecetis furva
	[ "483A0902", 3  ], // Trichoptera Leptoceridae Oecetis lacustris
	[ "483A0903", 8  ], // Trichoptera Leptoceridae Oecetis notata
	[ "483A0905", 4  ], // Trichoptera Leptoceridae Oecetis testacea
	[ "483A0303", 5  ], // Trichoptera Leptoceridae Leptocerus tineiformis
	[ "483A0302", 9  ], // Trichoptera Leptoceridae Leptocerus lusitanicus
	[ "483A0301", 8  ], // Trichoptera Leptoceridae Leptocerus interruptus
	[ "483A1002", 8  ], // Trichoptera Leptoceridae Setodes punctatus
	[ "483A1001", 8  ], // Trichoptera Leptoceridae Setodes argentipunctellus
	[ "48350101", 3  ], // Trichoptera Goeridae Goera pilosa
	[ "48350202", 2  ], // Trichoptera Goeridae Silo pallipes
	[ "48350201", 5  ], // Trichoptera Goeridae Silo nigricornis
	[ "48330101", 3  ], // Trichoptera Lepidostomatidae Crunoecia irrorata
	[ "48330301", 2  ], // Trichoptera Lepidostomatidae Lepidostoma hirtum
	[ "48330201", 6  ], // Trichoptera Lepidostomatidae Lasiocephala basalis
	[ "48320101", 6  ], // Trichoptera Brachycentridae Brachycentrus subnubilus
	[ "48370201", 1  ], // Trichoptera Sericostomatidae Sericostoma personatum
	[ "48370101", 6  ], // Trichoptera Sericostomatidae Notidobia ciliaris
	[ "50135501", 9  ], // Diptera Limoniidae Arctoconopa melampodia
	[ "50133911", 7  ], // Diptera Limoniidae Cheilotrichia (Cheilotrichia) imbuta
	[ "50131811", 7  ], // Diptera Limoniidae Dactylolabis (Dactylolabis) sexmaculata
	[ "50131812", 7  ], // Diptera Limoniidae Dactylolabis (Dactylolabis) transversa
	[ "50140522", 7  ], // Diptera Pediciidae Dicranota (Paradicranota) gracilipes
	[ "50140512", 7  ], // Diptera Pediciidae Dicranota (Dicranota) guerini
	[ "50140524", 7  ], // Diptera Pediciidae Dicranota (Paradicranota) robusta
	[ "50140526", 8  ], // Diptera Pediciidae Dicranota (Paradicranota) simulans
	[ "50134161", 9  ], // Diptera Limoniidae Erioptera (Mesocyphona) bivittata
	[ "50134137", 9  ], // Diptera Limoniidae Erioptera (Erioptera) limbata
	[ "50134139", 9  ], // Diptera Limoniidae Erioptera (Erioptera) meijerei
	[ "5013413A", 7  ], // Diptera Limoniidae Erioptera (Erioptera) nielseni
	[ "5013413B", 8  ], // Diptera Limoniidae Erioptera (Erioptera) verralli
	[ "5013413C", 8  ], // Diptera Limoniidae Erioptera (Erioptera) sordida
	[ "50133151", 8  ], // Diptera Limoniidae Gonomyia (Prolipophleps) abbreviata
	[ "50133221", 10  ], // Diptera Limoniidae Ellipteroides (Protogonomyia) alboscutellatus
	[ "50133141", 7  ], // Diptera Limoniidae Gonomyia (Gonomyia) bifida
	[ "50133311", 9  ], // Diptera Limoniidae Idiocera (Idiocera) bradleyi
	[ "50133315", 10  ], // Diptera Limoniidae Idiocera (Idiocera) sziladyi
	[ "50133142", 7  ], // Diptera Limoniidae Gonomyia (Gonomyia) conoviensis
	[ "50133314", 10  ], // Diptera Limoniidae Idiocera (Idiocera) sexguttata
	[ "50130915", 7  ], // Diptera Limoniidae Helius (Helius) pallirostris
	[ "50132411", 7  ], // Diptera Limoniidae Phylidorea (Phylidorea) abdominalis
	[ "50132413", 10  ], // Diptera Limoniidae Phylidorea (Phylidorea) heterogyna
	[ "50132051", 9  ], // Diptera Limoniidae Limnophila (Limnophila) pictipennis
	[ "50135334", 7  ], // Diptera Limoniidae Molophilus (Molophilus) bihamatus
	[ "50135336", 7  ], // Diptera Limoniidae Molophilus (Molophilus) corniger
	[ "50135338", 8  ], // Diptera Limoniidae Molophilus (Molophilus) czizeki
	[ "5013533B", 8  ], // Diptera Limoniidae Molophilus (Molophilus) lackschewitzianus
	[ "5013533D", 7  ], // Diptera Limoniidae Molophilus (Molophilus) niger
	[ "5013533K", 7  ], // Diptera Limoniidae Molophilus (Molophilus) propinquus
	[ "50132901", 7  ], // Diptera Limoniidae Neolimnophila carteri
	[ "50132902", 7  ], // Diptera Limoniidae Neolimnophila placida
	[ "50110505", 8  ], // Diptera Tipulidae Nephrotoma crocata
	[ "50130701", 7  ], // Diptera Limoniidae Orimarga juvenilis
	[ "50130702", 8  ], // Diptera Limoniidae Orimarga virgo
	[ "50134811", 9  ], // Diptera Limoniidae Ormosia (Ormosia) aciculata
	[ "50134813", 9  ], // Diptera Limoniidae Ormosia (Ormosia) bicornis
	[ "50134819", 7  ], // Diptera Limoniidae Ormosia (Ormosia) staegeriana
	[ "50135412", 9  ], // Diptera Limoniidae Paradelphomyia (Oxyrhiza) ecalcarata
	[ "50135413", 7  ], // Diptera Limoniidae Paradelphomyia (Oxyrhiza) fuscula
	[ "50135414", 7  ], // Diptera Limoniidae Paradelphomyia (Oxyrhiza) nielseni
	[ "50120201", 7  ], // Diptera Cylindrotomidae Phalacrocera replicata
	[ "50132622", 7  ], // Diptera Limoniidae Pilaria fuscipennis
	[ "50132623", 7  ], // Diptera Limoniidae Pilaria meridiana
	[ "50132624", 7  ], // Diptera Limoniidae Pilaria scutellata
	[ "50110101", 9  ], // Diptera Tipulidae Prionocera pubescens
	[ "50110102", 9  ], // Diptera Tipulidae Prionocera subserricornis
	[ "50133622", 8  ], // Diptera Limoniidae Rhabdomastix (Sacandaga) laeta
	[ "50133631", 9  ], // Diptera Limoniidae Rhabdomastix (Lurdia) inclinata
	[ "50135001", 8  ], // Diptera Limoniidae Scleroprocta pentagonalis
	[ "50135002", 7  ], // Diptera Limoniidae Scleroprocta sororcula
	[ "50135121", 10  ], // Diptera Limoniidae Tasiocera (Dasymolophilus) collini
	[ "50135122", 10  ], // Diptera Limoniidae Tasiocera (Dasymolophilus) fuscescens
	[ "50135123", 10  ], // Diptera Limoniidae Tasiocera (Dasymolophilus) jenkinsoni
	[ "50135127", 7  ], // Diptera Limoniidae Tasiocera (Dasymolophilus) robusta
	[ "50130601", 7  ], // Diptera Limoniidae Thaumastoptera calceata
	[ "50110381", 9  ], // Diptera Tipulidae Tipula (Lindnerina) bistilata
	[ "50110332", 7  ], // Diptera Tipulidae Tipula (Savtshenkia) cheethami
	[ "501103A1", 8  ], // Diptera Tipulidae Tipula (Yamatotipula) coerulescens
	[ "50110333", 8  ], // Diptera Tipulidae Tipula (Savtshenkia) gimmerthali
	[ "50110334", 8  ], // Diptera Tipulidae Tipula (Savtshenkia) grisescens
	[ "50110335", 8  ], // Diptera Tipulidae Tipula (Savtshenkia) limbata
	[ "501103A4", 8  ], // Diptera Tipulidae Tipula (Yamatotipula) marginella
	[ "5011033A", 10  ], // Diptera Tipulidae Tipula (Savtshenkia) serrulifera
	[ "50110372", 10  ], // Diptera Tipulidae Tipula (Mediotipula) siebkei
	[ "50110352", 7  ], // Diptera Tipulidae Tipula (Pterelachisus) truncorum
	[ "50120101", 8  ], // Diptera Cylindrotomidae Triogma trisulcata
	[ "50310101", 5  ], // Diptera Dixidae Dixa dilatata
	[ "50310102", 7  ], // Diptera Dixidae Dixa maculata
	[ "50310103", 4  ], // Diptera Dixidae Dixa nebulosa
	[ "50310104", 5  ], // Diptera Dixidae Dixa nubilipennis
	[ "50310105", 5  ], // Diptera Dixidae Dixa puberula
	[ "50310106", 4  ], // Diptera Dixidae Dixa submaculata
	[ "50310201", 4  ], // Diptera Dixidae Dixella aestivalis
	[ "50310202", 4  ], // Diptera Dixidae Dixella amphibia
	[ "50310203", 7  ], // Diptera Dixidae Dixella attica
	[ "50310204", 3  ], // Diptera Dixidae Dixella autumnalis
	[ "50310205", 7  ], // Diptera Dixidae Dixella filicornis
	[ "50310209", 9  ], // Diptera Dixidae Dixella graeca
	[ "50310206", 4  ], // Diptera Dixidae Dixella martinii
	[ "50310207", 7  ], // Diptera Dixidae Dixella obscura
	[ "50310208", 7  ], // Diptera Dixidae Dixella serotina
	[ "50330734", 10  ], // Diptera Culicidae Ochlerotatus (Ochlerotatus) communis
	[ "50330736", 8  ], // Diptera Culicidae Ochlerotatus (Ochlerotatus) dorsalis
	[ "50330737", 9  ], // Diptera Culicidae Ochlerotatus (Ochlerotatus) flavescens
	[ "50330738", 10  ], // Diptera Culicidae Ochlerotatus (Ochlerotatus) leucomelas
	[ "5033073A", 8  ], // Diptera Culicidae Ochlerotatus (Ochlerotatus) sticticus
	[ "50330111", 10  ], // Diptera Culicidae Anopheles (Anopheles) algeriensis
	[ "50331131", 10  ], // Diptera Culicidae Culiseta (Allotheobaldia) longiareolata
	[ "50330501", 8  ], // Diptera Culicidae Orthopodomyia pulcripalpis
	[ "50340101", 6  ], // Diptera Thaumaleidae Thaumalea testacea
	[ "50340102", 8  ], // Diptera Thaumaleidae Thaumalea truncata
	[ "50340103", 6  ], // Diptera Thaumaleidae Thaumalea verralli
	[ "50351624", 9  ], // Diptera Ceratopogonidae Dasyhelea (Dasyhelea) saxicola
	[ "50360101", 5  ], // Diptera Simuliidae Prosimulium hirtipes
	[ "50360102", 7  ], // Diptera Simuliidae Prosimulium latimucro
	[ "50360103", 7  ], // Diptera Simuliidae Prosimulium tomosvaryi
	[ "50360201", 7  ], // Diptera Simuliidae Metacnephia amphora
	[ "50360311", 6  ], // Diptera Simuliidae Simulium (Hellichiella) latipes
	[ "50360321", 6  ], // Diptera Simuliidae Simulium (Nevermannia) angustitarse
	[ "50360327", 4  ], // Diptera Simuliidae Simulium (Nevermannia) lundstromi
	[ "50360322", 5  ], // Diptera Simuliidae Simulium (Nevermannia) armoricanum
	[ "50360324", 4  ], // Diptera Simuliidae Simulium (Nevermannia) cryophilum
	[ "5036032A", 6  ], // Diptera Simuliidae Simulium (Nevermannia) juxtacrenobium
	[ "50360329", 7  ], // Diptera Simuliidae Simulium (Nevermannia) urbanum
	[ "50360325", 5  ], // Diptera Simuliidae Simulium (Nevermannia) dunfellense
	[ "50360323", 5  ], // Diptera Simuliidae Simulium (Nevermannia) costatum
	[ "50360341", 4  ], // Diptera Simuliidae Simulium (Eusimulium) angustipes
	[ "50360343", 4  ], // Diptera Simuliidae Simulium (Eusimulium) velutinum
	[ "50360342", 5  ], // Diptera Simuliidae Simulium (Eusimulium) aureum
	[ "50360352", 3  ], // Diptera Simuliidae Simulium (Wilhelmia) lineatum
	[ "50360353", 5  ], // Diptera Simuliidae Simulium (Wilhelmia) pseudequinum
	[ "50360351", 2  ], // Diptera Simuliidae Simulium (Wilhelmia) equinum
	[ "50360361", 3  ], // Diptera Simuliidae Simulium (Boophthora) erythrocephalum
	[ "50360386", 1  ], // Diptera Simuliidae Simulium (Simulium) ornatum
	[ "50360383", 5  ], // Diptera Simuliidae Simulium (Simulium) intermedium
	[ "50360389", 5  ], // Diptera Simuliidae Simulium (Simulium) trifasciatum
	[ "50360381", 3  ], // Diptera Simuliidae Simulium (Simulium) argyreatum
	[ "5036038B", 4  ], // Diptera Simuliidae Simulium (Simulium) variegatum
	[ "5036038A", 4  ], // Diptera Simuliidae Simulium (Simulium) tuberosum
	[ "50360382", 6  ], // Diptera Simuliidae Simulium (Simulium) rostratum
	[ "50360384", 7  ], // Diptera Simuliidae Simulium (Simulium) morsitans
	[ "50360387", 5  ], // Diptera Simuliidae Simulium (Simulium) posticatum
	[ "50360388", 5  ], // Diptera Simuliidae Simulium (Simulium) reptans
	[ "50360385", 3  ], // Diptera Simuliidae Simulium (Simulium) noelleri
	[ "50610101", 7  ], // Diptera Stratiomyidae Beris clavipes
	[ "50610102", 7  ], // Diptera Stratiomyidae Beris fuscipes
	[ "50610501", 10  ], // Diptera Stratiomyidae Odontomyia angulata
	[ "50610502", 9  ], // Diptera Stratiomyidae Odontomyia argentata
	[ "50610503", 10  ], // Diptera Stratiomyidae Odontomyia hydroleon
	[ "50610504", 9  ], // Diptera Stratiomyidae Odontomyia ornata
	[ "50610505", 7  ], // Diptera Stratiomyidae Odontomyia tigrina
	[ "50610301", 9  ], // Diptera Stratiomyidae Oxycera analis
	[ "50610302", 8  ], // Diptera Stratiomyidae Oxycera dives
	[ "50610313", 10  ], // Diptera Stratiomyidae Oxycera leonina
	[ "50610305", 7  ], // Diptera Stratiomyidae Oxycera morrisii
	[ "50610307", 7  ], // Diptera Stratiomyidae Oxycera pardalina
	[ "50610309", 7  ], // Diptera Stratiomyidae Oxycera pygmaea
	[ "50610311", 9  ], // Diptera Stratiomyidae Oxycera terminata
	[ "50610601", 10  ], // Diptera Stratiomyidae Stratiomys chamaeleon
	[ "50610603", 9  ], // Diptera Stratiomyidae Stratiomys longicornis
	[ "50610604", 7  ], // Diptera Stratiomyidae Stratiomys potamida
	[ "50610401", 7  ], // Diptera Stratiomyidae Vanoyia tenuicornis
	[ "50640201", 8  ], // Diptera Athericidae Atrichops crassipes
	[ "50630303", 10  ], // Diptera Tabanidae Atylotus plebeius
	[ "50630103", 9  ], // Diptera Tabanidae Chrysops sepulcralis
	[ "50630203", 8  ], // Diptera Tabanidae Haematopota grandis
	[ "50630504", 7  ], // Diptera Tabanidae Tabanus cordiger
	[ "50630505", 8  ], // Diptera Tabanidae Tabanus glaucopis
	[ "50711201", 7  ], // Diptera Empididae Chelifera angusta
	[ "50711202", 7  ], // Diptera Empididae Chelifera aperticauda
	[ "50711203", 10  ], // Diptera Empididae Chelifera astigma
	[ "50711204", 7  ], // Diptera Empididae Chelifera concinnicauda
	[ "50711207", 7  ], // Diptera Empididae Chelifera monostigma
	[ "50711213", 7  ], // Diptera Empididae Chelifera subangusta
	[ "50711722", 8  ], // Diptera Empididae Clinocera nivalis
	[ "50711802", 8  ], // Diptera Empididae Kowarzia tenella
	[ "50711724", 7  ], // Diptera Empididae Clinocera wesmaeli
	[ "50711503", 8  ], // Diptera Empididae Dolichocephala ocellata
	[ "50711401", 7  ], // Diptera Empididae Dryodromia testacea
	[ "50711301", 7  ], // Diptera Empididae Hemerodromia adulatoria
	[ "50711303", 7  ], // Diptera Empididae Hemerodromia laudatoria
	[ "50711304", 9  ], // Diptera Empididae Hemerodromia melangyna
	[ "50730102", 7  ], // Diptera Hybotidae Stilpon lunatus
	[ "50730104", 7  ], // Diptera Hybotidae Stilpon sublunatus
	[ "50712041", 10  ], // Diptera Empididae Wiedemannia (Philolutra) simplex
	[ "50712021", 10  ], // Diptera Empididae Wiedemannia (Pseudowiedemannia) lamellata
	[ "50712031", 7  ], // Diptera Empididae Wiedemannia (Chamaedipsia) lota
	[ "50712042", 8  ], // Diptera Empididae Wiedemannia (Philolutra) phantasma
	[ "50722201", 10  ], // Diptera Dolichopodidae Acropsilus niger
	[ "50721101", 8  ], // Diptera Dolichopodidae Aphrosylus mitis
	[ "50722012", 7  ], // Diptera Dolichopodidae Campsicnemus compeditus
	[ "50722015", 8  ], // Diptera Dolichopodidae Campsicnemus magius
	[ "50722016", 7  ], // Diptera Dolichopodidae Campsicnemus marginatus
	[ "50722017", 7  ], // Diptera Dolichopodidae Campsicnemus pumilio
	[ "50722019", 7  ], // Diptera Dolichopodidae Campsicnemus pusillus
	[ "50721803", 7  ], // Diptera Dolichopodidae Chrysotus monochaetus
	[ "50721804", 7  ], // Diptera Dolichopodidae Chrysotus suavis
	[ "50720111", 8  ], // Diptera Dolichopodidae Dolichopus (Dolichopus) arbustorum
	[ "50720113", 9  ], // Diptera Dolichopodidae Dolichopus (Dolichopus) cilifemoratus
	[ "50720908", 8  ], // Diptera Dolichopodidae Hydrophorus viridis
	[ "50721205", 7  ], // Diptera Dolichopodidae Rhaphium fractum
	[ "50721312", 8  ], // Diptera Dolichopodidae Syntormon macula
	[ "50721311", 7  ], // Diptera Dolichopodidae Syntormon filiger
	[ "50721313", 9  ], // Diptera Dolichopodidae Syntormon mikii
	[ "50721319", 7  ], // Diptera Dolichopodidae Syntormon zelleri
	[ "50721601", 8  ], // Diptera Dolichopodidae Systenus bipartitus
	[ "50721602", 7  ], // Diptera Dolichopodidae Systenus leucurus
	[ "50721603", 7  ], // Diptera Dolichopodidae Systenus pallipes
	[ "50721604", 7  ], // Diptera Dolichopodidae Systenus scholtzii
	[ "50721605", 8  ], // Diptera Dolichopodidae Systenus tener
	[ "50722401", 8  ], // Diptera Dolichopodidae Telmaturgus tumidulus
	[ "50810602", 8  ], // Diptera Syrphidae Anasimyia interpuncta
	[ "50810604", 7  ], // Diptera Syrphidae Anasimyia lunulata
	[ "50811401", 7  ], // Diptera Syrphidae Melanogaster aerosa
	[ "50811013", 9  ], // Diptera Syrphidae Eristalis (Eoseristalis) cryptarum
	[ "50811018", 7  ], // Diptera Syrphidae Eristalis (Eoseristalis) rupium
	[ "50810501", 9  ], // Diptera Syrphidae Helophilus groenlandicus
	[ "50810202", 7  ], // Diptera Syrphidae Lejogaster tarsata
	[ "50810701", 9  ], // Diptera Syrphidae Lejops vittata
	[ "50810901", 7  ], // Diptera Syrphidae Mallota cimbiciformis
	[ "50810301", 7  ], // Diptera Syrphidae Orthonevra brevicornis
	[ "50810302", 7  ], // Diptera Syrphidae Orthonevra geniculata
	[ "50810801", 9  ], // Diptera Syrphidae Parhelophilus consimilis
	[ "50820501", 8  ], // Diptera Sciomyzidae Antichaeta analis
	[ "50820502", 9  ], // Diptera Sciomyzidae Antichaeta brevipennis
	[ "50820101", 7  ], // Diptera Sciomyzidae Colobaea bifasciella
	[ "50820102", 7  ], // Diptera Sciomyzidae Colobaea distincta
	[ "50820103", 9  ], // Diptera Sciomyzidae Colobaea pectoralis
	[ "50820104", 7  ], // Diptera Sciomyzidae Colobaea punctata
	[ "50820601", 7  ], // Diptera Sciomyzidae Dictya umbrarum
	[ "50820203", 9  ], // Diptera Sciomyzidae Pherbellia argyra
	[ "50820204", 7  ], // Diptera Sciomyzidae Pherbellia brunnipes
	[ "50820209", 7  ], // Diptera Sciomyzidae Pherbellia griseola
	[ "50821601", 7  ], // Diptera Sciomyzidae Ditaeniella grisescens
	[ "50820213", 7  ], // Diptera Sciomyzidae Pherbellia nana
	[ "50821202", 9  ], // Diptera Sciomyzidae Psacadina vittigera
	[ "50821203", 9  ], // Diptera Sciomyzidae Psacadina zernyi
	[ "50820302", 7  ], // Diptera Sciomyzidae Pteromicra glabricula
	[ "50820303", 9  ], // Diptera Sciomyzidae Pteromicra leucopeza
	[ "50820304", 9  ], // Diptera Sciomyzidae Pteromicra pectorosa
	[ "50821303", 7  ], // Diptera Sciomyzidae Renocera striata
	[ "50820401", 9  ], // Diptera Sciomyzidae Sciomyza dryomyzina
	[ "50820402", 7  ], // Diptera Sciomyzidae Sciomyza simplex
	[ "50821504", 8  ], // Diptera Sciomyzidae Tetanocera freyi
	[ "50840121", 7  ], // Diptera Scathophagidae Acanthocnema (Clinoceroides) glaucescens
	[ "50840112", 8  ], // Diptera Scathophagidae Acanthocnema (Acanthocnema) nigrimana
	[ "50850501", 7  ], // Diptera Muscidae Lispe caesia
	[ "50850502", 9  ], // Diptera Muscidae Lispe consanguinea
	[ "50850511", 7  ], // Diptera Muscidae Lispe uliginosa
	[ "50850101", 8  ], // Diptera Muscidae Phaonia exoleta
])

export const scoresBmwp = new Map<TaxonCode, ScoreBmwp>([
	[ "05110000", { score_orig:5,  score_rev:4.2,       score_riffle:4.5,       score_riffle_pool:4.1,       score_pool:3.7       }], // Tricladida Planariidae
	[ "05130000", { score_orig:5,  score_rev:3.1,       score_riffle:2.3,       score_riffle_pool:4.1,       score_pool:3.1       }], // Tricladida Dendrocoelidae
	[ "16110000", { score_orig:6,  score_rev:7.5,       score_riffle:6.7,       score_riffle_pool:8.1,       score_pool:9.3       }], // Gastropoda Neritidae
	[ "16120000", { score_orig:6,  score_rev:6.3,       score_riffle:2.1,       score_riffle_pool:4.7,       score_pool:7.1       }], // Gastropoda Viviparidae
	[ "16130000", { score_orig:3,  score_rev:2.8,       score_riffle:2.5,       score_riffle_pool:2.5,       score_pool:3.2       }], // Gastropoda Valvatidae
	[ "16140000", { score_orig:3,  score_rev:3.9,       score_riffle:4.1,       score_riffle_pool:3.9,       score_pool:3.7       }], // Gastropoda Hydrobiidae
	[ "16220000", { score_orig:3,  score_rev:3,         score_riffle:3.2,       score_riffle_pool:3.1,       score_pool:2.8       }], // Gastropoda Lymnaeidae
	[ "16210000", { score_orig:3,  score_rev:1.8,       score_riffle:0.9,       score_riffle_pool:1.5,       score_pool:2.8       }], // Gastropoda Physidae
	[ "16230000", { score_orig:3,  score_rev:2.9,       score_riffle:2.6,       score_riffle_pool:2.9,       score_pool:3.1       }], // Gastropoda Planorbidae
	[ "17120000", { score_orig:6,  score_rev:5.2,       score_riffle:4.7,       score_riffle_pool:4.8,       score_pool:5.5       }], // Bivalvia Unionidae
	[ "17130000", { score_orig:3,  score_rev:3.6,       score_riffle:3.7,       score_riffle_pool:3.7,       score_pool:3.4       }], // Bivalvia Sphaeriidae
	[ "20000000", { score_orig:1,  score_rev:3.5,       score_riffle:3.9,       score_riffle_pool:3.2,       score_pool:2.5       }], // Oligochaeta
	[ "22110000", { score_orig:4,  score_rev:5,         score_riffle:4.5,       score_riffle_pool:5.4,       score_pool:5.2       }], // Hirudinea Piscicolidae
	[ "22120000", { score_orig:3,  score_rev:3.1,       score_riffle:3,         score_riffle_pool:3.3,       score_pool:2.9       }], // Hirudinea Glossiphoniidae
	[ "22210000", { score_orig:3,  score_rev:0,         score_riffle:0.3,       score_riffle_pool:-0.3,      score_pool:undefined }], // Hirudinea Hirudinidae
	[ "22230000", { score_orig:3,  score_rev:2.8,       score_riffle:2.8,       score_riffle_pool:2.8,       score_pool:2.6       }], // Hirudinea Erpobdellidae
	[ "36110000", { score_orig:3,  score_rev:2.1,       score_riffle:1.5,       score_riffle_pool:2.4,       score_pool:2.7       }], // Isopoda Asellidae
	[ "37110000", { score_orig:6,  score_rev:6.1,       score_riffle:5.4,       score_riffle_pool:5.1,       score_pool:6.5       }], // Amphipoda Corophiidae
	[ "37140000", { score_orig:6,  score_rev:4.5,       score_riffle:4.7,       score_riffle_pool:4.3,       score_pool:4.3       }], // Amphipoda Gammaridae
	[ "34310000", { score_orig:8,  score_rev:9,         score_riffle:8.8,       score_riffle_pool:9,         score_pool:11.2      }], // Decapoda Astacidae
	[ "40110000", { score_orig:10, score_rev:11,        score_riffle:11,        score_riffle_pool:undefined, score_pool:undefined }], // Ephemeroptera Siphlonuridae
	[ "40120000", { score_orig:4,  score_rev:5.3,       score_riffle:5.5,       score_riffle_pool:4.8,       score_pool:5.1       }], // Ephemeroptera Baetidae
	[ "40130000", { score_orig:10, score_rev:9.8,       score_riffle:9.7,       score_riffle_pool:10.7,      score_pool:13        }], // Ephemeroptera Heptageniidae
	[ "40210000", { score_orig:10, score_rev:8.9,       score_riffle:8.7,       score_riffle_pool:8.9,       score_pool:9.9       }], // Ephemeroptera Leptophlebiidae
	[ "40410000", { score_orig:10, score_rev:7.7,       score_riffle:7.6,       score_riffle_pool:8.1,       score_pool:9.3       }], // Ephemeroptera Ephemerellidae
	[ "40310000", { score_orig:10, score_rev:7.6,       score_riffle:7.6,       score_riffle_pool:undefined, score_pool:undefined }], // Ephemeroptera Potamanthidae
	[ "40320000", { score_orig:10, score_rev:9.3,       score_riffle:9,         score_riffle_pool:9.2,       score_pool:11        }], // Ephemeroptera Ephemeridae
	[ "40510000", { score_orig:7,  score_rev:7.1,       score_riffle:7.2,       score_riffle_pool:7.3,       score_pool:6.4       }], // Ephemeroptera Caenidae
	[ "41110000", { score_orig:10, score_rev:10.8,      score_riffle:10.7,      score_riffle_pool:12.1,      score_pool:undefined }], // Plecoptera Taeniopterygidae
	[ "41120000", { score_orig:7,  score_rev:9.1,       score_riffle:9.2,       score_riffle_pool:8.5,       score_pool:8.8       }], // Plecoptera Nemouridae
	[ "41130000", { score_orig:10, score_rev:9.9,       score_riffle:9.8,       score_riffle_pool:10.4,      score_pool:11.2      }], // Plecoptera Leuctridae
	[ "41140000", { score_orig:10, score_rev:10,        score_riffle:10.1,      score_riffle_pool:undefined, score_pool:undefined }], // Plecoptera Capniidae
	[ "41210000", { score_orig:10, score_rev:10.7,      score_riffle:10.8,      score_riffle_pool:10.7,      score_pool:10.9      }], // Plecoptera Perlodidae
	[ "41220000", { score_orig:10, score_rev:12.5,      score_riffle:12.5,      score_riffle_pool:12.2,      score_pool:undefined }], // Plecoptera Perlidae
	[ "41230000", { score_orig:10, score_rev:12.4,      score_riffle:12.5,      score_riffle_pool:12.1,      score_pool:undefined }], // Plecoptera Chloroperlidae
	[ "42110000", { score_orig:6,  score_rev:5.1,       score_riffle:3.6,       score_riffle_pool:5.4,       score_pool:5.7       }], // Odonata Platycnemididae
	[ "42120000", { score_orig:6,  score_rev:3.5,       score_riffle:2.6,       score_riffle_pool:3.3,       score_pool:3.8       }], // Odonata Coenagrionidae
	[ "42130000", { score_orig:8,  score_rev:5.4,       score_riffle:undefined, score_riffle_pool:undefined, score_pool:5.4       }], // Odonata Lestidae
	[ "42140000", { score_orig:8,  score_rev:6.4,       score_riffle:6,         score_riffle_pool:6.1,       score_pool:7.6       }], // Odonata Calopterygidae
	[ "42210000", { score_orig:8,  score_rev:undefined, score_riffle:undefined, score_riffle_pool:undefined, score_pool:undefined }], // Odonata Gomphidae
	[ "42220000", { score_orig:8,  score_rev:8.6,       score_riffle:9.5,       score_riffle_pool:6.5,       score_pool:7.6       }], // Odonata Cordulegastridae
	[ "42230000", { score_orig:8,  score_rev:6.1,       score_riffle:7,         score_riffle_pool:6.9,       score_pool:5.7       }], // Odonata Aeshnidae
	[ "42240000", { score_orig:8,  score_rev:undefined, score_riffle:undefined, score_riffle_pool:undefined, score_pool:undefined }], // Odonata Corduliidae
	[ "42250000", { score_orig:8,  score_rev:5,         score_riffle:undefined, score_riffle_pool:undefined, score_pool:5         }], // Odonata Libellulidae
	[ "43210000", { score_orig:5,  score_rev:5.3,       score_riffle:5,         score_riffle_pool:6.2,       score_pool:4.9       }], // Hemiptera Hydrometridae
	[ "43230000", { score_orig:5,  score_rev:4.7,       score_riffle:4.5,       score_riffle_pool:5,         score_pool:4.7       }], // Hemiptera Gerridae
	[ "43310000", { score_orig:5,  score_rev:4.3,       score_riffle:4.1,       score_riffle_pool:4.2,       score_pool:4.5       }], // Hemiptera Nepidae
	[ "43410000", { score_orig:5,  score_rev:4.3,       score_riffle:undefined, score_riffle_pool:undefined, score_pool:4.3       }], // Hemiptera Naucoridae
	[ "43420000", { score_orig:10, score_rev:8.9,       score_riffle:8.4,       score_riffle_pool:9.5,       score_pool:11.7      }], // Hemiptera Aphelocheiridae
	[ "43510000", { score_orig:5,  score_rev:3.8,       score_riffle:1.8,       score_riffle_pool:3.4,       score_pool:4.4       }], // Hemiptera Notonectidae
	[ "43520000", { score_orig:5,  score_rev:3.9,       score_riffle:undefined, score_riffle_pool:undefined, score_pool:3.9       }], // Hemiptera Pleidae
	[ "43610000", { score_orig:5,  score_rev:3.7,       score_riffle:3.6,       score_riffle_pool:3.5,       score_pool:3.9       }], // Hemiptera Corixidae
	[ "45110000", { score_orig:5,  score_rev:4,         score_riffle:3.7,       score_riffle_pool:4.2,       score_pool:4.3       }], // Coleoptera Haliplidae
	[ "45120000", { score_orig:5,  score_rev:2.6,       score_riffle:5.6,       score_riffle_pool:-0.8,      score_pool:2.6       }], // Coleoptera Paelobiidae
	[ "45140000", { score_orig:5,  score_rev:4.8,       score_riffle:5.2,       score_riffle_pool:4.3,       score_pool:4.2       }], // Coleoptera Dytiscidae
	[ "45150000", { score_orig:5,  score_rev:7.8,       score_riffle:8.1,       score_riffle_pool:7.4,       score_pool:6.8       }], // Coleoptera Gyrinidae
	[ "45350000", { score_orig:5,  score_rev:5.1,       score_riffle:5.5,       score_riffle_pool:4.5,       score_pool:3.9       }], // Coleoptera Hydrophilidae
	[ "45510000", { score_orig:5,  score_rev:6.5,       score_riffle:6.9,       score_riffle_pool:6.2,       score_pool:5.8       }], // Coleoptera Scirtidae
	[ "45620000", { score_orig:5,  score_rev:6.5,       score_riffle:6.5,       score_riffle_pool:undefined, score_pool:undefined }], // Coleoptera Dryopidae
	[ "45630000", { score_orig:5,  score_rev:6.4,       score_riffle:6.5,       score_riffle_pool:6.1,       score_pool:6.5       }], // Coleoptera Elmidae
	[ "46110000", { score_orig:4,  score_rev:4.5,       score_riffle:4.7,       score_riffle_pool:4.7,       score_pool:4.3       }], // Megaloptera Sialidae
	[ "48110000", { score_orig:7,  score_rev:8.3,       score_riffle:8.2,       score_riffle_pool:8.6,       score_pool:9.6       }], // Trichoptera Rhyacophilidae
	[ "48210000", { score_orig:8,  score_rev:10.6,      score_riffle:10.7,      score_riffle_pool:9.8,       score_pool:undefined }], // Trichoptera Philopotamidae
	[ "48240000", { score_orig:7,  score_rev:8.6,       score_riffle:8.6,       score_riffle_pool:8.4,       score_pool:8.7       }], // Trichoptera Polycentropodidae
	[ "48220000", { score_orig:8,  score_rev:6.9,       score_riffle:6.4,       score_riffle_pool:7.4,       score_pool:8         }], // Trichoptera Psychomyiidae
	[ "48250000", { score_orig:5,  score_rev:6.6,       score_riffle:6.6,       score_riffle_pool:6.5,       score_pool:7.2       }], // Trichoptera Hydropsychidae
	[ "48130000", { score_orig:6,  score_rev:6.7,       score_riffle:6.7,       score_riffle_pool:6.8,       score_pool:6.5       }], // Trichoptera Hydroptilidae
	[ "48310000", { score_orig:10, score_rev:7,         score_riffle:6.6,       score_riffle_pool:5.4,       score_pool:8         }], // Trichoptera Phryganeidae
	[ "48340000", { score_orig:7,  score_rev:6.9,       score_riffle:7.1,       score_riffle_pool:6.5,       score_pool:6.6       }], // Trichoptera Limnephilidae
	[ "48390000", { score_orig:10, score_rev:8.9,       score_riffle:7.8,       score_riffle_pool:8.1,       score_pool:10        }], // Trichoptera Molannidae
	[ "48360000", { score_orig:10, score_rev:9,         score_riffle:8.3,       score_riffle_pool:7.8,       score_pool:10        }], // Trichoptera Beraeidae
	[ "48380000", { score_orig:10, score_rev:10.9,      score_riffle:10.8,      score_riffle_pool:11.4,      score_pool:11.7      }], // Trichoptera Odontoceridae
	[ "483A0000", { score_orig:10, score_rev:7.8,       score_riffle:7.8,       score_riffle_pool:7.7,       score_pool:8.1       }], // Trichoptera Leptoceridae
	[ "48350000", { score_orig:10, score_rev:9.9,       score_riffle:9.8,       score_riffle_pool:9.6,       score_pool:12.4      }], // Trichoptera Goeridae
	[ "48330000", { score_orig:10, score_rev:10.4,      score_riffle:10.3,      score_riffle_pool:10.7,      score_pool:11.6      }], // Trichoptera Lepidostomatidae
	[ "48320000", { score_orig:10, score_rev:9.4,       score_riffle:9.3,       score_riffle_pool:9.7,       score_pool:11        }], // Trichoptera Brachycentridae
	[ "48370000", { score_orig:10, score_rev:9.2,       score_riffle:9.1,       score_riffle_pool:9.3,       score_pool:10.3      }], // Trichoptera Sericostomatidae
	[ "50110000", { score_orig:5,  score_rev:5.5,       score_riffle:5.6,       score_riffle_pool:5,         score_pool:5.1       }], // Diptera Tipulidae
	[ "50400000", { score_orig:2,  score_rev:3.7,       score_riffle:4.1,       score_riffle_pool:3.4,       score_pool:2.8       }], // Diptera Chironomidae
	[ "50360000", { score_orig:5,  score_rev:5.8,       score_riffle:5.9,       score_riffle_pool:5.1,       score_pool:5.5       }], // Diptera Simuliidae
])

export const scoresAwic = new Map<TaxonCode, ScoreAwic>([
	[ "50310100", 10], // Diptera Dixidae Dixa
	[ "41220101", 10], // Plecoptera Perlidae Dinocras cephalotes
	[ "40120201", 9 ], // Ephemeroptera Baetidae Centroptilum luteolum
	[ "36110101", 9 ], // Isopoda Asellidae Asellus aquaticus
	[ "40120501", 9 ], // Ephemeroptera Baetidae Alainites muticus
	[ "40320101", 9 ], // Ephemeroptera Ephemeridae Ephemera danica
	[ "22120401", 9 ], // Hirudinea Glossiphoniidae Glossiphonia complanata
	[ "48250206", 9 ], // Trichoptera Hydropsychidae Hydropsyche instabilis
	[ "40210202", 9 ], // Ephemeroptera Leptophlebiidae Paraleptophlebia submarginata
	[ "40210301", 9 ], // Ephemeroptera Leptophlebiidae Habrophlebia fusca
	[ "48330101", 9 ], // Trichoptera Lepidostomatidae Crunoecia irrorata
	[ "48210200", 9 ], // Trichoptera Philopotamidae Wormaldia
	[ "501103A5", 8 ], // Diptera Tipulidae Tipula (Yamatotipula) montium
	[ "41220201", 8 ], // Plecoptera Perlidae Perla bipunctata
	[ "37140206", 8 ], // Amphipoda Gammaridae Gammarus pulex
	[ "22120701", 8 ], // Hirudinea Glossiphoniidae Helobdella stagnalis
	[ "48380101", 8 ], // Trichoptera Odontoceridae Odontocerum albicorne
	[ "40130502", 8 ], // Ephemeroptera Heptageniidae Electrogena lateralis
	[ "483A0103", 8 ], // Trichoptera Leptoceridae Athripsodes bilineatus
	[ "48120200", 8 ], // Trichoptera Glossosomatidae Agapetus
	[ "48210101", 8 ], // Trichoptera Philopotamidae Philopotamus montanus
	[ "45630201", 8 ], // Coleoptera Elmidae Esolus parallelepipedus
	[ "40510205", 8 ], // Ephemeroptera Caenidae Caenis robusta
	[ "48120100", 8 ], // Trichoptera Glossosomatidae Glossosoma
	[ "40130400", 8 ], // Ephemeroptera Heptageniidae Ecdyonurus
	[ "40130100", 8 ], // Ephemeroptera Heptageniidae Rhithrogena
	[ "40120107", 8 ], // Ephemeroptera Baetidae Baetis rhodani
	[ "48220100", 8 ], // Trichoptera Psychomyiidae Lype
	[ "16231101", 8 ], // Gastropoda Planorbidae Ancylus fluviatilis
	[ "41130102", 8 ], // Plecoptera Leuctridae Leuctra geniculata
	[ "40120702", 8 ], // Ephemeroptera Baetidae Nigrobaetis niger
	[ "48350202", 8 ], // Trichoptera Goeridae Silo pallipes
	[ "483A0400", 8 ], // Trichoptera Leptoceridae Mystacides
	[ "16140301", 7 ], // Gastropoda Hydrobiidae Potamopyrgus antipodarum
	[ "45410202", 7 ], // Coleoptera Hydraenidae Hydraena gracilis
	[ "05110201", 7 ], // Tricladida Planariidae Polycelis felina
	[ "40410201", 7 ], // Ephemeroptera Ephemerellidae Serratella ignita
	[ "40510204", 7 ], // Ephemeroptera Caenidae Caenis rivulorum
	[ "17130200", 7 ], // Bivalvia Sphaeriidae Pisidium
	[ "50350000", 7 ], // Diptera Ceratopogonidae
	[ "41210201", 7 ], // Plecoptera Perlodidae Perlodes microcephalus
	[ "45510000", 7 ], // Coleoptera Scirtidae
	[ "40120108", 7 ], // Ephemeroptera Baetidae Baetis scambus
	[ "48110102", 7 ], // Trichoptera Rhyacophilidae Rhyacophila munda
	[ "48370201", 7 ], // Trichoptera Sericostomatidae Sericostoma personatum
	[ "24000000", 7 ], // Hydracarina
	[ "22230101", 7 ], // Hirudinea Erpobdellidae Erpobdella octoculata
	[ "48250301", 7 ], // Trichoptera Hydropsychidae Diplectrona felix
	[ "41130101", 7 ], // Plecoptera Leuctridae Leuctra fusca
	[ "45630101", 7 ], // Coleoptera Elmidae Elmis aenea
	[ "40120111", 7 ], // Ephemeroptera Baetidae Baetis vernus
	[ "48330301", 6 ], // Trichoptera Lepidostomatidae Lepidostoma hirtum
	[ "45630301", 6 ], // Coleoptera Elmidae Limnius volckmari
	[ "45150000", 6 ], // Coleoptera Gyrinidae
	[ "50710000", 6 ], // Diptera Empididae
	[ "40130204", 6 ], // Ephemeroptera Heptageniidae Heptagenia sulphurea
	[ "50640100", 6 ], // Diptera Athericidae Atherix
	[ "48250207", 6 ], // Trichoptera Hydropsychidae Hydropsyche pellucidula
	[ "48250209", 6 ], // Trichoptera Hydropsychidae Hydropsyche siltalai
	[ "45140000", 6 ], // Coleoptera Dytiscidae
	[ "37130101", 6 ], // Amphipoda Crangonyctidae Crangonyx pseudogracilis
	[ "50630Z00", 6 ], // Diptera Tabanidae Tabanus group
	[ "50130000", 6 ], // Diptera Limoniidaek
	[ "41120103", 6 ], // Plecoptera Nemouridae Protonemura praecox
	[ "41110302", 6 ], // Plecoptera Taeniopterygidae Brachyptera risi
	[ "41210401", 5 ], // Plecoptera Perlodidae Isoperla grammatica
	[ "20000000", 5 ], // Oligochaeta
	[ "48340000", 5 ], // Trichoptera Limnephilidae
	[ "48130000", 5 ], // Trichoptera Hydroptilidae
	[ "45630600", 5 ], // Coleoptera Elmidae Oulimnius
	[ "05110401", 5 ], // Tricladida Planariidae Crenobia alpina
	[ "46110102", 5 ], // Megaloptera Sialidae Sialis lutaria
	[ "50400000", 5 ], // Diptera Chironomidae
	[ "42220101", 5 ], // Odonata Cordulegastridae Cordulegaster boltonii
	[ "41230103", 5 ], // Plecoptera Chloroperlidae Chloroperla tripunctata
	[ "483A0905", 5 ], // Trichoptera Leptoceridae Oecetis testacea
	[ "48110101", 5 ], // Trichoptera Rhyacophilidae Rhyacophila dorsalis
	[ "41230301", 5 ], // Plecoptera Chloroperlidae Siphonoperla torrentium
	[ "50360000", 5 ], // Diptera Simuliidae
	[ "41130104", 5 ], // Plecoptera Leuctridae Leuctra inermis
	[ "48240000", 5 ], // Trichoptera Polycentropodidae
	[ "41120400", 5 ], // Plecoptera Nemouridae Nemoura
	[ "41120202", 5 ], // Plecoptera Nemouridae Amphinemura sulcicollis
	[ "41130106", 5 ], // Plecoptera Leuctridae Leuctra nigra
	[ "05110301", 4 ], // Tricladida Planariidae Phagocata vitta
	[ "41120101", 4 ], // Plecoptera Nemouridae Protonemura meyeri
	[ "41130103", 4 ], // Plecoptera Leuctridae Leuctra hippopus
	[ "40210101", 3 ], // Ephemeroptera Leptophlebiidae Leptophlebia marginata
	[ "41210301", 3 ], // Plecoptera Perlodidae Diura bicaudata
	[ "41120301", 1 ], // Plecoptera Nemouridae Nemurella pictetii
])
