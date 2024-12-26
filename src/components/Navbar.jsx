import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Navbar({ setRecipe }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white px-4 py-3 shadow-md border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-lg">Recipee</div>
        <button
          className="lg:hidden block text-black focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul className={`lg:flex space-x-4 ${menuOpen ? "block" : "hidden"} lg:block`}>
          <li>
            <a href="#home" className="text-black hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#about" className="text-black hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#contact" className="text-black hover:text-gray-400">Contact</a>
          </li>
        </ul>
        <div className="w-full mt-4 lg:mt-0 lg:w-auto">
          <SearchBar setRecipe={setRecipe} />
        </div>
      </div>
    </nav>
  );
}
