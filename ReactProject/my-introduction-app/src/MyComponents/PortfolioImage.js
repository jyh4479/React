import React, {useState, useEffect} from "react";

// 방법 1
// onError를 통한 예외처리
// <img className="member_profile"
//      src={user.profileUrl}
//      alt="profile_img"
//      onError={handleImgError}
// />
//
// const handleImgError = (e) => {
//     e.target.src = defaultProfile;
// }



// const isImage = async path =>{
//     let image = new Image();
//     let checkPath;
//     image.src=path;
//
//     try{
//         await image.decode();
//         console.log("Image Decode!")
//         checkPath=path;
//     }
//     catch(e){
//         console.log("Decode Error!")
//         checkPath="defualtImage";
//     }
//
//     return checkPath;
// }

// 방법 2
const PortfolioImage = props => {
    const [testPath, setTestPath] = useState();

    useEffect(()=>{
        /*async*/ function fetchAndSetPath(){
            let image = new Image();
            image.src=props.imagePath;

            image.onload = function(){
                setTestPath(image.src)
            }
            image.onerror = function(){
                setTestPath("assets/images/work-img1.jpg")
            }

            // 방법 3
            // let image = new Image();
            // image.src=props.imagePath;
            //
            // console.log(props.imagePath + ' check ')
            //
            // try{
            //     await image.decode();
            //     setTestPath(props.imagePath);
            // }
            // catch(e){
            //     setTestPath("defaultPath");
            // }
        }
        fetchAndSetPath();
    },[testPath]);

    return(
        <>
            <div className={`grid-item metalloid ${props.imageType}`}>
                <img alt="" src={testPath}/>
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

/* Component props에 대한 default 정의 */
PortfolioImage.defaultProps={
    imageType:"test",
    workTitle:"test",
    message:"test"
}

export default PortfolioImage;




/*

Don't call an async method within a view.

When you mark the method as async it will return a promise, so, its pointless to return a promise and mark it as async at same time.

You should await the async method or promise from created or some other suitable lifecycle hook and save the result in component’s data, then render that data.

Also, take a look at vue-promised plugin.

*/