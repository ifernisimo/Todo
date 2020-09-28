import React from "react";
import TodoItem from "./TodoItem";
import { getFormValues } from "redux-form";
import { connect } from "react-redux";
import {
  deleteTodo,
  moveToNextList,
  moveToPrevList,
  syncTodoObjects,
  toggleEditMode,
} from "../../../store/reducers/todo-reducer";

const TodoItemContainer = (props) => {
  const handleSubmit = (formData) => {
    props.toggleEditMode(props.id);
  };

  const onChangeSyncFields = (id) => {
    let currentTitle = "editTitle" + id;
    let currentDescription = "editDescription" + id;
    props.syncTodoObjects(
      id,
      props.formStates[currentTitle],
      props.formStates[currentDescription]
    );
  };

  return (
    <TodoItem
      {...props}
      onSubmit={handleSubmit}
      onChangeSyncFields={onChangeSyncFields}
    />
  );
};

const mapStateToProps = (state) => ({
  formStates: getFormValues("editTodo")(state),
});

export default connect(mapStateToProps, {
  deleteTodo,
  syncTodoObjects,
  toggleEditMode,
  moveToNextList,
  moveToPrevList,
})(TodoItemContainer);
