import React from 'react'
import DefaultModal from '../AboutModal'


const About = (props) => {

    return(
        <section id="about" className="tp-about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="tp-about-wrap">
                        <div className="tp-about-img">
                            <img src="/Images/about.jpg" alt=""/>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="tp-about-text">
                        <div className="tp-about-icon">
                            <i className="fi flaticon-web-design"></i>
                        </div>
                        <div className="tp-about-icon-content">
                            <h2>Professional And Dedicated Web Developer</h2>
                            <p>I'm a Freelance Full Stack Developer with expertise in HTML, CSS, JavaScript, React.js, Node.js, MongoDB, MySQL, and AWS. I specialize in building high-performance, scalable, and user-friendly web applications tailored to your business needs. Whether you need a modern website, an interactive front-end, a robust backend, or API integrations, I deliver efficient and maintainable solutions. With a strong foundation in problem-solving and software development, I have worked on a variety of projects involving full-stack web development, backend system optimization, and automation tools. My experience includes building responsive websites, developing scalable APIs, and creating efficient software solutions to enhance performance and user experience. With a strong foundation in both frontend and backend technologies, I am committed to delivering high-quality, tailored solutions that meet client requirements. I am passionate about delivering high-quality work, meeting deadlines, and exceeding client expectations. Whether you're a startup, a business owner, or an entrepreneur looking to build your next big project, I’m here to help!
                            <br/> <br/>📩 Let’s connect and bring your ideas to life! 🚀</p>
                            <div className="signeture">
                                <span><img src="images/signature.png" alt=""/></span>
                                <p>Full Stack Developer</p>
                            </div>
                            <DefaultModal buttonClass={'template-btn'}/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="white_svg svg_white">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                    <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
                </svg>
            </div>
        </section>
    )
}

export default About;
