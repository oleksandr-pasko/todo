import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo } from 'src/app/store/todo/actions';
import { TodoType, Todo } from '@store/todo/models';

type TodoTypeOption = {
  key: string;
  value: TodoType;
};

@Component({
  selector: 'app-todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  todoTypes: TodoTypeOption[] = [
    {
      key: 'Todo',
      value: 'todo',
    },
    {
      key: 'Idea',
      value: 'idea',
    },
  ];

  todoForm = this.formBuilder.group({
    todoList: this.formBuilder.array([]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ todoList: Todo[] }>
  ) {}

  ngOnInit() {
    this.onAddTodo();
  }

  get todoList(): FormArray {
    return this.todoForm.get('todoList') as FormArray;
  }

  onAddTodo() {
    const todo = this.formBuilder.group({
      todoType: [null, Validators.required],
      todoName: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.todoList.push(todo);
  }

  deleteTodo(i: number) {
    this.todoList.removeAt(i);
  }

  onSubmit() {
    const todoList = <Array<{ todoName: string; todoType: TodoTypeOption }>>(
      this.todoForm.value.todoList
    );
    const todoListToAdd = todoList?.map((todo) => ({
      todoName: todo.todoName,
      todoType: todo.todoType.value,
    }));
    this.store.dispatch(addTodo({ todoList: todoListToAdd }));
    this.clearFormArray(this.todoList);
    this.todoForm.reset();
  }

  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 1) {
      formArray.removeAt(0);
    }
  };
}
