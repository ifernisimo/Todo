import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import todoReducer from "./reducers/todo-reducer";

let reducers = combineReducers({
    todo: todoReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;