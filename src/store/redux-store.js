import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import generalReducer from "./reducers/general-reducer";
import todoReducer from "./reducers/todo-reducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  general: generalReducer,
  todo: todoReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
