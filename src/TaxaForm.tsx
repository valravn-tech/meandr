import * as React from 'react';
import { IScoreBMWP, scoresBmwp } from './scores';

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
        iPreselect:     number,
        search:         string,
        taxaAll:        string[],
        taxaMatching:   string[],
    }> {
    public componentWillMount() { this.setState({
        found:          [] as FoundTaxon[],
        iPreselect:     0,
        search:         '',
        taxaAll:        [] as string[],
        taxaMatching:   [] as string[],
    })}

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
            ? Array.from(scoresBmwp.keys()) .filter(name => name.toLowerCase() .includes (search.toLowerCase()))
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