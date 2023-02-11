import './modal.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputForm from './test'

const Modal = ({ handleClose, show }) => {
    return (
        <>
            <Offcanvas className="modal" show={show} placement="end" onHide={handleClose}>
                <Offcanvas.Header>
                    <div className="headerLogoWrapper">
                        <p className="text-center"></p>
                    </div>
                    <span onClick={handleClose}> <i className="fa fa-close"></i></span>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   <InputForm />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Modal