import React, {Component} from "react";

class TeamSection extends Component{
    render(){
        return(
            <section id="teams" className="teams roomy-80">
                <div className="container">
                    <div className="row">
                        <div className="main_teams_content fix">
                            <div className="col-md-6">
                                <div className="teams_item">
                                    <div className="head_title">
                                        <h2 className="text-uppercase">Our <strong>Best Team & Skill</strong></h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit donec fringilla iaculis
                                        facilisis morbi nulla lectus, luctus interdum eu ultricies tortor maecenas
                                        nec massa sit amet erat condimentum porttitorac quis turpis nulla
                                        lectus sit amet consectetur.</p>


                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="teams_item text-center sm-m-top-50">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img src="assets/images/team1.jpg" alt="" className="img-circle"/>
                                            <h4 className="m-top-20">John <strong>Doe</strong></h4>
                                            <h5>Lead Designer</h5>
                                            <div className="separator"></div>
                                            <ul className="list-inline">
                                                <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                                <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                                <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                                            </ul>
                                        </div>

                                        <div className="col-sm-4">
                                            <img src="assets/images/team2.jpg" alt="" className="img-circle"/>
                                            <h4 className="m-top-20">Sarah <strong>Smith</strong></h4>
                                            <h5>UX Designer</h5>
                                            <div className="separator"></div>
                                            <ul className="list-inline">
                                                <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                                <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                                <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                                            </ul>
                                        </div>

                                        <div className="col-sm-4">
                                            <img src="assets/images/team3.jpg" alt="" className="img-circle"/>
                                            <h4 className="m-top-20">Fabian <strong>Doe</strong></h4>
                                            <h5>Web Engineer</h5>
                                            <div className="separator"></div>
                                            <ul className="list-inline">
                                                <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                                <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                                <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-md-12">
                            <div className="skill">
                                <div className="team_content_details_skills m-top-50">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="teamskillbar clearfix m-top-50 text-uppercase"
                                                 data-percent="80%">
                                                <label>Photoshop</label>
                                                <div className="teamskillbar-bar" style="width: 80%;"></div>
                                            </div>


                                            <div className="teamskillbar clearfix m-top-50 text-uppercase"
                                                 data-percent="75%">
                                                <label>Web Design</label>
                                                <div className="teamskillbar-bar" style="width: 75%;"></div>
                                            </div>

                                        </div>

                                        <div className="col-sm-6">
                                            <div className="teamskillbar clearfix m-top-50 text-uppercase"
                                                 data-percent="90%">
                                                <label>DEvelopment</label>
                                                <div className="teamskillbar-bar" style="width: 90%;"></div>
                                            </div>


                                            <div className="teamskillbar clearfix m-top-50 text-uppercase"
                                                 data-percent="98%">
                                                <label>Branding</label>
                                                <div className="teamskillbar-bar" style="width: 98%;"></div>
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
export default TeamSection;