const ADD_NEW_TODO = "ADD_NEW_TODO";
const DELETE_TODO = "DELETE_TODO";
const SET_LAST_TASK_ID = "SET_LAST_TASK_ID";

let initialState = {
  todoArray: [
    {
      id: 1,
      title: "Купить носки",
      description: "Проебано 4 пары в стиралке",
      priority: 5,
    },
    {
      id: 2,
      title: "Убить велосипед",
      description: "Не ну а хуле он",
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
      description: "Готово ",
      priority: 5,
    },
    {
      id: 5,
      title: "Закрывать унитаз",
      description: "Ире воняет",
      priority: 5,
    },
  ],
  priorityLevels: [1, 2, 3, 4, 5],
  lastTaskId: 5,
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
        //Удаление
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

export const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  todo,
});

export const setLastTaskId = (lastId) => ({
  type: SET_LAST_TASK_ID,
  lastId,
});

export default todoReducer;
