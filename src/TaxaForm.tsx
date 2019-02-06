import * as React from 'react';
import { allTaxa, Taxa, TaxaCode } from './alltaxa';
import {
    ScoreAwic,
    ScoreBmwp,
    ScoreCci,
    ScoreDehli,
    ScoreInfo,
    ScoreLife,
    ScorePsi,
    scoresAwic,
    scoresBmwp,
    scoresCci,
    scoresCciCommunity,
    scoresDehli,
    scoresLifeFamily,
    scoresLifeGroups,
    scoresLifeSpecies,
    scoresPsiFamily,
    scoresPsiGroups,
    scoresPsiSpecies,
    scoresWhpt,
    ScoreWhpt,
} from './scores';

interface ScoreCount {
    count: number,
    score: number,
}
const zeroScoreCount:ScoreCount = {count:0, score:0};

// could also do via scoringEquivalent()
interface ScoringTaxon {
    count: number,
    info:  ScoreInfo,
    code:  TaxaCode,
    // children: ScoringTaxon[],
}

interface FoundTaxon {
    count:number,
    code: TaxaCode,
}


const cmp = <T extends {}>(a:T, b:T) => (
    a < b ? -1 :
    a > b ?  1 :
    0
);  

// TODO: enum?
type TaxonLvl = 'major_group' | 'family' | 'genus' | 'species';

// NOTE: these strings can be used as keys for the object values in allTaxa (as shown below)
const maybeTaxonLevel = (taxon: TaxaCode): TaxonLvl | undefined => (
    (taxon.length === 8) ? 
        (taxon[6] !== '0' || taxon[7] !== '0') ? 'species'     :
        (taxon[4] !== '0' || taxon[5] !== '0') ? 'genus'       :
        (taxon[2] !== '0' || taxon[3] !== '0') ? 'family'      :
        (taxon[0] !== '0' || taxon[1] !== '0') ? 'major_group' :
        undefined
    : undefined
)
const taxonLevel = (taxon: TaxaCode): TaxonLvl => ( maybeTaxonLevel(taxon) as TaxonLvl ) 
const taxonKeyName = (taxon: TaxaCode): string => {
    const type = taxonLevel(taxon);
    const tx: Taxa =  allTaxa.get(taxon) as Taxa;
    return tx[type];
}

const taxonFullName = (taxon: TaxaCode): string => {
    const lvl = taxonLevel(taxon);
    const tx = allTaxa.get(taxon) as Taxa;
    return (
        lvl === 'species'     ? `${tx.major_group} ${tx.family} ${tx.genus} ${tx.species}` :
        lvl === 'genus'       ? `${tx.major_group} ${tx.family} ${tx.genus}` : 
        lvl === 'family'      ? `${tx.major_group} ${tx.family}` : 
      /*lvl === 'major_group'*/ `${tx.major_group}`
    );
}

const taxonGetCodeForLevel = (taxon: TaxaCode, lvl: TaxonLvl) => {
    const offset = (
        lvl === 'species'     ? 8 :
        lvl === 'genus'       ? 6 :
        lvl === 'family'      ? 4 :
      /*lvl === 'major_group'*/ 2);

    if (taxonLevel(taxon) === lvl)
    {   return taxon;   }
    else if (taxon[offset] !== '0' || taxon[offset+1] !== '0') {
        const taxonChars = taxon.split('');
        let newTaxon = '';
        let i = 0;
        for(; i < offset; ++i)
        {   newTaxon += taxonChars[i];   }
        for(; i < 8; ++i)
        {   newTaxon += '0';   }
        // tslint:disable-next-line:no-console
        console.assert(newTaxon.length === 8)
        return newTaxon;
    }
    else
    {   return undefined;   }
}

const TaxonName: React.SFC<{ taxonCode: TaxaCode }> = (props) => {
    const lvl = taxonLevel(props.taxonCode)
    const tx = allTaxa.get(props.taxonCode) as Taxa;
    return <span>{
        lvl === 'species'     ? <span>{`${tx.major_group} ${tx.family}`} <em>{tx.genus} {tx.species}</em></span> :
        lvl === 'genus'       ? <span>{`${tx.major_group} ${tx.family}`} <em>{tx.genus}</em></span> : 
        lvl === 'family'      ? `${tx.major_group} ${tx.family}` : 
      /*lvl === 'major_group'*/ `${tx.major_group}`
    }</span>
}

const TaxaAutocompleteOptions: React.SFC<{ taxaMatching: TaxaCode[], iSelect: number }> = (props) => {
    const listTaxon = (code:TaxaCode) => (
        <span key={code} >
            <TaxonName taxonCode={code} />
        </span>
    );

    const listTaxa = (taxa: TaxaCode[]) => (taxa.map(taxon => <li key={taxon}>{listTaxon(taxon)}</li>));

    const taxaBefore  = props.taxaMatching.slice(0, props.iSelect);   // \
    const selectTaxon = props.taxaMatching[props.iSelect];            //  |- could be useful utility if common pattern
    const taxaAfter   = props.taxaMatching.slice(props.iSelect + 1);  // /   (or may already exist)
    return (
        <ul style={{listStyleType:'none'}}>
            {listTaxa(taxaBefore)}
            <li style={{backgroundColor:'#226', color:'white', fontWeight:'bold'}}>{listTaxon(selectTaxon)}</li>
            {listTaxa(taxaAfter)}
        </ul>
    )
}

const div0 = (dividend:number, divisor:number):number => ((divisor) ? dividend /divisor : 0);

// tslint:disable-next-line:one-variable-per-declaration
const TaxonFound: React.SFC<{taxon: FoundTaxon, addToCount: (add:number) => void  }> = (props) => {
    const dec = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { props.addToCount(-1) }
    const inc = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { props.addToCount( 1) }

    const bmwp    = scoresBmwp.get(taxonKeyName(props.taxon.code));
    const whpt    = calcSingleWhpt (props.taxon);
    const psiFam  = calcSinglePsi  (props.taxon, scoresPsiFamily);
    const psiSpc  = calcSinglePsi  (props.taxon, scoresPsiSpecies);
    const cci     = calcSingleCci  (props.taxon);
    const lifeFam = calcSingleLife (props.taxon, scoresLifeFamily);
    const lifeSpc = calcSingleLife (props.taxon, scoresLifeSpecies);
    const awic    = calcSingleAwic (props.taxon);
    const dehli   = calcSingleDehli(props.taxon);

    return (
        <tr>
            <td><TaxonName taxonCode={props.taxon.code} /></td>
            <td>
                <button onClick={dec}>-</button>
                <button onClick={inc}>+</button>
                {props.taxon.count}
            </td>
            <td>{ (bmwp)                  ? bmwp.score_orig                    : '-' }</td>
            <td>{ (whpt    !== undefined) ? whpt                               : '-' }</td>
            <td>{ (psiFam  !== undefined) ? `${psiFam.score} (${psiFam.fssr})` : '-' }</td>
            <td>{ (psiSpc  !== undefined) ? `${psiSpc.score} (${psiSpc.fssr})` : '-' }</td>
            <td>{ (cci     !== undefined) ? cci                                : '-' }</td>
            <td>{ (lifeFam !== undefined) ? lifeFam                            : '-' }</td>
            <td>{ (lifeSpc !== undefined) ? lifeSpc                            : '-' }</td>
            <td>{ (awic    !== undefined) ? awic                               : '-' }</td>
            <td>{ (dehli   !== undefined) ? dehli                              : '-' }</td>
        </tr>
    )
}


// tslint:disable-next-line:one-variable-per-declaration
const TaxaFoundList: React.SFC<{foundTaxa:FoundTaxon[], addToCount: (add:number, i:number) => void }> = (props) => (
    <table>
        <thead>
            <tr>
                <th>Full name</th>
                <th>Count</th>
                <th>BMWP</th>
                <th>WHPT</th>
                <th>PSI<sub>family</sub></th>
                <th>PSI<sub>species</sub></th>
                <th>CCI</th>
                <th>LIFE<sub>family</sub></th>
                <th>LIFE<sub>species</sub></th>
                <th>AWIC</th>
                <th>DEHLI</th>
            </tr>
        </thead>
        <tbody>
            {
                props.foundTaxa.map((taxon, i) => {
                    const addToIndex = (add: number) => (props.addToCount(add, i));
                    return <TaxonFound key={i} taxon={taxon} addToCount={addToIndex} />;
                })
            }
        </tbody>
    </table>
)


const nextTaxonLevel = (lvl: 'major_group' | 'family' | 'genus' | 'species' | undefined): 'major_group' | 'family' | 'genus' | 'species' | undefined => (
    lvl === 'species' ? 'genus' :
    lvl === 'genus'   ? 'family' :
    lvl === 'family'  ? 'major_group' :
    undefined
)

// TODO: fix double scoring when family added and species in that family added
const taxonFromMapAtAnyLevel = (taxon: FoundTaxon, scores: Map<any,any>): {info:ScoreInfo, lvl:TaxonLvl} | undefined => {
    const tx = allTaxa.get(taxon.code);
    for(let lvl:TaxonLvl | undefined = taxonLevel(taxon.code); tx && lvl; lvl = nextTaxonLevel(lvl)) {
        const name = tx[lvl];
        const info = scores.get(name);
        if (info)
        {   return { info, lvl };    }
    }
    return undefined;
}

// 1-9    => 1
// 10-99  => 2
// 100-99 => 3
// ...
const logAbundance = (count: number): number => {
    let result = 0;
    while(count > 0) { 
        count = Math.floor(count/10);
        ++result;
    }
    return result;
}

// 1-10     => 1
// 11-100   => 2
// 101-1000 => 
// ...
const logAbundanceWhpt = (count: number): number => {
    return logAbundance(count > 1 ? count - 1 : count)
}

// TODO: separate to species/family calculation
const calcSingleAwic = (foundTaxon:FoundTaxon): number | undefined => {
    const awic = taxonFromMapAtAnyLevel(foundTaxon, scoresAwic);
    return (awic && foundTaxon.count)
        ? (awic.info as ScoreAwic).score
        : undefined;
}

const calcSingleBmwp = (foundTaxon:FoundTaxon): number | undefined => {
    const bmwp = taxonFromMapAtAnyLevel(foundTaxon, scoresBmwp);
    return (bmwp)
        ? (bmwp.info as ScoreBmwp).score_orig
        : undefined;
}

const calcSingleCci = (foundTaxon:FoundTaxon): number | undefined => {
    const cci = taxonFromMapAtAnyLevel(foundTaxon, scoresCci);
    return (cci && foundTaxon.count)
        ? (cci.info as ScoreCci).score
        : undefined;
}

// TODO: account for exceptions
const calcSingleDehli = (foundTaxon:FoundTaxon): number | undefined => {
    const dehli = taxonFromMapAtAnyLevel(foundTaxon, scoresDehli);
    return (dehli && foundTaxon.count)
        ? (dehli.info as ScoreDehli).score
        : undefined;    
}
 
const calcSingleLife = (foundTaxon:FoundTaxon, scoresTable:Map<string, ScoreLife>): number | undefined => {
    const life = taxonFromMapAtAnyLevel(foundTaxon, scoresTable);
    if (life && foundTaxon.count) {
        const iScore = logAbundance(foundTaxon.count) - 1;
        const flow = (life.info as ScoreLife).flow
        return scoresLifeGroups[flow].scores[iScore];
    }
    else
    {   return undefined;    }
}

interface PartialScorePSI {
    AB: number,
    AD: number,
}

interface SingleScorePSI {
    fssr: string,
    score: number,
}

const calcSinglePsi = (foundTaxon:FoundTaxon, scores:Map<string, ScorePsi>): SingleScorePSI | undefined => {
    const psi = taxonFromMapAtAnyLevel(foundTaxon, scores);
    if(! (psi && foundTaxon.count) )
    {   return undefined;    }
    else {
        const fssr = (psi.info as ScorePsi).fssr;
        const iScore = logAbundance(foundTaxon.count) - 1;
        const score = scoresPsiGroups[fssr].scores[iScore]
        return { score, fssr }
    }
}

const calcSingleWhpt = (foundTaxon:FoundTaxon): number | undefined => {
    const whpt = taxonFromMapAtAnyLevel(foundTaxon, scoresWhpt);
    const iScore = logAbundanceWhpt(foundTaxon.count) - 1;
    return (whpt && iScore >= 0)
        ? (whpt.info as ScoreWhpt).scores[iScore]
        : undefined;
}

const psiSingleToPartial = (single: SingleScorePSI | undefined): PartialScorePSI | undefined => (
    (single)
    ? {
        AB: (single.fssr === 'A' || single.fssr === 'B')
            ? single.score
            : 0,
        AD: single.score
    }
    : undefined
)

const scoringTaxaFromFound = (foundTaxa: FoundTaxon[], scores:Map<string,ScoreInfo>): ScoringTaxon[] => {
    const scoringTaxa = foundTaxa.reduce((taxa, taxon: FoundTaxon) => {
        const tx = taxonFromMapAtAnyLevel(taxon, scores);
        if (tx) { // taxon scores for this index
            const scoringLvl  = tx.lvl;
            const scoringCode = taxonGetCodeForLevel(taxon.code, scoringLvl) as TaxaCode;
            const info        = tx.info;

            const currentInfoForTaxon = taxa.get(scoringCode);
            // tslint:disable-next-line:no-console
            console.assert(!currentInfoForTaxon || info === currentInfoForTaxon.info);

            const scoringTaxon = currentInfoForTaxon || { code: taxon.code, count: 0, info };
            ++scoringTaxon.count;
            taxa.set(scoringCode, scoringTaxon);
        }
        return taxa;
    }, new Map<TaxaCode, ScoringTaxon>())

    return Array.from(scoringTaxa.values());
}

const calcScore = <T extends {}>(foundTaxa: FoundTaxon[], scores: Map<string, ScoreInfo>, reducer: (acc: T, t: FoundTaxon) => T, init:T) : T => {
    const scoringTaxa = scoringTaxaFromFound(foundTaxa, scores);
    return scoringTaxa.reduce(reducer, init);
}

const calcAspt = (foundTaxa:FoundTaxon[]): number => {
    const bmwp = calcBmwp(foundTaxa);
    return div0(bmwp.score, bmwp.count);
}

const calcAwic = (foundTaxa: FoundTaxon[]): ScoreCount => (
    calcScore(foundTaxa, scoresAwic, (acc, taxon) => {
        const awic = calcSingleAwic(taxon);
        return (awic !== undefined)
            ? { score:acc.score + awic, count:acc.count + 1 }
            : acc;
    }, zeroScoreCount)
)

const calcBmwp = (foundTaxa: FoundTaxon[]): ScoreCount => calcScore(foundTaxa, scoresBmwp,
    (acc: ScoreCount, taxon: FoundTaxon) => {
        const taxonScore = calcSingleBmwp({ code: taxon.code, count: taxon.count, });
        return (taxonScore)
            ? { score: acc.score + taxonScore, count: acc.count + 1 }
            : acc;
    }, zeroScoreCount);

const calcCci = (foundTaxa: FoundTaxon[]): { score:number, count:number } => {
    const cci = calcScore(foundTaxa, scoresCci, (acc, taxon) => {
        const taxonScore = calcSingleCci(taxon);
        return (taxonScore) ? {
                count: acc.count + 1,
                max: Math.max(taxonScore, acc.max),
                sum: acc.sum + taxonScore,
            } : acc;
    }, { max:0, sum:0, count:0 });

    const scoreConservationMean = div0(cci.sum, cci.count);
    const scoreCommunity = scoresCciCommunity[cci.max];
    const score = scoreConservationMean * scoreCommunity;
    return {score, count: cci.count};
}

const calcDehli = (foundTaxa: FoundTaxon[]): ScoreCount => {
    const partial:ScoreCount = calcScore(foundTaxa, scoresDehli, (acc, taxon) => {
        const dehli = calcSingleDehli(taxon);
        return (dehli !== undefined)
            ? { score:acc.score + dehli, count:acc.count + 1 }
            : acc;
    }, zeroScoreCount);

    return { score: div0(partial.score, partial.count), count: partial.count }
}

const calcLife = (foundTaxa: FoundTaxon[], scores: Map<string, ScoreLife>): ScoreCount => {
    const partial:ScoreCount = calcScore(foundTaxa, scores, (acc, taxon) => {
        const taxonScore = calcSingleLife(taxon, scores);
        return (taxonScore)
            ? { score: acc.score + taxonScore, count: acc.count + 1 }
            : acc;
    }, zeroScoreCount);
    return { score:div0(partial.score, partial.count), count:partial.count };
}

const calcPsi = (foundTaxa: FoundTaxon[], scores: Map<string, ScorePsi>): ScoreCount => {
    const partial = calcScore(foundTaxa, scores, (acc, taxon) => {
        const taxonScore: PartialScorePSI | undefined = psiSingleToPartial(calcSinglePsi(taxon, scores));
        return (taxonScore) ? {
                count: acc.count + 1,
                score: { AB: acc.score.AB + taxonScore.AB,    AD: acc.score.AD + taxonScore.AD },
            } : acc;
    }, { score: { AB: 0, AD: 0 }, count: 0 });

    return { count: partial.count, score: 100 * div0(partial.score.AB, partial.score.AD) }
}

const calcWhpt = (foundTaxa: FoundTaxon[]): ScoreCount => calcScore(foundTaxa, scoresWhpt,
    (acc: ScoreCount, taxon: FoundTaxon) => {
        const taxonScore = calcSingleBmwp({ code: taxon.code, count: taxon.count, });
        return (taxonScore)
            ? { score: acc.score + taxonScore, count: acc.count + 1 }
            : acc;
    }, zeroScoreCount);


// "Standard BMWP/ASPT ratings for habitat rich riffles"
const calcLqiPartialStandard = ( bmwp:number, aspt:number ): {lqiX:number, lqiY:number} => (
    {
        lqiX:
            bmwp >= 151 ? 7 :
            bmwp >= 121 ? 6 :
            bmwp >=  91 ? 5 :
            bmwp >=  61 ? 4 :
            bmwp >=  31 ? 3 :
            bmwp >=  15 ? 2 :
          /*bmwp >=   0*/ 1,
        lqiY:
            aspt >= 6.0 ? 7 :
            aspt >= 5.5 ? 6 :
            aspt >= 5.1 ? 5 :
            aspt >= 4.6 ? 4 :
            aspt >= 3.6 ? 3 :
            aspt >= 2.6 ? 2 :
          /*aspt >= 0.0*/ 1,
    }
)

// "Enhanced BMWP/ASPT ratings for habitat poor riffles and pools"
const calcLqiPartialEnhanced = ( bmwp:number, aspt:number ): {lqiX:number, lqiY:number} => (
    {
        lqiX:
            bmwp >= 121 ? 7 :
            bmwp >= 101 ? 6 :
            bmwp >=  81 ? 5 :
            bmwp >=  51 ? 4 :
            bmwp >=  25 ? 3 :
            bmwp >=  10 ? 2 :
          /*bmwp >=   0*/ 1,
        lqiY:
            aspt >= 5.0 ? 7 :
            aspt >= 4.5 ? 6 :
            aspt >= 4.1 ? 5 :
            aspt >= 3.6 ? 4 :
            aspt >= 3.1 ? 3 :
            aspt >= 2.1 ? 2 :
          /*aspt >= 0.0*/ 1,
    }
)

// bmwp & aspt are ints in the range [1,7]
const calcLqi = ( bmwp:number, aspt:number, type:string): {score:number, index: string, interpretation:string} => {
    const { lqiX, lqiY } = type === "enhanced"
        ? calcLqiPartialEnhanced(bmwp, aspt)
        : calcLqiPartialStandard(bmwp, aspt);
    const score = (lqiX + lqiY) / 2;

    const {index, interpretation} =
        score >= 6.0 ? { index:'A++', interpretation:'Excellent Quality' } :
        score >= 5.5 ? { index:'A+',  interpretation:'Excellent Quality' } :
        score >= 5.0 ? { index:'A',   interpretation:'Excellent Quality' } :
        score >= 4.5 ? { index:'B',   interpretation:'Good Quality' }      :
        score >= 4.0 ? { index:'C',   interpretation:'Good Quality' }      :
        score >= 3.5 ? { index:'D',   interpretation:'Moderate Quality' }  :
        score >= 3.0 ? { index:'E',   interpretation:'Moderate Quality' }  :
        score >= 2.5 ? { index:'F',   interpretation:'Poor Quality' }      :
        score >= 2.0 ? { index:'G',   interpretation:'Poor Quality' }      :
        score >= 1.5 ? { index:'H',   interpretation:'Very Poor Quality' } :
      /*score >= 1.0*/ { index:'I',   interpretation:'Very Poor Quality' };
    return { score, index, interpretation }
}


const TaxaScore: React.SFC<{foundTaxa:FoundTaxon[]}> = (p) => {
    const bmwp    = calcBmwp(p.foundTaxa);
    const aspt    = calcAspt(p.foundTaxa);
    const lqi     = calcLqi(bmwp.score, aspt, "standard");
    const whpt    = calcWhpt(p.foundTaxa)
    const psiFam  = calcPsi(p.foundTaxa, scoresPsiFamily)
    const psiSpc  = calcPsi(p.foundTaxa, scoresPsiSpecies)
    const cci     = calcCci(p.foundTaxa)
    const lifeFam = calcLife(p.foundTaxa, scoresLifeFamily)
    const lifeSpc = calcLife(p.foundTaxa, scoresLifeSpecies)
    const awic    = calcAwic(p.foundTaxa)
    const dehli   = calcDehli(p.foundTaxa)
    return (
        <div>
            <h2>Scores</h2>
            <dl>
                <dt>BMWP                   ({bmwp.count})</dt>   <dd>{bmwp   .score.toFixed(2)}</dd>
                <dt>ASPT                   ({bmwp.count})</dt>   <dd>{aspt         .toFixed(2)}</dd>
                <dt>LQI                    ({bmwp.count})</dt>   <dd>{lqi    .score.toFixed(2)} ({lqi.index} - <em>{lqi.interpretation}</em>)</dd>
                <dt>WHPT                   ({whpt.count})</dt>   <dd>{whpt   .score.toFixed(2)}</dd>
                <dt>PSI<sub>family</sub>   ({psiFam.count})</dt> <dd>{psiFam .score.toFixed(2)}%</dd>
                <dt>PSI<sub>species</sub>  ({psiSpc.count})</dt> <dd>{psiSpc .score.toFixed(2)}%</dd>
                <dt>CCI                    ({cci.count})</dt>    <dd>{cci    .score.toFixed(2)}</dd>
                <dt>LIFE<sub>family</sub>  ({lifeFam.count})</dt><dd>{lifeFam.score.toFixed(2)}</dd>
                <dt>LIFE<sub>species</sub> ({lifeSpc.count})</dt><dd>{lifeSpc.score.toFixed(2)}</dd>
                <dt>AWIC                   ({awic.count})</dt>   <dd>{awic   .score.toFixed(2)}</dd>
                <dt>DEHLI                  ({dehli.count})</dt>  <dd>{dehli  .score.toFixed(2)}</dd>
            </dl>
        </div>
    )
}

const taxonCode = (taxon: string): TaxaCode | undefined => {
    const allTaxaKeys = Array.from(allTaxa.keys());
    return allTaxaKeys.find((key: TaxaCode) => {
        const name = taxonKeyName(key);
        return !!name && name.toLowerCase() === taxon.toLowerCase();
    });
}

// tslint:disable-next-line:max-classes-per-file
class TaxaForm extends React.Component<{}, {
    buttonText: string,
    found: FoundTaxon[],
    iPreselect: number,
    search: string,
    taxaAll: Set<TaxaCode>,
    taxaMatching: TaxaCode[],
}> {
    private searchBox = React.createRef<HTMLInputElement>();
    private taxonRemoveText = 'Remove Taxon';
    private taxonAddText    = 'Add Taxon';


    public componentWillMount() {
        this.setState({
            buttonText: this.taxonAddText,
            found: [] as FoundTaxon[],
            iPreselect: 0,
            search: '',
            taxaMatching: [] as TaxaCode[],
        });
    }

    public componentDidMount() {
        const taxaCodesFor = (names: string[]): TaxaCode[] => (
            names.reduce((acc: TaxaCode[], name: string) => {
                const code = taxonCode(name);
                if (code)
                {   acc.push(code)   }
                else
                // tslint:disable-next-line:no-console
                {   console.assert("Could not find code for taxon!")   }
                return acc;
            }, [])
        );

        // This prevents non-scoring taxa from autocompleting...
        // TODO: is this desired behaviour?
        const taxaAll = new Set([
            ...taxaCodesFor(Array.from(scoresBmwp       .keys())), 
            ...taxaCodesFor(Array.from(scoresLifeFamily .keys())),
            ...taxaCodesFor(Array.from(scoresLifeSpecies.keys())),
            ...taxaCodesFor(Array.from(scoresPsiFamily  .keys())),
            ...taxaCodesFor(Array.from(scoresPsiSpecies .keys())),
            ...taxaCodesFor(Array.from(scoresWhpt       .keys())),
            ...taxaCodesFor(Array.from(scoresCci        .keys())),
            ...taxaCodesFor(Array.from(scoresAwic       .keys())),
            ...taxaCodesFor(Array.from(scoresDehli      .keys())),
        ]);
        this.setState({taxaAll});
        const node = this.searchBox.current;
        if (node)
        {   node.focus()   }
    }

    public render() {

        return (
            <div>
                <TaxaScore foundTaxa={this.state.found} />
                <form onSubmit={this.submitTaxon}>
                    <input
                        ref={this.searchBox}
                        type='text'
                        placeholder='taxon name'
                        id='form-input'
                        value={this.state.search}
                        onChange={this.searchTextUpdate}
                        onKeyDown={this.changeAutoCompleteSelect}
                        onKeyUp={this.setButtonText}
                    />
                    <input type='submit' value={this.state.buttonText} />
                </form>
                {this.state.taxaMatching.length
                    ? <TaxaAutocompleteOptions taxaMatching={this.state.taxaMatching} iSelect={this.state.iPreselect} />
                    : <p>Start entering the name of a scoring taxon</p>
                }
                <TaxaFoundList foundTaxa={this.state.found} addToCount={this.modifyFound} />
            </div>
        );
    }
    
    private setButtonText = (e: React.KeyboardEvent) => {
        const buttonText = e.shiftKey ? this.taxonRemoveText : this.taxonAddText;
        if (this.state.buttonText !== buttonText)
        {   this.setState({buttonText});   }
    }

    private modifyFound = (add: number, i: number) => {
        const found = this.state.found;
        found[i].count += add;
        if (found[i].count === 0) { found.splice(i, 1); }
        this.setState({ found })
    }
    private changeAutoCompleteSelect = (e: React.KeyboardEvent) => {
        const iPreselect = this.state.iPreselect;
        this.setButtonText(e);
        switch (e.key) {
            case "ArrowDown": if (iPreselect < this.state.taxaMatching.length - 1)
            { this.setState({ iPreselect: iPreselect + 1 }); } break;

            case "ArrowUp"  : if(iPreselect > 0)
            { this.setState({ iPreselect: iPreselect - 1 }); } break;
        }
    }

    private searchTextUpdate = (e: React.FormEvent<HTMLInputElement>) => {
        const search = e.currentTarget.value;
        const taxaMatching = (search.length)
            ? Array.from(this.state.taxaAll) .filter(code => taxonFullName(code).toLowerCase() .includes (search.toLowerCase()))
                .sort((a:TaxaCode, b:TaxaCode) => cmp(taxonFullName(a), taxonFullName(b)))
            : [];
        const iPreselect = (taxaMatching.length)
            ? 0
            : -1;
        this.setState({ iPreselect, taxaMatching, search });
    }

    private submitTaxon = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const iPreselect = this.state.iPreselect;
        // NOTE: avoids adding for invalid search
        if (this.state.search.length && iPreselect >= 0) {
            const code    = this.state.taxaMatching[iPreselect];
            const iFound  = this.state.found.findIndex((foundEl: FoundTaxon) => foundEl.code === code);

            const found = this.state.found;
            const shouldRemove = this.state.buttonText === this.taxonRemoveText;
            const isFound = iFound !== -1;
            if (isFound) {
                const inc = shouldRemove ? -1 : 1;
                this.modifyFound(inc, iFound);
            }
            else if (! shouldRemove) {
                found.push({ count: 1, code });
                this.setState({ found });
            }
        }
    }
}

export default TaxaForm
