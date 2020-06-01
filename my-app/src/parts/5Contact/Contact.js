import "./Contact.css";
import React from "react";
import ContactJumbo from "./ContactJumbo"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//font awesome icon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeSquare, faFile} from "@fortawesome/free-solid-svg-icons"

//initialize aos pkg
import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init();


class Contact extends React.Component{

    render(){

        return(
            //4 icons with fade animations, leads to corresponding external links when clicked
        <div className="contact-whole" style={{"overflow-x": "hidden", "overflow-y": "hidden"}}>

            <Row>
                <Col md={7}>

                </Col>


                <Col md={5}>
                    <div>
                        <ContactJumbo />
                    </div>
                </Col>
            </Row>
            
            <Row className="icon-row">
                <Col md={3}>
                    <div>
                        <a href="https://github.com/albertzed2000" target="blank" style={{color: "black"}}>
                        <FontAwesomeIcon className="icon" icon={faGithub}/>
                        </a>
                        <div className="icon-text">
                        Github
                        </div>
                    </div>
                </Col>

                <Col md={3}>
                    <div>
                        <a href="https://www.linkedin.com/in/albertzed/" target="blank" style={{color: "black"}}>
                        <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                        </a>
                        <div className="icon-text">
                        LinkedIn
                        </div>
                    </div>
                </Col>

                <Col md={3}>  
                    <div>
                        <a href="mailto:mralbertzheng@gmail.com" target="blank" style={{color: "black"}}>
                        <FontAwesomeIcon className="icon" icon={faEnvelopeSquare}/>
                        </a>
                        <div className="icon-text">
                        Email
                        </div>
                    </div>
                </Col>
                
                <Col md={3}>
                    <div>
                        <a href="assets/AlbertZhengResume.pdf" target="blank" style={{color: "black"}}>
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