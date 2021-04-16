import React, {Component} from 'react';

class MainContents extends Component{
    render(){
        var content=this.props.content;
        return(
            <div> {content} </div>
        )
    }
}
export default MainContents;