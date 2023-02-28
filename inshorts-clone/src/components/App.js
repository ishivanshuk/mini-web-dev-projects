import React from 'react';
import '../styles/App.css';
import {useState} from "react";
import Navinshorts from './Navinshorts';
import { NewsContent } from "./NewContent/NewsContent";
import axios from "axios";
import {useEffect} from "react"
import { Footer } from "./Footer/Footer";
const App = () => {

  const [category, setCategory] = useState("All");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [Loadmore, setLoadmore] = useState(5)

  const newsApi = async () => {
    try{
      const news = await axios.get(
        'https://inshorts.deta.dev/news?category='+category.toLocaleLowerCase()+'&pageSize='+Loadmore
        );
      setnewsArray(news.data.data);
      setnewsResults(news.data.data.length);

    } 
      catch (error) {
      console.log(error);
    }
  };

  console.log(newsResults);

  useEffect( () => {
      newsApi();
  }, [newsResults, category, Loadmore])
  


  return (
    <div id="main">
      <div className="App"> 
      <Navinshorts setCategory={setCategory} />

      <NewsContent newsArray={newsArray} 
                   newsResults={newsResults} 
                   Loadmore={Loadmore} 
                   setLoadmore={setLoadmore}/>

      <Footer/>

    </div>
      
    </div>
  )
}


export default App;
