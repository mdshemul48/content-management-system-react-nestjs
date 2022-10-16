import React from "react";
import { NavDropdown } from "react-bootstrap";

const partnerFTPLinks = () => (
  <NavDropdown title="Partner FTP" id="navbarScrollingDropdown" className="text-uppercase text-dark">
    <NavDropdown.Item className="text-uppercase" href="http://ftp4.circleftp.net">
      OLD FTP
    </NavDropdown.Item>
    <NavDropdown.Item className="text-uppercase" href="http://ftp4.circleftp.net">
      {" "}
      Circle Index
    </NavDropdown.Item>
  </NavDropdown>
);

export default partnerFTPLinks;
