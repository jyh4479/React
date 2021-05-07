import React,{Component} from "react";
import MessageBox from "./MessageBox";
import ImageCircle from "./ImageCircle";

import './ImageContainer.css';

class ImageContainer extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                    {this.props.dataList.map(data=>
                        <div className="col-xs-6">
                        <div className="features_item_text item-location">
                            <ImageCircle imagePath={data.imagePath}></ImageCircle>
                            <MessageBox type={'content'} textColor={'text-black'} message={data.message}></MessageBox>
                        </div>
                    </div>
                )}
            </>
        )
    }
}
export default ImageContainer;