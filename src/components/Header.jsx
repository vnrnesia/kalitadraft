import React from "react";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/CelchainLogo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Celchains Logo" className="h-14 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-10 text-md">
          <a href="#" className="text-rose-700">
            Home
          </a>
          <a href="#" className="text-black hover:text-rose-500 transition">
            About
          </a>
          <a href="#" className="text-black hover:text-rose-500 transition">
            Feature
          </a>
          <a href="#" className="text-black hover:text-rose-500 transition">
            Blog
          </a>
          <a href="#" className="text-black hover:text-rose-500 transition">
            Contact
          </a>
          <div className="relative group inline-block text-black">
            <div className="flex items-center cursor-pointer hover:text-rose-500 transition">
              <span>Page</span>
              <ChevronDown size={16} className="ml-1" />
            </div>

            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg hidden group-hover:block z-10">
              <ul className="flex flex-col py-2">
                <li className="px-4 py-2 hover:bg-rose-100 cursor-pointer">Single Blog</li>
                <li className="px-4 py-2 hover:bg-rose-100 cursor-pointer">Price</li>
                <li className="px-4 py-2 hover:bg-rose-100 cursor-pointer">Career</li>
                <li className="px-4 py-2 hover:bg-rose-100 cursor-pointer">404</li>
                <li className="px-4 py-2 hover:bg-rose-100 cursor-pointer">Support</li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Download Button */}
        <a
          href="#"
          className="border border-black text-black px-9 py-4 rounded-full text-sm hover:bg-black hover:text-white transition"
        >
          Download
        </a>
      </div>
    </header>
  );
};

export default Header;