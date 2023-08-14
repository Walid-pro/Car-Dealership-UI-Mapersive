import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from 'react-bootstrap/Image';
import logo from "../Assets/dark-logo.png"

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
        <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100vh" }}
            navbarScroll
          >
            <Nav.Link id="home-link" href="#action1" style={{fontWeight: "bold", textShadow: " 0.5px 1px"}}>Home</Nav.Link>
            <NavDropdown title="Service" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#service01">Service01</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#service01">Service02</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#service01">Service03</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Product" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#Product01">Product01</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Product01">Product02</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Product01">Product03</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Testimonial</Nav.Link>
          </Nav>

            <Button variant="primary" style={{padding: "8px 40px", backgroundColor: "#1A89EC"}}>Sign in</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
