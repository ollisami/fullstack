import React, { useState, useEffect } from 'react'
import personService from './services/personService'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newPhone,
    }
    const current = persons.find(person => person.name === newName)
    if (!current) {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
      })
    } else if (window.confirm(`${newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
        personService
          .update(current.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map( person => person.id !== current.id ? person : returnedPerson))
      })
    }
    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const removePerson = id => {
    const p = persons.find(person => {
      return person.id === id
    })
    if (p && window.confirm(`Poistetaanko ${p.name}?`)) {
      personService
        .remove(id)
        .then(initialPersons => {
          setPersons(initialPersons)
        })
    }
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Filter filter={filter} filterChange={handleFilterChange} />

      <h3> lisää uusi </h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />

      <h3>Numerot</h3>
      <Persons
        persons={persons}
        filter={filter}
        removePerson={removePerson}
      />
    </div>
  )

}

export default App