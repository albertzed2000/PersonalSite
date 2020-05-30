import "./Contact.css";
import React from "react";
import ContactJumbo from "./ContactJumbo"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faMailBulk, faFile} from "@fortawesome/free-solid-svg-icons"

import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init();


class Contact extends React.Component{

    render(){

        return(
        <div className="contact-whole">

            <Row>
                <Col md={7}>

                </Col>


                <Col md={5}>
                    <div data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="top-top" data-aos-delay="500">
                        <ContactJumbo />
                    </div>
                </Col>
            </Row>
            
            <Row className="icon-row">
                <Col md={3}>
                    <div data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="top-top" data-aos-delay="300">
                        <a href="https://github.com/albertzed2000" target="blank">
                        <FontAwesomeIcon className="icon" icon={faGithub}/>
                        </a>
                        <div className="icon-text">
                        Github
                        </div>
                    </div>
                </Col>

                <Col md={3}>
                    <div data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="top-top" data-aos-delay="500">
                        <a href="https://www.linkedin.com/in/albertzed/" target="blank">
                        <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                        </a>
                        <div className="icon-text">
                        LinkedIn
                        </div>
                    </div>
                </Col>

                <Col md={3}>  
                    <div data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="top-top" data-aos-delay="700">
                        <a href="mailto:mralbertzheng@gmail.com" target="blank">
                        <FontAwesomeIcon className="icon" icon={faMailBulk}/>
                        </a>
                        <div className="icon-text">
                        Email
                        </div>
                    </div>
                </Col>

                <Col md={3}>
                    <div data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="top-top" data-aos-delay="900">
                        <a href="assets/AlbertZhengResume.pdf" target="blank">
                        <FontAwesomeIcon className="icon" icon={faFile}/>
                        </a>
                        <div className="icon-text">
                        Resume
                        </div>
                    </div>
                </Col>


            </Row>
        </div>

        )
    }
}

export default Contact;