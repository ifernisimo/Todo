const ADD_NEW_TODO = "ADD_NEW_TODO";

let initialState = {

    todoArray: [
        {
            title: "Купить носки",
            description: "Проебано 4 пары в стиралке",
            priority: 5
        },
        {
            title: "Убить велосипед",
            description: "Не ну а хуле он",
            priority: 5
        },
        {
            title: "Понять и принять смысл фразы",
            description: "Фраза - А че а в смысле?",
            priority: 5
        },
        {
            title: "Любить свою малышку",
            description: "Готово ",
            priority: 5
        },
        {
            title: "Закрывать унитаз",
            description: "Ире воняет",
            priority: 5
        }

    ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TODO: {
            let newTodo = {
                title: "Created task",
                description: "Dispatched",
                priority: 1
            }
            return {
                ...state,
                todoArray: [...state.todoArray, newTodo]
            };
        }

        default:
            return state;
    }
};

export const addNewTodo = (newTodo) => ({
    type: ADD_NEW_TODO,
    newTodo

})

export default todoReducer;