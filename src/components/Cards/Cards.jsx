import s from './Cards.module.css';

const Cards = ({city}) => {
  return (
    <>
      <div key={city.id} className={s.container}>
        <h3>{city.name}</h3>
        <p><b>Max:</b> {city.main.temp_max}</p>
        <p><b>Min:</b> {city.main.temp_min}</p>
      </div>
    </>
  )
}

export default Cards;