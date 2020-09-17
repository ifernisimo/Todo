import React from "react";
import styles from "./AddTodoForm.module.css";
import { Field, reduxForm, Form } from "redux-form";

const AddTodoForm = (props) => {
  const priorityLevelsOption = [1, 2, 3, 4, 5].map((level) => (
    <option value={level} key={level}>
      {level}
    </option>
  ));
  return (
    <Form onSubmit={props.handleSubmit}>
      <div className={styles.addNewTodoBlock}>
        <div className={styles.titleColumn}>
          <span>Создать</span>
          <span>новую задачу</span>
        </div>
        <div className={styles.formColumn}>
          <div className={styles.nameAndPriorityRow}>
            <Field
              type={"text"}
              name={"taskTitle"}
              component={"input"}
              placeholder={"Название задачи..."}
            />

            <Field type={"text"} name={"prioritySelector"} component={"select"}>
              {priorityLevelsOption}
            </Field>
          </div>

          <Field
            type={"text"}
            name={"taskDescription"}
            component={"textarea"}
            className={styles.textArea}
            placeholder={"Описание задачи..."}
          />

          <button className={styles.addBtn}>Добавить</button>
        </div>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: "createdTodo",
})(AddTodoForm);
