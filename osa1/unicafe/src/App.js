import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const Statistics = (props) => {
	let g = props.data["good"]
	let n = props.data["neutral"]
	let b = props.data["bad"]

	// YHTEENSA
	let yhteensa = g + n + b

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


	// POSITIIVISIA
	let posi = 0
	if  (yhteensa === 0) {
		posi = 0
	} else {
		posi = (g/yhteensa) * 100
	}
	
	if (g === 0 && n === 0 && b === 0) {
		return (
			<div>Ei yhtään palautetta annettu</div>
		)
	}
	return (
		<>
		<h1>statistiikkaa</h1>
		<table>
		<tr>
			<td>
				hyvä
			</td>
			<td>
				{g}
			</td>
		</tr>
		<tr>
		 	<td>
				neutraali
			</td>
			<td>
				{n}
			</td>
		</tr>
		<tr>
			<td>
				huono
			</td>
			<td>
				{b}
			</td>
		</tr>
		<tr>
			<td>
				yhteensä
			</td>
			<td>
				{yhteensa}
			</td>
		</tr>
		<tr>
			<td>
				keskiarvo
			</td>
			<td>
				{keskiarvo}
			</td>
		</tr>
		<tr>
			<td>
				positiivisia
			</td>
			<td>
				{posi} %
			</td>
		</tr>
		</table>
		</>

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
		setGood(good + 1)
	}
	const sNeutral = () => {
		setNeutral(neutral + 1)
	}
	const sBad = () => {
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

export default App;
