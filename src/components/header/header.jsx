import './header.css'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../sidebar/sidebar';
import logo from '../../assets/ARTBOT.png'
import { useNavigate } from 'react-router-dom';
import LoginModal from '../modal/loginModal'

function Header() {
    const history = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showLogin, setShowLogin] = useState(false);
    const handleLoginClose = () => setShowLogin(false);
    const handleLoginShow = () => setShowLogin(true);

    return (
        <>
            <Sidebar
                show={show}
                handleClose={handleClose}
            />
            <LoginModal handleClose={handleLoginClose} show={showLogin}/>
            <div className="headerWrapper" id="header">
                <Container fluid>
                    <Row className="align-items-center">
                        <Col lg={3} md={3} xs={3}>
                            <div className="headerBarWrapper" onClick={handleShow}>
                                <i className="fa-solid fa-bars headerBarsIcon"></i>
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={6}>
                            <div className="headerLogoWrapper"
                                onClick={() => history.push('/')}
                            >
                                <p className="text-center">
                                    <img src={logo} alt="" className="headerLogo" />
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={3} xs={3}>
                            <div className="pc "
                                style={{ paddingRight: '10px' }} >
                                <div className='d-flex justify-content-end align-items-center'>
                                    <div className="headerButtonWrapper d-flex justify-content-center ">
                                        <div className="headerBtn1">
                                            <a className="text-center">Get Started</a>
                                        </div>
                                        <div onClick={handleLoginShow} className="headerBtn2">
                                            <a className="text-center">Log In</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="res">
                                <div className="headerContactWrapper">
                                    <i className="fa-solid fa-user headerContactIcon"></i>
                                </div>
                            </div> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Header