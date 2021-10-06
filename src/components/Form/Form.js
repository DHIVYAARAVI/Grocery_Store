import React from 'react'
import './form.css'

export default function Form() {
    return (
        <div className="form_head">
            <div className="form">
                <h2>Subscribe to our Newsletter</h2>
                <input type="text" placeholder="Enter you Email Address" />
                <button className="form_btn">Submit</button>
            </div>
        </div>
    )
}
