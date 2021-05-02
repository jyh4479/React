import React,{Component} from "react";

class ChooseSection extends Component{
    render(){
        return(
            <section id="choose" className="choose bg-grey roomy-80">
                <div className="container">
                    <div className="row">
                        <div className="main_choose">
                            <div className="col-md-6">
                                <div className="choose_mac">
                                    <div className="choose_slide">
                                        <div className="choose_item">
                                            <img src="assets/images/choose-img1.png" alt=""/>
                                        </div>
                                        <div className="choose_item">
                                            <img src="assets/images/choose-img1.png" alt=""/>
                                        </div>
                                        <div className="choose_item">
                                            <img src="assets/images/choose-img1.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-5 col-md-offset-1">
                                <div className="choose_content sm-m-top-40">
                                    <div className="head_title">
                                        <h2 className="text-uppercase">Why <strong>Choose Us</strong></h2>
                                    </div>
                                    <div className="choose_item_text fix">
                                        <h6><i className="fa fa-check-square-o"></i> Easy to costumize.</h6>
                                        <p>Atque ducimus velit, earum quidem, iusto dolorem. </p>
                                    </div>
                                    <div className="choose_item_text fix m-top-20">
                                        <h6><i className="fa fa-check-square-o"></i> Full of features.</h6>
                                        <p>Atque ducimus velit, earum quidem, iusto dolorem. </p>
                                    </div>
                                    <div className="choose_item_text fix m-top-20">
                                        <h6><i className="fa fa-check-square-o"></i> 24/7 Support.</h6>
                                        <p>Atque ducimus velit, earum quidem, iusto dolorem. </p>
                                    </div>
                                    <div className="choose_item_text fix m-top-20">
                                        <h6><i className="fa fa-check-square-o"></i> All in psd files.</h6>
                                        <p>Atque ducimus velit, earum quidem, iusto dolorem. </p>
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
export default ChooseSection;