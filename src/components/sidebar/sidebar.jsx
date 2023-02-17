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

const Sidebar = ({ handleClose, show }) => {
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
          <button className="sidebar__btns">Home</button>
          <button className="sidebar__btns">Video</button>
          <button className="sidebar__btns">Audio</button>
          <button className="sidebar__btns">Crowdfunding</button>
          <button className="sidebar__btns">About Us</button>
        </Offcanvas.Body>
        <div className="footerWrapper res">
          <Container fluid>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="d-flex flex-row justify-content-end">
                  <div className="footerIconWrapperL">
                    <img src={accessbility} alt="" className="footerIcon" />
                  </div>
                  <div className="footerIconWrapperL">
                    <img src={en} alt="" className="footerIcon" />
                  </div>
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
