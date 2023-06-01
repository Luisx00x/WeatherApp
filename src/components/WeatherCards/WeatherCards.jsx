
import s from './WeatherCards.module.css';

const WeatherCards = ({cities}) => {
    return (
      <>
        {
          cities.length<1 ? <div>No hay ciudades en la lista</div> :
            cities?.map( city => {
            return (
            <div key={city.id} className={s.container}>
              <h3>{city.name}</h3>
              <p><b>Max:</b> {city.main.temp_max}</p>
              <p><b>Min:</b> {city.main.temp_min}</p>
            </div>
            );
            })
        }
      </>
    )
}

export default WeatherCards;