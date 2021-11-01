import axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';
import ContentSide from './pages/ContentSide/ContentSide';
import SearchSide from './pages/SearchSide/SearchSide';
import { useClimate } from './Data/store';
import SearchingSide from './pages/SearchingSide/SearchingSide';


function App() {

  // primeira requisição na API. acontece assim que o usuario entra no site.
  const {setWeather,setCurrent} = useClimate()
  let getWeather = async (lat, long) => {
    let res = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`)
    
    let req = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${res.data[0].woeid}/`)
    setWeather(req.data)
}
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position) => {
        getWeather(position.coords.latitude, position.coords.longitude)
        setCurrent({lat:position.coords.latitude, long:position.coords.longitude})
      })
    },[]) 

  

    const {search} = useClimate()
  return (
    <div className="App">
      <div className='container'>
        {!search ? <SearchSide></SearchSide> : <SearchingSide></SearchingSide>}
          <ContentSide></ContentSide>
      </div>
    </div>
  );

}




export default App;
