import { connect } from "react-redux";
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
      !nextId ? 1 : nextId,
      !formData.taskTitle ? "No title" : formData.taskTitle,
      !formData.taskDescription ? "No description" : formData.taskDescription,
      !formData.prioritySelector ? 1 : formData.prioritySelector
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
