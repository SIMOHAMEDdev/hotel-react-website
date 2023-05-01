import React from 'react'
import Apa1 from '../images/apa1.jpg'
import Apa2 from '../images/apa2.png'
import Apa3 from '../images/apa3.jpg'
import Pers1 from '../images/2.jpg'
import Pers2 from '../images/0.webp'
import Pers3 from '../images/1.webp'
import {HiLocationMarker} from 'react-icons/hi'
import {IoBedSharp} from 'react-icons/io5'
import {FaBath} from 'react-icons/fa'
import {FaRegSquare} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
import {GrShareOption} from 'react-icons/gr'
import { useState } from 'react'

const Offers = () => {
    const [hearted,setHearted] = useState(false)
    const [hearted1,setHearted1] = useState(false)
    const [hearted2,setHearted2] = useState(false)
    const likePost = ()=> {
        setHearted(!hearted)
    }
    const likePost1 = ()=> {
        setHearted1(!hearted1)
    }
    const likePost2 = ()=> {
        setHearted2(!hearted2)
    }
  return (
    <div className='offers'>
        <div className="cont">
        <div className="offer">
            <img src={Apa1} alt="" className='offer-img'/>
            <div className='popular'>MOST POPULAR</div>
            <div className="information">
                <div className="info-head">
                    <div className='h3'>Luxe Apartement</div>
                    <div className='apa-price'>$139</div>
                </div>
                <div className="apa-location"><HiLocationMarker className='loc-icon' /> Batumi, georgia</div>
                <div className="more-info">
                    <div className='more'><IoBedSharp className='icon1'/>4</div>
                    <div className='more'><FaBath className='icon1'/>2</div>
                    <div className='more'><FaRegSquare className='icon1'/>90m²</div>
                </div>
                <div className="owner">
                    <div className="owner-info">
                        <img src={Pers1} alt="" className='owner-img'/>
                        <p className='name'>Henry Levall</p>
                    </div>
                    <div className="react">
                        <AiFillHeart className={hearted? 'hearted' : 'heart'} onClick={likePost}/>
                        <GrShareOption className='share'/>
                    </div>
                </div>
            </div>
        </div>

        <div className="offer">
            <img src={Apa2} alt="" className='offer-img'/>
            <div className='popular'>MOST POPULAR</div>
            <div className="information">
                <div className="info-head">
                    <div className='h3'>Luxe Apartement</div>
                    <div className='apa-price'>$139</div>
                </div>
                <div className="apa-location"><HiLocationMarker className='loc-icon'/> Batumi, georgia</div>
                <div className="more-info">
                    <div className='more'><IoBedSharp className='icon1'/>3</div>
                    <div className='more'><FaBath className='icon1'/>1</div>
                    <div className='more'><FaRegSquare className='icon1'/>62m²</div>
                </div>
                <div className="owner">
                    <div className="owner-info">
                        <img src={Pers2} alt="" className='owner-img'/>
                        <p className='name'>Samantha Alex</p>
                    </div>
                    <div className="react">
                        <AiFillHeart className={hearted1? 'hearted' : 'heart'} onClick={likePost1}/>
                        <GrShareOption className='share'/>
                    </div>
                </div>
            </div>
        </div>

        <div className="offer">
            <img src={Apa3} alt="" className='offer-img'/>
            <div className='popular'>MOST POPULAR</div>
            <div className="information">
                <div className="info-head">
                    <div className='h3'>Luxe Apartement</div>
                    <div className='apa-price'>$139</div>
                </div>
                <div className="apa-location"><HiLocationMarker className='loc-icon' /> Batumi, georgia</div>
                <div className="more-info">
                    <div className='more'><IoBedSharp className='icon1'/>3</div>
                    <div className='more'><FaBath className='icon1'/>2</div>
                    <div className='more'><FaRegSquare className='icon1'/>85m²</div>
                </div>
                <div className="owner">
                    <div className="owner-info">
                        <img src={Pers3} alt="" className='owner-img'/>
                        <p className='name'>Jennifer Law</p>
                    </div>
                    <div className="react">
                        <AiFillHeart className={hearted2? 'hearted' : 'heart'} onClick={likePost2}/>
                        <GrShareOption className='share'/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Offers