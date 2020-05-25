import React from "react";
import Blurb from "./Blurb";
import AboutJumbo from "./AboutJumbo";
import "./About.css";

class About extends React.Component{

    render(){

        return(

            <div className="AboutGeneral">
                <div>
                    <AboutJumbo />
                </div>

                <Blurb />
            </div>
        )
    }
}

export default About;