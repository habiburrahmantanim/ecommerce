"use client";

import { useState } from "react";

const allFaqs = [
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be unused and in original packaging.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping fees may vary based on location.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 5–7 business days depending on your location.",
  },
  {
    question: "How can I track my order?",
    answer: "After shipping, you will receive an email with a tracking link.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, PayPal, and other secure payment methods.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer:
      "Orders can be canceled or modified within 24 hours of placing the order.",
  },
];

const initialFaqsCount = 3;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const faqs = showMore ? allFaqs : allFaqs.slice(0, initialFaqsCount);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleFAQMore = () => {
    setShowMore((prev) => !prev);
    setActiveIndex(null);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4 text-gray-600">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="mt-2">
          Find answers to common questions about our products and services
        </p>
      </div>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-md border border-gray-200"
        >
          {/* Question */}
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center px-4 py-4 text-left hover:bg-gray-100 transition"
            aria-expanded={activeIndex === index}
          >
            <span className="text-lg font-semibold text-gray-800">
              {faq.question}
            </span>

            <i
              className={`fas fa-chevron-down transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Answer */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              activeIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden px-4 pb-4">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}

      {/* More / Less Button */}
      <div className="text-center mt-6">
        <button
          onClick={toggleFAQMore}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {showMore ? "Show Less FAQs" : "More FAQs"}
        </button>
      </div>
    </div>
  );
};

export default FAQ;
