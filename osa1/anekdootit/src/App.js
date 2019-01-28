import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const aanestykset = {
	0: 0,
	1: 0,
	2: 0,
	3: 3,
	4: 4,
	5: 2 
}

const highest_id = () => {
	var max1 = 0
	var first = 1
	var key = 0
	var this_key = 0
	console.log(aanestykset.length)

	for (key in aanestykset) {
		console.log("key: " + key + ": " + aanestykset[key])
		//var ind = parseInt(key)
		if (first) {
			first = 0
			max1 = aanestykset[key]
			this_key = key
		} else {
			if (max1 < aanestykset[key]) {
				max1 = aanestykset[key]
				console.log("max1: " + max1)
				this_key = key
			} else {
				console.log("PERKL: " + max1 + " <-> " + aanestykset[key])
			}
		}

	}
	console.log("HUUUUUAUAH: " + this_key)
	return ([max1, this_key])
}

const kala = (foo) => {
	console.log("foo: " + foo)
}

const Mostvotes = () => {
	console.log("Mostvotes")
	kala("huortuauuahh")
	let [vote_count, index] = highest_id(aanestykset)

	console.log("index: " + index["index"])
	console.log("max: " + vote_count+ " index: "+ index)

	//if (isNaN(index)) {
	//	return (<div>No votes for a anecdote</div>)
	//}

	console.log("anecdotes: " + anecdotes)
	console.log("kamat: " + anecdotes[index])
	console.log("Säätö: " + anecdotes["3"])
	return(
		<div>
			<h1>Anecdote with most votes</h1>
			<p>
				{anecdotes[index]}
				<br />
				This got {vote_count} votes
			</p>
		</div>
	)

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
			<p>
			<Mostvotes />
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

