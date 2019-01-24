import * as React from 'react';
import { IScoreBMWP, IScoreLifeFam, IScorePsiFam, IScoreWHPT, scoresBmwp, scoresLifeFamily, scoresLifeGroups, scoresPsiFamily, scoresPsiGroups, scoresWhpt } from './scores';

const TaxaAutocompleteOptions: React.SFC<{ taxaMatching: string[], iSelect: number }> = (props) => {
    const taxaBefore  = props.taxaMatching.slice(0, props.iSelect);   // \
    const selectTaxon = props.taxaMatching[props.iSelect];            //  |- could be useful utility if common pattern
    const taxaAfter   = props.taxaMatching.slice(props.iSelect + 1);  // /
    const listTaxa = (taxa:string[]) => (taxa.map(taxon => <li key={taxon}>{taxon}</li>));
    return (
        <ul>
            { listTaxa(taxaBefore) }
            <li style={{ fontWeight: 'bold' }} key={selectTaxon}>{selectTaxon}</li>
            { listTaxa(taxaAfter) }
        </ul>
    )
}

const div0 = (dividend:number, divisor:number):number => ((divisor) ? dividend /divisor : 0);

// tslint:disable-next-line:interface-name
interface FoundTaxon {
    count:number,
    name: string,
}

// tslint:disable-next-line:one-variable-per-declaration
const TaxonFound: React.SFC<{taxon: FoundTaxon, addToCount: (add:number) => void  }> = (props) => {
    const dec = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { props.addToCount(-1) }
    const inc = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { props.addToCount( 1) }
    const bmwp    = scoresBmwp.get(props.taxon.name);
    const whpt    = calcSingleWhpt(props.taxon);
    const psiFam  = calcSinglePsiFamily(props.taxon);
    const lifeFam = calcSingleLifeFamily(props.taxon);
    return (
        <div>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
            {props.taxon.count}
            <span style={{marginLeft: '2rem'}}>{props.taxon.name}</span> - 
            { (bmwp)                  ? ` BMWP: ${bmwp.score_orig}` : null }
            { (whpt    !== undefined) ? ` WHPT: ${whpt}`            : null }
            { (psiFam  !== undefined) ? ` PSI: ${psiFam.score} (${psiFam.fssr})`    : null }
            { (lifeFam !== undefined) ? ` LIFE: ${lifeFam}`         : null }
        </div>
    )
}


// tslint:disable-next-line:one-variable-per-declaration
const TaxaFoundList: React.SFC<{foundTaxa:FoundTaxon[], addToCount: (add:number, i:number) => void }> = (props) => (
    <ul>
        {
            props.foundTaxa.map((taxon, i) => {
                const addToIndex = (add: number) => (props.addToCount(add, i));
                return (
                    <li key={i}>
                        <TaxonFound taxon={taxon} addToCount={addToIndex} />
                    </li>
                )
            })
        }
    </ul>
)

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
// 101-1000 => 3
// ...
const logAbundanceWhpt = (count: number): number => {
    return logAbundance(count > 1 ? count - 1 : count)
}

const calcSingleBmwp = (foundTaxon:FoundTaxon): number | undefined => {
    const bmwp: IScoreBMWP | undefined = scoresBmwp.get(foundTaxon.name);
    return (bmwp)
        ? bmwp.score_orig
        : undefined;
}

const calcSingleWhpt = (foundTaxon:FoundTaxon): number | undefined => {
    const whpt: IScoreWHPT | undefined = scoresWhpt.get(foundTaxon.name);
    const iScore = logAbundanceWhpt(foundTaxon.count) - 1;
    return (whpt && iScore >= 0)
        ? whpt.scores[iScore]
        : undefined;
}


interface IPartialScorePSI {
    AB: number,
    AD: number,
}

interface ISingleScorePSI {
    fssr: string,
    score: number,
}

const calcSinglePsiFamily = (foundTaxon:FoundTaxon): ISingleScorePSI | undefined => {
    const psi: IScorePsiFam | undefined = scoresPsiFamily.get(foundTaxon.name);
    if(! (psi && foundTaxon.count) )
    {   return undefined;    }
    else {
        const iScore = logAbundance(foundTaxon.count) - 1;
        const score = scoresPsiGroups[psi.fssr].scores[iScore]
        return { score, fssr:psi.fssr }
    }
}

// TODO: is using && instead of ternary clear?
const psiSingleToPartial = (single: ISingleScorePSI | undefined): IPartialScorePSI | undefined => (
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
        const taxonScore:IPartialScorePSI | undefined = psiSingleToPartial(calcSinglePsiFamily(taxon));
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

const calcSingleLifeFamily = (foundTaxon:FoundTaxon): number | undefined => {
    const life: IScoreLifeFam | undefined = scoresLifeFamily.get(foundTaxon.name);
    if(! (life && foundTaxon.count) )
    {   return undefined;    }
    else {
        const iScore = logAbundance(foundTaxon.count) - 1;
        return scoresLifeGroups[life.flow].scores[iScore];
    }
}

const calcLifeFamily = (foundTaxa:FoundTaxon[]) => {
    const partial = foundTaxa.reduce((acc, taxon) => {
        const taxonScore = calcSingleLifeFamily(taxon);
        return (taxonScore)
            ? { score: acc.score + taxonScore, count: acc.count + 1 }
            : acc;
    }, { score:0, count:0 })
    return { score:div0(partial.score, partial.count), count:partial.count };
}

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
    <h2>
        BMWP: { calcBmwp      (p.foundTaxa).score.toFixed(2) },
        ASPT: { calcAspt      (p.foundTaxa)      .toFixed(2) },
        WHPT: { calcWhpt      (p.foundTaxa).score.toFixed(2) },
        PSI:  { calcPsiFamily (p.foundTaxa).score.toFixed(2) }%,
        LIFE: { calcLifeFamily(p.foundTaxa).score.toFixed(2) },
    </h2>
)

// tslint:disable-next-line:max-classes-per-file
class TaxaForm extends React.Component<{}, {
    found: FoundTaxon[],
    iPreselect: number,
    search: string,
    taxaAll: Set<string>,
    taxaMatching: string[],
}> {
    public componentWillMount() {
        const taxaAll = new Set([...Array.from(scoresBmwp.keys()), ...Array.from(scoresWhpt.keys())])
        this.setState({
            found: [] as FoundTaxon[],
            iPreselect: 0,
            search: '',
            taxaAll,
            taxaMatching: [] as string[],
        });
    }

    public render() {
        const modifyFound = (add: number, i: number) => {
            const found = this.state.found;
            found[i].count += add;
            if(found[i].count === 0)
            { found.splice(i, 1); }
            this.setState({ found })
        }

        return (
            <div>
                <TaxaScore foundTaxa={this.state.found} />
                <form onSubmit={this.submitTaxon}>
                    <input
                        type='text'
                        placeholder='Start writing a taxon name'
                        id='form-input'
                        value={this.state.search}
                        onChange={this.searchTextUpdate}
                        onKeyDown={this.changeAutoCompleteSelect} />
                    <input type='submit' value='Add Taxon' />
                </form>
                {this.state.taxaMatching.length
                    ? <TaxaAutocompleteOptions taxaMatching={this.state.taxaMatching} iSelect={this.state.iPreselect} />
                    : <p>Start entering the name of a scoring BMWP family</p>
                }
                <TaxaFoundList foundTaxa={this.state.found} addToCount={modifyFound} />
            </div>
        );
    }


    private changeAutoCompleteSelect = (e: React.KeyboardEvent) => {
        const iPreselect = this.state.iPreselect;
        switch(e.key) {
            case "ArrowDown": if(iPreselect < this.state.taxaMatching.length - 1)
            { this.setState({ iPreselect: iPreselect + 1 }); } break;

            case "ArrowUp"  : if(iPreselect > 0)
            { this.setState({ iPreselect: iPreselect - 1 }); } break;
        }
    }

    private searchTextUpdate = (e: React.FormEvent<HTMLInputElement>) => {
        const search = e.currentTarget.value;
        const taxaMatching = (search.length)
            ? Array.from(this.state.taxaAll) .filter(name => name.toLowerCase() .includes (search.toLowerCase()))
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
            const preselect = this.state.taxaMatching[iPreselect];
            const iFound = this.state.found.findIndex((foundEl: FoundTaxon) => foundEl.name === preselect);

            const found = this.state.found;
            if (iFound === -1) { found.push({ name:preselect, count: 1 }); }
            else               { found[iFound].count++; }
            this.setState({ found });
        }
    }
}

export default TaxaForm