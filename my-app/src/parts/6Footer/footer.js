import React from 'react';
import "./footer.css";

import {Row, Col} from "react-bootstrap";

export default class Footer extends React.Component{





    render(){



        return(
            <div className="footer-whole">
                <hr/>

                <Row>
                    <Col>
                        <a href="/#Top">Go To Top</a>
                    </Col>

                    <Col>
                        <a href="/#About">About</a>
                    </Col>
                        
                    <Col>
                        <a href="/#Projects">Projects</a>
                    </Col>
                </Row>
                <br/>
                <span className="footer-copyright">Copyright © 2020 Albert Zheng, Inc. All rights reserved. </span>


            </div>


        )
    }
}