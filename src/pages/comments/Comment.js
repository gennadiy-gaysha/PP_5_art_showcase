import styles from "../../styles/Comment.module.css";
import { Media } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";
import React, { useState } from "react";
import CommentEditForm from "./CommentEditForm";
import ModalAlertDeleteComment from "../../components/ModalAlertDeleteComment";

import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

const Comment = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setPainting,
    setComments,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);

  const currentUser = useCurrentUser();
  // checks if currently logged in user (currentUser?.username) is the
  // owner of the painting (owner):
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}`);
      NotificationManager.success(
        "The comment has been successfully deleted.",
        "Deleted"
      );
      setPainting((prevPainting) => ({
        results: [
          {
            ...prevPainting.results[0],
            comments_count: prevPainting.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
      // Hide modal after confirmation
      setModalShow(false);
    } catch (err) {
      console.log(err);
      NotificationManager.error(
        "Failed to delete the comment. Please try again.",
        "Deletion Failed",
        5000
      );
    }
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <>
            <MoreDropdown
              handleEdit={() => setShowEditForm(true)}
              // Show the modal:
              modalShow={() => setModalShow(true)}
            />
            <ModalAlertDeleteComment
              show={modalShow}
              onHide={() => setModalShow(false)}
              onConfirm={handleDelete}
            />
          </>
        )}
      </Media>
    </>
  );
};

export default Comment;
