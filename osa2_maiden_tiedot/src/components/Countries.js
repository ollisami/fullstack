import React from 'react'
import SingleCountry from './SingleCountry'

const filteredCountries = ({countries,filter}) => (
    countries.filter(
      country => country.name.toLowerCase()
      .includes(filter.toLowerCase())
    )
)

const createContent = (props) => {
    if(!props.filter) return


    const filtered = filteredCountries(props)
    if(filtered.length > 10)
        return <p>Too many matches, specify another filter</p>
    

    if(filtered.length === 1)
        return <SingleCountry country={filtered.shift()}/> 
    

    return (
        <ul>
            {filtered.map(country =>
                <li key={country.name}>
                    {country.name}
                    <button value={country.name} onClick={(e) => props.setFilterValue(e)}>show</button>
                </li>
            )}
        </ul>
    )
}

const Countries = props => {
    return (
        <div>
            {createContent(props)}
        </div>
    )
}

export default Countries