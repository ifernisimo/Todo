import React from "react";
import styles from "./InProgressComponent.module.css";

const InProgressComponent = (props) => {
  return (
    <div className={styles.inProgressBlock}>
      <h1>В работе</h1>
    </div>
  );
};

export default InProgressComponent;
