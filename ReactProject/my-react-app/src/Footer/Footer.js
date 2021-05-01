import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <div className="inner relative">
          <div className="address">
            <p><b>제주관광공사지정면세점 따라하기!</b></p>
            <p><a>SmartWork팀 | 정용훈</a></p>
            <p><a>TEL. 010-xxxx-xxxx | FAX xxx-xxx-xxxx | EMAIL xx@xxx.com</a></p>
            <p><a>과천코오롱타워</a></p>
            <p><a>Copyright@나</a></p>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer;
