import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white px-4 py-3 shadow-md border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Branding */}
        <div className="text-black font-bold text-lg">Recipee</div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden block text-black focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Links - Desktop */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <a href="#home" className="text-black hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-black hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Links - Mobile Dropdown */}
        <div
          className={`lg:hidden w-full bg-white mt-4 space-y-2 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <a href="#home" className="block text-black hover:text-gray-400 px-4 py-2">
            Home
          </a>
          <a href="#about" className="block text-black hover:text-gray-400 px-4 py-2">
            About
          </a>
          <a href="#contact" className="block text-black hover:text-gray-400 px-4 py-2">
            Contact
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:block w-auto">
          <SearchBar />
        </div>
      </div>

      {/* Search Bar - Mobile */}
      <div className="lg:hidden mt-4">
        <SearchBar />
      </div>
    </nav>
  );
}
