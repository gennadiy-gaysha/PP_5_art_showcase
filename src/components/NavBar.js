import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import logo_mobile from "../assets/logo_mobile.png";
import styles from "../styles/NavBar.module.css";
import { NavLink, useHistory } from "react-router-dom";

import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { useCurrentUserProfile } from "../hooks/useCurrentUserProfile";

import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useEffect, useState } from "react";

/**
 * NavBar is a responsive navigation bar component that provides
 * links for navigating through the application.
 * It dynamically adjusts content based on user authentication
 * status.
 * For authenticated users, it shows links to manage their artworks,
 * favorites, and watchlist, as well as an option to log out.
 * It also displays the user's avatar and a link to their profile.
 * For guests, it provides links to log in, register, and view the
 * about page.
 * The NavBar also includes a logo that changes based on the screen
 * size and provides a visual cue for navigation home.
 * Additional functionalities include a collapsible menu for smaller
 * screens and programmatic navigation to reset filters on the
 * artwork page.
 * The component utilizes custom hooks for redirection based on
 * authentication state and managing click events outside the
 * component to toggle the expanded state of the navigation menu.
 */
const NavBar = ({ onModalShow }) => {
  const [logoSrc, setLogoSrc] = useState(logo);
  const { profileCompleted } = useCurrentUserProfile();
  // const [modalShow, setModalShow] = useState(false);

  // Update logo based on screen width
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 480) {
        setLogoSrc(logo_mobile);
      } else {
        setLogoSrc(logo);
      }
    }

    // Call handleResize on component mount and setup event listener for resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const history = useHistory();
  // Function to trigger filter reset.
  // Programmatically (useHistory hook) navigates to the desired path while appending a query parameter ?resetFilters=true to the URL to reset filters. See onClick event handler attribute in NavLinks below.
  // After adding search bar to the PaintingsPage component we add another parameter, resetSearch=true, to indicate that the search should be reset simultaneously with filters:
  const resetFiltersAndNavigate = (path) => {
    history.push(`${path}?resetFilters=true&resetSearch=true`);
  };

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      resetFiltersAndNavigate("/");
      // Display a success notification
      NotificationManager.success(
        "You have been successfully logged out.",
        "Logged Out!"
      );
    } catch (err) {
      console.log(err);
      // Display an error notification
      NotificationManager.error(
        "There was a problem logging you out. Please try again.",
        "Logout Failed",
        5000
      );
    }
  };

  const addPaintingIcon = (
    <>
      {!profileCompleted ? (
        <>
          <div
            style={{ textTransform: "none" }}
            className={`${styles.NavLink} ${styles.NavLinkSpacing}`}
          >
            <span className={styles.IconTextContainer} onClick={onModalShow}>
              <i className="fas fa-plus-square"></i>Add painting
            </span>
          </div>
        </>
      ) : (
        <NavLink
          style={{ textTransform: "none" }}
          to="/paintings/create"
          className={`${styles.NavLink} ${styles.NavLinkSpacing}`}
          activeClassName={styles.Active}
        >
          <i className="fas fa-plus-square"></i>Add painting
        </NavLink>
      )}
    </>
  );

  const loggedInIcons = (
    <>
      {!profileCompleted ? (
        <>
          <div
            className={`${styles.NavLink} ${styles.NavLinkWithDivider} ${styles.IconTextContainer} mr-auto text-left`}
            onClick={onModalShow}
          >
            faves
          </div>
          <div
            className={`${styles.NavLink} ${styles.NavLinkWithDivider} ${styles.IconTextContainer} mr-auto text-left`}
            onClick={onModalShow}
          >
            watchlist
          </div>
        </>
      ) : (
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
        </>
      )}

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
      {!profileCompleted ? (
        <div
          style={{ textTransform: "none", fontWeight: "bold" }}
          className={`${styles.NavLink} ${styles.NavLinkWithDivider} ${styles.IconTextContainer} mr-auto text-left`}
          onClick={onModalShow}
        >
          <Avatar
            src={currentUser?.profile_image}
            text={currentUser?.username}
            height={40}
          />
        </div>
      ) : (
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
      )}
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
        className={`${styles.NavLink} ${styles.NavLinkWithDivider}`}
        activeClassName={styles.Active}
      >
        login
      </NavLink>
      <NavLink
        to="/about"
        className={`${styles.NavLink} ${styles.NavLinkSpacing} `}
        activeClassName={styles.Active}
      >
        about
      </NavLink>
      <span className={styles.GuestUser}>hello, guest-user</span>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="xl"
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
            <img src={logoSrc} alt="logo" className={styles.Logo} />
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
