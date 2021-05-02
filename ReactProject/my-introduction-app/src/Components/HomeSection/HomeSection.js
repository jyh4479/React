import React, {Component} from 'react';

class HomeSection extends Component{
    render(){
        return(
            <section id="home" className="home bg-black fix">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="main_home text-center">
                            <div className="col-md-12">
                                <div className="hello">
                                    <div className="slid_item">
                                        <div className="home_text ">
                                            <h1 className="text-yellow">Welcome to My Page </h1>
                                            <h3 className="text-white text-uppercase">개발자 "정용훈"을 소개하기위한 페이지입니다!</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <a className="mouse-scroll" href="#about">
                            <span className="mouse">
                                <span className="mouse-movement"></span>
                            </span>
                            <span className="mouse-message fadeIn">Explore</span> <br/>
                        </a>

                    </div>
                </div>
            </section>
        )
    }
}
export default HomeSection;