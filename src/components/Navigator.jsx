import React from 'react'
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";

const Navigator = ({mySwiper, myBtmSwiper, onSlideTo}) => {
    const handlePrev = () => {
        mySwiper && mySwiper.slidePrev();
        myBtmSwiper && myBtmSwiper.slidePrev();
    };

    const handleNext = () => {
        mySwiper && mySwiper.slideNext();
        myBtmSwiper && myBtmSwiper.slideNext();
    };

    return (
        <div className="button-container">
                    <span
                        className="button"
                        onClick={handlePrev}
                    >
                        <PiCaretLeftBold />
                    </span>
            <span
                className="button"
                onClick={handleNext}
            >
                        <PiCaretRightBold />
                    </span>
        </div>
    )
}

export default Navigator
