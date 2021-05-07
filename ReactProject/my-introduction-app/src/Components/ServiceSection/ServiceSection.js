import React, {Component} from "react";
import {connect} from "react-redux";
import ImageSlider from "../../MyComponents/ImageSlider";

function mapReduxStateToReactProps(state){
    return{
        serviceSectionData:state.serviceSectionData
    };
}

class ServiceSection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sliderData: this.props.serviceSectionData.sliderData
        }
    }

    render(){
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
                                    <div className="head_title">
                                        <h2 className="text-uppercase">Our <strong>Service</strong></h2>
                                    </div>
                                    <div className="service_content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit donec fringilla iaculis facilisis
                                            morbi nulla lectus, luctus interdum eu ultricies ac tortor maecenas nec massa sit
                                            amet erat condimentum porttitor ac quis turpis.</p>

                                        <a href="" className="btn btn-default m-top-40">Read More</a>
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