import React from 'react'
import './Brand.scss'
import Marker from '../../assets/svg/Marker.svg'
import Puma from '../../assets/svg/puma.svg'
import New  from '../../assets/svg/New.svg'
import adidas from '../../assets/svg/adidas.svg'
import reebok from '../../assets/svg/reebok.svg'

function Brand() {
  return (
    <div className='section-9'>
      <section className='container'>
        <img src={Marker} alt="" />
        <img src={New} alt="" />
        <img src={Puma} alt="" />
        <img src={adidas} alt="" />
        <img src={reebok} alt="" />
      </section>
    </div>
  )
}

export default Brand

