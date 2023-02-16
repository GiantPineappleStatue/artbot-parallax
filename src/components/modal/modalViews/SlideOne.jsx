import '../modal.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SlideOne({ handleClose, show }) {
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
            <p className="text-center"></p>
          </div>
          <span onClick={handleClose}>
            {' '}
            <i className="fa fa-close"></i>
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>
              Extra -{' '}
              <a href="https://www.google.com/search?q=extra+benefits">
                Benefits
              </a>
            </li>
            <li>
              Assistant -{' '}
              <a href="https://www.google.com/search?q=assistant+benefits">
                Benefits
              </a>
            </li>
            <li>
              Gaffer -{' '}
              <a href="https://www.google.com/search?q=gaffer+benefits">
                Benefits
              </a>
            </li>
            <li>
              Stuntperson -{' '}
              <a href="https://www.google.com/search?q=stuntperson+benefits">
                Benefits
              </a>
            </li>
            <li>
              Producer -{' '}
              <a href="https://www.google.com/search?q=producer+benefits">
                Benefits
              </a>
            </li>
            <li>
              Executive -{' '}
              <a href="https://www.google.com/search?q=executive+benefits">
                Benefits
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SlideOne;
