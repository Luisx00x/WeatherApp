import Link from "next/link";
import s from './NavBar.module.css';

export default function NavBar(){
  return (
    <nav className={s.container}>
      <Link href={"/"}>Home</Link>
      <div>
        <input type="text" placeholder="Nombre de la ciudad..."/>
        <input type="button" value="Buscar"/>
      </div>
    </nav>
  )
}