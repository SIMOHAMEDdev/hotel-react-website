import React from 'react'
import logo from '../images/logo.png'
import {BiHome} from 'react-icons/bi'
import {BiPhone} from 'react-icons/bi'
import {IoAtCircleOutline} from 'react-icons/io5'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'

const Map = () => {
  return (
    <div className='maps'>
      <div className="map">
        <div className="map1">
          <img src={logo} alt="" className='map-logo'/>
          <div className="company-info">
            <span className='company-det'><BiHome className='info-icon'/> 11 Ninoshvili St, Batumi 6000, Georgia</span> <br />
            <span className='company-det'><BiPhone className='info-icon'/>+7(495)-999-55-35</span> <br />
            <span className='company-det'><IoAtCircleOutline className='info-icon'/>intouristhot@gmail.com</span> <br />
            <span className='company-det'><AiOutlineClockCircle className='info-icon'/>Everyday: 8AM-12AM</span> <br />
          </div>
          <div className="social-media">
            <div className="social"><FaTelegramPlane /></div>
            <div className="social"><FiInstagram/></div>
            <div className="social"><AiOutlineTwitter /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map