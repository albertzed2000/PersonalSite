import React from 'react';
import "./Intro.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import TextCarousel from "./TextCarousel";

class BigName extends React.Component{
    render(){

        return(
                <div>
                    <Jumbotron id="Jumbotron" className="jumbo" fluid>
                        <span>Hi, I'm Albert!</span>
                        <TextCarousel/>
                        
                    </Jumbotron>
                </div>
        );
    }



}

export default BigName