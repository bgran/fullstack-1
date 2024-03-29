import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	return (
		<h1>{props.course_data["name"]}</h1>
	)

}

const Item = (props) => {
	return (
		<div>
			{props.name}: {props.harkkoja}
		</div>
	)
}

const Content = (props) => {

	return (
		<div>
			{props.course_data["parts"].map((item, index) => (
				<Item name={item["name"]} harkkoja={item["harkkoja"]} key={index} />
			))}
		</div>
	)
}

const Total = (props) => {
	let total = 0
	for (let i=0; i<props.course_data["parts"].length; i++) {
		total += props.course_data["parts"][i]["harkkoja"]
	}
	return (
		<div>
			{total} harkkoja
		</div>
	)
}

const App = () => {
	const course_data = {
		"name": "Half Stack -sovelluskehitys",
		"parts":[
			{"name": "Reacting perusteet", "harkkoja":10},
			{"name": "Tiedonvälitys propseilla", "harkkoja":7},
			{"name": "Kompoenttien tila", "harkkoja":14}
		]
	}


	//const part1 = 'Reactin perusteet'
	//const exercises1 = 10
	//const part2 = 'Tiedonvälitys propseilla'
	//const exercises2 = 7
	//const part3 = 'Komponenttien tila'
	//const exercises3 = 14

	return (
		<div>
			<Header course_data={course_data} />
			<Content course_data={course_data} />
			<Total course_data={course_data} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
