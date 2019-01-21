import * as React from 'react';
import scoresBmwp from './BMWPfamily'

class TaxaAutocompleteOptions extends React.Component<{matchingTaxa:any[]}, {}> {
    public render() {
        const selectTaxon = this.props.matchingTaxa[0];
        const remainingTaxa = this.props.matchingTaxa.slice(1);
        return (
            <ul>
                <li style={{fontWeight:'bold'}} key={selectTaxon.family}>{selectTaxon.family}</li> 
                {remainingTaxa.map(taxon => <li key={taxon.family}>{taxon.family}</li> )}
            </ul>
        )
    }
}

// tslint:disable-next-line:interface-name
interface FoundTaxon {
    count:number,
    iTaxon:number,
}

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

export default TaxaForm;