import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


import Intro from "./parts/2Intro/Intro";
import About from "./parts/3about/About";
import Projects from "./parts/4projects/Projects"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./parts/5Contact/Contact";
import Navi from "./parts/1NavBar/navi";

ReactDOM.render(
  <React.StrictMode>
    <div id="Top">
      <Navi />
    </div>
    
    <div id="Intro">
      <Intro />
    </div>
    
    
    
    <div id="About">
      <About />
    </div>
    

    
    <div id="Projects">
      <Projects/>
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
