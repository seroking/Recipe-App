
export default function Navbar(){

  return (
    <nav className="bg-white px-10 py-3 shadow-md border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-lg">Recipee</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-black hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-black hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            🔍
          </button>
        </div>
      </div>

    </nav>
  );

}
