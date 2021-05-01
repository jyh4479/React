import React, {Component} from 'react';
import DataList from './ContentData.json';
import DataList2 from './ContentData2.json';

import './ContentSlider.css';

/* ------------- swiper관련 import ------------- */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
/* ------------- swiper관련 import ------------- */

class ContentSlider extends Component{
  render(){
    let productTitle=this.props.productTitle;
    let backgroundColor=this.props.backgroundColor;
    let subTitleColor=this.props.subTitleColor;

    return(
      <div>
        <div className="productTitle">{productTitle}</div>
            <Swiper
               className='swiper-container'
               spaceBetween={5}
               slidesPerView={3}
               navigation
               pagination={{ clickable: true }}
               scrollbar={{ draggable: true }}
               onSwiper={(swiper) => console.log(swiper)}
               onSlideChange={() => console.log("slide change")}
             >
              <ul>
                {DataList.map(data => <SwiperSlide><li className="itemOption" style={{"background-color":`${backgroundColor}`}}>
                    <div className="img">
                      <img src={data.image}></img>
                    </div>

                    <div className="ContentTitle" style={{"color":`${subTitleColor}`}}>
                      <span>ContnetTitle</span>
                    </div>

                    <strong className="ContentShape">{data.title}</strong>

                    <div className="PriceShape">
                      <strong>
                        {data.price}
                      </strong>
                    </div>
                  </li></SwiperSlide>)}
              </ul>
            </Swiper>
      </div>
    )
  }
}
export default ContentSlider;
