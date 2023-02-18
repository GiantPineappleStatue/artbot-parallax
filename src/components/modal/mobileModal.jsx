import './modal.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../header/header.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../sidebar/sidebar';
import logo from '../../assets/ARTBOT.png';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../modal/loginModal';
import { logout } from '../../redux/reducers/auth.duck';
import instagram from '../../assets/instagram.png';
import ticktok from '../../assets/ticktok.png';
import twitter from '../../assets/twitter.png';

const MobileModal = ({ handleClose, show }) => {
  const history = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => {
    setShowLogin(true);
    handleClose();
  };
  const handleLogOut = () => logout();
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <LoginModal handleClose={handleLoginClose} show={showLogin} />
      <Offcanvas
        className="modal res"
        show={show}
        placement="end"
        onHide={handleClose}
      >
        <Offcanvas.Header>
          <div className="headerLogoWrapper">
            <p className="text-center"></p>
          </div>
          <span onClick={handleClose}>
            {' '}
            <i className="fa fa-close"></i>
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Col lg={3} md={3} xs={3}>
            <div
              className="res"
              style={{ paddingRight: '10px', height: '100%' }}
            >
              <div className="d-flex align-items-center">
                <div className="headerButtonWrapper d-flex justify-content-center ">
                  <div className="headerBtn1">
                    <a
                      href="https://discord.gg/STPtXjgYyA"
                      className="text-center"
                    >
                      Join Discord
                    </a>
                  </div>
                  {user?.authToken ? (
                    <div onClick={handleLogOut} className="headerBtn2">
                      <div className="text-center">Log Out</div>
                    </div>
                  ) : (
                    <div onClick={handleLoginShow} className="headerBtn2">
                      <div className="text-center">Log In</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>
          <div className="mobile-footer res">
            <Container fluid>
              <Row>
                <Col lg={12} md={12} xs={12}>
                  <div className="d-flex flex-row justify-content-end">
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
            </Container>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileModal;
