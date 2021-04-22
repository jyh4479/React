import React, {Component} from 'react';
import DataList from './data.json';
import DataList2 from './data2.json';
import DataList3 from './data3.json';
import './MainContents.css';
import './ContentList.css';
import './ContentList';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from "swiper"; //*

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"; // *
import "swiper/components/pagination/pagination.scss"; // *
import "swiper/components/scrollbar/scrollbar.scss"; // *

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]); // *

class ContentList extends Component{
  render(){
    var thisContent=this.props.content;

    var JsonDataList=[];
    if(thisContent==='Content1-1'){
      JsonDataList=DataList;
    }
    else if(thisContent==='Content1-2'){
      JsonDataList=DataList2;
    }
    else if(thisContent==='Content2-1'){
      JsonDataList=DataList3;
    }

    return(
      <div>
        <div className="productTitle" style={{"margin-top":"50px"}}>추천 상품</div>
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
              {JsonDataList.map(data => <SwiperSlide><li className="itemOption">
                  <div className="img">
                    <img src={data.image}></img>
                  </div>

                  <div className="ContentTitle">
                    <span>{thisContent}</span>
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

          <div className="productTitle" style={{"margin-top":"100px"}}>인기 상품</div>
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
                {DataList2.map(data => <SwiperSlide><li className="itemOption" style={{"background-color": "#FFFFF0"}}>
                    <div className="img">
                      <img src={data.image}></img>
                    </div>

                    <div className="ContentTitle" style={{"color":"pink"}}>
                      <span>{thisContent}</span>
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
export default ContentList;
