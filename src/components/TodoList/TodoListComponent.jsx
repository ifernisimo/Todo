import React from "react";
import styles from './TodoComponent.module.css';
import AddTodoBtn from "../ui-kit/AddTodoBtn/AddTodoBtn";
import TodoItem from "../ui-kit/TodoItem/TodoItem";

const TodoListComponent = (props) => {
    let listOfTodo = props.todoArray.map((todo, idx)=>(
        <TodoItem title={todo.title} description={todo.description} priority={todo.priority} key={idx}/>
    ))


    return (
        <div className={styles.border}>
            <h1>TODOS</h1>
            <AddTodoBtn addNewTodo={props.addNewTodo}/>
            <div>
                {listOfTodo}
            </div>
        </div>
    );
}

export default  TodoListComponent