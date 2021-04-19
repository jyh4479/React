import React, {Component} from 'react';
import './MainContents.css';

class MainContents extends Component{
    render(){
        var content=this.props.content;

        if(content=="Content1-1"){
          return(<div>HI</div>)
        }
        else if (content=="Content1-2") {
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
