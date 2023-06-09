
import useCloseModal from "@/hooks/useCloseModal";
import s from './Details.module.css';

const Details = ({close, city}) => {

  return (
    <div className={`modals`}>
      <div className={`modals-message ${s.window}`}>
        
        <div className={`${s.message}`}>

          <div>
            <h2>{city.name}</h2>
            <p><b>Latitud:</b></p> <p>{city.coord.lat}</p>
            <p><b>Longitud:</b></p> <p>{city.coord.lon}</p>
            <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="weatherIcon" />
          </div>
          
          <div className={s.data}>
            <span><b>Temperatura Actual </b>{city.main.temp}°</span>
            <span><b>Max Temp </b>{city.main.temp_max}°</span>
            <span><b>Min Temp </b>{city.main.temp_min}°</span>
            <span><b>Humedad </b>{city.main.humidity}%</span>
            <span><b>Velocidad del viento </b>{city.wind.speed} Manzanas xdddd</span>
            <span><b></b></span>
          </div>
          
        </div>
        <div className={s.buttonContainer}>
          <button
          className={s.button}
          onClick={(e) => {
            e.preventDefault();
            useCloseModal(close);
          }}
          >Regresar</button>

        </div>
      </div>
    </div>
  )
}

export default Details;