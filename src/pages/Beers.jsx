import React, { Component } from 'react'
import Button from '../components/controls/Buttons/Button'
import Input from '../components/controls/Forms/Inputs/Input'
import axios from 'axios'
import _ from 'lodash'
import '../styles/Beers.scss'
import { Link } from 'react-router-dom'

// console.log(process.env.REACT_APP_API_URL)
// console.log(process.env.REACT_APP_API_KEY)


// const BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;


export default class Beers extends Component {
  constructor (props){
    super(props)
    this.state = {
        select: {
            selectedCode:"" 
        },
        name:"", 
        type:"",
        beersByName:[],
        beersByType:[],
        beersByCountry:[],
        countryCode:[], 
        page:1,
        numberOfPages:0
}
    this.beerNameInputHandler = this.beerNameInputHandler.bind(this);
    this.getBeersByName = this.getBeersByName.bind(this);
    this.beerTypeInputHandler = this.beerTypeInputHandler.bind(this);
    this.handleBeerCountryChange = this.handleBeerCountryChange.bind(this);
    this.getBeersByType = this.getBeersByType.bind(this);
    this.getBeersByCountry = this.getBeersByCountry.bind(this);
    this.getCountryCodes = this.getCountryCodes.bind(this);
    this.clearSearchResults = this.clearSearchResults.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
    this.getAllBeersName = this.getAllBeersName.bind(this);
    this.getAllBeersType = this.getAllBeersType.bind(this);
    this.getAllBeersCountry = this.getAllBeersCountry.bind(this);
    this.clearInputFields = this.clearInputFields.bind(this);
}

  componentDidMount  ()  {
    this.getCountryCodes();
  }

  beerNameInputHandler(e)   {
      let inputValue = e.target.value;
      this.setState({
          name: inputValue.toLowerCase(),
      }) 
    this.clearSearchResults();
  }

  beerTypeInputHandler(e)  {
      let input = e.target.value;
      this.setState({
          type: input.toLowerCase()
      }) 
    this.clearSearchResults();
  }

  handleBeerCountryChange(e)  {
      e.preventDefault();
      let updatedCountryCode = this.state.select;
      updatedCountryCode[e.target.name] = e.target.value;
      this.getAllBeersCountry();
      this.setState({
          select:updatedCountryCode
      })
    this.getAllBeersCountry();
  }

  getNextPage()  {
    this.setState({
        page: this.state.page + 1
        })
    if (this.state.name.length>0){
        this.getBeersByName()
    }
    else if(this.state.type.length>0) (
        this.getBeersByType()
    )
    else if(this.state.select.selectedCode){
      this.getBeersByCountry()
    }
  }

  getAllBeersName()  {
    this.getBeersByName()
    this.setState({
        page: this.state.page + 1
    })
  }

  getAllBeersType()  {
    this.getBeersByType()
    this.setState({
        page: this.state.page + 1
    })
  }

  getAllBeersCountry()  {
    this.getBeersByCountry()
    this.setState({
        page: this.state.page + 1
    })
  }

  getBeersByName()  {
    axios({
      method: 'GET',
      url: `search/?key=${API_KEY}&p=${this.state.page}&type=beer&q=${this.state.type}`,    
    }).then((response) => {
      this.setState({
        beersByName: response.data.data,
        numberOfPages: response.data.numberOfPages
      })
    }).catch((error) => {
      console.log('Oops looks like the fridge is empty', error);
    })
  }

  getBeersByType()  {
    axios({
      method: 'GET',
      URL: `search/?key=${API_KEY}&p=${this.state.page}&type=beer&q=${this.state.type}`,    
    }).then((response) => {
      this.setState({
        beersByType: response.data.data,
        numberOfPages: response.data.numberOfPages
      })
    }).catch((error) => {
      console.log('Oops looks like the fridge is empty', error)
    })
  }

  getBeersByCountry()  {
    axios({
        method: "GET",
        url: `beers/?withBreweries=Y&key=${API_KEY}&p=${this.state.page}`,      
    })
    .then(response => {
        this.setState({
            beersByCountry: response.data.data,
            numberOfPages: response.data.numberOfPages
        })
        console.log(this.state.page)
        this.removeDuplicates()
    })
    .catch((error)=> {
            console.log('Oops looks like that location does not exist', error)
    })
  }


  getCountryCodes() {
    axios({
        method: "GET",
        url: `locations/?key=${API_KEY}`,      
    })
    .then(response => {
        let code = [...new Set(response.data.data.map(item => item.countryIsoCode))]
        this.setState({
            countryCode: code
        })
        console.log(this.state.countryCode.toString())
    })
    .catch((error)=> {
            console.log('Oops looks like that location does not exist', error)
    })
  }

  removeDuplicates ()  {
    if(this.state.breweries){
        var unique = _.uniqBy(this.state.breweries,'breweryId')
    }
    this.setState({
        breweries:unique
    })
  }

  clearSearchResults()  {
    this.setState({
        beersByName:[],
        beersByType:[],
        beersByCountry:[],
        countryCode:[], 
        page:1,
      numberOfPages: 0
    })
  }
  
  clearInputFields()  {
    this.setState({
        select: {
            selectedCode:"" 
        },
        name:"", 
        type:"",
        beersByName:[],
        beersByType:[],
        beersByCountry:[],
        countryCode:[], 
        page:1,
        numberOfPages:0
    })
  }

  render() {
    return (
      <div className="Beers">
        <h1 className="beers-heading">You can search for beers by Name, Type or Country</h1>
        <div className="beers-search">
          <div className="beers-buttons">
            <Button onClick={this.clearInputFields}>Clear Fields</Button>
            <Button onClick={this.getNextPage}>Next Page</Button>
          </div>
          <div className="beers-search-form">
            <div className="beers-search-name">
              <Input type={`text`} name={`beerName`} placeholder={`Search beers by name`} value={this.state.name} onChange={this.beerNameInputHandler} />
              <Button onClick={this.getAllBeersName}>Search</Button>
            </div>
            <div className="beers-search-type">
              <Input type={`text`} placeholder={`Search beers by type`} value={this.state.type} onChange={this.beerTypeInputHandler}/>
              <Button>Search</Button>
            </div>
            <div className="beers-dropdown-select">
              <select
                name="selectedCode"
                value={this.state.select.selectedCode.toString()}
                onChange={this.handleBeerCountryChange}
                onClick={this.getCountryCodeList}>
                <option value={``} defaultValue>Choose a country</option>
                {this.state.countryCode.map((item, index) => (
                  <option name="selectedCode" key={index} value={item}>{item}</option>
                ))}
                </select>
            </div>
          </div>
        </div>
        {/* Rendering the results */}
        <div className="beers-num-pages">
          {this.state.numberOfPages >= 1 && this.state.page <= (this.state.numberOfPages) + 1 ? (
            <h5>{this.state.page - 1} / {this.state.numberOfPages}</h5>
          ) : (
              <h5>Page not found</h5>
          )}
        </div>
        <div className="beers-content">
          {this.state.beersByName ? (
              <div className="beers-item">
              {this.state.beersByName.map((item) => (
                <div key={item.id}>
                  {((item.name).toLowerCase()).includes((this.state.name).toLowerCase()) ? (
                    <div className="beers-link">
                      <Link to={`/beer/${item.id}`}>
                        <h5 className="beers-item-name">{item.name}</h5>
                      </Link>
                    </div>
                  ) : (
                      <p>not exists</p>
                    )}
                </div>
              ))}
            </div>
          ) : (
              <h4>Sorry, we do not have that beer</h4>
            )}
          
          {this.state.beersByType ? (
            <div className="beers-item">
              {this.state.beersByType.map((item) => (
                <div key={item.id}>
                  {item.style ? (
                    <div className="beers-link">
                      {((item.style.name).toLowerCase()).includes((this.state.type).toLocaleLowerCase()) ? (
                        <Link to={`/beer/${item.id}`}>
                          <h5>{item.name}</h5>
                        </Link>
                      ) : (
                          <h5>not exist</h5>
                      )}
                    </div>
                  ) : (
                      <p>Loading....</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
              <h5>Sorry, we do not have that type</h5>
            )}
          {this.state.beersByCountry ? (
            <div className="beers-item">
              {this.state.beersByCountry.map((item) => (
                <div className="beers-link-item" key={item.id}>
                  {((item.breweries[0].locations[0].countryIsoCode).includes(this.state.select.selectedCode)) ? (
                    <Link to={`/beer/${item.id}`}>
                      <h5>{item.name}</h5>
                    </Link>
                  ) : (
                      <p>not exists</p>
                    )}
                </div>
              ))}
            </div>
          ) : (
              <h4>Please try another country</h4>
            )}
        </div>
      </div>
    )
  }
}
