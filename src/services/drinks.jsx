
import axios from "axios"

const getRandomCocktail = () => {

  const request = axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  return request.then(response => response.data.drinks)
}

const getCocktailByFirst = (char) => {

  const request = axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${char}`)
  return request.then(response => response.data.drinks)
}

const getSearchedDrinks = (searchField) => {

  const request = axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchField}`)
  return request.then(response => response.data.drinks)
}

const getDrinksByIngredient = (ingredient) => {

  const request = axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${ingredient}`)
  return request.then(response => response.data.drinks)
}

export default { getRandomCocktail, getCocktailByFirst, getSearchedDrinks, getDrinksByIngredient }