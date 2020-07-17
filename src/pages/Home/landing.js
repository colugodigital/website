import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//import images
import enterprise from '../../images/enterprise.png';

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                        <section className="bg-half-260 bg-primary d-table w-100" style={{ background: `url(${enterprise}) center center` }}>
            <div className="bg-overlay"></div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="title-heading text-center mt-4">
                            <h1 className="display-4 title-dark font-weight-bold text-white mb-3">We help European Companies enter the American Market and Grow Exponentially.</h1>

                            <div className="mt-4 pt-2">
                                <a href="mailto:admin@colugodigital.com" className="btn btn-primary landingbutton">Talk to Us</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

            </React.Fragment>
        );
    }
}

export default Section;
