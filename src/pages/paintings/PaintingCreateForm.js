import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/download_painting.png";

import styles from "../../styles/PaintingCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Alert, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

import { useCurrentUserProfile } from "../../hooks/useCurrentUserProfile";

import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

function PaintingCreateForm() {
  const { profile } = useCurrentUserProfile();

  const [paintingData, setPaintingData] = useState({
    title: "",
    creation_year: "",
    theme: "Select theme",
    technique: "Select technique",
    price: "",
    width: "",
    height: "",
    image: "",
  });
  const [errors, setErrors] = useState({});

  const {
    title,
    creation_year,
    theme,
    technique,
    price,
    width,
    height,
    image,
  } = paintingData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPaintingData({
      ...paintingData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPaintingData({
        ...paintingData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Initialize an errors object
    let newErrors = {};

    // Validation logic
    if (!title.trim()) {
      newErrors.title = ["Title is required."];
    }

    if (!creation_year.trim()) {
      newErrors.creation_year = ["Creation year is required."];
    }

    if (theme === "Select theme") {
      newErrors.theme = ["Theme selection is required."];
    }

    if (technique === "Select technique") {
      newErrors.technique = ["Technique selection is required."];
    }

    if (!price.trim()) {
      newErrors.price = ["Price is required."];
    }

    if (!width.trim()) {
      newErrors.width = ["Width is required."];
    }

    if (!height.trim()) {
      newErrors.height = ["Height is required."];
    }

    if (!image.trim()) {
      newErrors.image = ["Image is required."];
    }

    if (Object.keys(newErrors).length > 0) {
      // Updates the component's state if there are errors
      setErrors(newErrors);
      // Stops the form submission process if there are validation errors
      return;
    }

    try {
      const formData = new FormData();
      // Append form data fields
      formData.append("title", title);
      formData.append("creation_year", creation_year);
      formData.append("theme", theme);
      formData.append("technique", technique);
      formData.append("price", price);
      formData.append("width", width);
      formData.append("height", height);
      formData.append("image", imageInput.current.files[0]);

      const { data } = await axiosReq.post("/paintings/", formData);
      NotificationManager.success(
        "Your painting has been successfully created.",
        "Success!"
      );
      history.push(`/paintings/${data.id}`);
    } catch (err) {
      console.log(err);
      NotificationManager.error(
        "Failed to create the painting. Please check your input and try again.",
        "Error!",
        5000
      );
      if (err.response.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  // Technique options derived from the Django model's TECHNIQUE_CHOICES
  const TECHNIQUE_CHOICES = [
    "Oil Paint",
    "Acrylic Paint",
    "Watercolor",
    "Gouache",
    "Pastel",
    "Charcoal",
    "Graphite",
    "Ink",
    "Mixed Media",
  ];

  const THEME_CHOICES = [
    "Portrait",
    "Still Life",
    "Landscape",
    "Seascape",
    "Abstract",
    "Figurative",
    "Genre",
    "Animal",
  ];

  const textFields = (
    <div className="text-left">
      <Form.Group controlId="title">
        <Form.Label className="sr-only">Title</Form.Label>
        <Form.Control
          name="title"
          value={title}
          onChange={handleChange}
          type="text"
          placeholder="Title"
        />
      </Form.Group>
      {errors?.title?.map((message, i) => {
        return (
          <Alert variant="warning" key={i}>
            {message}
          </Alert>
        );
      })}

      <Form.Group controlId="creation_year">
        <Form.Label className="sr-only">Year created</Form.Label>
        <Form.Control
          name="creation_year"
          value={creation_year}
          onChange={handleChange}
          type="number"
          min="1000"
          max="9999"
          placeholder="Year created"
        />
      </Form.Group>
      {errors?.creation_year?.map((message, i) => {
        return (
          <Alert variant="warning" key={i}>
            {message}
          </Alert>
        );
      })}

      <Form.Group controlId="theme">
        <Form.Label className="sr-only">Theme</Form.Label>
        <Form.Control as="select" name="theme" onChange={handleChange}>
          <option value="Select theme">Select theme</option>

          {THEME_CHOICES.map((theme, i) => (
            <option key={i} value={theme}>
              {theme}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.theme?.map((message, i) => {
        return (
          <Alert variant="warning" key={i}>
            {message}
          </Alert>
        );
      })}

      <Form.Group controlId="technique">
        <Form.Label className="sr-only">Technique</Form.Label>
        <Form.Control as="select" name="technique" onChange={handleChange}>
          <option value="Select technique">Select technique</option>
          {TECHNIQUE_CHOICES.map((tech, i) => (
            <option key={i} value={tech}>
              {tech}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.technique?.map((message, i) => {
        return (
          <Alert variant="warning" key={i}>
            {message}
          </Alert>
        );
      })}

      <Form.Group controlId="price">
        <Form.Label className="sr-only">Suggested price</Form.Label>
        <Form.Control
          name="price"
          value={price}
          onChange={handleChange}
          type="text"
          placeholder="Suggested price"
        />
      </Form.Group>
      {errors?.price?.map((message, i) => {
        return (
          <Alert variant="warning" key={i}>
            {message}
          </Alert>
        );
      })}

      <div className={styles.dimensionsContainer}>
        <span className={styles.dimensionsLabel}>Dimensions (cm):</span>
        <Form.Group controlId="width" className="mb-0">
          <Form.Label className="sr-only">Width</Form.Label>
          <Form.Control
            className={styles.dimensionInput}
            name="width"
            value={width}
            onChange={handleChange}
            type="text"
            placeholder="Width"
          />
        </Form.Group>

        <Form.Group controlId="height" className="mb-0">
          <Form.Label className="sr-only">Height</Form.Label>
          <Form.Control
            className={styles.dimensionInput}
            name="height"
            value={height}
            onChange={handleChange}
            type="text"
            placeholder="Height"
          />
        </Form.Group>
      </div>
      {errors?.width?.map((message, i) => {
        return (
          <Alert variant="warning" key={i}>
            {`${message}`}
          </Alert>
        );
      })}
      {errors?.height?.map((message, i) => {
        return (
          <Alert variant="warning" key={i}>
            {`${message}`}
          </Alert>
        );
      })}

      <Button
        className="me-5"
        style={{ marginRight: "15px" }}
        onClick={() => {
          history.goBack();
        }}
      >
        cancel
      </Button>
      <Button type="submit">create</Button>
    </div>
  );

  return (
    <>
      {!profile ? (
        <Asset spinner />
      ) : (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
              <Container
                className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
              >
                <Form.Group className="text-center">
                  {image ? (
                    <>
                      <figure>
                        <Image
                          className={appStyles.Image}
                          src={image}
                          rounded
                        />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Blue} btn`}
                          htmlFor="image-upload"
                        >
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label
                      className="d-flex justify-content-center"
                      htmlFor="image-upload"
                    >
                      <Asset src={Upload} message="Upload your painting here" />
                    </Form.Label>
                  )}

                  <Form.File
                    id="image-upload"
                    accept="image/*"
                    onChange={handleChangeImage}
                    ref={imageInput}
                  />
                </Form.Group>
                {errors?.image?.map((message, i) => {
                  return (
                    <Alert variant="warning" className="text-center" key={i}>
                      {message}
                    </Alert>
                  );
                })}
                <div className="d-md-none">{textFields}</div>
              </Container>
            </Col>
            <Col md={5} lg={4} className="sr-only d-md-block p-0 p-md-2">
              <Container className={appStyles.Content}>{textFields}</Container>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
}

export default PaintingCreateForm;
