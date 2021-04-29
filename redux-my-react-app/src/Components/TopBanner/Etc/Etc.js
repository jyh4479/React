import React, {Component} from 'react';
import './Etc.css';

class Etc extends Component{
  render(){
    return(
      <div className="Etc">
        <div className="Etclocation"><a href="#">베스트샵</a></div>
        <div className="Etclocation"><a href="#">기획전</a></div>
        <div className="Etclocation"><a href="#">이벤트</a></div>
        <div className="Etclocation"><a href="#">명품관</a></div>
        <div className="Etclocation"><a href="#">쿠폰존</a></div>
      </div>
    )
  }
}
export default Etc;
