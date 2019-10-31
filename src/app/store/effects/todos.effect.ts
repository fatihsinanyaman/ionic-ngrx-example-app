import { map, mergeMap, catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';

import { TodoService } from 'app/services/todo.service';

import * as fromStore from 'app/store';

@Injectable()
export class TodosEffects{
    
    loadTodos$ = createEffect(() => this.actions$.pipe(
        ofType(fromStore.LOAD_TODOS),
        mergeMap(() => this.todoService.getTodos()
            .pipe(
                map(todos => ({ type: fromStore.LOAD_TODOS_SUCCESS, payload: todos })),
                catchError(() => of({ type: fromStore.LOAD_TODOS_FAIL }))
            ))
    )
    );


    constructor(
        private actions$: Actions,
        private todoService: TodoService
        ) { }

}