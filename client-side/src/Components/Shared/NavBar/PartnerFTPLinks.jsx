import React from "react";
import { NavDropdown } from "react-bootstrap";

const partnerFTPLinks = () => (
  <NavDropdown title="Partner FTP" id="navbarScrollingDropdown" className="text-uppercase text-dark">
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
);

export default partnerFTPLinks;
