import { fetchTodos } from '../controller/todoRepository';
import { GetTodoResponse } from '../controller/todoRepository';

export const getTodos = async (): Promise<GetTodoResponse> => {
  return await fetchTodos();
};
