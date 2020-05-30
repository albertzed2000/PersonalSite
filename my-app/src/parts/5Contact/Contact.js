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

    constructor(props) {
        super(props);
        this.openResume = this.openResume.bind(this);
    }

    openResume(){

        window.open("assets/AlbertZhengResume.pdf");
    }

    render(){

        return(
        <div className="contact-whole">

            <Row>
                <Col>

                </Col>


                <Col>
                    <ContactJumbo />
                </Col>
            </Row>
            
            <Row className="icon-row">
                <Col>
                    <a href="https://github.com/albertzed2000" target="blank">
                    <FontAwesomeIcon className="icon" icon={faGithub}/>
                    </a>
                    <div className="icon-text">
                    Github
                    </div>
                </Col>

                <Col>
                    <a href="https://www.linkedin.com/in/albertzed/" target="blank">
                    <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                    </a>
                    <div className="icon-text">
                    LinkedIn
                    </div>
                </Col>

                <Col>  
                    <a href="mailto:mralbertzheng@gmail.com" target="blank">
                    <FontAwesomeIcon className="icon" icon={faMailBulk}/>
                    </a>
                    <div className="icon-text">
                    Email
                    </div>
                </Col>

                <Col>
                    <a href="#" onClick={this.openResume}>
                    <FontAwesomeIcon className="icon" icon={faFile}/>
                    </a>
                    <div className="icon-text">
                    Resume
                    </div>
                </Col>


            </Row>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        </div>

        )
    }
}

export default Contact;