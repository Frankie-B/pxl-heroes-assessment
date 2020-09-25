import React from 'react'
import '../styles/Home.scss'

const Home = () => {
  return (
    <div className="Home">
      <h1 className="home-heading">Welcome to BrewFinder</h1>

      <div className="heading-icon">
        <i className='bx bxs-beer'></i>
      </div>

      <div className="home-content">
        <p className="home-text">To see our list of <span> beers </span> or <span>breweries</span> follow the links in the navigation.</p>
      </div>
   </div>
  )
}

export default Home;
