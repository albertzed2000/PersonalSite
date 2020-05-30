import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import TextCarousel from "./TextCarousel"
import "./Intro.css";

import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init();

class Intro extends React.Component{


    render(){

        return(
            <div className="jumbo fluid-container" >
                    <Jumbotron id="Jumbotron" fluid data-aos="fade-right" data-aos-duration="1000">

                        Hi, I'm <span style={{"color": "#ff6600"}}>Albert!</span>

                        <div id="caro">
                        <TextCarousel />
                        </div>   
                    </Jumbotron>
            </div>

        )
    }
}

export default  Intro;