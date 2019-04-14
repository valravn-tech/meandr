import * as React from "react"
import {allTaxa, Taxon, TaxonCode, taxonLevel} from "./alltaxa"
import {nextTaxonLevel, taxonGetCodeForLevel} from "./calculations"
import { taxonFullName } from './TaxaForm';

const assert = (truthy:any, msg?:string) => {
    if (! truthy) { throw new Error(msg); }
}


const codeILastNon0 = (code:TaxonCode):number | undefined => {
    let iLastNon0;
    for(let i = 0; i < code.length; ++i) {
        if (code[i] !== '0') {iLastNon0 = i;}
    }
    assert(iLastNon0 !== undefined);
    return iLastNon0;
}

const strSplice = (str:string, index:number, count:number, ...add:any) => {
    const arr = str.split('');
    arr.splice(index, count, add);
    return arr.join('');
}

// const isEven = (x:number):boolean => ( x % 2 === 0 )
const isOdd = (x:number):boolean => ( x % 2 === 1 )

export const GenParents: React.SFC<{}> = (props) => {
    const codes = Array.from(allTaxa.keys());
    const parentCode = (code:TaxonCode):string => {
        const lvl = taxonLevel(code);
        const parentLvl = nextTaxonLevel(lvl);
        if (! parentLvl) {
            assert(lvl === "major_group");
            return "undefined";
        }
        const parent = taxonGetCodeForLevel(code, parentLvl)
        assert(parent);
        return "'"+parent+"'" || "undefined";
    }

    const candidateCodes = (taxa: TaxonCode[], lvl:string) => (<div>
        <h3 id={'candidates_'+lvl}>// Candidates for {lvl}</h3>
        <table>
        {taxa
            .map(code => {
                const i = codeILastNon0(code) as number;
                const pCode = strSplice(code, i, 1, '0');
                return { code, i, pCode };
            })
            .filter(info => {
                const taxonGet = (code:TaxonCode):Taxon => (allTaxa.get(code) as Taxon);
                return (
                    isOdd(info.i)
                    && info.pCode !== "00000000"
                    && taxonLevel(info.code) === lvl
                    && codeILastNon0(info.pCode) === info.i - 1
                    && allTaxa.get(info.pCode) !== undefined
                    && ( lvl === 'family'
                        || (lvl === 'species' && taxonGet(info.pCode).species === "") // e.g. "50830140"
                    )
                )
            })
            .map((info, i, arr) => {
                const isNewParent = i === 0 || info.pCode !== arr[i - 1].pCode;
                return <tbody key={info.code}><tr>
                    <td>{isNewParent && "// " + taxonFullName(info.pCode)}</td>
                    </tr>
                    <tr>
                        <td/>
                        <td>.set('{info.code}',</td>
                        <td>'{info.pCode}')</td>
                        <td>// {taxonFullName(info.code)}</td>
                    </tr>
                </tbody>
            })}
            </table>
    </div>)

    return (<div>
        <h2>// Rule-based parents<br/>
            /////////////////////</h2>
        <p>{"export const taxaParents = new Map<TaxonCode, TaxonCode>(["}</p>
            { codes.map(code => <span key={code}>{
                `['${code}', ${parentCode(code)}], // ${taxonFullName(code)}`
            }<br/></span>) }
        <p>])</p>

        <h2>// Candidates for change<br/>
            ////////////////////////</h2>
        <p>{candidateCodes(codes, 'major_group')}</p>
        <p>{candidateCodes(codes, 'family')}</p>
        <p>{candidateCodes(codes, 'genus')}</p>
        <p>{candidateCodes(codes, 'species')}</p>
    </div>)
}