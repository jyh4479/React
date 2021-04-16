import React, {Component} from 'react';
import './TopMenu.css';

class TopMenu extends Component{

  render(){
    var titleList=this.props.dataList;
    var contentsList;
    // for (let i=0;i<titleList.length;i++){
    //   console.log(contentsList);
    //   //debugger;
    //   contentsList.push(titleList[i].contents);
    // }

    console.log( titleList ,' check ');
    return(
      <div className="grid">
          {titleList.map(titleList =>
            <div className="grid_item" key={titleList.id}>
              <div>{titleList.title}</div>
              {titleList.contents.map(data =>
              <div>{data.title}</div>)}
            </div>)}
      </div>
    )
  }
}
export default TopMenu;
