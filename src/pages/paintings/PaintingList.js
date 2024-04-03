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

  // Variables for pop-up observation icon hints:
  const notLoggedInObservation = (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>Log in to follow up the painting</Tooltip>}
      >
        <i className={`fas fa-eye ${styles.IconSize}`} />
      </OverlayTrigger>
      {observations_count}
    </>
  );

  const isOwnerObservation = (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>You can't follow up your own painting</Tooltip>}
      >
        <i className={`fas fa-eye ${styles.IconSize}`} />
      </OverlayTrigger>
      {observations_count}
    </>
  );

  const notCompletedObservation = (
    <>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip>
            Complete your profile to add painting to your Watchlist
          </Tooltip>
        }
      >
        <span onClick={() => setModalShow(true)}>
          <i className={`fas fa-eye ${styles.ObservationUncomplete}`} />
        </span>
      </OverlayTrigger>
      {observations_count}
      <ModalAlert show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );

  const yetObserved = (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>Remove the painting from your Watchlist</Tooltip>}
      >
        <span onClick={handleDoNotObserve}>
          <i
            className={`fas fa-eye ${styles.Observation} ${styles.IconSize}`}
          />
        </span>
      </OverlayTrigger>
      {observations_count}
    </>
  );

  const notObserved = (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>Add painting to your watchlist</Tooltip>}
      >
        <span onClick={handleObserve}>
          <i
            className={`fas fa-eye ${styles.ObservationOutline} ${styles.IconSize}`}
          />
        </span>
      </OverlayTrigger>
      {observations_count}
    </>
  );

  // Variable for pop-up comment icon hints:
  const readComment = (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>Read comments</Tooltip>}
      >
        <Link to={`/paintings/${id}`}>
          <i className="far fa-comments"></i>
        </Link>
      </OverlayTrigger>
      {comments_count}
    </>
  );

  const readAddComment = (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>Read/add comments</Tooltip>}
      >
        <Link to={`/paintings/${id}`}>
          <i className="far fa-comments"></i>
        </Link>
      </OverlayTrigger>
      {comments_count}
    </>
  );

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
      <Card.Body className="text-left">
        {/* <span>published: {created_at}</span> */}
        {title && <Card.Title className="text-left">{title}</Card.Title>}
        {owner && <Card.Text>{artist_name}</Card.Text>}
        {/* {theme} */}
        {/* <br /> */}
        Technique: {technique}
        <br />
        {/* <br /> */}
        {/* {orientation} ({width}cm x {height}cm) */}£{price}
        <div className={styles.PaintingBar}>
          {!currentUser && (
            <>
              {notLoggedInObservation}
              {readComment}
            </>
          )}
          {currentUser && !profileCompleted && (
            <>
              {notCompletedObservation}
              {readComment}
            </>
          )}
          {currentUser && profileCompleted && is_owner && (
            <>
              {isOwnerObservation}
              {readAddComment}
            </>
          )}
          {currentUser && profileCompleted && !is_owner && (
            <>
              {observation_id ? yetObserved : notObserved}
              {readAddComment}
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Painting;
