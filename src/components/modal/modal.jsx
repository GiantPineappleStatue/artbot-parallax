import './modal.css'
import Offcanvas from 'react-bootstrap/Offcanvas';

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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nobis quas exercitationem cumque consequuntur id earum qui libero molestiae laborum accusamus cupiditate ea ipsa minus quia odio facilis, voluptatum veniam! Rem optio eum excepturi asperiores in. Delectus, deleniti deserunt. Cupiditate assumenda ratione fuga dolores repudiandae numquam eaque odio quo dolorum.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Modal