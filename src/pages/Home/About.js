import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Icons


//Import Images
import app from "../../images/illustrator/app.svg";

class About extends Component {
    render() {
        return (
            <React.Fragment>
            <Container className="mt-100 mt-60">
                <Row className="align-items-center">
                    <Col lg={6} md={{size:6, order:1}} xs={{size:12, order:2}} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <img src={app} alt="Landrick" />
                    </Col>

                    <Col lg={6} md={{size:6, order:2}} xs={{size:12, order:2}}>
                        <div className="section-title">
                            <h4 className="title mb-4">A marketing agency that <br/> helps you succeed</h4>
                            <p className="text-muted">At Colugo Digital we want all of our clients to grow rapidly by targeting new markets. While an increase in social activity and followers is a common metric for marketing companies, our focus is increasing your paying users and profits. Social growth is just a byproduct. </p>
                            <a href="mailto:admin@colugodigital.com" className="btn btn-primary">Contact Us to Learn More </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default About;
