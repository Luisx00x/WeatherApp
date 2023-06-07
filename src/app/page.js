'use client'
import CityNotFound from "@/components/Modals/CityNotFound/CityNotFound";
import Details from "@/components/Modals/Details/Details.jsx";
import NavBar from "@/components/NavBar/NavBar";
import WeatherCards from "@/components/WeatherCards/WeatherCards";
import { createContext, useState } from "react";
import 'normalize.css';

export const SearchContext = createContext();

const Home = () => {
  
  const [cities, setCities] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [detailsModal, setDetailsModal] = useState(true);

  return (
    <div className={"page"}>
      <SearchContext.Provider value={{setCities, cities, setNotFound, setDetailsModal}}>
        {notFound ? <CityNotFound accept={setNotFound} /> : null}
        {detailsModal ? <Details /> : null}
        <NavBar/>
        <div className="cards-container">
          <div className="cards">
            <WeatherCards cities={cities}/>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  )
}

export default Home;