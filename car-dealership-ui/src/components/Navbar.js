import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import logo from "../Assets/logo/dark-logo.png";

function NavBar({ Link }) {


  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href={Link}>
          <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100vh" }}
            navbarScroll
          >
            <Nav.Link id="home-link" href={Link}>
              <p>Home</p>
            </Nav.Link>
            <NavDropdown title="Service" id="navbarScrollingDropdown">
              <NavDropdown.Item href={Link}>Service01</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={Link}>Service02</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={Link}>Service03</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Product" id="navbarScrollingDropdown">
              <NavDropdown.Item href={Link}>Product01</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={Link}>Product02</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={Link}>Product03</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={Link}>Testimonial</Nav.Link>
          </Nav>

          <Button
          href={Link}
            variant="primary"
            style={{ padding: "8px 40px", backgroundColor: "#1A89EC" }}
          >
            Sign in
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
