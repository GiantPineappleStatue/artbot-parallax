import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from 'react-scroll-parallax';
import { useState, useEffect, useRef } from 'react';
import createScrollSnap from 'scroll-snap';
import Menu from '../components/Menu';
import Section from '../components/Section';
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
    if(tY > wH) {
      percentage = 100;
    } else {
      percentage = (tY / wH);
    }
    let offset = 75-(percentage * 25);
    if(offset < 50) {
      offset = 50;
    }
    if(offset > 75) {
      offset = 75;
    }
    document.querySelector('.sections').style.backgroundPositionY = offset + 'vh';
  }

  const parallaxTower = (ev) => {
    let target = ev.target;
    let pageScroll = target.scrollTop;
    let tower = document.querySelector('img.tower'); // Get tower image
    let sectionWrapper = document.querySelector('div.sectionwrapper'); // Get sectionwrapper

    let sectionScroll = pageScroll - sectionWrapper.offsetTop; // Get scroll position within sectionwrapper based on page scroll + sectionwrapper offset

    let towerHeight = tower.clientHeight;
    let wrapperHeight = sectionWrapper.clientHeight; // Get total height of sectionwrapper
    
    let scrollFactor = towerHeight / wrapperHeight; // 500 2000 -> 0,25 -> 4

    let scrollOffset = sectionScroll - (sectionScroll * scrollFactor);

    tower.style.top = `calc(30vh +  ${scrollOffset}px)`;

    console.table({
      sectionScroll: sectionScroll,
      fifth: towerHeight / 5,
      wrapperHeight: wrapperHeight,
      towerHeight: towerHeight,
      scrollFactor: scrollFactor,
      scrollOffset: scrollOffset,
      targeHegith: target.clientHeight
    })
  }

  const listenScrollEvent = (ev) => {
    parallaxMountains(ev);
    parallaxTower(ev);
  }

  return (
    <div className="appContainer" ref={setScrollContainer} onScroll={listenScrollEvent}>
      <Header />
      {scrollContainer && (
        <ParallaxProvider scrollContainer={scrollContainer}>
          <Menu currentSection={targetSection} setSection={setTargetSection} />
          <div className="sections">
            <Hero index={0} registerSection={registerSection} />
            <div className="sectionwrapper">
              <img className="tower" src="/images/tower.png" />
              <Section index={1} registerSection={registerSection} />
              <Section index={2} registerSection={registerSection} />
              <Section index={3} registerSection={registerSection} />
              <Section index={4} registerSection={registerSection} />
              <Section index={5} registerSection={registerSection} />
            </div>
          </div>
          <Footer />
        </ParallaxProvider>
      )}
    </div>
  );
};

export default Home;
