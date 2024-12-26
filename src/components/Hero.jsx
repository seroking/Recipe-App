import SearchBar from "./SearchBar";
import foodHero from "../assets/foodHero.jpg";

export default function Hero({ setRecipe }) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left px-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
            Discover the Best Recipes
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Explore a wide variety of delicious recipes tailored to suit every taste. Cooking has never been this fun!
          </p>
          <SearchBar setRecipe={setRecipe} />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 px-6">
          <img
            src={foodHero}
            alt="Delicious food"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
