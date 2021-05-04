import React, {Component} from "react";
import AboutContents from "./AboutContents";
import './AboutSection.css'

import Draggable from 'react-draggable';

class AboutSection extends Component{
    constructor(props) {
        super(props);
        this.state={
            title1:"Values",
            title2:"Goals",
            title3:"Hobbies",

            content1:"멘트생각하기",
            content2:"멘트생각하기",
            content3:"멘트생각하기"
        }
    }

    render(){
        const viewStyle={
            display: 'block',
        }
        const editStyle={
            display: 'none'
        }

        return(
            <>
            <section id="about" className="about bg-yellow roomy-80">
                <div className="container container-add">
                    <AboutContents
                        title={this.state.title1}
                        content={this.state.content1}
                    ></AboutContents>

                    <AboutContents
                        title={this.state.title2}
                        content={this.state.content2}
                    ></AboutContents>

                    <AboutContents
                        title={this.state.title3}
                        content={this.state.content3}
                    ></AboutContents>
                </div>
            </section>

                {/*<Draggable*/}
                {/*    axis="x"*/}
                {/*    handle=".handle"*/}
                {/*    defaultPosition={{x: 0, y: 0}}*/}
                {/*    position={null}*/}
                {/*    grid={[25, 25]}*/}
                {/*    scale={1}*/}
                {/*    onStart={this.handleStart}*/}
                {/*    onDrag={this.handleDrag}*/}
                {/*    onStop={this.handleStop}>*/}
                {/*    <div>*/}
                {/*        <div className="handle">Drag from here</div>*/}
                {/*        <div>This readme is really dragging on...</div>*/}
                {/*    </div>*/}
                {/*</Draggable>*/}

            </>
        )
    }
}
export default AboutSection;