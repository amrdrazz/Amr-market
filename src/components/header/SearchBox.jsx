import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function SearchBox() {

    const [searchTerm, setSearchTerm] = useState("")

    const [suggestions, setSuggestions] = useState([])

    const navigate = useNavigate()

    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()){
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim()) }`)
        }
        setSuggestions([])
    }

    useEffect(() => {
        

        const fetchSuggestions = async () => {
            if (!searchTerm.trim()){
                setSuggestions([])
                return
            }
            try{
                const res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
                const data = await res.json()
                setSuggestions(data.products.slice(0,5) || [])
            }catch(error){
                console.log(error);
                setSuggestions([])
            }
        }

        const debounce = setTimeout(() => {
            fetchSuggestions()
        },300)

        return () => clearTimeout(debounce)

    },[searchTerm])


    useEffect(() => {
        setSuggestions([])
    },[location])
    


  return (
    <div className='search_box_container'>
        <form className="search_box">
            <input autoComplete='off' onChange={(e) => {setSearchTerm(e.target.value)}} type="text" name='search' id='search' placeholder='search for product' />
            <button type='submit' onClick={handleSubmit}><FaSearch /></button>
        </form>

        {suggestions.length > 0 && (
            <ul className='suggestions'>
                {suggestions.map((item) => (
                    
                    <Link key={item.id} to={`/products/${item.id}`}>
                        <li>
                            <img src={item.images[0]} alt="" />
                            <span>{item.title}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        )}
    </div>
  )
}

export default SearchBox
