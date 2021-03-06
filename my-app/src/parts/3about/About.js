import React from "react";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AboutJumbo from "./AboutJumbo";
import "./About.css";

import Blurb2 from "./Blurb2";
import Blurb3 from "./blurb3";
import Blurb from "./Blurb";

//aos fade animations, initialization
import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init();

class About extends React.Component{

    render(){

        return(

            <div className="AboutGeneral" style={{"overflow-x": "hidden", "overflow-y": "hidden"}}>
                {/*Jumbotron and 'profile pic' in one Row */}
            
            <Row >
                <Col md={5}>
                    <div className="imageHolder" data-aos="fade-right" data-aos-duration="2000" data-aos-anchor-placement="top-top">
                        <Image alt="Me and my girlfriend!" src={'assets/img/me.jpeg'} rounded={true} fluid/>
                    </div>
                </Col>
                <Col md={7}>
                <div >
                    <div data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="center-center">
                        <AboutJumbo />
                    </div>

                    <div className="blurb" data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="top-center">
                        <Blurb />
                    </div>
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <div className="blurb" data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="top-center">
                        <Blurb2 />
                    </div>
                </div>
                </Col>
            </Row>
            
            

            <Row className="about-images" >
                {/*image collage with borders (css) and fade effect */}
                <Col md={4} >
                    <div className="images-left" data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <Image className="pic" alt="Made thousands of these when I worked at Cactus Club Cafe!" src={'assets/img/cactuspoke.jpg'}  fluid/>
                    <Image className="pic" alt="I made many of these too!" src={'assets/img/ceviche.jpg'}  fluid/>
                    </div>
                </Col>
                <Col md={4} >
                    <div className="images-center" data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="top-center" data-aos-delay="600">
                    <Image className="pic" alt="I finished two half-marathons, more hopefully to come in the future." src={'assets/img/marathon.jpg'}  fluid/>
                    </div>
                </Col>
                <Col md={4} >
                    <div className="images-right" data-aos="fade-left" data-aos-duration="2000" data-aos-anchor-placement="top-center" data-aos-delay="1000">
                    <Image className="pic" alt="I co-designed the denim octopus and tote bag." src={'assets/img/mefashion.jpg'} fluid/>
                    <Image className="pic" alt="Close-up of the octopus artwork." src={'assets/img/pants2.jpg'}  fluid/>
                    </div>
                </Col>
                
                

            </Row>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <Row >
                <Col md={4}>
                </Col>
                <Col md={4}>
                <div className="blurb" data-aos="fade-up" data-aos-duration="2001" data-aos-anchor-placement="bottom-bottom" data-aos-delay="1100">
                <Blurb3/>
                </div>
                </Col>
                <Col md={4}>
                </Col>
            
            </Row>
            
            </div>
        )
    }
}

export default About;