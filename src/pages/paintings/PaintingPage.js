import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import PaintingDetail from "./PaintingDetail";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

import { useCurrentUserProfile } from "../../hooks/useCurrentUserProfile";
import { Redirect } from "react-router-dom";

/**
 * PaintingPage displays details for a specific painting along with its
 * comments.
 * It allows authenticated users with a completed profile to post new
 * comments and supports infinite scrolling for existing comments.
 * The component handles fetching data for the painting and its comments
 * using the painting ID from the URL parameters.
 * Errors in fetching, like 404 responses, redirect the user to a not
 * found page.
 * Rendering varies based on user authentication status and profile
 * completion, enhancing user interaction based on their state.
 */
function PaintingPage() {
  const { profileCompleted } = useCurrentUserProfile();

  const { id } = useParams();
  const [painting, setPainting] = useState({
    results: [],
  });
  const [notFound, setNotFound] = useState(false);

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        // Attempt to fetch data using axios
        const [{ data: painting }, { data: comments }] = await Promise.all([
          axiosReq.get(`/paintings/${id}`),
          axiosReq.get(`/comments/?painting=${id}`),
        ]);
        // Update state with the fetched painting data
        setPainting({ results: [painting] });
        setComments(comments);
      } catch (err) {
        if (err.response.status === 400 || err.response.status === 404) {
          setNotFound(true);
        } else {
          console.error(err);
        }
      }
    };
    handleMount(); // Execute the async function immediately
  }, [id]);

  return notFound ? (
    <Redirect to="/404" />
  ) : (
    <>
      <Row className="h-100">
        {/* {...painting.results[0]} "unpacks" the properties of the first painting object in the array and passes them as individual props to the Painting component */}
        <PaintingDetail
          {...painting.results[0]}
          setPaintings={setPainting}
          artistName={painting.results[0]?.artist_name}
          paintingPage
        />
        <Col className="py-2 p-0 p-lg-2 mb-3" lg={8}>
          <Container className={appStyles.Content}>
            {currentUser && profileCompleted ? (
              <CommentCreateForm
                profile_id={currentUser.profile_id}
                profileImage={profile_image}
                painting={id}
                setPainting={setPainting}
                setComments={setComments}
              />
            ) : comments.results.length ? (
              "Comments"
            ) : null}
            {comments.results.length ? (
              <InfiniteScroll
                children={comments.results.map((comment) => (
                  <Comment
                    key={comment.id}
                    {...comment}
                    setPainting={setPainting}
                    setComments={setComments}
                  />
                ))}
                dataLength={comments.results.length}
                loader={<Asset spinner />}
                hasMore={!!comments.next}
                next={() => fetchMoreData(comments, setComments)}
              />
            ) : currentUser && profileCompleted ? (
              <span>No comments yet. Be the first to comment</span>
            ) : currentUser && !profileCompleted ? (
              <span>No comments yet.</span>
            ) : (
              <span>No comments yet</span>
            )}
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default PaintingPage;
