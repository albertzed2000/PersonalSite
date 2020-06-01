import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./About.css"

//big words on about page
class AboutJumbo extends React.Component{

    render(){

        return(
            
            <Jumbotron className="aboutJumbo" fluid>
                &#123;About&#125;
            </Jumbotron>

        )
    }
}

export default AboutJumbo;