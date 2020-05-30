import React from "react";
import "./Projects.css"
import ProjectsJumbo from "./ProjectJumbo";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


class Projects extends React.Component{

    constructor(props) {
        super(props);
        this.adventureClick = this.adventureClick.bind(this);
        this.conversationClick = this.conversationClick.bind(this);
    }

    adventureClick(){

        window.open('https://github.com/albertzed2000/AdventureOfPost');
    }

    conversationClick(){

        window.open('https://github.com/albertzed2000/Conversationalist');
    }
    //style={{ width: '55vh' }}
    render(){

        return(

            <div className="projects-whole">
                <Row>
                    <Col>
                    </Col>

                    <Col>
                        <ProjectsJumbo />
                    </Col>
                </Row>
                
                


                <Row>
                    <Col className='button-general'>
                    <Card >
                    <Card.Img variant="top" src={'assets/img/adv-screenshot1.jpg'} />'
                    
                    <Card.Body>
                        <Card.Title>Adventure of Post</Card.Title>
                        <Card.Text>
                        An android app built with Java with 3 gamemodes including Sudoku, Trivia, and Whack-a-mole that implements
                        Model-View-Presenter architecture.
                        </Card.Text>
                        <Button variant="primary" onClick={this.adventureClick}><FontAwesomeIcon icon={faStar} /> See it on Github!</Button>
                    </Card.Body>
                    </Card>
                    </Col>



                    <Col className='button-general'>
                    <Card >
                    <Card.Img variant="top" src={'assets/img/conv-screenshot1.jpg'} />'
                    
                    <Card.Body>
                        <Card.Title>Conversationalist</Card.Title>
                        <Card.Text>
                        An android app built in Java that implements text-to-speech to simulate an English conversation
                        </Card.Text>
                        <Button variant="primary" onClick={this.conversationClick}><FontAwesomeIcon icon={faStar} /><i className="fab fa-github"></i> See it on Github!</Button>
                    </Card.Body>
                    </Card>
                    </Col>

                    <Col></Col>

                    <Col></Col>
                    
                </Row>

            </div>
        )
    }
}

export default Projects;