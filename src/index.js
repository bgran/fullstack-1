import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
	return (
		<h1>
			{props.course}
		</h1>
	)
}

const Part = (props) => {
	return (
		<div>
	)		
}

const Content = (props) => {
	return (
		<div>

		</div>
	)
}

const App = () => {
	const course = "Half Stack -sovelluskehitys"
	const kurssit = [
		{"osa":"Reactin perusteet", "tehtavat":10],
		{"osa":"Tiedonvälitys propseilla, "tehtavat":7],
		{"osa":"Komponenttien tila", "tehtavat":14]
	]

	return (
		<div>
			<Header course={course} />
			<Content data={kurssit} />
			<Total data={kurssit}   />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));

