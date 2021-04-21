import React, {Component} from 'react';
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TestBannerSlider extends Component {
  render(){

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return(
        <Slider {...settings}>
        <div>
          <img src="http://ipsumimage.appspot.com/1519x500,ff7700?l=Test Image" />
        </div>
        <div>
          <img src="http://ipsumimage.appspot.com/1519x500?l=Test Image" />
        </div>
        <div>
          <img src="https://placeimg.com/1519/500/animals/sepia"/>
        </div>
        <div>
          <img src="https://placeimg.com/1519/500/any/grayscale" />
        </div>
        <div>
          <img src="https://placeimg.com/1519/500/any" />
        </div>
        <div>
          <img src="https://placeimg.com/1519/500/any/abc" />
        </div>
      </Slider>
    )
  }
}
export default TestBannerSlider;
