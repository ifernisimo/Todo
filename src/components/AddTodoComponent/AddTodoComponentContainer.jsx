import { connect } from "react-redux";
import React from "react";
import { compose } from "redux";
import { addNewTodo } from "../../store/reducers/todo-reducer";
import AddTodoFormRedux from "../ui-kit/AddTodoForm/AddTodoForm";

const AddTodoComponentContainer = ({ addNewTodo }) => {
  const onSubmit = (formData) => {
    console.log(
      `${formData.taskTitle} ${formData.taskDescription} ${formData.prioritySelector}`
    );
    addNewTodo(
      formData.taskTitle,
      formData.taskDescription,
      !formData.prioritySelector && 1
    );
  };
  return <AddTodoFormRedux onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({});

export default compose(connect(mapStateToProps, { addNewTodo }))(
  AddTodoComponentContainer
);
