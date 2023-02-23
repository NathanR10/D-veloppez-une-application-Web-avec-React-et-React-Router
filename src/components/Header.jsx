import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Header.css'

export default function Header() {
  const location = useLocation().pathname
  return (
    <nav className='header_nav'>
      <img className='header_logo' src="/logo.png" />
      <div>
        <Link className='header_navLink' style={location === "/" ? { textDecoration: 'underline' } : null} to="/">
          Accueil
        </Link>
        <Link className='header_navLink' style={location === "/a-propos" ? { textDecoration: 'underline' } : null} to="/a-propos">
          A Propos
        </Link>
      </div>
    </nav>
  )
}
