import * as React from 'react';
import scoresBmwp from './BMWPfamily'

const TaxaAutocompleteOptions: React.SFC<{ matchingTaxa: any[], iSelect: number }> = (props) => {
    const taxaBefore  = props.matchingTaxa.slice(0, props.iSelect);
    const selectTaxon = props.matchingTaxa[props.iSelect];
    const taxaAfter   = props.matchingTaxa.slice(props.iSelect + 1);
    const listTaxa = (taxa:any[]) => (taxa.map(taxon => <li key={taxon.family}>{taxon.family}</li>));
    return (
        <ul>
            { listTaxa(taxaBefore) }
            <li style={{ fontWeight: 'bold' }} key={selectTaxon.family}>{selectTaxon.family}</li>
            { listTaxa(taxaAfter) }
        </ul>
    )
}

// tslint:disable-next-line:interface-name
interface FoundTaxon {
    count:number,
    iTaxon:number,
}

// tslint:disable-next-line:one-variable-per-declaration
const TaxaFound: React.SFC<{ taxon: any, count: number, addToCount: (add:number) => void  }> = (props) => {
    const dec = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { props.addToCount(-1) }
    const inc = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { props.addToCount( 1) }
    return (
        <div>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
            {props.count}
            <span style={{marginLeft: '2rem'}}>{props.taxon.family}: {props.taxon.score}</span>
        </div>
    )
}


// tslint:disable-next-line:one-variable-per-declaration
const TaxaFoundList: React.SFC<{foundTaxa:FoundTaxon[], addToCount: (add:number, i:number) => void }> = (props) => (
    <ul>
        {
            props.foundTaxa.map((t, i) => {
                const addToIndex = (add:number) => (props.addToCount(add, i));
                return (
                    <li key={t.iTaxon}>
                        <TaxaFound taxon={scoresBmwp[t.iTaxon]} count={t.count} addToCount={addToIndex} />
                    </li>
                )
            })
        }
    </ul>
)

const calcBmwp = (foundTaxa:FoundTaxon[]): number =>
( foundTaxa.reduce((score, t) => (score + scoresBmwp[t.iTaxon].score), 0) ) 

const calcAspt = (foundTaxa:FoundTaxon[]): number =>
( foundTaxa.length
    ? calcBmwp(foundTaxa) / foundTaxa.length
    : 0)

const TaxaScore: React.SFC<{foundTaxa:FoundTaxon[]}> = (p) =>
( <h2>BMWP: {calcBmwp(p.foundTaxa).toFixed(2)}, ASPT: {calcAspt(p.foundTaxa).toFixed(2)}</h2> )

// tslint:disable-next-line:max-classes-per-file
class TaxaForm extends React.Component<{}, {
        found: FoundTaxon[],
        iTaxonSearched:number,
        iPreselect:number,
        matchingTaxa:any[],
        search: string,
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

    public componentWillMount() { this.setState({found:[] as FoundTaxon[], iTaxonSearched:-1, iPreselect:0, matchingTaxa:[] as any[], search:''}) };

    private updatePreselection = (iPreselect:number) => {
        const iTaxonSearched = scoresBmwp.indexOf(this.state.matchingTaxa[iPreselect]);
        this.setState({iPreselect, iTaxonSearched})
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
        const matchingTaxa = search.length
            ? scoresBmwp.filter(taxon => taxon.family.toLowerCase() .includes(search.toLowerCase()))
            : [];
        this.setState({ matchingTaxa, search });
        this.updatePreselection(0);
    }

    private submitTaxon = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const iTaxon = this.state.iTaxonSearched;
        // NOTE: avoids adding for invalid search
        if (this.state.search.length && iTaxon >= 0 && iTaxon < scoresBmwp.length) {
            const iFound = this.state.found.findIndex((foundEl: any) => foundEl.iTaxon === iTaxon);

            if (iFound === -1) { // new taxon
                this.setState({ found: [...this.state.found, { iTaxon, count: 1 }] });
                // tslint:disable-next-line:no-console
                console.log(scoresBmwp[iTaxon]);
            } else {
                const found = this.state.found;
                found[iFound].count++;
                this.setState({ found });
            }
        }
    }
}

export default TaxaForm