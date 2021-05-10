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
            sliderData: this.props.serviceSectionData.sliderData,
            mainTitle: this.props.serviceSectionData.mainTitle,
            mainMessageList: this.props.serviceSectionData.mainMessageList
        }
    }

    render(){

        const dataList=this.state.mainMessageList;
        let viewData=[];

        dataList.forEach((data)=>{
            viewData.push(
                <div className="m-top-10">
                    <MessageBox addClassName="serviceMessage" message={data.message}></MessageBox>
                </div>
            )
        });

        return(
            <section id="service" className="service bg-grey roomy-70">
                <div className="container">
                    <div className="row">
                        <div className="main_service">
                            <div className="col-md-6">




                                <ImageSlider dataList={this.state.sliderData}></ImageSlider>





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