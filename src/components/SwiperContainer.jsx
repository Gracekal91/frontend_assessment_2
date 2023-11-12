import React, { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Controller } from 'swiper/modules';
import SlideCard from './SlideCard';
import Divider from './Divider';
import BottomSwiper from './BottomSwiper';
import Navigator from "./Navigator";
import slides from '../assets/data/dummyData.json'
SwiperCore.use([Autoplay, Controller]);

export default function SwiperContainer() {

    const [mySwiper, setMySwiper] = useState(null);
    const [myBtmSwiper, setMyBtmSwiper] = useState(null);

    const handleSlideTo = (index) => {
            mySwiper && mySwiper.slideTo(index);
            myBtmSwiper && myBtmSwiper.slideTo(index);
    };

    return (
        <>
            <Swiper
                modules={[Autoplay, Controller]}
                spaceBetween={50}
                slidesPerView={3}
                onSwiper={(swiper) => {
                    setMySwiper(swiper);
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={500}

                breakpoints={{
                    840:{
                        slidesPerView: 3,
                    },
                    600:{
                        slidesPerView: 2,
                    },
                    0:{
                        slidesPerView: 1,
                    }

                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        onClick={() => {
                            handleSlideTo(index);
                        }}
                    >
                        <SlideCard slide={slide} />
                    </SwiperSlide>
                ))}
                <Divider />
            </Swiper>

            <div className="bottom-section">
                <BottomSwiper slides={slides} mySwiper={mySwiper} setMyBtmSwiper={setMyBtmSwiper} onSlideTo={handleSlideTo} />
            <Navigator mySwiper={mySwiper} myBtmSwiper={myBtmSwiper} onSlideTo={handleSlideTo}/>
            </div>
        </>
    );
}
