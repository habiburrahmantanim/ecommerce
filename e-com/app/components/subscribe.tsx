"use client";

import React, { useState } from "react";

const Subscribe = () => {
  const [toast, setToast] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // show toast
    setToast("🎉 Subscribed successfully!");
    setEmail("");

    // auto hide
    setTimeout(() => setToast(""), 2500);
  };

  return (
    <>
      <div className="mt-4 w-full bg-blue-700 py-10 items-center text-center justify-center flex">
        <div className="flex flex-col mx-auto px-4 text-white max-w-2xl ">
          <h2 className="text-4xl font-bold">Subscribe to our Newsletter</h2>

          <p className="mt-4 text-lg">
            Subscribe to our newsletter for exclusive offers, new arrivals, and
            style tips.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-row w-full mt-4 rounded"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-l-lg bg-white text-gray-700 p-2 outline-none w-full"
            />

            <button
              type="submit"
              className="px-4 rounded-r-lg text-white bg-indigo-800 hover:bg-indigo-900 transition"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-gray-200 text-sm">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* 🔔 Toast */}
      {toast && (
        <div className="fixed bottom-5 right-5 bg-black text-white px-5 py-3 rounded-lg shadow-lg animate-fade-in">
          {toast}
        </div>
      )}
    </>
  );
};

export default Subscribe;
