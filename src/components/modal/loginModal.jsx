import './modal.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import LoginForm from './loginModalViews/loginForm'
import SignUpForm from './loginModalViews/signupForm'
import RecoverForm from './loginModalViews/recoverForm';
import { useState } from 'react';

const LoginModal = ({ handleClose, show }) => {
    const [active, setActive] = useState('login')

    const closeModal = () => {
        handleClose();
        setTimeout(() => {
            setActive('login')

          }, "500")
    }

    const handleView = (view) => {
        setActive(view)
    }

    return (
        <>
            <Offcanvas className="modal" show={show} placement="end" onHide={handleClose}>
                <Offcanvas.Header>
                    <div className="headerLogoWrapper">
                        <p className="text-center"></p>
                    </div>
                    <span onClick={() => closeModal()}> <i className="fa fa-close"></i></span>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   {active === 'login' ? <LoginForm toSignup={() => handleView('signup')} toRecover={() => handleView('recover')}/> :  active === 'signup' ? <SignUpForm backToLogin={() => handleView('login')}/> : <RecoverForm backToLogin={() => handleView('login')}/>}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default LoginModal