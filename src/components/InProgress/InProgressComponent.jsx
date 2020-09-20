import React from "react";
import styles from "./InProgressComponent.module.css";
import TodoItemEditFormContainer from "../ui-kit/TodoItem/TodoItemEditFormContainer";
import TodoItemContainer from "../ui-kit/TodoItem/TodoItemContainer";

const InProgressComponent = (props) => {
  let listOfTodo = props.todoArray.map(
    (todo, idx) =>
      todo.positionStatus === 1 && (
        <TodoItemContainer
          title={todo.title}
          description={todo.description}
          priority={todo.priority}
          id={todo.id}
          key={idx}
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
