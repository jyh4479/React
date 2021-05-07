import React, {Component} from "react";
import ImageCircle from "../../MyComponents/ImageCircle";
import MessageBox from "../../MyComponents/MessageBox";

class ServiceSection extends Component{
    render(){
        return(
            <section id="service" className="service bg-grey roomy-70">
                <div className="container">
                    <div className="row">
                        <div className="main_service">





                            <div className="col-md-6">
                                <div className="service_slid">
                                    <div className="slid_shap bg-yellow"></div>
                                    <div className="service_slid_item text-center">
                                        <div className="service_slid_text">
                                            <ImageCircle imagePath={"assets/images/test-image2.jpg"}></ImageCircle>
                                            <MessageBox type={'title'} textColor={'text-black'} message={"Test Message"}></MessageBox>
                                            {/*<span className="icon icon icon-tools text-black"></span>*/}
                                            {/*<h5 className="text-black m-top-20">UI/UX Design</h5>*/}
                                        </div>
                                        <div className="service_slid_text">
                                            <span className="icon icon icon-sports-2 text-black"></span>
                                            <h5 className="text-black m-top-20">UI/UX Design</h5>
                                        </div>
                                    </div>
                                </div>
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
export default ServiceSection;