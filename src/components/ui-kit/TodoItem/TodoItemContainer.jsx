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
import formValueSelector from "redux-form/lib/formValueSelector";

const TodoItemContainer = (props) => {
  const handleSubmit = (formData) => {
    props.toggleEditMode(props.id);
  };

  return <TodoItem {...props} onSubmit={handleSubmit} />;
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
