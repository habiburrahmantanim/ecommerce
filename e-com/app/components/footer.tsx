import React from "react";


const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">OrdinaryMart</h2>
          <p className="text-sm leading-relaxed">
            Premium fashion for everyone. Quality clothing at affordable prices.
          </p>

          <div className="flex gap-4 mt-4">
            <i className="fab fa-facebook-f w-5 h-5 hover:text-white cursor-pointer" />
            <i className="fab fa-twitter w-5 h-5 hover:text-white cursor-pointer" />
            <i className="fab fa-instagram w-5 h-5 hover:text-white cursor-pointer" />
            <i className="fab fa-pinterest w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">
              Shipping & Returns
            </li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>

          <div className="flex items-start gap-2 text-sm mb-2">
            <i className="fas fa-map-marker-alt w-4 h-4 mt-1" />
            <span>123 Fashion St, New York, NY 10001</span>
          </div>

          <div className="flex items-center gap-2 text-sm mb-2">
            <i className="fas fa-phone w-4 h-4" />
            <span>+1 234 567 890</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <i className="fas fa-envelope w-4 h-4" />
            <span>info@ordinarymart.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2024 OrdinaryMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
