import TextField from '@mui/material/TextField'

const Search = (props) => {

  return(
    <div>
      <TextField sx={{ margin: '20px' }} label="Search for a drink" color="secondary" variant="standard" value={props.searchField} onChange={props.handleChange} />
    </div>
  )
}

export default Search