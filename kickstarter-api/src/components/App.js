import React from 'react'
import '../styles/App.css';
import Data from './Data.json'
const App = () => {

   return (
    <div id="main">
      
      <div className='table-wrapper'>
      <center>
      <table className='sticky-header sticky-column'>
      <thead>
        <tr>
          <th>Profile image</th>
          <th>User data</th>
        </tr>

      </thead>
        
      {
        Data.map(record =>{
          return(
            <tbody id='table-body'>
            <tr>
              <td>
                  {record['avatar_url']}
              </td>
              <td>
                  {record['login']} <a href={record['html_url']}></a>
              </td>
            </tr>
            </tbody>
          )

        })
      }
      </table>
      </center>  
      </div>
    
      
    </div>
  )
}


export default App;
