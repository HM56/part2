import React, { useState } from 'react'

const Filter = ({persons, personsToShow, setPersonsToShow}) => {
  const [ newFilter , setNewFilter ] = useState( '' )
  const handleFilterChange = event => {
    setNewFilter(event.target.value)
    if(event.target.value === '')
      setPersonsToShow(persons)
    else setPersonsToShow(persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())))
  }

  return (
    <label>
      filter shown with:
      <input
        value={newFilter}
        onChange={handleFilterChange}
      />
    </label>
  )
}

const PersonForm = ({persons, setPersons}) => {
  const [ newName      , setNewName       ] = useState( '' )
  const [ newNumber    , setNewNumber     ] = useState( '' )
  const handleNumberChange = event => setNewNumber(event.target.value)
  const handleNameChange = event => setNewName(event.target.value)

  const handleSubmitClick = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }
    if(persons.some(guy => guy.name === person.name) && persons.some(guy => guy.number === person.number))
      alert(`${newName} ${newNumber} is already added to phonebook`)
    else
      setPersons(persons.concat(person))
    setNewName('')
    setNewNumber('')
  }

  return(
    <form>
      <div>
        <label>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </label>
      </div>
      <div>
        <label>number:
          <input
            value={newNumber}
            onChange={handleNumberChange}/>
        </label>
      </div>
      <div>
        <button onClick={handleSubmitClick} type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [ persons      , setPersons       ] = useState([])
  const [ personsToShow, setPersonsToShow ] = useState(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} personsToShow={personsToShow} setPersonsToShow={setPersonsToShow}/>
      <h2>Add new</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  )
}

const Persons = ({persons}) => {
  return (
      persons.map(person => <Person key={person.name} person={person}/>)
  )
}

const Person = ({person}) => {
  return(
    <>
      {person.name} {person.number}<br/>
    </>
  )
}

export default App
