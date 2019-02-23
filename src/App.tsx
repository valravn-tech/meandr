import * as React from 'react';
import './App.css';
import { NewCodes } from './makeCodes';
import TaxaForm from './TaxaForm'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <h1 className="App-title">MEANDR</h1>
        <TaxaForm />
        <hr/>
        <NewCodes />
      </div>
    );
  }
}

export default App;
