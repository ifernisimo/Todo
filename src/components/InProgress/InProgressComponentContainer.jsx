import { connect } from "react-redux";
import { compose } from "redux";
import React from "react";
import InProgressComponent from "./InProgressComponent";
import { initialize } from "redux-form";

const InProgressComponentContainer = (props) => {
  return <InProgressComponent {...props} />;
};

let mapStateToProps = (state) => {
  return {
    todoArray: state.todo.todoArray,
    editMode: state.todo.editMode,
  };
};

export default compose(connect(mapStateToProps, {}))(
  InProgressComponentContainer
);
