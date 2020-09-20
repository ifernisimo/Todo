import React from "react";
import styles from "./TodoItem.module.css";
import { Field, reduxForm, Form, change, getFormValues } from "redux-form";
import { connect } from "react-redux";

class TodoItem extends React.Component {
  componentDidMount() {
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
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <div className={styles.todoBlock}>
          <div className={styles.titleRow} justify="space-around">
            {!this.props.editMode ? (
              <div className={styles.titleRowTitle}>{this.props.title}</div>
            ) : (
              <Field
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
                onClick={() => {
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
