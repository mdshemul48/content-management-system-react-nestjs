import React from "react";
import { Navbar, Container, Nav, FormControl, Form, Button } from "react-bootstrap";

import logo from "../../../Assets/logo.jpg";
import MenuCategories from "./MenuCategories";
import PartnerFTPLinks from "./PartnerFTPLinks";

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

            <MenuCategories />

            <PartnerFTPLinks />

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
