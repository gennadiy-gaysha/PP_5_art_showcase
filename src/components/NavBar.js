import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink, useHistory } from "react-router-dom";

import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  const history = useHistory();
  // Function to trigger filter reset.
  // Programmatically (useHistory hook) navigates to the desired path while appending a query parameter ?resetFilters=true to the URL to reset filters. See onClick event handler attribute in NavLinks below.
  const resetFiltersAndNavigate = (path) => {
    history.push(`${path}?resetFilters=true`);
  };

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      resetFiltersAndNavigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const addPaintingIcon = (
    <NavLink
      style={{ textTransform: "none" }}
      to="/paintings/create"
      className={`${styles.NavLink} ${styles.NavLinkSpacing}`}
      activeClassName={styles.Active}
    >
      <span className={styles.IconTextContainer}>
        <i className="fas fa-plus-square"></i>Add painting
      </span>
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink
        to="/favourites"
        className={`${styles.NavLink} ${styles.NavLinkWithDivider}`}
        activeClassName={styles.Active}
        onClick={(event) => {
          event.preventDefault(); // Prevents the browser from automatically navigating to the link's href attribute thst is to="/"
          resetFiltersAndNavigate("/favourites"); // Navigate with resetFilters query parameter
        }}
      >
        faves
      </NavLink>

      <NavLink
        to="/watchlist"
        className={`${styles.NavLink} ${styles.NavLinkWithDivider}`}
        activeClassName={styles.Active}
        onClick={(event) => {
          event.preventDefault(); // Prevents the browser from automatically navigating to the link's href attribute thst is to="/"
          resetFiltersAndNavigate("/watchlist"); // Navigate with resetFilters query parameter
        }}
      >
        watchlist
      </NavLink>

      <NavLink
        to="/"
        onClick={handleLogOut}
        className={`${styles.NavLink} ${styles.NavLinkWithDivider}`}
      >
        log out
      </NavLink>

      <NavLink
        to="/about"
        className={`${styles.NavLink} ${styles.NavLinkSpacing}`}
        activeClassName={styles.Active}
      >
        about
      </NavLink>

      <NavLink
        style={{ textTransform: "none", fontWeight: "bold" }}
        to={`/profiles/${currentUser?.profile_id}`}
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <Avatar
          src={currentUser?.profile_image}
          text={currentUser?.username}
          // text="Profile" // only for testing!!!
          height={40}
        />
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        exact
        to="/registration"
        className={`${styles.NavLink} ${styles.NavLinkWithDivider}`}
        activeClassName={styles.Active}
      >
        register
      </NavLink>
      <NavLink
        exact
        to="/login"
        className={`${styles.NavLink} ${styles.NavLinkSpacing}`}
        activeClassName={styles.Active}
      >
        login
      </NavLink>
      <span className={styles.GuestUser}>hello, guest-user</span>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink
          to="/"
          onClick={(event) => {
            event.preventDefault(); // Prevents the browser from automatically navigating to the link's href attribute thst is to="/"
            resetFiltersAndNavigate("/"); // Navigate with resetFilters query parameter
          }}
        >
          <Navbar.Brand>
            <img src={logo} alt="logo" height="35" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPaintingIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => {
            setExpanded(!expanded);
          }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-left">
            <NavLink
              exact
              to="/"
              onClick={(event) => {
                event.preventDefault(); // Prevents the browser from automatically navigating to the link's href attribute thst is to="/"
                resetFiltersAndNavigate("/"); // Navigate with resetFilters query parameter
              }}
              className={`${styles.NavLink} ${styles.NavLinkWithDivider}`}
              activeClassName={styles.Active}
            >
              ARTWORKS
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
