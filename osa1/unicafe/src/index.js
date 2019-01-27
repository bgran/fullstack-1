import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const aanestykset = {
	0: 0,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0
}

const update_tbl = (which) => {
	aanestykset[which] += 1
}


const Button = (props) => {

	return (
		<div>
		<button onClick={() => props.clb()}>
			{props.name}
		</button>
		<button onClick={() => props.vote_clb(props.curr_ptr())}>
			vote
		</button>
		</div>
	)

}

const App = (props) => {
	let ra =  Math.round((Math.random()*999999) % (props.anecdotes.length-1))
	const [selected, setSelected] = useState(ra)
	
	const push_button = () => {
		let r = Math.round((Math.random()*999999) % (props.anecdotes.length-1))
		setSelected(r)
	}
	const curr_ptr = () => {
		return selected
	}

	const push_vote = () => {
		update_tbl(curr_ptr())
	}

	return (
		<div>
			{props.anecdotes[selected]}<br />
			has {aanestykset[curr_ptr()]} votes
			<Button name="next anecdote" clb={push_button} vote_clb={push_vote} curr_ptr={curr_ptr} />
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

