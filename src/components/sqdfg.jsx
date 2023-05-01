import React from 'react'

const sqdfg = () => {
  return (
    <div>
        <h2 className='h2-rooms'><span className="rooms-title">Our testimonials</span> <br /> CLIENTS REVIEWS <br /> <div className="underline underline1"></div></h2>
        <div className="review">
            <button className='btns'><GrFormPrevious className='pn-btn'/></button>
            <div className="review1">
                <div className="customer-img"></div>
                <h5>Jenny Wilson</h5>
                <p className="profile">@Jennycat</p>
                <div className="stars">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                </div>
                <p className="review-desc">That was the best hotel i've been to in a long time!
                 Wonderful resting zones and cheap rooms with a great view.</p>
            </div>

            <div className="review1">
                <div className="customer-img o2"></div>
                <h5>Leslie Alexander</h5>
                <p className="profile">@Leslll_</p>
                <div className="stars">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                </div>
                <p className="review-desc">Honestly,that is the best place in georgia out of the ones I have been to.
                Great staff, comfortable rooms and great resting zones!</p>
            </div>

            <div className="review1">
                <div className="customer-img o3"></div>
                <h5>Bessie Cooper</h5>
                <p className="profile">@Cooper_bessieee</p>
                <div className="stars">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                </div>
                <p className="review-desc">We have travelled here from another country and did not regret it! Pleasant
                conditions and the best prices</p>
            </div>
            <button className='btns'><GrFormNext className='pn-btn'/></button>
        </div>
        <div className='feedback'>
            <button className='send-btn'>Send Feedback</button>
            <p className="btn-desc">Only after accommodation <br /> payment</p>
        </div>
    </div>
  )
}

export default sqdfg