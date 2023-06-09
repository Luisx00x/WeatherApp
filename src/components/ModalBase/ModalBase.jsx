'use client'

import { details, notFound } from "@/hooks/consts";

const ModalBase = ({children, type}) => {

  switch(type){
    case notFound:
      return ( children[0] );
    case details:
      return ( children[1]);
  }
  
}

export default ModalBase;