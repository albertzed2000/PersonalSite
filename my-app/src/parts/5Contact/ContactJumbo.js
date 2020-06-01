import Jumbotron from "react-bootstrap/Jumbotron";
import "./Contact.css";
import React from "react";

//big words on contact page
class ContactJumbo extends React.Component{



    render(){

        return(
            <div >
                <Jumbotron className="contact-jumbo">Contact</Jumbotron>


            </div>

        )
    }
}

export default ContactJumbo;