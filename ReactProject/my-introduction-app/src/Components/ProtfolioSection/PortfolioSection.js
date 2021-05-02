import React, {Component} from "react";

class PortfolioSection extends Component{
    render(){
        return(
            <section id="portfolio" className="portfolio margin-top-120">


                <div className="container">
                    <div className="row">
                        <div className="main-portfolio roomy-80">

                            <div className="col-md-4">
                                <div className="head_title text-left sm-text-center wow fadeInDown">
                                    <h2>Our Works</h2>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="filters-button-group text-right sm-text-center">
                                    <button className="btn button is-checked" data-filter="*">all</button>
                                    <button className="btn button" data-filter=".metal">Web Design</button>
                                    <button className="btn button" data-filter=".transition">Logo Design</button>
                                    <button className="btn button" data-filter=".alkali">Branding</button>
                                    <button className="btn button" data-filter=".ar">Branding</button>
                                </div>
                            </div>


                            <div style="clear: both;"></div>

                            <div className="grid text-center">

                                <div className="grid-item transition metal ium">
                                    <img alt="" src="assets/images/porfolio-1.jpg"/>
                                        <div className="grid_hover_area text-center">
                                            <div className="girid_hover_text m-top-110">
                                                <h4 className="text-white">Your Work Title</h4>
                                                <p className="text-white">- Business Card, Branding</p>
                                                <a href="assets/images/porfolio-1.jpg"
                                                   className="btn btn-primary popup-img">View Project</a>
                                            </div>
                                        </div>
                                </div>


                                <div className="grid-item metalloid ">
                                    <img alt="" src="assets/images/porfolio-2.jpg"/>
                                        <div className="grid_hover_area text-center">
                                            <div className="girid_hover_text m-top-180">
                                                <h4 className="text-white">Your Work Title</h4>
                                                <p className="text-white">- Business Card, Branding</p>
                                                <a href="assets/images/porfolio-2.jpg"
                                                   className="btn btn-primary popup-img">View Project</a>
                                            </div>
                                        </div>
                                </div>


                                <div className="grid-item post-transition metal numberGreaterThan50">
                                    <img alt="" src="assets/images/porfolio-3.jpg"/>
                                        <div className="grid_hover_area text-center">
                                            <div className="girid_hover_text m-top-50">
                                                <h4 className="text-white">Your Work Title</h4>
                                                <p className="text-white">- Business Card, Branding</p>
                                                <a href="assets/images/porfolio-3.jpg"
                                                   className="btn btn-primary popup-img">View Project</a>
                                            </div>
                                        </div>
                                </div>


                                <div className="grid-item post-transition metal ium">
                                    <img alt="" src="assets/images/porfolio-4.jpg"/>
                                        <div className="grid_hover_area text-center">
                                            <div className="girid_hover_text m-top-180">
                                                <h4 className="text-white">Your Work Title</h4>
                                                <p className="text-white">- Business Card, Branding</p>
                                                <a href="assets/images/porfolio-4.jpg"
                                                   className="btn btn-primary popup-img">View Project</a>
                                            </div>
                                        </div>
                                </div>


                                <div className="grid-item metal ar">
                                    <img alt="" src="assets/images/porfolio-5.jpg"/>
                                        <div className="grid_hover_area text-center">
                                            <div className="girid_hover_text m-top-110">
                                                <h4 className="text-white">Your Work Title</h4>
                                                <p className="text-white">- Business Card, Branding</p>
                                                <a href="assets/images/porfolio-5.jpg"
                                                   className="btn btn-primary popup-img">View Project</a>
                                            </div>
                                        </div>
                                </div>


                                <div className="grid-item alkali ar">
                                    <img alt="" src="assets/images/porfolio-6.jpg"/>
                                        <div className="grid_hover_area text-center">
                                            <div className="girid_hover_text m-top-50">
                                                <h4 className="text-white">Your Work Title</h4>
                                                <p className="text-white">- Business Card, Branding</p>
                                                <a href="assets/images/porfolio-6.jpg"
                                                   className="btn btn-primary popup-img">View Project</a>
                                            </div>
                                        </div>
                                </div>

                            </div>

                            <div style="clear: both;"></div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default PortfolioSection;