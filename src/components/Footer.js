import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            © 2024 ArtShowcase
            <div className={styles.socialMediaRow}>
              <span className={styles.followUs}>Follow us:</span>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-square-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
