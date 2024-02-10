import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const IngredientFilter = ({ ingredient, handleIngredientChange }) => {

  return(
      
    <FormControl color="secondary" sx={{ minWidth: "170px" }}>
      <InputLabel>Filter</InputLabel>
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