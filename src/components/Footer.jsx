import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";
import Logo from "@/assets/CelchainLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        {/* Left - Logo */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Celchains Logo" className="h-6 w-6" />
            <span className="text-2xl font-semibold text-rose-500 italic">Celchains</span>
          </div>
        </div>

        {/* Middle - Pages */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-lg font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Home</li>
              <li>Feature</li>
              <li>Contact</li>
              <li>Pricing</li>
              <li>404</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 invisible md:visible">&nbsp;</h4>
            <ul className="space-y-2 text-sm text-gray-700 mt-2 md:mt-0">
              <li>About</li>
              <li>Blog</li>
              <li>Single Blog</li>
              <li>Career</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Right - Feature */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Feature</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Blockchain Solution</li>
            <li>Usage Process</li>
            <li>Platform Integration</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      {/* Bottom - Social Icons */}
      <div className="max-w-7xl mx-auto mt-10 px-4">
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex space-x-5 text-xl">
          <FaFacebookF className="hover:text-rose-500 cursor-pointer" />
          <FaTwitter className="hover:text-rose-500 cursor-pointer" />
          <FaYoutube className="hover:text-rose-500 cursor-pointer" />
          <FaPinterestP className="hover:text-rose-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-rose-500 cursor-pointer" />
          <FaInstagram className="hover:text-rose-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
