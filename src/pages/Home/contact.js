import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Icons


class Contact extends Component {
    render() {
        return (
            <React.Fragment>
            <Container className="mt-100 mt-60">


                <Row className="my-md-5 pt-md-3 my-4 pt-2 pb-lg-5 mt-sm-0 pt-sm-0 justify-content-center">
                    <Col xs={12} className="text-center">
                        <div className="section-title">
                            <h4 className="title mb-4">Ready to Discuss your Company? Get in touch!</h4>
                            <p className="text-muted para-desc mx-auto">Start working with <span className="text-primary font-weight-bold">Colugo Digital</span> to generate awareness, drive traffic, and increase your profits.</p>
                            <a href="mailto:admin@colugodigital.com" className="btn btn-primary mt-4">Get Started</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default Contact;
