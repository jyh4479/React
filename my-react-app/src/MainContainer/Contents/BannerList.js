import React, {Component} from 'react';
import './BannerList.css';

class BannerList extends Component{
  render(){
    return(
      <div className="BannerLocation" style={{"margin-top":"100px"}}>
        <a href="#">
          <img src="https://img.jejudfs.com/banner/bannerFile/202012/31/4e5a7bc0-0c4a-4dcb-ad89-03388a2feb03.jpg" alt="test1"></img>
        </a>
        <a href="#">
          <img src="https://img.jejudfs.com/banner/bannerFile/202103/16/c6a70dfe-8b1f-476f-9af2-87d072235952.jpg" alt="test2"></img>
        </a>
        <a href="#">
          <img src="https://img.jejudfs.com/banner/bannerFile/202103/29/fffeae34-655a-4544-9be1-7ba7d3d0db71.jpg" alt="test3"></img>
        </a>
        <a href="#">
          <img src="https://img.jejudfs.com/banner/bannerFile/202103/29/d5bda9cf-19d8-4b2e-8b54-a8337dba346f.jpg" alt="test4"></img>
        </a>
      </div>
    )
  }
}
export default BannerList;
