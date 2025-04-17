import React, { useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');

  const addItem = () => {
    if (item.trim() && price > 0) {
      setCart([...cart, { name: item, quantity: 1, price: Number(price) }]);
      setItem('');
      setPrice('');
    }
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, quantity) => {
    if (quantity <= 0) return;
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    setCart(updatedCart);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1; 
    }
    setCart(updatedCart);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Giỏ hàng</h2>

      <div className="mb-6">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Tên sản phẩm"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Giá sản phẩm"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={addItem}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Thêm sản phẩm
        </button>
      </div>

      <ul className="space-y-4">
        {cart.map((cartItem, index) => (
          <li key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
            <div className="flex-1">
              <span className="font-semibold">{cartItem.name}</span> (x{cartItem.quantity}) 
              <span className="text-sm text-gray-500"> - {cartItem.price} VND</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => removeItem(index)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Xóa
              </button>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition"
                >
                  -
                </button>
                <input
                  type="number"
                  value={cartItem.quantity}
                  onChange={(e) => updateQuantity(index, Number(e.target.value))}
                  className="w-16 px-2 py-1 border border-gray-300 rounded-md text-center"
                />
                <button
                  onClick={() => increaseQuantity(index)}
                  className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                  +
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-inner">
        <p className="text-lg font-semibold">Tổng số lượng: {totalItems}</p>
        <p className="text-lg font-semibold">Tổng tiền: {totalPrice} VND</p>
      </div>
    </div>
  );
}
