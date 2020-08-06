import { Todo, FetchTodosAction } from '../actions/index';
import { ActionTypes } from '../actions/types';

const INITIAL_STATE: Todo[] = [];

export const todosReducer = (state: Todo[] = INITIAL_STATE, action: FetchTodosAction) => {
    switch (action.type) {
        case ActionTypes.FETCH_TODOS:
            return action.payload;
        default:
            return state;
    }
}