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
      description: "300 едениц утрачены в безднах стиралки ",
      priority: 5,
      editMode: false,
      positionStatus: 0,
    },
    {
      id: 2,
      title: "Не забыть на рыбалку",
      description: "Газовая горелка, кресла, прикормка, сулугуни, друзей",
      priority: 3,
      editMode: false,
      positionStatus: 1,
    },
    {
      id: 3,
      title: "Тренеровка по боксу",
      description: "17:00 спорт клуб Магнус",
      priority: 4,
      editMode: false,
      positionStatus: 2,
    },
    {
      id: 4,
      title: "Бизнес конфа",
      description: "Гагарин плаза 20:00 17.09",
      priority: 4,
      editMode: false,
      positionStatus: 0,
    },
    {
      id: 5,
      title: "Длинный текст",
      description:
        "авно выяснено, что при оценке дизайна и композиции читаемый текст мешает " +
        "сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более" +
        " или менее стандартное заполнение шаблона, а также реальное распределение букв и " +
        "пробелов в абзацах, которое не получается при простой дубликации ",
      priority: 1,
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
        todoArray: state.todoArray.filter((todo) => {
          return todo.id !== action.deleteTodoId;
        }),
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
        todoArray: state.todoArray.map((todo) => {
          return todo.id === action.todoId
            ? {
                ...todo,
                title: action.newTitle,
                description: action.newDescription,
              }
            : todo;
        }),
      };
    }

    case TOGGLE_EDIT_MODE: {
      return {
        ...state,
        todoArray: state.todoArray.map((todo) => {
          return todo.id === action.todoId
            ? {
                ...todo,
                editMode: !todo.editMode,
              }
            : { ...todo, editMode: false };
        }),
      };
    }

    case MOVE_TO_NEXT_LIST: {
      return {
        ...state,
        todoArray: state.todoArray.map((todo) => {
          return todo.id === action.todoId
            ? {
                ...todo,
                positionStatus:
                  todo.positionStatus <= 1
                    ? todo.positionStatus + 1
                    : todo.positionStatus,
                editMode: false,
              }
            : { ...todo, editMode: false };
        }),
      };
    }

    case MOVE_TO_PREV_LIST: {
      return {
        ...state,
        todoArray: state.todoArray.map((todo) => {
          return todo.id === action.todoId
            ? {
                ...todo,
                positionStatus:
                  todo.positionStatus >= 1
                    ? todo.positionStatus - 1
                    : todo.positionStatus,
                editMode: false,
              }
            : { ...todo, editMode: false };
        }),
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
