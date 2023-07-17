import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from './models';

export const todoListAll =
  createFeatureSelector<ReadonlyArray<Todo>>('todoList');

export const todoListCurrent = createSelector(todoListAll, (allTodoList) => {
  return allTodoList.filter((todo) => todo.todoState !== 'archive');
});

export const todoListArchive = createSelector(todoListAll, (allTodoList) => {
  return allTodoList.filter((todo) => todo.todoState === 'archive');
});
