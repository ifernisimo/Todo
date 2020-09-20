import { connect } from "react-redux";
import { compose } from "redux";
import InProgressComponent from "./InProgressComponent";

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
