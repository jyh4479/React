import React, {Component} from "react";
import ImageCircle from "./ImageCircle";
import MessageBox from "./MessageBox";
import './ImageSlider.css';

const ImageSlider = () => {
    return(
        <>
            <div className="service_slid">
                <div className="slid_shap bg-yellow"></div>
                <div className="service_slid_item text-center">
                    <div className="service_slid_text">
                        <ImageCircle addClassName="image-location" imagePath={"assets/images/test-image2.jpg"}></ImageCircle>
                        <MessageBox type={'title'} textColor={'text-black'} message={"Test Message"}></MessageBox>
                        {/*<span className="icon icon icon-tools text-black"></span>*/}
                        {/*<h5 className="text-black m-top-20">UI/UX Design</h5>*/}
                    </div>
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