
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                  <Header></Header>
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