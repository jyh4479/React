import React, {Component} from 'react';
import './HomeSections.css';

class HomeSection extends Component{
    constructor(props) {
        super(props);
        this.editEvent=this.editEvent.bind(this);
        this.changeEvent=this.changeEvent.bind(this);
        this.cancleEvent=this.cancleEvent.bind(this);

        this.state={
            homeMessage:"Welcome to My Page",
            mode:"view"
        }
    }

    editEvent(e){
        this.setState({mode:"edit"});
    }
    changeEvent(e){
       let input = document.getElementById("input").value;
       this.setState({homeMessage:input});
       this.setState({mode:"view"});
    }
    cancleEvent(e){
        this.setState({mode:"view"});
    }

    render(){
        /* --- view 정의 --- */
        const viewStyle={
            display: 'block',
            textAlign:'center'
        }
        const editStyle={
            display: 'none'
        }
        /* --- view 정의 --- */

        /* --- 조건에 따라 적용될 Style결정 --- */
        let messageStyle;
        let inputStyle;

        if(this.state.mode==='edit'){
            messageStyle=editStyle;
            inputStyle=viewStyle;
        }
        else{
            messageStyle=viewStyle;
            inputStyle=editStyle;
        }
        /* --- 조건에 따라 적용될 Style결정 --- */

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

                                            <h1 className="edit-mode" style={messageStyle}><a className="text-yellow" onClick={this.editEvent}>{this.state.homeMessage}</a></h1>
                                            <div className="edit-container" style={inputStyle}>
                                                <input type="text" id="input" className="edit-box"></input>
                                                <button onClick={this.changeEvent}>변경</button>
                                                <button onClick={this.cancleEvent}>취소</button>
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