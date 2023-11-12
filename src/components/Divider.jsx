import React from 'react'
import {BsFillCaretRightFill} from "react-icons/bs";


const Divider = () => {
    return (
        <div className='divider-container'>
            <div className="first-line">
                <div className="line"></div>
                <div className="dot"></div>
            </div>
            <div className="second-line">
                <div className="line"></div>
                <div className="dot"></div>
            </div>
            <div className="third-line">
                <div className="line"></div>
                <div className="arrow">
                    <BsFillCaretRightFill color='rgba(135, 123, 77, 1.0)'/>
                </div>
            </div>
        </div>
    )
}

export default Divider
