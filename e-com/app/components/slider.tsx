"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: 1, imageUrl: "/slider1.avif", altText: "Slide 1" },
  { id: 2, imageUrl: "/slider2.jpg", altText: "Slide 2" },
  { id: 3, imageUrl: "/slider3.jpg", altText: "Slide 3" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full h-[calc(100vh-80px)]">
      {/* Left Content */}
      <div className="w-1/2 flex flex-col justify-center px-10 bg-indigo-600 text-white">
        <h1
         className="text-6xl font-bold mb-4">
          Premium Fashion for Everyone
        </h1>
        <p className="text-lg mb-6">
          Discover our latest collection of high-quality clothing.
        </p>
        <button className="w-fit px-10 py-4 bg-white text-indigo-600 rounded-md font-semibold hover:bg-gray-100 transition">
          Shop Now
          <i className="fas fa-shopping-bag ml-2"></i>
        </button>
      </div>

      {/* Image Section */}
      <div className="w-1/2 flex items-center justify-center bg-indigo-600">
        <div className="relative w-[80%] h-[80%] rounded-3xl overflow-hidden shadow-xl">
          {/* Image */}
          <Image
            src={slides[currentIndex].imageUrl}
            alt={slides[currentIndex].altText}
            fill
            className="object-cover"
            priority
          />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
