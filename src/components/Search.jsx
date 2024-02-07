import React from 'react'
import { TextField, Button } from '@mui/material'

const Search = ({ searchField, handleChange, handleSearchClick }) => {
  return (
    <div>
      <TextField
        label="Search"
        color="secondary"
        variant="filled"
        value={searchField}
        onChange={handleChange}
        focused
        sx={{ marginRight: '10px', marginTop: '10px'}}
      />
      <Button sx={{ marginTop: '20px'}} variant="contained" color="primary" onClick={handleSearchClick}>
        Search
      </Button>
    </div>
  )
}

export default Search