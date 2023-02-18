import './modal.css';
import '../sidebar/sidebar.css';
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
            <a href="https://discord.gg/STPtXjgYyA" className="text-center">
              <button className="sidebar__btns">Join Discord</button>
            </a>

            {user?.authToken ? (
              <button onClick={handleLogOut} className="sidebar__btns">
                Log Out
              </button>
            ) : (
              <button onClick={handleLoginShow} className="sidebar__btns">
                Log In
              </button>
            )}
          </Col>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MobileModal;
