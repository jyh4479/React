/*

<MessageBox
    tpye={'title'}  메세지 박스가 쓰일 타입 (제목 or 내용) {'title', 'content'}
    textColor={'text-black'} 메세지의 색을 정의 {'text-black', 'text-yellow' ...}
    message={this.state.content1} 작성할 메세지 정의 {사용자 지정}
    
    ..추후 추가예정
    
></MessageBox>

*/

import React,{Component} from "react";
import './MessageBox.css';

class MessageBox extends Component{
    constructor(props) {
        super(props);

        this.editEvent=this.editEvent.bind(this);
        this.changeEvent=this.changeEvent.bind(this);
        this.cancelEvent=this.cancelEvent.bind(this);
        this.enterEvent=this.enterEvent.bind(this);

        this.state={
            textColor:this.props.textColor
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

        return(
            <>
                <div className="edit-mode" style={messageStyle}><a className={`${this.props.addClassName}`} onClick={editEvent}>{this.props.message}</a></div>
                <div style={inputStyle}>
                    <input type="text" id="input" className={`edit-box ${this.props.addClassName}`} onKeyPress={enterEvent} placeholder={this.props.message}></input>
                    <div className="button-location">
                        <button className="button-style" onClick={changeEvent}>수정</button>
                        <button className="button-style" style={{borderLeftColor: 'white'}} onClick={cancelEvent}>취소</button>
                    </div>
                </div>
            </>
        )
    }
}
export default MessageBox;