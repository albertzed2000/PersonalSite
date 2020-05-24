import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
export class BootstrapCarousel extends Component {  
        render() {  
  
                return (  
                        <div>  
                         <div class='container-fluid' >  
                          <div className="row title" style={{ marginBottom: "20px" }} >  
                          
                         </div>  
                         </div>  
                         <div className='container-fluid' >  
                         <Carousel fade="true">  
                         <Carousel.Item style={{'height':"300px"}} >  
                         <img style={{'height':"300px"}}  
                         className="d-block w-100"  
                        src="./images/e2.jpg"  />  
                           <Carousel.Caption>  
                             <h3>First Demo </h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"300px"}}>  
                                 <img style={{'height':"300px"}}  
                                   className="d-block w-100"  
                                    src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"    />  
                                       <Carousel.Caption>  
                                   <h3>Second Demo</h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"300px"}}>  
                                       <img style={{'height':"300px"}}  
                                        className="d-block w-100"  
                                         src="https://thehill.com/sites/default/files/ca_elonmusk_123019getty_1.jpg"   />  
                                        <Carousel.Caption>  
                                          <h3>Third Demo</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default BootstrapCarousel  