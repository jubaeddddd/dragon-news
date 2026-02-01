import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import RightAside from '../Components/HomeLayout/RightAside';

const NewsDetails = () => {

    const { newsId } = useParams()

    const data = useLoaderData();

    const [news, setNews] = useState([])

    useEffect(() => {
        const findingNews =data.find(newss=>newss.id==newsId)
        setNews(findingNews)
        
        }, [newsId,news,setNews,data])

    return (
        <div className='mb-11'>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 mt-8 w-11/12 mx-auto gap-6 mb-12'>
                <div className='flex flex-col gap-4 col-span-9'>
                    <img className='rounded-xl' src={news.image_url} alt="" />
                    <h1 className='text-3xl font-bold'>{news.title}</h1>
                    <p className='text-gray-500'>{news.details}</p>
                    <Link to={`/category/${news.category_id}`} className='btn btn-secondary text-white w-1/6'
                    >All category news</Link>
                </div>
                <div className='col-span-3'>
                    <RightAside></RightAside>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;