# BrewFind :  PXL-Heroes client side assessment

###  [Demo](https://www.youtube.com/watch?v=HcWDb8uZhpo&feature=youtu.be)
  

## Table of contents  

-  [Setup Instructions ](#setup-instructions )

-  [Additional steps](#additional-steps)

-  [Thoughts and decisions ](#thoughts-and-decisions )

-  [Technologies](#technologies)

-  [Decisions  ](#decisions  )

-  [Pages](#pages)

-  [Reflections](#reflections)

-  [Screenshots](#screenshots)
  

## Setup Instructions  

To setup the application cd to the project directory, then run the following commands:

  

1. npm install (Install **all** dependencies)

2. npm start

  

Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.<br />

You will also see any lint errors in the console.

  

## Additional steps  

**Note: I ran into a CORS error when trying to use the API. I solved this by adding the following `"proxy": "https://sandbox-api.brewerydb.com/v2"` after `"private" : true`, in my package.json file. <br />
 you are advised to do the same!**

**Note: Create a .env file to store your API key inside of it e.g: <br />
 CREATE_REACT_APP_API_KEY=<Your_key_here>**

  

## Thoughts and decisions  

I took the opportunity to clearly think out my approach to this challenge, based on the things that I struggled with and feedback I received the last time from PXL Widgets.


### Technologies  

HTML5, CSS/SCSS , 3rd party API - [BreweryDB](https://brewerydb.com/), Package manager - NPM

  

### Decisions  

 - Mobile first layout with the use of media queries for larger devices.
 - Positioning and alignment handled through the use of Flexbox and CSS
   Grid.
 - Minimal use of Semantic UI components (This was more out of curiosity
   about semantic UI).
 - Use of [BoxIcons](https://boxicons.com/).
 - Custom styles using SCSS and scoping of classes.
 - Navigation bar.
	  - Responsive
	  - Alternate layout for mobile devices.
	  - Clickable logo, redirects to home page.
	  - Clickable navigation buttons.
- Buttons.
	- Created a reusable button component.
	- Beers button redirects to `/beers`.
	- Breweries button redirects to `/brewery`.

###  Pages
There are two pages that the user can navigate utilise to search for beers or to search for breweries.

- **/beers**
	- Input filed to search for beers by name.
	- Input field to search beers by their type.
	- Dropdown menu to search beer by their country (displayed as a country code).
	- Button to clear int input fields.
	- Button to navigate to the next page of multiple pages.
	- Beer Names are clickable and will redirect to the appropriate beer detail page.

- **/beer/:id**
	- Displays detailed information about a single beer.
	- Displays link to the manufacturing brewery, when clicked will redirect to brewery detail.

- **/brewery**
	- Displays all available breweries.
	- Dropdown menu to select a brewery by country (displayed as a country code).
	- Clicking on the name of the brewery redirects the user to the brewery detail page.

- **/brewery/:id**
	- Displays detailed information for a single brewery.
	- Display the beers that are brewed by that brewery.
	- Clicking on a beer redirects to that beers detail page.

### Reflections
I feel good about the application that I have built, I aimed to write clean and understandable code, which I feel that I did and to have a complete and functional application. I chose a gradual approach to building the app, doing one page, one route at a time, this minimized the numbers of issues I had to deal with at any one time.

- The main challenge that I faced building out this assesment came in the form of a CORS error when trying to consume the API. I solved this by adding a proxy to the pacakage.json, while this is ultimately a very simple solution, it was only arrived at after trying numerous other fixes that did not solve my issue. 

- When needing to debug my process went as follows: console.log the issue, if that was too vauge or the error did no present itself clearly I moved to using the Chrome debugger.

### Screenshots
- **Desktop**
<div style="display: flex; justify-content: center">
<img src="https://res.cloudinary.com/frankie-dev/image/upload/v1601386943/pxl-heroes-assessment/brewFinder-home.png" />
</div>
<div style="display: flex; justify-content: center">
<img src="https://res.cloudinary.com/frankie-dev/image/upload/v1601386943/pxl-heroes-assessment/brewFinder-beers.png" />
</div>
<div style="display: flex; justify-content: center">
<img src="https://res.cloudinary.com/frankie-dev/image/upload/v1601386943/pxl-heroes-assessment/brewFinder-breweries.png" />
</div>

- Mobile
<div style="display: flex; justify-content: center; width: 100px">
<img src="https://res.cloudinary.com/frankie-dev/image/upload/c_scale,w_300/v1601386944/pxl-heroes-assessment/brewFinder-home-mobile.png" />
</div>
<div style="display: flex; justify-content: center; width: 100px">
<img src="https://res.cloudinary.com/frankie-dev/image/upload/c_scale,w_300/v1601386943/pxl-heroes-assessment/brewFinder-beers-mobile.png" />
</div>
<div style="display: flex; justify-content: center; width: 100px">
<img src="https://res.cloudinary.com/frankie-dev/image/upload/c_scale,w_300/v1601386945/pxl-heroes-assessment/brewFinder-beerDetail-mobile.png" />
</div>	
<div style="display: flex; justify-content: center; width: 100px">
<img src="https://res.cloudinary.com/frankie-dev/image/upload/c_scale,w_300/v1601386944/pxl-heroes-assessment/brewFinder-breweryDetail-mobile.png" />
</div>
 