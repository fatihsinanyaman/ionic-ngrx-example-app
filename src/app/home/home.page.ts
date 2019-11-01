import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from 'app/store';

import { Todo } from 'app/models/todo';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todos: Observable<Array<Todo>>

  constructor(
    private store: Store<fromStore.State>
  ) {}

  ngOnInit(){
    
    this.store.select<any>('todos').subscribe(state => {
      this.todos = state.data;
    });

    this.store.dispatch(new fromStore.LoadTodos());

  }

  deleteTodo(id: number){
    this.store.dispatch(new fromStore.DeleteTodo(id));
  }

}
