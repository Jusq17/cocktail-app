import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import DrinkInfo from './components/DrinkInfo'
import Search from './components/Search'
import IngredientFilter from './components/IngredientFilter'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import './App.css'
import { Typography } from '@mui/material'
import LoadingSpinner from './components/LoadingSpinner'
import drinks from './services/drinks'

const App = () => {

  const [cocktails, setCocktails] = useState([])
  const [searchField, setSearchField] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [loading, setLoading] = useState(true)

  const alpha = Array.from(Array(26)).map((e, i) => i + 65)
  const alphabet = alpha.map((x) => String.fromCharCode(x))
  alphabet.splice(20,1)
  alphabet.splice(22,1)

  useEffect(() => {

    handleRandomCocktail()
  },[])

  const handleRandomCocktail = async () => {

    setLoading(true)
    try {
      const cocktail = await drinks.getRandomCocktail()
      setCocktails(cocktail)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  const getCocktailByFirst = async (char) => {

    setLoading(true)
    try {
      const cocktail = await drinks.getCocktailByFirst(char)
      setCocktails(cocktail)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  const handleSearchClick = async () => {

    setLoading(true)
    try {
      const cocktail = await drinks.getSearchedDrinks(searchField)
      setCocktails(cocktail)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  const handleIngredientChange = async (event) => {

    setLoading(true)
    console.log(ingredient)
    console.log(event.target.value)
    try {
      const cocktail = await drinks.getDrinksByIngredient(event.target.value)
      setCocktails(cocktail)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  console.log(cocktails)

  if (loading) {
    return(
      <Grid container justifyContent="center" alignItems="center">
        <LoadingSpinner />
      </Grid>
    )
  }

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
      <Typography sx={{ fontFamily: 'Trebuchet MS, sans-serif', margin: '20px', color: '#1d474f' }} variant='h2'>Bevarage Bay</Typography>

      <Grid item xs={12} xl={8} md={10} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', width: '100%', maxWidth: '400px' }}>
          {alphabet.map((char) => (
            <button key={char} onClick={() => getCocktailByFirst(char)} style={{ margin: '2px', padding: '5px 7px', fontSize: '20px' }}>
              {char}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', marginTop: '10px', width: '100%', maxWidth: '400px' }}>
          <IngredientFilter 
            ingredient={ingredient} 
            handleIngredientChange={handleIngredientChange} />
          <Search
            searchField={searchField}
            handleChange={(event) => setSearchField(event.target.value)}
            handleSearchClick={handleSearchClick}
          />
        </div>
        <Button
          sx={{ marginLeft: '10px', marginBottom: '10px', fontSize: '15px'}}
          color="secondary"
          variant="contained"
          onClick={() => handleRandomCocktail()}
        >
          Random Cocktail
        </Button>
      </Grid>


      { cocktails != null && cocktails.length > 0
        ? cocktails.map((drink) => {

          console.log(drink)
          return(
            <DrinkInfo key={drink} drink={drink} />
          )
        })
        : <Typography variant='h4'>No drinks found</Typography>
      }
      </Grid>
    </div>
  )
}

export default App
