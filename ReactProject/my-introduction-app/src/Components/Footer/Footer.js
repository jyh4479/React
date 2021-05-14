import React from "react";
import './Footer.css';

import emailjs from 'emailjs-com';

const Footer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_w1ecg73', 'template_gzrhiqp', e.target, 'user_VNUvEo7XpOE2jekrTUGqD')
            .then((result) => {
                console.log(result.text);
                alert("메일전송성공.")
            }, (error) => {
                console.log(error.text);
                alert("메일전송실패.")
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
                                    <h1 className="text-yellow">Contact Me</h1>
                                    <p className="text-white">Lorem ipsum dolor sit amet, ea doming epicuri iudicabit
                                        nam, te usu virtute
                                        placerat. Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo
                                        accusata ei.</p>
                                </div>

                                <div className="contact-address text-white">
                                    <p>122 33rd Street East<br/> Saskatoon, SK<br/> S7K 1R9</p>
                                </div>

                                <div className="contact-mail text-white">
                                    <p><span className="text-yellow">Email:</span> info@focal.com</p>
                                    <p><span className="text-yellow">Phone:</span> 1-306-222-2323</p>
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
                                    <button type="submit" className="btn submit-btn">Contact me</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </footer>

            {/*<div className="footer-area">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row text-center">*/}
            {/*            <p className="copyright">*/}
            {/*                Copyright 2014 Focal - Built With Passion*/}
            {/*            </p>*/}
            {/*            <div className="footer-social-links">*/}
            {/*                <a href="#"><i className="fa fa-twitter"></i></a>*/}
            {/*                <a href="#"><i className="fa fa-facebook"></i></a>*/}
            {/*                <a href="#"><i className="fa fa-pinterest"></i></a>*/}
            {/*                <a href="#"><i className="fa fa-google-plus"></i></a>*/}
            {/*                <a href="#"><i className="fa fa-dribbble"></i></a>*/}
            {/*                <a href="#"><i className="fa fa-linkedin"></i></a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}






        </>
    )
}

export default Footer;