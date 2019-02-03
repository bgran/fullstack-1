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
			<li>{index} :{item["name"]} </li>
		))}
		</ol>
	)
}

const App = (props) => {
	//console.log("PROPSIT: ", props)
	const [ persons, setPersons ] = useState([
		{name: 'Arto Hellas', key:1 }
	])
	const [ newName, setNewName ] = useState('')

	const addName = (event) => {
		event.preventDefault()

		const nameObj = {
			name: newName
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

	return (
		<div>
			<h2>Puhelinluettelo</h2>
			<div>
				<Name perso={persons} />
			</div>
			<form onSubmit={addName}>
				<div>
					nimi: <input 
						value={newName}
						onChange={handleNameChange}
					/>
				</div>
				<div>
					<button type="submit">lisää</button>

				</div>
			</form>
			<h2>Numerot</h2>
		</div>
	)
}

export default App;
