'use client'

import { SearchContext } from "@/app/page";
import { details } from "@/hooks/consts";
import { useContext } from "react";


const DetailsButton = ({cityId}) => {

  const Context = useContext(SearchContext);

  return (
    <button
    onClick={(e) => {
      e.preventDefault();
      Context.setModal( prev => {
        return {
          ...prev,
          state: true, 
          name: details, 
          cityId: cityId 
        }
      })
    }}
    >Detalles</button>
  )
}

export default DetailsButton;