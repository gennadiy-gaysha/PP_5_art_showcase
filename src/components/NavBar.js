import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

import { useCurrentUser } from "../contexts/CurrentUserContext";

const NavBar = () => {
  const currentUser = useCurrentUser();

  const loggedInIcons = <>{currentUser?.username}</>;

  const loggedOutIcons = (
    <>
      <NavLink
        exact
        to="/registration"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        REGISTER
      </NavLink>
      <NavLink
        exact
        to="/login"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        LOGIN
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="35" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-left">
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              ARTWORKS
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
            <NavLink
              exact
              to="/about"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              ABOUT
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
