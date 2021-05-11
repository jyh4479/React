import React, {Component} from "react";
import {connect} from "react-redux";

import MessageBox from "../../MyComponents/MessageBox";
import ImageSlider from "../../MyComponents/ImageSlider";
import './ServiceSection.css';

function mapReduxStateToReactProps(state){
    return{
        serviceSectionData:state.serviceSectionData
    };
}

class ServiceSection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sliderData: this.props.serviceSectionData.skillData,
            mainTitle: this.props.serviceSectionData.mainTitle,
            mainMessage: this.props.serviceSectionData.mainMessage
        }
    }

    render(){

        const dataList=this.state.sliderData;
        let viewData=[];

        viewData.push(
            <MessageBox addClassName="serviceMessage serviceSubTitle" message={this.state.mainMessage}></MessageBox>
        )
        dataList.forEach((data)=>{
            viewData.push(
                <div className="m-top-20">
                    <MessageBox addClassName="serviceMessage" message={data.contentMessage}></MessageBox>
                </div>
            )
        });

        return(
            <section id="service" className="service bg-grey roomy-70">
                <div className="container">
                    <div className="row">
                        <div className="main_service">
                            <div className="col-md-6">




                                <ImageSlider textShape="serviceMessage" dataList={this.state.sliderData}></ImageSlider>





                            </div>



                            <div className="col-md-5 col-md-offset-1">
                                <div className="service_item sm-m-top-50">


                                    <MessageBox addClassName="serviceHeadTitle" message={this.state.mainTitle}></MessageBox>
                                    <div className="m-top-40">
                                        {viewData}
                                    </div>





                                </div>
                            </div>






                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default connect(mapReduxStateToReactProps)(ServiceSection);