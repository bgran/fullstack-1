import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';


const Name = (props) => {
	//console.log("props: ", props)
	props.perso.map((item, index) => {
		//console.log("NAME: ", item)
		//console.log("NAME2: " , index)

		
	})
	return (
		<ol>
		{props.perso.map((item, index) => (
			<li>{item["name"]}: {item["number"]}</li>
		))}
		</ol>
	)
}

const App = (props) => {
	//console.log("PROPSIT: ", props)
	const [ persons, setPersons ] = useState([
		{name: 'Arto Hellas', key:1, number: "666-1234-1234" }
	])
	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')

	const addName = (event) => {
		event.preventDefault()

		const needle = newName

		for (const nam in persons) {
			const real_name = persons[nam]["name"]
			console.log("in search func", real_name, needle)
			if (real_name == needle) {
				alert(needle + " on jo luettelossa")
				return
			}
		}


		const nameObj = {
			name: newName,
			number: newNumber
		}
		setPersons(persons.concat(nameObj))
		setNewName('')

		//console.log("NAPPI PAINETTU", event.target)
	}

	const handleNameChange = (event) => {
		event.preventDefault()
		//console.log("handleNameChange")
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		event.preventDefault()
		console.log("handlenNumberChange")
		setNewNumber(event.target.value)
	}

	return (
		<div>
			<h2>Puhelinluettelo</h2>
			<form onSubmit={addName}>
				<div>
					nimi: <input 
						value={newName}
						onChange={handleNameChange}
					/>
					numero: <input	
						value={newNumber}
						onChange={handleNumberChange}
					/>
				</div>
				<div>
					<button type="submit">lisää</button>

				</div>
			</form>
			<h2>Numerot</h2>
			<div>
				<Name perso={persons} />
			</div>
		</div>
	)
}

export default App;
