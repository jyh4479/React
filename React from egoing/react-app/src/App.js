/*import logo from './logo.svg';
import './App.css';
*/
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/



//import logo from './logo.svg';
import React, {Component} from 'react';
import ComponentTest from "./components/ComponentTest";
import Subject from "./components/Subject";
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Subject title="안녕" sub="잘가"></Subject>
        <Subject></Subject>
        <ComponentTest></ComponentTest>
      </div>
    );
  }
}

export default App;
