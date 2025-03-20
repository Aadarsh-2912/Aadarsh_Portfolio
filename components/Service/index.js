import React, { useState } from 'react';
import ServiceSingle from '../ServiceSingle';
import { Button } from '@mui/material';

const Service = () => {
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({});

    function handleClose() {
        setOpen(false);
    }

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item);
    };

    const service = [
        {
            Id: "1",
            sIcon: "fi flaticon-web-design",
            heading: "Web Design",
            Simg1: 'images/service-single/web-design/img-1.jpg',
            Simg2: 'images/service-single/web-design/img-2.jpg',
            Simg3: 'images/service-single/web-design/img-3.jpg',
            des: 'I create visually appealing and user-friendly website designs that enhance user experience and engagement. My designs focus on modern aesthetics, intuitive navigation, and seamless responsiveness.',
            details: "A well-crafted website is more than just an online presence—it is a powerful tool that enhances brand identity, improves user engagement, and drives business growth. I specialize in creating modern, visually appealing, and user-friendly web designs tailored to your specific needs. Every website I design is carefully structured to ensure intuitive navigation, seamless user experience, and a strong aesthetic appeal. By incorporating the latest design trends, I ensure your site stands out while maintaining high functionality. Whether you need a minimalist portfolio, an engaging business website, or a feature-rich e-commerce store, I focus on balancing creativity with usability. My goal is to build websites that not only look great but also convert visitors into loyal customers by enhancing accessibility and engagement."
        },
        {
            Id: "2",
            sIcon: "fi flaticon-laptop",
            heading: "Web Development",
            Simg1: 'images/service-single/development/img-1.jpg',
            Simg2: 'images/service-single/development/img-2.jpg',
            Simg3: 'images/service-single/development/img-3.jpg',
            des: 'From simple websites to complex web applications, I develop scalable and high-performance solutions using the latest technologies. I specialize in frontend and backend development, ensuring a smooth and functional digital experience.',
            details: "A visually appealing website is only effective if it functions flawlessly. I offer comprehensive web development services, covering both frontend and backend technologies to create scalable, high-performance, and fully optimized web solutions. Whether you require a dynamic business website, an interactive web application, or a customized content management system (CMS), I bring expertise in the latest programming frameworks to develop a solution that meets your needs. I ensure that your website is fast, secure, and fully responsive, adapting seamlessly to different screen sizes and devices. In addition to development, I focus on database management, API integrations, and performance optimization to enhance functionality. My approach to web development prioritizes efficiency, security, and a seamless user experience, making sure your digital platform runs smoothly and effectively."
        },
        {
            Id: "3",
            sIcon: "fi flaticon-paint-palette",
            heading: "Creative Design",
            Simg1: 'images/service-single/creative/img-1.jpg',
            Simg2: 'images/service-single/creative/img-2.jpg',
            Simg3: 'images/service-single/creative/img-3.jpg',
            des: "I design engaging visual elements that align with the brand’s identity and values. Whether it’s custom graphics or interactive features, I ensure that every element enhances user engagement and makes a lasting impression.",
            details: "In today's digital landscape, design is more than just aesthetics—it’s about creating an immersive experience that keeps users engaged. I specialize in UI/UX design, custom graphics, branding elements, and interactive visual content that enhance the overall look and feel of a website or digital product. A well-thought-out design ensures that your brand leaves a strong and lasting impression, making it more recognizable and memorable. Whether you need a custom website layout, professional illustrations, or engaging visual elements, I tailor my designs to align with your brand identity while maintaining clarity, accessibility, and modern appeal. My design approach is not only creative but also strategic, ensuring that every element contributes to a cohesive and compelling user experience."
        },
        {
            Id: "4",
            sIcon: "fi flaticon-smartphone",
            heading: "Responsive Design",
            Simg1: 'images/service-single/responsive/img-1.jpg',
            Simg2: 'images/service-single/responsive/img-2.jpg',
            Simg3: 'images/service-single/responsive/img-3.jpg',
            des: 'I build fully responsive websites that provide an optimized viewing experience across desktops, tablets, and mobile devices. By using the latest technologies, I ensure your website looks great and functions flawlessly on all screen sizes, improving accessibility and user retention.',
            details: "With the increasing use of mobile devices, having a fully responsive website is no longer optional—it’s essential. I specialize in creating mobile-friendly and cross-device compatible websites that provide a consistent and optimized experience across desktops, tablets, and smartphones. Every aspect of the site, from layout and typography to images and navigation, is carefully adjusted to ensure seamless usability on different screen sizes. I use modern CSS frameworks, flexible grid layouts, and adaptive images to optimize performance while maintaining visual integrity. A well-optimized, responsive design not only improves user experience and engagement but also enhances search engine rankings, ensuring better visibility and accessibility for your website."
        },
        {
            Id: "5",
            sIcon: "fi flaticon-verified",
            heading: "Branding Identity",
            Simg1: 'images/service-single/branding/img-1.jpg',
            Simg2: 'images/service-single/branding/img-2.jpg',
            Simg3: 'images/service-single/branding/img-3.jpg',
            des: 'I help businesses create a strong and memorable brand presence by developing cohesive design elements such as logos, typography, color schemes, and visual aesthetics. My goal is to ensure your brand stands out, is unique, and leaves a lasting impact on your audience.',
            details: "A strong brand identity is a key factor in establishing credibility and trust in any industry. I help businesses define, refine, and strengthen their brand identity by creating a cohesive visual language that reflects their values and vision. From designing logos, color palettes, typography, and brand assets, I ensure that every element aligns with your brand’s personality. Whether you are a new business looking to build a brand from scratch or an existing company seeking a refresh, I create branding materials that enhance recognition and establish consistency across all platforms. A strong and memorable brand identity is essential in making a lasting impression on your target audience, helping you stand out in a competitive market."
        },
        {
            Id: "6",
            sIcon: "fi flaticon-operator",
            heading: "24/7 Support",
            Simg1: 'images/service-single/support/img-1.jpg',
            Simg2: 'images/service-single/support/img-2.jpg',
            Simg3: 'images/service-single/support/img-3.jpg',
            des: 'I provide round-the-clock technical support, website maintenance, and performance optimization to keep your website running smoothly. Whether it’s bug fixes, security updates, or adding new features, I ensure your website stays updated and operates without disruptions.',
            details: "Launching a website is just the beginning—ongoing support and maintenance are crucial to keeping it running smoothly. I offer round-the-clock support services to ensure your website remains secure, up-to-date, and optimized for performance. My support services include bug fixes, security updates, performance monitoring, content updates, and feature enhancements. Whether you need urgent troubleshooting or regular maintenance, I am available to assist you and ensure minimal downtime for your website. By providing continuous technical support and updates, I help businesses maintain a reliable, fast, and secure digital presence that meets evolving user expectations."
        },
    ];

    return (
        <div id="service" className="service-area section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title section-title2 text-center">
                        <span>What I am Expert In</span>
                        <h2>My Services</h2>
                    </div>
                </div>
                <div className="row">
                    {service.map((serv, srv) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={srv}>
                            <div className="service-section">
                                <div className="services-wrapper">
                                    <div className="services-icon-wrapper">
                                        <div className="service-dot">
                                            <div className="dots"></div>
                                            <div className="dots2"></div>
                                        </div>
                                        <i className={serv.sIcon}></i>
                                    </div>
                                    <div className="service-content">
                                        <h2>{serv.heading}</h2>
                                        <p>{serv.des}</p>
                                        <Button
                                            className="btn"
                                            onClick={() => handleClickOpen(serv)}>
                                            Read More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="white_svg">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
            <ServiceSingle open={open} onClose={handleClose} title={state.heading} doc={state.details} image1={state.Simg1} image2={state.Simg2} image3={state.Simg3} />
        </div>
    );
}

export default Service;