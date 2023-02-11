import HomeSection from "./home/home"  
  const Hero = (props) => {
    return (
      <section
        className="section hero-content"
        style={{ backgroundImage: `url(/images/${props.index -1 }.png)` }}
        ref={props.registerSection(props.index)}
      >
        <HomeSection />
      </section>
    );
  };
  
  export default Hero