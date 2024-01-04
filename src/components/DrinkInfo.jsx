
const DrinkInfo = (cocktail) => {

  console.log(cocktail.strDrink)

  return(
    <div>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} />
      <h4>{cocktail.strIngredient1}, {cocktail.strIngredient2}, {cocktail.strIngredient3}</h4>
    </div>
  )
}

export default DrinkInfo