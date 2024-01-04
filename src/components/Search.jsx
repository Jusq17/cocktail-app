
const Search = (props) => {

  return(
    <div>
      <h3>Search:</h3>
      <input value={props.searchField} onChange={props.handleChange} />
    </div>
  )
}

export default Search