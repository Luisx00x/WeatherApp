'use client'
import { useContext, useState} from 'react';
import { inputHandler, submitHandler } from './SearchCityHandlers';
import { SearchContext } from '@/app/page';

const testApiKey = process.env.NEXT_PUBLIC_API_KEY;

const SearchCity = () => {

  const setNewCity = useContext(SearchContext);

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
      onKeyUp={(e) => {
        if(e.key === 'Enter') {
          submitHandler(e, input.searchInput, testApiKey, setNewCity.setCities, setNewCity.setModal);
          setInput( prev => { return {searchInput: ""}});
        }
      }}
      />

      <button 
        onClick={(e) => {
        submitHandler(e, input.searchInput, testApiKey, setNewCity.setCities, setNewCity.setModal);
        setInput( prev => { return {searchInput: ""}});
        }
      }>Buscar</button>
    </>
  )
}

export default SearchCity;