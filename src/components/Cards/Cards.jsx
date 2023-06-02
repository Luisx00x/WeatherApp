import Link from 'next/link';
import s from './Cards.module.css';

//Iconos
//http://openweathermap.org/img/wn/${props.img}@2x.png

const Cards = ({city}) => {
  return (
    <Link href={"/#"} className={s.container}>
      <div key={city.id} className={s.container}>
        <button className={s.closeButton}>x</button>
        <span className={s.title}><b>{city.name}</b></span>
        <span><b>Max:</b> {city.main.temp_max}</span>
        <span><b>Min:</b> {city.main.temp_min}</span>
        <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}></img>
      </div>
    </Link>
  )
}

export default Cards;