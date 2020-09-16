const ADD_NEW_TODO = "ADD_NEW_TODO";

let initialState = {
  todoArray: [
    {
      title: "Купить носки",
      description: "Проебано 4 пары в стиралке",
      priority: 5,
    },
    {
      title: "Убить велосипед",
      description: "Не ну а хуле он",
      priority: 5,
    },
    {
      title: "Понять и принять смысл фразы",
      description: "Фраза - А че а в смысле?",
      priority: 5,
    },
    {
      title: "Любить свою малышку",
      description: "Готово ",
      priority: 5,
    },
    {
      title: "Закрывать унитаз",
      description: "Ире воняет",
      priority: 5,
    },
  ],
  priorityLevels: [1, 2, 3, 4, 5],
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO: {
      let newTodo = {
        title: action.title,
        description: action.description,
        priority: action.priority,
      };
      return {
        ...state,
        todoArray: [{ ...action.payload }, ...state.todoArray],
      };
    }

    default:
      return state;
  }
};

export const addNewTodo = (title, description, priority) => ({
  type: ADD_NEW_TODO,
  payload: { title, description, priority },
});

export default generalReducer;
