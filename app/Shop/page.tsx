import React from 'react'
import Image from "next/image";

const Shop = () => {
  const products = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: `$${(i + 1) * 10}`,
    image: `/product${(i % 4) + 1}.jpg`, // Example image path, update as needed
  }));

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Web Banner */}
      <div className="relative w-full h-64 bg-gray-800">
        <Image
          src="/banner.jpg" // Replace with your banner image
          alt="Shop Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-80"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
          Shop
        </h1>
      </div>

      {/* Filter and Sort Header */}
      <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        {/* Left Side: Filter and View Icons */}
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-bold flex items-center">
            Filter
            <span className="ml-2 text-xl">🔍</span> {/* Replace with your filter icon */}
          </h2>
          <div className="flex space-x-2">
            <button className="text-gray-600 hover:text-black">
              🟦 {/* Replace with grid icon */}
            </button>
            <button className="text-gray-600 hover:text-black">
              📜 {/* Replace with list view icon */}
            </button>
          </div>
        </div>

        {/* Right Side: Show and Sort Options */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span>Show:</span>
            <select className="border rounded px-2 py-1">
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="48">48</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span>Sort by:</span>
            <select className="border rounded px-2 py-1">
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded p-4 text-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="text-sm font-medium text-gray-700 mt-2">
              {product.name}
            </h3>
            <p className="text-lg font-bold text-gray-900">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 py-6">
        <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
          1
        </button>
        <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
          2
        </button>
        <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
          Next
        </button>
      </div>

      {/* Delivery, Return, and Payment Section */}
      <div className="bg-white py-8 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">Delivery</h3>
            <p className="text-sm text-gray-700">
              Fast and secure delivery to your doorstep.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">Return</h3>
            <p className="text-sm text-gray-700">
              Hassle-free returns within 30 days.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">Payment</h3>
            <p className="text-sm text-gray-700">
              Multiple payment options available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
