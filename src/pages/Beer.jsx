import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageContainer from '../components/Image'
import axios from 'axios'
import '../styles/Beer.scss'

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Beer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      beer:[],
    }
    this.getBeerDetail = this.getBeerDetail.bind(this);
  }

  componentDidMount() {
    this.getBeerDetail();
  }

  getBeerDetail() {
    axios({
      method: 'GET',
      url: `/beer/${this.props.match.params.id}/?withBreweries=Y&key=${API_KEY}`,
    }).then((response) => {
      this.setState({
        beer: response.data.data,
      })
    }).catch((error) => {
      console.log('Looks like someone needs to do a beer run ', error);
    })
  }
  
  render() {
    let beer = this.state.beer;
    if (beer) {
      return (
        <div className='Beer'>
          <div className="beer-details">
            <h1 className="beer-heading">{beer.name}</h1>
            {beer.style ? (
              <div className="beer-info">
                <p className="beer-subheading">Style: {beer.style.name}</p>
                <p className="beer-subheading">
                  Brewed by:&#xa0;
                  <Link to={`/brewery/${beer.breweries[0].id}`}>{beer.breweries[0].name} ({beer.breweries[0].locations[0].country.displayName})</Link>
                </p>
                <div className="beer-abv-ibu">
                  <p className="beer-subheading">ABV: {beer.abv}%</p>
                  <p className="beer-subheading">IBU: {beer.style.ibuMin} - {beer.style.ibuMax}</p>
                </div>
              </div>
            ) : (
                <h2><i className='bx bx-beer'></i></h2>
              )}
            <div className="beer-img">
              {beer.labels ? (
                <ImageContainer src={beer.labels.medium}/>
              ) : (
                  <p></p>
              )}
            </div>
          </div>
          <div className="beer-description">
            {beer.style ? (
              <p>{beer.style.description}</p>
            ) : (
                <p></p>
            )}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h2><i className='bx bx-beer'></i></h2>
        </div>
      )
    }
  }
}