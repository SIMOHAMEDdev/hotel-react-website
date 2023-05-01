import React from 'react'
import pic1 from '../images/room1.jpg'
import pic2 from '../images/room4.jpg'
import pic3 from '../images/room2.jpg'

const Rooms = () => {
  return (
    <div className='rooms'>
      <div className="room">
      <h2 className='h2-rooms'><span className="rooms-title">Enjoy every moment</span> <br /> ROOMS AVAILABLE <br /> <div className="underline"></div></h2>
        <div className="available">
        <div className="room1">
          <img src={pic2} alt="" className='room-img'/>
          <div className="room-details">
            <span className='room-title'>Standard Room</span>
            <span className="room-price">Averaga price $99</span>
          </div>
        </div>

        <div className="room1">
          <img src={pic1} alt="" className='room-img'/>
          <div className="room-details">
            <span className='room-title'>Deluxe Room</span>
            <span className="room-price">Averaga price $119</span>
          </div>
        </div>

        <div className="room1">
          <img src={pic3} alt="" className='room-img'/>
          <div className="room-details">
            <span className='room-title'>Superior Room</span>
            <span className="room-price">Averaga price $189</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Rooms