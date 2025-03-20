import React from 'react';
import ContactForm from '../ContactFrom'

const ContactSection = () => {

    return(
        <section id="contact" className="tp-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="info-icon">
                                                <i className="fi flaticon-pin"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>UEM Jaipur<br/>
                                            Rajasthan - 303807</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="info-icon">
                                                <i className="fi flaticon-mail"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Me</h2>
                                            <p>aadarshanand2912@gmail.com<br/> .</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="info-icon">
                                                 <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>+919883866948 <br/> .</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="section-title section-title2 text-center">
                            <span>Contact</span>
                            <h2>Have Any Question?</h2>
                        </div>
                        <div className="tp-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="tp-contact-map-section">
                <div className="tp-contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.2128967462477!2d75.69766757554395!3d27.212464876469735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cffc30dacc2db%3A0xb78e5c340c935a95!2sUniversity%20of%20Engineering%20%26%20Management%20(UEM)%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1739812013769!5m2!1sen!2sin"></iframe>
                </div>
            </section>
        </section>
     )
        
}

export default ContactSection;
