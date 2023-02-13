import './modal.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LoginForm from './loginModalViews/loginForm';
import SignUpForm from './loginModalViews/signupForm';
import RecoverForm from './loginModalViews/recoverForm';
import { useState } from 'react';

const LoginModal = ({ handleClose, show }) => {
  const [active, setActive] = useState('login');

  return (
    <>
      <Offcanvas
        className="modal"
        show={show}
        placement="end"
        onHide={handleClose}
        onExited={() => setActive('login')}
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
          {active === 'login' ? (
            <LoginForm
              toSignup={() => setActive('signup')}
              toRecover={() => setActive('recover')}
            />
          ) : active === 'signup' ? (
            <SignUpForm backToLogin={() => setActive('login')} />
          ) : (
            <RecoverForm backToLogin={() => setActive('login')} />
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default LoginModal;
