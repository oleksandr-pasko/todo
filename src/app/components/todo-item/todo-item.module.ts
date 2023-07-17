import { NgModule } from '@angular/core';
import { TodoItemComponent } from './todo-item.components';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TodoItemComponent],
  exports: [TodoItemComponent, CommonModule],
})
export class TodoItemModule {}
