import React from "react";
import styles from "./DoneComponent.module.css";
import TodoItemContainer from "../ui-kit/TodoItem/TodoItemContainer";

const DoneComponent = (props) => {
  let listOfTodo = props.todoArray.map(
    (todo, idx) =>
      todo.positionStatus === 2 && (
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
    <div className={styles.doneBlock}>
      <h1>В работе</h1>
      <hr />
      {listOfTodo}
    </div>
  );
};

export default DoneComponent;
