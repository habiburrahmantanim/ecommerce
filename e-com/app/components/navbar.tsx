import Link from "next/link";
import React from "react";
import Wishlist from "./wishlist";
import Login from "./login";
import Carticon from "./CartButton";

const navbar = () => {
  return (
    <div className="flex px-20 py-3.5 justify-between items-center shadow-md mx-auto ">
      {/* imagecontain */}
      <div className="flex items-center text-2xl font-bold text-gray-800">
        <Link href="/">Ordinay Mart</Link>
      </div>
      {/* option container */}
      <div className="flex items-center space-x-4 text-lg font-medium lg:space-x-8 text-gray-800">
        <Link href="/">Home</Link>
        <Link href="/">Shop</Link>
        <Link href="/">About</Link>
        <Link href="/">Reviews</Link>
        <Link href="/">FAQ</Link>
      </div>
      {/* icon container */}
      <div className="flex items-center space-x-3 lg:space-x-6">
        <Wishlist />
        <Carticon />
        <Login />
        
      </div>
    </div>
  );
};

export default navbar;
