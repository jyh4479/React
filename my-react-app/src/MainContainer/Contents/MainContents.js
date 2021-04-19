import React, {Component} from 'react';
import ContentList from './ContentList';
import './MainContents.css';

class MainContents extends Component{
    render(){
        var content=this.props.content;

        if(content==="Content1-1"){
          return(
            <div>
              <ContentList content={content}></ContentList>
            </div>
          )
        }
        else if (content==="Content1-2") {
          return(
            <div>
              <ContentList content={content}></ContentList>
            </div>
          )
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
