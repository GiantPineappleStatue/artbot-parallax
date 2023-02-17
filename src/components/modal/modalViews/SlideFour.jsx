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
              <strong>Concept Development:</strong>
            </li>
            <ul>
              <li>Develop the premise and theme of top-voted movie idea</li>
              <li>Define the target audience</li>
            </ul>
            <li>
              <strong>Script Writing:</strong>
            </li>
            <ul>
              <li>Write and vote on script treatments</li>
              <li>Write and vote on spec scripts</li>
              <li>Write and vote on the final script</li>
              <li>Revise the script as needed</li>
            </ul>
            <li>
              <strong>Storyboarding:</strong>
            </li>
            <ul>
              <li>
                Create and vote on the visual representations of the script
              </li>
              <li>Decide on camera angles, shots, and transitions</li>
            </ul>
            <li>
              <strong>Character Design:</strong>
            </li>
            <ul>
              <li>
                Create and vote on the design of the characters and their
                personalities
              </li>
              <li>
                Decide on their costumes, hairstyles, and other physical
                attributes
              </li>
            </ul>
            <li>
              <strong>Background Design:</strong>
            </li>
            <ul>
              <li>
                Create and vote on the design of the environments and settings
                in which the characters will live and move
              </li>
              <li>Decide on the color palette and visual style of the film</li>
            </ul>
            <li>
              <strong>Sound Design:</strong>
            </li>
            <ul>
              <li>Vote on sound director(s) and/or composer(s)</li>
              <li>Plan the sound effects and music</li>
              <li>Create a sound effects library</li>
              <li>Create a musical score</li>
            </ul>
            <li>
              <strong>Voice Over Casting:</strong>
            </li>
            <ul>
              <li>Vote on the voice actors for each character</li>
              <li>Determine the vocal range and tone for each character</li>
            </ul>
            <li>
              <strong>Animation:</strong>
            </li>
            <ul>
              <li>
                Vote on animators and technicians to bring the story to life
              </li>
              <li>Schedule the animation and post-production phases</li>
            </ul>
            <li>
              <strong>Budgeting and Scheduling:</strong>
            </li>
            <ul>
              <li>Determine the final budget for the film</li>
              <li>Create a detailed production schedule</li>
              <li>Allocate resources and personnel as needed</li>
            </ul>
            <li>
              <strong>Final Preparation:</strong>
            </li>
            <ul>
              <li>Assemble the final storyboard</li>
              <li>Review and refine the character designs</li>
              <li>Review and refine the background designs</li>
              <li>Review and refine the sound design</li>
              <li>Confirm the budget and production schedule</li>
            </ul>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SlideFour;
