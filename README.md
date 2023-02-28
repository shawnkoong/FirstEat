# FirstEat
![image](assests/DemoScreenshot.png)

[live site](https://firsteat.netlify.app/)

Website where users can explore restaurants nearby current location or anywhere, using Google Maps API and RapidAPI. 

The goal is to connect to a backend to be able to create users and provide an online ordering service and include other features [in progress].

## Current Dependencies
- [React](https://reactjs.org/)
- [google-map-react](https://github.com/google-map-react/google-map-react)
- [@react-google-maps/api](https://react-google-maps-api-docs.netlify.app/)
- [Axios](https://axios-http.com/docs/intro)
- [MUI](https://mui.com/)

## Setup
**Step 1**. Set up [Node.js](https://nodejs.org/en/)

**Step 2**. Clone this repository and dependencies
```
git clone https://github.com/shawnkoong/FirstEat.git
cd FirstEat/frontend
npm install --legacy-peer-deps
```
**Step 3**. Visit [Travel Advisor](https://rapidapi.com/apidojo/api/travel-advisor) and subscribe in order to generate the API key (create an account if you don't have one).
This particular API has a monthly limit of 500 calls to remain in the free tier.

**Step 4**. Visit [Google Cloud Platform](https://cloud.google.com/) and create an account. Enable the Places API and Maps JavaScript API.
This will ask for your billing information, but you will receive free monthly quota.

**Step 5**. Create ```.env``` file and create ```REACT_APP_GOOGLE_MAPS_API_KEY``` and ```REACT_APP_RAPIDAPI_TRAVEL_API_KEY``` for the two APIs used and insert the API keys from the above two steps.

**Step 6**. ```npm run``` and visit localhost:3000.
