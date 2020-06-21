//import react
import React from "react";

//import react-bootstrap navbar component and subcomponents
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeSquare, faFile} from "@fortawesome/free-solid-svg-icons"
import "./navi.css"; //css file


class Navi extends React.Component{


    render(){
        //note: sticky doesn't work since overflow property prevents this (we have enabled overflow everywhere)
        //a basic react-bootstrap navbar, allows navigation to same page's subsections and external
        //github, linkedin, email, and resume links
        return(

            <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="/#Top">Albert Zheng</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link  className="nav-text" href="/#About">About</Nav.Link>
                        <Nav.Link  className="nav-text" href="/#Projects">Projects</Nav.Link>
                        <Nav.Link  className="nav-text" href="/#Contact">Contact</Nav.Link>
                        <Nav.Link  className="nav-text" href="http://www.razestats.com" target="_blank">RazeStats</Nav.Link>
                        

                    </Nav>

                    <Nav>
                        <Nav.Link alt="Github" href="https://github.com/albertzed2000" target="blank"><FontAwesomeIcon icon={faGithub}/></Nav.Link>
                        <Nav.Link alt="LinkedIn"  href="https://www.linkedin.com/in/albertzed/" target="blank"><FontAwesomeIcon icon={faLinkedin}/></Nav.Link>
                        <Nav.Link alt="Email" href="mailto:mralbertzheng@gmail.com" target="blank"><FontAwesomeIcon icon={faEnvelopeSquare}/></Nav.Link>
                        <Nav.Link alt="Resume" href="assets/AlbertZhengResume.pdf" target="blank"><FontAwesomeIcon icon={faFile}/></Nav.Link>
                
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default Navi;