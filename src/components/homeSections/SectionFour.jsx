import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import SlideFour from '../modal/modalViews/SlideFour';

const SectionFour = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section
      className="section center-content background"
      //style={{ backgroundImage: `url(/images/${props.index - 1}.png)` }}
      ref={props.registerSection(props.index)}
    >
      <SlideFour show={show} handleClose={handleClose} />
      <Parallax speed={25}>
        <article className="slidecard">
          <h1>Let’s make our movie</h1>
          <p>
            Production begins! Give feedback to the voice actors, animators, and
            help spread the word.
          </p>
          <button className="learn-btn" onClick={handleShow}>
            Learn More
          </button>
        </article>
      </Parallax>
    </section>
  );
};

export default SectionFour;
