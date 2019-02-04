import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm'
import Name from './Name'
import Filter from "./Filter"
//import axios from 'axios'
import personService from "./services/person"

const App = (props) => {
	//console.log("PROPSIT: ", props)

	let huoh = []
	//const state_init = JSON.parse(props.persons_data)
	const [ persons, setPersons ] = useState([
		//{name: 'Arto Hellas', key:1, number: "666-1234-1234" }
	])

	const [ newName, setNewName ] = useState('')
	const [ newNumber, setNewNumber ] = useState('')
	const [ searchName, setSearchName ] = useState('')


	let stop = false
	const [isStarted, setIsStarted] = useState(0);

	useEffect(() => {
		console.log("in useEffect")
		const eventHandler = response => {
			console.log("promise fulfilled")
			setPersons(response.data)
		}
		//const promise = personService.getAll("http://snowcrash.havoc.fi:3001/persons")
		//promise.then(eventHandler)
		//setIsStarted(0)
		personService
			.getAll()
			.then (response => {
				setPersons(response.data)
				setIsStarted(0)
			})
	}, [isStarted])

	const addPersons = (person_data) => {
		console.log("addPersons: ", person_data)
		for (let i=0; i<person_data.length; i++) {
			const k = person_data[i]
			console.log("k", k)
			const nameObj = {
				name: k.name,
				number: k.number,
			}
			console.log("lisättavä: ", nameObj)
			setPersons(persons.concat(nameObj))

			console.log("setPersons: ", persons.length)
		}
	}

	const local_getid = (arr) => {
		let max_val = 0
		for (let i = 0; i<arr.length; i++) {
			if (arr[i]["id"] > max_val) {
				max_val = arr[i]["id"]
			}
		}
		return max_val+1
	}

	const del_persons = (id_) => {
		console.log("=========================================")
		console.log("id_", id_)
		console.log("=========================================")
		for (let i= 0; i<persons.length; i++) {
			console.log("del_persons:", i)
			let vari = persons[i]["id"]
			if (persons[i]["id"] == id_) {
				persons.splice(i, 1)
				//setPersons(foo)
				console.log("HHHUOOOHAA: ", vari )
				console.log("KURAAAAAAA: ", id_)
				setIsStarted(1)
				return 1
			}
		}
		return 0
	}

	const db_addName = (d) => {
		personService.create(d)
	}
	const addName = (event) => {
		event.preventDefault()

		/*const needle = newName

		for (const nam in persons) {
			const real_name = persons[nam]["name"]
			console.log("in search func", real_name, needle)
			if (real_name == needle) {
				alert(needle + " on jo luettelossa")
				return
			}
		}
		*/

		let id_ = local_getid(persons)
		const nameObj = {
			name: newName,
			number: newNumber,
			id: id_
		}
		setPersons(persons.concat(nameObj))
		setNewName('')
		setNewNumber('')

		db_addName(nameObj)

		setIsStarted(1)

		//console.log("NAPPI PAINETTU", event.target)
	}
	const per_helper = (id_) => {
		for (let i=0; i< persons.length; i++) {
			if (persons[i]["id"] == id_) {
				return persons[i]["name"]
			}
		}
		return null
	}

	const delName = (event) => {
		event.preventDefault()
		const a_name = per_helper(event.target.id)
		const res = window.confirm("Positetaanko "+a_name)
		if (!res) {
			return;
		}
		//console.log("HAAAAAAAA:", event.srcElement.id)
		console.log("DELNAMAAAAA:", event)
		console.log("HUOH:", event.target.id)
		personService.del(event.target.id)


		const eventHand = response => {
			console.log("HHHOUOO")
			setPersons(response.data)
		}
		const promise = personService.getAll("http://snowcrash.havoc.fi:3001/persons")
		promise.then(eventHand)

		console.log("person1: ", persons)
		//delete persons[event.target.id]
		//persons.splice(event.target.id, 1)
		console.log("event.target.id", event.target.id)
		console.log("event status: ", persons)
		let val = del_persons(event.target.id)
		if (val == 0) {

			console.log("Deleted nothing")
		} else {
			console.log("Deleted ", event.target.id)
		}
		setPersons(persons)
		console.log("person2: ", persons)
		setIsStarted(1)

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

	const handleSearchName = (props) => {
		console.log("handleSearchName ->")
		const needle = props.target.value
		setSearchName(needle)
	}

	console.log("persons: lopussa  ", persons)

	return (
		<div>
			<h2>Puhelinluettelo</h2>
			<form>
				<div>
					<Filter persons={persons} searchName={searchName} searchFunc={handleSearchName} />
				</div>
			</form>
				<div>
					<h3>Lisää uusi</h3>
					<UserForm persons={persons} form1={handleNameChange}
						form2={handleNumberChange}
						set_num={setNewNumber}
						set_name={setNewName}
						val_name={newName}
						val_num={newNumber}
						name_callback={addName}
					/>
				</div>
			<h2>Numerot</h2>
			<div>
				<Name perso={persons} currsearch={searchName} searchFunc={handleSearchName} delFunc={delName} />
			</div>
		</div>
	)
}

export default App;
