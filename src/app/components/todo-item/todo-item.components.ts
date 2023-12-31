import { Component, Input } from '@angular/core';
import { Todo } from '@store/todo/models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() item!: Todo;
}
