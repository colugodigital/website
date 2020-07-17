import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody, Badge } from 'reactstrap';
import { Link } from "react-router-dom";
import classnames from 'classnames';

//Import Icons

//Import Components

class Pricing extends Component {

    render() {
        return (
            <React.Fragment>
            <Container>
                {/* render Section title */}


                <Row className="justify-content-center">



                                    <Col md={6} xs={12} className="mt-4 pt-2 pt-md-4 pl-md-0 pr-md-0">
                                        <Card className="pricing-rates bg-light text-center shadow rounded border-0">
                                            <CardBody className=" py-5">
                                                <h2 className="title text-uppercase text-primary mb-4">Customized Growth Strategy</h2>


                                                <ul className="feature list-unstyled pl-0">
                                                    <li className="feature-list text-muted">Created Uniquely for your Company's Goals and Objectives.</li>
                                                    <li className="feature-list text-muted">Designed to Sustainably Grow Revenue.</li>
                                                    <li className="feature-list text-muted">Continuously optimised based on data and results.</li>

                                                </ul>
                                                <a href="mailto:admin@colugodigital.com" className="btn btn-primary mt-4">Contact Us to Learn More</a>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>





            </Container>
            </React.Fragment>
        );
    }
}

export default Pricing;
