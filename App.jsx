import React, { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Simple Counter App</h1>
      <div className="text-5xl font-semibold mb-4">{count}</div>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-2xl shadow"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-2xl shadow"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-2xl shadow"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
