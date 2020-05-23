import React from "react";
import AboutBlurb from "./About";
import BigName from "./Name";

class Intro extends React.Component{


    render(){

        return(
            <div>
                <AboutBlurb />
                <BigName />

            </div>

        )
    }
}

export default  Intro;