import React, {Component} from "react";
import AboutContents from "./AboutContents";
import './AboutSection.css'
import MessageBox from "../../MyComponents/MessageBox";

import Draggable from 'react-draggable';

class AboutSection extends Component{
    constructor(props) {
        super(props);

        this.state={
            titleId1:"t1",
            titleId2:"t2",
            titleId3:"t3",

            contentId1:"c1",
            contentId2:"c2",
            contentId3:"c3",

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





                    <div className="row row-add">
                        <div className="col-sm-12">
                            <div className="main_about text-center">
                                <MessageBox tpye={'title'} textColor={'text-black'} message={this.state.title1}></MessageBox>
                                <MessageBox tpye={'title'} textColor={'text-black'} message={this.state.content1}></MessageBox>
                            </div>
                        </div>
                    </div>


                    <div className="row row-add">
                        <div className="col-sm-12">
                            <div className="main_about text-center">
                                <MessageBox tpye={'title'} textColor={'text-black'} message={this.state.title2}></MessageBox>
                                <MessageBox tpye={'title'} textColor={'text-black'} message={this.state.content2}></MessageBox>
                            </div>
                        </div>
                    </div>


                    <div className="row row-add">
                        <div className="col-sm-12">
                            <div className="main_about text-center">
                                <MessageBox tpye={'title'} textColor={'text-black'} message={this.state.title3}></MessageBox>
                                <MessageBox tpye={'title'} textColor={'text-black'} message={this.state.content3}></MessageBox>
                            </div>
                        </div>
                    </div>



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