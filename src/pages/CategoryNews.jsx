import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {

    const { id } = useParams();

    const [categoryNews, setCategoryNews] = useState([])

    const news = useLoaderData()

    useEffect(() => {
        if(id=='0'){
            setCategoryNews(news)
        }
        else if (id == '1') {
            const filteredData = news.filter(newss => newss.others.is_today_pick==true)
            console.log(filteredData)
            setCategoryNews(filteredData)
        }
        else{
            const filteredData = news.filter(newss=> id==newss.category_id)
            setCategoryNews(filteredData)
        }

    }, [id, news])

    return (
        <div className='flex flex-col gap-5 px-6'>
            {
                categoryNews.map(newws=><NewsCard newws={newws}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;