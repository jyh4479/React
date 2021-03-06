import React, {Component} from 'react';
import axios from 'axios';
import ComponentTest from "./components/ComponentTest";
import Subject from "./components/Subject";
import JsonList from "./components/JsonList"
import './App.css';

class App extends Component{

  /* Axios테스트 and 비동기 data전달 처리를 테스트하기 위한 함수 */
  async f1(){
    try{
      const response = await axios.get("http://localhost:8080/react");
      console.log("Function f1's data is ["+response.data+"]");
      return response.data;
    }
    catch(error){
      console.error(error);
    }
  }
  /* Axios테스트 and 비동기 data전달 처리를 테스트하기 위한 함수 */

/* 비동기 처리 로직 vue에도 적용가능한지 찾아봐야함 */
  getMyData = async() =>{ // --> Spring boot에서 반환하는 String data처리
    let data = await axios.get("http://localhost:8000/Hello");
    data = data.data;
    console.log('data is [' + JSON.stringify(data+']'));
    this.setState({data});
  };

  getMyList = async() =>{ // --> Spring boot에서 반환하는 여러 Json data처리
    let dataList = await axios.get("http://localhost:8000/json");
    dataList = dataList.data;
    console.log('dataList are [' + JSON.stringify(dataList+']'));
    this.setState({dataList});
  };

  componentDidMount() { // --> react mount시 실행되는 함수
      console.log('in componentDidMount');
      this.getMyData();
      this.getMyList();
  }
  /* Update에서 무한 반복이 일어난다 --> 해당 문제에대한 참조 (https://ko.reactjs.org/docs/react-component.html) */
  componentDidUpdate() {
      console.log('in componentDidUpdate');
  }
  componentWillUnmount() {
      console.log('in componentWillUnmount');
  }
/* 비동기 처리 로직 vue에도 적용가능한지 찾아봐야함 */

  constructor(props){
    super(props);
    this.state={
      mode:"read",
      data:[],
      dataList:[],
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
    var _title,_desc=null;
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

    // var test1;
    // _message=this.f1();
    // _message.then((value)=>{
    //   test1=value;
    //   console.log(test1+" HIHI");
    // });
    // console.log(test1+" HIHI1111");

    // //axios test
    // axios.get("http://localhost:8080/react")
    // .then(response=>{
    //   this.setState({_title: response.data})
    // })
    // .catch(error=>{
    //   console.log(error);
    // });
    // //axios test

    return(
      <div className="App">
      {/* ------------ Subject Component ------------ */}
        <Subject
          title={this.state.data+" "+_title}
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
      {/* ------------ Subject Component ------------ */}


      {/* ------------ ComponentTest Component ------------ */}
        <ComponentTest
          data={this.state.contents}
          content={_selectContent}
          onChangeContent={function(id){
            this.setState({contentmode:Number(id)})
          }.bind(this)}
          ></ComponentTest>
     {/* ------------ ComponentTest Component ------------ */}

     {/* ------------ JsonList Component ------------ */}
     <JsonList dataList={this.state.dataList}></JsonList>
     {/* ------------ JsonList Component ------------ */}
      </div>
    );
  }
}
export default App;
