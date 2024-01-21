import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";
import MainAchievments from "../../components/achievement/mainAchievments";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}  
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Aryan Pundir </strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  <li className="socialicons">
                    <a
                      href="https://github.com/Pundiraryan"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/aryan-pundir-88474b234/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="mailto:aryanpundir0606@gmail.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaGoogle />
                    </a>
                  </li>
                  <li className="socialicons">
                  <div className="blog--viewAll">
                      <button className="btn btn-primary" style={{fontSize:'20  px',borderRadius:'20px',paddingLeft:'40px',paddingRight:'40px',paddingTop:'10px',paddingBottom:'10px'}}>
                      <a href="https://drive.google.com/file/d/1ps0nls3jiwFYHfZ8TeZATJA40cfjaYOT/view?usp=drive_link" style={{color: "#fbd9ad", textDecoration:'none' }}>Resume</a>
                      </button>
                  </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img
                      src="https://media.licdn.com/dms/image/D4D03AQF8YOFX-8bbHQ/profile-displayphoto-shrink_400_400/0/1687838262363?e=1709164800&v=beta&t=gMEfwxEAfQAW3V9W18vqWqYW9g9wOi4Kg22S3CLBVKc"
                      alt="home pic"
                      className="img-fluid"
                    />
                  </Fade>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <MainAchievments />
      <Projects />
      <Contactus />
    </section>
  );
}
