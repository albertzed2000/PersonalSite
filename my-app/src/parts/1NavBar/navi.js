import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faMailBulk, faFile} from "@fortawesome/free-solid-svg-icons"
import "./navi.css";
class Navi extends React.Component{


    render(){
        //note: sticky doesn't work since overflow property prevents this (we have enabled overflow everywhere)
        return(

            <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="#Top">Albert Zheng</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link  className="nav-text" href="#About">About</Nav.Link>
                        <Nav.Link  className="nav-text" href="#Projects">Projects</Nav.Link>
                        <Nav.Link  className="nav-text" href="#Contact">Contact</Nav.Link>

                    </Nav>

                    <Nav>
                        <Nav.Link href="https://github.com/albertzed2000" target="blank"><FontAwesomeIcon icon={faGithub}/></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/albertzed/" target="blank"><FontAwesomeIcon icon={faLinkedin}/></Nav.Link>
                        <Nav.Link href="mailto:mralbertzheng@gmail.com" target="blank"><FontAwesomeIcon icon={faMailBulk}/></Nav.Link>
                        <Nav.Link href="assets/AlbertZhengResume.pdf" target="blank"><FontAwesomeIcon icon={faFile}/></Nav.Link>
                
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default Navi;