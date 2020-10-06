import React from "react";
import Typed from "typed.js";

export default class TypedCarousel extends React.Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
          strings: [
            'a two-time half-marathon finisher.&nbsp;',
            'an aspiring chef.&nbsp;',
            'an amateur skateboarder.&nbsp;',
            'a film lover.&nbsp;',
            'a code geek.&nbsp;'
        ],
        typeSpeed: 30,
        backSpeed: 20,
        loop: true,
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
  
    render() {
      return (
          <div className="type-wrap">
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
          </div>
      );
    }
  }

  