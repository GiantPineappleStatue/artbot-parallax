import './home.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../assets/img.jpeg';
import img2 from '../../assets/tree2.jpg';
import img3 from '../../assets/tree3.jpg';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import Ratio from 'react-bootstrap/Ratio';
import 'react-multi-carousel/lib/styles.css';

function HomeSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="hero">
      <div className="homeSectionWrapper">
        <br />
        <br />
        <Container>
          <Row>
            <Col lg={12} md={12} xs={12}>
              <div className="homeSectionIntro">
                <p className="homeIntroHead">
                  Revolutionizing video & audio crowdfunding with royalty pool
                  NFTs
                </p>
                <p className="homeIntroDesc">
                  Redefining the creator economy with royalty crowdfunding
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="homeCarouselWrapper">
          <Carousel responsive={responsive}>
            <div>
              <Card className="customCard">
                <Ratio aspectRatio="16x9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/__jYHX5CGic?controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </Ratio>
                {/*<Card.Img className="customCardImg" variant="top" src={img1} />*/}
                <Card.Body>
                  <Card.Title className="customCardTitle">
                    Birth of ArtBot
                  </Card.Title>
                  <Card.Text className="customCardDesc">
                    Io Travels Time And Space To Save Great Works Of Art.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="customCard">
                <Ratio aspectRatio="16x9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/P4KLh3kpH3A?controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </Ratio>
                {/* <Card.Img className="customCardImg" variant="top" src={img2} /> */}
                <Card.Body>
                  <Card.Title className="customCardTitle">
                    Birth of ArtBot
                  </Card.Title>
                  <Card.Text className="customCardDesc">
                    Io Travels Time And Space To Save Great Works Of Art.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="customCard">
                <Ratio aspectRatio="16x9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/t1yJSKgJnyo?controls=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </Ratio>
                {/* <Card.Img className="customCardImg" variant="top" src={img3} /> */}
                <Card.Body>
                  <Card.Title className="customCardTitle">
                    Birth of ArtBot
                  </Card.Title>
                  <Card.Text className="customCardDesc">
                    Io Travels Time And Space To Save Great Works Of Art.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
