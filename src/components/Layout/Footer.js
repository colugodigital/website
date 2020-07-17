import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

// import images


class Footer extends Component {



  render() {
    return (
      <React.Fragment>

        <footer className="footer footer-bar">
            <Container className="text-center">
                <Row className="align-items-center">
                    <Col sm="12">
                        <div className="text-sm-left">
                            <p className="mb-0 text-center">© 2020 Colugo Digital. All Rights Reserved.</p>
                          
                        </div>
                    </Col>


                </Row>
            </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
