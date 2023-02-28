import React from "react";
import axios from "axios";
import {
  FaRegCheckCircle,
  FaTwitter,
} from "react-icons/fa";
const Posts = ({newsItem} ) => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
         <FaTwitter/>
        </div>
        <div className="posts__first__name">
          <strong>{newsItem.author?newsItem.author:"unknown"}</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @{newsItem.author?newsItem.author:"unknown"} <span>6m</span>
        </div>
      </div>
      <div className="postss__details">
      <strong>{newsItem.title}</strong><br/>
      <img alt={newsItem.title} src={newsItem.imageUrl} className='newsImage' style={{height: 'auto',width: 'auto','max-width': '300px','max-height': '300px'}}/>
        <div className="postss__details__msg">
            {newsItem.content}
        </div>
        
      </div>
    </div>
  );
};

export default Posts;
