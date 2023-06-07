import s from './CityNotFound.module.css';

const CityNotFound = ({accept}) => {
  return (
    <div className={`modals`}>
      <div className={`${s.message} modals-message`}>
      <h2>No se ha encontrado una ciudad con ese nombre</h2>
      <button 
      className={s.button}
      onClick={() => {
        accept({state: false, name: ""});
      }}
      >Aceptar</button>
      </div>
    </div>
  )
}

export default CityNotFound;