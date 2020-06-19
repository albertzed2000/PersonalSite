
//import statements
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

//import page section components
import Navi from "./parts/1NavBar/navi";
import Intro from "./parts/2intro/Intro";
import About from "./parts/3about/About";
import Projects from "./parts/4projects/Projects"
import Contact from "./parts/5Contact/Contact";



//render all website page section components, separated by ombre-styled div break sections
ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
