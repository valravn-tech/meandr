import * as React from 'react'
import { connect } from 'react-redux';
import { FoundTaxon, TaxonCode } from './alltaxa';
import { mapState } from './TaxaForm';


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
    return (
        <div>
            <button onClick={downloadTaxa}>Save</button>
            <input type="file" onChange={uploadTaxa}/>
        </div>
    )
}

export default connect(mapState)(FileButtons)