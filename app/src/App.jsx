import './App.css';
// src/App.jsx
import React, { useState } from 'react';
import Counter from './Counter';
import TodoList from './TodoList';
import ThemeToggle from './ThemeToggle';
import Cart from './Cart';
import Auth from './Auth';

export default function App() {
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <nav className="flex space-x-4 mb-5">
        <button
          onClick={() => setSelectedPage(1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Counter
        </button>
        <button
          onClick={() => setSelectedPage(2)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          To-do List
        </button>
        <button
          onClick={() => setSelectedPage(3)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Theme
        </button>
        <button
          onClick={() => setSelectedPage(4)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Cart
        </button>
        <button
          onClick={() => setSelectedPage(5)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Auth
        </button>
      </nav>
      <hr />
      {selectedPage === 1 && <Counter />}
      {selectedPage === 2 && <TodoList />}
      {selectedPage === 3 && <ThemeToggle />}
      {selectedPage === 4 && <Cart />}
      {selectedPage === 5 && <Auth />}
    </div>
  );
}
