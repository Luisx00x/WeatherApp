import Link from 'next/link';
import s from './Cards.module.css';
import CloseButton from '../CloseButton/CloseButton';

//Iconos
//http://openweathermap.org/img/wn/${props.img}@2x.png

const Cards = ({city}) => {
  return (
    <Link href={"/Details"} className={s.container}>
      <div key={city.id} className={s.container}>
        <CloseButton id={city.id}/>
        <span className={s.title}><b>{city.name}</b></span>
        <span><b>Max:</b> {city.main.temp_max}</span>
        <span><b>Min:</b> {city.main.temp_min}</span>
        <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}></img>
      </div>
    </Link>
  )
}

export default Cards;