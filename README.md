# BrewFind - PXL-Heroes client side assessment

## Table of contents

- [Setup](#setup)
- [Additional steps](#additional)
- [Design decisions](#design-decisions)
- [Stack](#stack)
- [Content](#content)
  - [Navigation bar](#navigation-bar)
  - [Breweries button](#breweries-button)
  - [Beers button](#beers-button)
- [Footer](#footer)
- [Visuals](#visuals)
- [Contact](#contact)

## Setup Instructions

To setup the application cd to the project directory, then run the following commands:

1. npm install (Install ALL dependencies)
2. npm start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Additional steps

**Note: I ran into a CORS error when trying to use the API. I solved this by adding the following `"proxy": "https://sandbox-api.brewerydb.com/v2"` to my package.json file, you are advised to do the same!**
**Note: Create a .env file to store your API inside it (e.g CREATE_REACT_APP_API=<Your_key_here>)!**

## Thoughts and decisions

I took the opportunity to clearly think out my approach to this challenge, based on the things that I struggled with and feedback I received the last time from PXL Widgets.

### Design decisions

1. Mobile first layout with the use of media queries for larger devices.
2. Positioning and alignment handled through the use of Flexbox and CSS Grid.
3. Minimal use of Semantic UI components (This more out of curiosity about semantic UI).
4. Custom styles using SCSS and scoping of classes.

### Technologies

HTML5, CSS/SCSS , 3rd party API - BreweryDB, Package manager - NPM

### Technical decisions
