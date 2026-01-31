import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navigate to="/category/1"></Navigate>
        </div>
    );
};

export default Home;