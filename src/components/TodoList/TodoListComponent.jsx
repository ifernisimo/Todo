import React from "react";
import styles from "./TodoComponent.module.css";
import TodoItemContainer from "../ui-kit/TodoItem/TodoItemContainer";
import TodoItemEditFormContainer from "../ui-kit/TodoItem/TodoItemEditFormContainer";
import TodoItemEditForm from "../ui-kit/TodoItem/TodoItemEditForm";

const TodoListComponent = ({ todoArray, editMode }) => {
  let listOfTodo = todoArray.map((todo, idx) => (
    // <TodoItemContainer
    //   title={todo.title}
    //   description={todo.description}
    //   priority={todo.priority}
    //   id={todo.id}
    //   key={idx}
    // />

    <TodoItemEditForm
      title={todo.title}
      description={todo.description}
      priority={todo.priority}
      id={todo.id}
      key={idx}
    />
  ));

  return (
    <div className={styles.todoBlock}>
      <h1>Новые задачи</h1>
      <hr style={{ width: "90%" }} />
      <div>{listOfTodo}</div>
    </div>
  );
};

export default TodoListComponent;
