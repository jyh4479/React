import React, {Component} from "react";
import './FeatureSection.css';
import {connect} from "react-redux";

import ImageContainer from "../../MyComponents/ImageContainer";
import MessageBox from "../../MyComponents/MessageBox";
import ImageCircle from "../../MyComponents/ImageCircle";

function mapReduxStateToReactProps(state){
    return{
        featureSectionData:state.featureSectionData
    };
}

class FeatureSection extends Component{
    constructor(props) {
        super(props);
        this.state={
            mainImage:this.props.featureSectionData.mainimagePath,
            mainMessage:this.props.featureSectionData.mainmessage,
            containerDataList:this.props.featureSectionData.containerData,
            containerDataList2:this.props.featureSectionData.containerData2
        }
    }
    render(){
        return(
            <section id="features" className="features bg-white">
                <div className="container">
                    <div className="row">
                        <div className="main_features fix roomy-70">

                            <div className="col-md-5">
                                <div className="features_item">





                                        {/*<h2 className="text-uppercase">About <strong>Me</strong></h2>*/}
                                        <MessageBox addClassName="featureHeadTitle" message={this.state.mainMessage}></MessageBox>
                                        <ImageCircle addClassName="img-circle m-top-20" imagePath={this.state.mainImage}></ImageCircle>




                                </div>
                            </div>


                            <div className="features-location">
                                <ImageContainer
                                    dataList={this.state.containerDataList}
                                    textShape={"featureTextStyle"}
                                ></ImageContainer>
                            </div>

                            <div className="features-location">
                                <ImageContainer
                                    dataList={this.state.containerDataList2}
                                    textShape={"featureTextStyle"}
                                ></ImageContainer>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default connect(mapReduxStateToReactProps) (FeatureSection);