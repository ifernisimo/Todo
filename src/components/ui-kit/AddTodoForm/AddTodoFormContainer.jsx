import React from "react";
import { connect } from "react-redux";
import AddTodoForm from "./AddTodoForm";
import { compose } from "redux";
import { syncTodoObjects } from "../../../store/reducers/todo-reducer";

const AddTodoFormContainer = (props) => {
  // const onSubmit = (formData) => {
  //   console.log(formData);
  //   syncTodoObjects(todoId, newTitle, newDescription);
  // };
  return <AddTodoForm />;
};

const mapDispatchToProps = (state) => ({});

export default compose(connect(mapDispatchToProps, { syncTodoObjects }))(
  AddTodoFormContainer
);
