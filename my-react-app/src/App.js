import React, {Component} from 'react';
import axios from 'axios';

import TopMenu from "./Menu/TopMenu";
import MainContainer from "./MainContainer/MainContainer";
import Footer from "./Footer/Footer";
import TopBanner from "./TopBanner/TopBanner";
import QuickMenu from "./QuickMenu/QuickMenu";

import "./App.css";

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


  /* -------------- 라이프사이클 관련 함수 -------------- */
  //https://velog.io/@kyusung/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B5%90%EA%B3%BC%EC%84%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%EC%9D%B4%EB%B2%A4%ED%8A%B8

  // componentWillMount(){
  //   this.getMenuDataList(); // --> render전에 한번 실행 --> WillMount같은 경우 공식홈페이지에서 권고하지 않음 (내용확인하기)
  // }

  componentDidMount(){
    this.getMenuDataList(); // --> render한번 진행하고 실행
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.MainContentKey!==nextState.MainContentKey){
      this.getMainContentData(nextState.MainContentKey);
    }
    return true;
  }

  // componentWillUpdate(nextProps, nextState){
  // }

  componentDidUpdate(prevProps,prevState){
    // console.log(this.state.MainContentKey);
    // console.log(prevState.MainContentKey);
  }
  /* -------------- 라이프사이클 관련 함수 -------------- */

  constructor(props){
    super(props);
    this.state={
      MenuList:[], //초기화가 중요하다 null로하지말자 (https://moonformeli.tistory.com/3) --> 라이프사이클과 관련
      MainContentKey:"초기값",
      MainContentData:"초기값"
    }
  }
  render(){
    return(
      <div className="App">
        <TopBanner></TopBanner>

        <TopMenu
          dataList={this.state.MenuList}
          onChangeContent={function(contentName){
            this.setState({MainContentKey:contentName});
          }.bind(this)}
        ></TopMenu>

        <MainContainer
          /*content={this.state.MainContentData}*/
          content={this.state.MainContentKey}
        ></MainContainer>

        <Footer></Footer>

        <QuickMenu></QuickMenu>
      </div>
    );
  }
}
export default App;
