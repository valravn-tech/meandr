import { FoundTaxon, TaxonCode, taxonLevel, TaxonLvl } from './alltaxa';
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
    scoresLifeGroups,
    scoresPsiGroups,
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
    code:  TaxonCode,
    // children: ScoringTaxon[],
}

interface ScoreInfoLvl {
    info:ScoreInfo,
    lvl:TaxonLvl,
}

const div0 = (dividend:number, divisor:number):number => ((divisor) ? dividend /divisor : 0);

const nextTaxonLevel = (lvl: TaxonLvl | undefined): TaxonLvl | undefined => (
    lvl === 'species' ? 'genus' :
    lvl === 'genus'   ? 'family' :
    lvl === 'family'  ? 'major_group' :
    undefined
)

const taxonGetCodeForLevel = (taxon: TaxonCode, lvl: TaxonLvl) => {
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

const taxonFromMapAtAnyLevel = (taxon: FoundTaxon, scores: Map<any,any>): ScoreInfoLvl | undefined => {
    for(let tx = taxon.code, lvl:TaxonLvl | undefined = taxonLevel(tx);
        tx && lvl;
        lvl = nextTaxonLevel(lvl))
    {
        tx = taxonGetCodeForLevel(taxon.code, lvl) as TaxonCode;
        const info = scores.get(tx);
        if (info)
        {   return { info, lvl };    }
        else if (lvl === 'major_group')
        {   break;   }
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
export const calcSingleAwic = (foundTaxon:FoundTaxon): number | undefined => {
    const awic = taxonFromMapAtAnyLevel(foundTaxon, scoresAwic);
    return (awic && foundTaxon.count)
        ? (awic.info as ScoreAwic).score
        : undefined;
}

// TODO: add checkboxes for different score options
export const calcSingleBmwp = (foundTaxon:FoundTaxon): number | undefined => {
    const bmwp = taxonFromMapAtAnyLevel(foundTaxon, scoresBmwp);
    return (bmwp)
        ? (bmwp.info as ScoreBmwp).score_orig
        : undefined;
}

export const calcSingleCci = (foundTaxon:FoundTaxon): number | undefined => {
    const cci = taxonFromMapAtAnyLevel(foundTaxon, scoresCci);
    return (cci && foundTaxon.count)
        ? (cci.info as ScoreCci).score
        : undefined;
}

// TODO: account for exceptions:
//      - Adults only
// NOTE: accounts for:
//      - Elodes/other Scirtidae (by trying most specific first)
//      - Taeniopterigidae
//      - Philopotamidae
//      - Nemouridae
export const calcSingleDehli = (foundTaxon:FoundTaxon): number | undefined => {
    const dehli = taxonFromMapAtAnyLevel(foundTaxon, scoresDehli);
    return (dehli && foundTaxon.count)
        ? (dehli.info as ScoreDehli).score
        : undefined;    
}
 
export const calcSingleLife = (foundTaxon:FoundTaxon, scoresTable:Map<string, ScoreLife>): number | undefined => {
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

export const calcSinglePsi = (foundTaxon:FoundTaxon, scores:Map<string, ScorePsi>): SingleScorePSI | undefined => {
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

export const calcSingleWhpt = (foundTaxon:FoundTaxon): number | undefined => {
    const whpt = taxonFromMapAtAnyLevel(foundTaxon, scoresWhpt);
    const iScore = logAbundanceWhpt(foundTaxon.count) - 1;
    return (whpt && iScore >= 0)
        ? (whpt.info as ScoreWhpt).scores[iScore]
        : undefined;
}

export const psiSingleToPartial = (single: SingleScorePSI | undefined): PartialScorePSI | undefined => (
    (single)
    ? {
        AB: (single.fssr === 'A' || single.fssr === 'B')
            ? single.score
            : 0,
        AD: single.score
    }
    : undefined
)

export const scoringTaxaFromFound = (foundTaxa: FoundTaxon[], scores:Map<string,ScoreInfo>): ScoringTaxon[] => {
    const scoringTaxa = foundTaxa.reduce((taxa, taxon: FoundTaxon) => {
        const tx = taxonFromMapAtAnyLevel(taxon, scores);
        if (tx) { // taxon scores for this index
            const scoringLvl  = tx.lvl;
            const scoringCode = taxonGetCodeForLevel(taxon.code, scoringLvl) as TaxonCode;
            const info        = tx.info;

            const currentInfoForTaxon = taxa.get(scoringCode);
            // tslint:disable-next-line:no-console
            console.assert(!currentInfoForTaxon || info === currentInfoForTaxon.info);

            const scoringTaxon = currentInfoForTaxon || { code: taxon.code, count: 0, info };
            ++scoringTaxon.count;
            taxa.set(scoringCode, scoringTaxon);
        }
        return taxa;
    }, new Map<TaxonCode, ScoringTaxon>())

    return Array.from(scoringTaxa.values());
}

export const calcScore = <T extends {}>(foundTaxa: FoundTaxon[], scores: Map<string, ScoreInfo>, reducer: (acc: T, t: FoundTaxon) => T, init:T) : T => {
    const scoringTaxa = scoringTaxaFromFound(foundTaxa, scores);
    return scoringTaxa.reduce(reducer, init);
}

export const calcAspt = (foundTaxa:FoundTaxon[]): number => {
    const bmwp = calcBmwp(foundTaxa);
    return div0(bmwp.score, bmwp.count);
}

export const calcAwic = (foundTaxa: FoundTaxon[]): ScoreCount => (
    calcScore(foundTaxa, scoresAwic, (acc, taxon) => {
        const awic = calcSingleAwic(taxon);
        return (awic !== undefined)
            ? { score:acc.score + awic, count:acc.count + 1 }
            : acc;
    }, zeroScoreCount)
)

export const calcBmwp = (foundTaxa: FoundTaxon[]): ScoreCount => calcScore(foundTaxa, scoresBmwp,
    (acc: ScoreCount, taxon: FoundTaxon) => {
        const taxonScore = calcSingleBmwp({ code: taxon.code, count: taxon.count, });
        return (taxonScore)
            ? { score: acc.score + taxonScore, count: acc.count + 1 }
            : acc;
    }, zeroScoreCount);

export const calcCci = (foundTaxa: FoundTaxon[]): { score:number, count:number } => {
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

export const calcDehli = (foundTaxa: FoundTaxon[]): ScoreCount => {
    const partial:ScoreCount = calcScore(foundTaxa, scoresDehli, (acc, taxon) => {
        const dehli = calcSingleDehli(taxon);
        return (dehli !== undefined)
            ? { score:acc.score + dehli, count:acc.count + 1 }
            : acc;
    }, zeroScoreCount);

    return { score: div0(partial.score, partial.count), count: partial.count }
}

export const calcLife = (foundTaxa: FoundTaxon[], scores: Map<string, ScoreLife>): ScoreCount => {
    const partial:ScoreCount = calcScore(foundTaxa, scores, (acc, taxon) => {
        const taxonScore = calcSingleLife(taxon, scores);
        return (taxonScore)
            ? { score: acc.score + taxonScore, count: acc.count + 1 }
            : acc;
    }, zeroScoreCount);
    return { score:div0(partial.score, partial.count), count:partial.count };
}

export const calcPsi = (foundTaxa: FoundTaxon[], scores: Map<string, ScorePsi>): ScoreCount => {
    const partial = calcScore(foundTaxa, scores, (acc, taxon) => {
        const taxonScore: PartialScorePSI | undefined = psiSingleToPartial(calcSinglePsi(taxon, scores));
        return (taxonScore) ? {
                count: acc.count + 1,
                score: { AB: acc.score.AB + taxonScore.AB,    AD: acc.score.AD + taxonScore.AD },
            } : acc;
    }, { score: { AB: 0, AD: 0 }, count: 0 });

    return { count: partial.count, score: 100 * div0(partial.score.AB, partial.score.AD) }
}

export const calcWhpt = (foundTaxa: FoundTaxon[]): ScoreCount => calcScore(foundTaxa, scoresWhpt,
    (acc: ScoreCount, taxon: FoundTaxon) => {
        const taxonScore = calcSingleBmwp({ code: taxon.code, count: taxon.count, });
        return (taxonScore)
            ? { score: acc.score + taxonScore, count: acc.count + 1 }
            : acc;
    }, zeroScoreCount);

// TODO: WhptAspt

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
export const calcLqi = ( bmwp:number, aspt:number, type:string): {score:number, index: string, interpretation:string} => {
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