import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
  
} from "react-scroll-parallax";
import { useState, useEffect, useRef } from "react";
import createScrollSnap from "scroll-snap";
import Menu from "../components/Menu"
import Section from "../components/Section"

function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [targetSection, setTargetSection] = useState(0);

  const checkRef = useRef(() => {
    return { targetSection };
  });
  const [scrollContainer, setScrollContainer] = useState(
    null
  );

  const sectionsRef = useRef({});
  const observerRef = useRef(null);

  const registerSection = (index) => {
    return (element) => {
      if (element) {
        sectionsRef.current[index] = element;
      }
    };
  };

  useEffect(() => {
    if (observerRef.current === null && scrollContainer) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              const index = Object.values(sectionsRef.current).findIndex(
                (value) => value === entry.target
              );

              if (index !== undefined) {
                if (index === checkRef.current().targetSection) {
                  setCurrentSection(index);
                }
              }
            }
          });
        },
        { root: null, rootMargin: "0px", threshold: 0.5 }
      );

      for (const section of Object.values(sectionsRef.current)) {
        observerRef.current.observe(section);
      }
    }

    const element = sectionsRef.current[targetSection];

    checkRef.current = () => ({ targetSection });

    if (element && scrollContainer) {
      let sum = 0;
      for (let i = 0; i < targetSection; i++) {
        sum += sectionsRef.current[i].getBoundingClientRect().height;
      }

      scrollContainer.scrollTo({
        top: sum,
        behavior: "smooth",
      });

      return () => {
        scrollContainer.scrollBy({
          top: 0,
          behavior: "smooth",
        });
      };
    }
  }, [targetSection, scrollContainer]);

  useEffect(() => {
    if (targetSection === currentSection && scrollContainer) {
      const { unbind } = createScrollSnap(
        scrollContainer,
        {
          snapDestinationY: "100%",
          duration: 750,
          threshold: 0.01,
        },
        () => {
          const sections = Object.entries(sectionsRef.current);
          for (const [key, value] of sections) {
            const { top } = value.getBoundingClientRect();
            if (top >= 0 && top < 5) {
              setCurrentSection(Number(key));
              setTargetSection(Number(key));
            }
          }
        }
      );
      return () => {
        unbind();
      };
    }
  }, [targetSection, currentSection, scrollContainer]);

  return (
    <div className="App">
    <div className="container" ref={setScrollContainer}>
      {scrollContainer && (
        <ParallaxProvider scrollContainer={scrollContainer}>
          <ParallaxBanner className="mountains">
            <ParallaxBannerLayer image="/images/mid.svg" speed={20} />
          </ParallaxBanner>
          <Menu currentSection={targetSection} setSection={setTargetSection} />
          <div className="sections">
            <Section index={0} registerSection={registerSection} />
            <Section index={1} registerSection={registerSection} />
            <Section index={2} registerSection={registerSection} />
            <Section index={3} registerSection={registerSection} />
            <Section index={4} registerSection={registerSection} />
          </div>
        </ParallaxProvider>
      )}
    </div>
    </div>
  );
}


export default Home