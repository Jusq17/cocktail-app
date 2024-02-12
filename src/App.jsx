import { useState, useEffect } from 'react'
import { Typography, Button, Grid } from '@mui/material'
import DrinkInfo from './components/DrinkInfo'
import Search from './components/Search'
import IngredientFilter from './components/IngredientFilter'
import LoadingSpinner from './components/LoadingSpinner'
import drinks from './services/drinks'
import './App.css'

const App = () => {

  const [cocktails, setCocktails] = useState([])
  const [searchField, setSearchField] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [loading, setLoading] = useState(true)

  const isMobile = window.innerWidth <= 480

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

    try {
      const cocktail = await drinks.getDrinksByIngredient(event.target.value)
      setCocktails(cocktail)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

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
      <Typography 
        sx={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: isMobile ? '50px' : '70px', marginTop: '40px', marginBottom: '10px', color: '#1d474f' }}
        variant='h2'>
          Bevarage Bay
      </Typography>

      <Grid item xs={12} xl={8} md={10} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', marginTop: '10px', width: '100%', maxWidth: '400px' }}>
          <Search
            searchField={searchField}
            handleChange={(event) => setSearchField(event.target.value)}
            handleSearchClick={handleSearchClick}
          />
          <IngredientFilter 
            ingredient={ingredient} 
            handleIngredientChange={handleIngredientChange} 
          />
        </div>
        <Button
          sx={{ marginBottom: '10px', fontSize: '15px'}}
          color="secondary"
          variant="contained"
          onClick={() => handleRandomCocktail()}
        >
          Random Cocktail
        </Button>
      </Grid>


      { cocktails != null && cocktails.length > 0
        ? cocktails.map((drink) => {
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
