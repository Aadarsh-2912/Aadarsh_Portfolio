import React, { useState } from 'react';
import Link from 'next/link';
import PortfolioSingle from '../portfolioSingle';

const Portfolio = () => {
    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({});

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item);
    };

    const portfolio = [
        {
            Id: "1",
            heading: "HOPE",
            subHeading: "Illustration . Minimalism",
            authorName: 'Robert William',
            value: '$500',
            date: '25 Jan 2021',
            videosId: 'LUSa3yRTB9A',
            pImg1: 'images/protfolio/hope/img-1.jpg',
            pImg2: 'images/protfolio/hope/img-2.png',
            pImg3: 'images/protfolio/hope/img-3.png',
            vedio: "",
            des: 'HOPE is a comprehensive website integrating frontend and backend functionalities. It features a responsive design, user input storage, and enhanced UX through JavaScript. The backend uses MongoDB to manage and store data effectively.',
        },
        {
            Id: "2",
            heading: "KLEENEX",
            subHeading: "File Optimization and Cleanup Tool",
            authorName: 'David Warner',
            value: '$400',
            date: '15 Jan 2021',
            videosId: 'r_hYR53r61M',
            pImg1: 'images/protfolio/abstract/img-1.jpg',
            pImg2: 'images/protfolio/abstract/img-2.png',
            pImg3: 'images/protfolio/abstract/img-3.png',
            vedio: "",
            des: 'KLEENEX is a Python-based file optimization and cleanup tool using Tkinter. It helps users manage storage on Windows by detecting and removing duplicate files, cleaning junk and temporary files, and identifying large files. The tool features a home screen, an intuitive sidebar for navigation, and settings for appearance customization. It requires Python 3.x, Tkinter, Pillow, and standard Python libraries like OS and shutil. Users can launch the app and follow on-screen instructions for efficient system cleanup.',
        },
    ];

    return (
        <div className="tp-protfolio-area section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title text-center">
                        <span>Portfolio</span>
                        <h2>Latest Projects</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tp-protfolio-item">
                            <div className="row">
                                {portfolio.map((port, prt) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12 custom-grid" key={prt}>
                                        <div className="">
                                            <div className="tp-protfolio-single">
                                                <div className="tp-protfolio-img">
                                                    <img src={port.pImg1} alt="" />
                                                </div>
                                                <div className="tp-protfolio-text">
                                                    <h2>{port.heading}</h2>
                                                    <span>{port.subHeading}</span>
                                                    <button onClick={() => handleClickOpen(port)}>View Work</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioSingle 
                open={open} 
                onClose={handleClose} 
                title={state.heading} 
                doc={state.des} 
                image1={state.pImg1} 
                image2={state.pImg2} 
                image3={state.pImg3} 
                authorName={state.authorName} 
                videosId={state.videosId} 
                value={state.value} 
                date={state.date} 
            />

            <div className="white_svg svg_white">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300"></polygon>
                </svg>
            </div>
        </div>
    );
}

export default Portfolio;
