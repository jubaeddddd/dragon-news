import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SignIn = () => {

    const {signInUser,error,setError}=useContext(AuthContext)

    const location=useLocation();
    //Object { pathname: "/auth/signIn", search: "", hash: "", state: "/news-details/bcdefa0123456789bcdefa01", key: "229cfb22" }

    const navigate=useNavigate();
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('')
        signInUser(email, password)
            .then((result) => {
                console.log(result)
                navigate( location.state?`${ location.state}`: '/')
            })
            .catch((error) => {
                setError(error.code)
            })
    }

    return (
        <div className='flex justify-center items-center mt-12'>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div class="card-body">
                    <h1 className='text-2xl font-semibold text-center'>Login Your Account</h1>
                    <form onSubmit={handleSignIn} class="fieldset">
                        <label class="label">Email</label>
                        <input name='email' type="email" class="input" placeholder="Email" />
                        <label class="label">Password</label>
                        <input name='password' type="password" class="input" placeholder="Password" />
                        <div><a class="link link-hover">Forgot password?</a></div>
                        <button class="btn btn-neutral mt-4">Login</button>
                        <Link to='/auth/register' className='text-center mt-3  text-sm'>New here?<span className='text-secondary'>
                            Register</span></Link>
                        {
                            error && <p className='text-xs text-red-600'>{error}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;