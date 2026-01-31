import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import NavBar from '../Components/NavBar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
                <section>
                    <NavBar></NavBar>
                </section>
            </header>
            <main className='grid grid-cols-12'>
                <section className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </section>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <section className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;