'use client'
import NavBar from "@/components/NavBar/NavBar";
import WeatherCards from "@/components/WeatherCards/WeatherCards";
import { createContext, useState } from "react";

export const SearchContext = createContext();

const Home = () => {
  
  const [cities, setCities] = useState([]);

  return (
    <>

      <SearchContext.Provider value={setCities}>
        <NavBar/>
        <h1>This is Home</h1>
        <WeatherCards cities={cities} />
      </SearchContext.Provider>
    </>
  )
}

export default Home;