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
            <p className="text-center"></p>
          </div>
          <span onClick={handleClose}>
            {' '}
            <i className="fa fa-close"></i>
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup
            variant="flush"
            style={{ backgroundColor: 'transparent', color: 'white' }}
          >
            <ListGroup.Item>
              The Birth of IO the Artbot - A sentient robot, born of two
              junkyard robots, travels to earth after being inspired by movies,
              and helps a girl save her apartment building by putting on a great
              show.
            </ListGroup.Item>
            <ListGroup.Item>
              Ninja Cats - Two lifelong friends and apprentice ninja cats take
              different paths in life after the brutal massacre of their sensei
              and dojo.
            </ListGroup.Item>
            <ListGroup.Item>
              The Last Humans - In a post-apocalyptic world that has been
              overtaken by nature, raiders attack a village, and a brother
              escapes with his sister as they begin a mission to find a mythical
              city.
            </ListGroup.Item>
            <ListGroup.Item>
              Saving Ai - The world has adopted the metaverse in every aspect of
              life, and when news leaks that the first true AI is about to be
              created, the race is on to control it, destroy it, or rescue it.
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SlideOne;
