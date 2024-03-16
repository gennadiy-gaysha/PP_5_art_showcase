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
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

function PaintingCreateForm() {
  const [paintingData, setPaintingData] = useState({});
  const [errors, setErrors] = useState({
    title: "",
    creation_year: "",
    theme: "",
    technique: "",
    price: "",
    availability: "",
    width: "",
    height: "",
    image: "",
  });

  const {
    title,
    creation_year,
    theme,
    technique,
    price,
    availability,
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
    const formData = new FormData();
    formData.append("title", title);
    formData.append("creation_year", creation_year);
    formData.append("theme", theme);
    formData.append("technique", technique);
    formData.append("price", price);
    formData.append("availability", availability);
    formData.append("width", width);
    formData.append("height", height);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/paintings/", formData);
      history.push(`/paintings/${data.id}`);
    } catch (err) {
      console.log(err);
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

  const AVAILABILITY_CHOICES = ["In stock", "Reserved", "Sold"];

  const textFields = (
    <div className="text-left">
      <Form.Group controlId="title">
        <Form.Label className="d-none">Title</Form.Label>
        <Form.Control
          name="title"
          value={title}
          onChange={handleChange}
          type="text"
          placeholder="Title"
          required
        />
      </Form.Group>

      <Form.Group controlId="creation_year">
        <Form.Label className="d-none">Year created</Form.Label>
        <Form.Control
          name="creation_year"
          value={creation_year}
          onChange={handleChange}
          type="number"
          min="1000"
          max="9999"
          placeholder="Year created"
          required
        />
      </Form.Group>
      <Form.Group controlId="theme">
        <Form.Label className="d-none">Theme</Form.Label>
        <Form.Control as="select" name="theme" onChange={handleChange}>
          <option value="">Select a theme</option>
          {THEME_CHOICES.map((theme, i) => (
            <option key={i} value={theme}>
              {theme}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="technique">
        <Form.Label className="d-none">Technique</Form.Label>
        <Form.Control as="select" name="technique" onChange={handleChange}>
          <option value="">Select a technique</option>
          {TECHNIQUE_CHOICES.map((tech, i) => (
            <option key={i} value={tech}>
              {tech}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label className="d-none">Suggested price</Form.Label>
        <Form.Control
          name="price"
          value={price}
          onChange={handleChange}
          type="text"
          placeholder="Suggested price"
          required
        />
      </Form.Group>
      <Form.Group controlId="availability">
        <Form.Label className="d-none">Availability</Form.Label>
        <Form.Control as="select" name="availability" onChange={handleChange}>
          <option value="">Select availability</option>
          {AVAILABILITY_CHOICES.map((availability, i) => (
            <option key={i} value={availability}>
              {availability}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <div className={styles.dimensionsContainer}>
        <span className={styles.dimensionsLabel}>Dimensions (cm):</span>
        <Form.Group controlId="width" className="mb-0">
          <Form.Label className="d-none">Width</Form.Label>
          <Form.Control
            className={styles.dimensionInput}
            name="width"
            value={width}
            onChange={handleChange}
            type="text"
            placeholder="Width"
            required
          />
        </Form.Group>

        <Form.Group controlId="width" className="mb-0">
          <Form.Label className="d-none">Width</Form.Label>
          <Form.Control
            className={styles.dimensionInput}
            name="height"
            value={height}
            onChange={handleChange}
            type="text"
            placeholder="Height"
            required
          />
        </Form.Group>
      </div>
      <Button
        className="me-5"
        style={{ marginRight: "15px" }}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button type="submit">create</Button>
    </div>
  );

  return (
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
                    <Image className={appStyles.Image} src={image} rounded />
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
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PaintingCreateForm;
