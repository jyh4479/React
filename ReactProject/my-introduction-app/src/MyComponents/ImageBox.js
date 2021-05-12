import React,{Component} from "react";

class ImageBox extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    }

    render(){
        return(
            <img src={this.props.imagePath} className={this.props.addClassName}/>
        )
    }
}
export default ImageBox;

//각각 나눈 컴포넌트에 대한 예외 처리가 중요하다