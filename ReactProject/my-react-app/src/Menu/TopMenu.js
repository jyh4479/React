import React, {Component} from 'react';
import './TopMenu.css';

class TopMenu extends Component{

  render(){
    var titleList=this.props.dataList;

    return(
      <div className="grid">
          {titleList.map(titleList =>
            <div className="grid_item" key={titleList.id}>

              <div className="itemTitle">{titleList.title}</div>

              <div className="itemContents">
                {titleList.contents.map(data => <a key={data.id} href="/" data-content={data.title} onClick={function(e){
                  e.preventDefault();
                  this.props.onChangeContent(e.target.dataset.content);
                }.bind(this)}>{data.title}</a>)}
              </div>

            </div>)}
      </div>
    )
  }
}
export default TopMenu;
