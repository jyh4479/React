import React, {Component} from 'react';
import './HomeSections.css';

class HomeSection extends Component{
    constructor(props) {
        super(props);

        this.editEvent=this.editEvent.bind(this);
        this.changeEvent=this.changeEvent.bind(this);
        this.cancelEvent=this.cancelEvent.bind(this);
        this.enterEvent=this.enterEvent.bind(this);

        this.state={
            homeMessage:"Welcome to My Page",
            mode:"view"
        }
    }

    editEvent(){
        this.setState({mode:"edit"});
    }
    changeEvent(){
       let input = document.getElementById("input").value;
       input=input.trim();

       if(input.length==0){
           input=this.state.homeMessage;
       }

       this.setState({homeMessage:input});
       this.setState({mode:"view"});
    }
    cancelEvent(){
        this.setState({mode:"view"});
    }
    enterEvent(e){
        let keyCode=e.key;
        if(keyCode==="Enter"){
            this.changeEvent();
        }
    }



    render(){
        const {editEvent, changeEvent, cancelEvent, enterEvent, event} = this;

        /* -------- view 관련 logic -------- */
        const viewStyle={
            display: 'block',
        }
        const noneViewStyle={
            display: 'none'
        }

        let messageStyle;
        let inputStyle;

        if(this.state.mode==='edit'){
            messageStyle=noneViewStyle;
            inputStyle=viewStyle;
        }
        else{
            messageStyle=viewStyle;
            inputStyle=noneViewStyle;
        }
        /* -------- view 관련 logic -------- */

        return(
            <section id="home" className="home bg-black fix">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="main_home text-center">
                            <div className="col-md-12">
                                <div className="hello">
                                    <div className="slid_item">
                                        <div className="home_text">

                                            <h1 className="edit-mode" style={messageStyle}><a className="text-yellow" onClick={editEvent}>{this.state.homeMessage}</a></h1>
                                            <div style={inputStyle}>
                                                <input type="text" id="input" className="edit-box" onKeyPress={enterEvent} placeholder={this.state.homeMessage}></input>
                                                <div className="button-location">
                                                    <button className="button-style" onClick={changeEvent}>수정</button>
                                                    <button className="button-style" style={{borderLeftColor: 'white'}} onClick={cancelEvent}>취소</button>
                                                </div>
                                            </div>

                                            <div className="align-center">
                                                <h3 className="text-white" style={{display: 'inline-block'}}>This is a page to introduce the developer</h3>
                                                &nbsp;&nbsp;
                                                <h3 className="text-yellow" style={{display: 'inline-block'}}>"Yong-hoon"!</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <a className="mouse-scroll" href="#about">
                            <span className="mouse">
                                <span className="mouse-movement"></span>
                            </span>
                            <span className="mouse-message fadeIn">Explore</span> <br/>
                        </a>

                    </div>
                </div>
            </section>
        )
    }
}
export default HomeSection;