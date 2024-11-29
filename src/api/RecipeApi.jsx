import axios from "axios";

const API_KEY = "K90EBmE0WxbTfQK9iu/Aow==cHnSQO23PGP7oeIs"
const BASE_URL = "https://api.api-ninjas.com/v1/recipe"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params:{
    apiKey: API_KEY
  }
})

export const getRecipes = async(query) =>{
  try {
    const response = await axiosInstance.get('/search',{
      params: {query, number: 5},
    });
    console.log(response.data.results);
    return (response.data.results);
  } catch (error){
    console.error('Error fetching recipes:', error);
    throw error;
  }

}

export const getRecipeDetails = async (id) =>{
  try {
    const response = await axiosInstance.get(`${id}/information`);
    console.log(response.data);
    return (response.data);

  } catch (error){
    console.error('Error fetching recipe details:', error);
    throw error;
  }
}
