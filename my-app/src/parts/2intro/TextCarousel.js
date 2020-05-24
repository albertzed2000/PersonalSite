import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
export class BootstrapCarousel extends Component {  
        render() {  
  
                return (  
                        <div style={{width: "150px", height: "50px"}}>   
                         <Carousel fade={true} controls={false} indicators={false}>  
                         <Carousel.Item style={{'height': "50px", "width": "150px", "background-color":"red"}}>
                                 <h1>winning</h1>
                        </Carousel.Item>

                        <Carousel.Item style={{'height': "50px", "width": "150px", "background-color":"red"}}>
                                <h1>losing</h1>
                        </Carousel.Item>

                        <Carousel.Item style={{'height': "50px", "width": "150px", "background-color":"red"}}>
                                <h1>gaining weight</h1>
                        </Carousel.Item>

                                        </Carousel>  
                        </div>  
                )  
        }  
}  
  
export default BootstrapCarousel  