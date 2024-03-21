import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/RegistrationForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

function LogInForm() {
  const setCurrentUser = useSetCurrentUser();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = logInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setLogInData({
      ...logInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", logInData);
      setCurrentUser(data.user);

      history.push("/?resetFilters=true");
    } catch (err) {
      // console.log(err);
      // console.log(err.response);
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>log in</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                name="username"
                value={username}
                type="text"
                placeholder="username"
                className={styles.Input}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, i) => (
              <Alert variant="warning" key={i}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <div className={styles.passwordWrapper}>
                <Form.Control
                  name="password"
                  value={password}
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className={styles.Input}
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
            {errors.password?.map((message, i) => (
              <Alert key={i} variant="warning">
                {message}
              </Alert>
            ))}

            <Button className={`${btnStyles.Wide} `} type="submit">
              Log in
            </Button>
            {errors.non_field_errors?.map((message, i) => (
              <Alert key={i} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>

        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/registration">
            Don't have an account? <span>Register now!</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
}

export default LogInForm;
