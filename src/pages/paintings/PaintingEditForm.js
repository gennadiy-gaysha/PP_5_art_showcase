import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import styles from "../../styles/PaintingCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert, Image } from "react-bootstrap";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

function PaintingEditForm() {
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

  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/paintings/${id}/`);
        const {
          title,
          creation_year,
          theme,
          technique,
          price,
          width,
          height,
          image,
          is_owner,
        } = data;
        is_owner
          ? setPaintingData({
              title,
              creation_year,
              theme,
              technique,
              price,
              width,
              height,
              image,
            })
          : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [history, id]);

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
    formData.append("width", width);
    formData.append("height", height);

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/paintings/${id}/`, formData);
      history.push(`/paintings/${id}`);
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
        <Form.Label className="d-none">Year created</Form.Label>
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
        <Form.Label className="d-none">Theme</Form.Label>
        <Form.Control
          as="select"
          name="theme"
          value={theme}
          onChange={handleChange}
        >
          <option disabled value="Select theme">
            Select theme
          </option>

          {THEME_CHOICES.map((themeOption, i) => (
            <option key={i} value={themeOption}>
              {themeOption}
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
        <Form.Label className="d-none">Technique</Form.Label>
        <Form.Control
          as="select"
          name="technique"
          value={technique}
          onChange={handleChange}
        >
          <option disabled value="Select technique">
            Select technique
          </option>
          {TECHNIQUE_CHOICES.map((techOption, i) => (
            <option key={i} value={techOption}>
              {techOption}
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
        <Form.Label className="d-none">Suggested price</Form.Label>
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
          <Form.Label className="d-none">Width</Form.Label>
          <Form.Control
            className={styles.dimensionInput}
            name="width"
            value={width}
            onChange={handleChange}
            type="text"
            placeholder="Width"
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
          />
        </Form.Group>
      </div>
      {errors?.width?.map((message, i) => {
        return (
          <Alert variant="warning" key={i}>
            {`Width: ${message}`}
          </Alert>
        );
      })}
      {errors?.height?.map((message, i) => {
        return (
          <Alert variant="warning" key={i}>
            {`Height: ${message}`}
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
      <Button type="submit">update</Button>
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

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, i) => {
              return (
                <Alert variant="warning" key={i}>
                  {message}
                </Alert>
              );
            })}
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

export default PaintingEditForm;
