import { useState } from "react"
import { getRecipes } from "../api/RecipeApi";

export default function SearchBar({ setRecipe }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const result = await getRecipes(query);
      setRecipe(result);

    } catch (error) {
      console.error('Error fetching Search result: ', error)
    }
  }

  return (
    <div className="flex items-center gap-2">

      <input type="text" placeholder="Find a new recipe!" value={query} onChange={(e) => { setQuery(e.target.value) }} className="border p-2 rounded w-full"
      />
      <button onClick={handleSearch}>Search</button>
      {query.length > 2 && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg mt-2 rounded-md p-4 max-h-64 overflow-y-auto">
          <ul>
            {searchResults.map((recipe) => (
              <li key={recipe.id} className="py-2 px-3 cursor-pointer hover:bg-gray-200">
                <h3>{recipe.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

    
  )
}