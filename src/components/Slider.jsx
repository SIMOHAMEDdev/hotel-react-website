import React from "react";
import {BsStarFill} from 'react-icons/bs'

export default function Product(props) {
    return (
      <div className="reviews">
          <div className="slider-wrapper">
            {<div className="review1">
              <div className={props.class}></div>
              <h5>{props.name}</h5>
              <p className="profile">{props.id}</p>
              <div className="stars">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
              </div>
              <p className="review-desc">{props.desc}</p>
            </div>}
        </div>
      </div>
    );
}
