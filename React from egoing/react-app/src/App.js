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
      mode:"read",
      subject:{title:"WEB", desc:"World Wid Web!"},
      welcome:{title:"Welcome!", desc:"This is welcome mode!"},

      contents:[
        {id:1, title:'test1', desc: 'This is test1'},
        {id:2, title:'test2', desc: 'This is test2'},
        {id:3, title:'test3', desc: 'This is test3'}
      ]
    }
  }

  render(){
    var _title, _desc=null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    }
    else if(this.state.mode==='read'){
      _title=this.state.subject.title;
      _desc=this.state.subject.desc;
    }
    return(
      <div className="App">
        <h1><a href='/' onClick={function(e){
          console.log(e);
          alert(123);
          e.preventDefault() //--> a태그의 리로드하는 기본 방식을 막아줌
          //this.state.mode='welcome'; --> 1. event function 안에서 this는 아무것도 가리키고있지 않다.(bind(this)로 해결가능)
          //                           --> 2. 리액트의 변수불변 법칙? --> set함수를 이용해야함
          if(this.state.mode==="read"){
            this.setState({
              mode:'welcome'
            });
          }
          else{
            this.setState({
              mode:'read'
            });
          }
        }.bind(this)}>MODE</a></h1>
        <Subject title={_title} sub={_desc}></Subject>
        <ComponentTest data={this.state.contents}></ComponentTest>
      </div>
    );
  }
}

export default App;
