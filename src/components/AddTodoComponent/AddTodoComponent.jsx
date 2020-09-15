import React from "react";
import AddTodoForm from "../ui-kit/AddTodoBtn/AddTodoForm";
import {Row, Col} from "antd";


const AddTodoComponent = ({addNewTodo}) => {
    return (

        <AddTodoForm addNewTodo={addNewTodo}/>


    );
}


export default AddTodoComponent;