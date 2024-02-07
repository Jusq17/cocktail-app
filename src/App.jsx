import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import DrinkInfo from './components/DrinkInfo'
import Search from './components/Search'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import './App.css'
import { Typography } from '@mui/material'
import LoadingSpinner from './components/LoadingSpinner'

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

    getRandomCocktail()
  },[])

  const getRandomCocktail = () => {

    setLoading(true)
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => {
        setCocktails(response.data.drinks);
        setLoading(false)})
      .catch(error => {
        setLoading(false)
        console.error(error)
      })
  }

  const getCocktailByFirst = (char) => {

    setLoading(true)
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${char}`)
      .then(response => {
        setCocktails(response.data.drinks);
        setLoading(false)})
      .catch(error => {
        setLoading(false)
        console.error(error)
      })
  }

  const handleSearchClick = () => {

    setLoading(true)

    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchField}`)
      .then(response => {
        setCocktails(response.data.drinks)
        setLoading(false)})
      .catch(error => {
        setLoading(false)
        console.error(error)
      })
  }

  const handleIngredientChange = (event) => {

    setLoading(true)

    setIngredient(event.target.value)
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`)
      .then(response => {
        setCocktails(response.data.drinks);
        setLoading(false)})
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
        <div style={{ marginBottom: '20px', width: '100%', maxWidth: '400px' }}>
          <Search
            searchField={searchField}
            handleChange={(event) => setSearchField(event.target.value)}
            handleSearchClick={handleSearchClick}
          />
        </div>
        <FormControl color="secondary" sx={{ minWidth: 200, marginBottom: '10px' }}>
          <InputLabel id="demo-simple-select-label">Ingredient</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ingredient}
            label="Ingredient"
            onChange={handleIngredientChange}
          >
            <MenuItem value={"vodka"}>Vodka</MenuItem>
            <MenuItem value={"gin"}>Gin</MenuItem>
            <MenuItem value={"rum"}>Rum</MenuItem>
            <MenuItem value={"tequila"}>Tequila</MenuItem>
          </Select>
        </FormControl>
        <Button
          sx={{ marginBottom: '10px', marginTop: '10px', fontSize: '20px'}}
          color="secondary"
          variant="contained"
          onClick={() => getRandomCocktail()}
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
