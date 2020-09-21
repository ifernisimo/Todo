const ADD_NEW_TODO = "ADD_NEW_TODO";
const DELETE_TODO = "DELETE_TODO";
const SET_LAST_TASK_ID = "SET_LAST_TASK_ID";
const SYNC_TODO_OBJECTS = "SYNC_TODO_OBJECTS";
const MOVE_TO_NEXT_LIST = "MOVE_TO_NEXT_LIST";
const MOVE_TO_PREV_LIST = "MOVE_TO_PREV_LIST";
const TOGGLE_EDIT_MODE = "TOGGLE_EDIT_MODE";
let initialState = {
  todoArray: [
    {
      id: 1,
      title: "Купить носки",
      description: "4 пары утеряны в недрах в стиралки",
      priority: 5,
      editMode: false,
      positionStatus: 0,
    },
    {
      id: 2,
      title: "Убить велосипед",
      description: "Не ну а че он",
      priority: 5,
      editMode: false,
      positionStatus: 1,
    },
    {
      id: 3,
      title: "Понять и принять смысл фразы",
      description: "Фраза - А че а в смысле?",
      priority: 5,
      editMode: false,
      positionStatus: 2,
    },
    {
      id: 4,
      title: "Любить свою малышку",
      description: "Готово",
      priority: 5,
      editMode: false,
      positionStatus: 0,
    },
    {
      id: 5,
      title: "Закрывать двери",
      description: "сквозняк не шуточный",
      priority: 5,
      editMode: false,
      positionStatus: 2,
    },
  ],
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

    case SYNC_TODO_OBJECTS: {
      return {
        ...state,
        todoArray: [
          ...state.todoArray.map((todo) => {
            return todo.id === action.todoId
              ? {
                  ...todo,
                  title: action.newTitle,
                  description: action.newDescription,
                }
              : { ...todo };
          }),
        ],
      };
    }

    case TOGGLE_EDIT_MODE: {
      return {
        ...state,
        todoArray: [
          ...state.todoArray.map((todo) => {
            return todo.id === action.todoId
              ? {
                  ...todo,
                  editMode: !todo.editMode, //Перенести edit mode в отдельный редюсер
                }
              : { ...todo };
          }),
        ],
      };
    }

    case MOVE_TO_NEXT_LIST: {
      return {
        ...state,
        todoArray: [
          ...state.todoArray.map((todo) => {
            return todo.id === action.todoId
              ? {
                  ...todo,
                  positionStatus:
                    todo.positionStatus < 2
                      ? todo.positionStatus + 1
                      : todo.positionStatus,
                }
              : { ...todo };
          }),
        ],
      };
    }

    case MOVE_TO_PREV_LIST: {
      return {
        ...state,
        todoArray: [
          ...state.todoArray.map((todo) => {
            return todo.id === action.todoId
              ? {
                  ...todo,
                  positionStatus:
                    todo.positionStatus > 0
                      ? todo.positionStatus - 1
                      : todo.positionStatus,
                }
              : { ...todo };
          }),
        ],
      };
    }

    default:
      return state;
  }
};

export const addNewTodo = (id, title, description, priority) => ({
  type: ADD_NEW_TODO,
  payload: { id, title, description, priority, positionStatus: 0 },
});

export const deleteTodo = (deleteTodoId) => ({
  type: DELETE_TODO,
  deleteTodoId,
});

export const setLastTaskId = (lastId) => ({
  type: SET_LAST_TASK_ID,
  lastId,
});

export const syncTodoObjects = (todoId, newTitle, newDescription) => ({
  type: SYNC_TODO_OBJECTS,
  todoId,
  newTitle,
  newDescription,
});

export const moveToNextList = (todoId) => ({
  type: MOVE_TO_NEXT_LIST,
  todoId,
});

export const moveToPrevList = (todoId) => ({
  type: MOVE_TO_PREV_LIST,
  todoId,
});

export const toggleEditMode = (todoId) => ({
  type: TOGGLE_EDIT_MODE,
  todoId,
});

export default todoReducer;
