import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import middlewares from "./middleware";

const ADD_TODO = "ADD_TODO";
const TODO_TOGGLED = "TODO_TOGGLED";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text, id: nanoid() },
});

export const todoToggled = (id) => ({
    type: TODO_TOGGLED,
    payload: id,
});

export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                completed: false,
            });
        case TODO_TOGGLED:
            return state.map((todo) => {
                if (todo.id !== action.payload.id) return todo;

                return {
                    ...todo,
                    completed: !todo.completed,
                };
            });
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({ todosReducer }),
    applyMiddleware(...[thunk].concat(middlewares))
);

store.subscribe(() => {
    const app = document.createElement('main');
    const state = document.createElement('pre');
    state.append(JSON.stringify(store.getState(), null, 4));

    const todosList = document.createElement('ul');
    store.getState().todosReducer.forEach(todo => {
        const htmlTodo = document.createElement('li');
        const completedOrTodo = todo.completed ? 'Completed' : 'Todo';
        const text = document.createTextNode(`${todo.text} - ${completedOrTodo}`);
        const btn = document.createElement('button');
        btn.onclick = () => store.dispatch({type: TODO_TOGGLED, payload: { id: todo.id } });
        btn.innerText = 'Toggle';
        htmlTodo.appendChild(text);
        htmlTodo.appendChild(btn);
        todosList.appendChild(htmlTodo);
    });

    const addTodoDiv = document.createElement('div');
    const input = document.createElement('input');
    input.name = 'text';
    input.id = 'todoText';

    const btn = document.createElement('button');
    btn.onclick = () => {
        store.dispatch({type: ADD_TODO, payload: { id: Math.random(), text: document.getElementById('todoText').value } });
        document.getElementById('todoText').value = '';
    };
    btn.innerText = 'Add';

    addTodoDiv.appendChild(input);
    addTodoDiv.appendChild(btn);
    
    app.appendChild(todosList);
    app.appendChild(addTodoDiv);
    app.appendChild(state);

    document.getElementById('root').replaceChildren(app);
})

store.dispatch({
    type: ADD_TODO,
    payload: {
        id: Math.random(),
        text: "todo " + Math.random(),
        completed: false,
    },
});

console.log(store.getState());

// [ { completed: false } ]

store.dispatch({
    type: TODO_TOGGLED,
    payload: {
        id: store.getState().todosReducer[0].id,
    },
});

console.log(store.getState());
// [ { completed: true } ]
