import React from 'react'
import {TbToolsKitchen} from 'react-icons/tb'
import {AiOutlineSafety} from 'react-icons/ai'
import {MdSpa} from 'react-icons/md'
import {BiDrink} from 'react-icons/bi'
import {RiParkingBoxLine} from 'react-icons/ri'
import {MdOutlineRoomService} from 'react-icons/md'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner1">
            <h1 className="banner-title">WHY SHOULD YOU CHOOSE <br /> <span>OUR HOTEL</span></h1>
            <div className="service">
            <div>
                <div className="rooms-num">
                    <span className='number'>58</span>
                    <span className="number-title num-title">ROOMS</span>
                </div>
            </div>

            <div>
                <div className="rooms-num">
                    <span className='number'>6</span>
                    <span className="number-title num-title">HALLS</span>
                </div>
            </div>

            <div>
                <div className="rooms-num">
                    <span className='number'><TbToolsKitchen /></span>
                    <span className="number-title">RESTAURANT</span>
                </div>
            </div>

            <div>
                <div className="rooms-num">
                    <span className='number'><AiOutlineSafety /></span>
                    <span className="number-title">SAFETY</span>
                </div>
            </div>

            <div>
                <div className="rooms-num">
                    <span className='number'><MdSpa /></span>
                    <span className="number-title">SPA</span>
                </div>
            </div>

            <div>
                <div className="rooms-num">
                    <span className='number'><BiDrink /></span>
                    <span className="number-title">BAR</span>
                </div>
            </div>

            <div>
                <div className="rooms-num">
                    <span className='number'><RiParkingBoxLine /></span>
                    <span className="number-title">PARKING</span>
                </div>
            </div>

            <div>
                <div className="rooms-num">
                    <span className='number'><MdOutlineRoomService /></span>
                    <span className="number-title">SERVICE</span>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner