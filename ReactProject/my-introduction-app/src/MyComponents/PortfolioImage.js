import React from "react";


const PortfolioImage = props => {
    return(
        <>
            <div className={`grid-item metalloid ${props.imageType}`}>
                <img alt="" src={props.imagePath}/>
                <div className="grid_hover_area text-center">
                    <div className="girid_hover_text m-top-30">
                        <h4 className="text-white">{props.workTitle}</h4>
                        <div className="m-top-20">
                            <p className="text-white">{props.message}</p>
                            <a href={props.imagePath}
                               className="btn btn-primary popup-img">View Project</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PortfolioImage;