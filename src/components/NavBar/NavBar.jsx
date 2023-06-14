
import s from './NavBar.module.css';
import SearchCity from "../SearchCity/SearchCity";
import Image from "next/image";

export default function NavBar(){
  return (
    <nav className={s.container}>
      <Image width={75} height={75} src={'/img/logo_bg.png'} className={s.logo}/>
      <h1 className={s.title}>WeatherApp</h1>
      <div>
        <SearchCity/>
      </div>
    </nav>
  )
}