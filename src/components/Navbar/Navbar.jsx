import React, { Component } from 'react'
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom'
// import Button from '../controls/Button'
import './Navbar.scss'


class Navbar extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar-items">
          <Link to="/" className="navbar-brand">
            <h1 className="navbar-logo">BrewFinder  <i className='bx bxs-beer beer-icon'></i></h1>          
          </Link>
          <div className="navbar-menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'bx bx-x' : 'bx bx-menu' }></i>
          </div>
          <ul className={this.state.clicked ? 'navbar-menu active' : 'navbar-menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.className} to={`${item.url}`}>{item.title}</Link>
                </li>
              )
            })}
          </ul>
          {/* <Button /> */}
        </nav>  
      </div>
    )
  }
}

export default Navbar;
