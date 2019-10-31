import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from 'app/store';

import { Todo } from 'app/models/todo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todos: Observable<Todo>[]

  constructor(
    private store: Store<fromStore.State>
  ) {}

  ngOnInit(){
    
    this.store.select<any>('todos').subscribe(state => {
      this.todos = state.data;
    });

    this.store.dispatch(new fromStore.LoadTodos());

  }

}
