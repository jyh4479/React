import React, {Component} from 'react';

class JsonList extends Component{
  render(){
    var dataList=this.props.dataList;
    console.log(dataList);
    return(
      <p> {dataList.map(dataList => <div>{dataList.id} {dataList.title} {dataList.contest} {dataList.Date}</div>)} </p>
    )
  }
}
export default JsonList;
