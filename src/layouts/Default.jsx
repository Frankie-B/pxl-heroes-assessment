import React from 'react'
import Navigation from '../components/Navbar/Navbar';
import Footer from "../components/Footer";

const Default = (props) => {
  return (
    <div>
      <Navigation />
        {props.children}
      <Footer />
    </div>
  )
}

export default Default;