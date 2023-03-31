import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-bold'><NavLink to='/'>Home</NavLink></li>
                        <li className='font-bold'><NavLink to='/allproducts' >All Products</NavLink></li>
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost normal-case text-2xl">Our Shop</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-bold'><NavLink to='/'>Home</NavLink></li>
                    <li className='font-bold'><NavLink to='/allproducts'>All Products</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/login' className="btn">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;