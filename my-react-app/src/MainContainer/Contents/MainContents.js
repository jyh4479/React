import React, {Component} from 'react';
import './MainContents.css';
import DataList from './data.json';

class MainContents extends Component{
    render(){
        var content=this.props.content;
        console.log(DataList);

        if(content==="Content1-1"){
          return(
            <div className="prod_list_slide">
                <ul className="swiper-wrapper">
                  {DataList.map(data => <li className="swiper-slide">
                      <div className="img">
                        <img src={data.image}></img>
                      </div>

                      <div className="tag_group">
                        <span class="tag">패키지</span>
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
        else if (content==="Content1-2") {
          return(<div>HI</div>)
        }
        else{
          return(<div>정보없음!</div>)
        }
        // return(
        //     <div className="maincontent"> {content} </div>
        // )
    }
}
export default MainContents;

/*
<div className="img">
  <img src={data.image}></img>
</div>

<div className="tag_group">
  <span class="tag">패키지</span>
</div>

<strong>{data.title}</strong>

<div className="price_group">
  <strong className="price now">
    {data.price}
  </strong>
</div>
*/
