import {
  Parallax,
} from "react-scroll-parallax";


const Section = (props) => {
  return (
    <section
      className="section center-content background"
      style={{ backgroundImage: `url(/images/${props.index}.png)` }}
      ref={props.registerSection(props.index)}
    >
      <Parallax speed={25}>
        <article className="card">
          <h1>Header {props.index}</h1>
          <h3>Sub Header {props.index}</h3>
          <p>
            Proident voluptate ex ut minim non. Fugiat esse deserunt sint
            deserunt enim sint occaecat.
          </p>
          <button>Learn More</button>
        </article>
      </Parallax>
    </section>
  );
};

export default Section