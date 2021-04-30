import React, {Component} from 'react';
import './TopMenu.css';

import eventReducer from "../../redux/reducers/eventReducer";
import action from "../../redux/actions";
import {connect} from 'react-redux';
import { toJS } from 'immutable'

class TopMenu extends Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){

    const reduxColor = this.props.eventReducerState.color || '교육'
    console.log(reduxColor.color)

    const colorStyle={
      backgroundColor: reduxColor.color
    }

    var titleList=this.props.dataList;

    return(
      <div className="grid">
          {titleList.map(titleList =>
            <div className="grid_item" key={titleList.id}>

              <div className="itemTitle">{titleList.title}</div>

              <div className="itemContents">
                {titleList.contents.map(data => <a key={data.id} href="/" data-content={data.title} onClick={function(e){
                  e.preventDefault();
                  this.props.onChangeContent(e.target.dataset.content);
                }.bind(this)}>{data.title}</a>)}
              </div>

            </div>)}
      </div>
    )
  }
}
const fromJsStateToProps = (state) => {
    const eventReducer = state.eventReducer;
    return {
        eventReducerState: eventReducer
    };
}

const fromJsDispatchToProps = dispatch => ({
    // onChangeText: () => dispatch(action.eventAction.setText({text:'교육끝'})),
    // onChangeText2: () => dispatch(action.eventAction.setText({text:'교육'})),
});


export default connect(fromJsStateToProps, fromJsDispatchToProps)(TopMenu);
