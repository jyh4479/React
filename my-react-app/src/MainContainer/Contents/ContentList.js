import React, {Component} from 'react';
import DataList from './data.json';
import DataList2 from './data2.json';
import DataList3 from './data3.json';
import './MainContents.css';
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
              {JsonDataList.map(data => <SwiperSlide><li>
                  <div className="img">
                    <img src={data.image}></img>
                  </div>

                  <div>
                    <span>{thisContent}</span>
                  </div>

                  <strong>{data.title}</strong>

                  <div>
                    <strong>
                      {data.price}
                    </strong>
                  </div>
                </li></SwiperSlide>)}
            </ul>
            <a>
              <span class="blind">aasdasdasdasdasdsda</span>
            </a>
          </Swiper>
      </div>
    )
  }
}
export default ContentList;
