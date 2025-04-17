// src/Auth.jsx
import React, { useState } from 'react';

// Dữ liệu giả lập người dùng
const users = {
  user1: 'password1',
  user2: 'password2',
  user3: 'password3',
};

export default function Auth() {
  const [user, setUser] = useState(null); // Thông tin người dùng
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const [name, setName] = useState(''); // Tên người dùng
  const [password, setPassword] = useState(''); // Mật khẩu
  const [error, setError] = useState(''); // Lỗi đăng nhập

  const handleLogin = () => {
    // Kiểm tra nếu tên người dùng và mật khẩu có trong dữ liệu người dùng giả lập
    if (users[name] && users[name] === password) {
      setUser({ name });
      setIsLoggedIn(true);
      setName('');
      setPassword('');
      setError('');
    } else {
      setError('Tên người dùng hoặc mật khẩu không chính xác');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      {isLoggedIn ? (
        <div className="text-center bg-green-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Chào mừng, {user.name}!</h3>
          <p className="text-lg text-green-600 mb-4">Bạn đã đăng nhập thành công.</p>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Đăng xuất
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Đăng nhập</h2>
          
          {/* Input cho tên người dùng */}
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          {/* Input cho mật khẩu */}
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          {/* Hiển thị lỗi nếu có */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          
          <button
            onClick={handleLogin}
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Đăng nhập
          </button>
        </div>
      )}
    </div>
  );
}
