import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import SlideFive from '../modal/modalViews/SlideFive';

const SectionFive = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section
      className="section center-content background"
      //style={{ backgroundImage: `url(/images/${props.index - 1}.png)` }}
      ref={props.registerSection(props.index)}
    >
      <SlideFive show={show} handleClose={handleClose} />
      <Parallax speed={25}>
        <article className="slidecard">
          <h1>Release movie and distribute royalties</h1>
          <p>
            We will hold a digital and in-person premiere, then release the
            movie to be rented and streamed on ArtBot.tv
          </p>
          <button className="learn-btn" onClick={handleShow}>
            Learn More
          </button>
        </article>
      </Parallax>
    </section>
  );
};

export default SectionFive;
