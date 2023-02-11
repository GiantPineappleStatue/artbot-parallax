import './footer.css'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import accessbility from '../../assets/accessiility.png'
import en from '../../assets/en.png'
import instagram from '../../assets/instagram.png'
import ticktok from '../../assets/ticktok.png'
import twitter from '../../assets/twitter.png'

function Footer() {
    // const [scrollDir, setScrollDir] = useState("movie__vote1");
    const [scrollDir, setScrollDir] = useState(true);

    const scrollDown = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView()

        if (id === 'movie__vote1') {
            setTimeout(() => {
                setScrollDir(false)
            }, 500);
        } else {
            setTimeout(() => {
                setScrollDir(true)
            }, 500);
        }
    }


    return (
        <>
            <div className="footerWrapper">
                <Container fluid>
                    <Row>
                        <Col lg={4} md={4} xs={4}>
                            <div className="footerBtnWrapper1 d-flex justify-content-start">
                                <div className="footerIconWrapperL">
                                    <img src={accessbility} alt="" className="footerIcon" />
                                </div>
                                <div className="footerIconWrapperL">
                                    <img src={en} alt="" className="footerIcon" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={8} xs={8}>
                            <div className="footerBtnWrapper2 d-flex justify-content-end">
                                <div className="footerIconWrapperR">
                                    <img src={instagram} alt="" className="footerIcon" />
                                </div>
                                <div className="footerIconWrapperR">
                                    <img src={ticktok} alt="" className="footerIcon" />
                                </div>
                                <div className="footerIconWrapperR">
                                    <img src={twitter} alt="" className="footerIcon" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer