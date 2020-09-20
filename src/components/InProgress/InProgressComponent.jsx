import React from "react";
import styles from "./InProgressComponent.module.css";
import TodoItemContainer from "../ui-kit/TodoItem/TodoItemContainer";

const InProgressComponent = ({ todoArray }) => {
  let listOfTodo = todoArray.map(
    (todo, idx) =>
      todo.positionStatus === 1 && (
        <TodoItemContainer
          title={todo.title}
          description={todo.description}
          priority={todo.priority}
          id={todo.id}
          editMode={todo.editMode}
          key={todo.id}
        />
      )
  );

  return (
    <div className={styles.inProgressBlock}>
      <h1>В работе</h1>
      <hr style={{ width: "90%" }} />
      {listOfTodo}
    </div>
  );
};

export default InProgressComponent;
