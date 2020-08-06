import { Todo, TodoAction, ActionTypes } from '../actions';

const INITIAL_STATE: Todo[] = [];

export const todosReducer = (state: Todo[] = INITIAL_STATE, action: TodoAction) => {
    switch (action.type) {
        case ActionTypes.FETCH_TODOS:
            return action.payload;
        case ActionTypes.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}