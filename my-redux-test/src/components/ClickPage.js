import React, {Component} from 'react';

import action from '../redux/actions';
import {connect} from 'react-redux';


class ClickPage extends Component{

  clickFunction(){
    this.props.dispatch(action.eventAction.setText({text:"교육끝"}));
  }

  render(){
    return(
      <div>
        <button onClick={()=>this.clickFunction()}>HIHI</button>
      </div>
    )
  }
}
export default connect()(ClickPage);
