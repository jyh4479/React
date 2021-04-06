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
  constructor(props){
    super(props);
    this.state={
      subject:{title:"WEB", sub:"World Wid Web!"},

      contents:[
        {id:1, title:'test1', desc: 'This is test1'},
        {id:2, title:'test2', desc: 'This is test2'},
        {id:3, title:'test3', desc: 'This is test3'}
      ]
    }
  }

  render(){
    return(
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <ComponentTest data={this.state.contents}></ComponentTest>
      </div>
    );
  }
}

export default App;
