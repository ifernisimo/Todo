import React from "react";
import styles from "./DoneComponent.module.css";
import TodoItemContainer from "../ui-kit/TodoItem/TodoItemContainer";

const DoneComponent = ({ todoArray }) => {
  let listOfTodo = todoArray.map(
    (todo) =>
      todo.positionStatus === 2 && (
        <TodoItemContainer
          title={todo.title}
          description={todo.description}
          priority={todo.priority}
          id={todo.id}
          editMode={todo.editMode}
          key={todo.id}
          positionStatus={todo.positionStatus}
        />
      )
  );

  return (
    <div className={styles.doneBlock}>
      <h1>Завершенные</h1>
      <hr />
      {listOfTodo}
    </div>
  );
};

export default DoneComponent;
