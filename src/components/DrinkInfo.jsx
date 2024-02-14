import { Typography, Button, Card, CardMedia, CardHeader, CardContent } from '@mui/material'
import GetIngredients from '../functions/GetIngredients'
import '../App.css'

const DrinkInfo = ({ drink }) => {

  const isMobile = window.innerWidth <= 480
  const ingredients = GetIngredients(drink)

  return(
    <Card style={{ backgroundColor: "#FFEAC0" }} className='drink' variant="outlined" sx={{ maxWidth: isMobile ? '320px' : '450px', marginBottom: '20px' }}>
      <CardHeader
        titleTypographyProps={{ fontFamily: 'Trebuchet MS, sans-serif', variant:'h3', color:'#1d474f' }}
        variant='h1'
        title={drink.strDrink}
      />
      <CardMedia
        component="img"
        height={isMobile ? 350 : 450}
        image={drink.strDrinkThumb}
        alt="Drink"
      />
      <CardContent>
        <Typography sx={{ fontFamily: 'Trebuchet MS, sans-serif', padding: '8px', color:'#1d474f' }} variant='h6'>{ingredients.map((ingredient) => `${ingredient}`)}</Typography>
        <Typography sx={{ fontFamily: 'Trebuchet MS, sans-serif', color:'#1d474f' }} variant='body1'>{drink.strInstructions}</Typography>
        { drink.strVideo !== null && <Button sx={{ fontFamily: 'Trebuchet MS, sans-serif', color:'bisque', marginTop: '5px' }} variant='contained' href={drink.strVideo} target="_blank">Video</Button> }
      </CardContent>
    </Card>
  )
}

export default DrinkInfo