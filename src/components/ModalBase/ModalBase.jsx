'use client'

import useModal from "@/hooks/useModal";

const ModalBase = ({type, set}) => {
  return (
    <>
      {useModal(type, set)}
    </>
  )
  }
export default ModalBase;