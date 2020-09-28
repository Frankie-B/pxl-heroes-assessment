import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageContainer from '../components/Image'
import axios from 'axios'
import '../styles/BreweryDetail.scss'

const API_KEY = process.env.REACT_APP_API_KEY;

export default class BreweryDetail extends Component {
    constructor(props) {
    super(props);
    this.state = {
        brewery: [],
        beers:[]
    }
    this.getBrewery=this.getBrewery.bind(this);
    this.getBeers=this.getBeers.bind(this);
	}
  componentDidMount() {
    this.getBrewery();
  }
  
  getBrewery() {
      axios({
          method: "GET",
          url: `brewery/${this.props.match.params.id}/?key=${API_KEY}`
      })
      .then(response => {
          this.setState({
              brewery: response.data.data
          })
          this.getBeers();
          console.log(this.state.brewery);
      })
      .catch((error)=> {
              console.log("This is not the  brewery that you are looking for", error)
      })
  }

  getBeers() {
      axios({
          method: "GET",
          url: `brewery/${this.props.match.params.id}/beers/?key=${API_KEY}`
      })
      .then(response => {
          this.setState({
              beers: response.data.data
          })
          console.log(this.state.beers)
      })
      .catch((error)=> {
              console.log("This is not the  brewery that you are looking for", error)
      })
  }
  render() {
    let beerList;
    if(this.state.beers.length === 0){
          beerList = <h2>Loading...</h2>
      } 
      else if(this.state.beers.length === 1){
          beerList = <h2>The brewery produces <span>{this.state.beers.length}</span> beer: </h2>
      } 
      else {
          beerList = <h2>The brewery produces <span>{this.state.beers.length}</span> beers: </h2>
      }

    let breweryDetail = this.state.brewery;
    if (breweryDetail && this.state.beers) {
      return (
      <div className="BreweryDetail">
          <div className="brewery-detail-content">
            <h1 className="brewery-heading">{breweryDetail.name}</h1>
            {breweryDetail.established ? (
              <h5 className="brewery-detail-heading"><span>Established: </span>{breweryDetail.established}</h5>
            ) : (
                <p></p>
              )}
            <div className="brewery-img">
              {breweryDetail.images ? (
                <div className="brewery-image-container">
                  <a href={breweryDetail.website} rel="noopener noreferrer" target="_blank" className="brewery-link">
                    <ImageContainer src={breweryDetail.images.squareMedium} />
                  </a>
                </div>
              ) : (
                  <p></p>
              )}
            </div>
            <a href={breweryDetail.website} rel="noopener noreferrer" target="_blank">
              <h4>{breweryDetail.website}</h4>
            </a>
            <div className="brewery-description">
              <p>{breweryDetail.description}</p>
            </div>
          </div>
          <div className="brewery-detail-beers">
            <div className="brewery-beers">
              {beerList}
            </div>
            <div className="brewery-detail">
              {this.state.beers.map((item) => (
                <div key={item.id}>
                  <Link to={`/beer/${item.id}`}><h5>{item.name}</h5></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      )
    } else {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      )
    }
  }
}
