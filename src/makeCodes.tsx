import * as React from 'react'
import { allTaxa, Taxa, TaxonCode } from './alltaxa'

const awic = [
	{ genus:"Dixa",              species:"",                 score:10 },
	{ genus:"Dinocras",          species:"cephalotes",       score:10 },
	{ genus:"Centroptilum",      species:"luteolum",         score:9  },
	{ genus:"Asellus",           species:"aquaticus",        score:9  },
	// http://www.nhm.ac.uk/our-science/data/uk-species/species/Alainites_muticus.html
	// ALIAS: { genus:"Baetis",            species:"muticus",          score:9  },
	{ genus:"Alainites",         species:"muticus",          score:9  },
	{ genus:"Ephemera",          species:"danica",           score:9  },
	{ genus:"Glossiphonia",      species:"complanata",       score:9  },
	{ genus:"Hydropsyche",       species:"instabilis",       score:9  },
	{ genus:"Paraleptophlebia",  species:"submarginata",     score:9  },
	{ genus:"Habrophlebia",      species:"fusca",            score:9  },
	{ genus:"Crunoecia",         species:"irrorata",         score:9  },
	{ genus:"Wormaldia",         species:"",                 score:9  },
	// NOT CEH: { genus:"Lymnaea",           species:"peregra",          score:9  },
	{ genus:"Tipula",            species:"montium",          score:8  },
	{ genus:"Perla",             species:"bipunctata",       score:8  },
	{ genus:"Gammarus",          species:"pulex",            score:8  },
	{ genus:"Helobdella",        species:"stagnalis",        score:8  },
	{ genus:"Odontocerum",       species:"albicorne",        score:8  },
	// http://www.nhm.ac.uk/our-science/data/uk-species/species/electrogena_lateralis.html
	// ALIAS: { genus:"Heptagenia",        species:"lateralis",        score:8  },
	{ genus:"Electrogena",       species:"lateralis",        score:8  },
	{ genus:"Athripsodes",       species:"bilineatus",       score:8  },
	{ genus:"Agapetus",          species:"",                 score:8  },
	{ genus:"Philopotamus",      species:"montanus",         score:8  },
	{ genus:"Esolus",            species:"parallelepipedus", score:8  },
	{ genus:"Caenis",            species:"robusta",          score:8  },
	{ genus:"Glossosoma",        species:"",                 score:8  },
	{ genus:"Ecdyonurus",        species:"",                 score:8  },
	{ genus:"Rhithrogena",       species:"",                 score:8  },
	{ genus:"Baetis",            species:"rhodani",          score:8  },
	{ genus:"Lype",              species:"",                 score:8  },
	{ genus:"Ancylus",           species:"fluviatilis",      score:8  },
	{ genus:"Leuctra",           species:"geniculata",       score:8  },
	// http://www.nhm.ac.uk/our-science/data/uk-species/species/nigrobaetis_niger.html
	// ALIAS: { genus:"Baetis",            species:"niger",            score:8  },
	{ genus:"Nigrobaetis",       species:"niger",            score:8  },
	{ genus:"Silo",              species:"pallipes",         score:8  },
	{ genus:"Mystacides",        species:"",                 score:8  },
	{ genus:"Potamopyrgus",      species:"antipodarum",      score:7  },
	{ genus:"Hydraena",          species:"gracilis",         score:7  },
	{ genus:"Polycelis",         species:"felina",           score:7  },
	// http://www.nhm.ac.uk/our-science/data/uk-species/species/serratella_ignita.html
	// ALIAS: { genus:"Ephemerella",       species:"ignita",           score:7  },
	{ genus:"Serratella",        species:"ignita",           score:7  },
	{ genus:"Caenis",            species:"rivulorum",        score:7  },
	{ genus:"Pisidium",          species:"",                 score:7  },
	{ genus:"", family:"Ceratopogonidae",  species:"",       score:7  },
	// http://www.nhm.ac.uk/our-science/data/uk-species/species/perlodes_microcephalus.html
	// ALIAS: { genus:"Perlodes",          species:"microcephala",     score:7  },
	{ genus:"Perlodes",          species:"microcephalus",    score:7  },
	{ genus:"", family:"Scirtidae", species:"",              score:7  },
	{ genus:"Baetis",            species:"scambus",          score:7  },
	{ genus:"Rhyacophila",       species:"munda",            score:7  },
	{ genus:"Sericostoma",       species:"personatum",       score:7  },
	{ genus:"", major_group:"Hydracarina", species:"",       score:7  },
	{ genus:"Erpobdella",        species:"octoculata",       score:7  },
	{ genus:"Diplectrona",       species:"felix",            score:7  },
	{ genus:"Leuctra",           species:"fusca",            score:7  },
	{ genus:"Elmis",             species:"aenea",            score:7  },
	{ genus:"Baetis",            species:"vernus",           score:7  },
	{ genus:"Lepidostoma",       species:"hirtum",           score:6  },
	{ genus:"Limnius",           species:"volckmari",        score:6  },
	{ genus:"", family:"Gyrinidae", species:"",              score:6  },
	{ genus:"", family:"Empididae", species:"",              score:6  },
	{ genus:"Heptagenia",        species:"sulphurea",        score:6  },
	{ genus:"Atherix",           species:"",                 score:6  },
	{ genus:"Hydropsyche",       species:"pellucidula",      score:6  },
	{ genus:"Hydropsyche",       species:"siltalai",         score:6  },
	{ genus:"", family:"Dytiscidae",        species:"",           score:6  },
	// ADDITIONAL (from above -) { genus:"", family:"Noteridae",        species:"(incl.",           score:6  },
	{ genus:"Crangonyx",         species:"pseudogracilis",   score:6  },
	{ genus:"Tabanus",           species:"group",            score:6  },
	// https://en.wikipedia.org/wiki/Limoniinae
	// ALIAS: { genus:"Limoniinae",        species:"",                 score:6  },
	{ genus:"", family:"Limoniidae",        species:"",                 score:6  },
	{ genus:"Protonemura",       species:"praecox",          score:6  },
	{ genus:"Brachyptera",       species:"risi",             score:6  },
	{ genus:"Isoperla",          species:"grammatica",       score:5  },
	{ genus:"", major_group:"Oligochaeta",       species:"",                 score:5  },
	{ genus:"", family:"Limnephilidae",     species:"",                 score:5  },
	{ genus:"", family:"Hydroptilidae",     species:"",                 score:5  },
	{ genus:"Oulimnius",         species:"",                 score:5  },
	{ genus:"Crenobia",          species:"alpina",           score:5  },
	{ genus:"Sialis",            species:"lutaria",          score:5  },
	{ genus:"", family:"Chironomidae",      species:"",                 score:5  },
	{ genus:"Cordulegaster",     species:"boltonii",         score:5  },
	{ genus:"Chloroperla",       species:"tripunctata",      score:5  },
	{ genus:"Oecetis",           species:"testacea",         score:5  },
	{ genus:"Rhyacophila",       species:"dorsalis",         score:5  },
	// http://www.nhm.ac.uk/our-science/data/uk-species/species/siphonoperla_torrentium.html
	// ALIAS: { genus:"Chloroperla",       species:"torrentium",       score:5  },
	{ genus:"Siphonoperla",       species:"torrentium",       score:5  },
	{ genus:"", family:"Simuliidae",        species:"",                 score:5  },
	{ genus:"Leuctra",           species:"inermis",          score:5  },
	{ genus:"", family:"Polycentropodidae", species:"",                 score:5  },
	{ genus:"Nemoura",           species:"",                 score:5  },
	{ genus:"Amphinemura",       species:"sulcicollis",      score:5  },
	{ genus:"Leuctra",           species:"nigra",            score:5  },
	{ genus:"Phagocata",         species:"vitta",            score:4  },
	{ genus:"Protonemura",       species:"meyeri",           score:4  },
	{ genus:"Leuctra",           species:"hippopus",         score:4  },
	{ genus:"Leptophlebia",      species:"marginata",        score:3  },
	{ genus:"Diura",             species:"bicaudata",        score:3  },
	// ALIAS: { genus:"Nemurella",         species:"picteti",          score:1  },
	{ genus:"Nemurella",         species:"pictetii",          score:1  },
];

export const AwicCodes: React.SFC<{}> = (props) => {
	const awicCodedTaxa = awic.map((tx) => {
		const codedTaxon = Array.from(allTaxa.entries()) .find((testTx) => {
			if (tx.major_group) {
				return testTx[1].major_group === tx.major_group;
			} 
			else if (tx.family) {
				return testTx[1].family === tx.family;
			}
			else {
				return testTx[1].species === tx.species &&
					testTx[1].genus.split(' ')[0] === tx.genus;
			}
		}) as [TaxonCode, Taxa]

		let awicName = '';
		if (tx.major_group) { awicName += tx.major_group + ' '; }
		if (tx.family) { awicName += tx.family + ' '; }
		awicName += tx.genus + ' ' + tx.species;

		const info = codedTaxon[1];

		const codeName = `${info.major_group} ${info.family} ${info.genus} ${info.species}`;

		return { awic:tx, awicName, code: codedTaxon[0], codeName, info };
	})

	return (<div> <h2>Confirm correct</h2> {
			awicCodedTaxa.map((tx) => {
				return <p key={tx.code}>
					{`${tx.awicName} => ${tx.code} => ${tx.codeName}`}
				</p>
			})
		}

		<h2>New format</h2> {
			awicCodedTaxa.map((tx, i) => (
				<p>{`[ "${tx.code}", { score:${tx.awic.score} } ] // ${tx.codeName}`}</p>
			))
		}
	</div>);
}
