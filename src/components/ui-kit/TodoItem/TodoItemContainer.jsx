import React from "react";
import TodoItem from "./TodoItem";

import { connect } from "react-redux";
import {
  deleteTodo,
  switchEditMode,
} from "../../../store/reducers/todo-reducer";

const TodoItemContainer = (props) => {
  const handleSubmit = (formData) => {};
  return <TodoItem {...props} onSubmit={handleSubmit} />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteTodo, switchEditMode })(
  TodoItemContainer
);
