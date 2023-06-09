'use client'

import { SearchContext } from "@/app/page";
import { details } from "@/hooks/consts";
import { useContext } from "react";
import { cityDetails } from "./DetailsButtonHandler";


const DetailsButton = ({cityId}) => {

  const {setModal, cities} = useContext(SearchContext);

  return (
    <button
    onClick={(e) => {
      e.preventDefault();
      cityDetails(cityId, cities, setModal)
    }}
    >Detalles</button>
  )
}

export default DetailsButton;