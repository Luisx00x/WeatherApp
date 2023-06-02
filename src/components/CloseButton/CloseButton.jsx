'use client'

import { SearchContext } from "@/app/page"
import { useContext } from "react";
import s from './CloseButton.module.css';
import { closeHandler } from "./CloseButtonHandler"; 

const CloseButton = ({id}) => {
  
  const {cities, setCities} = useContext(SearchContext);
  
  return (
    <button className={s.closeButton}
    onClick={(e) => closeHandler(cities, setCities, id)}
    >X</button>
  )

}

export default CloseButton;