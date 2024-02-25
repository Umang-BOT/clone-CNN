import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Menubar from './Menubar'
import Recent_news from './Recent_news'

const Main = () => {
    const [news, setNews] = useState([]);
    const [menu,setMenu]=useState("general")

    const getNews = async () => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${menu}&sortBy=popularity&apiKey=a765e240b016479f91a06d3668d61dfc`);
            const json = await response.json();
            setNews(json.articles); // Assuming the articles are stored in the 'articles' property of the JSON response
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getNews();
    }, [menu]);
  return (
    <div>
        <Navbar setMenu={setMenu}/>
        <Menubar news={news}/>
        <Recent_news news={news}/>
        <Home news={news}/>
    </div>
  )
}

export default Main