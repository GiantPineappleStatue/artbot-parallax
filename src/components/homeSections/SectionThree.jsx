import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import SlideThree from '../modal/modalViews/SlideThree';

const SectionThree = (props) => {
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
        <SlideThree show={show} handleClose={handleClose} />
        <article className="slidecard">
          <h1>Collaborate with the community</h1>
          <p>
            Vote on every step of the movie making process. Vote on script ideas
            or join the writing room and help write the script. Help create
            concept art to show your own vision for the movie. You can create
            from your own hand or use Midjourney to create AI concept art.
          </p>
          <button className="learn-btn" onClick={handleShow}>
            Learn More
          </button>
        </article>
      </section>
    </Parallax>
  );
};

export default SectionThree;
