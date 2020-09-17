import { connect } from "react-redux";
import TodoListComponent from "./TodoListComponent";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    todoArray: state.todo.todoArray,
    editMode: state.todo.editMode,
  };
};

const TodoListComponentContainer = compose(connect(mapStateToProps, {}))(
  TodoListComponent
);

export default TodoListComponentContainer;
