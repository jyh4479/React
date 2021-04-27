import React, {Component} from 'react';

import './QuickSlider.css';

class QuickSlider extends Component{
  render(){
    let ClickCheck=this.props.ClickCheck;
    const displayStyle={
      display: 'none'
    };
    const displayStyle2={
      display: 'block'
    };

    if(ClickCheck=="1") return (<div className="QuickSliderLocation" style={displayStyle}> This is Quick Slider! {ClickCheck} </div>);
    else return (<div className="QuickSliderLocation" style={displayStyle2}> This is Quick Slider! {ClickCheck} </div>)
  }
}
export default QuickSlider;
