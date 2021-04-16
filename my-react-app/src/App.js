import React, {Component} from 'react';
import axios from 'axios';
import TopMenu from "./Menu/TopMenu";

class App extends Component{

  getMenuDataList = async()=>{
    let dataList= await axios.get("http://localhost:8000/topMenu");
    dataList=dataList.data;
    console.log('DataList ==> '+ JSON.stringify(dataList));
    this.setState({MenuList: dataList});
  }

  componentDidMount(){
    this.getMenuDataList();
  }

  constructor(props){
    super(props);
    this.state={
      MenuList:[] //초기화가 중요하다 null로하지말자 (https://moonformeli.tistory.com/3)
    }
  }
  render(){
    return(
      <TopMenu
        dataList={this.state.MenuList}>
      </TopMenu>
    );
  }
}
export default App;
