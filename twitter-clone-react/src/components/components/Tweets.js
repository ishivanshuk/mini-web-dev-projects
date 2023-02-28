import React from "react";
import CreateTweet from "./CreateTweet";
import Posts from "./Posts";
import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import Pagination from "./Pagination"


const Twittes = () => {

  const [category, setCategory] = useState("All");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();

  const newsApi = async () => {
    try{
      const news = await axios.get(
        'https://inshorts.deta.dev/news?category=all'
        );
      setnewsArray(news.data.data);
      setnewsResults(news.data.data.length);

    } 
      catch (error) {
      console.log(error);
    }
  };

  console.log(newsArray);

  useEffect( () => {
      newsApi();
  }, [newsResults ])

  return (
    <div className="posts">
      <div className="posts__home">Home</div>
      <CreateTweet />
      <div className='content'> 
      {newsResults > 0 ? (
        
          <Pagination
            data={newsArray} 
            RenderComponent={Posts}
            pageLimit={5}
            dataLimit={5}
            newsResults={newsResults}
          />
       
      ) : (
       <h1>No Posts to display</h1>
      )}
      </div>
    </div>
  );
};

export default Twittes;
