import React from 'react';
import Brands from '../components/Brands';
import Slider from '../components/Slider';
import HomeProducts from '../components/HomeProducts';

const Home = () => {
    return (
        <div>
            <Slider />
            <Brands />
            <HomeProducts />
        </div>
    );
};

export default Home;