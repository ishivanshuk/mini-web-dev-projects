import React from 'react'
import './Card.css'
export const Card = ({ newsItem }) => {
    
  return (
    <div className='newsCard'>
        <img alt={newsItem.title} src={newsItem.imageUrl} className='newsImage' />

        <div className='newsText'>
            <div>
                <span className='title'> {newsItem.title} </span>
                <br/>
                <span> <a href={newsItem.url} target='__blank'> short </a> </span>
                <span className='author' >  by {newsItem.author?newsItem.author:"unknown"}&nbsp;on {newsItem.date?newsItem.date:"unknown"} {newsItem.time}
                 </span>
            </div>
            <div className='lowerNewsText'>
            <div className='description'>
                {newsItem.content}
            </div>
            <div className='readmore'>
                 <a href={newsItem.readMoreUrl} target='__blank'> <b> Read More </b> </a> 
            </div>
        </div>
        </div>
        <br/>
        

    </div>
  )
}
