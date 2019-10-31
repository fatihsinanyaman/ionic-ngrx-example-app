import * as fromTodos from 'app/actions/todo.actions';
import { Todo } from 'app/models/todo';

export interface TodoState {
    data: Todo[],
    loaded: boolean,
    loading: boolean    
}

export const initialState: TodoState = {
    data: [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
    ],
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromTodos.TodoAction
): TodoState {

    switch (action.type) {
        case fromTodos.LOAD_TODOS: {
            return {
                ...state, 
                loading: true,
            }
        }
        case fromTodos.LOAD_TODOS_SUCCESS: {
            console.log('payload', action.payload);
            return {
                ...state, 
                loading: false,
                loaded: true
            }
        }
        case fromTodos.LOAD_TODOS_FAIL: {
            return {
                ...state, 
                loading: false,
                loaded: false
            }
        }
    }

    return state;
}

export const getTodosLoading = (state: TodoState) => state.loading;
export const getTodosLoaded = (state: TodoState) => state.loaded;
export const getTodos = (state: TodoState) => state.data;