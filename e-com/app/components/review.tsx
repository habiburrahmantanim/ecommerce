"use client";

import { useState } from "react";
import Image from "next/image";

/* ------------------ DATA ------------------ */
const reviewsData = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  rating: 5,
  text: "Amazing quality and fast shipping! Highly recommend Ordinary Mart.",
  name: "John Doe",
  avatar: "/32.jpg",
}));

/* ------------------ CARD COMPONENT ------------------ */
const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col shadow-2xl p-4 rounded-lg mx-auto">
      {/* Rating */}
      <div className="flex items-center mb-2">
        {Array.from({ length: review.rating }).map((_, i) => (
          <i key={i} className="fas fa-star text-yellow-400"></i>
        ))}
        <span className="text-gray-500 px-4">{review.rating}/5</span>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-lg mb-4">"{review.text}"</p>

      {/* User */}
      <div className="flex items-center">
        <Image
          src={review.avatar}
          alt={review.name}
          width={60}
          height={60}
          className="rounded-full mr-4"
        />
        <div>
          <p className="font-bold">{review.name}</p>
          <p className="text-sm text-gray-500">Verified Buyer</p>
        </div>
      </div>
    </div>
  );
};

/* ------------------ MAIN COMPONENT ------------------ */
const Review = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <section className="p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Customer Reviews</h2>
        <p className="text-gray-500">What our customers say about us</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewsData.slice(0, visibleCount).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Load More */}
      {visibleCount < reviewsData.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </section>
  );
};

export default Review;
