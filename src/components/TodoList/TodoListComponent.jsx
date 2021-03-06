import React from "react";
import styles from "./TodoComponent.module.css";
import TodoItemContainer from "../ui-kit/TodoItem/TodoItemContainer";

const TodoListComponent = ({ todoArray }) => {
  let listOfTodo = todoArray.map(
    (todo) =>
      todo.positionStatus === 0 && (
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
    <div className={styles.todoBlock}>
      <h1>Новые задачи</h1>
      <hr style={{ width: "90%" }} />
      <div>{listOfTodo}</div>
    </div>
  );
};

export default TodoListComponent;
