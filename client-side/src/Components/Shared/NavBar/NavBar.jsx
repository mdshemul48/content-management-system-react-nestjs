import React, { useState } from "react";
import { Navbar, Container, Nav, FormControl, Form, Button } from "react-bootstrap";
import { Link, useLocation, createSearchParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import logo from "../../../Assets/logo.jpg";
import AdminBar from "./AdminBar";
import MenuCategories from "./MenuCategories";
import PartnerFTPLinks from "./PartnerFTPLinks";

import styles from "./NabBar.module.css";

function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (event) => {
    setSearchText(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate({
      pathname: "search",
      search: createSearchParams({
        q: searchText,
      }).toString(),
    });
  };

  return (
    pathname !== "/login" && (
      <Navbar bg="black" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            {/* <img src={logo} alt="Logo" height="60px" /> */}
            <span className="fw-bolder fs-3">Circle Network</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="m-auto">
            <Nav className=" my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link as={Link} to="/" className="text-white fw-normal text-uppercase">
                Home
              </Nav.Link>

              <MenuCategories />

              <PartnerFTPLinks />

              <Nav.Link href="" className="text-white text-uppercase">
                Live Tv
              </Nav.Link>
              <Nav.Link href="" className="text-white text-uppercase">
                Emby
              </Nav.Link>
              <Nav.Link href="" className="text-white text-uppercase">
                Download App
              </Nav.Link>
            </Nav>
            <Form className="d-flex ms-auto" onSubmit={onSubmitHandler}>
              <FormControl
                type="search"
                placeholder="Search"
                className={`me-2 ${styles.searchBox}`}
                aria-label="Search"
                name="searchBox"
                onChange={onChangeHandler}
              />
              <Button variant="outline-danger" type="submit" className="rounded-circle py-2">
                <FaSearch />
              </Button>
            </Form>
            <AdminBar />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  );
}

export default NavBar;
