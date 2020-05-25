import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./About.css"

class AboutJumbo extends React.Component{

    render(){

        return(
            
            <Jumbotron className="aboutJumbo" fluid>
                About
            </Jumbotron>

        )
    }
}

export default AboutJumbo;