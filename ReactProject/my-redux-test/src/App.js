import logo from './logo.svg';
import React,{Component} from "react";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";
import './App.css';
import ClickPage from "./components/ClickPage";

class App extends Component{
    // state={number:0}
    render(){
        return (
            <div className="App">
                <h1>Root</h1>
                {/*<AddNumberRoot onClick={function(size){*/}
                {/*this.setState({number:this.state.number+size});*/}
                {/*}.bind(this)}></AddNumberRoot>*/}

                {/*<DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>*/}

                <AddNumberRoot></AddNumberRoot>
                <DisplayNumberRoot></DisplayNumberRoot>
            </div>
        );
    }
}

export default App;