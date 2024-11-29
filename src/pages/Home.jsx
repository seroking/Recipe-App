import { useState } from "react"
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

export default function Home(){
  const [recipes, setRecipes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div>
      <Navbar /> 
      <Hero /> 
      <div className="container mx-auto px-6 py-8">
        
        <SearchBar setRecipe={setRecipes} />
        {recipes.length > 0 ? (
          <recipeList recipes={recipes} /> 
        ) : (
          <p>No recipes found. Try searching for something!</p>
        )}
      </div>
    </div>
  )
}