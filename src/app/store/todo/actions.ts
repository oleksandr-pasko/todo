import { createAction, props } from '@ngrx/store';
import { BasicTodo, Todo, TodoRemoveTypeAction, TodoState } from './models';

const key = '[TODO]';

// Load Todo List - Start
export const loadTodoList = createAction(`${key} Load`);
export const loadTodoListSuccess = createAction(
  `${key} Load Success`,
  props<{ todoList: Todo[] }>()
);
export const loadTodoListError = createAction(
  `${key} Load Error`,
  props<{ error: string }>()
);
// Load Todo List - End

// Add Todos - Start
export const addTodo = createAction(
  `${key} Add`,
  props<{ todoList: BasicTodo[] }>()
);
export const addTodoSuccess = createAction(
  `${key} Add Success`,
  props<{ todoList: Todo[] }>()
);
export const addTodoError = createAction(
  `${key} Add Error`,
  props<{ error: string }>()
);
// Add Todos - End

// Change Todo Status - Start
export const changeTodoStatus = createAction(
  `${key} Change`,
  props<TodoRemoveTypeAction>()
);
export const changeTodoStatusSuccess = createAction(
  `${key} Change Success`,
  props<TodoRemoveTypeAction>()
);
export const changeTodoStatusError = createAction(
  `${key} Change Error`,
  props<{ error: string }>()
);
// Change Todo Status - End

// Delete Todo - Start
export const deleteTodo = createAction(
  `${key} Delete`,
  props<{ id: number }>()
);
export const deleteTodoSuccess = createAction(
  `${key} Delete Success`,
  props<{ id: number }>()
);
export const deleteTodoError = createAction(
  `${key} Delete Error`,
  props<{ error: string }>()
);
// Delete Todo - End
