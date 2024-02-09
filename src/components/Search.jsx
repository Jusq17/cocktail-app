import React from 'react'
import { TextField, Button } from '@mui/material'

const Search = ({ searchField, handleChange, handleSearchClick }) => {

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick()
    }
  }
  
  return (
    <div>
      <TextField
        label="Search by name"
        color="secondary"
        variant="filled"
        value={searchField}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        focused
        sx={{ marginLeft: '10px', minWidth: '200px' }}
      />
    </div>
  )
}

export default Search