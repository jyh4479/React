import React,{Component} from "react";

class ImageCircle extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    }

    render(){
        return(
            <img src={this.props.imagePath} className="img-circle"/>
        )
    }
}
export default ImageCircle;