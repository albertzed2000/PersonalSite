import React from "react";
import BigName from "./JumboName";
import TextCarousel from "./TextCarousel";
import Test from "./test";

class Intro extends React.Component{


    render(){

        return(
            <div>
                
                <div className="jumbo">
                    <BigName />
                </div>
                <TextCarousel/>
                <Test />


            </div>

        )
    }
}

export default  Intro;