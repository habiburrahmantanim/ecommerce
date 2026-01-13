import React from "react";
import CountDownTimer from "./CountDownTimer";

const Offers = () => {
  return (
    <div className="w-full bg-indigo-700 p-10 flex flex-col items-center gap-6 text-white">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Summer Sale - Up to 50% Off!</h1>
        <p className="text-lg">
          Limited time offer. Use code <b>SUMMER2026</b> at checkout.
        </p>
      </div>
      <CountDownTimer />
      <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
        Shop Now
      </button>
    </div>
  );
};

export default Offers;
