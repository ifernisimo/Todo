import React from "react";
import styles from "./TodoItem.module.css";
import { Field, reduxForm, Form, change, getFormValues } from "redux-form";
import { connect } from "react-redux";
import trashIcon from "../../../assets/images/trashIcon.svg";

import editIcon from "../../../assets/images/editIcon.svg";

import arrow from "../../../assets/images/arrow.svg";

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

  onClickEditMode = (id, title, description) => {
    this.props.toggleEditMode(id);
    this.props.syncTodoObjects(id, title, description);
    this.handleSomething();
  };

  onChangeTextarea = (id) => {
    let currentTitle = "editTitle" + id;
    let currentDescription = "editDescription" + id;
    this.props.syncTodoObjects(
      this.props.id,
      this.props.formStates[currentTitle],
      this.props.formStates[currentDescription]
    );
  };

  onClickToNextList = (id) => {
    this.props.moveToPrevList(id);
    this.handleSomething();
  };

  onClickToPrevList = (id) => {
    this.props.moveToNextList(id);
    this.handleSomething();
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
                  this.props.onChangeSyncFields(this.props.id);
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
                <img src={trashIcon} alt="Delete Task" />
              </button>
            </div>
            <div>
              <button
                type={"button"}
                onClick={() => {
                  this.onClickEditMode(
                    this.props.id,
                    this.props.title,
                    this.props.description
                  );
                }}
                className={styles.penBtn}
              >
                <img src={editIcon} alt="Edit Task" />
              </button>
            </div>
          </div>

          <div className={styles.descriptionRow}>
            {!this.props.editMode ? (
              <p>{this.props.description}</p>
            ) : (
              <Field
                onChange={() => {
                  this.onChangeTextarea(this.props.id);
                }}
                className={styles.taskTextarea}
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
                    this.onClickToNextList(this.props.id);
                  }}
                >
                  <img
                    className={styles.prevListIcon}
                    src={arrow}
                    alt="Prev list"
                  />
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
                    this.onClickToPrevList(this.props.id);
                  }}
                >
                  <img
                    className={styles.nextListIcon}
                    src={arrow}
                    alt="Next list"
                  />
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
