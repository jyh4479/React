import React, {Component} from 'react';
import './TestPage3.css';

class TestPage3 extends Component{
  render(){
    return(
      <div>
        <p>빨간색 글씨를 클릭해 보세요!</p>
        <ul>
        <li><a href="#">메뉴1</a></li>
        <li><a href="#">메뉴2</a></li>
        <li>
            <input type="checkbox" id="menuBtn"></input>
            <label for="menuBtn" class="labelBtn" onclick="">메뉴3</label>
            <ul class="submenu">
                <li><a href="#">소메뉴1</a></li>
                <li><a href="#">소메뉴2</a></li>
                <li><a href="#">소메뉴3</a></li>
                <li><a href="#">소메뉴4</a></li>
            </ul>
        </li>
        <li><a href="#">메뉴4</a></li>
        <li><a href="#">메뉴5</a></li>
    </ul>


    <input type="checkbox" id="toggleBtn"></input>
    <label for="toggleBtn" class="toggleBtn">토글버튼</label>
    <div class="box1"></div>

    <ul class="menu2">
        <li><a href="#">메뉴1</a></li>
        <li><a href="#">메뉴2</a></li>
        <li>
            <input type="checkbox" id="menuBtn2"></input>
            <label for="menuBtn2" class="labelBtn2" onclick="">메뉴3</label>
            <ul class="submenu2">
                <li><a href="#">소메뉴1</a></li>
                <li><a href="#">소메뉴2</a></li>
                <li><a href="#">소메뉴3</a></li>
                <li><a href="#">소메뉴4</a></li>
            </ul>
        </li>
        <li><a href="#">메뉴4</a></li>
        <li><a href="#">메뉴5</a></li>
    </ul>
  </div>
    )
  }
}
export default TestPage3;
