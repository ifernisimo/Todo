import React from "react";
import {connect} from "react-redux";
import TodoListComponent from "./TodoListComponent";
import {compose} from "redux";
import {addNewTodo} from "../../store/reducers/todo-reducer";


const handleAddNewTodo = () => {

}


let mapStateToProps = (state) => {
    return {
        todoArray: state.todo.todoArray
    }
}






const TodoListComponentContainer = compose(connect(mapStateToProps, {addNewTodo}))(TodoListComponent);

export default  TodoListComponentContainer;