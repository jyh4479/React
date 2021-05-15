import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import ImageButton from "../../MyComponents/ImageButton";
import MessageBox from "../../MyComponents/MessageBox";
import PortfolioImage from "../../MyComponents/PortfolioImage";
import './PortfolioSection.css';
import ImportScript from "./ImportScript";

function mapReduxStateToReactProps(state){
    return{
        portfolioSectionData:state.portfolioSectionData
    };
}

const PortfolioSection = props =>{
    const [mainTitle] = useState(props.portfolioSectionData.mainTitle);
    const [buttonList] = useState(props.portfolioSectionData.buttonList);
    const [imageList] = useState(props.portfolioSectionData.portfolioImageList);





    let imageView = [];
    imageList.forEach(data=>{
        console.log(JSON.stringify(data) + ' check ')
        imageView.push(
            <PortfolioImage
                imageType={data.imageType}
                workTitle={data.workTitle}
                imagePath={data.imagePath}
                message={data.message}
            ></PortfolioImage>
        )
    })

    return(
        <section id="portfolio" className="portfolio margin-top-120">


            <div className="container">
                <div className="row">
                    <div className="main-portfolio roomy-80">



                        <div className="col-md-4">
                            <MessageBox addClassName={"portFolioHeadTitle"} message={mainTitle}></MessageBox>
                        </div>

                        <div className="col-md-8">
                            <div className="filters-button-group text-right sm-text-center m-top-20">
                                <ImageButton addClassName={"btn is-checked"} addDataFilter={"*"} buttonName={"all"}></ImageButton>
                                <ImageButton addClassName={"btn"} addDataFilter={".univ"} buttonName={"Univ"}></ImageButton>
                                <ImageButton addClassName={"btn"} addDataFilter={".chambit"} buttonName={"Chambit"}></ImageButton>
                                <ImageButton addClassName={"btn"} addDataFilter={".graduation"} buttonName={"Graduation"}></ImageButton>
                                <ImageButton addClassName={"btn"} addDataFilter={".intern"} buttonName={"Intern"}></ImageButton>
                            </div>
                        </div>


                        <div style={{clear:'both'}}></div>

                        <div className="grid text-center m-top-50">
                            {/* Image Section */}
                            {imageView}
                        </div>

                        {/* --- Test Section --- */}

                        {/*<PortfolioImage imagePath={"assets/images/swp1.png"}></PortfolioImage>*/}

                        {/* --- Test Section --- */}



                        <div style={{clear:'both'}}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default connect(mapReduxStateToReactProps) (PortfolioSection);