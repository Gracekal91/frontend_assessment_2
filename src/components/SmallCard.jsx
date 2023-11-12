import React from 'react';

const SmallCard = ({ item, index, mySwiper, myBottomSwiper, onSlideTo}) => {
    const isIndexTrue = () => myBottomSwiper?.activeIndex === index;


    const handleClick = () => {
        mySwiper && mySwiper.slideTo(index);
        myBottomSwiper && myBottomSwiper.slideTo(index);
        onSlideTo(index);
    };

    return (
        <div
            className={`slide-card-container ${isIndexTrue() ? 'active' : ''}`}
            style={{ width: '80px', cursor: 'pointer' }}
            onClick={handleClick}
        >
            <p className='bottom-text'> {item?.year} </p>
        </div>
    );
};

export default SmallCard;
