import React, {Component} from 'react';

import MainBannerSlider from './MainBannerSlider/MainBannerSlider';
import BannerList from './BannerList/BannerList';
import ContentSlider from './ContentSlider/ContentSlider';

class MainContainer extends Component{
  render(){
    return(
      <div className="MainContainer">
        <MainBannerSlider/>
        <ContentSlider
          productTitle="추천 상품"
          backgroundColor="#F0FFF0"
          subTitleColor="skyblue"
          ></ContentSlider>
        <ContentSlider
          productTitle="인기 상품"
          backgroundColor="#FFFFF0"
          subTitleColor="pink"
          ></ContentSlider>
        <BannerList/>
      </div>
    )
  }
}
export default MainContainer;

/*
ContentSlider에는 SLider의 제목 내용과
Slider의 배경색, 소제목 색을 정의해주면 된다.

제목 내용 --> productTitle
배경색 --> backgroundColor
소제목 색 -->
*/
