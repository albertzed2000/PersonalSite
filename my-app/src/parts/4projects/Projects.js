import React from "react";
import "./Projects.css"
import ProjectsJumbo from "./ProjectJumbo";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

class Projects extends React.Component{

    render(){

        return(

            <div className="projects-whole">
                <ProjectsJumbo />

                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                    </Col>


                </Row>

            </div>
        )
    }
}

export default Projects;