import { useState, useEffect } from 'react'
import axios from 'axios'
import DrinkInfo from './components/DrinkInfo'
import Search from './components/Search' 
import './App.css'

const App = () => {

  const [cocktails, setCocktails] = useState([])
  const [randomCocktail, setRandomCocktail] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {

    getRandomCocktail()
  },[])

  const getRandomCocktail = () => {

    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => setRandomCocktail(response.data.drinks))
  }

  const handleSearchFieldChange = (event) => {

    console.log(event.target.value)
    setSearchField(event.target.value)

    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`)
      .then(response => setCocktails(response.data.drinks))
  }

  console.log(randomCocktail)
  console.log(cocktails)

  return (
    <div>
      <h1>Bevarage Bay</h1>
      <Search searchField={searchField} handleChange={handleSearchFieldChange} />

      { cocktails.length > 0
        ? cocktails.map((drink) => {

          console.log(drink)
          return(
            <DrinkInfo key={drink} drink={drink} />
          )
        })
        : randomCocktail.map((drink) => <DrinkInfo key={drink} drink={drink} />)
      }
    </div>
  )
}

export default App
