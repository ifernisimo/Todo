import { connect } from "react-redux";
import TodoListComponent from "./TodoListComponent";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    todoArray: state.todo.todoArray,
  };
};

const TodoListComponentContainer = compose(connect(mapStateToProps, {}))(
  TodoListComponent
);

export default TodoListComponentContainer;
