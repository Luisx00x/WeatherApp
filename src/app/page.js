'use client'
import CityNotFound from "@/components/Modals/CityNotFound/CityNotFound";
import NavBar from "@/components/NavBar/NavBar";
import WeatherCards from "@/components/WeatherCards/WeatherCards";
import { createContext, useState } from "react";
import 'normalize.css';

export const SearchContext = createContext();

const Home = () => {
  
  const [cities, setCities] = useState([]);
  const [notFound, setNotFound] = useState(true);

  return (
    <div className={"page"}>
      <SearchContext.Provider value={{setCities, cities, setNotFound}}>
        {notFound ? <CityNotFound accept={setNotFound} /> : null}
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