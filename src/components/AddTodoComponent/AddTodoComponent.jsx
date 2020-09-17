import React from "react";
import AddTodoForm from "../ui-kit/AddTodoForm/AddTodoForm";
import { Row, Col } from "antd";

const AddTodoComponent = ({ addNewTodo }) => {
  return <AddTodoForm addNewTodo={addNewTodo} handleDeleteBtn={onDeleteBtn} />;
};

export default AddTodoComponent;
