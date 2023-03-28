import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../componenets/Footer';
import Navbar from '../componenets/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;