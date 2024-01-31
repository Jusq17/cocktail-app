import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'
import '../App.css'
import Button from '@mui/material/Button'
import GetIngredients from '../functions/GetIngredients'

const DrinkInfo = ({ drink }) => {

  const [likes, setLikes] = useState(0)

  console.log(drink)

  const ingredients = GetIngredients(drink)

  return(
    <Card style={{ backgroundColor: "bisque" }} className='drink' variant="outlined" sx={{ maxWidth: 450 }}>
      <CardHeader
        titleTypographyProps={{ fontFamily: 'Trebuchet MS, sans-serif', variant:'h3', color:'#1d474f' }}
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
        <Typography sx={{ fontFamily: 'Trebuchet MS, sans-serif', padding: '8px', color:'#1d474f' }} variant='h6'>{ingredients.map((ingredient) => `${ingredient}`)}</Typography>
        <Typography sx={{ fontFamily: 'Trebuchet MS, sans-serif', color:'#1d474f' }} variant='body1'>{drink.strInstructions}</Typography>
        <Button sx={{ fontFamily: 'Trebuchet MS, sans-serif', color:'bisque', marginTop: '5px' }} variant='contained' onClick={() => setLikes(likes+1)}>Like {likes}</Button>
      </CardContent>
    </Card>
  )
}

export default DrinkInfo