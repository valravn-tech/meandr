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

// tslint:disable-next-line:one-variable-per-declaration
const TaxaFound: React.SFC<{ taxon: any, count: number }> = (props) => (
    <div>
        <span>{props.taxon.family}({props.count})</span> - <span>{props.taxon.score}</span>
    </div>
)


// tslint:disable-next-line:one-variable-per-declaration
const TaxaFoundList: React.SFC<{foundTaxa:FoundTaxon[]}> = (props) => (
    <ul>
        {props.foundTaxa.map((t: FoundTaxon) => <li key={t.iTaxon}><TaxaFound taxon={scoresBmwp[t.iTaxon]} count={t.count} /></li>)}
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
        return (
            <div>
                <TaxaScore foundTaxa={this.state.found} />
                <input
                    type='text'
                    placeholder='Start writing a taxon name'
                    id='form-input'
                    value={this.state.search}
                    onChange={this.searchTextUpdate}/>
                <button onClick={this.addToFound}>
                    Add Taxon
                </button>
                { this.state.matchingTaxa.length
                    ? <TaxaAutocompleteOptions  matchingTaxa={this.state.matchingTaxa} />
                    : <p>Start entering the name of a scoring BMWP family</p>
                }
                <TaxaFoundList foundTaxa={this.state.found} />
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
        const iFound = this.state.found.findIndex((foundEl:any) => foundEl.iTaxon === iTaxon);

        if(iFound === -1) { // new taxon
            this.setState({ found: [...this.state.found, { iTaxon, count: 1 }] });
            // tslint:disable-next-line:no-console
            console.log(scoresBmwp[iTaxon]);
        }
        
        else {
            alert("not found");
        }
        // NOTE: presence only for BMWP
        // else {
        //     const found = this.state.found;
        //     found[iFound].count++;
        //     this.setState({ found });
        // }
    }
}

export default TaxaForm