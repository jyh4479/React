import React, {Component} from 'react';
import axios from 'axios';
import TopMenu from "./Menu/TopMenu";
import MainContents from "./Contents/MainContents";

class App extends Component{

  getMenuDataList = async()=>{
    let dataList= await axios.get("http://localhost:8000/topMenu");
    dataList=dataList.data;
    console.log('DataList ==> '+ JSON.stringify(dataList));
    this.setState({MenuList: dataList});
  }

  getMainContentData = async(address)=>{
    let content;
    try{
      content=await axios.get("http://localhost:8000/"+address);
    }
    catch(e){
      console.log("컨트롤러 연동 필요!");
      this.setState({MainContentData: "컨트롤러 연동 필요!"});
      return;
    }
    console.log('MainContent ==> '+JSON.stringify(content));
    this.setState({MainContentData: content.data});
  }
  

  componentDidMount(){
    this.getMenuDataList();
  }
  componentDidUpdate(){
    console.log('Did update');
    //this.getMainContentData(this.state.MainContentKey); --> 무한루프 컨트롤해야함! 중요!
  }

  constructor(props){
    super(props);
    this.state={
      MenuList:[], //초기화가 중요하다 null로하지말자 (https://moonformeli.tistory.com/3)
      MainContentKey:"초기값",
      MainContentData:"초기값"
    }
  }
  render(){
    return(
      <div className="App">
        <TopMenu
          dataList={this.state.MenuList}
          onChangeContent={function(contentName){
            console.log(contentName+' check ');
            this.setState({MainContentKey:contentName});
          }.bind(this)}
        ></TopMenu>

        <MainContents 
          content={this.state.MainContentData}
        ></MainContents>
      </div>
    );
  }
}
export default App;
