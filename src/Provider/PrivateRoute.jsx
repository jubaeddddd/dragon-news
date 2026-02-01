import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    //Object { pathname: "/news-details/bcdefa0123456789bcdefa01", search: "", hash: "", state: null, key: "9slursw1" }

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    else{
       return <Navigate state={location.pathname} to='/auth/signIn'></Navigate>
    }
};

export default PrivateRoute;