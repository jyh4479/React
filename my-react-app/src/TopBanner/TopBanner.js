import React, {Component} from 'react';
import Logo from './Contents/Logo';
import SearchBar from './Contents/SearchBar';
import './TopBanner.css';

class TopBanner extends Component{
  render(){
    return(
      <div className="TopBanner">
        <Logo></Logo>
        <SearchBar></SearchBar>
      </div>
    )
  }
}
export default TopBanner;
