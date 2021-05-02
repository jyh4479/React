import React, {Component} from "react";

class AboutSection extends Component{
    render(){
        return(
            <section id="about" className="about bg-yellow roomy-80">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="main_about text-center">
                                <h1 className="text-black">Made is design studio based on London </h1>
                                <h2 className="text-white">- & -</h2>
                                <h3 className="text-black text-uppercase">We love to design a website and the other
                                    awesome graphic</h3>

                                <a href="" className="btn btn-primary m-top-100">Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default AboutSection;