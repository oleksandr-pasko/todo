import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TodoArchiveComponent } from './todo-archive.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TodoItemModule } from '../../components/todo-item/todo-item.module';

const routes: Route[] = [
  {
    path: '',
    component: TodoArchiveComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    TodoItemModule,
  ],
  declarations: [TodoArchiveComponent],
})
export class TodoArchiveModule {}
