
const GetIngredients = (drink) => {

    let Ingredients = []

    for (let i = 1; i < 16; i++) {
        if(drink[`strIngredient${i}`]) {
            Ingredients.push(drink[`strIngredient${i}`])
            Ingredients.push(', ')
        }
    }

    Ingredients.pop()

    return Ingredients
}

export default GetIngredients