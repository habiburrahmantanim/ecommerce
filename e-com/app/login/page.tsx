"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
        {/* Back / Close */}
        <div className="flex justify-end">
          <button className="text-gray-500 hover:text-black transition">
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="text-gray-500">Access your account</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Sign In
          </button>

          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex gap-4">
          <button className="flex-1 border py-3 rounded-lg hover:bg-gray-100 transition">
            <i className="fab fa-google text-red-500 text-lg"></i>
          </button>

          <button className="flex-1 border py-3 rounded-lg hover:bg-gray-100 transition">
            <i className="fab fa-facebook text-blue-600 text-lg"></i>
          </button>

          <button className="flex-1 border py-3 rounded-lg hover:bg-gray-100 transition">
            <i className="fab fa-twitter text-sky-500 text-lg"></i>
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link href="" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
