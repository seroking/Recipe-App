import { useNavigate } from "react-router-dom";
import { getRecipeInfo } from "../api/RecipeApi";
import { useState, useEffect } from "react";

const RecipeCard = ({ recipe, recipeDetails }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/information/${recipe.id}`); e
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h3 className="text-xl font-semibold">{recipe.title}</h3>
      <p className="text-sm text-gray-600">Servings: {recipe.servings}</p>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-40 object-cover mt-2 rounded"
        />
      )}
      <button
        onClick={handleDetailsClick}
        className="text-blue-500 mt-2 block"
      >
        See details
      </button>
    </div>
  );
};


export default function RecipeCards({ recipes }) {
  const [recipeDetails, setRecipeDetails] = useState([]);

  useEffect(() => {
    const fetchAllRecipeDetails = async () => {
      try {
        const recipesData = await Promise.all(
          recipes.map((recipe) => getRecipeInfo(recipe.id))
        );
        setRecipeDetails(recipesData);
      } catch (error) {
        console.error("Error fetching recipes details:", error);
      }
    };

    fetchAllRecipeDetails();
  }, [recipes]);

  if (!recipeDetails.length) return <p className="text-gray-500">Loading recipes...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          recipeDetails={recipeDetails[index]}
        />
      ))}
    </div>
  );
}