'use client'

import useModal from "@/hooks/useModal";

const ModalBase = ({type, set, cityId}) => {
  return (
    <>
      {useModal(type, set, cityId)}
    </>
  )
  }
export default ModalBase;