import React from 'react';
import { NavLink } from 'react-router-dom';
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='mx-auto w-11/12 flex justify-between items-center'>
            <div>

            </div>
            <div className='flex gap-3'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-2'>
                <img src={user} alt="" />
                <button className='btn bg-[#403F3F] text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;