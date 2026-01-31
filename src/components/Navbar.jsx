import React from 'react';
import { NavLink } from 'react-router-dom';
import person from '../assets/user.png'

const NavBar = () => {
    return (
        <div className='flex items-center justify-between mt-3.5'>
            <div></div>
            <div className='nav flex gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex gap-1.5'>
                <img src={person} alt="" />
                <button className="btn btn-primary px-5 text-white">Login</button>
            </div>
        </div>
    );
};

export default NavBar;