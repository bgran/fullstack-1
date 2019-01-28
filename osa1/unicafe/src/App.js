import React, { useState } from 'react'
import ReactDOM from 'react-dom';


const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	let yhteensa = good + neutral + bad
	console.log("Yhteensa: " + yhteensa)

	let laskuri = 0
	for(let i =0; i<good; i++) {
		laskuri += 1
	}
	for(let i =0; i<neutral; i++) {
		laskuri += 0

	}
	for(let i =0; i<bad; i++) {
		laskuri -= 1

	}
	let keskiarvo = 0
	if  (yhteensa === 0) {
		keskiarvo = 0
	} else {
		keskiarvo = laskuri/yhteensa
	}
	console.log("Keskiarvo: "+keskiarvo)

	let posi = 0
	if  (yhteensa === 0) {
		posi = 0
	} else {
		posi = (good/yhteensa)* 100
	}
	console.log("posi " + posi)


	return (
		<div>
			<h1>Anna palautetta</h1>
			<p>
				<button onClick={() => setGood(good + 1)} >hyvä</button><button onClick={() => setNeutral(neutral + 1)} >neutraali</button><button onClick={() => setBad(bad + 1)} >huono</button>
			</p>
			<p>
				<h1>statistiikka</h1>
			</p>
			<div>
				hyvä {good}
			</div>
			<div>
				neutraalli {neutral}
			</div>
			<div>
				huono {bad}
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

ReactDOM.render(<App />, document.getElementById('root'));

