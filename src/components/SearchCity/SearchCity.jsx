'use client'
import { useContext, useState} from 'react';
import { inputHandler, submitHandler } from './SearchCityHandlers';
import { searchContext } from '@/app/page';

const testApiKey = "91d6b984ee1adf5114775201dd941300";

const SearchCity = () => {

  const setNewCity = useContext(searchContext);

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

      <button onClick={(e) => submitHandler(e, input.searchInput, testApiKey, setNewCity)}>Buscar</button>
    </>
  )
}

export default SearchCity;