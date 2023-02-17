import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import SlideTwo from '../modal/modalViews/SlideTwo';

const SectionTwo = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section
      className="section center-content background"
      //style={{ backgroundImage: `url(/images/${props.index - 1}.png)` }}
      ref={props.registerSection(props.index)}
    >
      <SlideTwo show={show} handleClose={handleClose} />
      <Parallax speed={25}>
        <article className="slidecard">
          <h1>Support the process</h1>
          <h3>(Patron, Crowdfund) (Fund the movie)</h3>
          <p>
            Help crowdfund the movie. Back the production at any level you feel
            comfortable. Different tiers have different benefits.
          </p>
          <button onClick={handleShow}>Learn More</button>
        </article>
      </Parallax>
    </section>
  );
};

export default SectionTwo;
