import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import TextCarousel from "./TextCarousel"
import "./Intro.css";

class Intro extends React.Component{


    render(){

        return(
            <div className="jumbo fluid-container" >
                    <Jumbotron id="Jumbotron" fluid>

                        Hi, I'm <span style={{"color": "#ffcce6"}}>Albert!</span>

                        <div id="caro">
                        <TextCarousel />
                        </div>   
                    </Jumbotron>
            </div>

        )
    }
}

export default  Intro;