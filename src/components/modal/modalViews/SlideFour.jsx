import '../modal.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ListGroup } from 'react-bootstrap';

function SlideFour({ handleClose, show }) {
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
            <p className="text-center">
              We can use AI to help enable the animation process, starting with
              key frames
            </p>
          </div>
          <span onClick={handleClose}>
            {' '}
            <i className="fa fa-close"></i>
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>
              Preparation:
              <ul>
                <li>
                  Gather the necessary assets, including character designs,
                  background designs, and storyboards
                </li>
                <li>
                  Ensure all assets are properly formatted for use with the AI
                  tools
                </li>
              </ul>
            </li>
            <li>
              Key Frame Generation:
              <ul>
                <li>
                  Use AI-powered key frame generation software to automatically
                  generate rough key frames based on the storyboards and assets
                </li>
                <li>
                  Review and edit the AI-generated key frames to ensure they
                  meet the desired quality and style
                </li>
              </ul>
            </li>
            <li>
              Refinement:
              <ul>
                <li>
                  Use traditional animation techniques to refine and polish the
                  AI-generated key frames
                </li>
                <li>
                  Incorporate any additional details, such as facial
                  expressions, body language, and camera movements
                </li>
              </ul>
            </li>
            <li>
              Final Preparation:
              <ul>
                <li>
                  Integrate the final key frames into the animation pipeline
                </li>
                <li>
                  Conduct final quality control checks to ensure the key frames
                  are ready for use in the animation process
                </li>
              </ul>
            </li>
            <li>
              Animation process:
              <ul>
                <li>
                  Use animators and AI to fill in the frames in between key
                  frames
                </li>
                <li>
                  Begin to incorporate voice acting, score, and sound effects
                  into the animation
                </li>
                <li>
                  Review and make changes to the animation and sound design as
                  necessary
                </li>
              </ul>
            </li>
            <li>
              Continuous marketing and community building:
              <ul>
                <li>
                  We ask everyone to be continuous ambassadors of the project.
                  Invite others to join the community, and help spread the word
                  of our movie!
                </li>
              </ul>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SlideFour;
