import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-left">
        <Col lg={2} className="text-lg-center">
          <Col md={12} className="text-center">
            <Image
              className={styles.ProfileImage}
              roundedCircle
              src={profile?.image}
            />
          </Col>

          <Col md={12} className="text-center mb-5">
            {currentUser &&
              !is_owner &&
              (profile?.following_id ? (
                <Button
                  className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                  onClick={() => {}}
                >
                  Unfollow
                </Button>
              ) : (
                <Button className={styles.Button} onClick={() => {}}>
                  to Faves
                </Button>
              ))}
          </Col>
        </Col>
        <Col lg={10}>
          <h3 className="ml-3">{profile?.name}</h3>
          {profile?.bio && <Col className="p-3">{profile.bio}</Col>}
          <Row className="justify-content-center no-gutters text-center">
            <Col lg={5} className="text-left p-3">
              <div className={styles.profileBody}>
                <p>HOME COUNTRY: {profile?.home_country}</p>
                <p>GENDER: {profile?.gender}</p>
                <p>
                  DATE OF BIRTH:{" "}
                  {new Date(profile?.birthdate).toLocaleDateString()}
                </p>
                <p>E-MAIL: {profile?.email}</p>
              </div>
            </Col>
            <Col lg={2} md={4} xs={4} className="my-2">
              <div>paintings</div>
              <div>{profile?.paintings_count}</div>
            </Col>
            <Col lg={2} md={4} xs={4} className="my-2">
              <div>followers</div>
              <div>{profile?.followers_count}</div>
            </Col>
            <Col lg={2} md={4} xs={4} className="my-2">
              <div>faves</div>
              <div>{profile?.following_count}</div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right"></Col>
      </Row>
    </>
  );

  const mainProfilePaintings = (
    <>
      <h4 className="text-left p-4 ml-4">AVAILABLE ARTWORKS:</h4>
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <Container className={appStyles.Content}>
          {hasLoaded ? <>{mainProfile}</> : <Asset spinner />}
        </Container>
        {mainProfilePaintings}
      </Col>
    </Row>
  );
}

export default ProfilePage;
