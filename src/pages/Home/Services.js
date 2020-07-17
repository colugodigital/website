import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

//Import Images
import digital1 from "../../images/404.png";
import digital2 from "../../images/404.png";
import digital3 from "../../images/404.png";

import Pricing from "./Pricing";
import Analytics from "./analytics";
import Growth from "./growth";

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            successMsg : false
        }
        this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
              activeTab: tab
            });
          }
    }

    render() {
        return (
            <React.Fragment>
            <Container className="mt-100 mt-60">
            <div>
            <h2 className="productstitle">Our Services</h2>
            </div>
                <Row className="align-items-center">
                    <Col md={5}>
                        <Nav pills justified className="flex-column rounded" id="pills-tab" role="tablist">
                            <NavItem>
                                <NavLink
                                className={classnames({active: this.state.activeTab === '1'},"rounded")}
                                onClick={() => { this.toggleTab('1'); }}
                                id="pills-cloud-tab"
                                >
                                    <div className="p-3 text-left">
                                        <h4 className="title font-weight-bold">Social Media Automation</h4>
                                        <p className=" tab-para mb-0">We will create dedicated campaigns and accounts for the American Market. This includes growth strategies and user engagement to get the most out of your followers.</p>
                                    </div>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                className={classnames({active: this.state.activeTab === '2'},"rounded","border-top")}
                                onClick={() => { this.toggleTab('2'); }}
                                id="pills-smart-tab"
                                >
                                    <div className="p-3 text-left">
                                        <h4 className="title font-weight-bold">Analytics and Optimization</h4>
                                        <p className="tab-para mb-0">Data is the new Money. We will integrate several analytical tools and strategies so your company will have unparalleled information to make data driven decisions. </p>
                                    </div>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                className={classnames({active: this.state.activeTab === '3'},"rounded","border-top")}
                                onClick={() => { this.toggleTab('3'); }}
                                id="pills-apps-tab"
                                >
                                    <div className="p-3 text-left">
                                        <h4 className="title font-weight-bold">Customized Growth Strategy</h4>
                                        <p className="tab-para mb-0">We design tailor made campaigns for each of our clients and continuously adapt and optimise them based on the data we aggregate to ensure our clients goals are always met.</p>
                                    </div>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>

                    <Col md={7} xs={12} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="position-relative">
                            <TabContent activeTab={this.state.activeTab} className="ml-lg-4" id="pills-tabContent">
                                <TabPane tabId="1">
                                    <Pricing className="img-fluid mx-auto d-block" alt="" />
                                </TabPane>

                                <TabPane tabId="2">
                                    <Analytics className="img-fluid mx-auto d-block" alt="" />
                                </TabPane>

                                <TabPane tabId="3">
                                    <Growth className="img-fluid mx-auto d-block" alt="Landrick" />
                                </TabPane>
                            </TabContent>
                        </div>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default Services;
