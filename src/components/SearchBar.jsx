import { useState } from "react";
import { getRecipes } from "../api/RecipeApi";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (query.trim().length < 3) {
      setIsDropdownVisible(false);
      return;
    }
    try {
      setIsLoading(true);
      const result = await getRecipes(query);
      setSearchResults(result.results || []);
      setIsDropdownVisible(result.results.length > 0);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative w-full max-w-md mx-auto flex items-center gap-2">
        <input
          type="text"
          placeholder="Search for recipes"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.trim().length === 0) {
              setIsDropdownVisible(false);
              setSearchResults([]);
            }
          }}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {isDropdownVisible && (
        <div className="absolute left-0 right-0 bg-white shadow-lg mt-2 rounded-md max-h-64 overflow-y-auto z-10">
          <ul>
            {searchResults.map((recipe) => (
              <li
                key={recipe.id}
                className="py-2 px-3 cursor-pointer hover:bg-gray-200 rounded"
              >
                <button
                  onClick={() => navigate(`information/${recipe.id}/`)}
                  className="w-full text-left py-2 px-3 hover:bg-gray-200 rounded"
                >
                  {recipe.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!isDropdownVisible && query.length >= 3 && !isLoading && searchResults.length === 0 && (
        <div className="absolute left-0 right-0 bg-white shadow-lg mt-2 rounded-md p-4 z-10">
          <p className="text-gray-500">No recipes found!</p>
        </div>
      )}
    </div>
  );
}
