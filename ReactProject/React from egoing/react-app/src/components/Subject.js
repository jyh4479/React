import React, {Component} from 'react';

class Subject extends Component{
  render(){
    return(
      <header>
        <h1><a href="/" onClick={function(e){
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>ChangeMode</a></h1>
        <h1>{this.props.title || "This is Default title"}</h1>
        {this.props.sub || "This is Default sub"}
      </header>
    );
  }
}
export default Subject;
