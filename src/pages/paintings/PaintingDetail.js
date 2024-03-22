import React from "react";
import styles from "../../styles/PaintingDetail.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  Card,
  Col,
  Container,
  Media,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom";

function Painting(props) {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    created_at,
    updated_at,
    artist_name,
    title,
    creation_year,
    technique,
    theme,
    width,
    height,
    orientation,
    price,
    image,
    observation_id,
    observations_count,
    comments_count,
    paintingPage,
    setPaintings,
  } = props;

  const currentUser = useCurrentUser();
  // checks if currently logged in user (currentUser?.username) is the
  // owner of the painting (owner):
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/paintings/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/paintings/${id}`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleObserve = async () => {
    try {
      const { data } = await axiosRes.post("/observations/", { painting: id });
      setPaintings((prevPaintings) => ({
        ...prevPaintings,
        results: prevPaintings.results.map((painting) => {
          return painting.id === id
            ? {
                ...painting,
                observations_count: painting.observations_count + 1,
                observation_id: data.id,
              }
            : painting;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleDoNotObserve = async () => {
    try {
      await axiosRes.delete(`/observations/${observation_id}`);
      setPaintings((prevPaintings) => ({
        ...prevPaintings,
        results: prevPaintings.results.map((painting) => {
          return painting.id === id
            ? {
                ...painting,
                observations_count: painting.observations_count - 1,
                observation_id: null,
              }
            : painting;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row>
        {/* Left column for the image */}
        <Col md={8}>
          <Card className={styles.Painting}>
            <Card.Body>
              <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                  <Avatar src={profile_image} hight={55} />
                  {owner}
                </Link>
                <div className="d-flex align-items-center">
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip>Date when the painting was added</Tooltip>
                    }
                  >
                    <span style={{ paddingRight: "10px" }}>{created_at}</span>
                  </OverlayTrigger>
                  {is_owner && paintingPage && (
                    <MoreDropdown
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                    />
                  )}
                </div>
              </Media>
            </Card.Body>

            {/* <div className={styles.PaintingImageContainer}> */}
            <Card.Img src={image} alt={title} />
            {/* </div> */}
            <div className={styles.PaintingBar}>
              {is_owner ? (
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>You can't follow up your own painting!</Tooltip>
                  }
                >
                  <i className={`fas fa-eye ${styles.IconSize}`} />
                </OverlayTrigger>
              ) : observation_id ? (
                <span onClick={handleDoNotObserve}>
                  <i
                    className={`fas fa-eye ${styles.Observation} ${styles.IconSize}`}
                  />
                </span>
              ) : currentUser ? (
                <span onClick={handleObserve}>
                  <i
                    className={`fas fa-eye ${styles.ObservationOutline} ${styles.IconSize}`}
                  />
                </span>
              ) : (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Log in to follow up paintings!</Tooltip>}
                >
                  <i className={`fas fa-eye ${styles.IconSize}`} />
                </OverlayTrigger>
              )}
              {observations_count}
              <Link to={`/paintings/${id}`}>
                <i className={`far fa-comments ${styles.IconSize}`}></i>
              </Link>
              {comments_count}
            </div>
          </Card>
        </Col>

        {/* Right column for the painting details */}
        <Col md={4}>
          <Card>
            <Card.Body>
              {owner && <Card.Text>{owner}</Card.Text>}
              {title && <Card.Title>{title}</Card.Title>}
              {theme}
              <br />
              {technique}
              <br />
              {orientation} ({width}cm x {height}cm)
              <br />£{price}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Painting;