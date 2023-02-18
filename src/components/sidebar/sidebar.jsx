import './sidebar.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/ARTBOT.png';
// import './footer.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import accessbility from '../../assets/accessiility.png';
import en from '../../assets/en.png';
import instagram from '../../assets/instagram.png';
import ticktok from '../../assets/ticktok.png';
import twitter from '../../assets/twitter.png';

const Sidebar = ({ handleClose, show, setSection }) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <div className="headerLogoWrapper">
            <p className="text-center">
              <img src={logo} alt="" className="headerLogo" />
            </p>
          </div>
          <span onClick={handleClose}>
            {' '}
            <i className="fa fa-close"></i>
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <button className="sidebar__btns" onClick={() => setSection(0)}>
            Home
          </button>
          <button className="sidebar__btns" onClick={() => setSection(1)}>
            1. Vote
          </button>
          <button className="sidebar__btns" onClick={() => setSection(2)}>
            2. Crowdfund
          </button>
          <button
            className="sidebar__btns"
            style={{ padding: '0px' }}
            onClick={() => setSection(3)}
          >
            3. Pre-Production
          </button>
          <button className="sidebar__btns" onClick={() => setSection(4)}>
            4. Production
          </button>
          <button className="sidebar__btns" onClick={() => setSection(5)}>
            5. Profit!
          </button>
        </Offcanvas.Body>
        <div className="sidebar-footer">
          <Container fluid>
            <Row>
              {' '}
              <button className="wip-button">Work In Progress</button>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="d-flex flex-row justify-content-center">
                  <div className="footerIconWrapperR">
                    <img src={instagram} alt="" className="footerIcon" />
                  </div>
                  <div className="footerIconWrapperR">
                    <img src={ticktok} alt="" className="footerIcon" />
                  </div>
                  <div className="footerIconWrapperR">
                    <img src={twitter} alt="" className="footerIcon" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="d-flex flex-row justify-content-end">
                  <button>Terms & Conditions</button>
                  <button>Privacy Policy</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
