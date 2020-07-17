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
                                                <h2 className="title text-uppercase text-primary mb-4">Social Media Automation</h2>
                                                <div className="d-flex justify-content-center mb-4">
                                                    <span className="h4 mb-0 mt-2">$</span>
                                                    <span className="price h1 mb-0">500</span>
                                                    <span className="h4 align-self-end mb-1">/month</span>
                                                </div>

                                                <ul className="feature list-unstyled pl-0">
                                                    <li className="feature-list text-muted">Full Management</li>
                                                    <li className="feature-list text-muted">Up to 3 Accounts</li>
                                                    <li className="feature-list text-muted">User Engagement</li>
                                                    <li className="feature-list text-muted">Data Driven Strategies</li>
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
