import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  // use auth context
  const { user, displayName, logOut } = useAuth();

  // render html
  return (
    <>
      <Navbar
        style={{ padding: "10px" }}
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand> Nowhere Courier & Delivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/add-service">
              Add New Service
            </Nav.Link>
            <Nav.Link as={Link} to="/my-orders">
              My orders
            </Nav.Link>
            <Nav.Link as={Link} to="/all-orders">
              All orders
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>

          {/* Set user name if login */}
          {user.email && <Navbar.Text>Signed in as: {displayName}</Navbar.Text>}
          <Navbar.Text>
            {/* Show log in or log out button */}
            {user.email ? (
              <p className="loggedButton btn btn-danger" onClick={logOut}>
                Log Out
              </p>
            ) : (
              <Link to="/login">
                <p className="loggedButton btn btn-success">Log In</p>
              </Link>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
