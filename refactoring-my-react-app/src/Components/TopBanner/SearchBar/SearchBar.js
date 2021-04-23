import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component{
  render(){
    return(
      <div className="search">
        <form>
          <label>
            <input type="text" name="q" autocomplete="off" placeholder="메뉴 검색!"></input>
          </label>
          <button className="buttonShape">
            <img src="/searchImage.png" alt="검색"></img>
          </button>
        </form>
      </div>
    )
  }
}
export default SearchBar;
