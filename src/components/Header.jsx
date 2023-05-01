import React from 'react'
import logo from '../images/logo.png'
import {IoIosArrowForward} from 'react-icons/io'

const Header = () => {
  return (
    <div className='header'>
        <div className="head">
            <img src={logo} alt="" className='logo'/>
            <ul className='ul'>
                <li className='li'>HOME</li>
                <li className='li'>ABOUT</li>
                <li className='li'>SERVICE</li>
                <li className='li'>BLOG</li>
                <li className='li'>CONTACT</li>
            </ul>
        </div>
        <div className="body">
            <h1>FIND <span className='colored'>YOUR</span> BEST <br /> OPTION</h1>
            <p>More than a hundred offers with low prices! <br />Starting from $99</p>
            <button className="see-btn">See More <IoIosArrowForward className='for-arrow'/></button>
        </div>
    </div>
  )
}

export default Header