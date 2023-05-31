import Link from "next/link";
import s from './NavBar.module.css';
import SearchCity from "../SearchCity/SearchCity";

export default function NavBar(){
  return (
    <nav className={s.container}>
      <Link href={"/"}>Home</Link>
      <div>
        <SearchCity/>
      </div>
    </nav>
  )
}