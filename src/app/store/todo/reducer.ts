import { createReducer, on } from '@ngrx/store';
import * as todoActions from './actions';
import { BasicTodo, Todo, TodoRemoveTypeAction } from './models';

export const initialState: Todo[] = [];

export const todoListReducer = createReducer(
  initialState,
  on(todoActions.loadTodoListSuccess, (_, { todoList }) => todoList),
  on(todoActions.loadTodoListError, (state, { error }) => {
    console.log('Error loadTodoListError: ', error);
    return state;
  }),
  on(todoActions.addTodoSuccess, (_, { todoList }) => {
    return todoList;
  }),
  on(todoActions.addTodoError, (state, { error }) => {
    console.log('Error addTodoError: ', error);
    return state;
  }),
  on(todoActions.changeTodoStatusSuccess, (state, { todoState, id }) => {
    const newTodoList = state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          todoState,
        };
      }
      return todo;
    });
    return newTodoList;
  }),
  on(todoActions.changeTodoStatusError, (state, { error }) => {
    console.log('Error changeTodoStatusError: ', error);
    return state;
  }),
  on(todoActions.deleteTodoSuccess, (state, { id }) => {
    const newTodoList = state.filter((todo) => todo.id !== id);
    return newTodoList;
  }),
  on(todoActions.deleteTodoError, (state, { error }) => {
    console.log('Error deleteTodoError: ', error);
    return state;
  })
);
