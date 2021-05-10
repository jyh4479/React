import React, {Component} from "react";

import {connect} from "react-redux";
import MessageBox from "../../MyComponents/MessageBox";
import ImageCircle from "../../MyComponents/ImageCircle";
import ImageContainer from "../../MyComponents/ImageContainer";
import './TeamSection.css';

function mapReduxStateToReactProps(state){
    return{
        teamSectionData:state.teamSectionData
    };
}

class TeamSection extends Component{
    constructor(props) {
        super(props);
        this.state={
            mainTitle:props.teamSectionData.mainTitle,
            mainMessage:props.teamSectionData.mainMessageList,
            dataList:props.teamSectionData.dataList
        }
    }
    render(){

        const dataList=this.state.mainMessage;
        let viewData=[];
        let bottomViewData=[];

        dataList.forEach((data)=>{
            viewData.push(
                <div className="m-top-10">
                    <MessageBox addClassName="teamMessage" message={data.message}></MessageBox>
                </div>
            )
        });





        return(
            <section id="teams" className="teams roomy-80">
                <div className="container">
                    <div className="row">
                        <div className="main_teams_content fix">
                            <div className="col-md-5">
                                <div className="teams_item">





                                    <MessageBox addClassName="teamHeadTitle" message={this.state.mainTitle}></MessageBox>
                                    <div className="m-top-40">
                                        {viewData}
                                    </div>





                                </div>
                            </div>



                            <div className={"teamContentLocation m-top-20"}>
                                <ImageContainer dataList={this.state.dataList}></ImageContainer>
                            </div>



                            {/*<div className="col-md-6">*/}
                            {/*    <div className="teams_item text-center sm-m-top-50">*/}
                            {/*        <div className="row">*/}
                            {/*            <div className="col-sm-4">*/}
                            {/*                <img src="assets/images/team1.jpg" alt="" className="img-circle"/>*/}
                            {/*                <h4 className="m-top-20">John <strong>Doe</strong></h4>*/}
                            {/*                <h5>Lead Designer</h5>*/}
                            {/*                <div className="separator"></div>*/}
                            {/*                <ul className="list-inline">*/}
                            {/*                    <li><a href=""><i className="fa fa-facebook"></i></a></li>*/}
                            {/*                    <li><a href=""><i className="fa fa-twitter"></i></a></li>*/}
                            {/*                    <li><a href=""><i className="fa fa-dribbble"></i></a></li>*/}
                            {/*                </ul>*/}
                            {/*            </div>*/}

                            {/*            <div className="col-sm-4">*/}
                            {/*                <img src="assets/images/team2.jpg" alt="" className="img-circle"/>*/}
                            {/*                <h4 className="m-top-20">Sarah <strong>Smith</strong></h4>*/}
                            {/*                <h5>UX Designer</h5>*/}
                            {/*                <div className="separator"></div>*/}
                            {/*                <ul className="list-inline">*/}
                            {/*                    <li><a href=""><i className="fa fa-facebook"></i></a></li>*/}
                            {/*                    <li><a href=""><i className="fa fa-twitter"></i></a></li>*/}
                            {/*                    <li><a href=""><i className="fa fa-dribbble"></i></a></li>*/}
                            {/*                </ul>*/}
                            {/*            </div>*/}

                            {/*            <div className="col-sm-4">*/}
                            {/*                <img src="assets/images/team3.jpg" alt="" className="img-circle"/>*/}
                            {/*                <h4 className="m-top-20">Fabian <strong>Doe</strong></h4>*/}
                            {/*                <h5>Web Engineer</h5>*/}
                            {/*                <div className="separator"></div>*/}
                            {/*                <ul className="list-inline">*/}
                            {/*                    <li><a href=""><i className="fa fa-facebook"></i></a></li>*/}
                            {/*                    <li><a href=""><i className="fa fa-twitter"></i></a></li>*/}
                            {/*                    <li><a href=""><i className="fa fa-dribbble"></i></a></li>*/}
                            {/*                </ul>*/}
                            {/*            </div>*/}

                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}






                        </div>

                        <div className="col-md-12">
                            <div className="skill">
                                <div className="team_content_details_skills m-top-50">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="teamskillbar clearfix m-top-50"
                                                 data-percent="80%">
                                                <MessageBox addClassName={"bottomTextStyle"} message={"KwangWoon .Univ"}></MessageBox>
                                                <div className="teamskillbar-bar" style={{width:'80%'}}></div>
                                            </div>


                                            <div className="teamskillbar clearfix m-top-50"
                                                 data-percent="75%">
                                                <MessageBox addClassName={"bottomTextStyle"} message={"KOLON .Corp"}></MessageBox>
                                                <div className="teamskillbar-bar" style={{width:'75%'}}></div>
                                            </div>

                                        </div>

                                        <div className="col-sm-6">
                                            <div className="teamskillbar clearfix m-top-50"
                                                 data-percent="90%">
                                                <MessageBox addClassName={"bottomTextStyle"} message={"NAVER .Corp"}></MessageBox>
                                                <div className="teamskillbar-bar" style={{width:'90%'}}></div>
                                            </div>


                                            <div className="teamskillbar clearfix m-top-50"
                                                 data-percent="98%">
                                                <MessageBox addClassName={"bottomTextStyle"} message={"-"}></MessageBox>
                                                <div className="teamskillbar-bar" style={{width:'98%'}}></div>
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
export default connect(mapReduxStateToReactProps) (TeamSection);