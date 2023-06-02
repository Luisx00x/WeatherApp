'use client'
import NavBar from "@/components/NavBar/NavBar";
import WeatherCards from "@/components/WeatherCards/WeatherCards";
import { createContext, useState } from "react";

export const SearchContext = createContext();

const Home = () => {
  
  const [cities, setCities] = useState([]);

  return (
    <div className={"page"}>
      <SearchContext.Provider value={{setCities, cities}}>
        <NavBar/>
        <div className="cards-container">
          <h1>This is Home</h1>
          <div className="cards">
            <WeatherCards cities={cities}/>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  )
}

export default Home;