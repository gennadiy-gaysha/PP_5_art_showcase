import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

/**
 * ProfileEditForm allows users to edit their profile details
 * including name, bio, home country, gender, birthdate, and
 * profile image.
 * It performs validation checks on inputs to ensure all required
 * fields are filled and meet the criteria before submission.
 * If validation fails, it displays appropriate error messages.
 * Successful submissions update the user's profile information
 * and redirect back to the profile page. The form uses
 * react-datepicker for birthdate input and supports image uploads
 * with preview.
 */
const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const GENDER_CHOICES = ["Male", "Female", "Other"];

  const [profileData, setProfileData] = useState({
    name: "",
    bio: "",
    home_country: "",
    gender: "Select gender",
    birthdate: null,
    image: "",
  });

  let {
    name,
    bio,
    home_country,
    gender = "Select gender",
    image,
  } = profileData;
  gender = GENDER_CHOICES.includes(gender) ? gender : "Select gender";

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, bio, home_country, gender, birthdate, image } = data;
          setProfileData({
            name,
            bio,
            home_country,
            gender,
            birthdate: birthdate ? new Date(birthdate) : null,
            image,
          });
        } catch (err) {
          // console.log(err);
          history.push("/");
        }
      } else {
        history.push(`/profiles/${id}/`);
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Initialize an errors object
    let newErrors = {};

    // Check if birthdate is null (empty)
    if (!profileData.birthdate) {
      newErrors = { ...newErrors, birthdate: ["Birthdate is required."] };
    } else {
      const selectedDate = new Date(profileData.birthdate);
      const isDateValid = selectedDate instanceof Date && !isNaN(selectedDate);

      // Ensure the birthdate is a valid date
      if (!isDateValid) {
        newErrors = { ...newErrors, birthdate: ["Birthdate is not valid."] };
      } else {
        // Ensure the birthdate is not in the future
        const today = new Date();
        if (selectedDate > today) {
          newErrors = {
            ...newErrors,
            birthdate: ["Birthdate cannot be in the future."],
          };
        }
      }
    }

    // trim() removes any leading and trailing whitespace end prevents the User from entering a series of spaces
    // Validation for bio
    if (!bio.trim()) {
      newErrors.bio = ["Bio is required."];
    }

    // Validation for name
    if (!name.trim()) {
      newErrors.name = ["Full name is required."];
    }

    // Validation for home_country
    if (!home_country.trim()) {
      newErrors.home_country = ["Home country is required."];
    }

    // Validation for gender
    if (gender === "Select gender") {
      newErrors.gender = ["Gender selection is required."];
    }

    if (Object.keys(newErrors).length > 0) {
      // Sets errors (if any) and prevents form submission
      setErrors(newErrors);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("bio", bio);
      formData.append("home_country", home_country);
      formData.append("gender", gender);
      formData.append(
        "birthdate",
        profileData.birthdate.toISOString().slice(0, 10)
      );

      if (imageFile?.current?.files[0]) {
        formData.append("image", imageFile?.current?.files[0]);
      }

      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      NotificationManager.success(
        "Your Profile has been completed (updated) successfully!",
        "Success"
      );
      history.push(`/profiles/${id}/`);
    } catch (err) {
      // console.log(err);
      if (err.response && err.response.data) {
        setErrors(err.response.data);
      }
      NotificationManager.error(
        "Failed to complete (update) your profile. Please try again.",
        "Error",
        5000
      );
    }
  };

  const textFields = (
    <>
      <Form.Group controlId="bio">
        <Form.Label className="sr-only">Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={bio}
          onChange={handleChange}
          name="bio"
          placeholder="Bio"
          rows={7}
        />
      </Form.Group>
      {errors?.bio?.map((message, i) => (
        <Alert variant="warning" key={i}>
          {message}
        </Alert>
      ))}

      <Form.Group controlId="artist-name">
        <Form.Label className="sr-only">Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          placeholder="Full name"
        />
      </Form.Group>
      {errors?.name?.map((message, i) => (
        <Alert variant="warning" key={i}>
          {message}
        </Alert>
      ))}

      <Form.Group controlId="home-country">
        <Form.Label className="sr-only">Home Country</Form.Label>
        <Form.Control
          type="text"
          value={home_country}
          onChange={handleChange}
          name="home_country"
          placeholder="Home country"
        />
      </Form.Group>
      {errors?.home_country?.map((message, i) => (
        <Alert variant="warning" key={i}>
          {message}
        </Alert>
      ))}

      <Form.Group controlId="gender">
        <Form.Label className="sr-only">Gender</Form.Label>
        <Form.Control
          as="select"
          name="gender"
          value={gender}
          onChange={handleChange}
        >
          <option disabled value="Select gender">
            Select gender
          </option>

          {GENDER_CHOICES.map((genderOption, i) => (
            <option key={i} value={genderOption}>
              {genderOption}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.gender?.map((message, i) => {
        return (
          <Alert variant="warning" key={i}>
            {message}
          </Alert>
        );
      })}

      <Form.Group>
        <Form.Label className="sr-only">Birthdate</Form.Label>
        <DatePicker
          selected={profileData.birthdate}
          onChange={(date) =>
            setProfileData({ ...profileData, birthdate: date })
          }
          dateFormat="dd MMM yyyy"
          className="form-control"
          placeholderText="Date of birth"
        />
      </Form.Group>
      {errors?.birthdate?.map((message, i) => (
        <Alert variant="warning" key={i}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} alt="Profile image" fluid />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            {/* <div className="d-md-none">{textFields}</div> */}
          </Container>
        </Col>
        {/* <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col> */}
        <Col xs={12} md={5} lg={6}>
          <Container className={appStyles.Content}>
            <div>{textFields}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;
