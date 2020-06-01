import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import TextCarousel from "./TextCarousel"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Intro.css";


import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init();

class Intro extends React.Component{


    render(){

        return(
            <div className="jumbo fluid-container" style={{"overflow-x": "hidden", "overflow-y": "hidden"}} >
                    <Jumbotron id="Jumbotron" fluid data-aos="fade-right" data-aos-duration="1000">

                        Hi, I'm <span style={{"color": "#ff6600"}}>Albert!</span>

                    <Row>
                        <Col md={7}>
                        <div className="caro container-fluid">
                            <TextCarousel />
                        </div> 
                        </Col> 
                        
                        <Col md={5}>

                        </Col>
                    </Row>     
                    </Jumbotron>
                    <br></br>
                    
            </div>

        )
    }
}

export default  Intro;