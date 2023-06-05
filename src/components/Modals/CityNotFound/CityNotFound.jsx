import s from './CityNotFound.module.css';

const CityNotFound = ({accept}) => {
  return (
    <div className={s.container}>
      <div className={s.message}>
      <h2>No se ha encontrado una ciudad con ese nombre</h2>
      <button 
      className={s.button}
      onClick={() => {
        accept(false);
      }}
      >Aceptar</button>
      </div>
    </div>
  )
}

export default CityNotFound;