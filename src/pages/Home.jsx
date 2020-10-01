import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.scss'

const Home = () => {
  return (
    <div className="Home">
      <h1 className="home-heading">Welcome to BrewFinder</h1>

      <div className="heading-icon">
        <i className='bx bxs-beer'></i>
      </div>

      <div className="home-content">
        <p className="home-text">Here is a list our list of <Link to={`/beers`}> beers </Link> and <Link to={`/brewery`}>breweries</Link>.</p>
      </div>
   </div>
  )
}

export default Home;
