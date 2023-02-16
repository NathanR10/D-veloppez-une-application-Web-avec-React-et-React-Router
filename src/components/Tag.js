import React from 'react'
import '../styles/Tag.css'

export default function Tag({label}) {
  return (
      <p className='tag_text'>{label}</p>
  )
}

