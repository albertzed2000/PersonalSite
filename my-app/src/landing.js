//don't need this either

//import statements
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";


//import page section components
import Navi from "./parts/1NavBar/navi";
import Intro from "./parts/2intro/Intro";
import About from "./parts/3about/About";
import Projects from "./parts/4projects/Projects"
import Contact from "./parts/5Contact/Contact";


export default class Landing extends React.Component{
    //main page
    
    
    render(){
        return(
            <div>
                <div id="Top">
                    <Navi />
                </div>
                
                <div id="Intro">
                    <Intro />
                </div>
                
                <div className="intro-ombre">
                    <br></br><br></br><br></br><br></br>
                </div>
                
                <div id="About">
                    <About />
                </div>
                
                <div className="about-ombre">
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
                
                <div id="Projects">
                    <Projects/>
                </div>
                
                <div className="projects-ombre">
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </div>

                <div id="Contact">
                    <Contact />
                </div>
    </div>
        )
    }
}