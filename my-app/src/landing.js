//don't need this either

//import statements
import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//import page section components
import Navi from "./parts/1NavBar/navi";
import Intro from "./parts/2intro/Intro";
import About from "./parts/3about/About";
import Projects from "./parts/4projects/Projects"
import Contact from "./parts/5Contact/Contact";
import Footer from "./parts/6Footer/footer";


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

                <div id="Footer">
                    <Footer/>
                </div>
    </div>
        )
    }
}