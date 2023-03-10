import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import SlideOne from '../modal/modalViews/SlideOne';

const SectionOne = (props) => {
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
        <SlideOne show={show} handleClose={handleClose} />
        <article className="slidecard">
          <h1>Vote for your favorite movie idea</h1>
          <p>
            We’re starting off with 4 animated movie ideas. Vote for your
            favorite idea, and once we reach 1,500 votes, we will have selected
            our movie idea!
          </p>
          <button className="learn-btn" onClick={handleShow}>
            Learn More
          </button>
        </article>
      </section>
    </Parallax>
  );
};

export default SectionOne;
