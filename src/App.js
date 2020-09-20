import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import TodoListComponentContainer from "./components/TodoList/TodoListComponentContainer";
import AddTodoComponentContainer from "./components/AddTodoComponent/AddTodoComponentContainer";
import InProgressComponentContainer from "./components/InProgress/InProgressComponentContainer";
import DoneComponentContainer from "./components/Done/DoneComponentContainer";

function App() {
  return (
    <>
      <AddTodoComponentContainer />
      <div className="wrapper">
        <TodoListComponentContainer />

        <InProgressComponentContainer />

        <DoneComponentContainer />
      </div>
    </>
  );
}

export default App;
