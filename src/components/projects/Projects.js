import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";  
import amb from '../../images/projects/ambulance.gif'
import pool from '../../images/projects/PoolKaro.gif'
import park from '../../images/projects/parkitright.png'
import { FaCode,FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading" style={{alignItems:'center', alignContent:'center'}}>Projects</h1>
              </Zoom>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                > 
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Ambulance For You
                    </h5>
                    <img src={amb} alt={amb} />
                    <div className="project--showcaseBtn">
                    <a
                        href={
                          "https://ambulance-for-you-frontend.vercel.app/"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                            <FaPlay
                                id={"play"}
                                className={"icon"}
                                aria-label='Demo'
                            />
                        </a>
                      <a
                        href={
                          "https://github.com/Pundiraryan/AmbulanceForYou-backend"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Welcome to our premier website, your one-stop solution for superior ambulance management and bookings. Experience seamless control over ambulance reservations, real-time tracking, and swift medical aid, all at your fingertips. Count on us for unrivaled emergency healthcare management, setting the utmost standards for your safety and well-being.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    MongoDb, Express, React, Node
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      PoolKaro
                    </h5>
                    <img src={pool} alt={pool} />
                    <div className="project--showcaseBtn">
                    <a
                        href={
                          "https://github.com/Pundiraryan/PoolKaro"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                            <FaPlay
                                id={"play"}
                                className={"icon"}
                                aria-label='Demo'
                            />
                        </a>
                      <a
                        href={
                          "https://github.com/Pundiraryan/PoolKaro"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                     PoolKaro is a web app that facilities residents of Kurukshetra with carpooling service. The Users can select a pool of their convenience saving up their effort and money meanwhile keeping the balance of ecosystem stable by reducing Pollution
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    MongoDb, Express, React, Node
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      ParkItRight
                    </h5>
                    <img src={park} alt={park} />
                    <div className="project--showcaseBtn">
                    <a
                        href={
                          "https://github.com/Pundiraryan/ParkItRight-Main"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                            <FaPlay
                                id={"play"}
                                className={"icon"}
                                aria-label='Demo'
                            />
                        </a>
                      <a
                        href={
                          "https://github.com/Pundiraryan/ParkItRight-Main"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                     ParkItRight provides platform to the user to find, book and pre-book best parking spots.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    MongoDb, Express, React, Node, TensorFlow
                  </div>
                </div>
              </Fade>
            </Col>
           
          </Row>    
          {/* <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div> */}
        </Container>
      </Container>
    </div>
  );
}
