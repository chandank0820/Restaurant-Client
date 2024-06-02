import React from "react";
import styles from "./DeleteFeedbackPopup.module.css"; // Make sure to create this CSS file

const DeleteFeedbackPopup = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.popup_overlay}>
      <div className={styles.popup}>
        <h2>Are you sure?</h2>
        <p>Do you want to delete your feedback?</p>
        <div className={styles.popup_actions}>
          <button onClick={onDelete} className={styles.delete_btn}>
            Yes, Delete
          </button>
          <button onClick={onClose} className={styles.cancel_btn}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteFeedbackPopup;
