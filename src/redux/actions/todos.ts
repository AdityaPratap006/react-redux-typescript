import axios from 'axios';
import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ActionTypes } from './types';

import { StoreState } from '../reducers/root.reducer';
export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface FetchTodosAction {
    type: ActionTypes.FETCH_TODOS;
    payload: Todo[];
}

export type FetchTodosActionAsync = ActionCreator<ThunkAction<
    Promise<FetchTodosAction>,
    StoreState,
    null,
    FetchTodosAction
>>;

const URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos: FetchTodosActionAsync = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(URL);

        return dispatch<FetchTodosAction>({
            type: ActionTypes.FETCH_TODOS,
            payload: response.data,
        });
    };
}


export interface DeleteTodoAction {
    type: ActionTypes.DELETE_TODO,
    payload: string;
};

export const deleteTodo = (todoId: string): DeleteTodoAction => {
    return ({
        type: ActionTypes.DELETE_TODO,
        payload: todoId,
    });
}