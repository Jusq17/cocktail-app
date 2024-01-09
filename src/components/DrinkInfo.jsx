import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'
import '../App.css'

const DrinkInfo = ({ drink }) => {

  console.log(drink)

  return(
    <Card className='drink' variant="outlined" sx={{ maxWidth: 500 }}>
      <CardHeader
        titleTypographyProps={{ fontFamily: 'Trebuchet MS, sans-serif', variant:'h3' }}
        variant='h1'
        title={drink.strDrink}
      />
      <CardMedia
        component="img"
        height="400"
        image={drink.strDrinkThumb}
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ fontFamily: 'Trebuchet MS, sans-serif', padding: '5px' }} variant='h5'>{drink.strIngredient1}, {drink.strIngredient2}, {drink.strIngredient3}</Typography>
        <Typography sx={{ fontFamily: 'Trebuchet MS, sans-serif' }} variant='body1'>{drink.strInstructions}</Typography>
      </CardContent>
    </Card>
  )
}

export default DrinkInfo