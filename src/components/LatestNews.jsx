import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex flex-row bg-base-200 mt-7 p-2'>
            <p className='bg-secondary text-white text-center py-3 px-4'>Latest</p>
            <Marquee className='flex ' pauseOnHover={true} speed={200}>
                <p>Lorem, ipsum dolor sit amet consectetur </p>
                <p>Lorem, ipsum dolor sit amet consect</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;