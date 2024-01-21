import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import pm from "../../../images/pm.png";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import C from '../../../images/skills/c.svg'
import Cpp from '../../../images/skills/cplusplus.svg'
import Html from '../../../images/skills/html.svg'
import css from '../../../images/skills/css.svg'
import  js from '../../../images/skills/javascript.svg'
import ts from '../../../images/skills/typescript.svg'
import java from '../../../images/skills/java.svg'
import tailwind from '../../../images/skills/tailwind.svg'
import react from '../../../images/skills/react.svg'
import next from '../../../images/skills/nextJS.svg'
import node from '../../../images/skills/nodejs.svg'
import mongodb from '../../../images/skills/mongoDB.svg'  

export default function Toolkit() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Technical Skills</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <img src={C} alt="" style={{ width: "65%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>C</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={Cpp} alt="" style={{ width: "65%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>C++</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={Html} alt="" style={{ width: "65%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>HTML</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={css} alt="" style={{ width: "65%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>CSS</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={tailwind} alt="" style={{ width: "65%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>Tailwind</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={js} alt="" style={{ width: "65%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>JavaScript</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={ts} alt="" style={{ width: "65%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>TypeScript</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={react} alt="" style={{ width: "65%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>React</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={next} alt="" style={{ width: "65%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>Next</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={node} alt="" style={{ width: "65%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>Node</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={mongodb} alt="" style={{ width: "45%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>MongoDB</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={pm} alt="" style={{ width: "65%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>PostMan</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={git} alt="" style={{ width: "65%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>Git</h4>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <img src={github} alt="" style={{ width: "65%", height: "5%" }} /> <br />  
            <h4 style={{marginTop:"15px"}}>Github</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
