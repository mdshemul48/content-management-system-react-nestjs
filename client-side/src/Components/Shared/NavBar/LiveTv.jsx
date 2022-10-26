import React from "react";
import { NavDropdown } from "react-bootstrap";

const LiveTv = () => (
  <NavDropdown title="Live TV" className="text-uppercase text-dark">
    <NavDropdown.Item className="text-uppercase" href="http://bciptv.net/">
      BCIPTV
    </NavDropdown.Item>
    <NavDropdown.Item className="text-uppercase" href="http://bdiptv.net/">
      {" "}
      BDIPTV
    </NavDropdown.Item>
    <NavDropdown.Item className="text-uppercase" href="https://jagobd.com/btvworld">
      {" "}
      Live -1
    </NavDropdown.Item>
  </NavDropdown>
);

export default LiveTv;
