import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Tale from '../components/Tale'
import FlatList from 'flatlist-react/lib'
import TextBanner from '../components/TextBanner'
import '../styles/Home.css'

export default function Home() {
  const [lodgings, setLodgings] = useState([])

  useEffect(() => {
    axios.get('./lodgings.json')
      .then((res) => {
        setLodgings(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <TextBanner label={'Chez vous, partout et ailleurs'} img={'/bannerHome.png'} />
      <div className='home_talesFrame'>
        <FlatList
          list={lodgings}
          renderItem={(item) =>
            <Tale
              key={item.id}
              id={item.id}
              label={item?.title}
              img={item?.pictures?.[0]}
            />
          }
          renderOnScroll
        />
        <div className='home_lastTale'></div>
      </div>
    </>
  )
}
