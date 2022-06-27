import React from "react";
import { Navbar, Container, Nav, NavDropdown, FormControl, Form, Button } from "react-bootstrap";

import logo from "../../../Assets/logo.jpg";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" height="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="m-auto">
          <Nav className="m-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="" className="fw-bold text-dark text-uppercase">
              Home
            </Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown" className="fw-bold text-dark text-uppercase">
              <NavDropdown.Item className="text-uppercase">English Movies</NavDropdown.Item>
              <NavDropdown.Item className="text-uppercase">Hindi Movies</NavDropdown.Item>
              <NavDropdown.Item className="text-uppercase">Tamil Movies</NavDropdown.Item>
              <NavDropdown.Item className="text-uppercase">Tamil Hindi Dubbed Movies</NavDropdown.Item>
              <NavDropdown.Item className="text-uppercase">English Hindi Dubbed</NavDropdown.Item>
              <NavDropdown.Item className="text-uppercase">Foreign Language Movies</NavDropdown.Item>
              <NavDropdown title="Animation Movies" className="submenu fw-normal ms-2 text-dark text-uppercase">
                <NavDropdown.Item className="text-uppercase">Animation Movies 2021</NavDropdown.Item>
                <NavDropdown.Item className="text-uppercase">Animation Movies 2022</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title="Partner FTP" id="navbarScrollingDropdown" className="text-uppercase fw-bold text-dark">
              <NavDropdown.Item className="text-uppercase">Index 1</NavDropdown.Item>
              <NavDropdown.Item className="text-uppercase">Index 1</NavDropdown.Item>
              <NavDropdown.Item className="text-uppercase">Index 1</NavDropdown.Item>
              <NavDropdown.Item className="text-uppercase">Tamil Hindi Dubbed Movies</NavDropdown.Item>
              <NavDropdown.Item className="text-uppercase">English Hindi Dubbed</NavDropdown.Item>
              <NavDropdown.Item className="text-uppercase"> Foreign Language Movies</NavDropdown.Item>
              <NavDropdown title="Animation Movies" className="text-uppercase submenu fw-normal ms-2 text-dark">
                <NavDropdown.Item className="text-uppercase">Animation Movies 2021</NavDropdown.Item>
                <NavDropdown.Item className="text-uppercase">Animation Movies 2022</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <Nav.Link href="" className="fw-bold text-dark text-uppercase">
              Live Tv
            </Nav.Link>
            <Nav.Link href="" className="fw-bold text-dark text-uppercase">
              Emby
            </Nav.Link>
            <Nav.Link href="" className="fw-bold text-dark text-uppercase">
              Download App
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
