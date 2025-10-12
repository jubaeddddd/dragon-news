import React from 'react';
import Marquee from 'react-fast-marquee';

const NewsMarquee = () => {
    return (
        <div className='flex w-11/12 mx-auto my-5 bg-[#F3F3F3] items-center p-4 gap-1.5'>
            <p className='bg-[#D72050] text-white p-2 px-4'>latest</p>
            <Marquee pauseOnHover={true} speed={89}>
                <p className='mr-5 font-bold'>Apple Unveils M4 Chipset With Groundbreaking AI Capabilities</p>
                <p className='mr-5 font-bold'>Global Leaders Gather for Climate Summit in Paris</p>
                <p className='mr-5 font-bold'>UN Warns of Rising Sea Levels Threatening Coastal Cities</p>
                <p className='mr-5 font-bold'>Massive Earthquake Shakes South America; Relief Efforts Underway</p>
                <p className='mr-5 font-bold'>Cricket World Cup 2027: Teams Begin Preparations Early</p>
                <p className='mr-5 font-bold'>Global Leaders Gather for Climate Summit in Paris</p>
            </Marquee>
        </div>
    );
};

export default NewsMarquee;