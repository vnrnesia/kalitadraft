import React from "react";
import { ChevronDown, LogIn, UserPlus } from "lucide-react";
import logo from "@/assets/CelchainLogo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Celchains Logo" className="h-14 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-10 text-md">
          <a href="#" className="text-black font-medium hover:text-rose-500 transition">
            Главная
          </a>
          <a href="#" className="text-black font-medium hover:text-rose-500 transition">
            О нас
          </a>
          <a href="#" className="text-black font-medium hover:text-rose-500 transition">
            Контакты
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="flex items-center space-x-2 border border-black text-black px-6 py-3 rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            <LogIn size={16} />
            <span>Войти</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 border border-black text-black px-6 py-3 rounded-full text-sm hover:bg-black hover:text-white transition"
          >
            <UserPlus size={16} />
            <span>Зарегистрироваться</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
