import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
import "./Intro.css";

export class TextCarousel extends Component {  
        render() {  
                //temporary component, must be styled properly for final verson!

                let itemStyle = {'height': "1.0em"};
                return (
                        <div>   
                        <Carousel fade={true} controls={false} indicators={false} interval={2000}>  
                         <Carousel.Item style={itemStyle}>
                                 <h1>Two-time half-marathon finisher.</h1>
                         </Carousel.Item>

                         <Carousel.Item style={itemStyle}>
                                <h1>Aspiring Chef.</h1>
                         </Carousel.Item>

                         <Carousel.Item style={itemStyle}>
                                <h1>Amateur Skateboarder.</h1>
                         </Carousel.Item>
                         <Carousel.Item style={itemStyle}>
                                <h1>Film lover.</h1>
                         </Carousel.Item>
                         <Carousel.Item style={itemStyle}>
                                <h1>Prefers Python over Java.</h1>
                         </Carousel.Item>

                                        </Carousel>  
                        </div>  
                )  
        }  
}  
  
export default TextCarousel  