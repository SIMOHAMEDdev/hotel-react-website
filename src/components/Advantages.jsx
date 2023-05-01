import React from 'react'
import {FaPlay} from 'react-icons/fa'

const Advantages = () => {
  return (
    <div className='advantages'>
        <div className="advantage">
        <div className="text">
            <h1 className='text-title'>ALL NEEDS ARE <br /> <span>AT HAND</span></h1>
            <div className="div">
                <p className="descr">Lots of entertaining places to <br /> spend time at! The guest hall, <br /> SPA salon, Bar and Bathhouse are <br /> all at your disposal. Made in the <br /> greatest traditions of Intourist</p>
                <p className="descr">Harmonious combination of the <br /> city comfort, price and quality. <br /> The best place for your <br /> memorable resort</p>
            </div>
        </div>
        <div className="inturist">
            <div className="big-inturist">
                <p className="inurist-title">INTURIST</p>
            </div>
            <div className="small-inturist spa">
                <p className="inurist-title">INTURIST</p>
                <h3>SPA</h3>
            </div>
            <div className="small-inturist bar">
                <p className="inurist-title">INTURIST</p>
                <h3>BAR</h3>
            </div>
            <div className="small-inturist rest-room">
                <p className="inurist-title">INTURIST</p>
                <h3>RESTROOM</h3>
            </div>
            <div className="small-inturist bath-house">
                <p className="inurist-title">INTURIST</p>
                <h3>BATH HOUSE</h3>
            </div>
        </div>
        <div className="video">
        <div className="video-desc">
                <h2>CHECK OUT OUR TOURS OF EVERY ROOM <br /> IN THE HOTEL</h2>
                <p className="vid-desc">In this tour we're going to uncover the pros of our hotel <br /> and view our various rooms and resting zones. <br />This allows you to choose your best fit.</p>
            </div>
            <div className="video-container"><div className="play-co"><FaPlay className='play'/></div></div>
        </div>
        </div>
    </div>
  )
}

export default Advantages