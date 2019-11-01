import { Action } from '@ngrx/store';
import { Todo } from 'app/models/todo';

export const LOAD_TODOS = '[Todos] Load';
export const LOAD_TODOS_FAIL = '[Todos] Load Fail';
export const LOAD_TODOS_SUCCESS = '[Todos] Load Success';
export const DELETE_TODO = '[Todo] Delete';
export const DELETE_TODO_SUCCESS = '[Todo] Delete Success';

export class LoadTodos implements Action {
    readonly type = LOAD_TODOS;
}

export class LoadTodosFail implements Action {
    readonly type = LOAD_TODOS_FAIL;
    constructor(public payload: any){} 
}

export class LoadTodosSuccess implements Action {
    readonly type = LOAD_TODOS_SUCCESS;
    constructor(public payload: [Todo]) { } 
}

export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;
    constructor(public payload: any) { } 
}

export class DeleteTodoSuccess implements Action {
    readonly type = DELETE_TODO_SUCCESS;
    constructor(public payload: any){  }
}

// action types
export type TodoAction = LoadTodos | LoadTodosFail | LoadTodosSuccess | DeleteTodo | DeleteTodoSuccess;