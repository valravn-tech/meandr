import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { FoundTaxon, TaxonCode } from './alltaxa';
import './App.css';
// import { NewCodes } from './makeCodes';
import FileOptions from './file'
import TaxaForm from './TaxaForm'

export interface State {
  taxaFound: Map<TaxonCode, FoundTaxon>,
}

// TODO (internals): should this use the TAXA_SET_ALL action?
const persistPreviousState = ():State => {
  const savedFoundStr = localStorage.getItem("taxaFound");
  const savedFound = savedFoundStr ? JSON.parse(savedFoundStr) : undefined;
  return {
    taxaFound: new Map(savedFound),
  }
}

const die = (s:string) => { throw new Error("s") }

const reducer = (state:State = persistPreviousState(), action:any): State => {
  switch(action.type) {
    case "TAXA_CLEAR": {
      const taxaFound = new Map<TaxonCode,FoundTaxon>();
      return { taxaFound };
    }

    case "TAXA_SET_ALL": {
      const taxaFound = action.taxaFound;
      return { taxaFound };
    }

    case "TAXON_ADD": {
      // I'm duplicating this based on redux tutorials
      // still not 100% sure it's the best thing to do...
      const taxaFound = new Map(state.taxaFound);
      const tx:FoundTaxon = action.taxon;
      taxaFound.set(tx.code, tx);
      return { taxaFound };
    }
      
    case "TAXON_REMOVE": {
      const taxaFound = new Map(state.taxaFound);
      taxaFound.delete(action.code);
      return { taxaFound };
    }
      
    case "TAXON_SET_COUNT": {
      const taxaFound = new Map(state.taxaFound); // TODO (fix): does this modify the previous state?
      const tx = taxaFound.get(action.code);
      if (! tx) { die("taxon not in state"); return state; }

      const newCount = (countOld:number, countNew:number):number => (
        Math.max(countNew === undefined
          ? countOld
          : countNew,
          0)
      )
      tx.countAdult = newCount(tx.countAdult, action.newCount.adult);
      tx.countChild = newCount(tx.countChild, action.newCount.child);

      // TODO(ux): do we want to auto-delete when hitting 0?
      // quicker to use, but more error-prone
      // maybe only on loss of focus with 0?
      if (tx.countAdult === 0 && tx.countChild === 0)
      { taxaFound.delete(action.code); }
      else
      { taxaFound.set(action.code, tx); }
      return { taxaFound };
    }
      
    default:
    return state;
  }
}

const store = createStore(reducer);

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <h1 className="App-title">MEANDR</h1>
        <FileOptions />
        <TaxaForm />
        {/* <hr/> */}
        {/* <NewCodes /> */}
      </Provider>
    );
  }
}

export default App;
