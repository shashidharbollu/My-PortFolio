import React from 'react'
import image from './wallpaper.jpg'

const Home = () => {
  return (
    <div className='Home'>
      
      <center>
        <h1>Shashidhar Bollu</h1>
        <p>Hie, im a front end developer, currently working in refactor acadamy. 
          Past 3 months i am learning front end developement here.</p>
          <a
          className="App-link"
          href="https://www.youtube.com/results?search_query=how+to+add+paragraph+in+react+js"
         
          rel="noopener noreferrer"
        >
          Shashidhar
        </a>
      </center>
      <img src={image} height="250" width="auto"/>
      
    </div>
  )
}

export default Home
