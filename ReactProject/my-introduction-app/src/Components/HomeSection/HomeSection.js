import React, {Component} from 'react';
import './HomeSections.css';
import {connect} from "react-redux";
import MessageBox from "../../MyComponents/MessageBox";

function mapReduxStateToReactProps(state){
    return{
        homeSectionData:state.homeSectionData
    };
}

class HomeSection extends Component{
    constructor(props) {
        super(props);

        this.state={
            homeMessage:this.props.homeSectionData.homeMessage,
            homeContent:this.props.homeSectionData.homeContent
        }
    }

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
                                        <div className="home_text">









                                            <MessageBox addClassName={"homeMessageStyle"} message={this.state.homeMessage}></MessageBox>
                                            <div className="m-top-30">
                                                <MessageBox addClassName={"subMessageStyle"} message={this.state.homeContent}></MessageBox>
                                            </div>










                                            {/*<div className="align-center">*/}
                                            {/*    <h3 className="text-white" style={{display: 'inline-block'}}>This is a page to introduce the developer</h3>*/}
                                            {/*    &nbsp;&nbsp;*/}
                                            {/*    <h3 className="text-yellow" style={{display: 'inline-block'}}>"Yong-hoon"!</h3>*/}
                                            {/*</div>*/}



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
export default connect(mapReduxStateToReactProps)(HomeSection);