import * as React from 'react';
import * as NumericInput from 'react-numeric-input';
import {
    allTaxa,
    FoundTaxon,
    Taxon,
    TaxonCode,
    taxonLevel
    } from './alltaxa';

import {
    calcAspt,
    calcAwic,
    calcBmwp,
    calcCci,
    calcDehli,
    calcLife,
    calcLqi,
    calcPsi,
    calcSingleAwic,
    calcSingleCci,
    calcSingleDehli,
    calcSingleLife,
    calcSinglePsi,
    calcSingleWhpt,
    calcWhpt,
} from './calculations'

import {
    scoresAwic,
    scoresBmwp,
    scoresCci,
    scoresDehli,
    scoresLifeFamily,
    scoresLifeSpecies,
    scoresPsiFamily,
    scoresPsiSpecies,
    scoresWhpt,
} from './scores';

const cmp = <T extends {}>(a:T, b:T) => (
    a < b ? -1 :
    a > b ?  1 :
    0
);  

const taxonFullName = (taxon: TaxonCode): string => {
    const lvl = taxonLevel(taxon);
    const tx = allTaxa.get(taxon) as Taxon;
    return (
        lvl === 'species'     ? `${tx.major_group} ${tx.family} ${tx.genus} ${tx.species}` :
        lvl === 'genus'       ? `${tx.major_group} ${tx.family} ${tx.genus}` : 
        lvl === 'family'      ? `${tx.major_group} ${tx.family}` : 
      /*lvl === 'major_group'*/ `${tx.major_group}`
    );
}

const TaxonName: React.SFC<{ taxonCode: TaxonCode }> = (props) => {
    const lvl = taxonLevel(props.taxonCode)
    const tx = allTaxa.get(props.taxonCode) as Taxon;
    return <span>{
        lvl === 'species'     ? <span>{`${tx.major_group} ${tx.family}`} <em>{tx.genus} {tx.species}</em></span> :
        lvl === 'genus'       ? <span>{`${tx.major_group} ${tx.family}`} <em>{tx.genus}</em></span> : 
        lvl === 'family'      ? `${tx.major_group} ${tx.family}` : 
      /*lvl === 'major_group'*/ `${tx.major_group}`
    }</span>
}

const TaxaAutocompleteOptions: React.SFC<{
    iSelect: number,
    isFocused: boolean,
    taxaMatching: TaxonCode[],
    taxaFound: Map<TaxonCode, FoundTaxon>,
}> = (props) => {
    const listTaxon = (code: TaxonCode, selected: boolean) => {
        const taxonMatch = props.taxaFound.get(code);
        const taxonCount = taxonMatch ? taxonMatch.count : 0;
        const focusedStyle: React.CSSProperties   = { backgroundColor:'#226', color:'white', fontWeight:'bold' };
        const unfocusedStyle: React.CSSProperties = { backgroundColor:'#555', color:'white', fontWeight:'bold' };
        const style = (selected)
            ? (props.isFocused ? focusedStyle : unfocusedStyle)
            : undefined;

        const result = (
            <tr key={code} style={style}>
                <td><TaxonName taxonCode={code} /></td>
                <td>{taxonCount || undefined}</td>
            </tr>
        )
        return result;
    };

    const listTaxa = (taxa: TaxonCode[]) =>
    (   taxa.map(taxon => listTaxon(taxon, false))   );

    const taxaBefore  = props.taxaMatching.slice(0, props.iSelect);   // \
    const selectTaxon = props.taxaMatching[props.iSelect];            //  |- could be useful utility if common pattern
    const taxaAfter   = props.taxaMatching.slice(props.iSelect + 1);  // /   (or may already exist)

    return (
        <table>
            {listTaxa(taxaBefore)}
            {listTaxon(selectTaxon, true)}
            {listTaxa(taxaAfter)}
        </table>
    )
}

// tslint:disable-next-line:one-variable-per-declaration
const TaxonFound: React.SFC<{taxon: FoundTaxon, setCount: (count:number) => void  }> = (props) => {
    const handleChange = (value:number, str:string, input:any) => 
    {   props.setCount(value);   }
    
    const bmwp    = scoresBmwp.get(props.taxon.code);
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
            <td><NumericInput
                value={props.taxon.count}
                onChange={handleChange}
            /></td>

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
const TaxaFoundList: React.SFC<{foundTaxa: Map<TaxonCode, FoundTaxon>, setCount: (count:number, code:TaxonCode) => void }> = (props) => (
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
                Array.from(props.foundTaxa.values()) .map((taxon) => {
                    const setIndex = (count: number) => (props.setCount(count, taxon.code));
                    return <TaxonFound key={taxon.code} taxon={taxon} setCount={setIndex} />;
                })
            }
        </tbody>
    </table>
)



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

// tslint:disable-next-line:max-classes-per-file
class TaxaForm extends React.Component<{}, {
    buttonText: string,
    found: Map<TaxonCode, FoundTaxon>,
    iPreselect: number,
    taxonInputIsFocused: boolean,
    search: string,
    taxaAll: Set<TaxonCode>,
    taxaMatching: TaxonCode[],
}> {
    private searchBox = React.createRef<HTMLInputElement>();
    private taxonRemoveText = ['Remove Taxon', 'Remove Taxa'];
    private taxonAddText    = ['Add Taxon', 'Add Taxa'];
    private addCount = 1;


    public componentWillMount() {
        this.setState({
            buttonText: this.taxonAddText[0],
            found: new Map(),
            iPreselect: 0,
            search: '',
            taxaMatching: [] as TaxonCode[],
            taxonInputIsFocused: false,
        });
    }

    public componentDidMount() {
        // This prevents non-scoring taxa from autocompleting...
        // TODO (ux): is this desired behaviour?
        const taxaAll = new Set([
            ...Array.from(scoresBmwp       .keys()), 
            ...Array.from(scoresLifeFamily .keys()),
            ...Array.from(scoresLifeSpecies.keys()),
            ...Array.from(scoresPsiFamily  .keys()),
            ...Array.from(scoresPsiSpecies .keys()),
            ...Array.from(scoresWhpt       .keys()),
            ...Array.from(scoresCci        .keys()),
            ...Array.from(scoresAwic       .keys()),
            ...Array.from(scoresDehli      .keys()),
        ]);
        this.setState({taxaAll});
        const node = this.searchBox.current;
        if (node)
        {   node.focus()   }
    }

    public render() {
        const modifyFound = (newCount: number, code: TaxonCode) => {
            const found = this.state.found;
            const tx = found.get(code);
            if (! tx) { return; }
            tx.count = newCount;

            // TODO(ux): do we want to auto-delete when hitting 0?
            // quicker to use, but more error-prone
            if (tx.count === 0)
            { found.delete(code); }
            else
            { found.set(code, tx); }
            this.setState({ found })
        }

        const submitTaxon = (e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const iPreselect = this.state.iPreselect;
            // NOTE: avoids adding for invalid search
            if (this.state.search.length && iPreselect >= 0) {
                const code         = this.state.taxaMatching[iPreselect];
                const shouldRemove = this.state.buttonText === this.taxonRemoveText[this.taxonTextI()];
                const found        = this.state.found;

                const tx = found.get(code);
                if (tx) {
                    const inc = shouldRemove ? -this.addCount : this.addCount;
                    modifyFound(tx.count + inc, code);
                }
                else if (! shouldRemove) { // add new taxon
                    found.set(code, { count: this.addCount, code });
                    this.setState({ found });
                }
            }
        }

        const searchTextUpdate = (e: React.FormEvent<HTMLInputElement>) => {
            const search = e.currentTarget.value;
            // TODO (ux): is this the right trigger to reset the count?
            if (search.length === 0)
            {   this.addCount = 1;   }

            const taxaMatching = (search.length)
                ? Array.from(this.state.taxaAll) .filter(code =>
                    taxonFullName(code).toLowerCase() .includes (search.toLowerCase()))
                    .sort((a:TaxonCode, b:TaxonCode) => cmp(taxonFullName(a), taxonFullName(b)))
                : [];

            const iPreselect = (taxaMatching.length)
                ? 0
                : -1;
            this.setState({ iPreselect, taxaMatching, search });
        }

        const setButtonText = (e: React.KeyboardEvent) => {
            const buttonText:string = (e.shiftKey)
                ? this.taxonRemoveText[this.taxonTextI()]
                : this.taxonAddText   [this.taxonTextI()];
            if (this.state.buttonText !== buttonText)
            {   this.setState({buttonText});   }
        }

        const changeAutoCompleteSelect = (e: React.KeyboardEvent) => {
            const iPreselect = this.state.iPreselect;
            setButtonText(e);
            switch (e.key) {
                case "ArrowDown": if (iPreselect < this.state.taxaMatching.length - 1)
                { this.setState({ iPreselect: iPreselect + 1 }); } break;

                case "ArrowUp"  : if(iPreselect > 0)
                { this.setState({ iPreselect: iPreselect - 1 }); } break;
            }
        }

        const handleNumberChange = (val:number) => { this.addCount = val; }
        const ensureCountHasValue = () => { if(this.addCount === null) { this.addCount = 1; } }

        const handleTaxonInputFocus = () => { this.setState({ taxonInputIsFocused: true  }) }
        const handleTaxonInputBlur  = () => { this.setState({ taxonInputIsFocused: false }) }
 
        return (<div>
            <TaxaScore foundTaxa={ Array.from(this.state.found.values()) } />

            <form onSubmit={submitTaxon}>
                <input
                    ref={this.searchBox}
                    type='text'
                    placeholder='taxon name'
                    id='form-input'
                    value={this.state.search}
                    onChange={searchTextUpdate}
                    onKeyUp={changeAutoCompleteSelect}
                    onKeyDown={setButtonText}
                    onFocus={handleTaxonInputFocus}
                    onBlur={handleTaxonInputBlur}
                />
                <NumericInput
                    min={1}
                    value={this.addCount}
                    onChange={handleNumberChange}
                    onKeyUp={setButtonText}
                    onKeyDown={setButtonText}
                    onBlur={ensureCountHasValue}
                />
                <input type='submit' value={this.state.buttonText} />
            </form>

            {this.state.taxaMatching.length
                ? <TaxaAutocompleteOptions
                    taxaMatching={this.state.taxaMatching}
                    taxaFound={this.state.found}
                    isFocused={this.state.taxonInputIsFocused}
                    iSelect={this.state.iPreselect}
                />
                : <p>Start entering the name of a scoring taxon</p>
            }

            <TaxaFoundList foundTaxa={this.state.found} setCount={modifyFound} />
        </div>);
    }

    private taxonTextI = ():number => (+(this.addCount > 1));
}

export default TaxaForm