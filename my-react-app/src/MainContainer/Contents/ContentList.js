import React, {Component} from 'react';
import DataList from './data.json';
import DataList2 from './data2.json';
import './ContentList';

class ContentList extends Component{
  render(){
    var thisContent=this.props.content;

    var JsonDataList=[];
    if(thisContent==='Content1-1'){
      JsonDataList=DataList;
    }
    else if(thisContent==='Content1-2'){
      JsonDataList=DataList2;
    }

    return(
      <div className="prod_list_slide">
          <ul className="swiper-wrapper">
            {JsonDataList.map(data => <li className="swiper-slide">
                <div className="img">
                  <img src={data.image}></img>
                </div>

                <div className="tag_group">
                  <span class="tag">{thisContent}</span>
                </div>

                <strong className="item_title">{data.title}</strong>

                <div className="price_group">
                  <strong className="price now">
                    {data.price}
                  </strong>
                </div>
              </li>)}
          </ul>
      </div>
    )
  }
}
export default ContentList;
