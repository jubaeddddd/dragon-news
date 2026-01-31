import React from 'react';
import { use } from 'react';
import { NavLink } from 'react-router-dom';

const categoriesPromise = fetch('/public/categories.json').then(res => res.json())

const LeftAside = () => {
    const categories = use(categoriesPromise)
    return (
        <div>
            <h1 className='font-bold'>All Categories: {categories.length}</h1>
            <div className='grid grid-cols-1 gap-4 mt-3'>
                {
                    categories.map(category =>
                        <NavLink className='btn bg-base-100 border-0  
                        hover:bg-base-300' to={`/category/${category.id}`}>{category.name}</NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default LeftAside;