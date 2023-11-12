import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Controller } from 'swiper/modules';
import SmallCard from './SmallCard';

SwiperCore.use([Autoplay, Controller]);

export default function BottomSwiper({ slides, mySwiper, setMyBtmSwiper, onSlideTo }) {
    const [myBottomSwiper, setMyBottomSwiper] = useState(null);

    return (
        <>
            <Swiper
                modules={[Autoplay, Controller]}
                spaceBetween={50}
                slidesPerView={5}
                onSwiper={(swiper) => {
                    setMyBtmSwiper(swiper);
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                controller={{ control: mySwiper }}
                loop
                speed={500}
                breakpoints={{
                    840:{
                        slidesPerView: 5,
                    },
                    600:{
                        slidesPerView: 4,
                    },
                    0:{
                        slidesPerView: 3,
                    }

                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <SmallCard
                            item={slide}
                            index={index}
                            mySwiper={mySwiper}
                            myBottomSwiper={myBottomSwiper}
                            onSlideTo={onSlideTo}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
