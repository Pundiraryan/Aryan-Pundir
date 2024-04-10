import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import "../../style.css";
import { CgFileDocument } from "react-icons/cg";
export default function MyNav() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <div className="d-flex flex-row justify-content-between">
            <img src="https://res.cloudinary.com/dzycz1c4v/image/upload/v1712754384/uploads/mai7bvv6b0ntgvd8av9i.jpg" className="img-fluid logo" alt="brand" />
            <h5
              id="navhead"
              style={{
                marginLeft: "21px",
                paddingTop: "6px",
                color: "#fbd9ad",
              }}
            >
              Aryan Pundir
            </h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="navbarmain">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projectspage"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <div style={{marginTop:'14px'}}>
              <a href="https://drive.google.com/file/d/1ps0nls3jiwFYHfZ8TeZATJA40cfjaYOT/view?usp=drive_link" style={{color: "#fbd9ad", textDecoration:'none' }}>Resume</a>
              </div>
             
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/achievementpage"
                onClick={() => updateExpanded(false)}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Achievements
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blogs"
                onClick={() => updateExpanded(false)}
              >
                <FaBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>
{/* 
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/MD-MAFUJUL-HASAN/Personal-Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
