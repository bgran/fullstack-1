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
	//console.log(aanestykset.length)

	for (key in aanestykset) {
		//console.log("key: " + key + ": " + aanestykset[key])
		//var ind = parseInt(key)
		if (first) {
			first = 0
			max1 = aanestykset[key]
			this_key = key
		} else {
			if (max1 < aanestykset[key]) {
				max1 = aanestykset[key]
				//console.log("max1: " + max1)
				this_key = key
			} else {
				//console.log("PERKL: " + max1 + " <-> " + aanestykset[key])
			}
		}

	}
	//console.log("HUUUUUAUAH: " + this_key)
	return ([max1, this_key])
}

const kala = (foo) => {
	console.log("foo: " + foo)
}

const Mostvotes = (props) => {
	const [highestID, setHighestID] = useState(0)
	const [highestVote, setHighestVote] = useState(0)

	console.log("Mostvotes")
	console.log("##############################################")
	console.log("##############################################")
	console.log("##############################################")
	console.log("##############################################")
	console.log("##############################################")
	console.log("##############################################")
	console.log("##############################################")
	console.log("##############################################")
	console.log("##############################################")

	let [vote_count, index] = highest_id(aanestykset)

	console.log("vote_count: " + vote_count)
	console.log("index: " + index)

	//setHighestID(index)
	//setHighestVote(vote_count)

	//if (highestID > vote_count) {
	//	setHighestID(index)
	//	setHighestVote(vote_count)
	//	aanestykset[index] = vote_count
	//}
	console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<")
	console.log("FOOOO: " + highestVote)
	console.log("BAAAR: " + highestID)
	console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>")

	return (
		<div>
			<h1>Jotain anekdootteja</h1>
			<p>
				{anecdotes[highestID]}
				<br />
				This got {highestVote} votes
			</p>
		</div>
	)

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
				{anecdotes[props.selected]}
				<br />
				This got {props.most_votes} votes
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
		<button onClick={() => props.vote_clb(props.selected)}>
			vote
		</button>
		</div>
	)

}
const Test = (props) => {
	return (
		<div>
			<button onClick={() => props.saato(props.name)} >
				kalaa
				{props.laskuri}
			</button>
			
		</div>
	)
}

const App = (props) => {
	let ra =  Math.round((Math.random()*999999) % (props.anecdotes.length-1))
	const [highest, setHighest] = useState(0)
	const [hSelected, setHSelected] = useState(0)
	//const [selected, setSelected] = useState(ra)
	const [selected,setSelected] = useState(0)
	const [votes, setVotes] = useState(0)
	const [laskuri, setLaskuri] = useState(0)

	const push_button = () => {
		let r = Math.round((Math.random()*999999) % (props.anecdotes.length-1))
		if (selected === r) {
			// do nothing
		} else {
			setSelected(r)
		}

		let vote = aanestykset[r]
		console.log("votetus push_buttonissa: " + vote)
		//setHSelected(vote)
		//setHSelected(r)

	}
	const curr_ptr = () => {
		return selected
	}

	const tilapainen_suurin = 0
	const push_vote = (s) => {
		console.log("push_vote: " + s)
		aanestykset[s] ++
		setSelected(s)
		let vote = aanestykset[s]
		console.log("#&&&&&&&&&&&&&&&&&&&&&&&&&&")
		
		console.log("aanestykset[s]: " + aanestykset + " s: " + s)
		console.log("selected: " + selected)
		console.log("vote: " + vote)

		console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%")
		console.log("vote: " + vote)
		setVotes(vote)
		console.log("votes: " + votes)
		
		//aanestykset[s] = votes
		console.log("aanestykset[s] = " + aanestykset[s] )


		console.log("aanestykset[s]: " + aanestykset[s])
		console.log("hSelected: " + hSelected)
		console.log("s: " + s)

		let [korkein, avain] = highest_id()
		console.log("%%%%%%%%%%%%%% korkein: " + korkein)
		console.log("%%%%%%%%%%%%%%: avain:  " + avain)
		setHSelected(avain)
		setHighest(korkein)
		

		//if (aanestykset[s] > hSelected) {
		if (selected != hSelected) {
			console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
		
			//setHSelected(aanestykset[s])

		}
		console.log("hSelected: " + hSelected)
	

		
		//let [vote_count, index] = highest_id(aanestykset)
		///if (index !== selected) {
			//setSelected(index)
		//	setHighest(vote_count + 1)
		//	setVotes(votes+1)
		//} else {
		//	setHighest(highest + 1)
		//}
	}

	const push_test = () => {
		setLaskuri(laskuri + 1)

	}
	console.log("highest: " + highest)
	console.log("selected: " + selected)
	console.log("votes: " + votes)

	return (
		<div>
			{props.anecdotes[selected]}<br />
			has {aanestykset[selected]} votes
			<Button name="next anecdote" clb={push_button} vote_clb={() => push_vote(selected)} curr_ptr={selected} />
			<p>
				<h1>Anecdotes with most votes</h1>
				<p>
					{anecdotes[hSelected]}
					<br />
					has {highest} votes
				</p>
			</p>
			<p>
				<Test laskuri={laskuri} name={"fookala"} saato={push_test} />
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

