import React,{Component} from "react";

class ImageCircle extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
    }

    render(){
        return(
            <img src={this.props.imagePath} className={`img-circle ${this.props.addClassName}`}/>
        )
    }
}
export default ImageCircle;

//각각 나눈 컴포넌트에 대한 예외 처리가 중요하다