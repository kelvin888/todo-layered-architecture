import React from 'react';

type Todo = {
    id: number;
    todo: string;
};

interface TodoListProps {
    todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    console.log(todos)
    if (todos.length === 0) {
        return <p>No todos available.</p>;
    }

    return (
        <ul>
            {todos.map(todo => (
                <li className='border border-gray-400 p-3' key={todo.id}>{todo.todo}</li>
            ))}
        </ul>
    );
};

export default TodoList;
