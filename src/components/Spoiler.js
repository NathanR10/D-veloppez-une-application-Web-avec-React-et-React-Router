import FlatList from 'flatlist-react/lib'
import React, { useState } from 'react'
import '../styles/Spoiler.css'

export default function Spoiler({label, content, fullwidth}) {
  const [visible, setVisible] = useState()
  
  const setVisibility = () => {
    setVisible(prevState => !prevState)
  }
  return (
      <div className='spoiler_frame' style={fullwidth ? {width: '100%', margin: 'auto', marginBottom: 33} : null}>
        <div id='spoiler_header' className='spoiler_labelFrame' onClick={setVisibility}>
          <p className='spoiler_label'>{label}</p>
          <img className='spoiler_icon' src={visible ? '/spoilerClose.png' : '/spoilerOpen.png'} />
        </div>
        <div id='spoiler_content' style={{display: visible ? 'block' : 'none'}}>
          {Array.isArray(content) ? (
            <ul className='spoiler_listFrame'>
              <FlatList
                list={content}
                renderItem={(item, i) => 
                  <li className='spoiler_listItem' key={i}>
                    {item}
                  </li>
                }
                renderOnScroll
              />
            </ul>
          ) : (
            <p className='spoiler_text'>{content}</p>
          )}
        </div>
      </div>
  )
}

