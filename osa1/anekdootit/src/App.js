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

const highest_id = () => {
	var max1 = 0
	var first = 1
	var key = 0
	var this_key = 0

	for (key in aanestykset) {
		if (first) {
			first = 0
			max1 = aanestykset[key]
			this_key = key
		} else {
			if (max1 < aanestykset[key]) {
				max1 = aanestykset[key]
				this_key = key
			}
		}

	}
	return ([max1, this_key])
}

//const update_tbl = (which) => {
//	aanestykset[which] += 1
//}


const Button = (props) => {

	return (
		<div>
		<button onClick={() => props.clb()}>
			{props.name}
		</button>
		<button onClick={() => props.vote_clb(props.selected)}>
			vote
		</button>
		</div>
	)

}

const App = (props) => {
	let ra =  Math.round((Math.random()*999999) % (props.anecdotes.length-1))
	const [highest, setHighest] = useState(0)
	const [hSelected, setHSelected] = useState(0)
	const [selected, setSelected] = useState(ra)

	const push_button = () => {
		let r = Math.round((Math.random()*999999) % (props.anecdotes.length-1))
		if (selected === r) {
			// do nothing
		} else {
			setSelected(r)
		}

	//	let vote = aanestykset[r]

	}

	const push_vote = (s) => {
		aanestykset[s] ++
		setSelected(s)
		
		let [korkein, avain] = highest_id()
		setHSelected(avain)
		setHighest(korkein)
	}


	return (
		<div>
			{props.anecdotes[selected]}<br />
			has {aanestykset[selected]} votes
			<Button name="next anecdote" clb={push_button} vote_clb={() => push_vote(selected)} curr_ptr={selected} />
			<br /> <br />
			<h1>Anecdotes with most votes</h1>
			<p>
				{anecdotes[hSelected]}
				<br />
				has {highest} votes
			</p>
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

