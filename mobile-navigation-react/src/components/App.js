import React from 'react'
import '../styles/App.css';
const App = () => {
 
const img_arr=[
  {src:'https://i0.wp.com/jonasraskphotography.com/wp-content/uploads/2020/08/DSCF1146.jpg?fit=1440%2C960&ssl=1'},
  {src:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
  {src:'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80'},
  {src:'https://yt3.ggpht.com/ytc/AKedOLQcC81-nEY5of9YYjoL3l8uKO_QUhag_Yy0KYvz=s900-c-k-c0x00ffffff-no-rj'}
]

function change(idx)
{
  
  document.getElementsByClassName('content')[0].src=img_arr[idx].src;
  const listItems = document.querySelectorAll('nav ul li');
  console.log(listItems.length);
  for(let i=0;i<listItems.length; i++)
  {
    if(i==idx){
      listItems[i].className='active';
    }
    else{
      listItems[i].className='none';
    }
  }
  
}


  return (
    <div id="main">
      <div className="phone">
      <img src="https://i0.wp.com/jonasraskphotography.com/wp-content/uploads/2020/08/DSCF1146.jpg?fit=1440%2C960&ssl=1" alt="home" className="content" />
      <nav>
        <ul>
          <li className="active" onClick={()=>change(0)}>
            <i className="fas fa-home"></i>
            <p>Home</p>
          </li>
          <li onClick={()=>change(1)} className="none">
            <i className="fas fa-box"></i>
            <p>Work</p>
          </li>
          <li onClick={()=>change(2)} className="none">
            <i className="fas fa-book-open"></i>
            <p>Blog</p>
          </li>
          <li onClick={()=>change(3)} className="none">
            <i className="fas fa-users"></i>
            <p>About Us</p>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  )
}


export default App;
