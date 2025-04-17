
import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [showTodos, setShowTodos] = useState(true); 
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodosVisibility = () => {
    setShowTodos(!showTodos);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-5 bg-white shadow rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">To-do List</h2>
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg w-full mb-4"
          placeholder="Nhập công việc"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded w-full hover:bg-blue-600"
        >
          Thêm
        </button>
        <button
          onClick={toggleTodosVisibility}
          className="px-4 py-2 bg-gray-500 text-white rounded w-full mt-4 hover:bg-gray-600"
        >
          {showTodos ? 'Ẩn danh sách công việc' : 'Hiện danh sách công việc'}
        </button>

        {showTodos && (
          <ul className="mt-4 space-y-2">
            {todos.map((todo, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>{todo}</span>
                <button
                  onClick={() => removeTodo(index)}
                  className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
