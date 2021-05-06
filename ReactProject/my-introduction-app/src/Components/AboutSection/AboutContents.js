import React,{Component} from "react";
import './AboutSection.css';
import {connect} from "react-redux";
import MessageBox from "../../MyComponents/MessageBox";

class AboutContents extends Component{
    constructor(props) {
        super(props);

        // this.contentCancelEvent=this.contentCancelEvent.bind(this);
        // this.contentEditEvent=this.contentEditEvent.bind(this);
        // this.titleCancelEvent=this.titleCancelEvent.bind(this);
        // this.titleEditEvent=this.titleEditEvent.bind(this);
        //
        // this.titleChangeEvent=this.titleChangeEvent.bind(this);
        // this.contentChangeEvent=this.contentChangeEvent.bind(this);

        this.state={
            // title:this.props.title,
            // content:this.props.content,
            // titleId:this.props.titleId,
            // contentId:this.props.contentId,
            // titleMode:"view",
            // contentMode:"view"
        }
    }

    // titleEditEvent(){
    //     this.setState({titleMode:"edit"})
    //     this.setState({contentMode:"view"})
    // }
    // contentEditEvent(){
    //     this.setState({contentMode:"edit"})
    //     this.setState({titleMode:"view"})
    // }
    // titleCancelEvent(){
    //     this.setState({titleMode:"view"})
    // }
    // contentCancelEvent(){
    //     this.setState({contentMode:"view"})
    // }
    //
    // titleChangeEvent(e){
    //     let input=document.getElementById(this.state.titleId).value;
    //     input=input.trim();
    //
    //     if(input.length==0){
    //         input=this.props.title;
    //     }
    //     this.setState({title:input})
    //     this.setState({titleMode:"view"})
    // }
    // contentChangeEvent(e){
    //     let input=document.getElementById(this.state.contentId).value;
    //     input=input.trim();
    //
    //     if(input.length==0){
    //         input=this.props.content;
    //     }
    //     this.setState({content:input})
    //     this.setState({contentMode:"view"})
    // }

    render(){
        // const {titleEditEvent, contentEditEvent, titleCancelEvent, contentCancelEvent, titleChangeEvent, contentChangeEvent} = this;
        //
        // /* -------- view 관련 logic -------- */
        // const viewStyle={
        //     display: 'block',
        // }
        // const noneViewStyle={
        //     display: 'none'
        // }
        //
        // let titleMessageStyle;
        // let titleInputStyle;
        // let contentMessageStyle;
        // let contentInputStyle;
        //
        // if(this.state.titleMode==='edit'){
        //     titleMessageStyle=noneViewStyle;
        //     titleInputStyle=viewStyle;
        // }
        // else{
        //     titleMessageStyle=viewStyle;
        //     titleInputStyle=noneViewStyle;
        // }
        // if(this.state.contentMode==='edit'){
        //     contentMessageStyle=noneViewStyle;
        //     contentInputStyle=viewStyle;
        // }
        // else{
        //     contentMessageStyle=viewStyle;
        //     contentInputStyle=noneViewStyle;
        // }
        // /* -------- view 관련 logic -------- */

        return(
            <>
                <div className="row row-add">
                    <div className="col-sm-12">
                        <div className="main_about text-center">

                            {/*<h1 className='edit-mode' style={titleMessageStyle}><a className="text-black" onClick={titleEditEvent}>{this.state.title}</a></h1>*/}
                            {/*<div style={titleInputStyle}>*/}
                            {/*    <input type="text" id={this.state.titleId} className="edit-box about-edit-box" placeholder={this.state.title}></input>*/}
                            {/*    <div className="button-location title-button-location">*/}
                            {/*        <button className="button-style" onClick={titleChangeEvent}>수정</button>*/}
                            {/*        <button className="button-style" style={{borderLeftColor: 'white'}} onClick={titleCancelEvent}>취소</button>*/}
                            {/*    </div>*/}
                            {/*</div>*/}




                            <br></br>



                            {/*<h5 className="text-black text-uppercase edit-mode" style={contentMessageStyle} onClick={contentEditEvent}>{this.state.content}</h5>*/}

                            {/*<div style={contentInputStyle}>*/}
                            {/*    <input type="text" id={this.state.contentId} className="edit-box about-edit-box" placeholder={this.state.content}></input>*/}
                            {/*    <div className="button-location content-button-location">*/}
                            {/*        <button className="button-style" onClick={contentChangeEvent}>수정</button>*/}
                            {/*        <button className="button-style" style={{borderLeftColor: 'white'}} onClick={contentCancelEvent}>취소</button>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default AboutContents;