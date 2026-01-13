"use client";

import React from "react";
import Link from "next/link";

const CartButton = () => {
  return (
    <Link href="/cart">
      <button className="relative px-4 py-2 bg-gray-800 text-white rounded-lg cursor-pointer">
        🛒 Cart
      </button>
    </Link>
  );
};

export default CartButton;
