import React from "react";
import styles from "../../styles/Painting.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

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
    price,
    availability,
    image,
    observation_id,
    observations_count,
    comments_count,
    paintingPage,
  } = props;

  const currentUser = useCurrentUser();
  // checks if currently logged in user (currentUser?.username) is the
  // owner of the painting (owner):
  const is_owner = currentUser?.username === owner;
  return (
    <Card className={styles.Painting}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} hight={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>published: {created_at}</span>
            {is_owner && paintingPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/paintings/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {owner && <Card.Text>{owner}</Card.Text>}
        {title && <Card.Title className="text-center">{title}</Card.Title>}
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
          ) : observation_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-eye ${styles.Observation}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
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
