import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'
import '../App.css'
import GetIngredients from '../functions/GetIngredients'

const DrinkInfo = ({ drink }) => {

  console.log(drink)

  const ingredients = GetIngredients(drink)

  return(
    <Card style={{ backgroundColor: "Linen" }} className='drink' variant="outlined" sx={{ maxWidth: 500 }}>
      <CardHeader
        titleTypographyProps={{ fontFamily: 'Trebuchet MS, sans-serif', variant:'h3' }}
        variant='h1'
        title={drink.strDrink}
      />
      <CardMedia
        component="img"
        height="450"
        image={drink.strDrinkThumb}
        alt="Drink"
      />
      <CardContent>
        <Typography sx={{ fontFamily: 'Trebuchet MS, sans-serif', padding: '8px' }} variant='h6'>{ingredients.map((ingredient) => `${ingredient}`)}</Typography>
        <Typography sx={{ fontFamily: 'Trebuchet MS, sans-serif' }} variant='body1'>{drink.strInstructions}</Typography>
      </CardContent>
    </Card>
  )
}

export default DrinkInfo