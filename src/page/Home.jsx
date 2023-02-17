import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from 'react-scroll-parallax';
import { useState, useEffect, useRef } from 'react';
import createScrollSnap from 'scroll-snap';
import Menu from '../components/Menu';
import Section from '../components/Section';
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
    let pageScroll = target.scrollTop;

    let tower = document.querySelector('img.tower'); // Get tower image
    let sectionWrapper = document.querySelector('div.sectionwrapper'); // Get sectionwrapper
    let sectionScroll = pageScroll - sectionWrapper.offsetTop; // Get scroll position within sectionwrapper based on page scroll + sectionwrapper offset
    let wrapperLength = sectionWrapper.clientHeight; // Get total height of sectionwrapper

    let towerHeight = tower.clientHeight + target.clientHeight * 0.25; // Tower height + 25vh

    let scrollPercentage = sectionScroll / wrapperLength; // Get percentage scrolled within section

    // Make sure both of these are > 0
    if (sectionScroll < 0) {
      sectionScroll = 0;
    }
    if (scrollPercentage < 0) {
      scrollPercentage = 0;
    }

    // Get offset in pixels based on tower height + position in sectionwrapper
    let scrollOffset = towerHeight * scrollPercentage;

    // Set offset as 25vh + calculated pixels
    let offset = `calc(25vh)`;
    if (scrollPercentage > 0) {
      offset = `calc(25vh + ${scrollOffset.toFixed(0)}px)`;
    }
    tower.style.top = offset;
  };

  const listenScrollEvent = (ev) => {
    parallaxMountains(ev);
    parallaxTower(ev);
  };

  return (
    <div
      className="appContainer"
      ref={setScrollContainer}
      onScroll={listenScrollEvent}
    >
      <Header />
      {scrollContainer && (
        <ParallaxProvider scrollContainer={scrollContainer}>
          <Menu currentSection={targetSection} setSection={setTargetSection} />
          <div className="sections">
            <Hero index={0} registerSection={registerSection} />
            <div className="sectionwrapper">
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
  );
};

export default Home;
