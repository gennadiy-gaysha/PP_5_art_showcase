import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/RegistrationForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useRedirect } from "../../hooks/useRedirect";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  useRedirect("loggedIn");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [registrationData, setRegistrationData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = registrationData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setRegistrationData({
      ...registrationData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", registrationData);
      // Display success notification
      NotificationManager.success(
        "Registration successful! You can now log in.",
        "Successful Registration!"
      );
      history.push("/login");
    } catch (err) {
      // Display error notification
      NotificationManager.error(
        "Registration failed. Please check your input and try again.",
        "Registration Error",
        5000
      );
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>registration</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="username"
                name="username"
                value={username}
                onChange={handleChange}
              />
              <Form.Text className={`"text-muted" ${styles.disclaimerText}`}>
                ** Disclaimer: Once created, you cannot change your username.
              </Form.Text>
            </Form.Group>
            {errors.username?.map((message, i) => (
              <Alert variant="warning" key={i}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">password</Form.Label>
              <div className={styles.passwordWrapper}>
                <Form.Control
                  className={styles.Input}
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password1"
                  value={password1}
                  onChange={handleChange}
                />
                <i
                  onClick={togglePasswordVisibility}
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} ${
                    styles.passwordEyeIcon
                  }`}
                ></i>
              </div>
            </Form.Group>
            {errors.password1?.map((message, i) => (
              <Alert variant="warning" key={i}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">confirm password</Form.Label>
              <div className={styles.passwordWrapper}>
                <Form.Control
                  className={styles.Input}
                  type={showPassword ? "text" : "password"}
                  placeholder="confirm password"
                  name="password2"
                  value={password2}
                  onChange={handleChange}
                />
                <i
                  onClick={togglePasswordVisibility}
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} ${
                    styles.passwordEyeIcon
                  }`}
                ></i>
              </div>
            </Form.Group>
            {errors.password2?.map((message, i) => (
              <Alert variant="warning" key={i}>
                {message}
              </Alert>
            ))}

            <Button className={`${btnStyles.Wide} `} type="submit">
              Register
            </Button>
            {errors.non_field_errors?.map((message, i) => {
              return (
                <Alert variant="warning" key={i} className="mt-3">
                  {message}
                </Alert>
              );
            })}
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
