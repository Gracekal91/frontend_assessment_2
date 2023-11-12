import React from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import logo1 from '../assets/images/1.png'
import logo2 from '../assets/images/2.png'
import logo3 from '../assets/images/3.png'
import logo4 from '../assets/images/4.png'
import logo5 from '../assets/images/5.png'
import logo6 from '../assets/images/6.png'

const images = {
    1: logo1,
    2: logo2,
    3: logo3,
    4: logo4,
    5: logo5,
    6: logo6
};

const SlideCard = ({ isActive, slide }) => {
    return (
        <SwiperSlide>
            <div className={`slide-card-container ${isActive ? 'active' : ''}`}>
                <img
                    className="mm-logo"
                    src={images[slide.id + 1]}
                    alt={slide?.year}
                />
                <p>{slide?.year}</p>
                <h1 className="mm-card-content">
                    {slide?.title}
                </h1>
            </div>
        </SwiperSlide>
    );
};

export default SlideCard;
