
const DrinkInfo = ({ drink }) => {

  console.log(drink)

  return(
    <div>
      <h1>{drink.strDrink}</h1>
      <img className="drink" src={drink.strDrinkThumb} />
      <h2>{drink.strIngredient1}, {drink.strIngredient2}, {drink.strIngredient3}</h2>
      <h3>{drink.strInstructions}</h3>
    </div>
  )
}

export default DrinkInfo