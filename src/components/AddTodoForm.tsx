"use client"
import { useState, FormEvent } from 'react';

interface AddTodoFormProps {
    onAddTodo: (newTodo: { todo: string; completed: boolean; userId: number }) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onAddTodo({ todo, completed: false, userId: 5 });
        setTodo('');
    };

    return (
        <form onSubmit={handleSubmit} className='py-2'>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new todo"
                required
                className='border border-gray-400 px-2 py-1'
            />
            <button className='bg-blue-900 text-white px-2 py-1 rounded-xl ml-2' type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodoForm;


