import React, {Component} from 'react';
import './MainContents.css';

class MainContents extends Component{
    render(){
        var content=this.props.content;
        return(
            <div className="maincontent"> {content} </div>
        )
    }
}
export default MainContents;