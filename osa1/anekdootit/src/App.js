import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const Button = (props) => {

	return (
		<div>
		<button onClick={() => props.clb()}>
			{props.name}
		</button>
		</div>
	)

}

const App = (props) => {
	let ra =  Math.round((Math.random()*999999) % (props.anecdotes.length-1))
	const [selected, setSelected] = useState(ra)
	
	//setSelected((Math.random()*999999) % props.anecdotes.length)
	
	const initi = () =>
		setSelected((Math.random()*999999) % props.anecdotes.length)

	//initi()

	const push_button = () => {
		let r = Math.round((Math.random()*999999) % (props.anecdotes.length-1))
		console.log("My random number: " + r)
		setSelected(r)
	}
	
	return (
		<div>
			{props.anecdotes[selected]}
			<Button name="next anecdote" clb={push_button}/>
		</div>
	)
}

const anecdotes = [
	  'If it hurts, do it more often',
	  'Adding manpower to a late software project makes it later!',
	  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	  'Premature optimization is the root of all evil.',
	  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

