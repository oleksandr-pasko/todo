import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/todo-list/todo-list.module').then(
        (m) => m.TodoListModule
      ),
  },
  {
    path: 'archive',
    loadChildren: () =>
      import('./pages/todo-archive/todo-archive.module').then(
        (m) => m.TodoArchiveModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
