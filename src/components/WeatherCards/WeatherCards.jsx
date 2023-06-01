
import Cards from '../Cards/Cards';

const WeatherCards = ({cities}) => {
    return (
      <>
        {
          cities.length<1 ? <div>No hay ciudades en la lista</div> :
            cities?.map(city => <Cards city={city} key={city.id}/>)
        }
      </>
    )
}

export default WeatherCards;