import { Container } from '@mui/material'
import React from 'react'
import { Card } from '../Card/Card'
import './NewsContent.css'

export const NewsContent = ( { newsArray , newsResults, Loadmore, setLoadmore}) => {
  return (
    <Container maxWidth='md'>
    <div className='content'>
      {
        newsArray.map((newsItem)=>(
          <Card newsItem={newsItem} key={newsItem.title}/>
        ))
      }
      {Loadmore <= newsResults && (
          <>
          <hr/>

            <button className='loadmore' onClick={ ()=> setLoadmore(Loadmore+5) }>
               Load More
            </button>
          
          </>
      )}
      

      </div>
    </Container>
  )
}
