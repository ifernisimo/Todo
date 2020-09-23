import React from "react";
import styles from "./TodoItem.module.css";
import {
  Field,
  reduxForm,
  Form,
  change,
  getFormValues,
  stopSubmit,
  autofill,
} from "redux-form";
import { connect } from "react-redux";
import handleSubmit from "redux-form/lib/handleSubmit";

class TodoItem extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      autofill("editTodo", "editTitle" + this.props.id, this.props.title)
    );
    this.props.dispatch(
      autofill(
        "editTodo",
        "editDescription" + this.props.id,
        this.props.description
      )
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <div className={styles.todoBlock}>
          <div className={styles.titleRow} justify="space-around">
            {!this.props.editMode ? (
              <div className={styles.titleRowTitle}>{this.props.title}</div>
            ) : (
              <Field
                onChange={() => {
                  let currentTitle = "editTitle" + this.props.id;
                  let currentDescription = "editDescription" + this.props.id;
                  console.log(this.props);
                  this.props.syncTodoObjects(
                    this.props.id,
                    this.props.formStates[currentTitle],
                    this.props.formStates[currentDescription]
                  );
                }}
                type={"text"}
                name={"editTitle" + this.props.id}
                component={"input"}
              />
            )}

            <div>
              <button
                onClick={() => {
                  this.props.deleteTodo(this.props.id);
                }}
                className={styles.trashBtn}
              >
                Tr
              </button>
            </div>
            <div>
              <button
                type={"submit"}
                onClick={() => {
                  this.props.syncTodoObjects(
                    this.props.id,
                    this.props.title,
                    this.props.description
                  );
                }}
                className={styles.penBtn}
              >
                Ed
              </button>
            </div>
          </div>

          <div className={styles.descriptionRow}>
            {!this.props.editMode ? (
              <p>{this.props.description}</p>
            ) : (
              <Field
                onChange={() => {
                  let currentTitle = "editTitle" + this.props.id;
                  let currentDescription = "editDescription" + this.props.id;
                  console.log(this.props);
                  this.props.syncTodoObjects(
                    this.props.id,
                    this.props.formStates[currentTitle],
                    this.props.formStates[currentDescription]
                  );
                }}
                type={"text"}
                name={"editDescription" + this.props.id}
                component={"textarea"}
              />
            )}
          </div>
          <div className={styles.changeStateButtons} justify="space-around">
            <div>
              <button
                onClick={() => {
                  this.props.moveToPrevList(this.props.id);
                }}
              >
                {" "}
                {"<"}{" "}
              </button>
            </div>
            <div className={styles.priority}>
              <span>{this.props.priority}</span>
            </div>
            <div>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  this.props.moveToNextList(this.props.id);
                }}
              >
                {" "}
                {">"}{" "}
              </button>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  formStates: getFormValues("editTodo")(state),
});

export default connect(
  mapStateToProps,
  {}
)(
  reduxForm({
    form: "editTodo",
  })(TodoItem)
);
