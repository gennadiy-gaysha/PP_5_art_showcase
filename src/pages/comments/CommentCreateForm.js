import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

/**
 * CommentCreateForm provides an interface for users to create
 * new comments on a painting.
 * It displays a text input for writing comments and an avatar
 * that links to the user's profile.
 * The form handles comment submission to the server, manages
 * local state updates for the comment count on the painting,
 * and dynamically adjusts the comments list.
 * Success and error notifications inform the user of the outcome
 * of their submission. The form ensures immediate visual feedback
 * by resetting the input field upon successful comment creation.
 */
function CommentCreateForm(props) {
  const { painting, setPainting, setComments, profileImage, profile_id } =
    props;
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        painting,
      });
      NotificationManager.success(
        "The comment has been successfully created.",
        "Success!"
      );
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPainting((prevPainting) => ({
        results: [
          {
            ...prevPainting.results[0],
            comments_count: prevPainting.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      console.log(err);
      NotificationManager.error(
        "Failed to create the comment. Please check your input and try again.",
        "Error!",
        5000
      );
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group controlId="commentTextarea">
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Label className="sr-only">Write a comment</Form.Label>
          <Form.Control
            className={styles.Form}
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        // disabled={!content.trim()}
        type="submit"
      >
        submit
      </button>
    </Form>
  );
}

export default CommentCreateForm;
