import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  
  deleteTodo(id: number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

}
