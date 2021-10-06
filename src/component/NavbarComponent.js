import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const mystyle = {
    color: "#484848",
    textDecoration: "none",
  };
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="#dedfde" light expand="md">
        <NavbarBrand href="/home">
          <img src="../asset/logo.png" style={{ marginLeft: "1em" }} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className="m-5" to="/profile" style={mystyle}>
                  Profile
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="m-5" to="/contact" style={mystyle}>
                  Contact
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
