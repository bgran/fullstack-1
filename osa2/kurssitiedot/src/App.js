import React from 'react'
import ReactDOM from 'react-dom'
import Course from './Course'

const Header = (props) => {
        return (
                <h1>{props.course_name}</h1>
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

