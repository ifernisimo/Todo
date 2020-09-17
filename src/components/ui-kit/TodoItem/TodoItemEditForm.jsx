import React from "react";
import styles from "./TodoItem.module.css";

import { Field, reduxForm, Form } from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";

const TodoItemEditForm = (props) => {
  console.log(props);
  const val = props.title;
  return (
    <Form onSubmit={handleSubmit}>
      <div className={styles.todoBlock}>
        <div className={styles.titleRow} justify="space-around">
          <Field
            className={styles.titleRowTitle}
            name={"titleEdit"}
            type={"text"}
            value={val}
            component={"input"}
          />
          <div>
            <button
              onClick={() => {
                props.deleteTodo(props.id);
              }}
              className={styles.trashBtn}
            >
              Tr
            </button>
          </div>
          <div>
            <button className={styles.penBtn}>Ed</button>
          </div>
        </div>

        <Field
          value={props.description}
          name={"descriptionEdit"}
          className={styles.descriptionRow}
          component={"textarea"}
        />
        <div className={styles.changeStateButtons} justify="space-around">
          <div>
            <button disabled={true}> {"<"} </button>
          </div>
          <div className={styles.priority}>
            <span>{props.priority}</span>
          </div>
          <div>
            <button disabled={true}> {">"} </button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: "editTodo",
})(TodoItemEditForm);
