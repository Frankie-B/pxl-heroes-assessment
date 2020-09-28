import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import axios from 'axios'
import '../styles/Brewery.scss'

const API_KEY = process.env.REACT_APP_API_KEY;

const Select = ({ type, name, onChange, children}) => (
  <select type={type} name={name} onChange={onChange}>
    {children}
  </select>
)

export default class Brewery extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      select: {
        selectedCode: '',
      },
      breweries: [],
      countryCode:[],
    }
    this.getBreweries = this.getBreweries.bind(this);
    this.getCountryCodes = this.getCountryCodes.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.returnUnique = this.returnUnique.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;

    this.getBreweries();
    this.getCountryCodes();
  }

  componentWillUnmount() {
  // React state update on an unmounted component error fix from Stack overflow
    this.setState = (state,callback)=>{
    return;
    };
  }

  getBreweries() {
        axios({
            method: "GET",
            url: `locations/?countryIsoCode=${this.state.select.selectedCode}&order=breweryName&key=${API_KEY}`
        })
        .then(response => {
            this.setState({
                breweries: response.data.data
            })
            this.returnUnique()  
            console.log(this.state.breweries)
        })        
        .catch((error)=> {
                console.log("These are not the breweries you are looking for", error)
        })
    }

  getCountryCodes() {
    axios({
      method: "GET",
      url: `locations/?key=${API_KEY}`
    })
      .then(response => {
        let code = [...new Set(response.data.data.map(item => item.countryIsoCode))]
        this.setState({
          countryCode: code
        })
        console.log(this.state.countryCode.toString())
      })
      .catch((error) => {
        console.log("These are not the breweries you are looking for", error)
      })
  }

  handleInputChange(e) {
    e.preventDefault();
    let updatedCountryCode = this.state.select;
    updatedCountryCode[e.target.name] = e.target.value;
    this.setState({
        select:updatedCountryCode
    })
    this.getBreweries();
  }

  returnUnique() {
        if(this.state.breweries){
        var unique = _.uniqBy(this.state.breweries,'breweryId')
        }
        this.setState({
            breweries:unique
        })
    }


  render() {
    let breweryCountryList;
    if (!this.state.select.selectedCode) {
      breweryCountryList = <h3 className="brewery-subheading">Breweries from all countries</h3>
    } else {
      breweryCountryList = <h3 className="brewery-subheading">Breweries from {this.state.select.selectedCode}</h3> 
    }
    return (
      <div className="Brewery">
        <h1 className="brewery-heading">Search for a brewery</h1>
        <h3 className="brewery-subheading">Choose a country</h3>
        <div className="brewery-content">
          <Select name='selectedCode' value={this.state.select.selectedCode.toString()} onChange={this.handleInputChange}>
            <option value="" defaultValue>Choose Country</option>
            {this.state.countryCode.map((item, index) => (
              <option name="selectedCode" key={index} value={item}>{item}</option>
            ))}
          </Select>
        </div>
        {breweryCountryList}
        {this.state.breweries.map((item) => (
          <div className="brewery-item" key={item.id}>
            <Link to={`breweries/brewery/${item.breweryId}`}><h3>{item.brewery.name}</h3></Link>
          </div>
        ))}
      </div>
    )
  }
}
