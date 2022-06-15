const ADD_TODO = "ADD_TODO";
const TODO_TOGGLED = "TODO_TOGGLED";

// logger(store)(next)(action);
const logger = (store) => (next) => async (action) => {
    const { todosReducer } = store.getState();

    if (action.type === ADD_TODO) {
        console.log("todo adding");
        if (todosReducer.some((todo) => todo.text === action.payload.text)) {
            return;
        }
        action.payload.id = `${action.payload.id}-middlewareChanged`;
        next(action);

        store.dispatch({
            type: TODO_TOGGLED,
            payload: {id: action.payload.id}
        });
        // alert('todo toggled from middleware');
        return;
    }

    return next(action);
};

module.exports = [logger];
