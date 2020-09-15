import React from "react";
import {Row, Col, Button, Select , Option} from "antd";
import { PlusCircleOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import styles from './AddTodoForm.module.css';

const AddTodoForm = ({addNewTodo}) => {
    const { Option } = Select;


    return (
        <Row>
            <Col span={4}>
                <span>Создать новую задачу</span>
            </Col>

            <Col span={4}>
                <Input placeholder="Название задачи..." type="text"/>
            </Col>
            <Col>
                <Select>
                    <Option key={1}>1</Option>
                    <Option key={2}>2</Option>
                    <Option key={3}>3</Option>
                </Select>
            </Col>
            <Col span={4}>
                <Input placeholder="Описание задачи..." type="text"/>
            </Col>
            <Col span={6}>
                <Button onClick={addNewTodo}>
                    <PlusCircleOutlined />
                    <span>Add new task</span>
                </Button>
            </Col>
        </Row>
    );
}

export default  AddTodoForm;