import { get, post } from "../infrastructure/api/todoClient";

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export type GetTodoResponse = {
  data: {
    limit: number,
    skip: number,
    todos: Todo[],
    total: number
  };
};
export type AddTodoResponse = Todo;

export const fetchTodos = async (): Promise<GetTodoResponse> => {
  return await get<GetTodoResponse>('/todos');
};

export const addTodo = async (todo: { todo: string; completed: boolean; userId: number }): Promise<AddTodoResponse> => {
  return await post<AddTodoResponse>('/todos/add', JSON.stringify(todo), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
