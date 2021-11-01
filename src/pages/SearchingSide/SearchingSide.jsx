import React, { useState } from "react";
import { useClimate } from "../../Data/store";
import './SearchingSide.css'
import axios from 'axios';
import CitysDemonstrations from "./CitysDemonstrations";


export default function SearchingSide(){
    const  {setSearch,setCity,city,setWeather,setActiveDemos,activeDemos} = useClimate()
   
    const requisition_to_API = async () => {
        let res = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${city}`)

        let req = await axios.get(`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${res.data[0].woeid}`)
        setWeather(req.data)
        setSearch(false)
    }
    return(
        <div className="Zeus">
            <div className="LocalButtons">
                <button className="exitButton" onClick={() => setSearch(false)}>X</button>
                <input type="text" className="button4search" placeholder="search location" onChange={e => setCity(e.target.value)}/>
                <button className="submitCity" onClick={() => requisition_to_API()}>Search</button>
            </div>
            <div className="displayCitys">
            <span className="openList"  onClick={() => activeDemos ? setActiveDemos(false) : setActiveDemos(true)}>{activeDemos ? 'v' : '>'}</span>
            {activeDemos ? <CitysDemonstrations/> :<div className="citysDemonstrations"></div>}
            </div>
        </div>
    )
}