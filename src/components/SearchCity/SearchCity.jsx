'use client'
import { useState} from 'react';
import { inputHandler } from './SearchCityHandlers';

const SearchCity = () => {

  const [input, setInput] = useState(
    {
      searchInput: ""
    }
  );

  return (
    <>
      <input
      type="text"
      name="searchInput" 
      placeholder="Ingrese la ciudad..." 
      value={input.searchInput}
      onChange={(e) => inputHandler(e, setInput)}
      />
      
      <button>Buscar</button>
    </>
  )
}

export default SearchCity;