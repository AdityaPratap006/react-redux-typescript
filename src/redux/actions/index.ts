import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface FetchTodosAction {
    type: ActionTypes.FETCH_TODOS;
    payload: Todo[];
}

const URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(URL);

        dispatch<FetchTodosAction>({
            type: ActionTypes.FETCH_TODOS,
            payload: response.data,
        });
    };
}