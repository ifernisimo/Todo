import React from "react";
import { connect } from "react-redux";
import AddTodoForm from "./AddTodoForm";
import { compose } from "redux";

const mapDispatchToProps = (state) => ({});

const AddTodoFormContainer = compose(connect(mapDispatchToProps, {}))(
  AddTodoForm
);
export default AddTodoFormContainer;
