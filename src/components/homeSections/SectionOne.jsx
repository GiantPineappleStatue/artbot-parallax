import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import SlideOne from '../modal/modalViews/SlideOne';

const SectionOne = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section
      className="section center-content background"
      //style={{ backgroundImage: `url(/images/${props.index - 1}.png)` }}
      ref={props.registerSection(props.index)}
    >
      <SlideOne show={show} handleClose={handleClose} />
      <Parallax speed={25}>
        <article className="slidecard">
          <h1>Vote for your favorite movie idea</h1>
          <h3>(Poll, vote)</h3>
          <p>
            We’re starting off with 4 animated movie ideas. Vote for your
            favorite idea, and once we reach 1,500 votes, we will have selected
            our movie idea!
          </p>
          <button onClick={handleShow}>Learn More</button>
        </article>
      </Parallax>
    </section>
  );
};

export default SectionOne;
