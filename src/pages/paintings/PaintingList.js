import React from "react";
import styles from "../../styles/PaintingList.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

import { useCurrentUserProfile } from "../../hooks/useCurrentUserProfile";
import ModalAlert from "../../components/ModalAlert";
import { useState } from "react";

function Painting(props) {
  const { profileCompleted } = useCurrentUserProfile();
  const [modalShow, setModalShow] = useState(false);

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
    <Card className={styles.Painting}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} hight={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            {is_owner && paintingPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/paintings/${id}`}>
        <div className={styles.PaintingImageContainer}>
          <Card.Img src={image} alt={title} />
        </div>
      </Link>
      <Card.Body>
        <span>published: {created_at}</span>
        {owner && <Card.Text>{owner}</Card.Text>}
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {theme}
        <br />
        {technique}
        <br />
        {orientation} ({width}cm x {height}cm)
        <br />£{price}
        <div className={styles.PaintingBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>You can't follow up your own painting!</Tooltip>
              }
            >
              <i className="fas fa-eye" />
            </OverlayTrigger>
          ) : !profileCompleted ? (
            <>
              <span onClick={() => setModalShow(true)}>
                <i
                  className={`fas fa-eye ${styles.Observation}`}
                  style={{ color: "#b5b5b5" }}
                />
              </span>

              <ModalAlert
                show={modalShow}
                onHide={() => setModalShow(false)}
                title="Modal Heading"
                heading="Centered Modal"
                content="Here goes the content."
              />
            </>
          ) : observation_id ? (
            <span onClick={handleDoNotObserve}>
              <i className={`fas fa-eye ${styles.Observation}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleObserve}>
              <i className={`fas fa-eye ${styles.ObservationOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to follow up paintings!</Tooltip>}
            >
              <i className="fas fa-eye" />
            </OverlayTrigger>
          )}
          {observations_count}
          <Link to={`/paintings/${id}`}>
            <i className="far fa-comments"></i>
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Painting;
