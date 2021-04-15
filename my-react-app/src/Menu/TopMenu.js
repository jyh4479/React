import React, {Component} from 'react';

class TopMenu extends Component{

  render(){
    var dataList=this.props.dataList;
    console.log(dataList);
    return(
      <p>{dataList.map(dataList => <div>{dataList.title}</div>)}</p>
    )
  }
}
export default TopMenu;
