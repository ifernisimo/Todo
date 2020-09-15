import React from "react";
import {Row, Col, Button} from "antd";
import { PlusCircleOutlined } from '@ant-design/icons';
import  styles from "./AddTodoBtn.module.css";

const AddTodoBtn = (props) => {



    return (
        <Row className={styles.background}>
            <Col>
                <Button onClick={props.addNewTodo}>
                    <PlusCircleOutlined />
                    <span>Add new task</span>
                </Button>
            </Col>
        </Row>
    );
}

export default  AddTodoBtn;