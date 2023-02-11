import './sidebar.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/ARTBOT.png'

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
                    <span onClick={handleClose}> <i className="fa fa-close"></i></span>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <button className="sidebar__btns">Home</button>
                    <button className="sidebar__btns">Video</button>
                    <button className="sidebar__btns">Audio</button>
                    <button className="sidebar__btns">Crowdfunding</button>
                    <button className="sidebar__btns">About Us</button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar