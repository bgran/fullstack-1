import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
        return (
                <h1>{props.course_name}</h1>
       )
}

const Part = (props) => {
        return (
                <div>
                        {props.name}: {props.harkkoja}
                </div>
        )
}

const Content = (props) => {

        return (
                <div>
                        {props.course["parts"].map((item, index) => (
                                <Part name={item["name"]} harkkoja={item["exercises"]} key={index} />
                        ))}
                </div>
        )
}

const Total = (props) => {
	const ind = props.ind
	const o = props.course_data

	const o2 = o
	const w_tot = o2["parts"].reduce((a, b) => {
		return a + b["exercises"]
	}, 0 )

        return (
                <div>
                        yhteensä {w_tot} tehtävää
                </div>
        )
}

const Course = (props) => {
	let o = props.course
	let i = props.ind
	return (
		<div>
			<h2>{o["name"]}</h2>
			<Content course={o} />
			<Total course_data={o} ind={i} />
		</div>
	)
}
const Courses = (props) => {
	let o = props.courses
	return (
		<div>
			<Header course_name={"Opetusohjelma"} />
			{o.map((item, index) => (
				<Course course={item} ind={index} />
			)) }
		</div>
	)

}
const App = () => {
	const courses = [
		{
                	"name": "Half Stack -sovelluskehitys",
			id:1,
                	"parts":[
                        	{"name": "Reacting perusteet", "exercises":10, id:1},
                        	{"name": "Tiedonvälitys propseilla", "exercises":7, id:2},
                        	{"name": "Kompoenttien tila", "exercises":14, id:3}
			]
		},
		{
			"name": "Node.js",
			"id"  : 2,
			"parts": [
				{"name": "Routing", "exercises":3, id:1},
				{"name": "Middlewaret", "exercises":7, id:2}
			]
		}
	]


        //const part1 = 'Reactin perusteet'
        //const exercises1 = 10
        //const part2 = 'Tiedonvälitys propseilla'
        //const exercises2 = 7
        //const part3 = 'Komponenttien tila'
        //const exercises3 = 14

        return (
                <div>
			<Courses courses={courses} />
                </div>
		
        )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;

