import React from 'react'
import '../styles/Rating.css'

export default function Rating({value}) {
  return (
      <div className='rating_frame'>
        <span style={value >= 1 ? {color: '#FF6060'} : null}>★</span>
        <span style={value >= 2 ? {color: '#FF6060'} : null}>★</span>
        <span style={value >= 3 ? {color: '#FF6060'} : null}>★</span>
        <span style={value >= 4 ? {color: '#FF6060'} : null}>★</span>
        <span style={value >= 5 ? {color: '#FF6060'} : null}>★</span>
      </div>
  )
}

