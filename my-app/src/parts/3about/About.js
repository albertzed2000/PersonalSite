import React from "react";
import Blurb from "./Blurb";
import AboutJumbo from "./AboutJumbo";
import "./About.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class About extends React.Component{

    render(){

        return(
            <div className="AboutGeneral">
            <Row>
                <Col md={4}>
                    <div className="imageHolder">
                        <Image alt="Me and my girlfriend!" src={'assets/img/me.jpeg'} rounded={true} fluid/>
                    </div>
                </Col>
                <Col md={8}>
                <div >
                    <div>
                        <AboutJumbo />
                    </div>

                    <div className="blurb">
                        <Blurb />
                    </div>
                </div>
                </Col>
            </Row>
            </div>
        )
    }
}

export default About;