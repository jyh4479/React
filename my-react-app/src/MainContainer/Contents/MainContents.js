import React, {Component} from 'react';
import ContentList from './ContentList';
import TestSlider from './TestSlider';
import TestBannerSlider from './TestBannerSlider';
import './MainContents.css';

class MainContents extends Component{
    render(){
        var content=this.props.content;

        if(content==="Content1-1"){
          return(
            <div className="fixSize">
              <TestBannerSlider></TestBannerSlider>
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
        else if(content==="Content2-1"){
          return(
            <div className="MainContents">
              <ContentList content={content}></ContentList>
            </div>
          )
        }
        else{
          return(/*<div className="testStyle">정보없음!</div>*/
          <div className="MainContents">
            <TestSlider></TestSlider>
          </div>
          )
        }
        // return(
        //     <div className="maincontent"> {content} </div>
        // )
    }
}
export default MainContents;
