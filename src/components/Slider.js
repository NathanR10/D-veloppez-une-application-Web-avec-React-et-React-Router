import FlatList from 'flatlist-react/lib'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import '../styles/Slider.css'

export default function Slider({images}) {
  const [currentImage, setCurrentImage] = useState(1)
  const sliderRef = useRef(null)
  const slide = (direction) => {
    const slider = sliderRef.current
    const sliderWidth = slider.offsetWidth
  
    if (direction === 'left') {
      setCurrentImage((prevCurrentImage) => {
        const newCurrentImage = prevCurrentImage <= 1 ? images.length : prevCurrentImage - 1
        slider.scrollLeft = (newCurrentImage - 1) * sliderWidth
        return newCurrentImage
      })
    } else {
      setCurrentImage((prevCurrentImage) => {
        const newCurrentImage = prevCurrentImage >= images.length ? 1 : prevCurrentImage + 1
        slider.scrollLeft = (newCurrentImage - 1) * sliderWidth
        return newCurrentImage
      })
    }
  }
  useEffect(() => {
    // Précédent
    document.getElementById('slider_leftButon').addEventListener('click', () => {
      slide('left');
    })
    // Suivant
    document.getElementById('slider_rightButon').addEventListener('click', () => {
      slide('right');
    })
  }, [])
  return (
    <div className='slider_frame' ref={sliderRef}>
      <div className='slider_controler' style={images.length <= 1 ? {display: 'none'} : null}>
        <div id='slider_leftButon' className='slider_controler_leftButton'></div>
        <div id='slider_indicator' className='slider_controler_indicator'>{`${currentImage}/${images.length}`}</div>
        <div id='slider_rightButon' className='slider_controler_rightButton'></div>
      </div>
      <FlatList
          list={images}
          renderItem={(item, i) => 
            <div className='slider_image' key={i} style={{backgroundImage: `url(${item})`}}></div>
          }
          renderOnScroll
        />
    </div>
  )
}
