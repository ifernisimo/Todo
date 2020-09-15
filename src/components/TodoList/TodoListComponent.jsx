import React from "react";
import styles from './TodoComponent.module.css';
import TodoItem from "../ui-kit/TodoItem/TodoItem";

const TodoListComponent = ({ todoArray}) => {
    let listOfTodo = todoArray.map((todo, idx)=>(
        <TodoItem title={todo.title} description={todo.description} priority={todo.priority} key={idx}/>
    ))


    return (
        <div className={styles.border}>
            <h1>TODOS</h1>

            <div>
                {listOfTodo}
            </div>
        </div>
    );
}

export default  TodoListComponent