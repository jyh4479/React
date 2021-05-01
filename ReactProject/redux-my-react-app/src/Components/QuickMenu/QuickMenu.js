import React, {Component} from 'react';
import QuickSlider from './QuickSlider';
import './QuickMenu.css';


import eventReducer from "../../redux/reducers/eventReducer";
import action from "../../redux/actions";
import {connect} from 'react-redux';
import { toJS } from 'immutable'


class QuickMenu extends Component{
  constructor(props){
    super(props);
    this.clickEvent=this.clickEvent.bind(this);
    this.state={
      ClickCheck:0
    }
  }

  /*기존 기능 함*/
  clickEvent(checkNumber,e){
    if(this.state.ClickCheck==0){
      this.setState({ClickCheck:checkNumber});
      console.log(checkNumber)
      console.log(e)
    }
    else{
      this.setState({ClickCheck:0});
    }
  }
  /*기존 기능 함수*/

  /*Redux Test 함수*/
  changeColor(color,e){
    this.props.dispatch(action.eventAction.setColor({color:{color}}))
    console.log(color)
  }
  /*Redux Test 함수*/

  render(){

    const reduxColor = this.props.eventReducerState.color || '교육'

    const colorStyle={
      backgroundColor: reduxColor.color
    }

    /*기존 기능 로직*/
    let sliderStyle=null;
    const displayStyle={
      right:'250px'
    };

    if(this.state.ClickCheck==0){
      sliderStyle=null;
    }
    else{
      sliderStyle=displayStyle;
    }

    return(
        <div className='quickMenu' style={sliderStyle}>
          <ul>
            <input className="hideButton" type="checkbox" id="menuBtn"></input>
            <input className="hideButton" type="checkbox" id="menuBtn2"></input>
            <input className="hideButton" type="checkbox" id="menuBtn3"></input>
            <input className="hideButton" type="checkbox" id="menuBtn4"></input>
            <input className="hideButton" type="checkbox" id="menuBtn5"></input>
            <QuickSlider ClickCheck={this.state.ClickCheck}></QuickSlider>
          </ul>

          <ul>
            <li className="icon01">
              <label for="menuBtn" href="javascript:void(0);" onClick={this.changeColor.bind(this,"black")}>
                <span className="ico" style={colorStyle}>testMenu1</span>
                <div className="hover" style={colorStyle}>내정보</div>
              </label>
            </li>

            <li className="icon02">
              <label for="menuBtn2" href="javascript:void(0);" onClick={this.changeColor.bind(this,"red")}>
                <span className="ico" style={colorStyle}>testMenu</span>
                <div className="hover" style={colorStyle}>환율</div>
              </label>
            </li>


            <li className="icon03">
              <label for="menuBtn3" href="javascript:void(0);" style={colorStyle} onClick={this.changeColor.bind(this,"skyblue")}>
                <span className="ico" style={colorStyle}>testMenu3</span>
                <div className="hover" style={colorStyle}>구매가능시간</div>
              </label>
            </li>


            <li className="icon04">
              <label for="menuBtn4" href="javascript:void(0);" style={colorStyle} onClick={this.changeColor.bind(this,"green")}>
                <span className="ico" style={colorStyle}>testMenu4</span>
                <div className="hover" style={colorStyle}>장바구니</div>
              </label>
            </li>

            <li className="icon05">
              <label for="menuBtn5" href="javascript:void(0);" style={colorStyle} onClick={this.changeColor.bind(this,"yellow")}>
                <span className="ico" style={colorStyle}>testMenu5</span>
                <div className="hover" style={colorStyle}>오늘본상품</div>
              </label>
            </li>

            <li className="icon06">
              <label href="#">
                <span className="ico" style={colorStyle}>testMenu6</span>
              </label>
            </li>

          </ul>
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
  dispatch //-->https://stackoverflow.com/questions/36850988/this-props-dispatch-not-a-function-react-redux/36851517

    // onChangeText: () => dispatch(action.eventAction.setText({text:'교육끝'})),
    // onChangeText2: () => dispatch(action.eventAction.setText({text:'교육'})),
});

export default connect(fromJsStateToProps, fromJsDispatchToProps)(QuickMenu);
