import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const {registerUser, setUser, updateUser } = useContext(AuthContext)
    const [nameError, setNameError] = useState('')
    const navigate=useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        if (name.length < 5) {
            setNameError("name should be more than 5 characters.")
            return
        }
        else {
            setNameError('')
        }
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        registerUser(email, password)
            .then((result) => {
                const userr=result.user
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({...userr, displayName: name, photoURL: photo} )
                        navigate('/')
                    })
                    .catch(()=>{
                        setUser(userr)
                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='flex justify-center items-center mt-12'>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div class="card-body">
                    <h1 className='text-2xl font-semibold text-center'>Register Your Account</h1>
                    <form onSubmit={handleRegister} class="fieldset">
                        <label class="label">Name</label>
                        <input name='name' type="text" class="input" required placeholder="Name" />
                        {
                            nameError && <p className='text-red-700 '>{nameError}</p>
                        }
                        <label class="label">Photo URL</label>
                        <input name='photo' type="text" class="input" required placeholder="Photo URL" />
                        <label class="label">Email</label>
                        <input name='email' type="email" class="input" required placeholder="Email" />
                        <label class="label">Password</label>
                        <input name='password' type="password" class="input" required placeholder="Password" />
                        <div><a class="link link-hover">Forgot password?</a></div>
                        <button class="btn btn-neutral mt-4 submit">Register</button>
                        <Link to='/auth/signIn' className='text-center mt-3  text-sm'>New here?<span className='text-secondary'>
                            Login</span></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;