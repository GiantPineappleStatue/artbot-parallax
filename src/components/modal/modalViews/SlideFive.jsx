import '../modal.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SlideFive({ handleClose, show }) {
  return (
    <>
      <Offcanvas
        className="modal"
        show={show}
        placement="end"
        onHide={handleClose}
      >
        <Offcanvas.Header>
          <div className="headerLogoWrapper">
            <p className="text-center">Ways to get involved</p>
          </div>
          <span onClick={handleClose}>
            {' '}
            <i className="fa fa-close"></i>
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="modal-list">
            <li>Backers: 50%</li>
            <li>Producer tier backers: 20% (I’m debating this as an option)</li>
            <li>Cast and crew: 30%</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SlideFive;
