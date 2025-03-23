import React, { Fragment } from 'react';
import { Dialog, Grid } from '@mui/material';

const PortfolioSingle = ({ maxWidth, open, onClose, title, doc, image1, image2, image3, authorName, videosId, value, date }) => {
    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body">
                    <button className='modal-close' onClick={onClose}><i className='fa fa-close'></i></button>
                    <div className="tp-project-details-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tp-minimal-wrap">
                                    <div className="tp-minimal-img">
                                        <img src={image1} alt="" />
                                    </div>
                                    <h2>{title}</h2>
                                </div>
                                <div className="tp-p-details-section">
                                    <p dangerouslySetInnerHTML={{ __html: doc }}></p>
                                    <p>This project showcases an innovative approach to design and development. The seamless blend of modern aesthetics and functional excellence ensures a top-tier user experience. Through careful planning and execution, every element has been optimized to enhance usability and visual appeal.</p>
                                    <p>By integrating industry-leading tools and methodologies, this project demonstrates how effective design can elevate a brand's identity. The combination of creativity and technical expertise ensures a compelling and immersive user journey.</p>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="tp-p-details-img">
                                                <img src={image2} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="tp-p-details-img">
                                                <img src={image3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="tp-p-details-quote">
                                    <p>Effective design is not just about aesthetics—it’s about creating a seamless and engaging user experience.</p>
                                    <span>{authorName}</span>
                                </div>**/}
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}

export default PortfolioSingle;
