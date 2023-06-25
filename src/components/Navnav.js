import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Home.css";

const Navnav = () => {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        style={{
          maxHeight: "50px",
          position: "fixed",
          top: "0px",
          left: "0",
          zIndex: "3",
          width: "100%",
        }}
      >
        <Container>
          <Navbar.Brand className=" fw-bold" style={{ color: "#dc3545" }}>
            Superma
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 navnav"
              style={{ maxHeight: "100px", marginRight: "20px" }}
              navbarScroll
            >
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="#">Pages</Nav.Link>
              <Nav.Link href="#">Portfolio</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Shop</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navnav;
