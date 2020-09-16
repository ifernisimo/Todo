import React from "react";
import styles from "./TodoItem.module.css";
const TodoItem = (props) => {
  return (
    <div className={styles.todoBlock}>
      <div className={styles.titleRow} justify="space-around">
        <div className={styles.titleRowTitle}>{props.title}</div>
        <div>
          <button className={styles.trashBtn}>Tr</button>
        </div>
        <div>
          <button className={styles.penBtn}>Ed</button>
        </div>
      </div>

      <div className={styles.descriptionRow}>
        <div>{props.description}</div>
      </div>
      <div className={styles.changeStateButtons} justify="space-around">
        <div>
          <button> {"<"} </button>
        </div>
        <div className={styles.priority}>
          <span>{props.priority}</span>
        </div>
        <div>
          <button> {">"} </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
