import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Icons
import piggybank from '../../images/icon/piggybank.svg';
import clock from '../../images/icon/clock.svg';
import honest from '../../images/icon/honest.svg';

class Benefits extends Component {
    render() {
        return (
            <React.Fragment>

            <Container className="benefitsSection">

            <div>
            <h2 className="productstitle">Why Choose Us?</h2>
            </div>
                <Row>
                    <Col lg={4} md={12} xs={12}>
                        <Card className="features px-md-3 border-0 text-center">
                            <div className="icons rounded h1 text-primary">
                            <img src={piggybank} className="avatar avatar-small benefiticon" alt="" />
                        </div>



                            <CardBody className="p-0 content mt-3">
                                <h5 className="mt-4 title text-dark">We are Cost Effective</h5>
                                <p className="text-muted">Our services are priced much lower than competitors and our results are in the top 1% of the industry.</p>


                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={4} md={12} xs={12} className="mt-4 mt-sm-0 pt-4 pt-sm-0">
                        <Card className="features px-md-3 border-0 text-center">
                            <div className="icons rounded h1 text-primary">
                              <img src={clock} className="avatar avatar-small benefiticon" alt="" />
                            </div>

                            <CardBody className="p-0 content mt-3">
                                <h5 className="mt-4 title text-dark">We are Highly Efficient</h5>
                                <p className="text-muted">We don't spend weeks creating plans and proposals, instead we start producing results right away.  </p>


                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={4} md={12} xs={12} className="mt-4 mt-lg-0 pt-4 pt-lg-0">
                        <Card className="features px-md-3 border-0 text-center">
                            <div className="icons rounded h1 text-primary">
                            <img src={honest} className="avatar avatar-small benefiticon" alt="" />
                            </div>

                            <CardBody className="p-0 content mt-3">
                                <h5 className="mt-4 title text-dark">We are Honest</h5>
                                <p className="text-muted">We will never try to oversell our clients or promise things we cannot deliver.</p>


                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>

            </React.Fragment>
        );
    }
}

export default Benefits;
