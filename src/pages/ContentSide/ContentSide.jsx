import { useClimate } from '../../Data/store'
import './ContentSide.css'
import CtoF from '../../Functions/CtoF'
import dateFormat, {formatedData} from '../../Functions/dateFormat'
import { ProgressBar } from '../../Functions/bar/progressBar'
export default function ContentSide() {
    const {curent,weather,temp,updateTemp} = useClimate()
    console.log(weather)
    return(
        <div className="fatherofAll">
            <div className='DisplayTemperatureButtons'>
                <button className='TemperatureButton' onClick={()=> updateTemp(false)}>°C</button>
                <button className='TemperatureButton' onClick={()=> updateTemp(true)}>°F</button>
            </div>
            <div className='DisplayCards'>
            <div className='DisplayCards'>
                {weather?.consolidated_weather.map((element,index) => {
                    // usando o mapa para filtrar e replicar os cards.
                        if(index > 0){
                            const data = formatedData(element.applicable_date)
                            let maxT = element.max_temp
                            let minT = element.min_temp
                            console.log(data)
        
                            return (
                                <div className='Cards'>
                                    <div>
                                        <p className='titleCards'>{index === 1 ? 'Tomorrow' : dateFormat(data)}</p>
                                    </div>
                                        {element.weather_state_abbr ? <img className='ImgState' src={`https://www.metaweather.com/static/img/weather/${element.weather_state_abbr}.svg`}  /> : null}
                                        <div className='temperatureDays'>
                                            <span>{temp ? `${CtoF(maxT).toFixed(1)}°F` : `${parseInt(maxT)}°C` }</span>
                                            
                                            <span>{temp ? `${CtoF(minT).toFixed(1)}°F` : `${parseInt(minT)}°C` }</span>
                                        </div>
                                </div>
                                )
                        }
                    }
                )}
            </div>
            </div>
            <h1 className='TitleHighlights'>Today's Higthlights</h1>
            <div className='TodayStatus'>
                <div className='WindStatus'>
                    <p className='DescriptionTittle'>
                        Wind Status
                    </p>
                    <h2 className='midContent'>{`${parseInt(weather?.consolidated_weather[0].wind_speed)}mph`}</h2>
                </div>

                <div className='HumidityStatus'>
                    <p className='DescriptionTittle'>
                        Humidity
                    </p>
                   <h2 className='midContent'>{weather?.consolidated_weather[0].humidity}%</h2>
                   <ProgressBar width={200} percent={weather?.consolidated_weather[0].humidity}/>

                </div>
                <div className='VisibilityStatus'>
                <p className='DescriptionTittle'>
                        Visibility
                    </p>
                    <h2 className='midContent'>{(weather?.consolidated_weather[0].visibility)?.toFixed(1).replace('.',',')}miles</h2>
                </div>
                <div className='AirStatus'>
                <p className='DescriptionTittle'>
                        Air Preasure
                    </p>
                <h2 className='midContent'>{parseInt(weather?.consolidated_weather[0].air_pressure)}mb</h2>
                </div>

            </div>

        </div>
    )
}