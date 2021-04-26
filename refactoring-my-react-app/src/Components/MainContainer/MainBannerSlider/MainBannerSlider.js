import React, {PureComponent} from 'react';
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import temp from "./TestBannerSlider.css";
import "./MainBannerSlider.css";

class TestBannerSlider extends PureComponent {
  render(){

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      autoplay:true,
      autoplaySpeed:2000,
    };

    return(
        <Slider /*className={`${temp}.slick-next`}*/ {...settings}>
        <div>
          <img src="/MainBannerImages/MainImage1.jpg" />
        </div>
        <div>
          <img src="/MainBannerImages/MainImage2.jpg" />
        </div>
        <div>
          <img src="/MainBannerImages/MainImage3.jpg"/>
        </div>
        <div>
          <img src="/MainBannerImages/MainImage4.jpg" />
        </div>
        <div>
          <img src="/MainBannerImages/MainImage5.jpg" />
        </div>
        <div>
          <img src="/MainBannerImages/MainImage6.jpg" />
        </div>
      </Slider>
    )
  }
}
export default TestBannerSlider;
