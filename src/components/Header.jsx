import React, { useState } from "react";
import { ChevronDown, LogIn, UserPlus, Menu, X } from "lucide-react";
import logo from "@/assets/CelchainLogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Celchains Logo" className="h-[75px] w-auto" />
          </div>

          {/* Desktop Navigation - gizle mobilde */}
          <nav className="hidden md:flex items-center space-x-10 pl-52 text-md">
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

          {/* Desktop Auth Buttons - gizle mobilde */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Hamburger Button (mobilde göster) */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-200 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobil Menü - sağdan slide-in */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <nav className="flex flex-col mt-24 space-y-6 px-6 pt-20">
          <a
            href="#"
            onClick={closeMenu}
            className="text-black font-semibold text-lg hover:text-rose-500 transition"
          >
            Главная
          </a>
          <a
            href="#"
            onClick={closeMenu}
            className="text-black font-semibold text-lg hover:text-rose-500 transition"
          >
            О нас
          </a>
          <a
            href="#"
            onClick={closeMenu}
            className="text-black font-semibold text-lg hover:text-rose-500 transition"
          >
            Контакты
          </a>
          <a
            href="#"
            onClick={closeMenu}
            className="border border-black text-black px-6 py-3 rounded-full text-center font-semibold hover:bg-black hover:text-white transition"
          >
            Войти
          </a>
          <a
            href="#"
            onClick={closeMenu}
            className="border border-black text-black px-6 py-3 rounded-full text-center font-semibold hover:bg-black hover:text-white transition"
          >
            Зарегистрироваться
          </a>
        </nav>
      </div>

      {/* Menü açıkken arka plan overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;
