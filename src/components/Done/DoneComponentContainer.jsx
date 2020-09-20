import { connect } from "react-redux";
import { compose } from "redux";
import React from "react";
import DoneComponent from "./DoneComponent";

let mapStateToProps = (state) => {
  return {
    todoArray: state.todo.todoArray,
    editMode: state.todo.editMode,
  };
};

const DoneComponentContainer = compose(connect(mapStateToProps, {}))(
  DoneComponent
);
export default DoneComponentContainer;
