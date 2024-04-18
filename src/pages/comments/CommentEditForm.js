import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/CommentCreateEditForm.module.css";

import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

/**
 * CommentEditForm allows users to edit an existing comment. It
 * displays a textarea populated with the current comment content,
 * enabling users to make changes and submit them. On successful
 * update, it notifies the user, updates the comment's content in
 * the comment list state without reloading the page, and toggles
 * off the edit form view.
 * Errors during the update process trigger notifications advising
 * the user of the failure. The form also includes a cancel button
 * to revert back to the normal view without changes.
 */
function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments } = props;

  const [formContent, setFormContent] = useState(content);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });
      NotificationManager.success(
        "The comment has been successfully updated.",
        "Success!"
      );
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
      NotificationManager.error(
        "Failed to update the comment. Please check your input and try again.",
        "Error!",
        5000
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!content.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default CommentEditForm;
