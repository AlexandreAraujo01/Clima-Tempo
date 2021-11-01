import './SearchSide.css'
import { AppContext, teste } from '../../Data/store'
import { useContext, useState } from 'react'
import { useClimate } from '../../Data/store'
import  imgGps from '../../images/gps_fixed_white_24dp.svg'
import cloud from "../../images/cloudcerta.png"
import CtoF from '../../Functions/CtoF'
import dateFormat, {formatedData} from '../../Functions/dateFormat'

export default function SearchSide(){
    const {curent,weather,temp,setSearch} = useClimate()
    const today = weather
    const TodayTemp = weather?.consolidated_weather[0]?.the_temp
    const TodayDate = formatedData(weather?.consolidated_weather[0]?.applicable_date)
    const teste = dateFormat(TodayDate)
    return(
        <div className="odin">
            <div className='ButtonArea'>
                <button className='Search4places' onClick={() => setSearch(true)}>
                    Search for places
                </button>
                <button className='locationUser'>
                    <img src={imgGps}></img>
                </button>
            </div>

            <div className='weatherImageToday'>
                <img className='clouds' src={cloud}/>
                <img className='clouds2' src={cloud}/>
                <img className='clouds3' src={cloud}/>
                <img className='clouds4' src={cloud}/>
                {weather?.consolidated_weather[0]?.weather_state_abbr ? <img className='ImgToday' src={`https://www.metaweather.com/static/img/weather/${weather.consolidated_weather[0].weather_state_abbr}.svg`}></img> : null}
            </div>
            <div className='weatherTemperatureToday'>
                <h1>{temp ? `${CtoF(TodayTemp).toFixed(1)}°F` : `${parseInt(TodayTemp)}°C`}</h1>
            </div>

            <div className='weatherTextState'>
                <h2>{weather?.consolidated_weather[0].weather_state_name}</h2>
            </div>

            <div className='todaysDate'>
                <span>{dateFormat(TodayDate)}</span>
            </div>
            <div className='UserCity'>
                <span>{weather?.title}</span>
            </div>
        </div>
    )
}