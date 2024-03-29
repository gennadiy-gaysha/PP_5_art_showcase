import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span className={styles.AvatarContainer}>
      <img
        src={src}
        className={styles.Avatar}
        height={height}
        width={height}
        alt="avatar"
      />
      <span className={styles.Username}>{text}</span>
    </span>
  );
};

export default Avatar;
