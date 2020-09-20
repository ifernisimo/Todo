import { connect } from "react-redux";
import { compose } from "redux";
import React from "react";
import InProgressComponent from "./InProgressComponent";
import { initialize } from "redux-form";

let mapStateToProps = (state) => {
  return {
    todoArray: state.todo.todoArray,
    editMode: state.todo.editMode,
  };
};

const InProgressComponentContainer = compose(connect(mapStateToProps, {}))(
  InProgressComponent
);

export default InProgressComponentContainer;
