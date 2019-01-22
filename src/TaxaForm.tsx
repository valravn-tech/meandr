import * as React from 'react';
import scoresBmwp from './BMWPfamily'

const TaxaAutocompleteOptions: React.SFC<{ matchingTaxa: any[] }> = (props) => {
    const selectTaxon = props.matchingTaxa[0];
    const remainingTaxa = props.matchingTaxa.slice(1);
    return (
        <ul>
            <li style={{ fontWeight: 'bold' }} key={selectTaxon.family}>{selectTaxon.family}</li>
            {remainingTaxa.map(taxon => <li key={taxon.family}>{taxon.family}</li>)}
        </ul>
    )
}

// tslint:disable-next-line:interface-name
interface FoundTaxon {
    count:number,
    iTaxon:number,
}

type CountAdder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, add: number) => void 
type IndexedCountAdder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, add: number, i: number) => void 

// tslint:disable-next-line:one-variable-per-declaration
const TaxaFound: React.SFC<{ taxon: any, count: number, addToCount: CountAdder }> = (props) => {
    const dec = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { props.addToCount(e, -1) }
    const inc = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => { props.addToCount(e,  1) }
    return (
        <div>
            <span>{props.taxon.family}({props.count})</span> - <span>{props.taxon.score}</span>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
        </div>
    )
}


// tslint:disable-next-line:one-variable-per-declaration
const TaxaFoundList: React.SFC<{foundTaxa:FoundTaxon[], addToCount: IndexedCountAdder }> = (props) => (
    <ul>
        {
            props.foundTaxa.map((t, i) => {
                const addToIndex: CountAdder = (e, add) => props.addToCount(e, add, i);
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

const TaxaScore: React.SFC<{foundTaxa:FoundTaxon[]}> = (p) =>
( <h2>BMWP: {calcBmwp(p.foundTaxa)}</h2> )

// tslint:disable-next-line:max-classes-per-file
class TaxaForm extends React.Component<{}, {
        found: FoundTaxon[],
        iTaxonSelected:number,
        matchingTaxa:any[],
        search: string,
    }> {

    public render() {
        const modifyFound: IndexedCountAdder = (e, add, i) => {
            const found = this.state.found;
            found[i].count += add;
            if(found[i].count === 0)
            { found.splice(i, 1); }
            this.setState({ found })
        }

        return (
            <div>
                <TaxaScore foundTaxa={this.state.found} />
                <input
                    type='text'
                    placeholder='Start writing a taxon name'
                    id='form-input'
                    value={this.state.search}
                    onChange={this.searchTextUpdate} />
                <button onClick={this.addToFound}>
                    Add Taxon
                </button>
                {this.state.matchingTaxa.length
                    ? <TaxaAutocompleteOptions matchingTaxa={this.state.matchingTaxa} />
                    : <p>Start entering the name of a scoring BMWP family</p>
                }
                <TaxaFoundList foundTaxa={this.state.found} addToCount={modifyFound} />
            </div>
        );
    }

    public componentWillMount() { this.setState({found:[] as FoundTaxon[], iTaxonSelected:-1, matchingTaxa:[] as any[], search:''}) };

    private searchTextUpdate = (e: React.FormEvent<HTMLInputElement>) => {
        const search = e.currentTarget.value;
        const matchingTaxa = search.length
            ? scoresBmwp.filter(taxon => taxon.family.toLowerCase() .includes(search.toLowerCase()))
            : [];
        const iTaxonSelected = scoresBmwp.indexOf(matchingTaxa[0]);
        this.setState({ iTaxonSelected, matchingTaxa, search });
    }

    private addToFound = () => {
        const iTaxon = this.state.iTaxonSelected;
        // tslint:disable-next-line:no-console
        console.assert(iTaxon >= 0 && iTaxon < scoresBmwp.length, "Out of bounds")
        const iFound = this.state.found.findIndex((foundEl:any) => foundEl.iTaxon === iTaxon);

        if(iFound === -1) { // new taxon
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

export default TaxaForm