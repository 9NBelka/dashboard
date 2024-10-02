
import { NavLink } from 'react-router-dom'
import clsx from "clsx";
import css from './Navigation.module.css'
//NavLink для стилизации 
export default function Navigation() {
  return (
    <div className={css.navContainer}>
      <nav className={css.nav}>

        <NavLink to="/" className={({ isActive }) =>{
          return clsx(css.link, isActive && css.isActive)
        }}>Home</NavLink> 
        <div className={css.loginAndRegisterBlock}>
          <NavLink to="/login" className={({ isActive }) =>{
            return clsx(css.link, isActive && css.isActive)
          }}>Login</NavLink>

          <NavLink to="/register" className={({ isActive }) =>{
            return clsx(css.link, isActive && css.isActive)
          }}>Register</NavLink>
        </div>
      </nav>
    </div>
  )
} 