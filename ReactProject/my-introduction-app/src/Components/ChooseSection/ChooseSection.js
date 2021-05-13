import React,{Component} from "react";
import {connect} from "react-redux";

import ImageSlider from "../../MyComponents/ImageSlider";
import MessageBox from "../../MyComponents/MessageBox";
import './ChooseSection.css';

function mapReduxStateToReactProps(state){
    return{
        chooseSectionData:state.chooseSectionData
    };
}

class ChooseSection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sliderData: this.props.chooseSectionData.skillData,
            mainTitle: this.props.chooseSectionData.mainTitle,
            mainMessage: this.props.chooseSectionData.mainMessage
        }
    }
    render(){
        const dataList=this.state.sliderData;
        let viewData=[];

        viewData.push(
            <MessageBox addClassName="serviceMessage serviceSubTitle" message={this.state.mainMessage}></MessageBox>
        )
        dataList.forEach((data)=>{
            viewData.push(
                <div className="m-top-20">
                    <div className="chooseContentLocation">
                        <div>
                            <i className="fa fa-check-square-o iconLocation"></i>
                        </div>
                        <div>
                            <MessageBox addClassName="chooseMessage text-black" message={data.message}></MessageBox>
                        </div>
                    </div>
                    <MessageBox addClassName="chooseMessage font-size-14" message={data.contentMessage}></MessageBox>
                </div>
            )
        });

        return(
            <section id="choose" className="choose bg-grey roomy-80">
                <div className="container">
                    <div className="row">
                        <div className="main_choose">




                            <div className="col-md-5 col-md-offset-1">
                                <div className="choose_content sm-m-top-40">




                                    <MessageBox addClassName="chooseHeadTitle" message={this.state.mainTitle}></MessageBox>


                                    <div className="choose_item_text fix m-top-40">

                                        {/*<h6><i className="fa fa-check-square-o"></i> Easy to costumize.</h6>*/}
                                        {/*<p>Atque ducimus velit, earum quidem, iusto dolorem. </p>*/}
                                        {viewData}

                                    </div>






                                </div>
                            </div>



                            <div className="col-md-6">
                                <ImageSlider dataList={this.state.sliderData}></ImageSlider>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default connect(mapReduxStateToReactProps) (ChooseSection);