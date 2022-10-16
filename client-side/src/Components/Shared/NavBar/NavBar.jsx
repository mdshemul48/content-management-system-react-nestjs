import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import logo from "../../../Assets/logo.png";
import AdminBar from "./AdminBar";
import MenuCategories from "./MenuCategories";
import PartnerFTPLinks from "./PartnerFTPLinks";
import SearchBox from "./SearchBox/SearchBox";
import DirectLink from "./DirectLink";
import ArrowButton from "../ArrowButton/ArrowButton";

function NavBar() {
  const { pathname } = useLocation();

  return (
    pathname !== "/login" && (
      <Navbar bg="black" variant="dark" expand="lg">
        <Container fluid style={{ paddingInline: "73px" }}>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" height="60px" className="rounded" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="m-auto">
            <Nav className="mx-auto my-lg-0">
              <Nav.Link as={Link} to="/" className="text-white fw-normal text-uppercase">
                Home
              </Nav.Link>

              <MenuCategories />
              <DirectLink />
              <PartnerFTPLinks />

              <Nav.Link href="http://emby.circleftp.net/" className="text-white text-uppercase" as={ArrowButton}>
                Emby
              </Nav.Link>
              <Nav.Link
                href="http://15.1.4.7/FILE/circleApp/circleapp.apk"
                className="text-white text-uppercase"
                as={ArrowButton}
              >
                Download App
              </Nav.Link>
            </Nav>
            <SearchBox />
            <AdminBar />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  );
}

export default NavBar;
