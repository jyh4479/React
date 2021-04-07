import React, {Component} from 'react';
import ComponentTest from "./components/ComponentTest";
import Subject from "./components/Subject";
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      mode:"read",
      contentmode:1,
      subject:{title:"Read!", desc:"This is read mode!"},
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

    var _selectContent, i=0, data=this.state.contents
    while(i<data.length){
      if(data[i].id===this.state.contentmode){
        _selectContent=data[i].desc;
        break;
      }
      i=i+1
    }

    return(
      <div className="App">
        <Subject
          title={_title}
          sub={_desc}
          onChangePage={function(){
            if(this.state.mode==='read'){
              this.setState({mode:'welcome'})
            }
            else{
              this.setState({mode:'read'})
            }
          }.bind(this)}
          >
        </Subject>

        <ComponentTest
          data={this.state.contents}
          content={_selectContent}
          onChangeContent={function(id){
            this.setState({contentmode:Number(id)})
          }.bind(this)}
          ></ComponentTest>
      </div>
    );
  }
}

export default App;
