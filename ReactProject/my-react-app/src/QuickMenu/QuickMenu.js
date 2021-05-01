import React, {Component} from 'react';
import './QuickMenu.css';

class QuickMenu extends Component{
  render(){
    return(
        <div className='quickMenu'>
          <ul>
            <li className="icon01">
              <a href="javascript:void(0);">
                <span className="ico">testMenu1</span>
                <div className="hover">내정보</div>
              </a>
            </li>

            <li className="icon02">
              <a href="javascript:void(0);">
                <span className="ico">testMenu</span>
                <div className="hover">환율</div>
              </a>
            </li>

            <li className="icon03">
              <a href="javascript:void(0);">
                <span className="ico">testMenu3</span>
                <div className="hover">구매가능시간</div>
              </a>
            </li>

            <li className="icon04">
              <a href="javascript:void(0);">
                <span className="ico">testMenu4</span>
                <div className="hover">장바구니</div>
              </a>
            </li>

            <li className="icon05">
              <a href="javascript:void(0);">
                <span className="ico">testMenu5</span>
                <div className="hover">오늘본상품</div>
              </a>
            </li>

            <li className="icon06">
              <a href="#header">
                <span className="ico">testMenu6</span>
              </a>
            </li>
          </ul>
        </div>
    )
  }
}
export default QuickMenu;
