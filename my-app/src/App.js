//don't need this either

//import statements
import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Landing from "./landing"
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