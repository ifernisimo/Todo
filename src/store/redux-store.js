import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import todoReducer from "./reducers/todo-reducer";
import { reducer as formReducer } from "redux-form";
import { createLogger } from "redux-logger";

let reducers = combineReducers({
  todo: todoReducer,
  form: formReducer,
});

const logger = createLogger({
  diff: true,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

window.store = store;

export default store;
