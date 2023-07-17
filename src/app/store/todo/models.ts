export type TodoType = 'todo' | 'idea';
export type TodoState = 'pending' | 'completed' | 'archive';

export interface BasicTodo {
  todoType: TodoType;
  todoName: string;
}

export type Todo = BasicTodo & {
  id: number;
  todoState: TodoState;
};

export type TodoRemoveTypeAction = { id: number; todoState: TodoState };
