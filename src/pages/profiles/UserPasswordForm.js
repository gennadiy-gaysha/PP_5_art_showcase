import React, { useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import passwordStyles from "../../styles/RegistrationForm.module.css";

import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

const UserPasswordForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = userData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      // redirect user if they are not the owner of this profile
      history.push("/");
    }
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.post("/dj-rest-auth/password/change/", userData);
      NotificationManager.success(
        "Your password has been successfully changed.",
        "Success"
      );
      history.goBack();
    } catch (err) {
      console.log(err);
      NotificationManager.error(
        "Failed to change the password. Please check your input and try again.",
        "Error",
        5000
      );
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={appStyles.Content}>
          <h1 className={passwordStyles.Header}>change password</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label className="sr-only">New password</Form.Label>
              <div className={passwordStyles.passwordWrapper}>
                <Form.Control
                  placeholder="new password"
                  type={showPassword ? "text" : "password"}
                  value={new_password1}
                  onChange={handleChange}
                  name="new_password1"
                />
                <i
                  onClick={togglePasswordVisibility}
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} ${
                    passwordStyles.passwordEyeIcon
                  }`}
                ></i>
              </div>
            </Form.Group>
            {errors?.new_password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label className="sr-only">Confirm password</Form.Label>
              <div className={passwordStyles.passwordWrapper}>
                <Form.Control
                  placeholder="confirm new password"
                  type={showPassword ? "text" : "password"}
                  value={new_password2}
                  onChange={handleChange}
                  name="new_password2"
                />
                <i
                  onClick={togglePasswordVisibility}
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} ${
                    passwordStyles.passwordEyeIcon
                  }`}
                ></i>
              </div>
            </Form.Group>
            {errors?.new_password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => history.goBack()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
            >
              Save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UserPasswordForm;
