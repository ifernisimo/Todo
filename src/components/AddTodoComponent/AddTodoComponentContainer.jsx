import { connect, useDispatch } from "react-redux";
import React from "react";
import { compose } from "redux";
import { addNewTodo, setLastTaskId } from "../../store/reducers/todo-reducer";
import AddTodoFormRedux from "../ui-kit/AddTodoForm/AddTodoForm";

const AddTodoComponentContainer = ({
  addNewTodo,
  lastTaskId,
  setLastTaskId,
}) => {
  const onSubmit = (formData) => {
    const nextId = lastTaskId + 1;
    setLastTaskId(nextId);
    addNewTodo(
      nextId,
      formData.taskTitle,
      formData.taskDescription,
      formData.prioritySelector && 1
    );
  };

  return <AddTodoFormRedux onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
  lastTaskId: state.todo.lastTaskId,
});

export default compose(connect(mapStateToProps, { addNewTodo, setLastTaskId }))(
  AddTodoComponentContainer
);
