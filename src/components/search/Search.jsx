import useDebounce from '../../Routes/useDebounce/useDebounce';
import './Search.css'
function Search({updateSearchTerm}) {
    const dbCallback = useDebounce((e)=> updateSearchTerm(e.target.value), 2000)
    return(
        <div className='search-box'>
            <input className='search' placeholder='Type id number' onChange={(e)=> dbCallback(e)} type="text"/>
        </div>
    )
}
export default Search;