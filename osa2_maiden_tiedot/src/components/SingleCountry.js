import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const SingleCountry = ({country}) => {
    const [ weather, setWeather] = useState() 
    const URL='http://api.apixu.com/v1/current.json?key=cacdf29dc2be47d484a105606152306&q='

    const query =
        URL + 
        country.capital
        .split(' ')
        .join('-') +
        '-' +
        country.name

    useEffect(() => {
        axios
          .get(query)
          .then(response => {
            setWeather(response.data)
          })
      }, [])

    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>pupulation {country.population}</p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language =>
                    <li key={language.name}>{language.name}</li>
                )}
            </ul>
            <p>
                <img src={country.flag} alt={country.name} height="100px"/>
            </p>
            <Weather weather={weather}/>
        </div>
    )
}

export default SingleCountry