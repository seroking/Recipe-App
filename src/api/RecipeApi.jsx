import axios from "axios";

const API_KEY = "2deab8c2df9d4b86b3d31758270482e9"
const BASE_URL = "https://api.spoonacular.com/recipes"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers:{
    'X-Api-key': API_KEY
  }
})

export const getRecipes = async(query) =>{
  try {
    const response = await axiosInstance.get('/complexSearch',{
      params: {query},
    });
    console.log(response.data);
    return (response.data);
  } catch (error){
    console.error('Error fetching recipes:', error);
    throw error;
  }

}

/*export const getRecipeDetails = async (id) =>{
  try {
    const response = await axiosInstance.get(`${id}/information`);
    console.log(response.data);
    return (response.data);

  } catch (error){
    console.error('Error fetching recipe details:', error);
    throw error;
  }
}*/

export const getRecipeInfo = async(id) =>{
  try {
    const response = await axiosInstance.get(`/${id}/information`);
    console.log(response.data);
    return (response.data);
  } catch (error){
    console.error('Error fetching recipes:', error);
    throw error;
  }

}

export const getRandomRecipes = async (number = 10) => {
  try {
    const response = await axiosInstance.get("/random", {
      params: { number },
    });
    return response.data.recipes; // The recipes array from the API response
  } catch (error) {
    console.error("Error fetching random recipes:", error);
    throw error;
  }
};