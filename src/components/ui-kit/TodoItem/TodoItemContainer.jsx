import React from "react";
import TodoItem from "./TodoItem";

import { connect } from "react-redux";
import { deleteTodo } from "../../../store/reducers/todo-reducer";

const TodoItemContainer = (props) => {
  return <TodoItem {...props} />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteTodo })(TodoItemContainer);
