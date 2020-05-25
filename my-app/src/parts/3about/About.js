import React from "react";
import Blurb from "./Blurb";
import AboutJumbo from "./AboutJumbo";
import "./About.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class About extends React.Component{

    render(){

        return(
            <div className="AboutGeneral">
            <Row>
                <Col md={4}>
                    <div>
                    </div>
                </Col>
                <Col md={8}>
                <div >
                    <div>
                        <AboutJumbo />
                    </div>

                    <div>
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