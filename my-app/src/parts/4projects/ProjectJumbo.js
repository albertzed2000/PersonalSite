import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Projects.css"

//big words on project page
class ProjectJumbo extends React.Component{

    render(){

        return(
                <Jumbotron className="projects-jumbo" fluid>
                    &#123;Projects&#125;
                </Jumbotron>

        )
    }
}

export default ProjectJumbo;