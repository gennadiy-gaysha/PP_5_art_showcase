import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/RegistrationForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Col, Row, Container } from "react-bootstrap";

const RegistrationForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>registration</h1>

          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="username"
                name="username"
              />
              <Form.Text className="text-muted">
                *Disclaimer: Once created, you cannot change your username.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label className="d-none">email address</Form.Label>
              <Form.Control
                className={styles.Input}
                type="email"
                placeholder="email"
                name="email"
              />
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Label className="d-none">password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="password"
                name="password1"
              />
            </Form.Group>

            <Form.Group controlId="password2">
              <Form.Label className="d-none">confirm password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="confirm password"
                name="password2"
              />
            </Form.Group>
            <Button className={`${btnStyles.Wide} `} type="submit">
              Register
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/login">
            Already have an account? <span>Log in</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default RegistrationForm;
