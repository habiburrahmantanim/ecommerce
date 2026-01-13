"use client";

import React, { useState } from "react";
import { productsData } from "@/data";

const Feature = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex justify-center items-center w-full py-10">
      <div className="bg-gray-100 w-full max-w-7xl p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Our Products</h2>
          <p className="text-gray-600">
            Browse our latest collection of premium clothing
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 bg-white p-4 rounded shadow">
          <select className="border px-3 py-2 rounded">
            <option>All Categories</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>

          <select className="border px-3 py-2 rounded">
            <option>All Sizes</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>

          <select className="border px-3 py-2 rounded">
            <option>New Arrivals</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Popularity</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover rounded"
                />

                {/* Discount Badge */}
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                )}

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 transition"
                >
                  {wishlist.includes(product.id) ? "❤️" : "🤍"}
                </button>
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold mt-3">{product.name}</h3>

              {/* Rating */}
              <div className="text-yellow-500 text-sm">
                ★★★★☆
                <span className="text-gray-500 ml-2">
                  ({product.popularity})
                </span>
              </div>

              {/* Price */}
              <div className="mt-1">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.prev_price && (
                  <span className="line-through text-gray-400 ml-2">
                    ${product.prev_price}
                  </span>
                )}
              </div>

              {/* Button */}
              <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
