import React from 'react';
import './App.css';


class TestComp extends React.Component{
  render(){
    return(
      <div>
        <h1>helo</h1>
      </div>
      );
  }
}

class AboutBlurb extends React.Component{


  render(){
    return(
      <div>
        <h1>Hi! My name is Albert and I'm a student at the University of Toronto, where I'm currently double majoring in 
Computer Science and Economics. If I had to list my interests and hobbies out, the list would be very long. However, a few of my
main interests include fashion design (sewing, painting on denim), cooking (Fun fact:I used to work as a Chef de Partie at Cactus Club
 Cafe), and exercise (used to do powerlifting and swimming but now mostly long distance running and training for half-marathons
due to a minor back injury). Although I could talk about my passions and philosophy in life for hours on end, I'll leave you to
explore the rest of my website instead! If you have any projects you'd like to work on together OR you feel I'd be a good fit for your
company, don't hesitate to contact me! I promise that I am a cool person to work with :)</h1>

      </div>
    )
    }
  }

//export default App;
export default TestComp;
