import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Logo from "@/assets/CelchainLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-10 mb-16 mt-16 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        {/* Логотип слева */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Логотип Celchains"
              className="h-[100px] w-auto"
            />
          </div>
        </div>

        {/* Центр - Страницы (две колонки) */}
        {/* Центр - Страницы (две колонки) */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Страницы</h4>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>Главная</li>
              <li>Функции</li>
              <li>Контакты</li>
              <li>Цены</li>
              <li>Ошибка 404</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4"> </h4>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>О нас</li>
              <li>Блог</li>
              <li>Одна статья</li>
              <li>Карьера</li>
              <li>Поддержка</li>
            </ul>
          </div>
        </div>

        {/* Правая колонка - Возможности */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Возможности</h4>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>Блокчейн-решения</li>
            <li>Процесс использования</li>
            <li>Интеграция платформы</li>
            <li>Поддержка</li>
          </ul>
        </div>
      </div>

      {/* Нижняя часть - Соцсети */}
      <div className="max-w-7xl mx-auto mt-10 px-4">
        <h4 className="text-lg font-semibold mb-4 justify-center flex">
          Мы в соцсетях
        </h4>
        <div className="flex space-x-4 text-xl justify-center ">
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
