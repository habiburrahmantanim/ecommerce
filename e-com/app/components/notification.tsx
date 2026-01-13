import React from "react";

const Notification = () => {
  return (
    <div className="w-full flex items-center py-4 text-sm font-medium justify-center bg-gray-100">
      <div className="w-full flex justify-center space-x-10 lg:space-x-35 bg-blue-400 p-4 shadow-md">
        <div className="flex flex-col items-center bg-gray-200 p-5 rounded-lg text-center h-40 w-50">
          <i className="fas fa-truck-fast text-2xl mb-2 text-blue-600"></i>
          <h2 className="font-semibold text-xl">Free Delivery</h2>
          <span className="text-sm ">Free Shipping on Orders Over $50!</span>
        </div>

        <div className="flex flex-col items-center bg-gray-200 p-5 rounded-lg text-center h-40 w-50">
          <i className="fas fa-undo mb-2 text-2xl text-blue-600"></i>
          <h2 className="font-semibold text-xl">Easy Returns</h2>
          <span className="text-sm">30-Day return policy.</span>
        </div>

        <div className="flex flex-col items-center bg-gray-200 p-5 rounded-lg text-center h-40 w-50">
          <i className="fas fa-coins mb-2 text-2xl text-blue-600"></i>
          <h2 className="font-semibold text-xl">Cash on Delivery</h2>
          <span className="text-sm">Secure Payment Options Available.</span>
        </div>

        <div className="flex flex-col items-center bg-gray-200 p-5 rounded-lg text-center h-40 w-50">
          <i className="fas fa-star mb-2 text-2xl text-blue-600"></i>
          <h2 className="font-semibold text-xl">Premium Quality</h2>
          <span className="text-sm">24/7 Customer Support.</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
