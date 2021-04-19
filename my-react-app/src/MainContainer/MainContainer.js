import React, {Component} from 'react';
import MainContents from "./Contents/MainContents";
import LoginForm from "./Contents/LoginForm";
import './MainContainer.css';

class MainContainer extends Component{
  render(){
    var content=this.props.content;
    return(
      <div className="MainContainer">
        <MainContents
          content={content}
        ></MainContents>

        <LoginForm></LoginForm>
      </div>
    )
  }
}
export default MainContainer;
