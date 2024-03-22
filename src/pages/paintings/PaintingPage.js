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

function PaintingPage() {
  const { id } = useParams();
  const [painting, setPainting] = useState({
    results: [],
  });

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
        console.log(err);
      }
    };
    handleMount(); // Execute the async function immediately
  }, [id]);

  return (
    <>
      <Row className="h-100">
        {/* {...painting.results[0]} "unpacks" the properties of the first painting object in the array and passes them as individual props to the Painting component */}
        <PaintingDetail
          {...painting.results[0]}
          setPaintings={setPainting}
          paintingPage
        />
        <Col className="py-2 p-0 p-lg-2" lg={8}>
          <Container className={appStyles.Content}>
            {currentUser ? (
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
              comments.results.map((comment) => (
                <Comment key={comment.id} {...comment} />
              ))
            ) : currentUser ? (
              <span>No comments yet. Be the first to comment</span>
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
