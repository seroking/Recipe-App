import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import RecipeCards from "../components/RecipeCards";
import { getRandomRecipes } from "../api/RecipeApi";

export default function Home() {
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const recipes = await getRandomRecipes(9);
        setSuggestions(recipes);
      } catch (error) {
        console.error("Error fetching recipe suggestions:", error);
      }
    };

    fetchSuggestions();
  }, []);

  const displayedRecipes = searchResults.length ? searchResults : suggestions;

  return (
    <div>
      <Navbar setRecipe={setSearchResults} />
      <Hero setRecipe={setSearchResults} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Suggestions</h2>
        <RecipeCards recipes={displayedRecipes} />
      </div>
    </div>
  );
}
