import React from "react";
import "./Projects.css"
import ProjectsJumbo from "./ProjectJumbo";

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

//import font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


//aos fade animation initialization
import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init();

class Projects extends React.Component{

    constructor(props) {
        super(props);
        this.adventureClick = this.adventureClick.bind(this);
        this.conversationClick = this.conversationClick.bind(this);
        this.lolStatsClick = this.lolStatsClick.bind(this);
    }

    
    adventureClick(){
        //opens adventureOfPost github repository when clicked

        window.open('https://github.com/albertzed2000/AdventureOfPost');
    }

    conversationClick(){
        //opens Conversationalist github repo when clicked

        window.open('https://github.com/albertzed2000/Conversationalist');
    }

    lolStatsClick(){
        window.open('https://github.com/albertzed2000/LoL-Stats');
    }
    render(){

        return(
            // jumbotron in one row, then one card for each project in the next row

            <div className="projects-whole" style={{"overflow-x": "hidden", "overflow-y": "hidden"}}>
                <Row>
                    <Col md={7}>
                    </Col>

                    <Col md={5}>
                    <div data-aos="fade-right" data-aos-duration="2000" data-aos-anchor-placement="top-center">
                        <ProjectsJumbo />
                    </div>
                    </Col>
                </Row>
                
                <Row>


                        <Col className='card-general' md={4}>
                            <div data-aos="fade-left" data-aos-duration="2000" data-aos-anchor="#first-card" data-aos-delay="500">
                            <Card >
                            <Card.Img variant="top" src={'assets/img/imaqtpie.jpg'} />'
                            
                            <Card.Body>
                                <Card.Title>LoL Stats</Card.Title>
                                <Card.Text>
                                A web app that integrates the Riot Games API in order to display in-depth gameplay statistics.
                                Built using React, React-Bootstrap, and AWS Lambda + API Gateway for the api proxy server.
                                </Card.Text>
                                <Button variant="primary" onClick={this.lolStatsClick}><FontAwesomeIcon icon={faGithub} /> See it on Github!</Button>
                            </Card.Body>
                            </Card>
                            </div>
                        </Col>
 

                        <Col className='card-general' md={4}>
                        <div data-aos="fade-left" data-aos-duration="2000" data-aos-anchor="#first-card" data-aos-delay="500">
                        <Card >
                        <Card.Img variant="top" src={'assets/img/adv-screenshot1.jpg'} />'
                        
                        <Card.Body>
                            <Card.Title>Adventure of Post</Card.Title>
                            <Card.Text>
                            An android app built with Java with 3 gamemodes including Sudoku, Trivia, and Whack-a-mole that implements
                            Model-View-Presenter architecture.
                            </Card.Text>
                            <Button variant="primary" onClick={this.adventureClick}><FontAwesomeIcon icon={faGithub} /> See it on Github!</Button>
                        </Card.Body>
                        </Card>
                        </div>
                        </Col>

                        {/*data-aos-anchor-placement="top-top" */ }
                        <div id="second-card"></div>
                        <Col className='card-general' md={4}>

                        <div data-aos="fade-left" data-aos-duration="2000" data-aos-anchor="#second-card" data-aos-delay="700">
                        <Card >
                        <Card.Img variant="top" src={'assets/img/conv-screenshot1.jpg'} />'
                        
                        <Card.Body>
                            <Card.Title>Conversationalist</Card.Title>
                            <Card.Text>
                            An android app built in Java that implements text-to-speech to simulate an English conversation
                            </Card.Text>
                            <Button variant="primary" onClick={this.conversationClick}><FontAwesomeIcon icon={faGithub} /> See it on Github!</Button>
                        </Card.Body>
                        </Card>
                        </div>
                        </Col>

                        <Col md={3}></Col>
                    
                </Row>
            <br></br><br></br><br></br>
            </div>
        )
    }
}

export default Projects;