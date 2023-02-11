import {
  Parallax,
} from "react-scroll-parallax";
import { useState } from 'react'
import Modal from './modal/modal'

const Section = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section
      className="section center-content background"
      style={{ backgroundImage: `url(/images/${props.index -1 }.png)` }}
      ref={props.registerSection(props.index)}
    >
                  <Modal
                show={show}
                handleClose={handleClose}
            />
      <Parallax speed={25}>
        <article className="slidecard">
          <h1>Header {props.index}</h1>
          <h3>Sub Header {props.index}</h3>
          <p>
            Proident voluptate ex ut minim non. Fugiat esse deserunt sint
            deserunt enim sint occaecat.
          </p>
          <button onClick={handleShow}>Learn More</button>
        </article>
      </Parallax>
    </section>
  );
};

export default Section