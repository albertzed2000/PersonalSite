import React from 'react';
import "./Intro.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

class BigName extends React.Component{
    render(){

        return(
                <div className="jumbo" style={{"fontSize": "250px"}}>
                        <h1 style={{"fontSize": "250px"}}>Albert</h1>
                        <h1>Zheng,</h1>
                </div>
        );
    }



}

export default BigName