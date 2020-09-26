import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import TextCarousel from "./TextCarousel"
import TypedCarousel from "./TypedCarousel"

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Intro.css";

//aos pkg initialization allows for fade-in animations
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
                        <Col md={9}>
                        <div className="caro container-fluid">
                            {/* <TextCarousel /> */}
                            <span>
                            And I'm&nbsp;
                             <span className="typedIntro"><TypedCarousel /></span>
                            </span>
                        </div> 
                        </Col> 
                        
                        <Col md={3}>

                        </Col>
                    </Row>     
                    </Jumbotron>
                    
            </div>

        )
    }
}

export default  Intro;