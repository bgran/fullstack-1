import React, { useState } from 'react'
import ReactDOM from 'react-dom';


const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<div>
			<h1>Anna palautetta</h1>
			<p>
				<button onClick={() => setGood(good + 1)} >hyvä</button><button onClick={() => setNeutral(neutral + 1)} >neutraali</button><button onClick={() => setBad(bad + 1)} >huono</button>
			</p>
			<p>
				<h1>statistiikka</h1>
			</p>
			<p>
				hyvä {good}
			</p>
			<p>
				neutraalli {neutral}
			</p>
			<p>
				huono {bad}
			</p>

		</div>
	)

}

ReactDOM.render(<App />, document.getElementById('root'));

