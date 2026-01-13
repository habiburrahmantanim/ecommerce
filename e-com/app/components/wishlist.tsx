import Link from 'next/link'
import React from 'react'

const wishlist = () => {
  return (
    <Link href="/wishlist">
      <div className="cursor-pointer relative px-4 py-2 bg-gray-800 text-white rounded-lg ">
        <i className="fa-solid fa-heart text-xl text-white"></i>
      </div>
    </Link>
  );
}

export default wishlist
