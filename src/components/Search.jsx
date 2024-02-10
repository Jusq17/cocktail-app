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
        sx={{ maxWidth: '170px' }}
      />
    </div>
  )
}

export default Search