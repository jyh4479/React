import React, {Component} from "react";

class TestSection extends Component{
    render(){
        return(
            <section id="test" className="test bg-grey roomy-60 fix">
                <div className="container">
                    <div className="row">
                        <div className="main_test fix">
                            <div className="col-md-6">
                                <div className="cbrand text-center">
                                    <div className="divider_horizontal"></div>
                                    <div className="divider_vertical"></div>
                                    <div className="col-xs-6">
                                        <div className="cbrand_item">
                                            <img src="assets/images/cbrand-1.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="cbrand_item">
                                            <img src="assets/images/cbrand-2.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="cbrand_item m-top-40">
                                            <img src="assets/images/cbrand-3.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="cbrand_item m-top-40">
                                            <img src="assets/images/cbrand-4.png" alt=""/>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 sm-m-top-40">
                                <div className="test_item1 fix ">
                                    <div className="head_title fix">
                                        <h2 className="text-uppercase">What <strong>Client Say</strong></h2>
                                    </div>
                                    <div className="item_img">
                                        <img className="img-circle" src="assets/images/test-img1.jpg" alt=""/>
                                        <i className="fa fa-quote-left"></i>
                                    </div>

                                    <div className="item_text">
                                        <h5>Sarah Smith</h5>
                                        <h6>envato.com</h6>

                                        <p>Natus voluptatum enim quod necessitatibus quis
                                            expedita harum provident eos obcaecati id culpa
                                            corporis molestias.</p>
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
export default TestSection;