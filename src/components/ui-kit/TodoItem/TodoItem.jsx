import React from "react";
import styles from "./TodoItem.module.css";
import {
  Field,
  reduxForm,
  Form,
  change,
  getFormValues,
  initialize,
} from "redux-form";
import { connect } from "react-redux";

class TodoItem extends React.Component {
  handleSomething = () => {
    this.props.dispatch(
      change("editTodo", "editTitle" + this.props.id, this.props.title)
    );
    this.props.dispatch(
      change(
        "editTodo",
        "editDescription" + this.props.id,
        this.props.description
      )
    );
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
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
                type={"button"}
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
                type={"button"}
                onClick={() => {
                  this.props.toggleEditMode(this.props.id);
                  this.props.syncTodoObjects(
                    this.props.id,
                    this.props.title,
                    this.props.description
                  );
                  this.handleSomething();
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
              {this.props.positionStatus >= 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.moveToPrevList(this.props.id);
                    this.handleSomething();
                  }}
                >
                  {" "}
                  {"<"}{" "}
                </button>
              )}
            </div>
            <div className={styles.priority}>
              <span>{this.props.priority}</span>
            </div>
            <div>
              {this.props.positionStatus <= 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.moveToNextList(this.props.id);
                    this.handleSomething();
                  }}
                >
                  {" "}
                  {">"}{" "}
                </button>
              )}
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
