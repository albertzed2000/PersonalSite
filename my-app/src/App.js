//don't need this either

//import statements
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Landing from "./landing"
import Navi from "./parts/1NavBar/navi"
import CypherStats from "./CypherStats"
export default class App extends React.Component{



    render(){

        return(
            <Router>
                <Route path="/" exact component={Landing} />
                <Route path="/cypherstats" component={CypherStats} />

            </Router>


        )
    }
}