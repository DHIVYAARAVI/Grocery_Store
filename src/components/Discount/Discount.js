import React from 'react'
import './discount.css'
import img23 from '../../images/30.png'

export default function Products() {
    return (
        <div className="special_pro">
            <div className="special_div">Special Discount for <br></br>ALL GROCERIES <br></br>from Oct 1 to Oct 31</div>
            <img src={img23} className="img23"/>
        </div>
    )
}
