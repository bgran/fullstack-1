import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const Statistics = (props) => {
	let g = props.data["good"]
	let n = props.data["neutral"]
	let b = props.data["bad"]

	console.log("g: " + g)
	console.log("n: " + n)
	console.log("b: " + b)
	// YHTEENSA
	let yhteensa = g + n + b
	console.log("Yhteensa: " + yhteensa)

	let laskuri = 0
	for (let i=0; i < g ; i++) {
		laskuri += 1
	}
	for(let i =0; i<n; i++) {
		laskuri += 0
	}
	for(let i=0; i<b; i++) {
		laskuri -= 1
	}

	// KESKIARVO
	let keskiarvo = 0
	if  (yhteensa === 0) {
		keskiarvo = 0
	} else {
		keskiarvo = laskuri/yhteensa
	}
	console.log("Keskiarvo: " + keskiarvo)


	// POSITIIVISIA
	let posi = 0
	if  (yhteensa === 0) {
		posi = 0
	} else {
		posi = (g/yhteensa) * 100
	}
	console.log("Positiivisia: " + posi)
	
	if (g === 0 && n === 0 && b === 0) {
		return (
			<div>Ei yhtään palautetta annettu</div>
		)
	}
	return (
		<div>
			<h1>statistiikka</h1>
		<div>
			hyvä {g}
		</div>
		<div>
			neutraali {n}
		</div>
		<div>
			huono {b}
		</div>
		<div>
			yhteensä {yhteensa}
		</div>
		<div>
			keskiarvo {keskiarvo}
		</div>
		<div>
			positiivisia {posi} %
		</div>
		</div>

	)

}

const Button = (props) => {

	return (
		<div>
		<button onClick={() => props.clb()}>
			{props.name}
		</button>
		</div>
	)

}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const data = {
		"good": good,
		"neutral": neutral,
		"bad": bad
	}

	const sGood = () => {
		//console.log("sGood -->")
		setGood(good + 1)
	}
	const sNeutral = () => {
		//console.log("sNeutral ---->")
		setNeutral(neutral + 1)
	}
	const sBad = () => {
		//console.log("sBad --->")
		setBad(bad+1)
	}

	return (
		<div>
			<h1>Anna palautetta</h1>
				<Button data={data} clb={sGood} name={"hyvä"} />
				<Button data={data} clb={sNeutral} name={"neutraali"} />
				<Button data={data} clb={sBad} name={"huono"} />
		
				<Statistics data={data} />
		</div>
	)

}

ReactDOM.render(<App />, document.getElementById('root'));

