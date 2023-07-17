import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from 'src/app/services/todo.service';
import * as todoActions from './actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

const PENDING_TODO_STATE = 'pending' as const;

@Injectable()
export class TodoEffects {
  loadTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(todoActions.loadTodoList),
      switchMap(() => {
        return this.$todo.readTodoList().pipe(
          map((todoList) => todoActions.loadTodoListSuccess({ todoList })),
          catchError(() =>
            of(
              todoActions.loadTodoListError({
                error: 'Error: load todo list failed',
              })
            )
          )
        );
      })
    );
  });

  addTodoList$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(todoActions.addTodo),
        switchMap(({ todoList }) => {
          return this.$todo.readTodoList().pipe(
            switchMap((existingTodoList) => {
              const newTodoList = todoList.map((todo, index) => ({
                ...todo,
                id: existingTodoList.length + index + Math.random(),
                todoState: PENDING_TODO_STATE,
              }));
              return this.$todo.writeTodoList([
                ...newTodoList,
                ...existingTodoList,
              ]);
            }),
            map((todoList) => todoActions.addTodoSuccess({ todoList })),
            catchError(() =>
              of(
                todoActions.addTodoError({
                  error: 'Error: add todo list failed',
                })
              )
            )
          );
        })
      );
    },
    {
      dispatch: true,
    }
  );
  // @ts-ignore
  changeTodoStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(todoActions.changeTodoStatus),
      switchMap(({ todoState, id }) => {
        return this.$todo.readTodoList().pipe(
          map((todoList) => {
            return todoList.map((todo) => {
              if (todo.id === id) {
                return { ...todo, todoState };
              }
              return todo;
            });
          }),
          switchMap((newTodoList) => {
            return this.$todo.writeTodoList(newTodoList);
          }),
          map(() => {
            return todoActions.changeTodoStatusSuccess({ todoState, id });
          }),
          catchError(() =>
            of(
              todoActions.addTodoError({
                error: 'Error: change todo status failed',
              })
            )
          )
        );
      })
    );
  });

  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(todoActions.deleteTodo),
      switchMap(({ id }) => {
        return this.$todo.readTodoList().pipe(
          map((todoList) => {
            return todoList.filter((todo) => todo.id !== id);
          }),
          switchMap((todoList) => {
            return this.$todo.writeTodoList(todoList);
          }),
          map(() => todoActions.deleteTodoSuccess({ id })),
          catchError(() => {
            return of(
              todoActions.deleteTodoError({
                error: 'Error: delete todo failed',
              })
            );
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private $todo: TodoService) {}
}
