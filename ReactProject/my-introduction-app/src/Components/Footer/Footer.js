import React, {useState,useEffect} from "react";
import {connect} from "react-redux";
import './Footer.css';

import ImageButton from "../../MyComponents/ImageButton";
import MessageBox from "../../MyComponents/MessageBox";

import emailjs from 'emailjs-com';

function mapReduxStateToReactProps(state){
    return{
        footerSectionData:state.footerSectionData
    };
}

const Footer = props => {
    const [footerTitle,setFooterTitle] = useState(props.footerSectionData.titleMessage);
    const [footerMessage,setFooterMessage] = useState(props.footerSectionData.message);
    const [footerEmail,setFooterEmail] = useState(props.footerSectionData.email);
    const [footerPhone,setFooterPhone] = useState(props.footerSectionData.phone);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_w1ecg73', 'template_gzrhiqp', e.target, 'user_VNUvEo7XpOE2jekrTUGqD')
            .then((result) => {
                console.log(result.text);
                alert("메일전송성공")
            }, (error) => {
                console.log(error.text);
                alert("메일전송실패")
            });
    }

    return (
        <>
            <footer id="contact" className="footer action-lage bg-focial p-top-80">

                <div className="container">
                    <div className="row">



                        <div className="col-lg-6">
                            <div className="contact-left">
                                <div className="contact-details">





                                    <MessageBox addClassName={"footerTitle"} message={footerTitle}></MessageBox>
                                    <div class="m-top-10">
                                        <MessageBox addClassName={"footerMessage"} message={footerMessage}></MessageBox>
                                    </div>






                                </div>






                                <div className="contact-mail text-white m-top-20">
                                    <p className="footerDisplay">
                                        <span className="text-yellow m-right-10">Email:</span>
                                        <MessageBox addClassName="text-white" message={footerEmail}></MessageBox>
                                    </p>

                                    <p className="footerDisplay">
                                        <span className="text-yellow m-right-10">Phone:</span>
                                        <MessageBox addClassName="text-white" message={footerPhone}></MessageBox>
                                    </p>
                                </div>







                            </div>
                        </div>



                        <div className="col-lg-6">
                            <div className="contact-form">







                                <form onSubmit={sendEmail} className="m-bottom-70">
                                    <input type="hidden" name="contact_number" />
                                    <div className="form-group">
                                        <label htmlFor="name" className="text-yellow">Name <span>*</span></label>
                                        <input type="text" name="user_name" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="text-yellow">Email
                                            Address <span>*</span></label>
                                        <input type="email" name="user_email" className="form-control" id="email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message" className="text-yellow">Message <span>*</span></label>
                                        <textarea className="form-control" name="message" rows="10"></textarea>
                                    </div>
                                    {/*<button type="submit" className="">Contact me</button>*/}
                                    <ImageButton buttonName={"Contact Me"} hoverBgColor="#fddc57"></ImageButton>
                                </form>










                                
                            </div>
                        </div>
                    </div>
                </div>

            </footer>





        </>
    )
}

export default connect(mapReduxStateToReactProps)(Footer);