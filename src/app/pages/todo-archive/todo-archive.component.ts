import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '@store/todo/models';
import { todoListArchive } from '@store/todo/selectors';
import * as todoActions from '@store/todo/actions';

@Component({
  templateUrl: './todo-archive.component.html',
  styleUrls: ['./todo-archive.component.css'],
})
export class TodoArchiveComponent {
  todoList$ = this.store.select(todoListArchive);

  constructor(private store: Store<{ todoList: Todo[] }>) {}

  deleteTodo(todo: Todo) {
    this.store.dispatch(todoActions.deleteTodo({ id: todo.id }));
  }
}
