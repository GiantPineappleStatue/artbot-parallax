import '../modal.css';
import { Button, Offcanvas, ListGroup } from 'react-bootstrap';

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
            <p className="text-center">Projects</p>
          </div>
          <span onClick={handleClose}>
            {' '}
            <i className="fa fa-close"></i>
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="modal-list">
            <li>
              The Birth of IO the Artbot
              <ul>
                <li>
                  A sentient robot, born of two junkyard robots, travels to
                  earth after being inspired by movies, and helps a girl save
                  her apartment building by putting on a great show.
                </li>
              </ul>
            </li>
            <li>
              Ninja Cats
              <ul>
                <li>
                  Two lifelong friends and apprentice ninja cats take different
                  paths in life after the brutal massacre of their sensei and
                  dojo.
                </li>
              </ul>
            </li>
            <li>
              The Last Humans
              <ul>
                <li>
                  In a post-apocalyptic world that has been overtaken by nature,
                  raiders attack a village, and a brother escapes with his
                  sister as they begin a mission to find a mythical city.
                </li>
              </ul>
            </li>
            <li>
              Saving Ai
              <ul>
                <li>
                  The world has adopted the metaverse in every aspect of life,
                  and when news leaks that the first true AI is about to be
                  created, the race is on to control it, destroy it, or rescue
                  it.
                </li>
              </ul>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SlideOne;
