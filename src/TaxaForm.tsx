import * as React from 'react';
import * as NumericInput from 'react-numeric-input';
import {
    allTaxa,
    FoundTaxon,
    Taxon,
    TaxonCode,
    taxonLevel
} from './alltaxa';

import { connect } from 'react-redux';
import { State } from './App';
import {
    calcAspt,
    calcAwic,
    calcBmwp,
    calcCci,
    calcDehli,
    calcLifeFam,
    calcLifeSpc,
    calcLqi,
    calcPsiFam,
    calcPsiSpc,
    calcSingleAwic,
    calcSingleBmwp,
    calcSingleCci,
    calcSingleDehli,
    calcSingleLifeFam,
    calcSingleLifeSpc,
    calcSinglePsiFam,
    calcSinglePsiSpc,
    calcSingleWhpt,
    calcWhpt,
} from './calculations'

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
            <tbody>
                {listTaxa(taxaBefore)}
                {listTaxon(selectTaxon, true)}
                {listTaxa(taxaAfter)}
            </tbody>
        </table>
    )
}

// tslint:disable-next-line:one-variable-per-declaration
const TaxonFound: React.SFC<{taxon: FoundTaxon, setCount: (count:number) => void  }> = (props) => {
    const handleChange = (value:number, str:string, input:any) => 
    {   props.setCount(value);   }
    
    const bmwp    = calcSingleBmwp   (props.taxon);
    const whpt    = calcSingleWhpt   (props.taxon);
    const psiFam  = calcSinglePsiFam (props.taxon);
    const psiSpc  = calcSinglePsiSpc (props.taxon);
    const cci     = calcSingleCci    (props.taxon);
    const lifeFam = calcSingleLifeFam(props.taxon);
    const lifeSpc = calcSingleLifeSpc(props.taxon);
    const awic    = calcSingleAwic   (props.taxon);
    const dehli   = calcSingleDehli  (props.taxon);

    return (
        <tr>
            <td><TaxonName taxonCode={props.taxon.code} /></td>
            <td><NumericInput
                value={props.taxon.count}
                onChange={handleChange}
            /></td>

            <td>{ (bmwp)                  ? bmwp                               : '-' }</td>
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
const TaxaFoundList: React.SFC<{taxaFound: Map<TaxonCode, FoundTaxon>, setCount: (count:number, code:TaxonCode) => void }> = (props) => (
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
                Array.from(props.taxaFound.values()) .map((taxon) => {
                    const setIndex = (count: number) => (props.setCount(count, taxon.code));
                    return <TaxonFound key={taxon.code} taxon={taxon} setCount={setIndex} />;
                })
            }
        </tbody>
    </table>
)



const TaxaScore: React.SFC<{taxaFound:FoundTaxon[]}> = (p) => {
    const bmwp    = calcBmwp   (p.taxaFound);
    const aspt    = calcAspt   (p.taxaFound);
    const lqi     = calcLqi    (bmwp.score, aspt, "standard");
    const whpt    = calcWhpt   (p.taxaFound)
    const psiFam  = calcPsiFam (p.taxaFound)
    const psiSpc  = calcPsiSpc (p.taxaFound)
    const cci     = calcCci    (p.taxaFound)
    const lifeFam = calcLifeFam(p.taxaFound)
    const lifeSpc = calcLifeSpc(p.taxaFound)
    const awic    = calcAwic   (p.taxaFound)
    const dehli   = calcDehli  (p.taxaFound)
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

export interface TaxaFormProps {
    taxaFound: Map<TaxonCode, FoundTaxon>,
}


const actionTaxonSetCount = (code:TaxonCode, newCount:number ) => ({
    code,
    newCount,
    type:"TAXON_SET_COUNT",
})

const actionTaxonAdd = (code:TaxonCode, count:number ) => ({
    code,
    count,
    type:"TAXON_ADD",
})

const actionTaxaClear = () => ({
    type:"TAXA_CLEAR",
})

// const actionTaxonDelete = (code:TaxonCode) => ({
//     code,
//     type:"TAXON_DELETE",
// })

export const mapState = (state:State): TaxaFormProps => {
    return { taxaFound: state.taxaFound }
}

// TODO (types): find out what type the props should be
// tslint:disable-next-line:max-classes-per-file
export class TaxaForm extends React.Component<any, {
    buttonText:          string,
    iPreselect:          number,
    taxonInputIsFocused: boolean,
    search:              string,
    taxaMatching:        TaxonCode[],
}> {
    private searchBox = React.createRef<HTMLInputElement>();
    private taxonRemoveText = ['Remove Taxon', 'Remove Taxa'];
    private taxonAddText    = ['Add Taxon', 'Add Taxa'];
    private addCount = 1;


    public componentWillMount() {
        this.setState({
            buttonText: this.taxonAddText[0],
            iPreselect: 0,
            search: '',
            taxaMatching: [] as TaxonCode[],
            taxonInputIsFocused: false,
        });
    }

    public componentDidMount() {
        this.focusTaxonSearchBox();
    }

    public componentDidUpdate(prevProps:any) {
        if (this.props.taxaFound !== prevProps.taxaFound) {
            if (this.props.taxaFound.size)
            {   localStorage.setItem("taxaFound", JSON.stringify(Array.from(this.props.taxaFound)));   }
            else
            {   localStorage.removeItem("taxaFound");   }
        }
    }

    public render() {
        const modifyTaxonCount = (newCount: number, code: TaxonCode) => {
            if (newCount !== null) {
                this.props.dispatch(actionTaxonSetCount(code, newCount));
            }
        }
        const addTaxon = (newCount: number, code: TaxonCode) => {
            this.props.dispatch(actionTaxonAdd(code, newCount));
        }

        const submitTaxon = (e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const iPreselect = this.state.iPreselect;
            // NOTE: avoids adding for invalid search
            if (this.state.search.length && iPreselect >= 0) {
                const code = this.state.taxaMatching[iPreselect];
                const shouldRemove = this.state.buttonText === this.taxonRemoveText[this.taxonTextI()];

                const tx = this.props.taxaFound.get(code);
                if (tx) {
                    const inc = shouldRemove ? -this.addCount : this.addCount;
                    modifyTaxonCount(tx.count + inc, code);
                }
                else if (!shouldRemove) { addTaxon(this.addCount, code); }
            }
            this.focusTaxonSearchBox();
        }

        const searchTextUpdate = (e: React.FormEvent<HTMLInputElement>) => {
            const search = e.currentTarget.value;
            // TODO (ux): is this the right trigger to reset the count?
            if (search.length === 0) { this.addCount = 1; }

            // TODO (opt): the minimum cutoff is a quick optimisation (there's a large hang otherwise)
            // ideally this would be fast enough to not require the cutoff
            const taxaMatching = (search.length >= 3)
                ? Array.from(allTaxa.keys()).filter(code =>
                    taxonFullName(code).toLowerCase().includes(search.toLowerCase()))
                    .sort((a: TaxonCode, b: TaxonCode) => cmp(taxonFullName(a), taxonFullName(b)))
                : [];

            const iPreselect = (taxaMatching.length)
                ? 0
                : -1;
            this.setState({ iPreselect, taxaMatching, search });
        }

        const setButtonText = (e: React.KeyboardEvent) => {
            const buttonText: string = (e.shiftKey)
                ? this.taxonRemoveText[this.taxonTextI()]
                : this.taxonAddText[this.taxonTextI()];
            if (this.state.buttonText !== buttonText) { this.setState({ buttonText }); }
        }

        const changeAutoCompleteSelect = (e: React.KeyboardEvent) => {
            const iPreselect = this.state.iPreselect;
            setButtonText(e);
            switch (e.key) {
                case "ArrowDown": if (iPreselect < this.state.taxaMatching.length - 1) { this.setState({ iPreselect: iPreselect + 1 }); } break;

                case "ArrowUp": if (iPreselect > 0) { this.setState({ iPreselect: iPreselect - 1 }); } break;
            }
        }

        const handleNumberChange = (val: number) => { this.addCount = val; }
        const ensureCountHasValue = () => { if (this.addCount === null) { this.addCount = 1; } }

        const handleTaxonInputFocus = () => { this.setState({ taxonInputIsFocused: true }) }
        const handleTaxonInputBlur = () => { this.setState({ taxonInputIsFocused: false }) }

        const clearTaxa = () => {
            if (confirm("Are you sure you want to clear all taxa?")) {
                this.props.dispatch(actionTaxaClear())
            }
        }

        return (<div>
            <TaxaScore taxaFound={Array.from(this.props.taxaFound.values())} />

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
                    taxaFound={this.props.taxaFound}
                    isFocused={this.state.taxonInputIsFocused}
                    iSelect={this.state.iPreselect}
                />
                : <p>Start entering the name of a scoring taxon</p>
            }

            <input type="submit" onClick={clearTaxa} value="Clear Taxa"/>

            <TaxaFoundList taxaFound={this.props.taxaFound} setCount={modifyTaxonCount} />
        </div>);
    }

    private focusTaxonSearchBox = () => {
        const node = this.searchBox.current;
        if (node) {
           node.focus()
           node.select()
        }
    }

    private taxonTextI = ():number => (+(this.addCount > 1));
}

export default connect(mapState)(TaxaForm) 