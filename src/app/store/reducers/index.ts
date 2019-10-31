import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromTodos from './todo.reducers';
import { Todo } from 'app/models/todo';

export interface State {
  todos: fromTodos.TodoState,
}

export const reducers: ActionReducerMap<State> = {
  todos: fromTodos.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getTodoState = (state: State) => state.todos;

export const getAllTodos = createSelector( getTodoState, fromTodos.getTodos);
export const getTodosLoading = createSelector( getTodoState, fromTodos.getTodosLoading);
export const getTodosLoaded = createSelector( getTodoState, fromTodos.getTodosLoaded);