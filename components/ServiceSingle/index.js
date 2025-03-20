import React from 'react';
import { Dialog, Grid } from '@mui/material';

const ServiceSingle = ({ open, onClose, title, doc, image1, image2, image3 }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="modalWrapper quickview-dialog"
            maxWidth="md"
        >
            <Grid className="modalBody modal-body">
                <button className="modal-close" onClick={onClose}>
                    <i className="fa fa-close"></i>
                </button>
                <div className="tp-minimals-wrap">
                    <div className="minimals-img">
                        <img src={image1} alt={title} />
                    </div>
                </div>
                <div className="service-details-section">
                    <h4>{title}</h4>
                    <p>{doc}</p>
                    <p>
                        I specialize in creating innovative and scalable solutions tailored to your business needs. My expertise ensures high performance, security, and seamless functionality.
                    </p>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-12 mb-3">
                            <div className="service-details-img">
                                <img src={image2} alt={title} />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-12 mb-3">
                            <div className="service-details-img">
                                <img src={image3} alt={title} />
                            </div>
                        </div>
                    </div>
                    <p>
                        Whether it's designing, developing, or maintaining your website, I ensure a seamless and engaging experience for your audience while keeping up with the latest industry trends.
                    </p>
                </div>
            </Grid>
        </Dialog>
    );
};

export default ServiceSingle;
