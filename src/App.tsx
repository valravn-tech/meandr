import * as React from 'react';
import './App.css';
import TaxaForm from './TaxaForm'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <h1 className="App-title">MEANDR</h1>
        <p>Basic BMWP input form:</p>
        <TaxaForm />
      </div>
    );
  }
}

export default App;
