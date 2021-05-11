import React, {Component} from "react";
import ImageCircle from "./ImageCircle";
import MessageBox from "./MessageBox";
import './ImageSlider.css';

const ImageSlider = (props) => {
    let dataList=props.dataList;
    let viewData=[];

    dataList.forEach((data)=>{
        viewData.push(
            <div className="service_slid_text">
                <ImageCircle addClassName={`image-location ${props.imageShape}`} imagePath={data.imagePath}></ImageCircle>
                <div className="m-top-20">
                    <MessageBox addClassName={`text-black sliderText ${props.textShape}`} message={data.message}></MessageBox>
                </div>
            </div>
        )
    });

    return(
        <>
            <div className="service_slid">
                <div className="slid_shape"></div>
                <div className="service_slid_item text-center">

                        {viewData}
                        {/*<span className="icon icon icon-tools text-black"></span>*/}
                        {/*<h5 className="text-black m-top-20">UI/UX Design</h5>*/}

                    {/*<div className="service_slid_text">*/}
                    {/*    <span className="icon icon icon-sports-2 text-black"></span>*/}
                    {/*    <h5 className="text-black m-top-20">UI/UX Design</h5>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
};
export default ImageSlider;