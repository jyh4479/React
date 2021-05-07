import React, {Component} from "react";
import './AboutSection.css'
import {connect} from "react-redux";
import MessageBox from "../../MyComponents/MessageBox";

import Draggable from 'react-draggable';

function mapReduxStateToReactProps(state){
    return{
        aboutSectionData:state.aboutSectionData
    };
}

class AboutSection extends Component{
    constructor(props) {
        super(props);
        this.state={
            dataList:this.props.aboutSectionData.dataList
        }
    }

    render(){
        return(
            <>
                <section id="about" className="about bg-yellow roomy-80">
                    <div className="container container-add">


                        {this.state.dataList.map(data=>
                            <div className="row row-add">
                                <div className="col-sm-12">
                                    <div className="main_about text-center">
                                        <MessageBox tpye={'title'} textColor={'text-black'} message={data.title}></MessageBox>
                                        <MessageBox tpye={'title'} textColor={'text-black'} message={data.content}></MessageBox>
                                    </div>
                                </div>
                            </div>
                        )}




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
export default connect(mapReduxStateToReactProps) (AboutSection);