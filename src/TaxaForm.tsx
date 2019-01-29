import * as React from 'react';
import { allTaxa, Taxa, TaxaCode } from './alltaxa';
import {
    ScoreBmwp,
    ScoreCci,
    ScoreLifeFam,
    ScoreLifeSpc,
    ScorePsiFam,
    ScorePsiSpc,
    scoresBmwp,
    scoresCci,
    scoresCciCommunity,
    scoresLifeFamily,
    scoresLifeGroups,
    scoresLifeSpecies,
    scoresPsiFamily,
    scoresPsiGroups,
    scoresPsiSpecies,
    scoresWhpt,
    ScoreWhpt,
} from './scores';

const cmp = (a:any, b:any) => (
    a < b ? -1 :
    a > b ?  1 :
    0
);  

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

// tslint:disable-next-line:interface-name
interface FoundTaxon {
    count:number,
    code: TaxaCode,
}

// tslint:disable-next-line:one-variable-per-declaration
const TaxonFound: React.SFC<{taxon: FoundTaxon, addToCount: (add:number) => void  }> = (props) => {
    const dec = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { props.addToCount(-1) }
    const inc = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { props.addToCount( 1) }
    const bmwp    = scoresBmwp.get(taxonKeyName(props.taxon.code));
    const whpt    = calcSingleWhpt       (props.taxon);
    const psiFam  = calcSinglePsiFamily  (props.taxon);
    const psiSpc  = calcSinglePsiSpecies (props.taxon);
    const lifeFam = calcSingleLifeFamily (props.taxon);
    const lifeSpc = calcSingleLifeSpecies(props.taxon);
    const cci     = calcSingleCci        (props.taxon);
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
            <td>{ (lifeFam !== undefined) ? lifeFam                            : '-' }</td>
            <td>{ (lifeSpc !== undefined) ? lifeSpc                            : '-' }</td>
            <td>{ (cci     !== undefined) ? cci                                : '-' }</td>
        </tr>
    )
}


// tslint:disable-next-line:one-variable-per-declaration
const TaxaFoundList: React.SFC<{foundTaxa:FoundTaxon[], addToCount: (add:number, i:number) => void }> = (props) => (
    <table>
        <tr>
            <th>Full name</th>
            <th>Count</th>
            <th>BMWP</th>
            <th>WHPT</th>
            <th>PSI<sub>family</sub></th>
            <th>PSI<sub>species</sub></th>
            <th>LIFE<sub>family</sub></th>
            <th>LIFE<sub>species</sub></th>
            <th>CCI</th>
        </tr>
        {
            props.foundTaxa.map((taxon, i) => {
                const addToIndex = (add: number) => (props.addToCount(add, i));
                return <TaxonFound key={i} taxon={taxon} addToCount={addToIndex} />;
            })
        }
    </table>
)


const nextTaxonLevel = (lvl: 'major_group' | 'family' | 'genus' | 'species' | undefined): 'major_group' | 'family' | 'genus' | 'species' | undefined => (
    lvl === 'species' ? 'genus' :
    lvl === 'genus'   ? 'family' :
    lvl === 'family'  ? 'major_group' :
    undefined
)

const taxonFromMapAtAnyLevel = (taxon: FoundTaxon, scores: Map<any,any>): any | undefined => {
    const tx = allTaxa.get(taxon.code);
    for(let lvl:TaxonLvl | undefined = taxonLevel(taxon.code); tx && lvl; lvl = nextTaxonLevel(lvl)) {
        const name = tx[lvl];
        const score = scores.get(name);
        if (score)
        {   return score;    }
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

const calcSingleBmwp = (foundTaxon:FoundTaxon): number | undefined => {
    const bmwp:    ScoreBmwp | undefined = taxonFromMapAtAnyLevel(foundTaxon, scoresBmwp);
    // const bmwp: ScoreBMWP | undefined = scoresBmwp.get(foundTaxon.name);
    return (bmwp)
        ? bmwp.score_orig
        : undefined;
}

const calcSingleWhpt = (foundTaxon:FoundTaxon): number | undefined => {
    const whpt: ScoreWhpt | undefined = taxonFromMapAtAnyLevel(foundTaxon, scoresWhpt);
    // const whpt: ScoreWHPT | undefined = scoresWhpt.get(foundTaxon.name);
    const iScore = logAbundanceWhpt(foundTaxon.count) - 1;
    return (whpt && iScore >= 0)
        ? whpt.scores[iScore]
        : undefined;
}


const calcSingleCci = (foundTaxon:FoundTaxon): number | undefined => {
    const cci: ScoreCci | undefined = taxonFromMapAtAnyLevel(foundTaxon, scoresCci);
    // const psi: ScorePsiFam | undefined = scoresPsiFamily.get(foundTaxon.name);
    if(! (cci && foundTaxon.count) )
    {   return undefined;    }
    else {
        return cci.score;
    }
}
 
const calcCci = (foundTaxa: FoundTaxon[]): { score:number, count:number } => {
    const cci = foundTaxa.reduce((acc, taxon) => {
        const taxonScore = calcSingleCci(taxon);
        return (taxonScore)
            ? {
                count: acc.count + 1,
                max: Math.max(taxonScore, acc.max),
                sum: acc.sum + taxonScore,
            }
            : acc;
    }, { max:0, sum:0, count:0 });

    const scoreConservationMean = div0(cci.sum, cci.count);
    const scoreCommunity = scoresCciCommunity[cci.max];
    const score = scoreConservationMean * scoreCommunity;
    return {score, count: cci.count};
}

interface PartialScorePSI {
    AB: number,
    AD: number,
}

interface SingleScorePSI {
    fssr: string,
    score: number,
}

const calcSinglePsiFamily = (foundTaxon:FoundTaxon): SingleScorePSI | undefined => {
    const psi: ScorePsiFam | undefined = taxonFromMapAtAnyLevel(foundTaxon, scoresPsiFamily);
    // const psi: ScorePsiFam | undefined = scoresPsiFamily.get(foundTaxon.name);
    if(! (psi && foundTaxon.count) )
    {   return undefined;    }
    else {
        const iScore = logAbundance(foundTaxon.count) - 1;
        const score = scoresPsiGroups[psi.fssr].scores[iScore]
        return { score, fssr:psi.fssr }
    }
}

const calcSinglePsiSpecies = (foundTaxon:FoundTaxon): SingleScorePSI | undefined => {
    const psi: ScorePsiSpc | undefined = taxonFromMapAtAnyLevel(foundTaxon, scoresPsiSpecies);
    // const psi: ScorePsiFam | undefined = scoresPsiFamily.get(foundTaxon.name);
    if(! (psi && foundTaxon.count) )
    {   return undefined;    }
    else {
        const iScore = logAbundance(foundTaxon.count) - 1;
        const score = scoresPsiGroups[psi.fssr].scores[iScore]
        return { score, fssr:psi.fssr }
    }
}

// TODO: is using && instead of ternary clear?
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

const calcPsiFamily = (foundTaxa: FoundTaxon[]): { score:number, count:number } => {
    const partial = foundTaxa.reduce((acc, taxon) => {
        const taxonScore: PartialScorePSI | undefined = psiSingleToPartial(calcSinglePsiFamily(taxon));
        return (taxonScore)
            ? {
                count: acc.count + 1,
                score: {
                    AB: acc.score.AB + taxonScore.AB, AD: acc.score.AD + taxonScore.AD
                },
            }
            : acc;
    }, { score: { AB: 0, AD: 0 }, count: 0 });

    return { count: partial.count, score: 100 * div0(partial.score.AB, partial.score.AD) }
}

const calcPsiSpecies = (foundTaxa: FoundTaxon[]): { score:number, count:number } => {
    const partial = foundTaxa.reduce((acc, taxon) => {
        const taxonScore: PartialScorePSI | undefined = psiSingleToPartial(calcSinglePsiSpecies(taxon));
        return (taxonScore)
            ? {
                count: acc.count + 1,
                score: {
                    AB: acc.score.AB + taxonScore.AB, AD: acc.score.AD + taxonScore.AD
                },
            }
            : acc;
    }, { score: { AB: 0, AD: 0 }, count: 0 });

    return { count: partial.count, score: 100 * div0(partial.score.AB, partial.score.AD) }
}

const calcSingleLife = (foundTaxon:FoundTaxon, scoresTable:Map<string, ScoreLifeFam> | Map<string, ScoreLifeFam>): number | undefined => {
    const life: ScoreLifeFam | ScoreLifeSpc | undefined = taxonFromMapAtAnyLevel(foundTaxon, scoresTable);
    // const life: ScoreLifeFam | ScoreLifeSpc | undefined = scoresTable.get(foundTaxon.name);
    if(! (life && foundTaxon.count) )
    {   return undefined;    }
    else {
        const iScore = logAbundance(foundTaxon.count) - 1;
        return scoresLifeGroups[life.flow].scores[iScore];
    }
}

const calcSingleLifeFamily  = (foundTaxon:FoundTaxon) => calcSingleLife(foundTaxon, scoresLifeFamily)
const calcSingleLifeSpecies = (foundTaxon:FoundTaxon) => calcSingleLife(foundTaxon, scoresLifeSpecies)

const calcLife = (foundTaxa:FoundTaxon[], scoresTable:Map<string, ScoreLifeFam> | Map<string, ScoreLifeFam>): { score: number, count: number } => {
    const partial = foundTaxa.reduce((acc, taxon) => {
        const taxonScore = calcSingleLife(taxon, scoresTable);
        return (taxonScore)
            ? { score: acc.score + taxonScore, count: acc.count + 1 }
            : acc;
    }, { score:0, count:0 })
    return { score:div0(partial.score, partial.count), count:partial.count };
}
  
const calcLifeFamily  = (foundTaxa:FoundTaxon[]) => calcLife(foundTaxa, scoresLifeFamily)
const calcLifeSpecies = (foundTaxa:FoundTaxon[]) => calcLife(foundTaxa, scoresLifeSpecies)

const calcScore = (calcSingle: (t:FoundTaxon) => number | undefined, foundTaxa: FoundTaxon[]): { score:number, count:number } => (
    foundTaxa.reduce((acc, taxon) => {
        const taxonScore = calcSingle(taxon);
        return (taxonScore)
            ? { score: acc.score + taxonScore, count: acc.count + 1 }
            : acc;
    }, { score:0, count:0 })
)

const calcWhpt       = (foundTaxa:FoundTaxon[]) => calcScore(calcSingleWhpt,       foundTaxa);
const calcBmwp       = (foundTaxa:FoundTaxon[]) => calcScore(calcSingleBmwp,       foundTaxa);

const calcAspt = (foundTaxa:FoundTaxon[]): number => {
    const bmwp = calcBmwp(foundTaxa);
    return div0(bmwp.score, bmwp.count);
}


const TaxaScore: React.SFC<{foundTaxa:FoundTaxon[]}> = (p) => (
    <div>
        <h2>Scores</h2>
        <dl>
            <dt>BMWP</dt>                   <dd>{ calcBmwp       (p.foundTaxa).score.toFixed(2) }</dd>
            <dt>ASPT</dt>                   <dd>{ calcAspt       (p.foundTaxa)      .toFixed(2) }</dd>
            <dt>WHPT</dt>                   <dd>{ calcWhpt       (p.foundTaxa).score.toFixed(2) }</dd>
            <dt>PSI<sub>family</sub></dt>   <dd>{ calcPsiFamily  (p.foundTaxa).score.toFixed(2) }%</dd>
            <dt>PSI<sub>species</sub></dt>  <dd>{ calcPsiSpecies (p.foundTaxa).score.toFixed(2) }%</dd>
            <dt>CCI</dt>                    <dd>{ calcCci        (p.foundTaxa).score.toFixed(2) }</dd>
            <dt>LIFE<sub>family</sub></dt>  <dd>{ calcLifeFamily (p.foundTaxa).score.toFixed(2) }</dd>
            <dt>LIFE<sub>species</sub></dt> <dd>{ calcLifeSpecies(p.foundTaxa).score.toFixed(2) }</dd>
        </dl>
    </div>
)

// TODO: restructure. This is currently O(n) but for most uses it should be O(1)
// it causes a noticeable hitch for the first few keys of autocomplete
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
    private taxonAddText = 'Add Taxon';


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
