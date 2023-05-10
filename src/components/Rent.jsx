import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import {HiHome} from 'react-icons/hi'
import {IoIosArrowDown} from 'react-icons/io'
import {IoMdPricetag} from 'react-icons/io'
import { useState } from 'react'

const Rent = () => {
    const [showPrice,setshowPrice] = useState(false)
    const show2 = ()=> {
        setshowPrice(!showPrice)
    }
  return (
    <div className='rent'>
        <div className="rent-details">
            <div className="location det details">
                <HiLocationMarker className='icons'/>
                <select className='details-btn rent-btn'>
                  <option value="1">Location</option>
                  <option value="2">Georgia</option>
                </select>
            </div>
            <div className="prop-type det details">
                <HiHome className='icons'/>
                <select className='details-btn rent-btn' >
                  <option value="1">Property Type</option>
                  <option value="2">Standard Room</option>
                  <option value="3">Deluxe Room</option>
                  <option value="4">Superior Room</option>
                </select>
            </div>
            <div className="max-price details">
                <IoMdPricetag className='icons'/>
                <button className='details-btn rent-btn' onClick={show2}>Max Price <IoIosArrowDown className='icon'/></button>
            </div>
            <button className="search-btn">Search</button>
        </div>
        <div className="rent-input">
        {showPrice && (
          <label>
            <input type='number' className='price-input input' />
          </label>
        )}
        </div>
    </div>
  )
}

export default Rent
