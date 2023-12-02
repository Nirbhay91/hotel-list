import React from 'react'
import './Tours.css';


const Tours = () => {
  return (
    <div>
     
      <div className='header'>
        <div className='trip-web'>
        <h5>Tripweb</h5>
        </div>
        <div className='mc-hd__search-booking'>
          <a className="mc-hd__search-booking-cur">Become an Expert</a>
          <button>Register / Sign in</button>
        </div>
        <ul>
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">Categories</a></li>
          <li><a href="contact.asp">Destination Blog</a></li>
          <li><a href="about.asp">Pages</a></li>
          <li><a href="about.asp">Dashboard</a></li>
          <li><a href="about.asp">Contact</a></li>
        </ul>
       
          
      </div>
    </div>
  )
}

export default Tours