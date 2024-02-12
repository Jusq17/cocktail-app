import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const IngredientFilter = ({ ingredient, handleIngredientChange }) => {

  return(
      
    <FormControl variant='filled' color="secondary" focused sx={{ minWidth: "170px", marginLeft: "2px" }}>
      <InputLabel>Filter by ingredient</InputLabel>
        <Select
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
  )
}

export default IngredientFilter