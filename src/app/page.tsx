"use client"
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '../useCases/addTodo';
import { getTodos } from '../useCases/getTodos';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import { queryClient } from '@/infrastructure/api/todoClient';


export default function Home() {

  const { data: todoResponse, isLoading, isFetching, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  });

  const mutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  })

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{(error as Error).message}</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className='text-red-900 text-5xl'>Todos</h1>
        <AddTodoForm onAddTodo={(newTodo) => mutation.mutate(newTodo)} />
        {todoResponse && <TodoList todos={todoResponse.data.todos} />} {/* Extracting todos array */}
      </div>
    </main>
  );
}

