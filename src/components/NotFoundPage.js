import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from "../styles/NotFoundPage.module.css";

const NotFoundPage = () => {
  let history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <Container className="text-center">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className={styles.NotFoundHeader}>OOPS!</h1>
          <h4 className="mb-4">
            <strong>404 - Page Not Found</strong>
          </h4>
          <p className="mb-4">
            The page you're looking for doesn't exist. <br />
            Let's get you back on track:
          </p>

          <Button variant="primary" onClick={goToHomePage}>
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
