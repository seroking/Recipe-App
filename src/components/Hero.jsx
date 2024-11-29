//import foodHero from '../assets/foodHero.jpg';

export default function Hero() {
  const foodHero = require('../assets/foodHero.jpg');
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left px-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
            Discover the Best Recipes
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Explore a wide variety of delicious recipes tailored to suit every taste. Cooking has never been this fun!
          </p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 px-6">
          <img
            src={foodHero}
            alt="Delicious food"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
