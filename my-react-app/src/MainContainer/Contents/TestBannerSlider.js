import React, {Component} from 'react';
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import temp from "./TestBannerSlider.css";
import "./TestBannerSlider.css";

class TestBannerSlider extends Component {
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
          <img src="https://placeimg.com/1903/500/animals/aaa" />
        </div>
        <div>
          <img src="https://placeimg.com/1903/500/any/bbb" />
        </div>
        <div>
          <img src="https://placeimg.com/1903/500/animals/sepia"/>
        </div>
        <div>
          <img src="https://placeimg.com/1903/500/any/grayscale" />
        </div>
        <div>
          <img src="https://placeimg.com/1903/500/any" />
        </div>
        <div>
          <img src="https://placeimg.com/1903/500/any/abc" />
        </div>
      </Slider>
    )
  }
}
export default TestBannerSlider;
