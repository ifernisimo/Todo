import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import DoneComponent from "./components/Done/DoneComponent";
import InProgressComponent from "./components/InProgress/InProgressComponent";
import { Row, Col } from "antd";
import TodoListComponentContainer from "./components/TodoList/TodoListComponentContainer";
import AddTodoComponentContainer from "./components/AddTodoComponent/AddTodoComponentContainer";

function App() {
  return (
    <>
      <AddTodoComponentContainer />
      <Row justify="space-around">
        <Col span={6}>
          <TodoListComponentContainer />
        </Col>

        <Col span={6}>
          <InProgressComponent />
        </Col>

        <Col span={6}>
          <DoneComponent />
        </Col>
      </Row>
    </>
  );
}

export default App;
