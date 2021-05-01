import React, {Component} from 'react';
import {Calendar} from 'antd';

import './antdCopy.css';
import './AntdCalendar.css';

function onPanelChange(value, mode){
  console.log(value, mode);
}

class AntdCalendar extends Component{
  render(){
    return(
      <div className="site-calendar-demo-card">
        <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
      </div>
    )
  }
}
export default AntdCalendar;
