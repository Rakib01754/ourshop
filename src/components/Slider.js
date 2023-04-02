import axios from 'axios';
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import { Link } from 'react-router-dom';

const Slider = () => {

    const [adItems, setAdItems] = useState([])
    console.log(adItems)

    useEffect(() => {
        axios.get('http://localhost:5000/advertised')
            .then(response => {
                const items = response.data;
                setAdItems(items)
            })
            .catch(error => (console.log(error)))
    }, [])
    return (
        <>
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
            >
                {
                    adItems.map(aditem =>
                        <SwiperSlide key={aditem._id}>
                            <img src={aditem.picture} alt={aditem.name} />
                            <button><Link to={`/product/${aditem._id}`}>See Details</Link></button>
                        </SwiperSlide>)
                }
            </Swiper>
        </>
    )
}

export default Slider;
