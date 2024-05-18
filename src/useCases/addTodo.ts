import { addTodo } from '../controller/todoRepository';
import { AddTodoResponse } from '../controller/todoRepository';

export const createTodo = async (todo: { todo: string; completed: boolean; userId: number }): Promise<AddTodoResponse> => {
  return addTodo(todo);
};
