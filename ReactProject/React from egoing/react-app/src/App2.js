import React, {Component} from 'react';
import ViewHTML1 from './components/ViewHTML1';
import ViewHTML2 from './components/ViewHTML2';

class App2 extends Component{
  constructor(props){
    super(props);
    this.state={
      mode:true
    }
  }

  render(){
    var page1=<div className='App2'><ViewHTML1></ViewHTML1></div>;
    var page2=<div className='App2'><ViewHTML2></ViewHTML2></div>;

    // case3
    switch(this.state.mode){
      case true:
      return (page1);
      break;

      case false:
      return (page2);
      break;
    }

    // // case1
    // if(this.state.mode===true){
    //   return(page1);
    // }
    // else{
    //   return(page2);
    // }

    // // case2
    // return (this.state.mode ? page1 : page2);

    // case3
    switch(this.state.mode){
      case true:
      return (page1);
      break;

      case false:
      return (page2);
      break;
    }
  }
}
export default App2;
