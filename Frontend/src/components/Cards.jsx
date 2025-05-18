import React from 'react';

function Cards({ item }) {
  return (
    <div className="relative bg-white rounded-2xl mt-4 shadow-lg overflow-hidden w-full sm:w-78 md:w-96 m-4 transition-transform duration-300 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border dark:border-slate-700">

      {/* Price badge */}
      <div className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-md z-10 font-semibold">
        ₹{item.price}
      </div>

      <figure>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-60 object-cover"
        />
      </figure>

      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800 mb-2 dark:bg-slate-900 dark:text-white">{item.title}</h2>
        <p className="text-sm text-gray-600 mb-4 dark:bg-slate-900 dark:text-white">Books are our best friend.</p>
        <div className="flex justify-end">
          <button className="px-4 py-2 rounded-xl text-sm shadow-md transition-colors hover:bg-pink-500 duration-100 hover:text-white dark:border dark:border-slate-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
