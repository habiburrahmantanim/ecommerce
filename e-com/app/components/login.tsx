"use client";
import React from "react";
import Link from "next/link";

const login = () => {
  return (
    <Link href="/login">
      <button className="relative px-4 py-2 bg-gray-800 text-white rounded-lg cursor-alias">
        Login
      </button>
    </Link>
  );
};

export default login;
