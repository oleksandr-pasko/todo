import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TodoItemModule } from 'src/app/components/todo-item/todo-item.module';

const routes: Route[] = [
  {
    path: '',
    component: TodoListComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    TodoItemModule,
  ],
  declarations: [TodoListComponent, FormComponent, ListComponent],
})
export class TodoListModule {}
