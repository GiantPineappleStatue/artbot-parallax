import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import SlideTwo from '../modal/modalViews/SlideTwo';

const SectionTwo = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Parallax speed={25}>
      <section
        className="section center-content background"
        //style={{ backgroundImage: `url(/images/${props.index - 1}.png)` }}
        ref={props.registerSection(props.index)}
      >
        <SlideTwo show={show} handleClose={handleClose} />
        <article className="slidecard">
          <h1>Support the process</h1>

          <p>
            Help crowdfund the movie. Back the production at any level you feel
            comfortable. Different tiers have different benefits.
          </p>
          <button className="learn-btn" onClick={handleShow}>
            Learn More
          </button>
        </article>
      </section>
    </Parallax>
  );
};

export default SectionTwo;
