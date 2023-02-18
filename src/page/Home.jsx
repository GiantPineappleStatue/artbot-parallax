import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from 'react-scroll-parallax';
import { useState, useEffect, useRef } from 'react';
import createScrollSnap from 'scroll-snap';
import Menu from '../components/Menu';
// import Section from '../components/Section';
import SectionOne from '../components/homeSections/SectionOne';
import SectionTwo from '../components/homeSections/SectionTwo';
import SectionThree from '../components/homeSections/SectionThree';
import SectionFour from '../components/homeSections/SectionFour';
import SectionFive from '../components/homeSections/SectionFive';
import Hero from '../components/Hero';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [targetSection, setTargetSection] = useState(0);
  const [showRadio, setShowRadio] = useState(true);

  const checkRef = useRef(() => {
    return { targetSection };
  });
  const [scrollContainer, setScrollContainer] = useState(null);

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
        { root: null, rootMargin: '0px', threshold: 0.5 }
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
        behavior: 'smooth',
      });

      return () => {
        scrollContainer.scrollBy({
          top: 0,
          behavior: 'smooth',
        });
      };
    }
  }, [targetSection, scrollContainer]);

  useEffect(() => {
    if (targetSection === currentSection && scrollContainer) {
      const { unbind } = createScrollSnap(
        scrollContainer,
        {
          snapDestinationY: '100%',
          duration: 250,
          threshold: 0.1,
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

  const parallaxMountains = (ev) => {
    //let wH = window.innerHeight;
    let target = ev.target;
    let wH = target.scrollHeight;
    let tY = target.scrollTop;

    let percentage = 0;
    if (tY > wH) {
      percentage = 100;
    } else {
      percentage = tY / wH;
    }
    let offset = 75 - percentage * 25;
    if (offset < 50) {
      offset = 50;
    }
    if (offset > 75) {
      offset = 75;
    }
    document.querySelector('.sections').style.backgroundPositionY =
      offset + 'vh';
  };

  const parallaxTower = (ev) => {
    let target = ev.target;
    // # pixels scrolled down pageScroll
    let pageScroll = target.scrollTop;
    let tower = document.querySelector('img.tower');
    let sectionWrapper = document.querySelector('div.sectionwrapper');

    // pageScroll - sectionWrapper offset (so 0 until section wrapper is above top of screen)
    let sectionScroll = pageScroll - sectionWrapper.offsetTop;

    let towerHeight = tower.clientHeight;
    // sectionWrapper height
    let wrapperHeight = sectionWrapper.clientHeight;

    // <relation of wrapperHeight and towerHeight>
    let scrollFactor = towerHeight / wrapperHeight;

    // how far down (vs top of sectionWrapper) tower needs to be, likely 'sectionScroll + <something> * scrollFactor'
    let scrollOffset = sectionScroll - sectionScroll * scrollFactor;

    // Get the height of the viewport
    let viewportHeight = window.innerHeight;
    // Calculate the top position based on the viewport height and the scroll offset
    let top = viewportHeight * 0.35 + scrollOffset;

    // Set the top position of the tower using the calculated value
    tower.style.top = `${top}px`;

    // console.table({
    //   sectionScroll: sectionScroll,
    //   fifth: towerHeight / 5,
    //   wrapperHeight: wrapperHeight,
    //   towerHeight: towerHeight,
    //   scrollFactor: scrollFactor,
    //   scrollOffset: scrollOffset,
    //   targetHeight: target.clientHeight,
    //   viewportHeight: viewportHeight,
    //   top: top,
    //   target: target,
    // });
  };

  const listenScrollEvent = (ev) => {
    parallaxMountains(ev);
    parallaxTower(ev);
  };

  return (
    <>
      <div
        className="appContainer"
        ref={setScrollContainer}
        onScroll={listenScrollEvent}
      >
        {scrollContainer && (
          <ParallaxProvider scrollContainer={scrollContainer}>
            <Header />
            {currentSection > 0 ? (
              <Menu
                currentSection={targetSection}
                setSection={setTargetSection}
              />
            ) : null}
            <button className="mobile-discord-btn res">
              Join Discord <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="sections">
              <div className="sectionwrapper">
                <Hero id="home" index={0} registerSection={registerSection} />
                <img
                  className="tower"
                  alt="artbot tower"
                  src="/images/tower.png"
                />
                <SectionOne index={1} registerSection={registerSection} />
                <SectionTwo index={2} registerSection={registerSection} />
                <SectionThree index={3} registerSection={registerSection} />
                <SectionFour index={4} registerSection={registerSection} />
                <SectionFive index={5} registerSection={registerSection} />
              </div>
            </div>
            <Footer />
          </ParallaxProvider>
        )}
      </div>
    </>
  );
};

export default Home;
