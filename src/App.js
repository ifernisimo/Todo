import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import DoneComponent from "./components/Done/DoneComponent";
import InProgressComponent from "./components/InProgress/InProgressComponent";
import TodoListComponentContainer from "./components/TodoList/TodoListComponentContainer";
import AddTodoComponentContainer from "./components/AddTodoComponent/AddTodoComponentContainer";
import InProgressComponentContainer from "./components/InProgress/InProgressComponentContainer";

function App() {
  return (
    <>
      <AddTodoComponentContainer />
      <div className="wrapper">
        <TodoListComponentContainer />

        <InProgressComponentContainer />

        <DoneComponent />
      </div>
    </>
  );
}

export default App;
