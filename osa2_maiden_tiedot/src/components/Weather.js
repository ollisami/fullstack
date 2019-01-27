import React from 'react'

const Weather = ({weather}) => {
    if(!weather) return ''

    return (
        <div>
            <h2> Weather in {weather.location.name} </h2>
            <p>tempretature: {weather.current.temp_c} celsius</p>
            <img src={weather.current.condition.icon} alt="weather-icon" height="50px"/>
            <p> wind: {weather.current.wind_kph} km/h direction {weather.current.wind_dir} </p>
        </div>
    )
}

export default Weather