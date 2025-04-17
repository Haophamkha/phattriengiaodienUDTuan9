
import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div
      className={`transition-all duration-500 min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-5 shadow rounded-lg w-full max-w-md text-center">
          <h2 className={`text-xl font-semibold mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            Theme: {theme === 'light' ? 'Sáng' : 'Tối'}
          </h2>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Bật/Tắt Theme
          </button>
        </div>
      </div>
    </div>
  );
}
