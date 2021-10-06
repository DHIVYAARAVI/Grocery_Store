import React from 'react'
import './contacts.css'
import img9 from '../../images/9.png'
import img26 from '../../images/37.png'
import img27 from '../../images/38.png'
import img28 from '../../images/39.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="font">
                <span>G</span>rocery
                <br></br>
                <span>S</span>tore
            </div>
            <div className="img_footer">
                <a href="/"><img src={img9} className="image"/></a>
                <a href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/"><img src={img28} className="image" /></a>
                <a href="https://www.instagram.com/theentrepreneurshipnetwork/"><img src={img27} className="image" /></a>
                <a href="https://twitter.com/We_Are_TEN?s=08"><img src={img26} className="image" /></a>
            </div>
        </div>
    )
}
