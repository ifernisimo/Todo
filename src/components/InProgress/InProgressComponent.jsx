import React from "react";
import styles from "./InProgressComponent.module.css";
import TodoItemEditFormContainer from "../ui-kit/TodoItem/TodoItemEditFormContainer";

const InProgressComponent = (props) => {
  return (
    <div className={styles.inProgressBlock}>
      <h1>В работе</h1>
      <hr />
    </div>
  );
};

export default InProgressComponent;
