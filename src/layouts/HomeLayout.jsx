
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NewsMarquee from '../components/NewsMarquee';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <NewsMarquee></NewsMarquee>
                <Navbar></Navbar>
            </header>
            <section>
                <div className='leftSide'></div>
                <div className='middleSide'>
                    <Outlet></Outlet>
                </div>
                <div className='rightSide'></div>
            </section>
        </div>
    );
};

export default HomeLayout;