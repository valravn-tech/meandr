import * as React from 'react'
import { connect } from 'react-redux';
import { FoundTaxon, TaxonCode } from './alltaxa';
import { singleTaxonInfo, SingleTaxonInfo } from './calculations';
import { mapState, taxonFullName } from './TaxaForm';


// https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
const download = (filename: string, text: string) => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

const loadFileContents = (file:File, output:(stringContents: string)=>any) => {
    const fr = new FileReader();
    fr.onload = () => { output(fr.result as string); }
    fr.readAsText(file);
}


const objectAsArray = (obj:any, prefix?:string): Array<[string, {}]> => {
    const entries = Object.entries(obj);
    const flatEntries = entries.reduce((arr: Array<[string, {}]>, entry) => {
        const key = entry[0];
        const val = entry[1];
        if (typeof(val) === "object") {
            const subEntries = objectAsArray(val, key + "_");
            arr.push(...subEntries)
        }
        else 
        {   arr.push([key, val]);   }
        return arr;
    }, []);

    return flatEntries.map((entry) => {
       const prefixed = entry;
       if(prefix !== undefined) { prefixed[0] = prefix + prefixed[0]; }
       return prefixed;
    });
}

// const toCSV = (rows: any[]):string => {
//     let outText = "";
//     const commaOrRow = (i:number, n:number):string => (
//         i === n-1 ? "\r\n" : ","
//     )

//     if(rows.length)
//     {
//         const flatRows = rows.map(row => objectAsArray(row));
//         const numColumns = flatRows[0].length;

//         // add headers
//         for (let i = 0; i < numColumns; ++i) {
//             const key = flatRows[0][i][0];
//             outText += key + commaOrRow(i, numColumns);
//         }

//         // add data
//         for (const row of flatRows) {
//             for (let i = 0; i < numColumns; ++i) {
//                 const val = row[i][1];
//                 outText += val + commaOrRow(i, numColumns);
//             }
//         }
//     }

//     return outText;
// }

const objChildByStr = (obj:{}, str:string):{} | undefined => str.split('.').reduce((a:{}, b:string) => a && a[b], obj);

const taxaToCSV = (rows: SingleTaxonInfo[]):string => {
    let outText = "";
    const commaOrRow = (i:number, n:number):string => (
        i === n-1 ? "\r\n" : ","
    )

    if(rows.length)
    {
        // const flatRows = rows.map(row => objectAsArray(row));

        const str = (obj:any):string => ( (obj !== undefined) ? obj.toString() : "" )

        const columns = [
            { header:"Code",                get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "code")),                  },
            { header:"Full Name",           get:(tx:SingleTaxonInfo):string => taxonFullName(tx.code),                          },
            { header:"Adults",              get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "countAdult")),            },
            { header:"Larvae",              get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "countChild")),            },
            { header:"AWIC",                get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "awic")),                  },
            { header:"BMWP (original)",     get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "bmwp.score_orig"))        },
            { header:"BMWP (revised)",      get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "bmwp.score_rev"))         },
            { header:"BMWP (riffle)",       get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "bmwp.score_riffle"))      },
            { header:"BMWP (pool)",         get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "bmwp.score_pool"))        },
            { header:"BMWP (r&p)",          get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "bmwp.score_riffle_pool")) },
            { header:"CCI",                 get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "cci")),                   },
            { header:"DEHLI",               get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "dehli")),                 },
            { header:"LIFE (family)",       get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "lifeFam.score")),         },
            { header:"LIFE (family) flow",  get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "lifeFam.flow")),          },
            { header:"LIFE (species)",      get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "lifeSpc.score")),         },
            { header:"LIFE (species) flow", get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "lifeSpc.flow")),          },
            { header:"PSI (family)",        get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "psiFam.score")),          },
            { header:"PSI (family) FSSR",   get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "psiFam.fssr")),           },
            { header:"PSI (species)",       get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "psiSpc.score")),          },
            { header:"PSI (species) FSSR",  get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "psiSpc.fssr")),           },
            { header:"WHPT",                get:(tx:SingleTaxonInfo):string => str(objChildByStr(tx, "whpt")),                  },

        ]

        columns.forEach((col, i) => outText += col.header + commaOrRow(i, columns.length))

        for (const row of rows) {
            columns.forEach((col, i) => { outText += col.get(row) + commaOrRow(i, columns.length); });
        }
    }

    return outText;
}

const FileButtons:React.SFC = (props:any) => {
    const downloadTaxa = () => {
        download("taxa.json", JSON.stringify(Array.from(props.taxaFound)));
    }

    const uploadTaxa = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (! e.target.files) { return; }
        loadFileContents(e.target.files[0], (taxaJSON: string) => {
            const taxaFound = new Map<TaxonCode, FoundTaxon>(JSON.parse(taxaJSON));
            props.dispatch({ type: "TAXA_SET_ALL", taxaFound });
        });
    }
    
    const exportTaxaCSV = () => {
        const taxa: FoundTaxon[] = Array.from(props.taxaFound.values())
        const taxaInfo = taxa.map(tx => (singleTaxonInfo(tx)));
        // tslint:disable-next-line:no-console
        console.log(taxaInfo);
        download("taxa.csv", taxaToCSV((taxaInfo)))
    }

    return (
        <div>
            <button onClick={downloadTaxa}>Save</button>
            <input type="file" onChange={uploadTaxa}/>
            <button onClick={exportTaxaCSV}>Export Taxa CSV</button>
        </div>
    )
}

export default connect(mapState)(FileButtons)
