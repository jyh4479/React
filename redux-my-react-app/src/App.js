import React, {Component} from 'react';

import {Route, Link} from 'react-router-dom';

import HomePage from './Page/HomePage';
import TestPage from './Page/TestPage';
import TestPage2 from './Page/TestPage2';
import TestPage3 from './Page/TestPage3';

import './App.css';


import eventReducer from "./redux/reducers/eventReducer";
import action from "./redux/actions";
import {connect} from 'react-redux';
import { toJS } from 'immutable'

//exact를 쓰면서 다른 주소에 "/"가 포함되어 있어도 해당 컴포넌트가 출력되지 않음

//Router를 사용하는 이유는 기존 a태그의 href를 사용하면서 모두 리로드하는 것을 대신해서 바뀐 화면만 보여주고싶은것
//-->그래서 href로 Link를 걸지 않는다
class App extends Component {
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

    return (
      <div className="App">
        <div>
          <ul className="mainNav" style={colorStyle}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Test"> TestPage </Link></li>
            <li><Link to="/Test2"> TestPage2 </Link></li>
            <li><Link to="/Test3"> TestPage3 </Link></li>
          </ul>
        </div>
        <Route path="/" component={HomePage} exact/>
        <Route path="/Test" component={TestPage}/>
        <Route path="/Test2" component={TestPage2}/>
        <Route path="/Test3" component={TestPage3}/>
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


export default connect(fromJsStateToProps, fromJsDispatchToProps)(App);
