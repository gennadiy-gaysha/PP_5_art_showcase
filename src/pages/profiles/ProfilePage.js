import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Painting from "../paintings/PaintingList";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no_results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import { useCurrentUserProfile } from "../../hooks/useCurrentUserProfile";
import { useHistory } from "react-router-dom";

function ProfilePage() {
  const { profileCompleted } = useCurrentUserProfile();
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const [profilePaintings, setProfilePaintings] = useState({ results: [] });
  const is_owner = currentUser?.username === profile?.owner;
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePaintings }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/paintings/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePaintings(profilePaintings);
        setHasLoaded(true);
      } catch (err) {
        if (
          err.response &&
          (err.response.status === 404 || err.response.status === 400)
        ) {
          history.push("/404");
        } else {
          console.log(err);
        }
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-left">
        <Col lg={2} className="text-lg-center">
          <Col md={12} className="text-center mb-1">
            <Image
              className={styles.ProfileImage}
              roundedCircle
              src={profile?.image}
            />
          </Col>

          <Col md={12} className="text-center mb-5">
            {currentUser &&
              !is_owner &&
              profileCompleted &&
              (profile?.following_id ? (
                <Button
                  className={styles.ButtonUnfollow}
                  onClick={() => handleUnfollow(profile)}
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  className={styles.ButtonFollow}
                  onClick={() => handleFollow(profile)}
                >
                  to Faves
                </Button>
              ))}
          </Col>
        </Col>
        <Col lg={10}>
          <h3 className="ml-3">{profile?.name || profile?.owner}</h3>
          {profile?.bio && <Col className="p-3">{profile.bio}</Col>}
          <Row className="justify-content-center no-gutters text-center">
            <Col lg={5} className="text-left p-3">
              <div className={styles.profileBody}>
                <p>HOME COUNTRY: {profile?.home_country || "N/A"}</p>
                <p>GENDER: {profile?.gender || "N/A"}</p>
                <p>
                  DATE OF BIRTH:{" "}
                  {profile?.birthdate
                    ? new Intl.DateTimeFormat("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }).format(new Date(profile.birthdate))
                    : "N/A"}
                </p>
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
      {profilePaintings.results.length ? (
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          children={
            <Row>
              {profilePaintings.results.map((painting) => (
                <Col sm={12} md={6} lg={4} className="mb-3" key={painting.id}>
                  <Painting
                    key={painting.id}
                    {...painting}
                    setPosts={setProfilePaintings}
                  />
                </Col>
              ))}
            </Row>
          }
          dataLength={profilePaintings.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePaintings.next}
          next={() => fetchMoreData(profilePaintings, setProfilePaintings)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't displayed paintings yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={12}>
        <Container>
          {hasLoaded ? (
            <>
              <div className={appStyles.Content}>{mainProfile}</div>
              {mainProfilePaintings}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default ProfilePage;
