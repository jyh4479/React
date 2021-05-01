import React, {Component} from 'react';

import ContentSlider from '../Components/MainContainer/ContentSlider/ContentSlider';
import Footer from '../Components/Footer/Footer';


class TestPage extends Component{
  render(){
    return(
      <div>
        <ContentSlider
          productTitle="인기 상품"
          backgroundColor="#FFD8D8"
          subTitleColor="yellow"
        ></ContentSlider>

        <ContentSlider
          productTitle="추천 상품"
          backgroundColor="#D4F4FA"
          subTitleColor="pink"
        ></ContentSlider>

        <ContentSlider
          productTitle="추천 안함"
          backgroundColor="#FFD9FA"
          subTitleColor="green"
        ></ContentSlider>

        <ContentSlider
          productTitle="먹지마세요"
          backgroundColor="#EAEAEA"
          subTitleColor="white"
        ></ContentSlider>

        <Footer/>
      </div>
    )
  }
}
export default TestPage;
