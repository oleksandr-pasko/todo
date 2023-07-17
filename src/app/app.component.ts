import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTodoList } from '@store/todo/actions';
import { Todo } from '@store/todo/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo';

  constructor(private store: Store<{ todoList: Todo[] }>) {}

  ngOnInit() {
    this.store.dispatch(loadTodoList());
  }
}
