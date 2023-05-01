import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import {HiHome} from 'react-icons/hi'
import {IoIosArrowDown} from 'react-icons/io'
import {IoMdPricetag} from 'react-icons/io'
import { useState } from 'react'

const Rent = () => {
    const [visiblity,setVisiblity] = useState(false)
    const [showRent,setShowRent] = useState(false)
    const [showPrice,setshowPrice] = useState(false)
    const changeState = ()=> {
        setVisiblity(!visiblity)
    }
    const show1 = ()=> {
        setShowRent(!showRent)
    }
    const show2 = ()=> {
        setshowPrice(!showPrice)
    }

    const {prop,setProp} = useState("georgia")
    let text = `Location`
    let val
    const changeProp = (event) => {
        // setProp(event.target.value);
        text = event.target.val
      };
      const changeText = (event) => {
        // setProp(event.target.value);
        text = event.target.val
      };
  return (
    <div className='rent'>
        <div className="rent-details">
            <div className="location det details">
                <HiLocationMarker className='icons'/>
                {/* <button className='details-btn rent-btn' onClick={show1}>{text} <IoIosArrowDown className='icon'/></button> */}
                <select className='details-btn rent-btn'>
                  <option value="1">Location</option>
                  <option value="2">Georgia</option>
                </select>
            </div>
            <div className="prop-type det details">
                <HiHome className='icons'/>
                {/* <button className='details-btn rent-btn' onClick={changeState}>{text}</button> */}
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
        {/* {showRent && (
          <label>
            <input type='text' className='loca-input input' value={val} onChange={changeText}/>
          </label>
        )} */}
        {/* {visiblity && (
          <label className='label'>
            <div
              className='prop-input'
              data-value='Apartment'
              onClick={changeProp}
            >
              Standard Room
            </div>
            <div
              className='prop-input'
              data-value='House'
              onClick={changeProp}
            >
              Deluxe Room
            </div>
            <div
              className='prop-input'
              data-value='Villa'
              onClick={changeProp}
            >
              Superior Room
            </div>
          </label>
        )} */}
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