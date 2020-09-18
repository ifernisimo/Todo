const ADD_NEW_TODO = "ADD_NEW_TODO";
const DELETE_TODO = "DELETE_TODO";
const SET_LAST_TASK_ID = "SET_LAST_TASK_ID";

let initialState = {
  todoArray: [
    {
      id: 1,
      title: "Купить носки",
      description: "4 пары утеряны в недрах в стиралки",
      priority: 5,
    },
    {
      id: 2,
      title: "Убить велосипед",
      description: "Не ну а че он",
      priority: 5,
    },
    {
      id: 3,
      title: "Понять и принять смысл фразы",
      description: "Фраза - А че а в смысле?",
      priority: 5,
    },
    {
      id: 4,
      title: "Любить свою малышку",
      description: "Готово",
      priority: 5,
    },
    {
      id: 5,
      title: "Закрывать двери",
      description: "сквозняк не шуточный",
      priority: 5,
    },
  ],
  lastTaskId: 5,
  editMode: true,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO: {
      return {
        ...state,
        todoArray: [{ ...action.payload }, ...state.todoArray],
      };
    }

    case DELETE_TODO: {
      return {
        ...state,
        todoArray: [
          ...state.todoArray.filter((todo) => {
            return todo.id !== action.deleteTodoId;
          }),
        ],
      };
    }

    case SET_LAST_TASK_ID: {
      return {
        ...state,
        lastTaskId: action.lastId,
      };
    }

    default:
      return state;
  }
};

export const addNewTodo = (id, title, description, priority) => ({
  type: ADD_NEW_TODO,
  payload: { id, title, description, priority },
});

export const deleteTodo = (deleteTodoId) => ({
  type: DELETE_TODO,
  deleteTodoId,
});

export const setLastTaskId = (lastId) => ({
  type: SET_LAST_TASK_ID,
  lastId,
});

export default todoReducer;
