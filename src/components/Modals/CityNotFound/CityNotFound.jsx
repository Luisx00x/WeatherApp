import useCloseModal from '@/hooks/useCloseModal';
import s from './CityNotFound.module.css';

const CityNotFound = ({close}) => {
  return (
    <div className={`modals`}>
      <div className={`${s.message} modals-message`}>
      <h2>No se ha encontrado una ciudad con ese nombre</h2>
      <button 
      className={s.button}
      onClick={() => useCloseModal(close)}
      >Aceptar</button>
      </div>
    </div>
  )
}

export default CityNotFound;