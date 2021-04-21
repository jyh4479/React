import React, {Component} from 'react';
import Logo from './Contents/Logo';
import SearchBar from './Contents/SearchBar';
import Etc from './Contents/Etc';
import './TopBanner.css';

class TopBanner extends Component{
  render(){
    return(
      <div className="TopBanner">
        <Logo></Logo>
        <SearchBar></SearchBar>
        <Etc></Etc>
      </div>
    )
  }
}
export default TopBanner;
