
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
import App from './App';



//render all website page section components, separated by ombre-styled div break sections
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
