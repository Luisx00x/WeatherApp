'use client'
import NavBar from "@/components/NavBar/NavBar";
import WeatherCards from "@/components/WeatherCards/WeatherCards";
import { createContext, useState } from "react";
import 'normalize.css';
import ModalBase from "@/components/ModalBase/ModalBase";
import CityNotFound from "@/components/Modals/CityNotFound/CityNotFound";
import Details from "@/components/Modals/Details/Details";

export const SearchContext = createContext();

const Home = () => {
  
  const [cities, setCities] = useState([]);
  const [modal, setModal] = useState(
    {
      state: false,
      name: "",
      details: null
    }
  );

  return (
    <div className={"page"}>
      <SearchContext.Provider value={{setCities, cities, setModal}}>

        {
        modal.state && modal.name ? 
        <ModalBase type={modal.name} >
          <CityNotFound accept={setModal}/>
          <Details confirm={setModal} cityId={modal.details}/>
        </ModalBase> 
        : null
        }

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