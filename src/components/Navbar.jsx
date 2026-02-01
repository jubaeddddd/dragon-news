import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import person from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';


const NavBar = () => {
    const {user,logoutUser}=useContext(AuthContext)

    const handleLogout=(e)=>{
        e.preventDefault()
        
        logoutUser()
    }

    return (
        <div className='flex items-center justify-between my-6'>
            <div>
                {user && user.email}
            </div>
            <div className='nav flex gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='login-btn flex gap-1.5'>
                <img className='w-12 rounded-full' src={user ? user.photoURL : person} alt="" />
                {
                    user? <button onClick={handleLogout} className="btn btn-primary px-5 text-white">Logout</button>
                     :<Link to='/auth/signIn' className="btn btn-primary px-5 text-white">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;