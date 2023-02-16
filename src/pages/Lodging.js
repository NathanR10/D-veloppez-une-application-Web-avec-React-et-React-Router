import axios from 'axios'
import FlatList from 'flatlist-react/lib'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import Slider from '../components/Slider'
import Spoiler from '../components/Spoiler'
import Tag from '../components/Tag'
import '../styles/Lodging.css'

export default function Lodging() {
  const [lodging, setLodging] = useState({});
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('../lodgings.json')
    .then((res) => {
      setLodging(res.data.find(x => x.id === id))
    })
    .catch((err) => {
      // console.log(err)
      navigate('/404')
    })
  }, [])

  return (
    <div>
      {lodging.pictures && (
        <div>
          <Slider images={lodging.pictures} />
          <div className='lodging_headerFrame'>
            <div>
              <h1 className='lodging_title'>{lodging.title}</h1>
              <h2 className='lodging_location'>{lodging.location}</h2>
              <div className='lodging_tagFrame'>
                <FlatList
                  list={lodging.tags}
                  renderItem={(item, i) => 
                    <Tag
                      key={i}
                      label={item}
                    />
                  }
                  renderOnScroll
                />
              </div>
            </div>
            <div className='lodging_hostMainFrame'>
              <div className='lodging_hostFrame'>
                <p className='lodging_hostName'>{lodging.host.name}</p>
                <img className='lodging_hostPicture' src={lodging.host.picture} />
              </div>
              <Rating value={lodging.rating} />
            </div>
          </div>
          <div className='lodging_spoilerFrame'>
            <Spoiler label={'Description'} content={lodging.description} />
            <Spoiler label={'Équipements'} content={lodging.equipments} />
          </div>
        </div>
      )}
    </div>
  )
}
