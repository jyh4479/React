import React, {Component} from 'react';

class JsonList extends Component{
  render(){
    var dataList=this.props.dataList;
    console.log(dataList);
    return(
      <h1> {dataList.map(dataList => <div>{dataList.id}</div>)} </h1>
    )
  }
}
export default JsonList;
