import React from 'react'

const filteredPersons = ({persons,filter}) => (
    persons.filter(
      person => person.name.toLowerCase()
      .includes(filter)
    )
)

const listPersons = props => (
    filteredPersons(props)
    .map(person =>
        <li key={person.name}>{person.name} {person.phone}</li>
    )
)

const Persons = props => (
    <ul>
        {listPersons(props)}
    </ul>
)

export default Persons