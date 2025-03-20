import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <a to="/home">
                                    <img src="images/logo.png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                <li><a target="_blank" rel="noopener noreferrer" href="https://m.facebook.com/aadarsh.singh.56679/"><i className="fa fa-facebook"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/me?trk=p_mwlite_profile_self-secondary_nav"><i className="fa fa-linkedin"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.skype.com/en/"><i className="fa fa-skype"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                                <p><i className="fa fa-copyright"></i>Copyright <span> 2025 Aadarsh. All rights reserved</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;