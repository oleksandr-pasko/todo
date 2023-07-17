import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Todo } from '@store/todo/models';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  document = inject(DOCUMENT);

  storage = this.document.defaultView?.localStorage;

  writeTodoList(list: Todo[]) {
    this.storage?.setItem('todoList', JSON.stringify(list));
    return this.readTodoList();
  }

  readTodoList(): Observable<Todo[]> {
    const todoListString = this.storage?.getItem('todoList') || '[]';
    // return throwError(() => new Error('Local storage Error'));
    return of(JSON.parse(todoListString));
  }
}
