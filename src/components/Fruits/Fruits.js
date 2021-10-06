import React from 'react'
import './fruits.css'
import img7 from '../../images/13.png'
import img8 from '../../images/15.png'

export default function Fruits() {
    return (
        <div className="fruits">
            <div className="apple">
                <img src={img7} className="apple_img" />
                <div>
                    <h3 className="apple_h3">100% Organic Fruits</h3>
                    <button className="apple_btn">Buy Now</button>
                </div>
            </div>
            <div className="melon">
                <img src={img8} className="melon_img" />
                <div>
                    <h3 className="melon_h3">100% Organic Fruits</h3>
                    <button className="melon_btn">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
