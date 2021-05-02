import React, {Component} from "react";

class FeatureSection extends Component{
    render(){
        return(
            <section id="features" className="features bg-white">
                <div className="container">
                    <div className="row">
                        <div className="main_features fix roomy-70">

                            <div className="col-md-5">
                                <div className="features_item">
                                    <div className="head_title">
                                        <h2 className="text-uppercase">Our <strong>Featured</strong></h2>
                                    </div>
                                    <div className="featured_content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit donec fringilla
                                            iaculis facilisis
                                            morbi nulla lectus, luctus interdum eu ultricies ac tortor maecenas nec
                                            massa sit
                                            amet erat condimentum porttitor ac quis turpis.</p>

                                        <a href="" className="btn btn-default m-top-40">Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-md-offset-1 sm-m-top-50">
                                <div className="features_item2_area">
                                    <div className="features_item2 text-center">
                                        <div className="divider_horizontal"></div>
                                        <div className="divider_vertical"></div>
                                        <div className="col-xs-6">
                                            <div className="features_item_text">
                                                <img src="assets/images/featured1.jpg" alt="" className="img-circle"/>
                                                <p className="m-top-20">Trending Design</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-6">
                                            <div className="features_item_text">
                                                <img src="assets/images/featured2.jpg" alt="" className="img-circle"/>
                                                <p className="m-top-20">Easy to Customize</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-6">
                                            <div className="features_item_text m-top-50">
                                                <img src="assets/images/featured3.jpg" alt="" className="img-circle"/>
                                                <p className="m-top-20">Responsive Design</p>
                                            </div>
                                        </div>
                                        <div className="col-xs-6">
                                            <div className="features_item_text m-top-50">
                                                <img src="assets/images/featured4.jpg" alt="" className="img-circle"/>
                                                <p className="m-top-20">Free Google Font</p>
                                            </div>
                                        </div>

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
export default FeatureSection;