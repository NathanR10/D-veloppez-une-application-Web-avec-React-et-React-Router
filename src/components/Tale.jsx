import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Tale.css'

export default function Tale({ label, img, id }) {
  return (
    <Link
      className='tale_frame'
      style={{ backgroundImage: `url(${img})` }}
      to={`/logement/${id}`}
    >
      <p className='tale_text'>{label}</p>
    </Link>
  )
}

