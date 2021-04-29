import React, {Component} from 'react';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import Etc from './Etc/Etc';
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
