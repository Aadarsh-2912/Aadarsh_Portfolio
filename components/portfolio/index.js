import React, { useState } from 'react';
import Link from 'next/link';
import PortfolioSingle from '../portfolioSingle';

const Portfolio = () => {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({});

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item);
    };

    function handleClose() {
        setOpen(false);
    }

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
            des: `The revamped version of Funngro introduces a modernized web experience with a more intuitive design, improved navigation, and optimized performance. The UI/UX has been refreshed to enhance readability, accessibility, and engagement across all devices. A restructured layout ensures effortless browsing, making it easier for users to explore opportunities, post jobs, and connect with teen freelancers.<br/><br/><a href="https://aadarsh-2912.github.io/Responsive_Website/" target="_blank" rel="noopener noreferrer">Click Here</a> to visit the website.`
        },
        {
            Id: "2",
            heading: "KLEENEX",
            subHeading: "File Optimization and Cleanup Tool",
            authorName: 'David Warner',
            value: '$400',
            date: '15 Jan 2021',
            videosId: 'r_hYR53r61M',
            pImg1: 'images/protfolio/kleenex/img-1.jpg',
            pImg2: 'images/protfolio/kleenex/img-2.png',
            pImg3: 'images/protfolio/kleenex/img-3.png',
            vedio: "",
            des: `KLEENEX is a Python-based file optimization and cleanup tool using Tkinter. It helps users manage storage on Windows by detecting and removing duplicate files, cleaning junk and temporary files, and identifying large files.`
        },
        {
            Id:"3",
            heading:"FUNNGRO ",
            subHeading:"Revamped Design, Same Powerful Platform",
            authorName:'Ken Wiliamm',
            value:'$900',
            date:'12 Jan 2021',
            videosId:'LUSa3yRTB9A',
            pImg1:'images/protfolio/funngro/img-1.jpg',
            pImg2:'images/protfolio/funngro/img-2.png',
            pImg3:'images/protfolio/funngro/img-3.png',
            vedio:"",
            des:'The revamped version of Funngro introduces a modernized web experience with a more intuitive design, improved navigation, and optimized performance. The UI/UX has been refreshed to enhance readability, accessibility, and engagement across all devices. A restructured layout ensures effortless browsing, making it easier for users to explore opportunities, post jobs, and connect with teen freelancers. Performance improvements, including faster load times and enhanced responsiveness, provide a smoother user experience. The visual appeal has been refined with an updated color scheme, typography, and layout, creating a more professional yet engaging look. Clearer call-to-action buttons and better content structuring improve user interaction, making the platform more efficient and accessible. This redesign enhances both the aesthetics and functionality of Funngro, ensuring a seamless experience for teens and businesses alike.<br/><br/><a href="https://aadarsh-2912.github.io/Funngro_website/" target="_blank" rel="noopener noreferrer">Click Here</a> to visit the website.'
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
                                                    <img src={port.pImg1} alt={port.heading} />
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
