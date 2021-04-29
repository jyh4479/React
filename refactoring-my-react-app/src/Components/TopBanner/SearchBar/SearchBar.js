import React, {Component} from 'react';
import NoSearchTab from './NoSearchTab';
import './SearchBar.css';

class SearchBar extends Component{
  render(){
    return(
      <div className="search">
        <form>
          <label>
            <input type="text" name="q" autocomplete="off" placeholder="메뉴 검색!"></input>
            <NoSearchTab/>
          </label>
          <button className="buttonShape">
            <img src="/TopBannerImages/searchImage.png" alt="검색"></img>
          </button>
        </form>
      </div>
    )
  }
}
export default SearchBar;
