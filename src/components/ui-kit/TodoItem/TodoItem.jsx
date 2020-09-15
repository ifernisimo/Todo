import React from "react";
import {Row, Col} from "antd";
import styles from "./TodoItem.module.css";
import {Button} from "antd";

const TodoItem = (props) => {
    return (

        <div className={styles.todoBlock}>
            <Row className={styles.titleRow} justify="space-around">
                <Col>
                    {props.title}
                </Col>
                <Col>
                    <Button>
                        Edit
                    </Button>
                </Col>

            </Row>

            <Row className={styles.descriptionRow}>
                <Col>
                    {props.description}
                </Col>

            </Row>
            <Row className={styles.changeStateButtons} justify="space-around">
                <Col >
                    <button> back</button>
                </Col>
                <Col>
                    <span>{props.priority}</span>
                </Col>
                <Col>
                    <button> next</button>
                </Col>

            </Row>
        </div>

    );
}

export default TodoItem;