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
    artistName,
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
              {!currentUser ? (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Log in to follow up the painting</Tooltip>}
                >
                  <i className={`fas fa-eye ${styles.IconSize}`} />
                </OverlayTrigger>
              ) : is_owner ? (
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>You can't follow up your own painting</Tooltip>
                  }
                >
                  <i className={`fas fa-eye ${styles.IconSize}`} />
                </OverlayTrigger>
              ) : !profileCompleted ? (
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
                      <i
                        className={`fas fa-eye ${styles.ObservationUncomplete}`}
                      />
                    </span>
                  </OverlayTrigger>

                  <ModalAlert
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    title="Modal Heading"
                    heading="Centered Modal"
                    content="Here goes the content."
                  />
                </>
              ) : observation_id ? (
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>Remove the painting from your Watchlist</Tooltip>
                  }
                >
                  <span onClick={handleDoNotObserve}>
                    <i
                      className={`fas fa-eye ${styles.Observation} ${styles.IconSize}`}
                    />
                  </span>
                </OverlayTrigger>
              ) : (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Add painting to your watchlistt</Tooltip>}
                >
                  <span onClick={handleObserve}>
                    <i
                      className={`fas fa-eye ${styles.ObservationOutline} ${styles.IconSize}`}
                    />
                  </span>
                </OverlayTrigger>
              )}

              {observations_count}

              {/* hello */}
              {!currentUser ? (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Log in to leave a comment</Tooltip>}
                >
                  <span>
                    <i className={`far fa-comments ${styles.IconSize}`}></i>
                  </span>
                </OverlayTrigger>
              ) : profileCompleted ? (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Total number of comments</Tooltip>}
                >
                  <Link to={`/paintings/${id}`}>
                    <i className={`far fa-comments ${styles.IconSize}`}></i>
                  </Link>
                </OverlayTrigger>
              ) : (
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip>Complete your profile to leave a comment</Tooltip>
                  }
                >
                  <Link to="#" onClick={() => setModalShow(true)}>
                    <i className={`far fa-comments ${styles.IconSize}`}></i>
                  </Link>
                </OverlayTrigger>
              )}

              {comments_count}
            </div>
          </Card>
        </Col>

        {/* Right column for the painting details */}
        <Col md={4}>
          <Card>
            <Card.Body>
              <h3 className="mb-5 mt-2">
                {owner && <Card.Text>{artistName || owner}</Card.Text>}
              </h3>
              {title && (
                <Card.Title className="mb-2">
                  <em>
                    {title} ({creation_year})
                  </em>
                </Card.Title>
              )}
              <p className="mb-5">{technique}</p>
              {/* <p>{theme}</p> */}
              {/* {orientation}{" "} */}
              <p className="mb-1">Painting</p>
              <p className="mb-5">
                {width} x {height} cm
              </p>
              <p>
                Suggested price: <strong>£{price}</strong>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Painting;
