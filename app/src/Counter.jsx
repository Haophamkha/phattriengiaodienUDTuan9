
import React, { useReducer } from 'react';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-5 bg-white shadow rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-4">Counter: {state.count}</h2>
        <div className="space-x-4">
          <button
            onClick={() => dispatch({ type: INCREMENT })}
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Tăng
          </button>
          <button
            onClick={() => dispatch({ type: DECREMENT })}
            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Giảm
          </button>
        </div>
      </div>
    </div>
  );
}
