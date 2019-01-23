import * as React from 'react';
import scoresBmwp, { IScoreBMWP } from './BMWPfamily'

const TaxaAutocompleteOptions: React.SFC<{ matchingTaxa: string[], iSelect: number }> = (props) => {
    const taxaBefore  = props.matchingTaxa.slice(0, props.iSelect);   // \
    const selectTaxon = props.matchingTaxa[props.iSelect];            //  |- could be useful utility if common pattern
    const taxaAfter   = props.matchingTaxa.slice(props.iSelect + 1);  // /
    const listTaxa = (taxa:string[]) => (taxa.map(taxon => <li key={taxon}>{taxon}</li>));
    return (
        <ul>
            { listTaxa(taxaBefore) }
            <li style={{ fontWeight: 'bold' }} key={selectTaxon}>{selectTaxon}</li>
            { listTaxa(taxaAfter) }
        </ul>
    )
}

// tslint:disable-next-line:interface-name
interface FoundTaxon {
    count:number,
    name:string,
}

// tslint:disable-next-line:one-variable-per-declaration
const TaxonFound: React.SFC<{taxon: FoundTaxon, addToCount: (add:number) => void  }> = (props) => {
    const dec = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { props.addToCount(-1) }
    const inc = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { props.addToCount( 1) }
    const bmwp = scoresBmwp.get(props.taxon.name)
    return (
        <div>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
            {props.taxon.count}
            <span style={{marginLeft: '2rem'}}>{props.taxon.name}</span> - 
            { (bmwp) ? ' BMWP: '+ bmwp.score_orig : null }
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

const calcBmwp = (foundTaxa:FoundTaxon[]): { score:number, count:number } => (
    foundTaxa.reduce((acc, taxon) => {
        const bmwp: IScoreBMWP | undefined = scoresBmwp.get(taxon.name);
        return (bmwp)
            ? { score: acc.score + bmwp.score_orig, count: acc.count + 1 }
            : acc;
    }, { score:0, count:0 })
) 

const calcScoreBmwp = (foundTaxa:FoundTaxon[]): number => ( calcBmwp(foundTaxa).score );

const calcScoreAspt = (foundTaxa:FoundTaxon[]): number => {
    const bmwp = calcBmwp(foundTaxa);
    return (bmwp.count)
        ? bmwp.score / bmwp.count
        : 0;
}

const TaxaScore: React.SFC<{foundTaxa:FoundTaxon[]}> = (p) =>
( <h2>BMWP: {calcScoreBmwp(p.foundTaxa).toFixed(2)}, ASPT: {calcScoreAspt(p.foundTaxa).toFixed(2)}</h2> )

// tslint:disable-next-line:max-classes-per-file
class TaxaForm extends React.Component<{}, {
        found:          FoundTaxon[],
        taxonPreselect: string,
        iPreselect:     number,
        matchingTaxa:   string[],
        search:         string,
    }> {

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
                {this.state.matchingTaxa.length
                    ? <TaxaAutocompleteOptions matchingTaxa={this.state.matchingTaxa} iSelect={this.state.iPreselect} />
                    : <p>Start entering the name of a scoring BMWP family</p>
                }
                <TaxaFoundList foundTaxa={this.state.found} addToCount={modifyFound} />
            </div>
        );
    }

    public componentWillMount() { this.setState({found:[] as FoundTaxon[], taxonPreselect:'', iPreselect:0, matchingTaxa:[] as string[], search:''}) };

    private updatePreselection = (iPreselect:number) => {
        const taxonPreselect = (iPreselect !== -1 && this.state.matchingTaxa.length)
            ? this.state.matchingTaxa[iPreselect]
            : '';
        this.setState({iPreselect, taxonPreselect})
    }

    private changeAutoCompleteSelect = (e: React.KeyboardEvent) => {
        const iPreselect = this.state.iPreselect;
        switch(e.key) {
            case "ArrowDown": if(iPreselect < this.state.matchingTaxa.length - 1)
            { this.updatePreselection(iPreselect + 1); } break;

            case "ArrowUp"  : if(iPreselect > 0)
            { this.updatePreselection(iPreselect - 1); } break;
        }
    }

    private searchTextUpdate = (e: React.FormEvent<HTMLInputElement>) => {
        const search = e.currentTarget.value;
        const matchingTaxa = (search.length)
            ? Array.from(scoresBmwp.keys()) .filter(name => name.toLowerCase() .includes (search.toLowerCase()))
            : [];
        this.setState({ matchingTaxa, search },
        () => this.updatePreselection(0)); // callback needed because setState does not update state immediately
    }

    private submitTaxon = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const preselect = this.state.taxonPreselect;
        // NOTE: avoids adding for invalid search
        if (this.state.search.length && preselect.length) {
            const iFound = this.state.found.findIndex((foundEl: FoundTaxon) => foundEl.name === preselect);

            const found = this.state.found;
            if (iFound === -1) { found.push({ name:preselect, count: 1 }); }
            else               { found[iFound].count++; }
            this.setState({ found });
        }
    }
}

export default TaxaForm