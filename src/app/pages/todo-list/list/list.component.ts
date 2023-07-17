import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '@store/todo/models';
import * as todoActions from '@store/todo/actions';
import { todoListCurrent } from '@store/todo/selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  todoList$ = this.store.select(todoListCurrent);

  constructor(private store: Store<{ todoList: Todo[] }>) {}

  completeTodo(todo: Todo) {
    const nextTodoState =
      todo.todoState === 'pending' ? 'completed' : 'archive';
    this.store.dispatch(
      todoActions.changeTodoStatus({
        id: todo.id,
        todoState: nextTodoState,
      })
    );
  }
}
