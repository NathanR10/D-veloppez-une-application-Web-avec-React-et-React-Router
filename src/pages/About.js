import React from 'react'
import TextBanner from '../components/TextBanner'
import Spoiler from '../components/Spoiler'
import '../styles/About.css'

export default function About() {

  return (
    <div>
      <TextBanner label={''} img={'/bannerAbout.png'} />
      <div className='about_frame'>
        <Spoiler
          fullwidth
          label={'Fiabilité'}
          content={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}
        />
        <Spoiler
          fullwidth
          label={'Respect'}
          content={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}
        />
        <Spoiler
          fullwidth
          label={'Service'}
          content={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
        />
        <Spoiler
          fullwidth
          label={'Sécurité'}
          content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
        />
      </div>
    </div>
  )
}
