import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import DrinkInfo from './components/DrinkInfo'
import Search from './components/Search'
import Button from '@mui/material/Button'
import './App.css'

const App = () => {

  const [cocktails, setCocktails] = useState([])
  const [searchField, setSearchField] = useState('')

  const alpha = Array.from(Array(26)).map((e, i) => i + 65)
  const alphabet = alpha.map((x) => String.fromCharCode(x))
  alphabet.splice(20,1)
  alphabet.splice(22,1)

  useEffect(() => {

    getRandomCocktail()
  },[])

  const getRandomCocktail = () => {

    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => setCocktails(response.data.drinks))
  }

  const getCocktailByFirst = (char) => {

    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${char}`)
      .then(response => setCocktails(response.data.drinks))
  }

  const handleSearchFieldChange = (event) => {

    console.log(event.target.value)
    setSearchField(event.target.value)

    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`)
      .then(response => setCocktails(response.data.drinks))
  }

  console.log(cocktails)

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
      <h1>Bevarage Bay</h1>

      <Grid item xs={4} xl={10}>
        { alphabet.map((char) => <button key={char} onClick={() => getCocktailByFirst(char)}>{char}</button>) }

        <Search searchField={searchField} handleChange={handleSearchFieldChange} />
        <Button sx={{ margin: '20px' }} color="secondary" variant="contained" onClick={() => getRandomCocktail()}>Random cocktail</Button>
      </Grid>

      { cocktails.length > 0
        ? cocktails.map((drink) => {

          console.log(drink)
          return(
            <DrinkInfo key={drink} drink={drink} />
          )
        })
        : cocktails.map((drink) => <DrinkInfo key={drink} drink={drink} />)
      }
      </Grid>
    </div>
  )
}

export default App
