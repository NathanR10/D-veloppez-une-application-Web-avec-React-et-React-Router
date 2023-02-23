import React from 'react'
import { Link  } from 'react-router-dom'
import '../styles/NotFound.css'

export default function NotFound() {

  return (
    <div className='notFound_frame'>
      <p className='notFound_title'>404</p>
      <p className='notFound_text'>Oups! La page que vous demandez n'existe pas.</p>
      <Link className='notFound_link' to="/">Retourner sur la page d’accueil</Link>
    </div>
  )
}
