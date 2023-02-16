import React from 'react'
import '../styles/TextBanner.css'

export default function TextBanner({label, img}) {
  return (
    <p className='textBanner_frame' style={{backgroundImage: `url(${img})`}}>{label}</p>
  )
}
