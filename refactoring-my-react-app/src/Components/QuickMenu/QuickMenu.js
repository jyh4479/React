import React, {Component} from 'react';
import QuickSlider from './QuickSlider';
import './QuickMenu.css';

class QuickMenu extends Component{
  render(){
    return(
        <div className='quickMenu'>
          <ul>
            <input className="hideButton" type="checkbox" id="menuBtn"></input>
            <input className="hideButton" type="checkbox" id="menuBtn2"></input>
            <input className="hideButton" type="checkbox" id="menuBtn3"></input>
            <input className="hideButton" type="checkbox" id="menuBtn4"></input>
            <input className="hideButton" type="checkbox" id="menuBtn5"></input>
            <QuickSlider/>
          </ul>

          <ul>
            <li className="icon01">
              <label for="menuBtn" href="javascript:void(0);">
                <span className="ico">testMenu1</span>
                <div className="hover">내정보</div>
              </label>
            </li>

            <li className="icon02">
              <label for="menuBtn2" href="javascript:void(0);">
                <span className="ico">testMenu</span>
                <div className="hover">환율</div>
              </label>
            </li>


            <li className="icon03">
              <label for="menuBtn3" href="javascript:void(0);">
                <span className="ico">testMenu3</span>
                <div className="hover">구매가능시간</div>
              </label>
            </li>


            <li className="icon04">
              <label for="menuBtn4" href="javascript:void(0);">
                <span className="ico">testMenu4</span>
                <div className="hover">장바구니</div>
              </label>
            </li>

            <li className="icon05">
              <label for="menuBtn5" href="javascript:void(0);">
                <span className="ico">testMenu5</span>
                <div className="hover">오늘본상품</div>
              </label>
            </li>

            <li className="icon06">
              <label href="#">
                <span className="ico">testMenu6</span>
              </label>
            </li>

          </ul>
        </div>
    )
  }
}
export default QuickMenu;
