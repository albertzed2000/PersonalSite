import "./Contact.css";
import React from "react";
import ContactJumbo from "./ContactJumbo"

class Contact extends React.Component{


    render(){

        return(
            <div className="contact-whole">
                <ContactJumbo />
            </div>

        )
    }
}

export default Contact;